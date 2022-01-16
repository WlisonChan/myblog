<template>
  <div style="height: 600px">
    <div style="position: relative;height: 160px">
      <img class="yanTuanZi" :src="$withBase('/yantuanzi/1515765046689139.gif')" alt="">
    </div>
    <img class="ribbon" :src="$withBase('/ribbon.png')" alt="">
    <div class="friendsTags">

      <div class="friend" v-for="(item,index) in friendList" :key="index" :style="'background:'+item.background">
        <img class="shengzi" :src="$withBase('/ribbon/'+ item.picColor+'.png')" alt="" />
        <div class="content">{{item.content}}</div>
        <a :href="item.url" target="_blank">
          <el-tooltip effect="dark" content="点击跳转" placement="top-start">
            <el-button class="myBtn" round><vp-icon name="fenxiang" size="20"/></el-button>
          </el-tooltip>
        </a>
        <img class="authorImg" :src="item.headerUrl" alt="" />
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Friends",
  data (){
    return {
      friendList: [
        {
          content: '小菜鸡の博客',
          url: 'http://wilsoncz.gitee.io/myblog',
          headerUrl: 'http://q1.qlogo.cn/g?b=qq&nk=840454995&s=640',
          picColor: this.getColor(),
          background: this.getImgUrl()
        },
        {
          content: '午后南杂',
          url: 'https://www.recoluan.com/',
          headerUrl: 'https://www.recoluan.com/head.png',
          picColor: this.getColor(),
          background: this.getImgUrl()
        },
        {
          content: 'ZNOTE',
          url: 'http://zpj80231.gitee.io/znote/',
          headerUrl: 'https://zpj80231.gitee.io/znote/vuepress/head-fish.jpg',
          picColor: this.getColor(),
          background: this.getImgUrl()
        },
        {
          content: '大菠萝',
          url: 'http://palapple.gitee.io/giteeblog/#/',
          headerUrl: 'http://palapple.gitee.io/giteeblog/_media/icon.svg',
          picColor: this.getColor(),
          background: this.getImgUrl()
        }
      ]
    }
  },
  methods:{
    getColor(){
      let colorArray = ['blue','red','green','pink','orange']
      let index = Math.floor(Math.random() * 5)
      return colorArray[index]
    },
    getImgUrl(){
      let imgUrl = [
          '#99ccff','#ffffcc','#ffcc99',
          '#ccff99','#ccccff','#ccffff',
          '#ffcccc','#ccffcc','#66cccc'
      ]
      let index = Math.floor(Math.random() * imgUrl.length)
      return imgUrl[index]
    }
  }
}
</script>

<style scoped>
.yanTuanZi{
  position: absolute;
  animation: moveImg 15s linear infinite;
}
@keyframes moveImg {
  from{
    left: 750px;
  }
  to{
    left: -50px;
  }
}
.friendsTags {
  color: black;
  display: flex;
  justify-items: left;
  width: 800px;
}
.ribbon{
  min-width: 800px;
  min-height: 50px;
  z-index: 100;
}
.shengzi{
 height: 100px;
  position: absolute;
  top: -50px;
  left:50px;
}
.friend{
  display: flex;
  margin-left: 15px;
  background: #99ccff;
  /*background-size: 100% 100%;*/
  border-radius: 55px ;
  border: 2px solid black;
  width: 110px;
  height: 200px;
  position: relative;
  transition: all 1s;
}
.friend:hover{
  height: 360px;
}
.friend:hover > .authorImg{
  top: 260px;
  /*transform: scale(1.1);*/
  transform: rotate(360deg);
}
.friend:hover > .content{
  height: 360px;
}
.content{
  font-weight: bold;
  position: absolute;
  width: 20px;
  font-size: 20px;
  /*top: 27px;*/
  /*left: 13px;*/
  top: 80px;
  left: 45px;
  overflow: hidden;
  height: 0;
  transition: all 1s;
  word-wrap:break-word;
}
.myBtn{
  border-radius: 50%;
  padding: 15px;
  position: absolute;
  top: 20px;
  left: 29px;
}
.authorImg{
  width: 80px;
  left: 15px;
  top: 100px;
  border-radius: 50%;
  position: absolute;
  transition: all 1s;
}
</style>
