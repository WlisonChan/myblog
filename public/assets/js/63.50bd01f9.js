(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{723:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h4",{attrs:{id:"线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[s._v("#")]),s._v(" 线程池")]),s._v(" "),t("h5",{attrs:{id:"主要特点-线程复用-控制最大并发数-管理线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要特点-线程复用-控制最大并发数-管理线程"}},[s._v("#")]),s._v(" 主要特点：线程复用；控制最大并发数；管理线程")]),s._v(" "),t("p",[s._v("1、降低资源能耗。通过重复利用已创建的线程降低线程创建和销毁造成的能耗。")]),s._v(" "),t("p",[s._v("2、提高响应速度。当任务到达时，任务可以不需要等到线程创建就能立即执行。")]),s._v(" "),t("p",[s._v("3、提高线程的可管理性。线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配、调优和监控。")]),s._v(" "),t("h5",{attrs:{id:"线程池常用的三个方式-时间调度线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池常用的三个方式-时间调度线程池"}},[s._v("#")]),s._v(" 线程池常用的三个方式+时间调度线程池")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" cachedThreadPool "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Executors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newCachedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" fixedThreadPool "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Executors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newFixedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" singleThreadExecutor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Executors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newSingleThreadExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("newCachedThreadPool——可缓存线程池，可灵活回收线程")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newCachedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MAX_VALUE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SECONDS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronousQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("newFixedThreadPool——定长线程池，可控制最大线程并发数")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newFixedThreadPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nThreads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("newSingleThreadExecutor——单线程化线程池，可控制线程执行顺序")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newSingleThreadExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Executors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FinalizableDelegatedExecutorService")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("newScheduledThreadPool——时间调度线程池（了解），创建一个定长线程池，支持定时及周期性任务执行。可以作一个定时器使用。")])]),s._v(" "),t("h5",{attrs:{id:"线程池七大参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池七大参数"}},[s._v("#")]),s._v(" 线程池七大参数")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maximumPoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" keepAliveTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" workQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadFactory")]),s._v(" threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                          "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RejectedExecutionHandler")]),s._v(" handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("1、"),t("strong",[s._v("int corePoolSize：")]),s._v(" 核心线程池数")]),s._v(" "),t("p",[s._v("2、"),t("strong",[s._v("int maximumPoolSize：")]),s._v(" 最大线程池数")]),s._v(" "),t("p",[s._v("3、"),t("strong",[s._v("long keepAliveTime：")]),s._v(" 多余空闲线程的存活时间")]),s._v(" "),t("p",[s._v("4、"),t("strong",[s._v("TimeUnit：")]),s._v(" keepAliveTime的时间单位")]),s._v(" "),t("p",[s._v("5、"),t("strong",[s._v("BlockingQueue<Runnable>：")]),s._v(" 任务队列，被提交但尚未被执行的任务")]),s._v(" "),t("p",[s._v("6、"),t("strong",[s._v("ThreadFactory：")]),s._v(" 线程工厂，一般用默认")]),s._v(" "),t("p",[s._v("7、"),t("strong",[s._v("RejectedExecutionHandler：")]),s._v(" 拒绝策略")]),s._v(" "),t("h5",{attrs:{id:"线程池底层工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池底层工作原理"}},[s._v("#")]),s._v(" 线程池底层工作原理")]),s._v(" "),t("ul",[t("li",[s._v("如果当前线程池中的线程数目小于"),t("code",[s._v("corePoolSize")]),s._v("，则每来一个任务，就会创建一个线程去执行这个任务；")]),s._v(" "),t("li",[s._v("如果当前线程池中的线程数目大于等于"),t("code",[s._v("corePoolSize")]),s._v("且无空闲线程，则每来一个任务，会尝试将其添加到任务缓存队列当中，若添加成功，则该任务会等待空闲线程将其取出去执行；若添加失败（一般来说是任务缓存队列已满），则会尝试创建新的线程去执行这个任务；")]),s._v(" "),t("li",[s._v("如果此时当前线程池中的线程数目达到"),t("code",[s._v("maximumPoolSize")]),s._v("，则会采取任务拒绝策略进行处理（后面具体介绍）；")]),s._v(" "),t("li",[s._v("如果线程池中的线程数量大于 "),t("code",[s._v("corePoolSize")]),s._v("时，如果某线程空闲时间超过"),t("code",[s._v("keepAliveTime")]),s._v("，线程将被终止，直至线程池中的线程数目不大于"),t("code",[s._v("corePoolSize")]),s._v("；如果允许为核心池中的线程设置存活时间，那么核心池中的线程空闲时间超过"),t("code",[s._v("keepAliveTime")]),s._v("，线程也会被终止。")])]),s._v(" "),t("h5",{attrs:{id:"线程池拒绝策略-rejectedexecutionhandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池拒绝策略-rejectedexecutionhandler"}},[s._v("#")]),s._v(" 线程池拒绝策略 （RejectedExecutionHandler）")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("AbortPolicy（默认）：")]),s._v(" 直接抛出"),t("code",[s._v("RejectedExecutionException")]),s._v("异常阻止系统正常运行。")]),s._v(" "),t("li",[t("strong",[s._v("CallerRunsPolicy：")]),s._v(" 该策略既不抛弃任务，也不抛出异常，而是将某些任务回退给调用者。")]),s._v(" "),t("li",[t("strong",[s._v("DiscardOldestPolicy：")]),s._v(" 抛弃队列中等待最久的任务（队首），然后把当前任务加入队列中尝试再次提交当前任务。")]),s._v(" "),t("li",[t("strong",[s._v("DiscardPolicy：")]),s._v(" 直接丢弃任务，不予任何处理也不抛出异常。")])]),s._v(" "),t("h5",{attrs:{id:"合理配置线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合理配置线程池"}},[s._v("#")]),s._v(" 合理配置线程池")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("CPU密集型：")]),s._v(" CPU核数+1个线程的线程池。")]),s._v(" "),t("li",[t("strong",[s._v("IO密集型：")]),s._v(" 可以多分配点线程数，如CPU*2。也可使用公式：CPU/(1-阻塞系数)，阻塞系数在0.8~0.9之间。")])]),s._v(" "),t("h6",{attrs:{id:"面试题-你在工作中使用newcachedthreadpool、newfixedthreadpool、newscheduledthreadpool哪一种创建方式-为什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试题-你在工作中使用newcachedthreadpool、newfixedthreadpool、newscheduledthreadpool哪一种创建方式-为什么"}},[s._v("#")]),s._v(" 面试题：你在工作中使用newCachedThreadPool、newFixedThreadPool、newScheduledThreadPool哪一种创建方式，为什么？")]),s._v(" "),t("p",[s._v("答：都不使用，这三个线程池底层的阻塞队列使用的长度都是"),t("code",[s._v("Integer.MAX_VALUE")]),s._v("，允许的请求队列长度为 Integer.MAX_VALUE，可能会堆积大量的请求，从而导致 OOM。一般使用"),t("code",[s._v("ThreadPoolExecutor")]),s._v("自定义线程池。")])])}),[],!1,null,null,null);a.default=e.exports}}]);