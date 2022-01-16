(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{707:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"elasticsearch安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch安装"}},[s._v("#")]),s._v(" ElasticSearch安装")]),s._v(" "),t("h3",{attrs:{id:"_1、安装地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装地址"}},[s._v("#")]),s._v(" 1、安装地址")]),s._v(" "),t("p",[s._v("elasticsearch下载地址：https://www.elastic.co/cn/downloads/elasticsearch")]),s._v(" "),t("h3",{attrs:{id:"_2、目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、目录结构"}},[s._v("#")]),s._v(" 2、目录结构")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("bin\t\t启动目录\nconfig\t\t配置文件\n\t\tlog4j2\t\t日志配置文件\n\t\tjvm.options\t\tjava虚拟机相关配置\n\t\telasticsearch.yml\t\telasticsearch的配置文件\nlib\t\t相关jar包\nlogs\t\t日志文件夹\nmodules\t\t功能模块\nplugins\t\t插件文件夹\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"_3、启动elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、启动elasticsearch"}},[s._v("#")]),s._v(" 3、启动Elasticsearch")]),s._v(" "),t("p",[s._v("Elasticsearch的启动需要有jdk8的本地环境")]),s._v(" "),t("blockquote",[t("p",[s._v("(Mac)启动bin目录下的elasticsearch")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("williamchen@williamhendeMBP elasticsearch-7.12.0 % bin/elasticsearch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("启动后访问本机9200端口： http://localhost:9200/")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"name"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"williamhendeMBP.mshome.net"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"cluster_name"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"elasticsearch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"cluster_uuid"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CTvkdBAvSEKmTaOxSiHF6g"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"number"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7.12.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"build_flavor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"build_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"build_hash"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"78722783c38caa25a70982b5b042074cde5d3b3a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"build_date"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-03-18T06:17:15.410153305Z"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"build_snapshot"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"lucene_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8.8.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"minimum_wire_compatibility_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.8.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"minimum_index_compatibility_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.0.0-beta1"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('"tagline"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"You Know, for Search"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("健康检查指令：http://127.0.0.1:9200/_cluster/health?pretty=true")]),s._v(" "),t("h3",{attrs:{id:"_4、head插件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、head插件安装"}},[s._v("#")]),s._v(" 4、head插件安装")]),s._v(" "),t("p",[s._v("head插件下载地址：https://github.com/mobz/elasticsearch-head")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("// 拉取项目（需有Git环境）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/mobz/elasticsearch-head.git\n// 进入目录\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" elasticsearch-head\n// cnpm的速度快一点（需要有node.js环境）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n// 启动head插件\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run start\n// 打开项目\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" http://localhost:9100/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("head插件连接es时会存在跨域问题，在es配置文件加入以下配置，并重启")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http.cors.enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http.cors.allow-origin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("启动后界面如下：")]),s._v(" "),t("p",[s._v("![image-20210328235700586](/Users/williamchen/Library/Application Support/typora-user-images/image-20210328235700586.png)")]),s._v(" "),t("h3",{attrs:{id:"_5、kibana安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、kibana安装"}},[s._v("#")]),s._v(" 5、Kibana安装")]),s._v(" "),t("p",[s._v("kibana下载地址：https://www.elastic.co/cn/downloads/kibana")]),s._v(" "),t("p",[s._v("中文配置")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("// 打开kibana目录下的config/kibana.yml\n// 在末尾添加配置\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("i18n.locale")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zh-CN"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("启动后界面如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301775995.cos.ap-nanjing.myqcloud.com/image-20210329124946726.png",alt:"image-20210329124946726"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);