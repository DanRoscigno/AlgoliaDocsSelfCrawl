"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[15783],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),u=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(o),f=n,d=p["".concat(a,".").concat(f)]||p[f]||h[f]||c;return o?r.createElement(d,i(i({ref:t},s),{},{components:o})):r.createElement(d,i({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=o.length,i=new Array(c);i[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<c;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},35952:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const c={slug:"/zh/faq/general/how-do-i-contribute-code-to-clickhouse",title:"\u6211\u5982\u4f55\u4e3aClickHouse\u8d21\u732e\u4ee3\u7801?",toc_hidden:!0,sidebar_position:120},i="\u6211\u5982\u4f55\u4e3aClickHouse\u8d21\u732e\u4ee3\u7801?",l={unversionedId:"zh/faq/general/how-do-i-contribute-code-to-clickhouse",id:"zh/faq/general/how-do-i-contribute-code-to-clickhouse",title:"\u6211\u5982\u4f55\u4e3aClickHouse\u8d21\u732e\u4ee3\u7801?",description:"how-do-i-contribute-code-to-clickhouse}",source:"@site/docs/zh/faq/general/how-do-i-contribute-code-to-clickhouse.md",sourceDirName:"zh/faq/general",slug:"/zh/faq/general/how-do-i-contribute-code-to-clickhouse",permalink:"/AlgoliaDocsSelfCrawl/zh/faq/general/how-do-i-contribute-code-to-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/general/how-do-i-contribute-code-to-clickhouse.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{slug:"/zh/faq/general/how-do-i-contribute-code-to-clickhouse",title:"\u6211\u5982\u4f55\u4e3aClickHouse\u8d21\u732e\u4ee3\u7801?",toc_hidden:!0,sidebar_position:120},sidebar:"chinese",previous:{title:"\u4e3a\u4f55\u4e0d\u4f7f\u7528 MapReduce\u7b49\u6280\u672f?",permalink:"/AlgoliaDocsSelfCrawl/zh/faq/general/mapreduce"},next:{title:"\u4f7f\u7528\u6848\u4f8b",permalink:"/AlgoliaDocsSelfCrawl/zh/faq/use-cases/"}},a={},u=[],s={toc:u},p="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-do-i-contribute-code-to-clickhouse"},"\u6211\u5982\u4f55\u4e3aClickHouse\u8d21\u732e\u4ee3\u7801?"),(0,n.kt)("p",null,"ClickHouse\u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse"},"\u5728GitHub\u4e0a\u5f00\u53d1"),"\u3002"),(0,n.kt)("p",null,"\u6309\u7167\u60ef\u4f8b\uff0c\u8d21\u732e\u6307\u5357\u53d1\u5e03\u5728\u6e90\u4ee3\u7801\u5e93\u6839\u76ee\u5f55\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/CONTRIBUTING.md"},"CONTRIBUTING.md"),"\u6587\u4ef6\u4e2d\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5bf9ClickHouse\u63d0\u51fa\u5b9e\u8d28\u6027\u7684\u6539\u53d8\u5efa\u8bae\uff0c\u53ef\u4ee5\u8003\u8651",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/new/choose"},"\u5728GitHub\u4e0a\u53d1\u5e03\u4e00\u4e2a\u95ee\u9898"),"\uff0c\u89e3\u91ca\u4e00\u4e0b\u4f60\u60f3\u505a\u4ec0\u4e48\uff0c\u5148\u4e0e\u7ef4\u62a4\u4eba\u5458\u548c\u793e\u533a\u8ba8\u8bba\u4e00\u4e0b\u3002",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues?q=is%3Aissue+is%3Aopen+rfc"},"\u6b64\u7c7bRFC\u95ee\u9898\u7684\u4f8b\u5b50"),"\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u7684\u8d21\u732e\u4e0e\u5b89\u5168\u76f8\u5173\uff0c\u4e5f\u8bf7\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/security/policy/"},"\u6211\u4eec\u7684\u5b89\u5168\u653f\u7b56"),"\u3002"))}h.isMDXComponent=!0}}]);