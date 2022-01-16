(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{713:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("git下载地址：https://git-scm.com/download")]),s._v(" "),a("h6",{attrs:{id:"账号环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#账号环境配置"}},[s._v("#")]),s._v(" 账号环境配置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置用户名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"williamchen"')]),s._v("    //（ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),s._v("是自己的账户名，）\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置邮箱")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chenzhiwei93@aliyun.com"')]),s._v("  //"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username@email.com"')]),s._v("注册账号时用的邮箱"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --list \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h6",{attrs:{id:"生成ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成ssh"}},[s._v("#")]),s._v(" 生成ssh")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1、命令生成ssh")]),s._v("\nssh-keygen -t rsa\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2、输入命令后回车三连")]),s._v("\nlenovo@DESKTOP-L683HO4 MINGW64 ~/Desktop/mynote "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ ssh-keygen -t rsa\nGenerating public/private rsa key pair.\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/c/Users/lenovo/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nCreated directory "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/c/Users/lenovo/.ssh'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nEnter same passphrase again:\nYour identification has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /c/Users/lenovo/.ssh/id_rsa\nYour public key has been saved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /c/Users/lenovo/.ssh/id_rsa.pub\nThe key fingerprint is:\nSHA256:flYswogqVktPYZlfhE8/gzaTWNmVXjbwGlPrwG9epA8 lenovo@DESKTOP-L683HO4\nThe key's randomart image is:\n+---"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RSA "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3072")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("----+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("o .oo. "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("+ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".o+."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".+ ."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ooo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("o+.B "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" .Bo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("S + "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".E+."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  o.+  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" o  oo."),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" o    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("       o       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-----+\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3、进入C:\\Users\\用户名\\.ssh 文件夹，然后将id_rsa.pub文件的内容复制到远程仓库的SSH keys")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h6",{attrs:{id:"本地操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地操作"}},[s._v("#")]),s._v(" 本地操作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建远程仓库 复制远程仓库的ssh地址 我的是 git@github.com:WlisonChan/mynote.git")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@github.com:WlisonChan/mynote.git\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加远程仓库的地址")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" \t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本地文件添加到暂存区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am \t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将暂存区的文件提价到本地仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本地仓库的文件提交到远程仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f origin master 如果报错，可能存在远程仓库有文件，先pull再push，//tips：第一次提交可以强制提交到远程仓库，前提是远程仓库没有其他文件或者备份远程仓库。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);