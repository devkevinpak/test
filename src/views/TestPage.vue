<template>
  <div class="grid-test-step">
    <div class="grid-test-frame grid-test-frame-3" @resize="onResize">
      <div class="frame-info">
        {{ innerWidth }}px / {{ innerHeight }}px
      </div>
      <div class="body">
        <div class="g-menu">
          <nav>
            <div class="logo">logo</div>
            <ul>
              <li>home</li>
              <li>영화</li>
              <li>TV<br />다시보기</li>
              <li>MY</li>
              <li>설정</li>
            </ul>
          </nav>
        </div>
        <div class="g-content">
          <div class="ct-header">
            <div class="btn-wrap">
              <button class="btn-back">뒤로가기</button>
            </div>
            <div class="tx-title">설정</div>
          </div>
          <div class="ct-body">
            <div class="setting-list">
              <ul>
                <li>공지사항</li>
                <li>서비스정보</li>
              </ul>
            </div>
            <div class="setting-content">
              <div class="tx-info" data-setting="notice">
                <div class="form-table form-table-notice">
                  <div class="table-header">
                    <div>제목</div>
                    <div>등록일</div>
                  </div>
                  <div class="table-body">
                    <div>
                      <div class="tx-title">신규 콘텐츠 업데이트 알림</div>
                      <div class="tx-date">2024.11.28</div>
                      <div class="tx-detail">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        <!-- <img src="@/assets/images/test_img.png" alt="test"> -->
                      </div>
                    </div>
                    <div>
                      <div class="tx-title">시스템 점검 공지</div>
                      <div class="tx-date">2024.11.28</div>
                      <div class="tx-detail">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        <!-- <img src="@/assets/images/test_img.png" alt="test"> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tx-info" data-setting="service">
                <ul>
                  <li>버전 정보 : 11.2.2</li>
                  <li>무료 사용 기간 : 24.11.25까지<br />
                    무료 사용기간 종료 후 자동으로 해지되며, <br />
                    토요타 커텍트 어플 > 부가서비스 가입 화면에서 서비스를 다시 신청하실 수 있습니다.</li>
                  <li>고객센터 : </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      innerWidth: 0,
      innerHeight: 0,
      resizeObserver: null
    }
  },
  computed: {

  },
  methods: {
    onResize(entries) {
      for (let entry of entries) {
        this.innerWidth = Math.round(entry.contentRect.width);
        this.innerHeight = Math.round(entry.contentRect.height);
      }
    },
    initResizeObserver() {
      const frame2 = this.$el.querySelector('.grid-test-frame-2');
      this.resizeObserver2 = new ResizeObserver(this.onResize);
      this.resizeObserver2.observe(frame2);

      const frame3 = this.$el.querySelector('.grid-test-frame-3');
      this.resizeObserver3 = new ResizeObserver(this.onResize);
      this.resizeObserver3.observe(frame3);
    }
  },
  mounted() {
    this.initResizeObserver();
  },
  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
</script>
<style lang="scss" scoped>
html {
  font-size: 62.5%; // font-size: 62.5%; /* 62.5% of the default 16px = 10px */
}
.grid-test-step {
  .box {
    width: 100%;
    height: 100%;
  }
  .bg-color {
    padding: 1rem;
    text-align: center;
    &.default  {
      background-color: #f0f0f0;
      color: #000;
    }
    &.red  {
      background-color: #ff0000;
      color: #fff;
    }
    &.green  {
      background-color: #00ff00;
      color: #fff;
    }
    &.blue  {
      background-color: #0000ff;
      color: #fff;
    }
    &.yellow  {
      background-color: #ffff00;
      color: #000;
    }
    &.purple  {
      background-color: #ff00ff;
      color: #fff;
    }
    &.orange  {
      background-color: #ffa500;
      color: #fff;
    }
    &.pink  {
      background-color: #ffc0cb;
      color: #000;
    }
    &.brown  {
      background-color: #a52a2a;
      color: #fff;
    }
    &.gray  {
      background-color: #808080;
      color: #000;
    }
    &.black  {
      background-color: #000;
      color: #fff;
    }
    &.white  {
      background-color: #fff;
      color: #000;
    }
    &.transparent  {
      background-color: transparent;
      color: #000;
    }
  }
}
.grid-test-frame {
  position: relative;
  font-size: 1.3rem;
  border: 1px solid #ccc;
  .frame-info {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    background-color: rgba(255, 0, 0, 0.2);
    border:1px solid red;
  }
}
.grid-test-frame-3 {
  min-height: auto;
  padding: 0;
  .body {
    display: grid;
    grid-template-columns: 100px repeat(2, 1fr); // 첫번쨰 100px 두번째 1fr 세번째 1fr
    .g-menu {
      grid-column: 1 / 2; // 1 2 사이의 첫번째 칼럼선택
      padding: 1rem;
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 8px;
        text-align: center;
        background-color: #3a0303;
        margin: 0 auto;
      }
      nav {
        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-top: 1rem;
          li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 8px;
            text-align: center;
            background-color: #6d1f1f;
            + li {
              margin-top: 1rem;
            }
          }
        }
      }
    }
    .g-content {
      grid-column: 2 / 4; //( 2 여기 3 여기 4)  2/4사이의 두,세번째 칼럼선택
      display: flex;
      flex-direction: column;
      border-left: 1px solid #ccc;
      .ct-header{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-bottom: 1px solid #ccc;
      }
      .ct-body {
        flex: 1;
        overflow: hidden;
        display: flex;

        > div {
          flex: 0 0 auto;
          width: 50%;
        }

        .setting-list {
          padding: 1rem;
          ul {
            display: flex;
            flex-direction: column;
            li {
              font-size: 1.2rem;
              padding: 1rem;
              background-color: transparent;
              & + li {
                border-top: 1px solid #ccc;
              }
            }
          }
        }
        .setting-content {
          padding: 1rem;
          border-left: 1px solid #ccc;
        }
      }
    }
  }
}

.test_row {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: 0 -15px;
  .test_col {
    padding: 0 15px;
  }
}
@media screen and (max-width: 767px) {
  .test_col_xs_2 {
    width: 16.666666%;
  }
  .test_col_xs_3 {
    width: 33.333333%;
  }
  .test_col_xs_4 {
    width: 25%;
  }
  .test_col_xs_6 {
    width: 50%;
  }
  .test_col_xs_12 {
    width: 100%;
  }
}
@media screen and (min-width: 768px) {
  .test_col_sm_2 {
    width: 16.666666%;
  }
  .test_col_sm_3 {
    width: 33.333333%;
  }
  .test_col_sm_4 {
    width: 25%;
  }
  .test_col_sm_6 {
    width: 50%;
  }
}
@media screen and (min-width: 992px) {
  .test_col_md_2 {
    width: 16.666666%;
  }
  .test_col_md_3 {
    width: 33.333333%;
  }
  .test_col_md_4 {
    width: 25%;
  }
  .test_col_md_6 {
    width: 50%;
  }
}
@media screen and (min-width: 1200px) {
  .test_col_lg_2 {
    width: 16.666666%;
  }
  .test_col_lg_3 {
    width: 33.333333%;
  }
  .test_col_lg_4 {
    width: 25%;
  }
  .test_col_lg_6 {
    width: 50%;
  }
}
</style>
