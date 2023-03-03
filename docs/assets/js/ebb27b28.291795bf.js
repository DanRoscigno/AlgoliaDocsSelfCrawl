"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[27037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,d=c["".concat(s,".").concat(u)]||c[u]||f[u]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/en/operations/system-tables/trace_log"},i="trace_log",o={unversionedId:"en/operations/system-tables/trace_log",id:"en/operations/system-tables/trace_log",title:"trace_log",description:"Contains stack traces collected by the sampling query profiler.",source:"@site/docs/en/operations/system-tables/trace_log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/trace_log",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/trace_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/trace_log.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/trace_log"},sidebar:"english",previous:{title:"time_zones",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/time_zones"},next:{title:"users",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/users"}},s={},p=[],m={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"trace_log"},"trace_log"),(0,r.kt)("p",null,"Contains stack traces collected by the sampling query profiler."),(0,r.kt)("p",null,"ClickHouse creates this table when the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/server-configuration-parameters/settings#server_configuration_parameters-trace_log"},"trace_log")," server configuration section is set. Also see settings: ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#query_profiler_real_time_period_ns"},"query_profiler_real_time_period_ns"),", ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#query_profiler_cpu_time_period_ns"},"query_profiler_cpu_time_period_ns"),", ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#memory_profiler_step"},"memory_profiler_step"),",\n",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#memory_profiler_sample_probability"},"memory_profiler_sample_probability"),", ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#trace_profile_events"},"trace_profile_events"),"."),(0,r.kt)("p",null,"To analyze logs, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"addressToLine"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"addressToLineWithInlines"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"addressToSymbol")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"demangle")," introspection functions."),(0,r.kt)("p",null,"Columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"event_date")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date"),") \u2014 Date of sampling moment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"event_time")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Timestamp of the sampling moment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"event_time_microseconds")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 Timestamp of the sampling moment with microseconds precision.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timestamp_ns")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Timestamp of the sampling moment in nanoseconds.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"revision")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ClickHouse server build revision."),(0,r.kt)("p",{parentName:"li"},"When connecting to the server by ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),", you see the string similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"Connected to ClickHouse server version 19.18.1 revision 54429."),". This field contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"revision"),", but not the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," of a server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"trace_type")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Trace type:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Real")," represents collecting stack traces by wall-clock time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CPU")," represents collecting stack traces by CPU time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Memory")," represents collecting allocations and deallocations when memory allocation exceeds the subsequent watermark."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MemorySample")," represents collecting random allocations and deallocations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MemoryPeak")," represents collecting updates of peak memory usage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ProfileEvent")," represents collecting of increments of profile events."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"thread_number")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Thread identifier.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"query_id")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Query identifier that can be used to get details about a query that was running from the ",(0,r.kt)("a",{parentName:"p",href:"#system_tables-query_log"},"query_log")," system table.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"trace")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(UInt64)"),") \u2014 Stack trace at the moment of sampling. Each element is a virtual memory address inside ClickHouse server process.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"size")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"Int64"),") - For trace types ",(0,r.kt)("inlineCode",{parentName:"p"},"Memory"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MemorySample")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"MemoryPeak")," is the amount of memory allocated, for other trace types is 0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"event")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),") - For trace type ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileEvent")," is the name of updated profile event, for other trace types is an empty string.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"increment")," (",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),") - For trace type ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileEvent")," is the amount of incremnt of profile event, for other trace types is 0."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.trace_log LIMIT 1 \\G\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:              2020-09-10\nevent_time:              2020-09-10 11:23:09\nevent_time_microseconds: 2020-09-10 11:23:09.872924\ntimestamp_ns:            1599762189872924510\nrevision:                54440\ntrace_type:              Memory\nthread_id:               564963\nquery_id:\ntrace:                   [371912858,371912789,371798468,371799717,371801313,371790250,624462773,566365041,566440261,566445834,566460071,566459914,566459842,566459580,566459469,566459389,566459341,566455774,371993941,371988245,372158848,372187428,372187309,372187093,372185478,140222123165193,140222122205443]\nsize:                    5244400\n")))}f.isMDXComponent=!0}}]);