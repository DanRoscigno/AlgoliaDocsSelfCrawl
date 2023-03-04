"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[9712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),y=i,g=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},73932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={slug:"/en/cloud/bestpractices/low-cardinality-partitioning-key",sidebar_label:"Choose a Low Cardinality Partitioning Key",title:"Choose a Low Cardinality Partitioning Key"},o=void 0,c={unversionedId:"en/cloud/bestpractices/partitioningkey",id:"en/cloud/bestpractices/partitioningkey",title:"Choose a Low Cardinality Partitioning Key",description:"When you send an insert statement (that should contain many rows - see section above) to a table in ClickHouse Cloud, and that",source:"@site/docs/en/cloud/bestpractices/partitioningkey.md",sourceDirName:"en/cloud/bestpractices",slug:"/en/cloud/bestpractices/low-cardinality-partitioning-key",permalink:"/AlgoliaDocsSelfCrawl/en/cloud/bestpractices/low-cardinality-partitioning-key",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/bestpractices/partitioningkey.md",tags:[],version:"current",frontMatter:{slug:"/en/cloud/bestpractices/low-cardinality-partitioning-key",sidebar_label:"Choose a Low Cardinality Partitioning Key",title:"Choose a Low Cardinality Partitioning Key"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you send an insert statement (that should contain many rows - see ",(0,i.kt)("a",{parentName:"p",href:"#ingest-data-in-bulk"},"section above"),") to a table in ClickHouse Cloud, and that\ntable is not using a ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key.md"},"partitioning key")," then all row data from that insert is written into a new part on storage:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"compression block diagram",src:n(46818).Z,width:"2406",height:"1425"})),(0,i.kt)("p",null,"However, when you send an insert statement to a table in ClickHouse Cloud, and that table has a partitioning key, then ClickHouse:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"checks the partitioning key values of the rows contained in the insert"),(0,i.kt)("li",{parentName:"ul"},"creates one new part on storage per distinct partitioning key value"),(0,i.kt)("li",{parentName:"ul"},"places the rows in the corresponding parts by partitioning key value")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"compression block diagram",src:n(35347).Z,width:"2406",height:"1425"})),(0,i.kt)("p",null,"Therefore, to minimize the number of write requests to the ClickHouse Cloud object storage, use a low cardinality partitioning key or avoid using any partitioning key for your table."))}d.isMDXComponent=!0},46818:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/partitioning-01-20916be1fcc18359081d4620359121f4.png"},35347:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/partitioning-02-e7008ab710a593c841b5983a62a82378.png"}}]);