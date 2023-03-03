"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[35419],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),f=n,g=m["".concat(i,".").concat(f)]||m[f]||u[f]||l;return a?r.createElement(g,s(s({ref:t},c),{},{components:a})):r.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={slug:"/zh/operations/system-tables/grants"},s="system.grants",o={unversionedId:"zh/operations/system-tables/grants",id:"zh/operations/system-tables/grants",title:"system.grants",description:"system_tables-grants}",source:"@site/docs/zh/operations/system-tables/grants.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/grants",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/grants",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/grants.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/grants"},sidebar:"chinese",previous:{title:"system.functions",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/functions"},next:{title:"\u7cfb\u7edf\u3002graphite_retentions",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/graphite_retentions"}},i={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system_tables-grants"},"system.grants"),(0,n.kt)("p",null,"\u6388\u4e88ClickHouse\u7528\u6237\u5e10\u6237\u7684\u6743\u9650."),(0,n.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u7528\u6237\u540d\u79f0.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u5206\u914d\u7ed9\u7528\u6237\u5e10\u53f7\u7684\u89d2\u8272.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"access_type")," (",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/enum"},"Enum8"),") \u2014 ClickHouse\u7528\u6237\u5e10\u53f7\u7684\u63a5\u5165\u53c2\u6570.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"database")," (",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u6570\u636e\u5e93\u540d\u79f0.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"table")," (",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u8868\u540d\u79f0.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"column")," (",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u88ab\u6388\u4e88\u8bbf\u95ee\u6743\u9650\u7684\u5217\u7684\u540d\u79f0.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"is_partial_revoke")," (",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u903b\u8f91\u503c. \u5b83\u663e\u793a\u4e86\u67d0\u4e9b\u7279\u6743\u662f\u5426\u88ab\u53d6\u6d88. \u53ef\u80fd\u7684\u503c:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"0")," \u2014 \u8be5\u884c\u63cf\u8ff0\u4e86\u90e8\u5206\u64a4\u9500.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"1")," \u2014 \u8fd9\u4e00\u884c\u63cf\u8ff0\u4e86\u4e00\u4e2a\u6388\u6743.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"grant_option")," (",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u88ab\u6388\u4e88",(0,n.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION")," \u6743\u9650, \u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT"),"."))))}u.isMDXComponent=!0}}]);