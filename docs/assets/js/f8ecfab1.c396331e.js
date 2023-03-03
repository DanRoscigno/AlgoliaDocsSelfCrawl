"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[83339,86580],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={slug:"/en/sql-reference/data-types/date32",sidebar_position:48,sidebar_label:"Date32"},l="Date32",o={unversionedId:"en/sql-reference/data-types/date32",id:"en/sql-reference/data-types/date32",title:"Date32",description:"A date. Supports the date range same with DateTime64. Stored as a signed 32-bit integer in native byte order with the value representing the days since 1970-01-01 (0 represents 1970-01-01 and negative values represent the days before 1970).",source:"@site/docs/en/sql-reference/data-types/date32.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/date32",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date32",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/date32.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{slug:"/en/sql-reference/data-types/date32",sidebar_position:48,sidebar_label:"Date32"},sidebar:"english",previous:{title:"Date",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},next:{title:"DateTime",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"}},i={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"date32"},"Date32"),(0,a.kt)("p",null,"A date. Supports the date range same with ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime64"},"DateTime64"),". Stored as a signed 32-bit integer in native byte order with the value representing the days since 1970-01-01 (0 represents 1970-01-01 and negative values represent the days before 1970)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("p",null,"Creating a table with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Date32"),"-type column and inserting data into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE new\n(\n    `timestamp` Date32,\n    `event_id` UInt8\n)\nENGINE = TinyLog;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO new VALUES (4102444800, 1), ('2100-01-01', 2);\nSELECT * FROM new;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2100-01-01 \u2502        1 \u2502\n\u2502 2100-01-01 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/type-conversion-functions#todate32"},"toDate32")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/type-conversion-functions#todate32-or-zero"},"toDate32OrZero")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/type-conversion-functions#todate32-or-null"},"toDate32OrNull"))))}u.isMDXComponent=!0},30218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),s=r(50485);const l={slug:"/zh/sql-reference/data-types/date32",sidebar_position:48,sidebar_label:"Date32"},o=void 0,i={unversionedId:"zh/sql-reference/data-types/date32",id:"zh/sql-reference/data-types/date32",title:"date32",description:"",source:"@site/docs/zh/sql-reference/data-types/date32.mdx",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/date32",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/date32",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/date32.mdx",tags:[],version:"current",sidebarPosition:48,frontMatter:{slug:"/zh/sql-reference/data-types/date32",sidebar_position:48,sidebar_label:"Date32"},sidebar:"chinese",previous:{title:"UUID",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/uuid"},next:{title:"DateTime64",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime64"}},c={},p=[],d={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.default,{mdxType:"Content"}))}f.isMDXComponent=!0}}]);