<template>
  <div>
    <vp-icon
      v-if="pageInfo.frontmatter.author || $themeConfig.author"
      name="wode"
    />
      <span class="iconfont">{{ pageInfo.frontmatter.author || $themeConfig.author }}</span>

    <vp-icon
        name="shijian"
      v-if="pageInfo.frontmatter.date"
    />
    <span class="iconfont">{{ formatDateValue(pageInfo.frontmatter.date) }}</span>

    <vp-icon
        name="eye"
        size="20"
      v-if="showAccessNumber === true"
    />
      <AccessNumber v-if="showAccessNumber === true" :idVal="pageInfo.path" :numStyle="numStyle" class="iconfont" />

    <vp-icon
        name="biaoqian"
      v-if="pageInfo.frontmatter.tags"
      icon="reco-tag"
      class="tags"
    />
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="tag-item iconfont"
        :class="{ 'active': currentTag == subItem }"
        @click.stop="goTags(subItem)"
      >{{subItem}}</span>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { formatDate } from '../helpers/dateUtil'

export default defineComponent({
  components: { RecoIcon },
  props: {
    pageInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    currentTag: {
      type: String,
      default: ''
    },
    showAccessNumber: {
      type: Boolean,
      default: false
    }
  },

  setup (props, ctx) {
    const instance = getCurrentInstance().proxy

    const numStyle = {
      fontSize: '.9rem',
      fontWeight: 'normal',
      color: '#999'
    }

    const goTags = (tag) => {
      if (instance.$route.path !== `/tag/${tag}/`) {
        instance.$router.push({ path: `/tag/${tag}/` })
      }
    }

    const formatDateValue = (value) => {
      if (!value) return ''
      // 返回的value的值都是这个样子2019-09-20T18:22:30.000Z
      // 对value进行处理
      value = value.replace('T', ' ').slice(0, value.lastIndexOf('.'))
      // 转化后的value 2019-09-20 18:22:30
      // 获取到时分秒
      const h = Number(value.substr(11, 2))
      const m = Number(value.substr(14, 2))
      const s = Number(value.substr(17, 2))
      // 判断时分秒是不是 00:00:00 (如果是用户手动输入的00:00:00也会不显示)
      if (h > 0 || m > 0 || s > 0) {
        // 时分秒有一个> 0 就说明用户输入一个非 00:00:00 的时分秒
        return formatDate(value)
      } else {
        // 用户没有输入或者输入了 00:00:00
        return formatDate(value, 'yyyy-MM-dd')
      }
      //return new Intl.DateTimeFormat(instance.$lang).format(new Date(value))
    }

    return { numStyle, goTags, formatDateValue }
  }
})
</script>

<style lang="stylus" scoped>
.iconfont
  display inline-block
  line-height 1.5rem
  &:not(:last-child)
    margin-right 1rem
  span
    margin-left 0.5rem
.tags
  .tag-item
    font-family Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
    cursor pointer
    &.active
      color $accentColor
    &:hover
      color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-left 0 !important
</style>
