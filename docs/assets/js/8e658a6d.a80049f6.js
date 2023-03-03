"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[42220],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},i="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=u(t),g=a,m=i["".concat(p,".").concat(g)]||i[g]||f[g]||o;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[i]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2078:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/ru/sql-reference/aggregate-functions/reference/kurtpop",sidebar_position:153},c="kurtPop",l={unversionedId:"ru/sql-reference/aggregate-functions/reference/kurtpop",id:"ru/sql-reference/aggregate-functions/reference/kurtpop",title:"kurtPop",description:"kurtpop}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/kurtpop.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/kurtpop",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/kurtpop",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/kurtpop.md",tags:[],version:"current",sidebarPosition:153,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/kurtpop",sidebar_position:153},sidebar:"russia",previous:{title:"skewSamp",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/skewsamp"},next:{title:"kurtSamp",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/kurtsamp"}},p={},u=[],s={toc:u},i="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(i,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kurtpop"},"kurtPop"),(0,a.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%8D%D1%84%D1%84%D0%B8%D1%86%D0%B8%D0%B5%D0%BD%D1%82_%D1%8D%D0%BA%D1%81%D1%86%D0%B5%D1%81%D1%81%D0%B0"},"\u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u044d\u043a\u0441\u0446\u0435\u0441\u0441\u0430")," \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"kurtPop(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/syntax#syntax-expressions"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("p",null,"\u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u044d\u043a\u0441\u0446\u0435\u0441\u0441\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f. \u0422\u0438\u043f \u2014 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/float"},"Float64")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT kurtPop(value) FROM series_with_value_column;\n")))}f.isMDXComponent=!0}}]);