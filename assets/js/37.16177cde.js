(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{672:function(o,t,n){"use strict";n.r(t);var e=n(2),p=function(o){o.options.__data__block__={flowchart_1a96284a:"process=>inputoutput: 开始\nopt1=>operation: Docker会在本机寻找镜像\ncond=>condition: 判断本机是否有这个镜像\nopt2=>operation: 去Docker Hub上下载\ncond2=>condition: Docker Hub 是否可以找到\nopt3=>operation: 下载这个镜像到本地\nopt4=>operation: 返回错误,找不到镜像\nopt5=>operation: 使用这个镜像并运行\ne=>end: End\ne2=>end: End\n\nprocess->opt1\nopt1->cond\ncond(yes,bottom)->opt5\ncond(no,right)->opt2\nopt2->cond2\ncond2(yes)->opt3(left)->opt5\ncond2(no)->opt4\nopt4->e2\nopt5->e"}},c=Object(e.a)({},(function(){var o=this.$createElement,t=this._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("FlowChart",{attrs:{id:"flowchart_1a96284a",code:this.$dataBlock.flowchart_1a96284a,preset:"vue"}})],1)}),[],!1,null,null,null);"function"==typeof p&&p(c);t.default=c.exports}}]);