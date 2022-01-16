(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{729:function(v,t,r){"use strict";r.r(t);var _=r(2),a=Object(_.a)({},(function(){var v=this,t=v.$createElement,r=v._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h4",{attrs:{id:"jvm-垃圾回收算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm-垃圾回收算法"}},[v._v("#")]),v._v(" JVM 垃圾回收算法")]),v._v(" "),r("h5",{attrs:{id:"一、判断对象是否存活"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、判断对象是否存活"}},[v._v("#")]),v._v(" 一、判断对象是否存活")]),v._v(" "),r("p",[r("strong",[v._v("可达性分析：")]),v._v(" 以 GCRoot 为起点，从这些节点向下搜索，搜索所走过的路径称为引用链，如果一个对象在引用链上，就说是可达的，这种对象就是需要存活下来的。")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301775995.cos.ap-nanjing.myqcloud.com/image-20210322230340192.png",alt:"image-20210322230340192"}})]),v._v(" "),r("h5",{attrs:{id:"二、gc-roots的对象包括下面几种"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、gc-roots的对象包括下面几种"}},[v._v("#")]),v._v(" 二、GC Roots的对象包括下面几种")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("1.当前虚拟机栈中局部变量表中的引用的对象")])]),v._v(" "),r("li",[r("p",[v._v("2.当前本地方法栈中局部变量表中的引用的对象")])]),v._v(" "),r("li",[r("p",[v._v("3.方法区中类静态属性引用的对象")])]),v._v(" "),r("li",[r("p",[v._v("4.方法区中的常量引用的对象")])])]),v._v(" "),r("h5",{attrs:{id:"三、垃圾回收算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、垃圾回收算法"}},[v._v("#")]),v._v(" 三、垃圾回收算法")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("引用计数法\n创建对象的时候给对象绑定一个计数器，每当有一个引用指向该对象，计数器加一，指向它的引用被删除时，计数器减一。当没有引用指向该对象的时候，该对象死亡，计数器为0，进行垃圾回收操作。")])]),v._v(" "),r("li",[r("p",[v._v("复制算法\n将内存划分为两块内存，每次只使用其中一块内存，当这块部分内存满的时候，将内存中所有存活的对象复制到另一块内存中，然后将之前的内存清空，循环下去。")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301775995.cos.ap-nanjing.myqcloud.com/image-20210322231404988.png",alt:"image-20210322231404988"}})])]),v._v(" "),r("li",[r("p",[v._v("标记清除算法")]),v._v(" "),r("p",[v._v("分为两个阶段：标记阶段和清除阶段。为每个对象存储一个标记位，标记阶段为每个对象更新标记位，检查对象是否死亡。第二阶段是清除阶段，该阶段对死亡的对象进行清除，执行GC操作。")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301775995.cos.ap-nanjing.myqcloud.com/image-20210322232251881.png",alt:"image-20210322232251881"}})])]),v._v(" "),r("li",[r("p",[v._v("标记整理算法\n第一阶段也是对对象进行标记，第二阶段是把存活的对象往内存的一端移动，然后直接回收边界以外的内存，不会产生内存碎片。")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301775995.cos.ap-nanjing.myqcloud.com/image-20210322232404112.png",alt:"image-20210322232404112"}})])]),v._v(" "),r("li",[r("p",[v._v("分代收集（新生代和老年代）")]),v._v(" "),r("p",[v._v("​        把"),r("code",[v._v("java堆")]),v._v("划分为"),r("code",[v._v("新生代")]),v._v("和"),r("code",[v._v("老年代")]),v._v("。这样就可以根据各个年代的特点采用最适当的收集算法。在新生代中，每次垃圾收集时都发现有大批对象死去，只有少量存活，那就选用复制算法，只需要付出少量存活对象的复制成本就可以完成收集。而老年代中因为对象存活率高、没有额外空间对它进行分配担保，就必须使用“标记—清理”或者“标记—整理”算法来进行回收。")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301775995.cos.ap-nanjing.myqcloud.com/image-20210322234823025.png",alt:"image-20210322234823025"}})]),v._v(" "),r("p",[v._v("​        新生代中的对象98%是"),r("code",[v._v("“朝生夕死”")]),v._v("的，所以并不需要按照"),r("code",[v._v("1∶1")]),v._v("的比例来划分内存空间，而是将内存分为一块较大的"),r("code",[v._v("Eden")]),v._v("空间和两块较小的"),r("code",[v._v("Survivor")]),v._v("空间，每次使用Eden和其中一块Survivor。当回收时，将Eden和Survivor中还存活着的对象一次性地复制到另外一块Survivor空间上，最后清理掉Eden和刚才用过的Survivor空间。HotSpot虚拟机默认Eden和Survivor的大小比例是"),r("code",[v._v("8∶1")]),v._v("，也就是每次新生代中可用内存空间为整个新生代容量的90% （80%+10%），只有10%的内存会被“浪费”。")]),v._v(" "),r("h6",{attrs:{id:"进入老年代的条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进入老年代的条件"}},[v._v("#")]),v._v(" 进入老年代的条件")]),v._v(" "),r("p",[v._v("1、"),r("strong",[v._v("长期存活的对象：")]),v._v(" 虚拟机给每个对象定义了一个对象年龄计数器。对象在 Survivor 区中每经历一次Minor GC，年龄就增加1岁。当年龄增加到15岁时，这时候就会被转移到老年代。（虚拟机支持配置进入老年代的年龄设置）")]),v._v(" "),r("p",[v._v("2、"),r("strong",[v._v("大对象：")]),v._v(" 大对象指需要大量连续内存空间的对象，在创建时直接进入老年代。这样做主要是为了避免在 Eden 区及2个 Survivor 区之间发生大量的内存复制（如"),r("code",[v._v("int[] intArr = new int[8096]")]),v._v("）。可通过JVM参数 "),r("code",[v._v("-XX:PretenureSizeThreshold")]),v._v("设置。")]),v._v(" "),r("p",[v._v("3、"),r("strong",[v._v("动态对象年龄：")]),v._v(" 当"),r("code",[v._v("Survivor")]),v._v("空间中相同年龄所有对象的大小总和大于"),r("code",[v._v("Survivor")]),v._v("空间的一半，年龄大于或等于该年龄的对象就可以直接进入老年代，而不需要达到默认的分代年龄。")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);