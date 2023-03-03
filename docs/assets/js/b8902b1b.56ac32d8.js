"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[65025],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||c;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8453:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const c={slug:"/ru/interfaces/tcp",sidebar_position:18,sidebar_label:"\u0420\u043e\u0434\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (TCP)"},i="\u0420\u043e\u0434\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (TCP)",a={unversionedId:"ru/interfaces/tcp",id:"ru/interfaces/tcp",title:"\u0420\u043e\u0434\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (TCP)",description:"rodnoi-interfeis-tcp}",source:"@site/docs/ru/interfaces/tcp.md",sourceDirName:"ru/interfaces",slug:"/ru/interfaces/tcp",permalink:"/AlgoliaDocsSelfCrawl/ru/interfaces/tcp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/interfaces/tcp.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{slug:"/ru/interfaces/tcp",sidebar_position:18,sidebar_label:"\u0420\u043e\u0434\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (TCP)"},sidebar:"russia",previous:{title:"gRPC \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",permalink:"/AlgoliaDocsSelfCrawl/ru/interfaces/grpc"},next:{title:"HTTP-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",permalink:"/AlgoliaDocsSelfCrawl/ru/interfaces/http"}},l={},s=[],p={toc:s},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rodnoi-interfeis-tcp"},"\u0420\u043e\u0434\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 (TCP)"),(0,o.kt)("p",null,"\u041d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 ",(0,o.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/interfaces/cli"},"\u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"),", \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c\u0438 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u0445 \u043d\u0430 C++. \u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0443 \u0440\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 ClickHouse \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0444\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u043d\u043e \u0432 \u043d\u0435\u043c \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 ClickHouse (\u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/src/Client"},"\u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u044d\u0442\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430"),") \u0438/\u0438\u043b\u0438 \u043f\u0443\u0442\u0435\u043c \u043f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0430 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 TCP \u0442\u0440\u0430\u0444\u0438\u043a\u0430."))}f.isMDXComponent=!0}}]);