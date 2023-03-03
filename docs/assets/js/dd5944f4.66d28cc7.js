"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[32877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||l;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/ru/operations/system-tables/clusters"},s="system.clusters",i={unversionedId:"ru/operations/system-tables/clusters",id:"ru/operations/system-tables/clusters",title:"system.clusters",description:"system-clusters}",source:"@site/docs/ru/operations/system-tables/clusters.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/clusters",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/clusters",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/clusters.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/clusters"},sidebar:"russia",previous:{title:"system.asynchronous_metrics",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/asynchronous_metrics"},next:{title:"system.columns",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/columns"}},o={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-clusters"},"system.clusters"),(0,a.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430\u0445 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432 \u043d\u0438\u0445 \u0432\u0445\u043e\u0434\u044f\u0442."),(0,a.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cluster")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shard_num")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043d\u043e\u043c\u0435\u0440 \u0448\u0430\u0440\u0434\u0430 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 1."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shard_weight")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0432\u0435\u0441 \u0448\u0430\u0440\u0434\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replica_num")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043d\u043e\u043c\u0435\u0440 \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u0432 \u0448\u0430\u0440\u0434\u0435, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 1."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host_name")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0445\u043e\u0441\u0442, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host_address")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 TIP-\u0430\u0434\u0440\u0435\u0441 \u0445\u043e\u0441\u0442\u0430, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0438\u0437 DNS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u043f\u043e\u0440\u0442 \u0434\u043b\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_local")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u0444\u043b\u0430\u0433, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0445\u043e\u0441\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u043b\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default_database")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"errors_count")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u044b\u0445 \u043f\u043e\u043f\u044b\u0442\u043e\u043a \u0445\u043e\u0441\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u043f\u043b\u0438\u043a\u0435."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slowdowns_count")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043c\u0435\u043d \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u0438\u0437-\u0437\u0430 \u0434\u043e\u043b\u0433\u043e\u0433\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043e\u0442 \u043d\u0435\u0435 \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0445\u0435\u0434\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"estimated_recovery_time")," (",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u043a\u0443\u043d\u0434 \u0434\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430, \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0448\u0438\u0431\u043e\u043a \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u043d\u0443\u043b\u0435\u043d\u043e \u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430 \u0441\u0442\u0430\u043d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.clusters LIMIT 2 FORMAT Vertical;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncluster:                 test_cluster_two_shards\nshard_num:               1\nshard_weight:            1\nreplica_num:             1\nhost_name:               127.0.0.1\nhost_address:            127.0.0.1\nport:                    9000\nis_local:                1\nuser:                    default\ndefault_database:\nerrors_count:            0\nslowdowns_count:         0\nestimated_recovery_time: 0\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncluster:                 test_cluster_two_shards\nshard_num:               2\nshard_weight:            1\nreplica_num:             1\nhost_name:               127.0.0.2\nhost_address:            127.0.0.2\nport:                    9000\nis_local:                0\nuser:                    default\ndefault_database:\nerrors_count:            0\nslowdowns_count:         0\nestimated_recovery_time: 0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/special/distributed"},"Table engine Distributed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/settings/settings#settings-distributed_replica_error_cap"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 distributed_replica_error_cap")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/settings/settings#settings-distributed_replica_error_half_life"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 distributed_replica_error_half_life"))))}m.isMDXComponent=!0}}]);