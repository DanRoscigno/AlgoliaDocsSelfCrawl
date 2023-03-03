"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[33583],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,g=c["".concat(s,".").concat(m)]||c[m]||f[m]||o;return t?a.createElement(g,l(l({ref:r},u),{},{components:t})):a.createElement(g,l({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99009:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={slug:"/ru/operations/",sidebar_position:41,sidebar_label:"\u042d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u044f"},l="\u042d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u044f",i={unversionedId:"ru/operations/index",id:"ru/operations/index",title:"\u042d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u044f",description:"operations}",source:"@site/docs/ru/operations/index.md",sourceDirName:"ru/operations",slug:"/ru/operations/",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/index.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/ru/operations/",sidebar_position:41,sidebar_label:"\u042d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u044f"},sidebar:"russia",previous:{title:"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430",permalink:"/AlgoliaDocsSelfCrawl/ru/guides/"},next:{title:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/requirements"}},s={},p=[],u={toc:p},c="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"operations"},"\u042d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u044f"),(0,n.kt)("p",null,"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438 ClickHouse \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/requirements"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/monitoring"},"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/troubleshooting"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/tips"},"\u0421\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/update"},"\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/access-rights"},"\u041f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/backup"},"\u0420\u0435\u0437\u0435\u0440\u0432\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/configuration-files"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/quotas"},"\u041a\u0432\u043e\u0442\u044b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/"},"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/server-configuration-parameters/"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/performance-test"},"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ClickHouse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/settings/#settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/utilities/"},"\u0423\u0442\u0438\u043b\u0438\u0442\u044b"))))}f.isMDXComponent=!0}}]);