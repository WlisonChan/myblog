(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{730:function(a,s,l){"use strict";l.r(s);var h=l(2),t=Object(h.a)({},(function(){var a=this,s=a.$createElement,l=a._self._c||s;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("h4",{attrs:{id:"hashmap和hashtable"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#hashmap和hashtable"}},[a._v("#")]),a._v(" HashMap和HashTable")]),a._v(" "),l("ul",[l("li",[a._v("HashMap是非线程安全的，HashTable是线程安全的， "),l("strong",[a._v("内部的方法基本都经过synchronized修饰。")])]),a._v(" "),l("li",[a._v("因为同步、哈希性能等原因，性能肯定是HashMap更佳。")]),a._v(" "),l("li",[a._v("HashMap允许键有null值的存在，HashTable中的键不允许有null，直接抛出NullPointerException。")]),a._v(" "),l("li",[a._v("HashMap 默认初始化数组的大小为16，HashTable 为 11，前者扩容时，扩大两倍，后者扩大两倍+1。")]),a._v(" "),l("li",[a._v("HashMap 需要重新计算 hash 值，而 HashTable 直接使用对象的 hashCode")]),a._v(" "),l("li",[a._v("HashMap使用位运算取得哈希，效率高于取模。而HashTable为乘2加1，都是素数和奇数，这样取模哈希结果更均匀。")])])])}),[],!1,null,null,null);s.default=t.exports}}]);