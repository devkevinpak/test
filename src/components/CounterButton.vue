<template>
  <div>
    <h1>카운터 애플리케이션</h1>
    <button @click="increment">증가</button>
    <button @click="decrement">감소</button>
    <div>현재 카운트: {{ count }}</div>
    <div>테스트 워드: {{ test }}</div>

  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.getCount
    },
    test() {
      return this.$test.word
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
    }
  }
}
</script>
