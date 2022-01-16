<template>
  <div v-html="obj.output"></div>
</template>
<script>
import EasyTyper from 'easy-typer-js'
export default {
  name: 'Typing',
  data() {
    return {
      obj: {
        output: '',
        isEnd: false,
        speed: 100,
        singleBack: false,
        sleep: 100,
        type: 'normal',
        backSpeed: 40,
        sentencePause: false
      },
      input:['第一句话1111111','第二句话22222','第三句话333','第四句话']
    }
  },
  mounted() {
    const typed = new EasyTyper(this.obj, this.input,null,null)
  }
}
</script>
