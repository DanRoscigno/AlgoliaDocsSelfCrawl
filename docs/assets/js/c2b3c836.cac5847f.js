"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[18992],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(t),g=o,m=f["".concat(s,".").concat(g)]||f[g]||p[g]||c;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=g;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[f]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},56537:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const c={slug:"/ru/sql-reference/aggregate-functions/reference/sumwithoverflow",sidebar_position:140},i="sumWithOverflow",a={unversionedId:"ru/sql-reference/aggregate-functions/reference/sumwithoverflow",id:"ru/sql-reference/aggregate-functions/reference/sumwithoverflow",title:"sumWithOverflow",description:"sumwithoverflowx}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/sumwithoverflow.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/sumwithoverflow",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/sumwithoverflow",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/sumwithoverflow.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/sumwithoverflow",sidebar_position:140},sidebar:"russia",previous:{title:"groupBitmapXor",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/groupbitmapxor"},next:{title:"deltaSum",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/deltasum"}},s={},u=[],l={toc:u},f="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(f,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sumwithoverflowx"},"sumWithOverflow"),(0,o.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0441\u0443\u043c\u043c\u0443 \u0447\u0438\u0441\u0435\u043b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0434\u043b\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0442\u043e\u0442 \u0436\u0435 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u0447\u0442\u043e \u0438 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432. \u0415\u0441\u043b\u0438 \u0441\u0443\u043c\u043c\u0430 \u0432\u044b\u0439\u0434\u0435\u0442 \u0437\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u0435\u0440\u043d\u0451\u0442 \u043e\u0448\u0438\u0431\u043a\u0443."),(0,o.kt)("p",null,"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0447\u0438\u0441\u0435\u043b."))}p.isMDXComponent=!0}}]);