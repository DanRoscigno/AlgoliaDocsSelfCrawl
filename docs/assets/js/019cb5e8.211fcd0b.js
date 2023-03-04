"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[3347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/en/faq/integration/file-export",title:"How do I export data from ClickHouse to a file?",toc_hidden:!0,toc_priority:10},i="How Do I Export Data from ClickHouse to a File?",l={unversionedId:"en/faq/integration/file-export",id:"en/faq/integration/file-export",title:"How do I export data from ClickHouse to a file?",description:"how-to-export-to-file}",source:"@site/docs/en/faq/integration/file-export.md",sourceDirName:"en/faq/integration",slug:"/en/faq/integration/file-export",permalink:"/AlgoliaDocsSelfCrawl/en/faq/integration/file-export",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/integration/file-export.md",tags:[],version:"current",frontMatter:{slug:"/en/faq/integration/file-export",title:"How do I export data from ClickHouse to a file?",toc_hidden:!0,toc_priority:10}},c={},s=[{value:"Using INTO OUTFILE Clause",id:"using-into-outfile-clause",level:2},{value:"Using a File-Engine Table",id:"using-a-file-engine-table",level:2},{value:"Using Command-Line Redirection",id:"using-command-line-redirection",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-export-to-file"},"How Do I Export Data from ClickHouse to a File?"),(0,o.kt)("h2",{id:"using-into-outfile-clause"},"Using INTO OUTFILE Clause"),(0,o.kt)("p",null,"Add an ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/into-outfile.md"},"INTO OUTFILE")," clause to your query."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file'\n")),(0,o.kt)("p",null,"By default, ClickHouse uses the ",(0,o.kt)("a",{parentName:"p",href:"../../interfaces/formats.md"},"TabSeparated")," format for output data. To select the ",(0,o.kt)("a",{parentName:"p",href:"../../interfaces/formats.md"},"data format"),", use the ",(0,o.kt)("a",{parentName:"p",href:"../../sql-reference/statements/select/format.md"},"FORMAT clause"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file' FORMAT CSV\n")),(0,o.kt)("h2",{id:"using-a-file-engine-table"},"Using a File-Engine Table"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"../../engines/table-engines/special/file.md"},"File")," table engine."),(0,o.kt)("h2",{id:"using-command-line-redirection"},"Using Command-Line Redirection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --query "SELECT * from table" --format FormatName > result.txt\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"../../interfaces/cli.md"},"clickhouse-client"),"."))}f.isMDXComponent=!0}}]);