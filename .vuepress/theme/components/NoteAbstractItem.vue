<template>
  <div
    class="abstract-item"
    @click="$router.push(item.path)"
    @mouseover="showHoverMtd"
  @mouseout="hiddenHover"
  >
    <div class="rotate" v-if="showHover"></div>
    <div class="rotateBefore" v-if="showHover"></div>
    <div class="rotateAfter" v-if="showHover"></div>
    <div class="content">
          <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
<!--      <reco-icon icon="reco-sticky" />-->
      <div class="title">
              <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
<!--        <reco-icon icon="reco-lock" />-->
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
      <div class="abstract" v-html="item.excerpt"></div>
      <PageInfo
          :pageInfo="item"
          :currentTag="currentTag">
      </PageInfo>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
export default defineComponent({
  components: { PageInfo, RecoIcon },
  props: ['item', 'currentPage', 'currentTag'],
  data () {
    return{
      showHover:false
    }
  },
  methods:{
    hiddenHover(){
      this.showHover = false
    },
    showHoverMtd(){
      this.showHover = true
    }
  }
})
</script>

<style lang="stylus" scoped>
.rotate {
  width 100%
  height 100%
  background: linear-gradient(#ffffcc, #ccffff,#ffcccc);
  //animation: rotateBefore 5s infinite linear;
  position: absolute;
  z-index: -2;
}
.rotateBefore {
  width 100%
  height 100%
  background: linear-gradient(#ffffcc, #ccffff,#ffcccc);
  animation: rotateBefore 5s infinite linear;
  position: absolute;
  z-index: -1;
}
.rotateAfter {
  width 100%
  height 100%
  background: linear-gradient(#ffffcc, #ccffff,#ffcccc);
  animation: rotateAfter 5s infinite linear;
  position: absolute;
  z-index: -1;
}
.content{
  padding  8px 10px
  margin 8px 10px
  background-color var(--background-color)
}
.abstract-item
  position relative
  margin: 0 auto 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  cursor: pointer;
  > * {
    pointer-events: auto;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
/* 渐变色背景旋转动画 */
@keyframes rotateBefore {
  0% {
    top -100%
    left -100%
  }

  100% {
    top 100%
    left 100%
  }
}
@keyframes rotateAfter {
  0% {
    top 100%
    left 100%
  }

  100% {
    top -100%
    left -100%
  }
}
</style>
