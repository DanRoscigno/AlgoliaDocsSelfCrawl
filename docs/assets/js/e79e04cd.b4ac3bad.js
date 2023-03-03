"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[2100,43799],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=r.createContext({}),a=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=a(o),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return o?r.createElement(f,c(c({ref:t},p),{},{components:o})):r.createElement(f,c({ref:t},p))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=o.length,c=new Array(s);c[0]=d;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[u]="string"==typeof e?e:i,c[1]=n;for(var a=2;a<s;a++)c[a]=o[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},54726:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>n,toc:()=>a});var r=o(87462),i=(o(67294),o(3905));const s={slug:"/en/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor"},c=void 0,n={unversionedId:"en/operations/utilities/clickhouse-compressor",id:"en/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor",description:"Simple program for data compression and decompression.",source:"@site/docs/en/operations/utilities/clickhouse-compressor.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/clickhouse-compressor",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-compressor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/utilities/clickhouse-compressor.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor"},sidebar:"english",previous:{title:"clickhouse-benchmark",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-benchmark"},next:{title:"clickhouse-format",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-format"}},l={},a=[{value:"Examples",id:"examples",level:3}],p={toc:a},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Simple program for data compression and decompression."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Compress data with LZ4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor < input_file > output_file\n")),(0,i.kt)("p",null,"Decompress data from LZ4 format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor --decompress < input_file > output_file\n")),(0,i.kt)("p",null,"Compress data with ZSTD at level 5:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor --codec 'ZSTD(5)' < input_file > output_file\n")),(0,i.kt)("p",null,"Compress data with Delta of four bytes and ZSTD level 10."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor --codec 'Delta(4)' --codec 'ZSTD(10)' < input_file > output_file\n")))}m.isMDXComponent=!0},59783:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=o(87462),i=(o(67294),o(3905)),s=o(54726);const c={sidebar_label:"clickhouse-compressor",slug:"/zh/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor"},n=void 0,l={unversionedId:"zh/operations/utilities/clickhouse-compressor",id:"zh/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor",description:"",source:"@site/docs/zh/operations/utilities/clickhouse-compressor.mdx",sourceDirName:"zh/operations/utilities",slug:"/zh/operations/utilities/clickhouse-compressor",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-compressor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/utilities/clickhouse-compressor.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"clickhouse-compressor",slug:"/zh/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor"},sidebar:"chinese",previous:{title:"\u6027\u80fd\u6d4b\u8bd5",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-benchmark"},next:{title:"clickhouse-copier",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-copier"}},a={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.default,{mdxType:"Content"}))}d.isMDXComponent=!0}}]);