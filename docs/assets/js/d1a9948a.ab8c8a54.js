"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[97272],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={slug:"/ru/engines/table-engines/special/materializedview",sidebar_position:43,sidebar_label:"MaterializedView"},l="MaterializedView",o={unversionedId:"ru/engines/table-engines/special/materializedview",id:"ru/engines/table-engines/special/materializedview",title:"MaterializedView",description:"materializedview}",source:"@site/docs/ru/engines/table-engines/special/materializedview.md",sourceDirName:"ru/engines/table-engines/special",slug:"/ru/engines/table-engines/special/materializedview",permalink:"/docs/ru/engines/table-engines/special/materializedview",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/special/materializedview.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{slug:"/ru/engines/table-engines/special/materializedview",sidebar_position:43,sidebar_label:"MaterializedView"},sidebar:"russia",previous:{title:"View",permalink:"/docs/ru/engines/table-engines/special/view"},next:{title:"Memory",permalink:"/docs/ru/engines/table-engines/special/memory"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"materializedview"},"MaterializedView"),(0,i.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439 (\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/view#materialized"},"CREATE VIEW"),"). \u0414\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0434\u0440\u0443\u0433\u043e\u0439 \u0434\u0432\u0438\u0436\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u044b\u043b \u0443\u043a\u0430\u0437\u0430\u043d \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f. \u041f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u044d\u0442\u043e\u0442 \u0434\u0432\u0438\u0436\u043e\u043a."))}d.isMDXComponent=!0}}]);