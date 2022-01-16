(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{763:function(n,a,e){"use strict";e.r(a);var t=e(2),v=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"bean生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean生命周期"}},[n._v("#")]),n._v(" Bean生命周期")]),n._v(" "),e("h3",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[n._v("#")]),n._v(" 概念")]),n._v(" "),e("p",[n._v("Bean生命周期描述的是Spring中一个Bean创建过程和销毁过程中所经历的步骤，其中Bean创建过程是重点。")]),n._v(" "),e("p",[e("strong",[n._v("我们可以利用Bean生命周期机制对Bean进行自定义加工。")])]),n._v(" "),e("h3",{attrs:{id:"bean生命周期简要过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean生命周期简要过程"}},[n._v("#")]),n._v(" Bean生命周期简要过程")]),n._v(" "),e("p",[n._v("1、BeanDefinition：Bean定义")]),n._v(" "),e("p",[n._v("2、构造方法推断选出一个构造方法")]),n._v(" "),e("p",[n._v("3、实例化：构造方法反射得到对象")]),n._v(" "),e("p",[n._v("4、属性填充：给属性进行自动填充")]),n._v(" "),e("p",[n._v("5、初始化：对其他属性赋值、校验")]),n._v(" "),e("p",[n._v("6、初始化后：AOP、生成代理对象")]),n._v(" "),e("h3",{attrs:{id:"bean的创建生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean的创建生命周期"}},[n._v("#")]),n._v(" Bean的创建生命周期")]),n._v(" "),e("p",[n._v("1、"),e("strong",[n._v("BeanDefinition：")]),n._v(" BeanDefinition表示Bean定义，它定义了某个Bean的类型，Spring就是利用BeanDefinition来创建Bean的，比如需要利用BeanDefinition中beanClass属性确定Bean的类型，从而实例化出来对象。")]),n._v(" "),e("p",[n._v("2、"),e("strong",[n._v("构造方法推断：")]),n._v(" 一个Bean中可以有多个构造方法，此时需要Spring来判断到底使用哪个构造方法。通过构造方法推断之后确定一个构造方法后，就可以利用构造方法实例化得到一个对象了")]),n._v(" "),e("p",[n._v("3、"),e("strong",[n._v("实例化：")]),n._v(" 在Spring中，通过构造方法反射得到一个实例化对象，可以通过BeanPostProcessor机制对实例化进行干预。")]),n._v(" "),e("p",[n._v("4、"),e("strong",[n._v("属性填充：")]),n._v(" 实例化所得到的对象，而该对象中的某些属性还没有进行属性填充，也就是Spring还没有自动给某些属性赋值，属性填充即自动注入、依赖注入")]),n._v(" "),e("p",[n._v("5、"),e("strong",[n._v("初始化：")]),n._v(" 在一个对象的属性填充之后，Spring提供了初始化机制，我们可以利用初始化机制对Bean进行自定义加工，比如可以利用InitializingBean接口来对Bean中的其他属性进行赋值，或对Bean中的某些属性进行校验。")]),n._v(" "),e("p",[n._v("6、"),e("strong",[n._v("初始化后：")]),n._v(" 初始化后是Bean创建生命周期中的最后一个步骤，AOP机制就是在这个步骤中通过BeanPostProcessor机制实现的，初始化之后得到的对象才是真正的Bean对象")])])}),[],!1,null,null,null);a.default=v.exports}}]);