<template>
  <div id="app">
    <div class="test_vuex">
      <div>
        <h1>카운터 애플리케이션</h1>
        <button @click="increment">증가</button>
        <button @click="decrement">감소</button>
        <div>현재 카운트: {{ count }}</div>
      </div>
    </div>

    <div class="test_card3">
      test card
    </div>
    <div class="test_card2">
      test card
    </div>
    <div class="test_card">
      <div class="inner">
        test card
      </div>
    </div>

    <div class="d_card_outer">
      <div class="d_card">
        <div class="inner">
          엣헴~
        </div>
      </div>
    </div>
    <div class="d_list">
      <ul>
        <li v-for="(list, idx) in testLists" :key="idx" @click="selectedList = idx" :class="{selected: selectedList === idx}">
          <button type="button"><i class="ic"></i><span class="buttonName">{{list}}</span></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      testLists : ['스포키 LIVE', '야구', '해외축구', '배구', '당구'],
      selectedList : 0
    }
  },
  computed: {
    count() {
      return this.$store.getters.getCount;
    }
  },
  mounted () {
  },
}
</script>

<style lang="scss">
* {
  padding:0;
  margin:0;
}
*, *:after, *:before {
  box-sizing: border-box;
}
ul {
  list-style: none;
}
#app {
  padding:16px;
  color:#fff;
  background-color:#05060b;
}
.test_card3 {
    position: relative;
    width: 70px;
    height: 70px;
    margin-bottom: 40px;
    border: 3px solid transparent;
    border-radius: 50%;
    background-image: linear-gradient(#fff, #000), linear-gradient(to right, red 0%,  orange 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
}
.test_card2 {
    position: relative;
    width: 70px;
    height: 70px;
    margin-bottom: 40px;
    background-color: #fff;
    border: 3px solid transparent;
    border-radius: 100%;
    border-image: linear-gradient(to right, red 0%, orange 100%);
    border-image-slice: 1;
}
.test_card {
  position:relative;
  overflow: hidden;
  border-radius: 16px;
  background-color: #58837b;
  
  &::before {
    content:"";
    width:100px;
    height:100px;
    position:absolute;
    display: block;
    background: radial-gradient(circle ,rgba(255,255,255,1), rgba(0,0,0,0) 75%);
    animation: light_top 4s forwards infinite;
  }
  &::after {
    content:"";
    width:100px;
    height:100px;
    position:absolute;
    display: block;
    background: radial-gradient(circle ,rgba(255,255,255,1), rgba(0,0,0,0) 75%);
    animation: light_bottom 4s forwards infinite;
  }
  .inner{
    position:relative;
    text-align: center;
    width:100%;
    padding:100px 0;
    border-radius: 16px;
    border:4px solid transparent;
    background-clip: padding-box;
    background-color:#ddd;
    z-index: 10;
  }
}
.d_card_outer {
  position:relative;
  width:250px;
  height:320px;
  margin:0 30px;
  &::after {
    content:"";
    position:absolute;
    top:calc(100% - 55px);
    left: -20%;
    display: block;
    width: 140%;
    height: 100px;
    background: radial-gradient(ellipse, rgba(255, 255, 255, 0.6), rgba(237, 210, 255, 0.3), rgba(255,255,255, 0.1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 71%);
    animation: move_shadow 3s forwards infinite;
    opacity: 0;
  }
}
.d_card {
  position:relative;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  margin-top:100px;
  overflow: hidden;
  padding:3px;
  background-color:rgba(255,255,255,.5);
  
  .inner {
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    background-color:#222;
    border-radius: 15px;
    overflow: hidden;
    z-index: 10;
  }
  &::before {
    content:"";
    width:100px;
    height:100px;
    position:absolute;
    display: block;
    background: radial-gradient(circle ,rgba(255,255,255,1), rgba(0,0,0,0) 75%);
    animation: light_top 3s forwards infinite;
  }
  &::after {
    content:"";
    width:100px;
    height:100px;
    position:absolute;
    display: block;
    background: radial-gradient(circle ,rgba(255,255,255,1), rgba(0,0,0,0) 75%);
    animation: light_bottom 3s forwards infinite;
  }
}

@keyframes light_top {
  0% { top:50%; left:calc(100% - 50px); }
  25% { top:calc(0% - 50px); left:calc(100% - 50px); }
  100% { top:calc(0% - 50px); left:calc(33% - 50px);}
}
@keyframes light_bottom {
  0% { bottom:50%; right:calc(100% - 50px); }
  25% { bottom:calc(0% - 50px); right:calc(100% - 50px); }
  100% { bottom:calc(0% - 50px); right:calc(33% - 50px);}
}
@keyframes move_shadow {
  0% { opacity: 0; }
  100% { opacity: 1; }
}


.d_list {
  width:240px;
  margin-top:100px;
  background-color:#222426;

  ul {
    

    li {
      position:relative;

      button {
        position:relative;
        display: block;
        width:100%;
        padding: 12px 16px;
        font-size:18px;
        font-weight: bold;
        color:rgba(255,255,255,.4);
        border: none;
        text-align: left;
        background:transparent;

        i.ic {
          display: inline-block;
          vertical-align: middle;
          width: 40px;
          height:40px;
          background-color: #888;
          opacity: .6;
        }
        .buttonName {
          display: inline-block;
          vertical-align: middle;
          padding-left:16px;
        }

        &::before,
        &::after {
          content:"";
          display:block;
          position:absolute;
          width:100%;
          height:2px;
          left:0;
          transform: scale(0);
        }
        &::before {
          top:0;
          transform-origin: 30%;
          background: linear-gradient(to right, rgba(234, 209, 179, 0), rgba(234, 209, 179, 0.3), #ead1b3,#fff,#ead1b3, rgba(234, 209, 179, 0.6), rgba(234, 209, 179, 0.01), rgba(255, 255, 255, 0), rgba(234, 209, 179, 0));
        }
        &::after {
          bottom:0;
          transform-origin: 70%;
          background: linear-gradient(to left, rgba(234, 209, 179, 0), rgba(234, 209, 179, 0.3), #ead1b3,#fff,#ead1b3, rgba(234, 209, 179, 0.6), rgba(234, 209, 179, 0.01), rgba(255, 255, 255, 0), rgba(234, 209, 179, 0));
        }
      }
      
      

      &::after{
        content:"";
        display: block;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-image:linear-gradient(to right, 
        rgba(141, 116, 86, 0),
        rgba(141, 116, 86, 0.7),
        rgba(141, 116, 86, 0));
        color:rgba(255,255,255,1);
        transform-origin: 50%;
        transform:scale(0, 1);
        z-index: 0;
      }
      &.selected {
        &::after{
          transform:scale(1);
          transition: all .2s;
        }
        button {
          color:#fff;
          z-index: 3;

          &::before,
          &::after {
            transform: scale(1);
            transition: all .6s;
          }
        }
      }
      & + li {
        margin-top:12px;
      }
    }
  }
}
</style>
