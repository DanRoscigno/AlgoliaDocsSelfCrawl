"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[26656],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(r),m=i,f=s["".concat(u,".").concat(m)]||s[m]||k[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[s]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={slug:"/ru/operations/utilities/clickhouse-obfuscator"},l="\u041e\u0431\u0444\u0443\u0441\u043a\u0430\u0442\u043e\u0440 ClickHouse",a={unversionedId:"ru/operations/utilities/clickhouse-obfuscator",id:"ru/operations/utilities/clickhouse-obfuscator",title:"\u041e\u0431\u0444\u0443\u0441\u043a\u0430\u0442\u043e\u0440 ClickHouse",description:"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u0431\u0444\u0443\u0441\u043a\u0430\u0446\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.",source:"@site/docs/ru/operations/utilities/clickhouse-obfuscator.md",sourceDirName:"ru/operations/utilities",slug:"/ru/operations/utilities/clickhouse-obfuscator",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/utilities/clickhouse-obfuscator",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/utilities/clickhouse-obfuscator.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/utilities/clickhouse-obfuscator"},sidebar:"russia",previous:{title:"clickhouse-compressor",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/utilities/clickhouse-compressor"},next:{title:"clickhouse-odbc-bridge",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/utilities/odbc-bridge"}},u={},c=[],p={toc:c},s="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043e\u0431\u0444\u0443\u0441\u043a\u0430\u0442\u043e\u0440-clickhouse"},"\u041e\u0431\u0444\u0443\u0441\u043a\u0430\u0442\u043e\u0440 ClickHouse"),(0,i.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u0431\u0444\u0443\u0441\u043a\u0430\u0446\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("p",null,"\u041e\u043d \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0432\u044b\u0445\u043e\u0434\u043d\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."),(0,i.kt)("p",null,"\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u0432 \u0442\u0435\u0441\u0442\u0430\u0445 \u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c."),(0,i.kt)("p",null,"\u041e\u0431\u0444\u0443\u0441\u043a\u0430\u0442\u043e\u0440 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0434\u0430\u043d\u043d\u044b\u0445:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c (\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445) \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0438 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043e\u0440\u0442\u0435\u0436\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0443\u0441\u043b\u043e\u0432\u043d\u0430\u044f \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c: \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u043d\u044b\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0446\u0435\u043b\u044b\u0445 \u0447\u0438\u0441\u0435\u043b; \u0437\u043d\u0430\u043a \u0447\u0438\u0441\u043b\u0430 \u0442\u0438\u043f\u0430 Int; \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u0441\u0442\u0435\u043f\u0435\u043d\u0438 \u0438 \u0437\u043d\u0430\u043a \u0434\u043b\u044f \u0447\u0438\u0441\u0435\u043b \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0434\u043b\u0438\u043d\u044b \u0441\u0442\u0440\u043e\u043a;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u043d\u0443\u043b\u0435\u0432\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0447\u0438\u0441\u0435\u043b; \u043f\u0443\u0441\u0442\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u044b, ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),";")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0441\u0442\u0435\u043f\u0435\u043d\u044c \u0441\u0436\u0430\u0442\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u043c LZ77 \u0438 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e\u043c \u044d\u043d\u0442\u0440\u043e\u043f\u0438\u0439\u043d\u044b\u0445  \u043a\u043e\u0434\u0435\u043a\u043e\u0432;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u0441\u0442\u044c (\u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u0440\u0430\u0437\u043d\u0438\u0446\u044b) \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435; \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u0441\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0434\u0430\u0442\u0443 \u0438\u0437 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),";")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0430 UTF-8 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0442\u0440\u043e\u043a\u0438;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u044b\u0433\u043b\u044f\u0434\u044f\u0442 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c."))),(0,i.kt)("p",null,"\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0432\u044b\u0448\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u043f\u0440\u0438\u0433\u043e\u0434\u043d\u044b \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u0427\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f, \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e\u0447\u0442\u0438 \u0441 \u0442\u043e\u0439 \u0436\u0435 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e, \u0447\u0442\u043e \u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u043e\u0439 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0435, \u0441\u0442\u0435\u043f\u0435\u043d\u0438 \u0441\u0436\u0430\u0442\u0438\u044f \u0438 \u0442. \u0434."),(0,i.kt)("p",null,"\u041e\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e. \u0412\u044b \u0437\u0430\u0434\u0430\u0451\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u0430, \u0430 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u043c."),(0,i.kt)("p",null,"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u043a \u043e\u0434\u043d\u043e\u043c\u0443, \u0438 \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u0430 \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0433\u043e \u0432 \u0441\u0435\u043a\u0440\u0435\u0442\u0435."),(0,i.kt)("p",null,"\u041e\u0431\u0444\u0443\u0441\u043a\u0430\u0442\u043e\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u044b \u0434\u043b\u044f \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e, \u0441 \u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u043c. \u0412 \u043d\u0435\u043c \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c."),(0,i.kt)("p",null,"\u041e\u043d \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0447\u0438\u0441\u043b\u0430 0, 1, -1, \u0434\u0430\u0442\u044b, \u0434\u043b\u0438\u043d\u044b \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0438 \u043d\u0443\u043b\u0435\u0432\u044b\u0435 \u0444\u043b\u0430\u0433\u0438.\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,i.kt)("inlineCode",{parentName:"p"},"IsMobile")," \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 0 \u0438 1, \u0442\u043e \u0432 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0442\u043e \u0436\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."),(0,i.kt)("p",null,"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0442\u043e\u0447\u043d\u043e\u0435 \u0441\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0440\u0430\u0444\u0438\u043a\u0430."),(0,i.kt)("p",null,"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0441\u043b\u0443\u0447\u0430\u0439, \u043a\u043e\u0433\u0434\u0430 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440,  \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f), \u0438 \u0432\u044b \u043d\u0435 \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0445 \u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c.\n\u0415\u0441\u043b\u0438 \u0432\u0430\u0448\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0445 \u043f\u043e\u0447\u0442\u043e\u0432\u044b\u0445 \u0430\u0434\u0440\u0435\u0441\u043e\u0432, \u0438 \u043d\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u043d\u0438\u0445 \u043d\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0447\u0430\u0441\u0442\u043e, \u0442\u043e \u043e\u0431\u0444\u0443\u0441\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0430\u043d\u043e\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u041d\u043e, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435, \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043d\u0438\u0445.\n\u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u0430\u043c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,i.kt)("p",null,"\u041e\u0431\u0444\u0443\u0441\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u0435\u0437\u0435\u043d \u0432 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441\u043e \u0441\u0440\u0435\u0434\u043d\u0438\u043c \u043e\u0431\u044a\u0435\u043c\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 (\u043d\u0435 \u043c\u0435\u043d\u0435\u0435 1000 \u0441\u0442\u0440\u043e\u043a)."))}k.isMDXComponent=!0}}]);