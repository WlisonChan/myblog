(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{695:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"docker安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" Docker安装")]),s._v(" "),n("h4",{attrs:{id:"docker的基本组成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker的基本组成"}},[s._v("#")]),s._v(" Docker的基本组成")]),s._v(" "),n("p",[n("strong",[s._v("镜像（image）：")])]),s._v(" "),n("p",[s._v("docker镜像就好比是一个模板，可以通过这个模板来创建容器服务。通过一个镜像可以创建多个容器（最终服务运行或者项目运行就是在容器中的）")]),s._v(" "),n("p",[n("strong",[s._v("容器（container）：")])]),s._v(" "),n("p",[s._v("docker利用容器技术，独立运行一个或者一个组应用，通过镜像来创建的。")]),s._v(" "),n("p",[s._v("启动，停止，删除，基本命令！")]),s._v(" "),n("p",[s._v("目前就可以把这个容器理解为就是一个简易的linux系统")]),s._v(" "),n("p",[n("strong",[s._v("仓库（repository）：")])]),s._v(" "),n("p",[s._v("仓库就是存放镜像的地方！")]),s._v(" "),n("p",[s._v("仓库分为公有仓库和私有仓库！")]),s._v(" "),n("h4",{attrs:{id:"安装docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),n("hr"),s._v(" "),n("blockquote",[n("p",[s._v("环境准备")])]),s._v(" "),n("p",[s._v("1、CentOS 7")]),s._v(" "),n("p",[s._v("2、远程服务器交互 xshell")]),s._v(" "),n("blockquote",[n("p",[s._v("环境查看")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 系统内核是3.10 以上")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# uname -r")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-862.el7.x86_64\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#系统版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/os-release ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CentOS Linux"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7 (Core)"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ID")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"centos"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ID_LIKE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rhel fedora"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION_ID")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PRETTY_NAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CentOS Linux 7 (Core)"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ANSI_COLOR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0;31"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CPE_NAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cpe:/o:centos:centos:7"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HOME_URL")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.centos.org/"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BUG_REPORT_URL")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://bugs.centos.org/"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CENTOS_MANTISBT_PROJECT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CentOS-7"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CENTOS_MANTISBT_PROJECT_VERSION")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDHAT_SUPPORT_PRODUCT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"centos"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDHAT_SUPPORT_PRODUCT_VERSION")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("blockquote",[n("p",[s._v("安装")])]),s._v(" "),n("p",[s._v("帮助文档")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1、卸载旧的版本")]),s._v("\nyum remove docker "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-client "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-client-latest "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-common "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-latest "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-latest-logrotate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-logrotate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-engine\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2、需要的安装包")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3、设置镜像的仓库")]),s._v("\nyum-config-manager "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --add-repo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://download.docker.com/linux/centos/docker-ce.repo "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认是从国外的！")]),s._v("\n    \nyum-config-manager "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --add-repo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\thttp://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新yum软件包索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum makecache fast")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4、安装docker相关 docker-ce 社区 ee 企业版")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5、启动docker")]),s._v("\nsystemctl start docker\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6、使用命令查看启动情况")]),s._v("\ndocker version\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7、 hello-world")]),s._v("\ndocker run hello-world\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 8、查看一下下载的这个hello-world镜像")]),s._v("\ndocker images\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker images")]),s._v("\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nhello-world         latest              bf756fb1ae65        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" months ago       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(".3kB\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("p",[s._v("了解：卸载docker命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1、卸载依赖")]),s._v("\nyum remove docker-ce docker-ce-cli containerd.io\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2、删除资源")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/docker\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /var/lib/docker\tdocker的默认工作路径")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"阿里云镜像加速"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#阿里云镜像加速"}},[s._v("#")]),s._v(" 阿里云镜像加速")]),s._v(" "),n("hr")])}),[],!1,null,null,null);a.default=e.exports}}]);