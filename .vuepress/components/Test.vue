<template>
  <!-- 最外层仅起到限制渐变区域大小的作用 -->
  <div class="wrap" >
    <div class="file">
      <div class="logo">
        <vp-icon name="file" size="90"/>
      </div>
      <div>
        filename hello world
      </div>
      <div style="text-align: center;padding: 0">
        <el-button size="small" style="margin: 0">下载</el-button>
        <el-button size="small" style="margin: 0">删除</el-button>
      </div>
    </div>


  </div>
</template>

<script>
const COS = require('cos-js-sdk-v5');
let txCOS = ''
export default {
  name: "Test",
  date(){
    return{
      list:''
    }
  },
  mounted() {
    txCOS = new COS({
      SecretId: 'AKIDWopdEY7YQ1NZT9QhZrYyonXBKH0WZWXH',
      SecretKey: 'cx7QSNpHVZNfkaAUXLtBnBKCnU1MTjEY',
    })
    this.getList('')
  },
  methods:{
    getList(prefix) {
      txCOS.getBucket({
        Bucket: 'work-1301775995', /* 必须 */
        Region: 'ap-nanjing',     /* 存储桶所在地域，必须字段 */
        Prefix: prefix,
        Delimiter: '/'
      }, function (err, data) {
        console.log(err || data.Contents)
      })
    },
    getType(suffix){
      if (suffix==='docx' || suffix==='docx'){
        return 'word'
      }else if (suffix==='pdf'){
        return 'pdf'
      }else if (suffix==='xlsx'){
        return 'xls'
      }else if (suffix==='ppt' || suffix ==='pptx'){
        return 'ppt'
      }else if (suffix === 'jpg' || suffix==='jpeg'|| suffix==='png'){
        return 'image'
      }else {
        return 'unknown'
      }
    }
  }
}
</script>

<style scoped>
.file{
  position: relative;
  width: 90px;
  height: 165px;
  cursor: pointer;
}
.logo{

}
</style>
