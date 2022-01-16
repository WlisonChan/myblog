<template>
<div>
  <div class="flexBox" v-for="(item,index) in $themeConfig.collectData" :key="index">
<!--    <img :src="$withBase(item)" alt="">-->
    <h3 style="width: 100%;display: block;text-align: center">{{item.title}}</h3>
      <img v-for="(subItem,subIndex) in item.file"
           :key="subIndex"
           class="imgClass"
           :src="$withBase('/'+item.fileName+'/'+subItem)"
           alt=""
            @click="copyUrl($themeConfig.blogSuffix+$withBase('/'+item.fileName+'/'+subItem))">
    <el-divider><vp-icon name="xunzhang" size='20'/></el-divider>
  </div>
</div>
</template>

<script>

export default {
  name: "Collect",
  methods:{
    // 点击复制的方法
    copyUrl(url) {
      // 创建一个 Input标签
      const cInput = document.createElement('input')
      cInput.value = url
      document.body.appendChild(cInput)
      cInput.select() // 选取文本域内容;
      // 执行浏览器复制命令
      // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
      // Input要在正常的编辑状态下原生复制方法才会生效
      document.execCommand('Copy')
      this.$notify({
        title: '图片地址复制成功噢！',
        dangerouslyUseHTMLString: true,
        message: "<img style='width: 200px' src="+url+" alt=''/>"
      })
      cInput.remove()
    }
  }
}
</script>

<style scoped>
.flexBox{
  margin-top: 10px;
  display: flex;
  padding: 5px;
  display: -webkit-flex; /* Safari */
  align-items:flex-start;
  align-content:flex-start;
  flex-direction: row ;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.imgClass{
  width: 100px;
  margin: 5px;
  display: flex;
  cursor: pointer;
}
</style>
