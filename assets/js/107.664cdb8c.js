(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{765:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"value"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[s._v("#")]),s._v(" @Value")]),s._v(" "),n("h3",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),n("p",[n("code",[s._v("@Value")]),s._v("注解和"),n("code",[s._v("@Resource")]),s._v("、"),n("code",[s._v("@Autowired")]),s._v("类似，也是用来对属性进行依赖注入的，只不过"),n("code",[s._v("@Value")]),s._v("是用来从Properties文件中来获取值的，并且"),n("code",[s._v("@Value")]),s._v("可以解析SpEL（Spring表达式）")]),s._v(" "),n("h3",{attrs:{id:"使用方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Controller")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserController")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/**\n     *  直接将字符串"william"赋值给属性，\n     *  如果属性类型不是String，或无法进行类型转换，则报错\n     */')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"william"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" myValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     *  报错，无法进行类型转换\n     *  Failed to convert value of type 'java.lang.String' to required type 'int'\n     */")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"william"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" myValue2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/**\n     * 以${}的字符串为key，从配置文件properties文件中找出对应的value赋值给属性\n     * 如果没找到，则会把"${william}"当作普通字符串注入属性\n     */')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${william}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" myValue3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/**\n     * 将#{}中的字符串当作Spring表达式进行解析，Spring会把"william"当作beanName\n     * 并从Spring容器中找对应bean，如果找到则进行属性注入，没找到则报错。\n     */')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#{william}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);