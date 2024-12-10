<template>
  <div class="wrapper">
    <div class="container">
      <div class="card">
        <img src="https://picsum.photos/300/200" alt="카드 이미지">
        <div class="content">
          <h2>컨테이너 쿼리 예제</h2>
          <p>컨테이너의 크기에 따라 레이아웃이 변경됩니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  name: 'ContainerQuery'
}
</script>

<style lang="scss" scoped>
$minWidth: var(--min-width);
$maxWidth: var(--max-width);

@mixin testbreakpoint ($device) {
  @if $device == 'desktop' {
    @media (min-width: $minWidth) and (max-width: $maxWidth) {
      @content;
    }
  } @else if $device == 'mobile' {
    @media (max-width: $minWidth) {
      @content;
    }
  }
}
.wrapper {
  padding: 20px;
  overflow: auto;
  min-width: 200px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  color: #000;
  resize: horizontal;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.card img {
  width: 40%;
  height: auto;
}

.content {
  padding: 20px;
  width: 60%;
}

@include testbreakpoint() {
  .wrapper {
    background-color: #000;
    color: #fff;
  }
  .card {
    display: flex;
    align-items: center;
  }
  .card img {
    width: 40%;
    height: auto;
  }
  .content {
    padding: 20px;
    width: 60%;
  }
}

</style>
