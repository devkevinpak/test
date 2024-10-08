<template>
  <div>
    <ul>
      <li
        v-for="(index) in 16"
        :key="index"
        class="menu_item"
      >
        <div class="item_name" @click.stop="test(index)">sample{{ index }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {

  },
  methods: {
    test () {
      console.log('wefawef')
    },
    clickMenu(idx) {
      console.log(idx)
    }
  }
}
</script>
<style lang="scss" scoped>
li.menu_item {
  & + li {
    margin-top: 8px;
  }
  div.item_name {
    width: 100%;
    padding: 8px;
    border:1px solid #fff;
  }
}
</style>