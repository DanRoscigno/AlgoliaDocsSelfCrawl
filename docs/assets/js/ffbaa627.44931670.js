"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[69234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),f=m(a),c=r,N=f["".concat(s,".").concat(c)]||f[c]||k[c]||l;return a?n.createElement(N,i(i({ref:t},o),{},{components:a})):n.createElement(N,i({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[f]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/zh/operations/system-tables/parts"},i="system.parts",p={unversionedId:"zh/operations/system-tables/parts",id:"zh/operations/system-tables/parts",title:"system.parts",description:"system_tables-parts}",source:"@site/docs/zh/operations/system-tables/parts.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/parts",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/parts",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/parts.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/parts"},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002part_log",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/part_log"},next:{title:"system.parts_columns",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/parts_columns"}},s={},m=[],o={toc:m},f="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system_tables-parts"},"system.parts"),(0,r.kt)("p",null,"\u6b64\u7cfb\u7edf\u8868\u5305\u542b ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," \u8868\u5206\u533a\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e00\u884c\u63cf\u8ff0\u4e00\u4e2a\u6570\u636e\u5206\u533a\u3002"),(0,r.kt)("p",null,"\u5217:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"partition")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u5206\u533a\u540d\u79f0\u3002\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/statements/alter/#query_language_queries_alter"},"ALTER")," \u67e5\u8be2\u7684\u8bf4\u660e\uff0c\u6765\u4e86\u89e3\u4ec0\u4e48\u662f\u5206\u533a\u3002"),(0,r.kt)("p",{parentName:"li"},"\u683c\u5f0f:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"YYYYMM")," \u7528\u4e8e\u6309\u6708\u81ea\u52a8\u5206\u533a\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"any_string")," \u624b\u52a8\u5206\u533a\u65f6\uff0c\u662f\u5176\u4ed6\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u6570\u636e\u5206\u533a\u7684\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"part_type")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6570\u636e\u5206\u533a\u7684\u5b58\u50a8\u683c\u5f0f\u3002"),(0,r.kt)("p",{parentName:"li"},"\u53ef\u80fd\u7684\u503c:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wide")," \u2014 \u6bcf\u4e00\u5217\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u4e00\u4e2a\u5355\u72ec\u6587\u4ef6\u4e2d\u5b58\u50a8\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Compact")," \u2014 \u6240\u6709\u5217\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u4e00\u4e2a\u6587\u4ef6\u4e2d\u5b58\u50a8\u3002")),(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u5b58\u50a8\u683c\u5f0f\u7531 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," \u8868\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"min_bytes_for_wide_part")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"min_rows_for_wide_part")," \u63a7\u5236\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"active")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2013 \u6307\u793a\u6570\u636e\u5206\u533a\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u7684\u6807\u5fd7\u3002\u5982\u679c\u6570\u636e\u5206\u533a\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\uff0c\u5219\u6b64\u6570\u636e\u6b63\u5728\u88ab\u8868\u4f7f\u7528\u3002\u53cd\u4e4b\uff0c\u5219\u4e0d\u6d3b\u8dc3(deleted)\u3002\u5408\u5e76\u540e\u4ecd\u4f1a\u4fdd\u7559\u975e\u6d3b\u8dc3\u7684\u6570\u636e\u5206\u533a\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"marks")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u6807\u8bb0\u6570\u3002\u8981\u83b7\u5f97\u6570\u636e\u5206\u533a\u4e2d\u7684\u5927\u81f4\u884c\u6570\uff1a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"marks"),"(\u6807\u8bb0\u6570)\u4e58\u4ee5\u7d22\u5f15\u7c92\u5ea6(\u901a\u5e38\u4e3a 8192)\u3002\u4e0d\u9002\u7528\u4e8e\u81ea\u9002\u5e94\u9897\u7c92\u5ea6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"rows")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u884c\u6570.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bytes_on_disk")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u6570\u636e\u603b\u5927\u5c0f\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data_compressed_bytes")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u6570\u636e\u5206\u533a\u4e2d\u538b\u7f29\u6570\u636e\u7684\u603b\u5927\u5c0f\u3002\u4e0d\u5305\u62ec\u6240\u6709\u8f85\u52a9\u6587\u4ef6\uff08\u4f8b\u5982\uff0c\u5e26\u6709\u6807\u8bb0\u7684\u6587\u4ef6\uff09\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data_uncompressed_bytes")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u6570\u636e\u5206\u533a\u4e2d\u672a\u538b\u7f29\u6570\u636e\u7684\u603b\u5927\u5c0f\u3002\u4e0d\u5305\u62ec\u6240\u6709\u8f85\u52a9\u6587\u4ef6\uff08\u4f8b\u5982\uff0c\u5e26\u6709\u6807\u8bb0\u7684\u6587\u4ef6\uff09\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"marks_bytes")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u5e26\u6709\u6807\u8bb0\u7684\u6587\u4ef6\u7684\u5927\u5c0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"secondary_indices_compressed_bytes")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u6570\u636e\u5206\u533a\u4e2d\u4e8c\u7ea7\u7d22\u5f15\u7684\u538b\u7f29\u6570\u636e\u603b\u5927\u5c0f\u3002\u6240\u6709\u7684\u8f85\u52a9\u6587\u4ef6\uff08\u4f8b\u5982\uff0c\u5e26\u6709\u6807\u8bb0\u7684\u6587\u4ef6\uff09\u90fd\u4e0d\u5305\u62ec\u5728\u5185\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"secondary_indices_uncompressed_bytes")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u6570\u636e\u5206\u533a\u4e2d\u4e8c\u7ea7\u7d22\u5f15\u7684\u672a\u538b\u7f29\u6570\u636e\u7684\u603b\u5927\u5c0f\u3002\u6240\u6709\u7684\u8f85\u52a9\u6587\u4ef6\uff08\u4f8b\u5982\uff0c\u5e26\u6709\u6807\u8bb0\u7684\u6587\u4ef6\uff09\u90fd\u4e0d\u5305\u62ec\u5728\u5185\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"secondary_indices_marks_bytes")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u5e26\u6807\u8bb0\u7684\u4e8c\u7ea7\u7d22\u5f15\u7684\u6587\u4ef6\u5927\u5c0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"modification_time")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2013 \u5305\u542b\u6570\u636e\u5206\u533a\u7684\u76ee\u5f55\u88ab\u4fee\u6539\u7684\u65f6\u95f4\u3002\u8fd9\u901a\u5e38\u5bf9\u5e94\u4e8e\u6570\u636e\u90e8\u5206\u521b\u5efa\u7684\u65f6\u95f4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"remove_time")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2013 \u6570\u636e\u5206\u533a\u53d8\u4e3a\u975e\u6d3b\u52a8\u72b6\u6001\u7684\u65f6\u95f4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"refcount")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2013 \u4f7f\u7528\u6570\u636e\u90e8\u5206\u7684\u4f4d\u7f6e\u6570\u3002\u5927\u4e8e 2 \u7684\u503c\u8868\u793a\u6570\u636e\u90e8\u5206\u7528\u4e8e\u67e5\u8be2\u6216\u662f\u7528\u4e8e\u5408\u5e76\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"min_date")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/date"},"Date"),") \u2013 \u6570\u636e\u90e8\u5206\u4e2d\u65e5\u671f\u952e\u7684\u6700\u5c0f\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"max_date")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/date"},"Date"),") \u2013 \u6570\u636e\u90e8\u5206\u4e2d\u65e5\u671f\u952e\u7684\u6700\u5927\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"min_time")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2013 \u6570\u636e\u90e8\u5206\u4e2d\u65e5\u671f\u548c\u65f6\u95f4\u952e\u7684\u6700\u5c0f\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"max_time"),"(",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2013 \u6570\u636e\u90e8\u5206\u4e2d\u65e5\u671f\u548c\u65f6\u95f4\u952e\u7684\u6700\u5927\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"partition_id")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u5206\u533a\u7684 ID\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"min_block_number")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u5408\u5e76\u540e\u6784\u6210\u5f53\u524d\u90e8\u5206\u7684\u6700\u5c0f\u6570\u636e\u90e8\u5206\u6570\u91cf\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"max_block_number")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u5408\u5e76\u540e\u6784\u6210\u5f53\u524d\u90e8\u5206\u7684\u6700\u5927\u6570\u636e\u90e8\u5206\u6570\u91cf\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"level")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2013 \u5408\u5e76\u6811\u7684\u6df1\u5ea6\u3002\u503c\u4e3a 0 \u8868\u793a\u8be5\u5206\u533a\u662f\u901a\u8fc7\u63d2\u5165\u521b\u5efa\u7684\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u5408\u5e76\u521b\u5efa\u7684\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data_version")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u7528\u4e8e\u786e\u5b9a\u5e94\u5c06\u54ea\u4e9b\u8ba2\u6b63(mutations)\u5e94\u7528\u4e8e\u6570\u636e\u90e8\u5206\uff08\u7248\u672c\u9ad8\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"data_version")," \u7684\u8ba2\u6b63(mutations)\uff09\u7684\u6570\u5b57\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"primary_key_bytes_in_memory")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u4e3b\u952e\u503c\u4f7f\u7528\u7684\u5185\u5b58\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"primary_key_bytes_in_memory_allocated")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u4e3a\u4e3b\u952e\u503c\u4fdd\u7559\u7684\u5185\u5b58\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"is_frozen")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2013 \u663e\u793a\u5206\u533a\u6570\u636e\u5907\u4efd\u5b58\u5728\u7684\u6807\u5fd7\u30021\uff0c\u5907\u4efd\u5b58\u5728\u30020\uff0c\u5907\u4efd\u4e0d\u5b58\u5728\u3002\u66f4\u591a\u7ec6\u8282\uff0c\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/statements/alter/partition#alter_freeze-partition"},"FREEZE PARTITION"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"database")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u6570\u636e\u5e93\u7684\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"table")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u8868\u7684\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"engine")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u4e0d\u5e26\u53c2\u6570\u7684\u8868\u5f15\u64ce\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"path")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u5305\u542b\u6570\u636e\u90e8\u5206\u6587\u4ef6\u7684\u6587\u4ef6\u5939\u7684\u7edd\u5bf9\u8def\u5f84\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"disk")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u5b58\u50a8\u6570\u636e\u90e8\u5206\u7684\u78c1\u76d8\u7684\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"hash_of_all_files")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u538b\u7f29\u6587\u4ef6\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/hash-functions#hash_functions-siphash128"},"sipHash128"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"hash_of_uncompressed_files")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u672a\u538b\u7f29\u6587\u4ef6(\u5e26\u6709\u6807\u8bb0\u7684\u6587\u4ef6\u3001\u7d22\u5f15\u6587\u4ef6\u7b49)\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/hash-functions#hash_functions-siphash128"},"sipHash128"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"uncompressed_hash_of_compressed_files")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2013 \u538b\u7f29\u6587\u4ef6\u4e2d\u7684\u6570\u636e(\u6ca1\u6709\u538b\u7f29\u65f6)\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/hash-functions#hash_functions-siphash128"},"sipHash128"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"delete_ttl_info_min")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2014 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL DELETE \u89c4\u5219")," \u7684\u65e5\u671f\u548c\u65f6\u95f4\u952e\u7684\u6700\u5c0f\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"delete_ttl_info_max")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2014 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL DELETE \u89c4\u5219")," \u7684\u65e5\u671f\u548c\u65f6\u95f4\u952e\u7684\u6700\u5927\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"move_ttl_info.expression")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u8868\u8fbe\u5f0f\u7684\u6570\u7ec4\u3002 \u6bcf\u4e2a\u8868\u8fbe\u5f0f\u5b9a\u4e49\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL MOVE \u89c4\u5219"),"."),(0,r.kt)("p",{parentName:"li"},'!!! note "\u8b66\u544a"\n\u4fdd\u7559 ',(0,r.kt)("inlineCode",{parentName:"p"},"move_ttl_info.expression")," \u6570\u7ec4\u4e3b\u8981\u662f\u4e3a\u4e86\u5411\u540e\u517c\u5bb9\uff0c\u73b0\u5728\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"TTL MOVE")," \u89c4\u5219\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"move_ttl_info.min")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"move_ttl_info.max")," \u5b57\u6bb5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"move_ttl_info.min")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime"),")) \u2014 \u65e5\u671f\u503c\u548c\u65f6\u95f4\u503c\u7684\u6570\u7ec4\u3002\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u63cf\u8ff0\u4e86\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL MOVE rule")," \u7684\u6700\u5c0f\u952e\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"move_ttl_info.max")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime"),")) \u2014 \u65e5\u671f\u503c\u548c\u65f6\u95f4\u503c\u7684\u6570\u7ec4\u3002\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u63cf\u8ff0\u4e86\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL MOVE rule")," \u7684\u6700\u5927\u952e\u503c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bytes")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes_on_disk"),"\u7684\u522b\u540d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"marks_size")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"marks_bytes"),"\u7684\u522b\u540d\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.parts LIMIT 1 FORMAT Vertical;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\npartition:                             tuple()\nname:                                  all_1_4_1_6\npart_type:                             Wide\nactive:                                1\nmarks:                                 2\nrows:                                  6\nbytes_on_disk:                         310\ndata_compressed_bytes:                 157\ndata_uncompressed_bytes:               91\nsecondary_indices_compressed_bytes:    58\nsecondary_indices_uncompressed_bytes:  6\nsecondary_indices_marks_bytes:         48\nmarks_bytes:                           144\nmodification_time:                     2020-06-18 13:01:49\nremove_time:                           1970-01-01 00:00:00\nrefcount:                              1\nmin_date:                              1970-01-01\nmax_date:                              1970-01-01\nmin_time:                              1970-01-01 00:00:00\nmax_time:                              1970-01-01 00:00:00\npartition_id:                          all\nmin_block_number:                      1\nmax_block_number:                      4\nlevel:                                 1\ndata_version:                          6\nprimary_key_bytes_in_memory:           8\nprimary_key_bytes_in_memory_allocated: 64\nis_frozen:                             0\ndatabase:                              default\ntable:                                 months\nengine:                                MergeTree\ndisk_name:                             default\npath:                                  /var/lib/clickhouse/data/default/months/all_1_4_1_6/\nhash_of_all_files:                     2d0657a16d9430824d35e327fcbd87bf\nhash_of_uncompressed_files:            84950cc30ba867c77a408ae21332ba29\nuncompressed_hash_of_compressed_files: 1ad78f1c6843bbfb99a2c931abe7df7d\ndelete_ttl_info_min:                   1970-01-01 00:00:00\ndelete_ttl_info_max:                   1970-01-01 00:00:00\nmove_ttl_info.expression:              []\nmove_ttl_info.min:                     []\nmove_ttl_info.max:                     []\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree(\u5408\u5e76\u6811)\u5bb6\u65cf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"\u5217\u548c\u8868\u7684 TTL"))))}k.isMDXComponent=!0}}]);