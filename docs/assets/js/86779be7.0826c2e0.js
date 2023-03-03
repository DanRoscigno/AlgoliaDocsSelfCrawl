"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[9890,9837],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>b});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(i),m=o,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return i?r.createElement(b,a(a({ref:t},u),{},{components:i})):r.createElement(b,a({ref:t},u))}));function b(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<n;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},69930:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=i(87462),o=(i(67294),i(3905));const n={slug:"/en/operations/utilities/odbc-bridge",title:"clickhouse-odbc-bridge"},a=void 0,l={unversionedId:"en/operations/utilities/odbc-bridge",id:"en/operations/utilities/odbc-bridge",title:"clickhouse-odbc-bridge",description:"Simple HTTP-server which works like a proxy for ODBC driver. The main motivation",source:"@site/docs/en/operations/utilities/odbc-bridge.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/odbc-bridge",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/odbc-bridge",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/utilities/odbc-bridge.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/utilities/odbc-bridge",title:"clickhouse-odbc-bridge"},sidebar:"english",previous:{title:"clickhouse-obfuscator",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-obfuscator"},next:{title:"SQL",permalink:"/AlgoliaDocsSelfCrawl/en/analyze"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Example:",id:"example",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Simple HTTP-server which works like a proxy for ODBC driver. The main motivation\nwas possible segfaults or another faults in ODBC implementations, which can\ncrash whole clickhouse-server process."),(0,o.kt)("p",null,"This tool works via HTTP, not via pipes, shared memory, or TCP because:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's simpler to implement"),(0,o.kt)("li",{parentName:"ul"},"It's simpler to debug"),(0,o.kt)("li",{parentName:"ul"},"jdbc-bridge can be implemented in the same way")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," use this tool inside odbc table function and StorageODBC.\nHowever it can be used as standalone tool from command line with the following\nparameters in POST-request URL:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connection_string")," -- ODBC connection string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"columns")," -- columns in ClickHouse NamesAndTypesList format, name in backticks,\ntype as string. Name and type are space separated, rows separated with\nnewline."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_block_size")," -- optional parameter, sets maximum size of single block.\nQuery is send in post body. Response is returned in RowBinary format.")),(0,o.kt)("h2",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-odbc-bridge --http-port 9018 --daemon\n\n$ curl -d "query=SELECT PageID, ImpID, AdType FROM Keys ORDER BY PageID, ImpID" --data-urlencode "connection_string=DSN=ClickHouse;DATABASE=stat" --data-urlencode "sample_block=columns format version: 1\n3 columns:\n\\`PageID\\` String\n\\`ImpID\\` String\n\\`AdType\\` String\n"  "http://localhost:9018/" > result.txt\n\n$ cat result.txt\n12246623837185725195925621517\n')))}d.isMDXComponent=!0},65010:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=i(87462),o=(i(67294),i(3905)),n=i(69930);const a={slug:"/zh/operations/utilities/odbc-bridge",title:"clickhouse-odbc-bridge"},l=void 0,s={unversionedId:"zh/operations/utilities/odbc-bridge",id:"zh/operations/utilities/odbc-bridge",title:"clickhouse-odbc-bridge",description:"",source:"@site/docs/zh/operations/utilities/odbc-bridge.mdx",sourceDirName:"zh/operations/utilities",slug:"/zh/operations/utilities/odbc-bridge",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/odbc-bridge",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/utilities/odbc-bridge.mdx",tags:[],version:"current",frontMatter:{slug:"/zh/operations/utilities/odbc-bridge",title:"clickhouse-odbc-bridge"},sidebar:"chinese",previous:{title:"clickhouse-obfuscator",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-obfuscator"},next:{title:"\u5546\u4e1a\u652f\u6301",permalink:"/AlgoliaDocsSelfCrawl/zh/commercial/"}},c={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.default,{mdxType:"Content"}))}m.isMDXComponent=!0}}]);