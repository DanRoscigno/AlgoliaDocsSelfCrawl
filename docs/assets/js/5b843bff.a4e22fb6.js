"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[47749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,d=m["".concat(o,".").concat(g)]||m[g]||u[g]||i;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},64330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/zh/operations/system-tables/table_engines",machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},s="\u7cfb\u7edf\u3002\u8868_engines",l={unversionedId:"zh/operations/system-tables/table_engines",id:"zh/operations/system-tables/table_engines",title:"\u7cfb\u7edf\u3002\u8868_engines",description:"system-table-engines}",source:"@site/docs/zh/operations/system-tables/table_engines.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/table_engines",permalink:"/docs/zh/operations/system-tables/table_engines",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/table_engines.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/table_engines",machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.storage_policies",permalink:"/docs/zh/operations/system-tables/storage_policies"},next:{title:"system.tables",permalink:"/docs/zh/operations/system-tables/tables"}},o={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system-table-engines"},"\u7cfb\u7edf\u3002\u8868_engines"),(0,r.kt)("p",null,"\u5305\u542b\u670d\u52a1\u5668\u652f\u6301\u7684\u8868\u5f15\u64ce\u7684\u63cf\u8ff0\u53ca\u5176\u529f\u80fd\u652f\u6301\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u6b64\u8868\u5305\u542b\u4ee5\u4e0b\u5217\uff08\u5217\u7c7b\u578b\u663e\u793a\u5728\u62ec\u53f7\u4e2d):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," (String) \u2014 The name of table engine."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"supports_settings")," (UInt8) \u2014 Flag that indicates if table engine supports ",(0,r.kt)("inlineCode",{parentName:"li"},"SETTINGS")," \u6761\u6b3e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"supports_skipping_indices")," (UInt8) \u2014 Flag that indicates if table engine supports ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-data_skipping-indexes"},"\u8df3\u8fc7\u7d22\u5f15"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"supports_ttl")," (UInt8) \u2014 Flag that indicates if table engine supports ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"supports_sort_order")," (UInt8) \u2014 Flag that indicates if table engine supports clauses ",(0,r.kt)("inlineCode",{parentName:"li"},"PARTITION_BY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PRIMARY_KEY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER_BY")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"SAMPLE_BY"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"supports_replication")," (UInt8) \u2014 Flag that indicates if table engine supports ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/mergetree-family/replication"},"\u6570\u636e\u590d\u5236"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"supports_duduplication")," (UInt8) \u2014 Flag that indicates if table engine supports data deduplication.")),(0,r.kt)("p",null,"\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.table_engines\nWHERE name in ('Kafka', 'MergeTree', 'ReplicatedCollapsingMergeTree')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500supports_settings\u2500\u252c\u2500supports_skipping_indices\u2500\u252c\u2500supports_sort_order\u2500\u252c\u2500supports_ttl\u2500\u252c\u2500supports_replication\u2500\u252c\u2500supports_deduplication\u2500\u2510\n\u2502 Kafka                         \u2502                 1 \u2502                         0 \u2502                   0 \u2502            0 \u2502                    0 \u2502                      0 \u2502\n\u2502 MergeTree                     \u2502                 1 \u2502                         1 \u2502                   1 \u2502            1 \u2502                    0 \u2502                      0 \u2502\n\u2502 ReplicatedCollapsingMergeTree \u2502                 1 \u2502                         1 \u2502                   1 \u2502            1 \u2502                    1 \u2502                      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6885\u6811\u5bb6\u65cf ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree#mergetree-query-clauses"},"\u67e5\u8be2\u5b50\u53e5")),(0,r.kt)("li",{parentName:"ul"},"\u5361\u592b\u5361 ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/kafka#table_engine-kafka-creating-a-table"},"\u8bbe\u7f6e")),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u5165\u6211\u4eec ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/special/join#join-limitations-and-settings"},"\u8bbe\u7f6e"))))}u.isMDXComponent=!0}}]);