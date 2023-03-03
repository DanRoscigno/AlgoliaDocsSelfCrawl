"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[20559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||k[f]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/ru/faq/general/why-clickhouse-is-so-fast",title:"\u041f\u043e\u0447\u0435\u043c\u0443 ClickHouse \u0442\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",sidebar_position:8},i="\u041f\u043e\u0447\u0435\u043c\u0443 ClickHouse \u0442\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",o={unversionedId:"ru/faq/general/why-clickhouse-is-so-fast",id:"ru/faq/general/why-clickhouse-is-so-fast",title:"\u041f\u043e\u0447\u0435\u043c\u0443 ClickHouse \u0442\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",description:"why-clickhouse-is-so-fast}",source:"@site/docs/ru/faq/general/why-clickhouse-is-so-fast.md",sourceDirName:"ru/faq/general",slug:"/ru/faq/general/why-clickhouse-is-so-fast",permalink:"/AlgoliaDocsSelfCrawl/ru/faq/general/why-clickhouse-is-so-fast",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/faq/general/why-clickhouse-is-so-fast.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"/ru/faq/general/why-clickhouse-is-so-fast",title:"\u041f\u043e\u0447\u0435\u043c\u0443 ClickHouse \u0442\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",sidebar_position:8},sidebar:"russia",previous:{title:"\u041e\u0431\u0449\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b",permalink:"/AlgoliaDocsSelfCrawl/ru/faq/general/"},next:{title:"\u041a\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ClickHouse?",permalink:"/AlgoliaDocsSelfCrawl/ru/faq/general/who-is-using-clickhouse"}},s={},c=[],u={toc:c},p="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-clickhouse-is-so-fast"},"\u041f\u043e\u0447\u0435\u043c\u0443 ClickHouse \u0442\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0437\u0430\u043b\u043e\u0436\u0435\u043d\u0430 \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435 ClickHouse. \u0412\u044b\u0441\u043e\u043a\u0430\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0431\u044b\u043b\u0430 \u0438 \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u044b\u043c \u0432\u0430\u0436\u043d\u044b\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0435\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435. \u041d\u043e \u043c\u044b \u043e\u0431\u0440\u0430\u0449\u0430\u0435\u043c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0438 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f, \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c, \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c. \u0412\u0441\u0451 \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 ClickHouse \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439."),(0,a.kt)("p",null,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 ClickHouse \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0441\u044f \u043a\u0430\u043a \u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u043b \u043e\u0442\u043b\u0438\u0447\u043d\u043e \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0441 \u043e\u0434\u043d\u043e\u0439 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u2014 \u043e\u0442\u0431\u0438\u0440\u0430\u0442\u044c \u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e. \u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043e\u0442\u0447\u0435\u0442, \u0438 \u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/select/group-by"},"GROUP BY"),". \u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0442\u0430\u043a\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 ClickHouse \u043f\u0440\u0438\u043d\u044f\u043b\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439:"),(0,a.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u043e\u0435 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445\n:   \u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0441\u043e\u0442\u043d\u0438 \u0438\u043b\u0438 \u0434\u0430\u0436\u0435 \u0442\u044b\u0441\u044f\u0447\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043e\u0442\u0447\u0435\u0442\u0430 \u043d\u0443\u0436\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u043d\u0438\u0445. \u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0447\u0438\u0442\u0430\u0442\u044c \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0447\u0442\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0434\u0438\u0441\u043a\u0430 \u2014 \u0441\u0430\u043c\u044b\u0435 \u0434\u043e\u0440\u043e\u0433\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0435."),(0,a.kt)("p",null,"\u0418\u043d\u0434\u0435\u043a\u0441\u044b\n:   ClickHouse \u0445\u0440\u0430\u043d\u0438\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043d\u043e \u0438 \u043d\u0443\u0436\u043d\u044b\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u044b \u0441\u0442\u0440\u043e\u043a \u0434\u043b\u044f \u044d\u0442\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432."),(0,a.kt)("p",null,"\u0421\u0436\u0430\u0442\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445\n:   \u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0441\u043c\u0435\u0436\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438 \u0441\u0436\u0430\u0442\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 (\u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u043e\u0431\u044b\u0447\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u043c\u0438 \u0421\u0423\u0411\u0414), \u0442.\u043a. \u0432 \u0441\u043c\u0435\u0436\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a\u0430\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0447\u0430\u0441\u0442\u043e \u0431\u044b\u0432\u0430\u044e\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c\u0438 \u0438\u043b\u0438 \u0431\u043b\u0438\u0437\u043a\u0438\u043c\u0438. \u0412 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0441\u0436\u0430\u0442\u0438\u044e ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/create/table#create-query-specialized-codecs"},"\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u0434\u0435\u043a\u0438"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0435\u0449\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043c\u044b \u0445\u0440\u0430\u043d\u0438\u043c\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b\n:   ClickHouse \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0445\u0440\u0430\u043d\u0438\u0442, \u043d\u043e \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445. \u042d\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u043b\u0443\u0447\u0448\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u0435\u0448\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SIMD"},"SIMD"),"."),(0,a.kt)("p",null,"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c\n:   ClickHouse \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u043e\u0432 \u0438 \u043e\u0431\u044a\u0435\u043c\u044b \u0434\u0438\u0441\u043a\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u0436\u0435 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441. \u041d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043d\u043e \u0438 \u0432 \u0446\u0435\u043b\u043e\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435."),(0,a.kt)("p",null,"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0438 \u043c\u043d\u043e\u0433\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0421\u0423\u0411\u0414. ",(0,a.kt)("strong",{parentName:"p"},"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043a \u043c\u0435\u043b\u044c\u0447\u0430\u0439\u0448\u0438\u043c \u0434\u0435\u0442\u0430\u043b\u044f\u043c")," \u2014 \u0432\u043e\u0442 \u0447\u0442\u043e \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u0442 ClickHouse. \u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u044f\u0437\u044b\u043a\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u043e\u043d\u0438 \u0431\u044b\u0432\u0430\u044e\u0442 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0431\u044b\u0442\u044c \u043f\u043e-\u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u043c\u0443 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c\u0438. \u041c\u044b \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043c \u043a\u0430\u0436\u0434\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 \u043a\u0430\u043a \u0442\u043e\u043d\u043a\u0438\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0441\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a, \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u0437\u044f\u0442\u044c \u043a\u0430\u043a\u0443\u044e-\u0442\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u0443\u044e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u0430 \u0445\u0435\u0448-\u0442\u0430\u0431\u043b\u0438\u0446\u0430, \u0432\u043e\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0434\u0443\u043c\u0430\u0442\u044c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a\u0443\u044e \u0445\u0435\u0448-\u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0432\u044b\u0431\u0440\u0430\u0442\u044c?"),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a\u0438\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0442\u044c \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0438: ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Open_addressing"},"\u043e\u0442\u043a\u0440\u044b\u0442\u0430\u044f \u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044f")," \u0438\u043b\u0438 ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hash_table#Separate_chaining"},"\u043c\u0435\u0442\u043e\u0434 \u0446\u0435\u043f\u043e\u0447\u0435\u043a"),"?"),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043f\u0430\u043c\u044f\u0442\u0438: \u043a\u043b\u044e\u0447\u0438 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u0438\u043b\u0438 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445? \u0411\u0443\u0434\u0443\u0442 \u043b\u0438 \u0442\u0430\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f?"),(0,a.kt)("li",{parentName:"ul"},"\u0424\u0430\u043a\u0442\u043e\u0440 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f: \u043a\u043e\u0433\u0434\u0430 \u0438 \u043a\u0430\u043a \u043c\u0435\u043d\u044f\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0442\u0430\u0431\u043b\u0438\u0446\u044b? \u041a\u0430\u043a \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u0430?"),(0,a.kt)("li",{parentName:"ul"},"\u0411\u0443\u0434\u0443\u0442 \u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0443\u0434\u0430\u043b\u044f\u0442\u044c\u0441\u044f \u0438 \u0435\u0441\u043b\u0438 \u0434\u0430, \u0442\u043e \u043a\u0430\u043a\u043e\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043b\u0443\u0447\u0448\u0435?"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u043b\u0438 \u0431\u044b\u0441\u0442\u0440\u043e\u0435 \u0437\u043e\u043d\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0431\u0438\u0442\u043e\u0432\u044b\u0445 \u043c\u0430\u0441\u043e\u043a, \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043d\u0435\u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u043c\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438 \u043f\u0430\u043a\u0435\u0442\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430?")),(0,a.kt)("p",null,"\u0425\u0435\u0448-\u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u2014 \u043a\u043b\u044e\u0447\u0435\u0432\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", \u0438 ClickHouse \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043e\u0434\u043d\u0443 \u0438\u0437 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Interpreters/Aggregator.h"},"\u0431\u043e\u043b\u0435\u0435 30 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0439")," \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0440\u043e\u0434\u0443\u043c\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0427\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f: \u043c\u0430\u0441\u0441\u0438\u0432 \u0447\u0438\u0441\u0435\u043b, \u043a\u043e\u0440\u0442\u0435\u0436\u0435\u0439, \u0441\u0442\u0440\u043e\u043a \u0438\u043b\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440?"),(0,a.kt)("li",{parentName:"ul"},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043b\u0438 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438?"),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0443\u0436\u043d\u0430 \u043b\u0438 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430?"),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0443\u0436\u043d\u0430 \u043b\u0438 \u043f\u043e\u043b\u043d\u0430\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430? \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c, \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0439 \u0438\u043b\u0438 \u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u043e\u0439 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438?"),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435?"),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u043e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438?")),(0,a.kt)("p",null,"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0431\u044b\u0447\u043d\u043e \u0434\u0430\u044e\u0442 \u043b\u0443\u0447\u0448\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b, \u0447\u0435\u043c \u0438\u0445 \u0431\u043e\u043b\u0435\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0435 \u0430\u043d\u0430\u043b\u043e\u0433\u0438. \u0415\u0441\u043b\u0438 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e, \u0441 \u043a\u0430\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, ClickHouse \u0431\u0443\u0434\u0435\u0442 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0432 \u0438\u0442\u043e\u0433\u0435 \u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c ",(0,a.kt)("a",{parentName:"p",href:"https://habr.com/en/company/yandex/blog/457612/"},"\u0441\u0442\u0430\u0442\u044c\u044e \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0432 ClickHouse \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u043a\u0430 LZ4"),"."),(0,a.kt)("p",null,"\u041d\u0443 \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435, \u043d\u043e \u0442\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0432\u0430\u0436\u043d\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435: \u043a\u043e\u043c\u0430\u043d\u0434\u0430 ClickHouse \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043e \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0445 \u0438\u043c\u0438 \u0443\u0434\u0430\u0447\u043d\u044b\u0445 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f\u0445, \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430\u0445 \u0438\u043b\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0438 \u043f\u0440\u043e\u0431\u0443\u0435\u0442 \u043d\u043e\u0432\u044b\u0435 \u0438\u0434\u0435\u0438. \u0418\u043d\u043e\u0433\u0434\u0430 \u0432 \u044d\u0442\u043e\u043c \u043f\u043e\u0442\u043e\u043a\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0446\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,a.kt)("admonition",{title:'"\u0421\u043e\u0432\u0435\u0442\u044b \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0432\u044b\u0441\u043e\u043a\u043e\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443"',type:"info"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"-   \u041f\u0440\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043e\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u043c\u0435\u043b\u044c\u0447\u0430\u0439\u0448\u0438\u0435 \u0434\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.\n-   \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f.\n-   \u0412\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u0445\u043e\u0434\u044f \u0438\u0437 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438.\n-   \u0414\u043b\u044f \u043e\u0441\u043e\u0431\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f.\n-   \u041f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b, \u043e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b \u0432\u0447\u0435\u0440\u0430 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b\u0438 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435. \u0418\u0449\u0438\u0442\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f.\n-   \u0412\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438, \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438.\n-   \u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438, \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438.\n-   \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0439\u0442\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 CI.\n-   \u0418\u0437\u043c\u0435\u0440\u044f\u0439\u0442\u0435 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0441\u0451, \u0447\u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e.\n"))))}k.isMDXComponent=!0}}]);