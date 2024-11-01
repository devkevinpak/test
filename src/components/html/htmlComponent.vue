
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
    },
    scopeId: {
      type: String
    }
  },
  data() {
    return {
      allowedTags: ['SPAN','BR','DIV']
    }
  },
  mounted() {
    this.renderHtml(this.content)
  },
  methods: {
    // ~ first child Node
    renderHtml(html) {
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = html
      Array.from(tempDiv.childNodes).forEach(node => {
        console.log(node.tagName)
        // 단순 텍스트 일 경우 추가
        if (node.nodeType === Node.TEXT_NODE) {
          this.$refs.insertHtml.appendChild(node)
        }
        // 허용된 태크만 추가
        if (node.nodeType === Node.ELEMENT_NODE && this.allowedTags.includes(node.tagName)) {
          // 해당위치의 scope id를 동일속성으로 추가(해당위치에서 scss컨트롤이 가능해짐)
          node.setAttribute(this.scopeId, '')
          this.$refs.insertHtml.appendChild(node)
        }
      })
    }
    // 돔 전체분석
    // renderHtml(html) {
    //   const tempDiv = document.createElement('div')
    //   tempDiv.innerHTML = html

    //   const processNode = (node) => {
    //     // 단순 텍스트일 경우 추가
    //     if (node.nodeType === Node.TEXT_NODE) {
    //       this.$refs.insertHtml.appendChild(node.cloneNode())
    //       return
    //     }

    //     // 허용된 태그만 추가
    //     if (node.nodeType === Node.ELEMENT_NODE && this.allowedTags.includes(node.tagName)) {
    //       // 해당 위치의 scope id를 동일 속성으로 추가 (해당 위치에서 scss 컨트롤이 가능해짐)
    //       const newNode = node.cloneNode(false)

    //       newNode.setAttribute(this.scopeId, '')

    //       // 자식 노드를 재귀적으로 처리하여 허용된 태그만 추가
    //       Array.from(node.childNodes).forEach(childNode => {
    //         const processedChild = processNode(childNode)
    //         if (processedChild) {
    //           newNode.appendChild(processedChild)
    //         }
    //       })

    //       this.$refs.insertHtml.appendChild(newNode)
    //       return newNode
    //     }

    //     // 허용되지 않은 태그는 null 반환
    //     return null
    //   }

    //   Array.from(tempDiv.childNodes).forEach(node => {
    //     processNode(node)
    //   })
    // }
  }
}
</script>
