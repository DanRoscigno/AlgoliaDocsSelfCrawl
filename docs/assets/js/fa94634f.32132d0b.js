"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[73032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,g=c["".concat(p,".").concat(f)]||c[f]||m[f]||s;return n?r.createElement(g,o(o({ref:t},i),{},{components:n})):r.createElement(g,o({ref:t},i))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/zh/sql-reference/aggregate-functions/reference/summap",sidebar_position:141},o="sumMap",l={unversionedId:"zh/sql-reference/aggregate-functions/reference/summap",id:"zh/sql-reference/aggregate-functions/reference/summap",title:"sumMap",description:"agg_functions-summap}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/summap.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/summap",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/summap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/summap.md",tags:[],version:"current",sidebarPosition:141,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/summap",sidebar_position:141},sidebar:"chinese",previous:{title:"deltaSumTimestamp",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/deltasumtimestamp"},next:{title:"minMap",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/minmap"}},p={},u=[],i={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_functions-summap"},"sumMap"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"sumMap(key, value)\n\u6216\nsumMap(Tuple(key, value))\n")),(0,a.kt)("p",null,"\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u6570\u7ec4\u4e2d\u6307\u5b9a\u7684\u952e\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u6570\u7ec4\u8fdb\u884c\u6c42\u548c\u3002"),(0,a.kt)("p",null,"\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u6570\u7ec4\u7684\u5143\u7ec4\u4e0e\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u7684\u4e24\u4e2a\u6570\u7ec4\u662f\u540c\u4e49\u7684\u3002\n\u8981\u603b\u8ba1\u7684\u6bcf\u4e00\u884c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," (\u6570\u7ec4)\u5143\u7d20\u7684\u6570\u91cf\u5fc5\u987b\u76f8\u540c\u3002\n\u8fd4\u56de\u4e24\u4e2a\u6570\u7ec4\u7ec4\u6210\u7684\u4e00\u4e2a\u5143\u7ec4: \u6392\u597d\u5e8f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u4e4b\u548c\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sum_map(\n    date Date,\n    timeslot DateTime,\n    statusMap Nested(\n        status UInt16,\n        requests UInt64\n    ),\n    statusMapTuple Tuple(Array(Int32), Array(Int32))\n) ENGINE = Log;\nINSERT INTO sum_map VALUES\n    ('2000-01-01', '2000-01-01 00:00:00', [1, 2, 3], [10, 10, 10], ([1, 2, 3], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:00:00', [3, 4, 5], [10, 10, 10], ([3, 4, 5], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:01:00', [4, 5, 6], [10, 10, 10], ([4, 5, 6], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:01:00', [6, 7, 8], [10, 10, 10], ([6, 7, 8], [10, 10, 10]));\n\nSELECT\n    timeslot,\n    sumMap(statusMap.status, statusMap.requests),\n    sumMap(statusMapTuple)\nFROM sum_map\nGROUP BY timeslot\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timeslot\u2500\u252c\u2500sumMap(statusMap.status, statusMap.requests)\u2500\u252c\u2500sumMap(statusMapTuple)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2000-01-01 00:00:00 \u2502 ([1,2,3,4,5],[10,10,20,10,10])               \u2502 ([1,2,3,4,5],[10,10,20,10,10]) \u2502\n\u2502 2000-01-01 00:01:00 \u2502 ([4,5,6,7,8],[10,10,20,10,10])               \u2502 ([4,5,6,7,8],[10,10,20,10,10]) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);