(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{757:function(e,t,v){"use strict";v.r(t);var l=v(2),_=Object(l.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h4",{attrs:{id:"淘汰策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#淘汰策略"}},[e._v("#")]),e._v(" 淘汰策略")]),e._v(" "),v("p",[e._v("当Redis占用内存超出最大限制时，可采用如下策略(maxmemory-policy)，")]),e._v(" "),v("p",[e._v("让Redis淘汰一些数据，以腾出空间继续提供读写服务:")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("noeviction：")]),e._v(" 对可能导致增大内存的命令返回错误(大多数写命令，DEL除外);")]),e._v(" "),v("li",[v("strong",[e._v("volatige-ttl：")]),e._v(" 在设置了过期时间的key中，选择剩余寿命（TTI)最短的key，将其淘汰;")]),e._v(" "),v("li",[v("strong",[e._v("volatile-lru：")]),e._v(" 在设置了过期时间的key中，选择最少使用的key (LRU)，将其淘汰;")]),e._v(" "),v("li",[v("strong",[e._v("volatile-random：")]),e._v(" 在设置了过期时间的key中，随机选择一些key，将其淘汰;")]),e._v(" "),v("li",[v("strong",[e._v("allkeys-lru：")]),e._v(" 在所有的key中，选择最少使用的key (LRU)，将其淘汰;")]),e._v(" "),v("li",[v("strong",[e._v("allkeys-random：")]),e._v(" 在所有的key中，随机选择一些key，将其淘汰;")])]),e._v(" "),v("p",[v("strong",[e._v("LRU算法")])]),e._v(" "),v("ul",[v("li",[e._v("维护一个链表，用于顺序存储被访问过的key。在访问数据时，最新访问过的key将被移动到表头，即最近访问的key在表头，最少访问的key在表尾。")])]),e._v(" "),v("p",[v("strong",[e._v("近似LRU算法(Redis)")])]),e._v(" "),v("ul",[v("li",[e._v("给每个ke y维护一个时间戳，淘汰时随机采样5个key，从中淘汰掉最旧的key。如果还是超出内存限制，则继续随机采样淘汰。\n优点：比LRU算法节约内存，却可以取得非常近似的效果。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);