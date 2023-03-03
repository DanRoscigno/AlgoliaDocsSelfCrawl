"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[52910],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[f]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<i;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={slug:"/zh/sql-reference/functions/logical-functions",sidebar_position:37,sidebar_label:"\u903b\u8f91\u51fd\u6570"},c="\u903b\u8f91\u51fd\u6570",l={unversionedId:"zh/sql-reference/functions/logical-functions",id:"zh/sql-reference/functions/logical-functions",title:"\u903b\u8f91\u51fd\u6570",description:"luo-ji-han-shu}",source:"@site/docs/zh/sql-reference/functions/logical-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/logical-functions",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/logical-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/logical-functions.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{slug:"/zh/sql-reference/functions/logical-functions",sidebar_position:37,sidebar_label:"\u903b\u8f91\u51fd\u6570"},sidebar:"chinese",previous:{title:"\u6bd4\u8f83\u51fd\u6570",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/comparison-functions"},next:{title:"\u7c7b\u578b\u8f6c\u6362\u51fd\u6570",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/type-conversion-functions"}},a={},s=[{value:"\u548c\uff0c<code>AND</code> \u8fd0\u7b97\u7b26",id:"and-and-operator",level:2},{value:"\u6216\uff0c<code>OR</code> \u8fd0\u7b97\u7b26",id:"or-or-operator",level:2},{value:"\u975e\uff0c<code>NOT</code> \u8fd0\u7b97\u7b26",id:"not-not-operator",level:2},{value:"\u5f02\u6216\uff0c<code>XOR</code> \u8fd0\u7b97\u7b26",id:"xor",level:2}],u={toc:s},f="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(f,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"luo-ji-han-shu"},"\u903b\u8f91\u51fd\u6570"),(0,o.kt)("p",null,"\u903b\u8f91\u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u4efb\u4f55\u6570\u5b57\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u5e76\u8fd4\u56deUInt8\u7c7b\u578b\u76840\u62161\u3002"),(0,o.kt)("p",null,"\u5f53\u5411\u51fd\u6570\u4f20\u9012\u96f6\u65f6\uff0c\u51fd\u6570\u5c06\u5224\u5b9a\u4e3a\xabfalse\xbb\uff0c\u5426\u5219\uff0c\u4efb\u4f55\u5176\u4ed6\u975e\u96f6\u7684\u503c\u90fd\u5c06\u88ab\u5224\u5b9a\u4e3a\xabtrue\xbb\u3002"),(0,o.kt)("h2",{id:"and-and-operator"},"\u548c\uff0c",(0,o.kt)("inlineCode",{parentName:"h2"},"AND")," \u8fd0\u7b97\u7b26"),(0,o.kt)("h2",{id:"or-or-operator"},"\u6216\uff0c",(0,o.kt)("inlineCode",{parentName:"h2"},"OR")," \u8fd0\u7b97\u7b26"),(0,o.kt)("h2",{id:"not-not-operator"},"\u975e\uff0c",(0,o.kt)("inlineCode",{parentName:"h2"},"NOT")," \u8fd0\u7b97\u7b26"),(0,o.kt)("h2",{id:"xor"},"\u5f02\u6216\uff0c",(0,o.kt)("inlineCode",{parentName:"h2"},"XOR")," \u8fd0\u7b97\u7b26"))}p.isMDXComponent=!0}}]);