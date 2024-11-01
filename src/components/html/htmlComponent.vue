
<template>
  <div ref="insertHtml" :class="className" class="insertHtml"></div>
</template>
<script>
export default {
  name: "htmlComponent",
  props: {
    className: {
      default: null
    },
    content: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // allowedTags: ['span', 'br'],
    }
  },
  mounted() {
    this.renderHtml(this.content)
  },
  methods: {
    renderHtml(html) {
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = html
      Array.from(tempDiv.childNodes).forEach(node => {
        this.$refs.insertHtml.appendChild(node)
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.line-paragraph {
  margin-bottom: 2.6rem;
}
</style>