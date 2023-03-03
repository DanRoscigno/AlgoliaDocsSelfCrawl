"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[2515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/en/sql-reference/table-functions/deltalake",sidebar_label:"DeltaLake"},i="deltaLake Table Function",o={unversionedId:"en/sql-reference/table-functions/deltalake",id:"en/sql-reference/table-functions/deltalake",title:"deltaLake Table Function",description:"Provides a read-only table-like interface to Delta Lake tables in Amazon S3.",source:"@site/docs/en/sql-reference/table-functions/deltalake.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/deltalake",permalink:"/docs/en/sql-reference/table-functions/deltalake",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/deltalake.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/table-functions/deltalake",sidebar_label:"DeltaLake"},sidebar:"english",previous:{title:"format",permalink:"/docs/en/sql-reference/table-functions/format"},next:{title:"Hudi",permalink:"/docs/en/sql-reference/table-functions/hudi"}},s={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Arguments",id:"arguments",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deltalake-table-function"},"deltaLake Table Function"),(0,r.kt)("p",null,"Provides a read-only table-like interface to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/delta-io/delta"},"Delta Lake")," tables in Amazon S3."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"deltaLake(url [,aws_access_key_id, aws_secret_access_key] [,format] [,structure] [,compression])\n")),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," \u2014 Bucket url with path to existing Delta Lake table in S3."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws_access_key_id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"aws_secret_access_key")," - Long-term credentials for the ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/"},"AWS")," account user.  You can use these to authenticate your requests. These parameters are optional. If credentials are not specified, they are used from the ClickHouse configuration. For more information see ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree/#table_engine-mergetree-s3"},"Using S3 for Data Storage"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format")," \u2014 The ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats/#formats"},"format")," of the file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 Structure of the table. Format ",(0,r.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compression")," \u2014 Parameter is optional. Supported values: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"gzip/gz"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"brotli/br"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"xz/LZMA"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"zstd/zst"),". By default, compression will be autodetected by the file extension.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("p",null,"A table with the specified structure for reading data in the specified Delta Lake table in S3."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Selecting rows from the table in S3 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://clickhouse-public-datasets.s3.amazonaws.com/delta_lake/hits/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    URL,\n    UserAgent\nFROM deltaLake('https://clickhouse-public-datasets.s3.amazonaws.com/delta_lake/hits/')\nWHERE URL IS NOT NULL\nLIMIT 2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500URL\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500UserAgent\u2500\u2510\n\u2502 http://auto.ria.ua/search/index.kz/jobinmoscow/detail/55089/hasimages \u2502         1 \u2502\n\u2502 http://auto.ria.ua/search/index.kz/jobinmoscow.ru/gosushi             \u2502         1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/deltalake"},"DeltaLake engine"))))}m.isMDXComponent=!0}}]);