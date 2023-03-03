"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[52568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const l={slug:"/zh/operations/settings/permissions-for-queries",sidebar_position:58,sidebar_label:"\u67e5\u8be2\u6743\u9650"},a="\u67e5\u8be2\u6743\u9650",o={unversionedId:"zh/operations/settings/permissions-for-queries",id:"zh/operations/settings/permissions-for-queries",title:"\u67e5\u8be2\u6743\u9650",description:"permissionsforqueries}",source:"@site/docs/zh/operations/settings/permissions-for-queries.md",sourceDirName:"zh/operations/settings",slug:"/zh/operations/settings/permissions-for-queries",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/settings/permissions-for-queries",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/settings/permissions-for-queries.md",tags:[],version:"current",sidebarPosition:58,frontMatter:{slug:"/zh/operations/settings/permissions-for-queries",sidebar_position:58,sidebar_label:"\u67e5\u8be2\u6743\u9650"},sidebar:"chinese",previous:{title:"\u8bbe\u7f6e",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/settings/settings"},next:{title:"\u8bbe\u7f6e\u914d\u7f6e",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/settings/settings-profiles"}},s={},p=[{value:"readonly",id:"settings_readonly",level:2},{value:"allow_ddl",id:"settings_allow_ddl",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"permissions_for_queries"},"\u67e5\u8be2\u6743\u9650"),(0,i.kt)("p",null,"ClickHouse\u4e2d\u7684\u67e5\u8be2\u53ef\u4ee5\u5206\u4e3a\u51e0\u79cd\u7c7b\u578b:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8bfb\u53d6\u6570\u636e\u7684\u67e5\u8be2\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"SHOW")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"DESCRIBE")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"EXISTS")," \u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5199\u5165\u6570\u636e\u7684\u67e5\u8be2\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"OPTIMIZE")," \u3002"),(0,i.kt)("li",{parentName:"ol"},"\u66f4\u6539\u8bbe\u7f6e\u7684\u67e5\u8be2\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"SET")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"USE")," \u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/zh-cn/%E6%95%B0%E6%8D%AE%E5%AE%9A%E4%B9%89%E8%AF%AD%E8%A8%80"},"DDL")," \u67e5\u8be2: ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"ALTER")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"RENAME")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"ATTACH")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"DETACH")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"DROP")," \uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"TRUNCATE")," \u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"KILL QUERY")," \u3002")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u8bbe\u7f6e\u6309\u67e5\u8be2\u7c7b\u578b\u89c4\u8303\u7528\u6237\u6743\u9650:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#settings_readonly"},"readonly")," \u2014 \u5bf9\u9664 DDL \u67e5\u8be2\u4ee5\u5916\u7684\u6240\u6709\u7c7b\u578b\u9650\u5236\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#settings_allow_ddl"},"allow_ddl")," \u2014  \u5bf9 DDL \u67e5\u8be2\u9650\u5236\u6743\u9650\u3002")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"KILL QUERY")," \u53ef\u4ee5\u4e0e\u4efb\u4f55\u8bbe\u7f6e\u8fdb\u884c\u3002"),(0,i.kt)("h2",{id:"settings_readonly"},"readonly"),(0,i.kt)("p",null,"\u9650\u5236\u8bfb\u53d6\u6570\u636e\u3001\u5199\u5165\u6570\u636e\u548c\u66f4\u6539\u8bbe\u7f6e\u67e5\u8be2\u7684\u6743\u9650\u3002"),(0,i.kt)("p",null,"\u67e5\u770b\u67e5\u8be2\u5982\u4f55\u5212\u5206\u4e3a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#permissions_for_queries"},"\u4e0a\u8ff0"))," \u7684\u591a\u79cd\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u53ef\u80fd\u7684\u503c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 \u2014 \u6240\u6709\u67e5\u8be2\u90fd\u88ab\u5141\u8bb8\u3002"),(0,i.kt)("li",{parentName:"ul"},"1 \u2014 \u53ea\u6709\u8bfb\u53d6\u6570\u636e\u7684\u67e5\u8be2\u88ab\u5141\u8bb8\u3002"),(0,i.kt)("li",{parentName:"ul"},"2 \u2014 \u8bfb\u53d6\u6570\u636e\u4ee5\u53ca\u53d8\u66f4\u8bbe\u7f6e\u7684\u67e5\u8be2\u88ab\u5141\u8bb8\u3002")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly = 1")," \u540e\uff0c\u7528\u6237\u65e0\u6cd5\u5728\u5f53\u524d\u4f1a\u8bdd\u4e2d\u66f4\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_ddl")," \u8bbe\u7f6e\u3002"),(0,i.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/interfaces/http"},"HTTP\u63a5\u53e3")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," \u65b9\u6cd5\u65f6\uff0c\u5c06\u81ea\u52a8\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly = 1")," \u3002 \u8981\u4fee\u6539\u6570\u636e\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," \u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly = 1")," \u5c06\u7981\u6b62\u7528\u6237\u7684\u66f4\u6539\u4efb\u4f55\u8bbe\u7f6e\u3002\u6709\u4e00\u79cd\u65b9\u6cd5\u53ef\u4ee5\u53ea\u7981\u6b62\u7528\u6237\u66f4\u6539\u7279\u5b9a\u7684\u8bbe\u7f6e\uff0c\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/operations/settings/constraints-on-settings"},"\u5bf9\u8bbe\u7f6e\u7684\u9650\u5236"),"\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a0"),(0,i.kt)("h2",{id:"settings_allow_ddl"},"allow_ddl"),(0,i.kt)("p",null,"\u5141\u8bb8\u6216\u62d2\u7edd ",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/zh-cn/%E6%95%B0%E6%8D%AE%E5%AE%9A%E4%B9%89%E8%AF%AD%E8%A8%80"},"DDL")," \u67e5\u8be2\u3002"),(0,i.kt)("p",null,"\u4ece ",(0,i.kt)("a",{parentName:"p",href:"#permissions_for_queries"},"\u4e0a\u6587")," \u67e5\u770b\u67e5\u8be2\u662f\u5982\u4f55\u88ab\u5212\u5206\u4e3a\u591a\u79cd\u7c7b\u578b\u7684\u3002"),(0,i.kt)("p",null,"\u53ef\u80fd\u7684\u503c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 \u2014 DDL \u67e5\u8be2\u4e0d\u88ab\u5141\u8bb8\u3002"),(0,i.kt)("li",{parentName:"ul"},"1 \u2014 DDL \u67e5\u8be2\u88ab\u5141\u8bb8\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u5bf9\u5f53\u524d\u4f1a\u8bdd ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_ddl = 0")," \uff0c\u4f60\u5c31\u4e0d\u80fd\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"SET allow_ddl = 1")," \u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a1"))}m.isMDXComponent=!0}}]);