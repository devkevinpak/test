<template>
  <div>
    <h1>Grid Layout</h1>

  </div>
</template>
<script>
export default {
  name: "GridLayoutCustom",
  components: {
  },
  computed: {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
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