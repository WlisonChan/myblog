<template>
  <div @click="hideDialogMethod">
    <div class="personal-info">
      <div class="myImgDiv">
        <div class="chatBefore" v-if="showDialog"></div>
        <div class="chatAfter" v-if="showDialog"></div>
        <div :class="showDialog?'chat chatHover':'chat'" v-if="showDialog" @click.stop="showDialogMethod">
          <vp-icon name="love" size="30"/>
          <div style="display: inline" >
            Hello，这是我的{{ msg }}，接住哟！！！
          </div>
        </div>
        <vp-icon class="one" name="mail" size="50" @click.stop="showDialogMethod('mail')"/>
        <vp-icon class="two" name="qq" size="50" @click.stop="showDialogMethod('qq')"/>
        <vp-icon class="three" name="weixin" size="50" @click.stop="showDialogMethod('weixin')"/>
        <vp-icon class="four" name="pyq" size="50" @click.stop="showDialogMethod('pyq')"/>
        <el-image class="img" :src="$withBase($themeConfig.authorAvatar)" fit="fill" alt=""></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "William",
  data() {
    return {
      showDialog: false,
      msg: '微信',
    }
  },
  methods: {
    showDialogMethod(str) {
      this.showDialog = true
      let that = this
      if (str==='qq'){
        this.msg = 'QQ'
      }else if (str==='weixin'){
        this.msg = '微信'
      }else if (str==='mail'){
        this.msg = '邮箱'
      }else if(str==='pyq'){
        this.msg = '友链'
      }
      setTimeout(that.openInfo,1500)
    },
    hideDialogMethod() {
      this.showDialog = false
    },
    openInfo(){
      let src =''
      if (this.msg==='QQ'){
        src = "http://wilsoncz.gitee.io/myblog/personalQq.png"
      }else if (this.msg==='微信'){
        src = "http://wilsoncz.gitee.io/myblog/personalWeixin.JPG"
      }else if (this.msg==='邮箱'){
        this.$confirm('邮箱功能未完善，可以手动发邮件给我哦：chenzhiwei93@aliyun.com', '😭', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$notify({
            title: '成功',
            type: 'success',
            message: '假装邮件页面跳转成功，嘿嘿😁!'
          });
        }).catch(() => {
          this.$notify({
            title: 'Oh no',
            type: 'info',
            message: '不发邮件给我了！！！？'
          });
        })
        this.showDialog =false;
        return
      }else if (this.msg==='友链'){
        this.$router.push('/docs/friend')
        return;
      }else {
        return;
      }
      let a = '<div style="text-align: center"><img src='+ src +' style="width: 380px;height: 480px"/></div>';
      this.$alert(a, this.msg, {
        dangerouslyUseHTMLString: true
      });
      this.showDialog =false;
    },
    openMail(){

    }
  },

}
</script>

<style scoped>
.personal-info {
  text-align: center;
  position: relative;
  height: 300px;
}

.myImgDiv {
  position: absolute;
  display: inline-block;
  height: 300px;
  margin-left: -100px;
}

.one, .two, .three, .four {
  border-radius: 50%;
  position: absolute;

  top: 125px;
  left: 75px;
}
.demo-image__preview{
  position: absolute;
}
.one:hover, .two:hover, .three:hover, .four:hover {
  color: #6698cb;
  animation-play-state: paused;
  box-shadow: rgb(0, 34, 34) 8px 8px 20px;
  border: 2px solid #6698cb;
  width: 75px;
  cursor: pointer;
  height: 75px;
  z-index: 2000;
}

.chat {
  color: black;
  overflow: hidden;
  font-size: 10px;
  top: 20px;
  left: 75px;
  width: 0;
  height: 0;
  background-color: #fff;
  border: 1px solid black;
  position: absolute;
  z-index: 3000;
  border-radius: 10px;
  text-align: left;
  padding: 5px;
}

.chatHover {
  animation: chatDiv .5s linear;
  animation-fill-mode: forwards;
}

.chatAfter {
  top: 78px;
  left: 90px;
  content: "";
  width: 0;
  height: 0;
  border: 10px solid;
  position: absolute;
  z-index: 3001;
  border-color: #fff transparent transparent transparent;
}

.chatBefore {
  top: 80px;
  left: 90px;
  content: "";
  width: 0;
  height: 0;
  border: 10px solid;
  position: absolute;
  z-index: 3000;
  border-color: #000 transparent transparent transparent;
}

.one {
  animation: actionOne 10s linear infinite;
}

.two {
  animation: actionTwo 10s 2.5s linear infinite;
}

.three {
  animation: actionThree 10s 5s linear infinite;
}

.four {
  animation: actionFour 10s 7.5s linear infinite;
}

.img {
  top: 50px;
  width: 200px;
  border: 1px solid black;
  border-radius: 50%;
  box-shadow: rgb(100, 100, 100) 8px 8px 8px;
}

@keyframes actionHover {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
}

@keyframes actionOne {
  from {
    transform: rotate(0deg) translate(130px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(130px) rotate(-360deg);
  }
}

@keyframes actionTwo {
  from {
    transform: rotate(0deg) translate(130px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(130px) rotate(-360deg);
  }
}

@keyframes actionThree {
  from {
    transform: rotate(0deg) translate(130px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(130px) rotate(-360deg);
  }
}

@keyframes actionFour {
  from {
    transform: rotate(0deg) translate(130px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(130px) rotate(-360deg);
  }
}

@keyframes chatDiv {
  from {
    width: 0;
    height: 0;
  }
  to {
    width: 150px;
    height: 50px;
  }
}
</style>
