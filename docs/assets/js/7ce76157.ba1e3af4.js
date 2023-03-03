"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[2574],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(t),m=o,u=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return t?r.createElement(u,a(a({ref:n},c),{},{components:t})):r.createElement(u,a({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=t[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6537:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=t(87462),o=(t(67294),t(3905));const i={slug:"/en/engines/table-engines/log-family/log",toc_priority:33,toc_title:"Log"},a="Log",l={unversionedId:"en/engines/table-engines/log-family/log",id:"en/engines/table-engines/log-family/log",title:"Log",description:"The engine belongs to the family of Log engines. See the common properties of Log engines and their differences in the Log Engine Family article.",source:"@site/docs/en/engines/table-engines/log-family/log.md",sourceDirName:"en/engines/table-engines/log-family",slug:"/en/engines/table-engines/log-family/log",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/log-family/log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/log-family/log.md",tags:[],version:"current",frontMatter:{slug:"/en/engines/table-engines/log-family/log",toc_priority:33,toc_title:"Log"},sidebar:"english",previous:{title:"Log Family",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/log-family/"},next:{title:"Stripelog",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/log-family/stripelog"}},s={},g=[],c={toc:g},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log"},"Log"),(0,o.kt)("p",null,"The engine belongs to the family of ",(0,o.kt)("inlineCode",{parentName:"p"},"Log")," engines. See the common properties of ",(0,o.kt)("inlineCode",{parentName:"p"},"Log")," engines and their differences in the ",(0,o.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/log-family/"},"Log Engine Family")," article."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Log")," differs from ",(0,o.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/log-family/tinylog"},"TinyLog"),' in that a small file of "marks" resides with the column files. These marks are written on every data block and contain offsets that indicate where to start reading the file in order to skip the specified number of rows. This makes it possible to read table data in multiple threads.\nFor concurrent data access, the read operations can be performed simultaneously, while write operations block reads and each other.\nThe ',(0,o.kt)("inlineCode",{parentName:"p"},"Log")," engine does not support indexes. Similarly, if writing to a table failed, the table is broken, and reading from it returns an error. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Log")," engine is appropriate for temporary data, write-once tables, and for testing or demonstration purposes."))}f.isMDXComponent=!0}}]);