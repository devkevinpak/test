<template>
  <div>
    <div class="explain">
      <h1>문제</h1>
      <ul>
        <li>기본 세팅문제</li>
        <li>제플린 그대로 사용</li>
        <li>레이아웃 설정(자식요소가 부모요소보다 큰경우 존재)</li>
      </ul>
      <h1>반응형 처리시</h1>
      <ul>
        <li>공통으로 사용되는 프로젝트 테마컬러,사이즈,단위 체크</li>
      </ul>
      <h1>REM</h1>
      <ul>
        <li>font-size: 62.5%; /* 62.5% of the default 16px = 10px */</li>
        <li>
          <ul>
            <li>16px → 1.6rem</li>
            <li>24px → 2.4rem</li>
            <li>32px → 3.2rem</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          Column
        </div>
        <div class="col">
          Column
        </div>
        <div class="col">
          Column
        </div>
      </div>
    </div>

    <h1 class="mb32">Grid Layout
      <div class="btn" @click="randomWidth">random width(only XL size)</div>
      <div class="btn" @click="randomOrder">random Order</div>
      <div class="btn" @click="changeGapMethod">change</div>
    </h1>

    <div ref="gridWrap">
      <h3>width</h3>
      <div class="row row_gap_14 row_mb_14">
        <div class="col col_sm_12 col_md_5 col_lg_7 col_xl_12">
          <div class="box box1">box1</div>
        </div>
        <div class="col col_sm_12 col_md_7 col_lg_5 col_xl_4">
          <div class="box box2">box2</div>
        </div>
        <div class="col col_sm_12 col_md_2 col_lg_6 col_xl_4">
          <div class="box box1">box3</div>
        </div>
        <div class="col col_sm_12 col_md_10 col_lg_6 col_xl_4">
          <div class="box box2">box4</div>
        </div>
        <div class="col col_sm_12 col_md_2 col_lg_4 col_xl_3">
          <div class="box box1">box5</div>
        </div>
        <div class="col col_sm_12 col_md_4 col_lg_4 col_xl_3">
          <div class="box box2">box6</div>
        </div>
        <div class="col col_sm_12 col_md_6 col_lg_4 col_xl_3">
          <div class="box box3">box7</div>
        </div>
        <div class="col col_sm_12 col_md_4 col_lg_3 col_xl_3">
          <div class="box box1">box8</div>
        </div>
        <div class="col col_sm_12 col_md_2 col_lg_3 col_xl_5">
          <div class="box box2">box9</div>
        </div>
        <div class="col col_sm_12 col_md_4 col_lg_3 col_xl_7">
          <div class="box box3">box10</div>
        </div>
        <div class="col col_sm_12 col_md_2 col_lg_3 col_xl_6">
          <div class="box box4">box11</div>
        </div>
        <div class="col col_sm_12 col_md_1 col_lg_2 col_xl_6">
          <div class="box box1">box12</div>
        </div>
        <div class="col col_sm_12 col_md_3 col_lg_2 col_xl_1">
          <div class="box box2">box13</div>
        </div>
        <div class="col col_sm_12 col_md_1 col_lg_2 col_xl_2">
          <div class="box box3">box14</div>
        </div>
        <div class="col col_sm_12 col_md_3 col_lg_2 col_xl_3">
          <div class="box box4">box15</div>
        </div>
        <div class="col col_sm_12 col_md_1 col_lg_2 col_xl_4">
          <div class="box box5">box16</div>
        </div>
        <div class="col col_sm_12 col_md_3 col_lg_2 col_xl_5">
          <div class="box box6">box17</div>
        </div>
        <div class="col col_sm_12 col_md_12 col_lg_1">
          <div class="box box1">box18</div>
        </div>
        <div class="col col_sm_12 col_md_6 col_lg_1">
          <div class="box box2">box19</div>
        </div>
        <div class="col col_sm_12 col_md_6 col_lg_1">
          <div class="box box3">box20</div>
        </div>
        <div class="col col_sm_12 col_md_12 col_lg_1">
          <div class="box box4">box21</div>
        </div>
        <div class="col col_sm_12 col_md_6 col_lg_1">
          <div class="box box5">box22</div>
        </div>
        <div class="col col_sm_12 col_md_6 col_lg_1">
          <div class="box box6">box23</div>
        </div>
        <div class="col col_sm_12 col_md_12 col_lg_1">
          <div class="box box1">box24</div>
        </div>
        <div class="col col_sm_12 col_md_6 col_lg_1">
          <div class="box box2">box25</div>
        </div>
        <div class="col col_sm_12 col_md_6 col_lg_1">
          <div class="box box3">box26</div>
        </div>
        <div class="col col_sm_12 col_md_12 col_lg_1">
          <div class="box box4">box27</div>
        </div>
        <div class="col col_sm_12 col_md_6 col_lg_1">
          <div class="box box5">box28</div>
        </div>
        <div class="col col_sm_12 col_md_6 col_lg_1">
          <div class="box box6">box29</div>
        </div>
      </div>
    </div>
    <div>
      <h3>Gap > gap6</h3>
      <div class="row row_gap_6">
        <div class="col col_4">
          <div class="box box1">box1</div>
        </div>
        <div class="col col_4">
          <div class="box box2">box1</div>
        </div>
        <div class="col col_4">
          <div class="box box3">box2</div>
        </div>
      </div>
      <h3>Gap > gap14</h3>
      <div class="row row_gap_14">
        <div class="col col_4">
          <div class="box box1">box1</div>
        </div>
        <div class="col col_4">
          <div class="box box2">box2</div>
        </div>
        <div class="col col_4">
          <div class="box box3">box3</div>
        </div>
      </div>
      <h3>Gap > gap22</h3>
      <div class="row row_gap_22">
        <div class="col col_4">
          <div class="box box1">box1</div>
        </div>
        <div class="col col_4">
          <div class="box box2">box2</div>
        </div>
        <div class="col col_4">
          <div class="box box3">box3</div>
        </div>
      </div>
      <h3>Gap > gap30</h3>
      <div class="row row_gap_30">
        <div class="col col_4">
          <div class="box box1">box1</div>
        </div>
        <div class="col col_4">
          <div class="box box2">box2</div>
        </div>
        <div class="col col_4">
          <div class="box box3">box3</div>
        </div>
      </div>
      <h3>Gap > gap38</h3>
      <div class="row row_gap_38">
        <div class="col col_4">
          <div class="box box1">box1</div>
        </div>
        <div class="col col_4">
          <div class="box box2">box2</div>
        </div>
        <div class="col col_4">
          <div class="box box3">box3</div>
        </div>
      </div>
      <h3>Gap > gap46</h3>
      <div class="row row_gap_46">
        <div class="col col_4">
          <div class="box box1">box1</div>
        </div>
        <div class="col col_4">
          <div class="box box2">box2</div>
        </div>
        <div class="col col_4">
          <div class="box box3">box3</div>
        </div>
      </div>
      <h3>Gap > gap54</h3>
      <div class="row row_gap_54">
        <div class="col col_4">
          <div class="box box1">box1</div>
        </div>
        <div class="col col_4">
          <div class="box box2">box2</div>
        </div>
        <div class="col col_4">
          <div class="box box3">box3</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GridLayout",
  components: {
  },
  computed: {

  },
  methods: {
    randomOrder () {
      const gridNodes = this.$refs.gridWrap.querySelectorAll('.col')
      const gridNodesLength = gridNodes.length
      gridNodes.forEach(node => {
        const randomOrder = this.getRandomOrderNumber(gridNodesLength)
        node.style.order = randomOrder
      })
    },
    randomWidth () {
      const gridNodes = this.$refs.gridWrap.querySelectorAll('.col')
      gridNodes.forEach(node => {
        const classList = Array.from(node.classList)
        classList.forEach(className => {
          if (/^col_xl_\d+$/.test(className)) {
            const newClassName = `col_xl_${this.getRandomWidthNumber()}`
            node.classList.replace(className, newClassName)
          }
        })
      })
      // gridArr.map(grid => grid.replace(/\.col_lg_\d+/g, ''))
    },
    changeGapMethod () {
      const gridNodes = this.$refs.gridWrap.querySelectorAll('.row')
      gridNodes.forEach(node => {
        const classList = Array.from(node.classList)
        classList.forEach(className => {
          if (/^row_gap_\d+$/.test(className)) {
            const gapNumber = className.match(/row_gap_(\d+)/)[1]
            const newClassName = `row_flex_gap_${gapNumber}`
            node.classList.replace(className, newClassName)
          }
          if (/^row_flex_gap_\d+$/.test(className)) {
            const gapNumber = className.match(/row_flex_gap_(\d+)/)[1]
            const newClassName = `row_gap_${gapNumber}`
            node.classList.replace(className, newClassName)
          }
        })
      })
      // gridArr.map(grid => grid.replace(/\.col_lg_\d+/g, ''))
    },
    getRandomWidthNumber () {
      return Math.floor(Math.random() * 4) + 1;
    },
    getRandomOrderNumber(length) {
      return Math.floor(Math.random() * length) + 1;
    }
  }
}
</script>
<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 10px;
  border: 1px solid rgba(255,255,255,.4);
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}
.box {
  width:100%;
  height:100px;
  padding: 8px 16px;

  &.box1 {
    background-color: #78dbdf;
  }
  &.box2 {
    background-color: #f37a23;
  }
  &.box3 {
    background-color: #5a5aff;
  }
  &.box4 {
    background-color: #f61c1c;
  }
  &.box5 {
    background-color: #41e641;
  }
  &.box6 {
    background-color: #c756ff;
  }
}
</style>