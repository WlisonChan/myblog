<template>
  <Common
      :sidebar="false"
      :isComment="false">
    <div class="container">
      <div class="title">
        <h1>项目介绍</h1>
        <h4>瞧一瞧看一看咯！有没有喜欢的项目，给个xin <img :src="$withBase('/emoji/c3335c0ely1glnkctufnfg206o06o4iq.gif')" style="height: 40px" alt=""></h4>
      </div>
      <div class="projects">
        <div class="mask" v-for="(item,index) in projects" :key="index" @click="turnPage(item.url)">
          <div class="contentMask">
          </div>
          <div class="contentDesc"> 项目介绍：{{ item.description }}</div>
          <vp-icon class="love" :name="'love'+item.love" size="40"/>
          <div class="projectName">{{ item.title }}</div>
          <div class="wrap">
            <div class="three" :style="'border-color: '+item.color+' transparent transparent transparent;'"></div>
          </div>
        </div>
      </div>
    </div>
    <el-divider><vp-icon name="xunzhang" size='20'/></el-divider>
  </Common>
</template>

<script>
import Common from "../theme/components/Common";

export default {
  name: "Project",
  components: {Common},
  data() {
    return {
      projects: [
        {
          title: 'Community',
          description: '贴吧网站，基于springboot使用redis和Kafka实现登录、发帖、消息通知、热帖更新、评论等功能',
          color: this.getImgUrl(),
          love: this.getLoveIcon(),
          url: 'https://gitee.com/wilsoncz/community'
        },
        {
          title: '学习笔记',
          description: '学习过程中的知识点总结，笔记的主要格式为markdown，后续的笔记更新都在此博客上',
          color: this.getImgUrl(),
          love: this.getLoveIcon(),
          url: 'https://github.com/WlisonChan/mynote'
        },
        {
          title: 'WilliamNote',
          description: 'vuepress搭配reco主题搭建的博客网站，对主题进行个性化魔改',
          color: this.getImgUrl(),
          love: this.getLoveIcon(),
          url: ''
        },
        {
          title: '博客(老版本)',
          description: 'springboot练手项目，前后端不分离的笔记博客，样式一般，但是兼容性不强',
          color: this.getImgUrl(),
          love: this.getLoveIcon(),
          url: 'https://gitee.com/wilsoncz/blog'
        },
        {
          title: '页面加载动画',
          description: '博客页面的加载过场动画，纯css八卦图+多线条转动过场',
          color: this.getImgUrl(),
          love: this.getLoveIcon(),
          url: 'https://github.com/WlisonChan/LoadingPage'
        }
      ]
    }
  },
  methods: {
    getImgUrl() {
      let imgUrl = [
        '#99ccff', '#ffcc99',
        '#ccff99', '#ccccff', '#ccffff',
        '#ffcccc', '#ccffcc', '#66cccc'
      ]
      let index = Math.floor(Math.random() * imgUrl.length)
      return imgUrl[index]
    },
    getLoveIcon() {
      return Math.floor(Math.random() * 8) + 1
    },
    turnPage(url) {
      if (url === '') {
        this.$notify.error({
          title: 'Sorry',
          message: '项目未开发完成，暂未开源😭'
        })
        return
      }
      let temp = window.open('_blank')
      temp.location = url
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 6rem;
}

.projects {
  padding: 10px 50px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 3rem;
}

.three {
  position: absolute;
  width: 0;
  height: 0;
  top: 50px;
  border-style: solid;
  border-width: 50px 100px 50px 100px;
}

.wrap {
  position: relative;
  height: 100px;
  animation: changeAfter .5s linear forwards;
  z-index: 2;
}

.mask:hover > .wrap {
  animation: change .5s .25s linear forwards;
}

.mask:hover > .love {
  animation: hidden .5s linear forwards;
}

.mask:hover > .contentMask {
  animation: mask .5s linear forwards;
}

.mask {
  transform: rotateY(15deg) rotateX(15deg);
  display: flex;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 3px 4px rgba(64, 93, 230, 0.6);
  margin: 10px;
  border-radius: 10px;
  position: relative;
  width: 200px;
  min-width: 200px;
  height: 150px;
  border: 1px solid black;
  /*animation: change 2s linear infinite;*/
}

.love {
  position: absolute;
  z-index: 3;
  width: 40px;
  left: 80px;
  top: 80px;
  animation: showLove .5s linear forwards;
}

.contentDesc, .contentMask {
  margin:0 0 0 0;
  border-radius: 10px;
  font-weight: bold;
  position: absolute;
  top: 50px;
  padding: 15px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}

.contentMask {
  z-index: 1;
  width: 170px;
  height: 70px;
  background: #ffffcc;
  animation: push .5s linear forwards;
}

.projectName {
  position: absolute;
  z-index: 1;
  font-weight: bold;
  font-size: 25px;
  top: 10px;
  left: 10px;
}

@keyframes change {
  from {
    transform: rotateX(0);
  }
  to {
    transform: rotateX(180deg);
  }
}

@keyframes changeAfter {
  from {
    transform: rotateX(180deg);
  }
  to {
    transform: rotateX(0);
  }
}

@keyframes hidden {
  from {
    top: 80px;
  }
  to {
    top: 120px;
  }
}

@keyframes showLove {
  from {
    top: 120px;
  }
  to {
    top: 80px;
  }
}

@keyframes push {
  from {
    top: 116px;
  }
  to {
    top: 50px;
  }
}

@keyframes mask {
  from {
    top: 50px;
  }
  to {
    top: 116px;
  }
}
</style>
