(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{771:function(t,v,_){"use strict";_.r(v);var a=_(2),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"aop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aop"}},[t._v("#")]),t._v(" AOP")]),t._v(" "),_("h3",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),_("p",[_("code",[t._v("AOP")]),t._v("就是面向切面编程，是一种非常适合在无需修改业务代码的前提下，对某个或某些业务增加统一的功能，比如日志记录、权限控制、事务管理等，能很好的使得代码解耦，提高开发效率。")]),t._v(" "),_("h3",{attrs:{id:"aop核心概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aop核心概念"}},[t._v("#")]),t._v(" AOP核心概念")]),t._v(" "),_("p",[t._v("1、"),_("strong",[t._v("Advice：")]),t._v(" 可以理解为通知、建议，在Spring中通过定义Advice来定义代理逻辑。")]),t._v(" "),_("p",[t._v("2、"),_("strong",[t._v("Pointcut：")]),t._v(" 切点，表示Advice对应的代理逻辑应用在哪个类、哪个方法上。")]),t._v(" "),_("p",[t._v("3、"),_("strong",[t._v("Advisor：")]),t._v(" 相当于Advice+Pointcut，表示代理逻辑和切点的一个整体，我们可以通过定义或封装一个Advisor来定义切点和代理逻辑。")]),t._v(" "),_("p",[t._v("4、"),_("strong",[t._v("Weaving：")]),t._v(" 织入，将Advice代理逻辑在源代码级别嵌入到切点的过程。")]),t._v(" "),_("p",[t._v("5、"),_("strong",[t._v("Target：")]),t._v(" 表示目标对象，即被代理对象，在AOP生成的代理对象中会持有目标对象。")]),t._v(" "),_("p",[t._v("6、"),_("strong",[t._v("Join Point：")]),t._v(" 连接点，在Spring AOP中为方法的执行点。")]),t._v(" "),_("h3",{attrs:{id:"工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),_("p",[t._v("AOP是发生在Bean的生命周期过程中的：")]),t._v(" "),_("ul",[_("li",[t._v("1、Spring生成bean对象时，先实例化出来一个对象，即target对象")]),t._v(" "),_("li",[t._v("2、再对target对象进行属性填充")]),t._v(" "),_("li",[t._v("3、在初始化后步骤中，会判断target对象有没有对应的切面")]),t._v(" "),_("li",[t._v("4、如果有切面，就表示当前target对象需要进行AOP")]),t._v(" "),_("li",[t._v("5、通过Cglib或JDK动态代理机制生成一个代理对象，作为最终的bean对象")]),t._v(" "),_("li",[t._v("6、代理对象中有一个target属性指向来target对象")])])])}),[],!1,null,null,null);v.default=r.exports}}]);