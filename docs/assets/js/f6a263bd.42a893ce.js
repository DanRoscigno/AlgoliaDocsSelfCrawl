"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[50230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=i(n),d=a,y=c["".concat(o,".").concat(d)]||c[d]||u[d]||p;return n?r.createElement(y,s(s({ref:t},m),{},{components:n})):r.createElement(y,s({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,s=new Array(p);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<p;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const p={slug:"/zh/operations/system-tables/opentelemetry_span_log"},s="system.opentelemetry_span_log",l={unversionedId:"zh/operations/system-tables/opentelemetry_span_log",id:"zh/operations/system-tables/opentelemetry_span_log",title:"system.opentelemetry_span_log",description:"systemtables-opentelemetryspan_log}",source:"@site/docs/zh/operations/system-tables/opentelemetry_span_log.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/opentelemetry_span_log",permalink:"/docs/zh/operations/system-tables/opentelemetry_span_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/opentelemetry_span_log.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/opentelemetry_span_log"},sidebar:"chinese",previous:{title:"system.one",permalink:"/docs/zh/operations/system-tables/one"},next:{title:"\u7cfb\u7edf\u3002part_log",permalink:"/docs/zh/operations/system-tables/part_log"}},o={},i=[],m={toc:i},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system_tables-opentelemetry_span_log"},"system.opentelemetry_span_log"),(0,a.kt)("p",null,"\u5305\u542b\u5df2\u6267\u884c\u67e5\u8be2\u7684",(0,a.kt)("a",{parentName:"p",href:"https://opentracing.io/docs/overview/spans/"},"\u8ddf\u8e2a\u8303\u56f4"),"\u7684\u4fe1\u606f."),(0,a.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"trace_id")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/uuid"},"UUID"),") \u2014 \u6267\u884c\u7684\u67e5\u8be2\u7684\u8ddf\u8e2aID.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"span_id")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8ddf\u8e2a \u8de8\u5ea6")," ID.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"parent_span_id")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u7236\u7ea7",(0,a.kt)("inlineCode",{parentName:"p"},"\u8ddf\u8e2a \u8de8\u5ea6")," ID.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"operation_name")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u64cd\u4f5c\u7684\u540d\u79f0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"start_time_us")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8ddf\u8e2a \u8de8\u5ea6")," \u5f00\u59cb\u65f6\u95f4 (\u5fae\u79d2).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"finish_time_us")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 `\u8ddf\u8e2a \u8de8\u5ea6 \u7ed3\u675f\u65f6\u95f4 (\u5fae\u79d2).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"finish_date")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/date"},"Date"),") \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8ddf\u8e2a \u8de8\u5ea6")," \u5b8c\u6210\u65e5\u671f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"attribute.names")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/array"},"Array"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 ",(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/go/instrumentation/#attributes"},"\u5c5e\u6027")," \u540d\u79f0\u53d6\u51b3\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8ddf\u8e2a \u8de8\u5ea6"),". \u5b83\u4eec\u662f\u6839\u636e",(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry"),"\u6807\u51c6\u4e2d\u7684\u5efa\u8bae\u586b\u5199\u7684.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"attribute.values")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/array"},"Array"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u5c5e\u6027\u503c\u53d6\u51b3\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8ddf\u8e2a \u8de8\u5ea6"),". \u5b83\u4eec\u662f\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenTelemetry")," \u6807\u51c6\u4e2d\u7684\u5efa\u8bae\u586b\u5199\u7684."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.opentelemetry_span_log LIMIT 1 FORMAT Vertical;\n")),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntrace_id:         cdab0847-0d62-61d5-4d38-dd65b19a1914\nspan_id:          701487461015578150\nparent_span_id:   2991972114672045096\noperation_name:   DB::Block DB::InterpreterSelectQuery::getSampleBlockImpl()\nstart_time_us:    1612374594529090\nfinish_time_us:   1612374594529108\nfinish_date:      2021-02-03\nattribute.names:  []\nattribute.values: []\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/opentelemetry"},"OpenTelemetry"))))}u.isMDXComponent=!0}}]);