<template>
  <div class="myIntroduce">
  <el-card class="myCard" >
    <div slot="header" class="clearfix" style="font-weight: bold">
      <span>William</span>
    </div>
    <div style="font-weight: bold" v-html="obj.output+'<img width=\'30px\' src=\'http://wilsoncz.gitee.io//myblog/emoji/c3335c0ely1glnkcmlu39g206o06otxu.gif\' />'"></div>
  </el-card>
    <el-card class="myCard" style="background: #ccffcc;margin-top: 10px">
      <div slot="header" class="clearfix" style="font-weight: bold">
        <span>致 谢</span>
      </div>
      感谢reco_luan提供主题支持，另外感谢ZNOTE作者zhāngpéngjūn提供页面开发灵感。
    </el-card>
  </div>
</template>

<script>
import EasyTyper from 'easy-typer-js'
export default {
  name: "Introduction",
  data() {
    return {
      obj: {
        output: 'hello',
        isEnd: false,
        speed: 150,
        singleBack: false,
        sleep: 100,
        type: 'normal',
        backSpeed: 40,
        sentencePause: false
      },
      input:'个人介绍：大家好，我是来自广东惠州的小伙，喜欢运动和各种活动，牛客上的牛油都叫我中南小菜鸡'+'</br>' +
          '爱好：平时笔记喜欢阅读和coding</br>' +
          '毕业院校：中南大学硕士  (有校友可以找我玩耍噢)</br> ' +
          ''
    }
  },
  mounted() {
    const typed = new EasyTyper(this.obj, this.input,null,null)
  }
}
</script>

<style lang="stylus" scoped>
.myIntroduce {
  width: 100%;
}
.myCard{
  border-radius 20px
  background: #ffcccc;
}
</style>
