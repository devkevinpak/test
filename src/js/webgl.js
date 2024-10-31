// WebGLApp.js
export default class WebGLApp {
  constructor(canvasSelector) {
    this.area = document.querySelector(canvasSelector);
    this.canvas = document.createElement('canvas')
    this.area.appendChild(this.canvas)
    this.gl = this.canvas.getContext('webgl');
    if (!this.gl) {
      console.error('WebGL not supported!');
      return;
    }
    this.program = null
    this.positionAttributeLocation = null
    this.resolutionUniformLocation = null
    this.colorUniformLocation = null
    this.positionBuffer = null

    // positionBuffer(ARRAY_BUFFER)의 데이터를 꺼내오는 방법을 속성에 지시
    this.size = 2;          // 반복마다 2개의 컴포넌트
    this.type = this.gl.FLOAT;   // 데이터는 32비트 부동 소수점
    this.normalize = false; // 데이터 정규화 안 함
    this.stride = 0;        // 0 = 다음 위치를 가져오기 위해 반복마다 size * sizeof(type) 만큼 앞으로 이동
    this.offset = 0;        // 버퍼의 처음부터 시작
  }
  resizeCanvas() {
    if (resizeCanvasToDisplaySize(this.canvas)) {
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
      return shader;
    }
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
  }

  createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
      return program;
    }
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }

  clearCanvas (gl) {
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  // setup GLSL program
  setupProgram() {
    // // Setup WebGL rendering context, shaders, and draw something
    // // 사용가능 속성타입 : float, vec2, vec3, vec4, mat2, mat3, mat4
    // const vertexShaderSource = `
    //   attribute vec4 a_position;
    //   void main() {
    //     gl_Position = a_position;
    //   }
    // `;
    // const fragmentShaderSource = `
    //   void main() {
    //     gl_FragColor = vec4(1, 0, 0.5, 1);
    //   }
    // `;
    const vertexShaderSource = `
      attribute vec4 a_position; // 정점 위치를 받는 attribute
      uniform vec2 u_resolution; // 화면 해상도를 받는 uniform
      void main() {
        vec2 zeroToOne = a_position.xy / u_resolution; // 0과 1 사이의 값으로 변환

        vec2 zeroToTwo = zeroToOne * 2.0; // 0과 2 사이의 값으로 변환

        vec2 clipSpace = zeroToTwo - 1.0; // -1과 1 사이의 값으로 변환

        gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1); // clip space로 위치 설정
      }
    `;
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec4 u_color;
      void main() {
        gl_FragColor = u_color;
      }
    `;
    // shader 생성
    const vertexShader = this.createShader(this.gl, this.gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(this.gl, this.gl.FRAGMENT_SHADER, fragmentShaderSource);
    // shader 생성 > program에 연결
    this.program = this.createProgram(this.gl, vertexShader, fragmentShader);

    // 데이터 제공(GLSL 프로그램에 대한 유일한 입력은 속성인 a_position)하기위헤 프로그램속성 속성위치 검색
    this.positionAttributeLocation = this.gl.getAttribLocation(this.program, 'a_position');

    // uniform 위치를 검색
    this.resolutionUniformLocation = this.gl.getUniformLocation(this.program, 'u_resolution');
    this.colorUniformLocation = this.gl.getUniformLocation(this.program, "u_color");

    // 속성위치는 렌더링이아닌 초기화하는동안 해야하며 속성은 버퍼에서 데이터를 가져오기떄문에 버퍼를생성
    this.positionBuffer = this.gl.createBuffer();
  }

  // setPosition() {
  //   const positions = [
  //     10, 20,
  //     80, 20,
  //     10, 30,
  //     10, 30,
  //     80, 20,
  //     80, 30,
  //   ];
  //   // ARRAY_BUFFER 바인드 포인트에 할당했기때문에 위의 positionBuffer사용
  //   // new Float32Array(positions) : 새로운 32비트 부동 소수점 배열을 생성 > positions에서 값을 복사 > gl.bufferData는 데이터를 GPU의 positionBuffer로 복사
  //   // gl.STATIC_DRAW 데이터를 어떻게 사용할 것인지를 webgl에 알림, "gl.STATIC_DRAW"의 경우 데이터가 많이 바뀌지 않을것 같다는 의미
  //   this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);
  // }

  render() {
    // 프로그램 세팅
    this.setupProgram()
    // 캔버스 리사이즈 발생시 작동
    this.resizeCanvas()
    // 캔버스 크기전달
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    // 캔버스 초기화
    this.clearCanvas(this.gl)
    // 프로그램사용
    this.gl.useProgram(this.program);
    // 속성을 활성화 (위에서 설정한 버퍼에서 데이터를 가져와 셰이더의 속성에 제공하는 방법을 WebGL에 알림)
    this.gl.enableVertexAttribArray(this.positionAttributeLocation);
    // 위치 버퍼 할당
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    // positionBuffer(ARRAY_BUFFER)의 데이터를 꺼내오는 방법을 속성에 지시
    this.gl.vertexAttribPointer(this.positionAttributeLocation, this.size, this.type, this.normalize, this.stride, this.offset);

    this.gl.uniform2f(this.resolutionUniformLocation, this.gl.canvas.width, this.gl.canvas.height);

    // random rectangles in random colors
    for (var ii = 0; ii < 10; ++ii) {
      setRectangle(
          this.gl, randomInt(300), randomInt(300), randomInt(300), randomInt(300));

      // Set a random color.
      this.gl.uniform4f(this.colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);

      // Draw the rectangle.
      this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }
    // this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
  }
}
// webglUtils :: 외부 라이브러리인 webgl-utils.js에 정의된 함수
// webglUtils.resizeCanvasToDisplaySize(gl.canvas) 함수는 WebGL의 캔버스를 디스플레이 크기에 맞추어 리사이즈하는 데 사용
// 라이브러리 안쓰기때문에 커스텀
function resizeCanvasToDisplaySize(canvas) {
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;

  // canvas의 크기가 실제 표시된 크기와 다를 때, 캔버스 크기를 조정
  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
    return true; // 크기가 변경되었다는 것을 의미
  }
  return false; // 크기가 변경되지 않음
}

// 0부터 -1사이 임의의 정수 반환
function randomInt(range) {
  return Math.floor(Math.random() * range);
}

// 사각형을 정의한 값들로 버퍼 채우기
function setRectangle(gl, x, y, width, height) {
  let x1 = x;
  let x2 = x + width;
  let y1 = y;
  let y2 = y + height;

  // 참고: gl.bufferData(gl.ARRAY_BUFFER, ...)는 ARRAY_BUFFER 바인드 포인트에 바인딩된 버퍼에 영향을 주지만 지금까지는 하나의 버퍼만 있었습니다.
  // 두 개 이상이라면 원하는 버퍼를 ARRAY_BUFFER에 먼저 바인딩해야 합니다.
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      x1, y1,
      x2, y1,
      x1, y2,
      x1, y2,
      x2, y1,
      x2, y2
    ]),
    gl.STATIC_DRAW
  );
}