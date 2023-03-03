"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[27269],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(a),c=l,u=k["".concat(p,".").concat(c)]||k[c]||d[c]||r;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},86673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={slug:"/zh/operations/system-tables/zookeeper_log"},i="system.zookeeper_log",o={unversionedId:"zh/operations/system-tables/zookeeper_log",id:"zh/operations/system-tables/zookeeper_log",title:"system.zookeeper_log",description:"system-zookeeper_log}",source:"@site/docs/zh/operations/system-tables/zookeeper_log.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/zookeeper_log",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/zookeeper_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/zookeeper_log.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/zookeeper_log"},sidebar:"chinese",previous:{title:"system.zookeeper",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/zookeeper"},next:{title:"\u6d4b\u8bd5\u786c\u4ef6",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/performance-test"}},p={},s=[],m={toc:s},k="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"system-zookeeper_log"},"system.zookeeper_log"),(0,l.kt)("p",null,"\u6b64\u8868\u5305\u542b\u6709\u5173\u5bf9 ZooKeeper \u670d\u52a1\u5668\u7684\u8bf7\u6c42\u53ca\u5176\u54cd\u5e94\u7684\u53c2\u6570\u7684\u4fe1\u606f."),(0,l.kt)("p",null,"\u5bf9\u4e8e\u8bf7\u6c42\uff0c\u53ea\u586b\u5145\u6709\u8bf7\u6c42\u53c2\u6570\u7684\u5217\uff0c\u5176\u4f59\u5217\u586b\u5145\u9ed8\u8ba4\u503c (",(0,l.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"). \u5f53\u54cd\u5e94\u5230\u8fbe\u65f6\uff0c\u6765\u81ea\u54cd\u5e94\u7684\u6570\u636e\u88ab\u6dfb\u52a0\u5230\u5176\u4ed6\u5217."),(0,l.kt)("p",null,"\u5e26\u6709\u8bf7\u6c42\u53c2\u6570\u7684\u5217:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/enum"},"Enum"),") \u2014 ZooKeeper \u5ba2\u6237\u7aef\u4e2d\u7684\u4e8b\u4ef6\u7c7b\u578b. \u53ef\u4ee5\u5177\u6709\u4ee5\u4e0b\u503c\u4e4b\u4e00:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Request")," \u2014 \u8bf7\u6c42\u5df2\u53d1\u9001."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Response")," \u2014 \u5df2\u6536\u5230\u56de\u590d."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Finalize")," \u2014 \u8fde\u63a5\u4e22\u5931, \u672a\u6536\u5230\u54cd\u5e94."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/date"},"Date"),") \u2014 \u4e8b\u4ef6\u53d1\u751f\u7684\u65e5\u671f."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 \u4e8b\u4ef6\u53d1\u751f\u7684\u65e5\u671f\u548c\u65f6\u95f4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"address")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 \u7528\u4e8e\u53d1\u51fa\u8bf7\u6c42\u7684 ZooKeeper \u670d\u52a1\u5668\u7684 IP \u5730\u5740."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"port")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u7528\u4e8e\u53d1\u51fa\u8bf7\u6c42\u7684 ZooKeeper \u670d\u52a1\u5668\u7684\u7aef\u53e3."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"session_id")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int64"),") \u2014 ZooKeeper \u670d\u52a1\u5668\u4e3a\u6bcf\u4e2a\u8fde\u63a5\u8bbe\u7f6e\u7684\u4f1a\u8bdd ID."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"xid")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u4f1a\u8bdd\u4e2d\u8bf7\u6c42\u7684 ID. \u8fd9\u901a\u5e38\u662f\u4e00\u4e2a\u8fde\u7eed\u7684\u8bf7\u6c42\u7f16\u53f7. \u8bf7\u6c42\u884c\u548c\u914d\u5bf9\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"response"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"finalize")," \u884c\u76f8\u540c."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"has_watch")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u8bf7\u6c42\u662f\u5426\u8bbe\u7f6e\u4e86 ",(0,l.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html#ch_zkWatches"},"watch")," ."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"op_num")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/enum"},"Enum"),") \u2014 \u8bf7\u6c42\u6216\u54cd\u5e94\u7684\u7c7b\u578b."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8bf7\u6c42\u4e2d\u6307\u5b9a\u7684 ZooKeeper \u8282\u70b9\u7684\u8def\u5f84, \u5982\u679c\u8bf7\u6c42\u4e0d\u9700\u8981\u6307\u5b9a\u8def\u5f84, \u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5199\u5165 ZooKeeper \u8282\u70b9\u7684\u6570\u636e(\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"SET")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATE")," \u8bf7\u6c42 - \u8bf7\u6c42\u60f3\u8981\u5199\u5165\u7684\u5185\u5bb9\uff0c\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"GET")," \u8bf7\u6c42\u7684\u54cd\u5e94 - \u8bfb\u53d6\u7684\u5185\u5bb9)\u6216\u7a7a\u5b57\u7b26\u4e32."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_ephemeral")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 ZooKeeper \u8282\u70b9\u662f\u5426\u88ab\u521b\u5efa\u4e3a ",(0,l.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html#Ephemeral+Nodes"},"ephemeral"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_sequential")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 ZooKeeper \u8282\u70b9\u662f\u5426\u88ab\u521b\u5efa\u4e3a ",(0,l.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html#Sequence+Nodes+--+Unique+Naming"},"sequential"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"Nullable(Int32)"),") \u2014 \u8bf7\u6c42\u6267\u884c\u65f6\u671f\u671b\u7684 ZooKeeper \u8282\u70b9\u7684\u7248\u672c. \u8fd9\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"li"},"CHECK"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"SET"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"REMOVE"),"\u8bf7\u6c42(\u5982\u679c\u8bf7\u6c42\u4e0d\u68c0\u67e5\u7248\u672c, \u5219\u4e3a\u76f8\u5173\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"-1"),"\u6216\u4e0d\u652f\u6301\u7248\u672c\u68c0\u67e5\u7684\u5176\u4ed6\u8bf7\u6c42\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"requests_size")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014\u591a\u8bf7\u6c42\u4e2d\u5305\u542b\u7684\u8bf7\u6c42\u6570(\u8fd9\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u8bf7\u6c42\uff0c\u7531\u51e0\u4e2a\u8fde\u7eed\u7684\u666e\u901a\u8bf7\u6c42\u7ec4\u6210, \u5e76\u4ee5\u539f\u5b50\u65b9\u5f0f\u6267\u884c). \u591a\u8bf7\u6c42\u4e2d\u5305\u542b\u7684\u6240\u6709\u8bf7\u6c42\u90fd\u5c06\u5177\u6709\u76f8\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"xid"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"request_idx")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u5305\u542b\u5728\u591a\u8bf7\u6c42\u4e2d\u7684\u8bf7\u6c42\u6570(\u5bf9\u4e8e\u591a\u8bf7\u6c42 \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"\uff0c\u7136\u540e\u4ece ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," \u5f00\u59cb).")),(0,l.kt)("p",null,"\u5e26\u6709\u8bf7\u6c42\u54cd\u5e94\u53c2\u6570\u7684\u5217:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zxid")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int64"),") \u2014 ZooKeeper \u4e8b\u52a1 ID. ZooKeeper \u670d\u52a1\u5668\u54cd\u5e94\u6210\u529f\u6267\u884c\u7684\u8bf7\u6c42\u800c\u53d1\u51fa\u7684\u5e8f\u5217\u53f7(",(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u8868\u793a\u8bf7\u6c42\u6ca1\u6709\u6267\u884c/\u8fd4\u56de\u9519\u8bef/\u5ba2\u6237\u7aef\u4e0d\u77e5\u9053\u8bf7\u6c42\u662f\u5426\u88ab\u6267\u884c)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"error")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"Nullable(Enum)"),") \u2014 \u9519\u8bef\u4ee3\u7801. \u53ef\u4ee5\u6709\u5f88\u591a\u503c, \u8fd9\u91cc\u53ea\u662f\u5176\u4e2d\u7684\u4e00\u4e9b:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZOK")," \u2014 \u8bf7\u6c42\u88ab\u5b89\u5168\u6267\u884c."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZCONNECTIONLOSS")," \u2014 \u8fde\u63a5\u4e22\u5931."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZOPERATIONTIMEOUT")," \u2014 \u8bf7\u6c42\u6267\u884c\u8d85\u65f6\u5df2\u8fc7\u671f."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZSESSIONEXPIRED")," \u2014 \u4f1a\u8bdd\u5df2\u8fc7\u671f."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," \u2014 \u8bf7\u6c42\u5b8c\u6210."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"watch_type")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"Nullable(Enum)"),") \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"watch")," \u4e8b\u4ef6\u7684\u7c7b\u578b(\u5bf9\u4e8e\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"op_num")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"Watch")," \u7684\u54cd\u5e94), \u5bf9\u4e8e\u5176\u4f59\u54cd\u5e94\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"watch_state")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"Nullable(Enum)"),") \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"watch")," \u4e8b\u4ef6\u7684\u72b6\u6001(\u5bf9\u4e8e\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"op_num")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"Watch")," \u7684\u54cd\u5e94), \u5bf9\u4e8e\u5176\u4f59\u54cd\u5e94\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path_created")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2014 \u521b\u5efa\u7684 ZooKeeper \u8282\u70b9\u7684\u8def\u5f84(\u7528\u4e8e\u54cd\u5e94 ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATE")," \u8bf7\u6c42)\uff0c\u5982\u679c\u8282\u70b9\u88ab\u521b\u5efa\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"sequential"),", \u5219\u53ef\u80fd\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"path")," \u4e0d\u540c."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stat_czxid")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u5bfc\u81f4\u521b\u5efa\u6b64 ZooKeeper \u8282\u70b9\u7684\u66f4\u6539\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"zxid"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stat_mzxid")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u6700\u540e\u4e00\u6b21\u4fee\u6539\u8be5ZooKeeper\u8282\u70b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"zxid"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stat_pzxid")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u6700\u540e\u4e00\u6b21\u4fee\u6539\u8be5ZooKeeper\u8282\u70b9\u7684\u5b50\u8282\u70b9\u7684\u4e8b\u52a1ID"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stat_version")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u6b64 ZooKeeper \u8282\u70b9\u7684\u6570\u636e\u66f4\u6539\u6b21\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stat_cversion")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u6b64 ZooKeeper \u8282\u70b9\u7684\u5b50\u8282\u70b9\u7684\u66f4\u6539\u6b21\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stat_dataLength")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u8fd9\u4e2a ZooKeeper \u8282\u70b9\u7684\u6570\u636e\u5b57\u6bb5\u7684\u957f\u5ea6."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stat_numChildren")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u6b64 ZooKeeper \u8282\u70b9\u7684\u5b50\u8282\u70b9\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"children")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/array"},"Array(String)"),") \u2014 ZooKeeper \u5b50\u8282\u70b9\u5217\u8868(\u7528\u4e8e\u54cd\u5e94 ",(0,l.kt)("inlineCode",{parentName:"li"},"LIST")," \u8bf7\u6c42).")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.zookeeper_log WHERE (session_id = '106662742089334927') AND (xid = '10858') FORMAT Vertical;\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:             Request\nevent_date:       2021-08-09\nevent_time:       2021-08-09 21:38:30.291792\naddress:          ::\nport:             2181\nsession_id:       106662742089334927\nxid:              10858\nhas_watch:        1\nop_num:           List\npath:             /clickhouse/task_queue/ddl\ndata:             \nis_ephemeral:     0\nis_sequential:    0\nversion:          \u1d3a\u1d41\u1d38\u1d38\nrequests_size:    0\nrequest_idx:      0\nzxid:             0\nerror:            \u1d3a\u1d41\u1d38\u1d38\nwatch_type:       \u1d3a\u1d41\u1d38\u1d38\nwatch_state:      \u1d3a\u1d41\u1d38\u1d38\npath_created:     \nstat_czxid:       0\nstat_mzxid:       0\nstat_pzxid:       0\nstat_version:     0\nstat_cversion:    0\nstat_dataLength:  0\nstat_numChildren: 0\nchildren:         []\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:             Response\nevent_date:       2021-08-09\nevent_time:       2021-08-09 21:38:30.292086\naddress:          ::\nport:             2181\nsession_id:       106662742089334927\nxid:              10858\nhas_watch:        1\nop_num:           List\npath:             /clickhouse/task_queue/ddl\ndata:             \nis_ephemeral:     0\nis_sequential:    0\nversion:          \u1d3a\u1d41\u1d38\u1d38\nrequests_size:    0\nrequest_idx:      0\nzxid:             16926267\nerror:            ZOK\nwatch_type:       \u1d3a\u1d41\u1d38\u1d38\nwatch_state:      \u1d3a\u1d41\u1d38\u1d38\npath_created:     \nstat_czxid:       16925469\nstat_mzxid:       16925469\nstat_pzxid:       16926179\nstat_version:     0\nstat_cversion:    7\nstat_dataLength:  0\nstat_numChildren: 7\nchildren:         ['query-0000000006','query-0000000005','query-0000000004','query-0000000003','query-0000000002','query-0000000001','query-0000000000']\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/operations/tips#zookeeper"},"ZooKeeper")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html"},"ZooKeeper \u6307\u5357"))))}d.isMDXComponent=!0}}]);