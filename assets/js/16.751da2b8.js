(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{581:function(t,o,e){},636:function(t,o,e){"use strict";e(581)},678:function(t,o,e){"use strict";e.r(o);var i={name:"Project",components:{Common:e(538).a},data:function(){return{projects:[{title:"Community",description:"贴吧网站，基于springboot使用redis和Kafka实现登录、发帖、消息通知、热帖更新、评论等功能",color:this.getImgUrl(),love:this.getLoveIcon(),url:"https://gitee.com/wilsoncz/community"},{title:"学习笔记",description:"学习过程中的知识点总结，笔记的主要格式为markdown，后续的笔记更新都在此博客上",color:this.getImgUrl(),love:this.getLoveIcon(),url:"https://github.com/WlisonChan/mynote"},{title:"WilliamNote",description:"vuepress搭配reco主题搭建的博客网站，对主题进行个性化魔改",color:this.getImgUrl(),love:this.getLoveIcon(),url:""},{title:"博客(老版本)",description:"springboot练手项目，前后端不分离的笔记博客，样式一般，但是兼容性不强",color:this.getImgUrl(),love:this.getLoveIcon(),url:"https://gitee.com/wilsoncz/blog"},{title:"页面加载动画",description:"博客页面的加载过场动画，纯css八卦图+多线条转动过场",color:this.getImgUrl(),love:this.getLoveIcon(),url:"https://github.com/WlisonChan/LoadingPage"}]}},methods:{getImgUrl:function(){var t=["#99ccff","#ffcc99","#ccff99","#ccccff","#ccffff","#ffcccc","#ccffcc","#66cccc"];return t[Math.floor(Math.random()*t.length)]},getLoveIcon:function(){return Math.floor(8*Math.random())+1},turnPage:function(t){""!==t?window.open("_blank").location=t:this.$notify.error({title:"Sorry",message:"项目未开发完成，暂未开源😭"})}}},c=(e(636),e(2)),s=Object(c.a)(i,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("Common",{attrs:{sidebar:!1,isComment:!1}},[e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[e("h1",[t._v("项目介绍")]),t._v(" "),e("h4",[t._v("瞧一瞧看一看咯！有没有喜欢的项目，给个xin "),e("img",{staticStyle:{height:"40px"},attrs:{src:t.$withBase("/emoji/c3335c0ely1glnkctufnfg206o06o4iq.gif"),alt:""}})])]),t._v(" "),e("div",{staticClass:"projects"},t._l(t.projects,(function(o,i){return e("div",{key:i,staticClass:"mask",on:{click:function(e){return t.turnPage(o.url)}}},[e("div",{staticClass:"contentMask"}),t._v(" "),e("div",{staticClass:"contentDesc"},[t._v(" 项目介绍："+t._s(o.description))]),t._v(" "),e("vp-icon",{staticClass:"love",attrs:{name:"love"+o.love,size:"40"}}),t._v(" "),e("div",{staticClass:"projectName"},[t._v(t._s(o.title))]),t._v(" "),e("div",{staticClass:"wrap"},[e("div",{staticClass:"three",style:"border-color: "+o.color+" transparent transparent transparent;"})])],1)})),0)]),t._v(" "),e("el-divider",[e("vp-icon",{attrs:{name:"xunzhang",size:"20"}})],1)],1)}),[],!1,null,"8245b1dc",null);o.default=s.exports}}]);