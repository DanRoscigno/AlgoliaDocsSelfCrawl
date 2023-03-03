"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[44984],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=n,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},90400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={slug:"/ru/operations/system-tables/part_log"},i="system.part_log",o={unversionedId:"ru/operations/system-tables/part_log",id:"ru/operations/system-tables/part_log",title:"system.part_log",description:"system_tables-part-log}",source:"@site/docs/ru/operations/system-tables/part_log.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/part_log",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/part_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/part_log.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/part_log"},sidebar:"russia",previous:{title:"system.opentelemetry_span_log",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/opentelemetry_span_log"},next:{title:"system.parts",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/parts"}},p={},s=[],m={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system_tables-part-log"},"system.part_log"),(0,n.kt)("p",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,n.kt)("inlineCode",{parentName:"p"},"system.part_log")," \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-part-log"},"part_log"),"."),(0,n.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0432\u0441\u0435\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445, \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u0434\u0448\u0438\u0445 \u0441 ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/mergetree-family/custom-partitioning-key"},"\u043a\u0443\u0441\u043a\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445")," \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445)."),(0,n.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,n.kt)("inlineCode",{parentName:"li"},"INSERT"),", \u0441\u043e\u0437\u0434\u0430\u0432\u0448\u0435\u0433\u043e \u044d\u0442\u043e\u0442 \u043a\u0443\u0441\u043e\u043a."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event_type")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0442\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f. \u0421\u0442\u043e\u043b\u0431\u0435\u0446 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NEW_PART")," \u2014 \u0432\u0441\u0442\u0430\u0432\u043a\u0430 \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u0443\u0441\u043a\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MERGE_PARTS")," \u2014 \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u043a\u0443\u0441\u043a\u043e\u0432."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DOWNLOAD_PART")," \u2014 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441 \u0440\u0435\u043f\u043b\u0438\u043a\u0438."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"REMOVE_PART")," \u2014 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u043e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/alter/partition#alter_detach-partition"},"DETACH PARTITION"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MUTATE_PART")," \u2014 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u0443\u0441\u043a\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MOVE_PART")," \u2014 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043a\u0443\u0441\u043a\u0430 \u043c\u0435\u0436\u0434\u0443 \u0434\u0438\u0441\u043a\u0430\u043c\u0438."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"merge_reason")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u041f\u0440\u0438\u0447\u0438\u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0441 \u0442\u0438\u043f\u043e\u043c ",(0,n.kt)("inlineCode",{parentName:"li"},"MERGE_PARTS"),". \u041c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NOT_A_MERGE")," \u2014 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f \u0438\u043d\u043e\u0439, \u0447\u0435\u043c ",(0,n.kt)("inlineCode",{parentName:"li"},"MERGE_PARTS"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"REGULAR_MERGE")," \u2014 \u043e\u0431\u044b\u0447\u043d\u043e\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u0435."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TTL_DELETE_MERGE")," \u2014 \u043e\u0447\u0438\u0441\u0442\u043a\u0430 \u0438\u0441\u0442\u0435\u043a\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TTL_RECOMPRESS_MERGE")," \u2014 \u043f\u0435\u0440\u0435\u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0430 \u043a\u0443\u0441\u043a\u0430."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"merge_algorithm")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0441\u043b\u0438\u044f\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0441 \u0442\u0438\u043f\u043e\u043c ",(0,n.kt)("inlineCode",{parentName:"li"},"MERGE_PARTS"),". \u041c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"UNDECIDED")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HORIZONTAL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"VERTICAL")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/date"},"Date"),") \u2014 \u0434\u0430\u0442\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0432\u0440\u0435\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 \u0432\u0440\u0435\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u043a\u0443\u043d\u0434."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration_ms")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"database")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043a\u0443\u0441\u043e\u043a."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"table")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043a\u0443\u0441\u043e\u043a."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"part_name")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043a\u0443\u0441\u043a\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"partition_id")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0431\u044b\u043b \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043a\u0443\u0441\u043e\u043a. \u0412 \u0441\u0442\u043e\u043b\u0431\u0446\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,n.kt)("inlineCode",{parentName:"li"},"all"),", \u0435\u0441\u043b\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044e ",(0,n.kt)("inlineCode",{parentName:"li"},"tuple()"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path_on_disk")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u043a \u043f\u0430\u043f\u043a\u0435 \u0441 \u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rows")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0447\u0438\u0441\u043b\u043e \u0441\u0442\u0440\u043e\u043a \u0432 \u043a\u0443\u0441\u043a\u0435."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"size_in_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0440\u0430\u0437\u043c\u0435\u0440 \u043a\u0443\u0441\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"merged_from")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/array"},"Array(String)"),") \u2014 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u043c\u0451\u043d \u043a\u0443\u0441\u043a\u043e\u0432, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u0443\u0441\u043e\u043a \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u044f (\u0442\u0430\u043a\u0436\u0435 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u0443\u0436\u0435 \u0441\u043c\u0435\u0440\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0443\u0441\u043a\u0430)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bytes_uncompressed")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u0441\u0436\u0430\u0442\u044b\u0445 \u0431\u0430\u0439\u0442."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043e \u0441\u0442\u0440\u043e\u043a \u043f\u0440\u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u0438 \u043a\u0443\u0441\u043a\u043e\u0432."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043e \u0431\u0430\u0439\u0442 \u043f\u0440\u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u0438 \u043a\u0443\u0441\u043a\u043e\u0432."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"peak_memory_usage")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0438 \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0451\u043d\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u044c\u044e \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u043f\u043e\u0442\u043e\u043a\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u043a\u043e\u0434 \u043e\u0448\u0438\u0431\u043a\u0438, \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0435\u0439 \u043f\u0440\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u0441\u043e\u0431\u044b\u0442\u0438\u0438."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"exception")," (",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0442\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438.")),(0,n.kt)("p",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,n.kt)("inlineCode",{parentName:"p"},"system.part_log")," \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u043e\u0439 \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"MergeTree"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.part_log LIMIT 1 FORMAT Vertical;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nquery_id:                      983ad9c7-28d5-4ae1-844e-603116b7de31\nevent_type:                    NewPart\nmerge_reason:                  NotAMerge\nmerge_algorithm:               Undecided\nevent_date:                    2021-02-02\nevent_time:                    2021-02-02 11:14:28\nevent_time_microseconds:                    2021-02-02 11:14:28.861919\nduration_ms:                   35\ndatabase:                      default\ntable:                         log_mt_2\npart_name:                     all_1_1_0\npartition_id:                  all\npath_on_disk:                  db/data/default/log_mt_2/all_1_1_0/\nrows:                          115418\nsize_in_bytes:                 1074311\nmerged_from:                   []\nbytes_uncompressed:            0\nread_rows:                     0\nread_bytes:                    0\npeak_memory_usage:             0\nerror:                         0\nexception:\n")))}c.isMDXComponent=!0}}]);