"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[16513],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,b=u["".concat(s,".").concat(f)]||u[f]||p[f]||l;return r?n.createElement(b,o(o({ref:t},d),{},{components:r})):n.createElement(b,o({ref:t},d))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const l={slug:"/zh/sql-reference/distributed-ddl",sidebar_position:32,sidebar_label:"Distributed DDL"},o="\u5206\u5e03\u5f0fDDL\u67e5\u8be2(ON CLUSTER\u6761\u4ef6)",a={unversionedId:"zh/sql-reference/distributed-ddl",id:"zh/sql-reference/distributed-ddl",title:"\u5206\u5e03\u5f0fDDL\u67e5\u8be2(ON CLUSTER\u6761\u4ef6)",description:"distributed-ddl-queries-on-cluster-clause}",source:"@site/docs/zh/sql-reference/distributed-ddl.md",sourceDirName:"zh/sql-reference",slug:"/zh/sql-reference/distributed-ddl",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/distributed-ddl",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/distributed-ddl.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{slug:"/zh/sql-reference/distributed-ddl",sidebar_position:32,sidebar_label:"Distributed DDL"},sidebar:"chinese",previous:{title:"SQL\u8bed\u6cd5",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/syntax"},next:{title:"\u51fd\u6570",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/"}},s={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distributed-ddl-queries-on-cluster-clause"},"\u5206\u5e03\u5f0fDDL\u67e5\u8be2(ON CLUSTER\u6761\u4ef6)"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"DROP"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"RENAME"),"\u67e5\u8be2\u4ec5\u5f71\u54cd\u6267\u884c\u5b83\u4eec\u7684\u5f53\u524d\u670d\u52a1\u5668\u3002 \u5728\u96c6\u7fa4\u8bbe\u7f6e\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"ON CLUSTER"),"\u5b50\u53e5\u4ee5\u5206\u5e03\u5f0f\u65b9\u5f0f\u8fd0\u884c\u6b64\u7c7b\u67e5\u8be2\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u67e5\u8be2\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"cluster"),"\u4e2d\u7684\u6bcf\u4e2a\u4e3b\u673a\u4e0a\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"all_hits")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Distributed"),"\u8868\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS all_hits ON CLUSTER cluster (p Date, i Int32) ENGINE = Distributed(cluster, default, hits)\n")),(0,i.kt)("p",null,"\u4e3a\u4e86\u6b63\u786e\u8fd0\u884c\u8fd9\u4e9b\u67e5\u8be2\uff0c\u6bcf\u4e2a\u4e3b\u673a\u5fc5\u987b\u5177\u6709\u76f8\u540c\u7684\u96c6\u7fa4\u5b9a\u4e49\uff08\u4e3a\u4e86\u7b80\u5316\u540c\u6b65\u914d\u7f6e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528ZooKeeper\u66ff\u6362\uff09\u3002 \u4ed6\u4eec\u8fd8\u5fc5\u987b\u8fde\u63a5\u5230ZooKeeper\u670d\u52a1\u5668\u3002"),(0,i.kt)("p",null,"\u672c\u5730\u7248\u672c\u7684\u67e5\u8be2\u6700\u7ec8\u4f1a\u5728\u96c6\u7fa4\u4e2d\u7684\u6bcf\u53f0\u4e3b\u673a\u4e0a\u6267\u884c\uff0c\u5373\u4f7f\u67d0\u4e9b\u4e3b\u673a\u5f53\u524d\u4e0d\u53ef\u7528\u3002"),(0,i.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u5728\u5355\u4e2a\u4e3b\u673a\u5185\u6267\u884c\u67e5\u8be2\u7684\u987a\u5e8f\u662f\u6709\u4fdd\u8bc1\u7684\u3002'))}p.isMDXComponent=!0}}]);