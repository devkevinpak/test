<template>
  <div>
    <h3>NeedLogin</h3>
    <div class="">git push test try 5</div>
    <button @click="changeLogin">로그인</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeLogin() {
      window.localStorage.setItem('isLogin', true)
      this.$store.commit('isLogin', true)
    }
  }
}
</script>
