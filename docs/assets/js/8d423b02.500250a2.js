"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[27411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>O});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,O=u["".concat(p,".").concat(m)]||u[m]||f[m]||l;return r?n.createElement(O,o(o({ref:t},s),{},{components:r})):n.createElement(O,o({ref:t},s))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/ru/faq/general/olap",title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 OLAP?",sidebar_position:100},o="\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 OLAP?",i={unversionedId:"ru/faq/general/olap",id:"ru/faq/general/olap",title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 OLAP?",description:"what-is-olap}",source:"@site/docs/ru/faq/general/olap.md",sourceDirName:"ru/faq/general",slug:"/ru/faq/general/olap",permalink:"/AlgoliaDocsSelfCrawl/ru/faq/general/olap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/faq/general/olap.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{slug:"/ru/faq/general/olap",title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 OLAP?",sidebar_position:100},sidebar:"russia",previous:{title:"What does \u201c\u043d\u0435 \u0442\u043e\u0440\u043c\u043e\u0437\u0438\u0442\u201d mean?",permalink:"/AlgoliaDocsSelfCrawl/ru/faq/general/ne-tormozit"},next:{title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445?",permalink:"/AlgoliaDocsSelfCrawl/ru/faq/general/columnar-database"}},p={},c=[{value:"OLAP \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430",id:"olap-from-the-business-perspective",level:2},{value:"OLAP \u0441 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f",id:"olap-from-the-technical-perspective",level:2}],s={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-olap"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 OLAP?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/OLAP"},"OLAP")," (OnLine Analytical Processing) \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u042d\u0442\u043e \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0442\u0435\u0440\u043c\u0438\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 \u0434\u0432\u0443\u0445 \u0441\u0442\u043e\u0440\u043e\u043d: \u0441 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0438 \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430. \u0414\u043b\u044f \u0441\u0430\u043c\u043e\u0433\u043e \u043e\u0431\u0449\u0435\u0433\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0435\u0433\u043e \u0441 \u043a\u043e\u043d\u0446\u0430:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Processing"),"\n\u041e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0435\u043a\u0438\u0435 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435\u2026"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Analytical"),"\n:   \u2026 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0442\u0447\u0435\u0442\u044b \u0438\u043b\u0438 \u043d\u043e\u0432\u044b\u0435 \u0437\u043d\u0430\u043d\u0438\u044f\u2026"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OnLine"),"\n:   \u2026 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0431\u0435\u0437 \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043a \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443."),(0,a.kt)("h2",{id:"olap-from-the-business-perspective"},"OLAP \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430"),(0,a.kt)("p",null,"\u0412 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0433\u043e\u0434\u044b \u0431\u0438\u0437\u043d\u0435\u0441-\u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0430\u043b\u043e \u043e\u0441\u043e\u0437\u043d\u0430\u0432\u0430\u0442\u044c \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445. \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0432\u0441\u043b\u0435\u043f\u0443\u044e, \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u0442\u0441\u0442\u0430\u044e\u0442 \u043e\u0442 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u0432. \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0431\u0438\u0437\u043d\u0435\u0441\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u043c\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u043c\u0438, \u043f\u043e\u0431\u0443\u0436\u0434\u0430\u0435\u0442 \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u044b \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u0434\u043b\u044f \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0431\u0438\u0437\u043d\u0435\u0441-\u0440\u0435\u0448\u0435\u043d\u0438\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0442\u044c \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u044b, \u0447\u0442\u043e\u0431\u044b \u0441\u0432\u043e\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c. \u0418\u043c\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438 \u043d\u0443\u0436\u043d\u044b \u0421\u0423\u0411\u0414 \u0441 OLAP."),(0,a.kt)("p",null,"\u0421 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430, OLAP \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u043c \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438 \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0432\u044b\u0448\u0430\u0442\u044c \u0435\u0451 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c, \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0442\u044c \u0437\u0430\u0442\u0440\u0430\u0442\u044b \u0438 \u043a\u0430\u043a \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u2014 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0442\u044c \u0434\u043e\u043b\u044e \u0440\u044b\u043d\u043a\u0430. \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0430\u043a \u0432 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u0442\u0430\u043a \u0438 \u0432 \u043e\u0431\u043b\u0430\u0447\u043d\u043e\u0439 (SaaS), \u0432 \u0432\u0435\u0431 \u0438\u043b\u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445, CRM-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0438 \u0442.\u0434. \u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f OLAP \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043e \u043c\u043d\u043e\u0433\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445 BI (Business Intelligence \u2014 \u0431\u0438\u0437\u043d\u0435\u0441-\u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430)."),(0,a.kt)("p",null,"ClickHouse \u2014 \u044d\u0442\u043e \u0421\u0423\u0411\u0414 \u0441 OLAP, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 SaaS-\u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u044b\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u0445. \u041d\u043e \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0432\u0441\u0435 \u0435\u0449\u0435 \u043d\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043e\u0445\u043e\u0442\u043d\u043e \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u044e\u0442 \u0441\u0432\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043e\u0431\u043b\u0430\u043a\u0435 (\u0443 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432), ClickHouse \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442 \u0438 \u043d\u0430 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430."),(0,a.kt)("h2",{id:"olap-from-the-technical-perspective"},"OLAP \u0441 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f"),(0,a.kt)("p",null,"\u0412\u0441\u0435 \u0421\u0423\u0411\u0414 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 \u0434\u0432\u0435 \u0433\u0440\u0443\u043f\u043f\u044b: OLAP (",(0,a.kt)("strong",{parentName:"p"},"\u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f")," \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438) \u0438 OLTP (\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 ",(0,a.kt)("strong",{parentName:"p"},"\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439")," \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438). OLAP \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043c\u043e\u0432 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0445 \u0438\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e \u044d\u0442\u0438 \u043e\u0442\u0447\u0435\u0442\u044b \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0447\u0430\u0441\u0442\u043e. OLTP \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u0445 \u043f\u043e\u0442\u043e\u043a\u043e\u0432 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 (\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439), \u043a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,"\u041d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 OLAP \u0438 OLTP \u2014 \u044d\u0442\u043e \u043d\u0435 \u0441\u0442\u0440\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438, \u0430 \u0441\u043a\u043e\u0440\u0435\u0435 \u0441\u043f\u0435\u043a\u0442\u0440 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439. \u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0421\u0423\u0411\u0414 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043d\u0430 \u043a\u0430\u043a\u043e\u043c-\u0442\u043e \u043e\u0434\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e \u0438\u043c\u0435\u044e\u0442 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0438 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439, \u043a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e. \u0418\u0437-\u0437\u0430 \u0442\u0430\u043a\u043e\u0439 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0447\u0430\u0441\u0442\u043e \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0421\u0423\u0411\u0414 \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439. \u042d\u0442\u043e \u0432\u043f\u043e\u043b\u043d\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u0438 \u0440\u0435\u0448\u0430\u0435\u043c\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430, \u043d\u043e, \u043a\u0430\u043a \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e, \u0447\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u0438\u0441\u0442\u0435\u043c, \u0442\u0435\u043c \u0432\u044b\u0448\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u0438\u0445 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0433\u043e\u0434\u044b \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b \u0433\u0438\u0431\u0440\u0438\u0434\u043d\u044b\u0435 \u0421\u0423\u0411\u0414 \u2014 HTAP (",(0,a.kt)("strong",{parentName:"p"},"Hybrid Transactional/Analytical Processing"),"), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u043e\u0431\u0430 \u0432\u0438\u0434\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043f\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,"\u0414\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0421\u0423\u0411\u0414 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u043b\u0438\u0441\u044c \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u0430\u043a OLAP \u0438\u043b\u0438 \u043a\u0430\u043a OLTP, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e \u0434\u0432\u0438\u0433\u0430\u044e\u0442\u0441\u044f \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 HTAP, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c. \u0418 ClickHouse \u043d\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u0418\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u043e\u043d \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u043b\u0441\u044f \u043a\u0430\u043a ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/faq/general/why-clickhouse-is-so-fast"},"OLAP \u0421\u0423\u0411\u0414 \u0441 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e"),", \u0438 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f\u0448\u043d\u0438\u0439 \u0434\u0435\u043d\u044c \u0432 \u043d\u0435\u043c \u043d\u0435\u0442 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0442\u0440\u0430\u0437\u0430\u043a\u0446\u0438\u0439, \u043d\u043e \u0443\u0436\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u0430\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0447\u0442\u0435\u043d\u0438\u044f/\u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043c\u0443\u0442\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438/\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,'\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u0438\u0430\u043b\u044c\u043d\u043e\u0435 "\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0442\u0440\u0443\u0434\u0430" \u043c\u0435\u0436\u0434\u0443 OLAP \u0438 OLTP \u0421\u0423\u0411\u0414 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0427\u0442\u043e\u0431\u044b \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0442\u0447\u0435\u0442\u044b, \u043d\u0443\u0436\u043d\u043e \u0443\u043c\u0435\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e OLAP \u0421\u0423\u0411\u0414 \u2014 ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/faq/general/columnar-database"},"\u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u044b\u0435"),"."),(0,a.kt)("li",{parentName:"ul"},"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c \u0441\u043d\u0438\u0436\u0430\u0435\u0442 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043d\u0430\u0434 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438 (\u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445) \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u0447\u0438\u0441\u043b\u0443 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0430 \u044d\u0442\u043e \u0447\u0438\u0441\u043b\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u043c \u0434\u043b\u044f \u0441\u0438\u0441\u0442\u0435\u043c, \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0431\u043e\u0440 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u044b\u0445 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e OLTP \u0441\u0438\u0441\u0442\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u0421\u0423\u0411\u0414.")))}f.isMDXComponent=!0}}]);