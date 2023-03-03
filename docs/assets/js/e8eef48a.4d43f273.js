"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[684],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,b=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return t?r.createElement(b,u(u({ref:n},s),{},{components:t})):r.createElement(b,u({ref:n},s))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,u=new Array(a);u[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:l,u[1]=o;for(var c=2;c<a;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(87462),l=(t(67294),t(3905));const a={slug:"/ru/sql-reference/table-functions/null",sidebar_position:53,sidebar_label:"null \u0444\u0443\u043d\u043a\u0446\u0438\u044f"},u="null",o={unversionedId:"ru/sql-reference/table-functions/null",id:"ru/sql-reference/table-functions/null",title:"null",description:"null-function}",source:"@site/docs/ru/sql-reference/table-functions/null.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/null",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/table-functions/null",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/null.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{slug:"/ru/sql-reference/table-functions/null",sidebar_position:53,sidebar_label:"null \u0444\u0443\u043d\u043a\u0446\u0438\u044f"},sidebar:"russia",previous:{title:"cluster",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/table-functions/cluster"},next:{title:"dictionary",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/table-functions/dictionary"}},i={},c=[],s={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"null-function"},"null"),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/special/null"},"Null"),". \u0412 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u0434\u0432\u0438\u0436\u043a\u0430, \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u0430 \u0441\u0430\u043c\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u043e\u0432 \u0438 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"null('structure')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0438 \u0438\u0445 \u0442\u0438\u043f\u043e\u0432. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("p",null,"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"Null"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u041e\u0434\u0438\u043d \u0437\u0430\u043f\u0440\u043e\u0441 \u0441 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO function null('x UInt64') SELECT * FROM numbers_mt(1000000000);\n")),(0,l.kt)("p",null,"\u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0442\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t (x UInt64) ENGINE = Null;\nINSERT INTO t SELECT * FROM numbers_mt(1000000000);\nDROP TABLE IF EXISTS t;\n")),(0,l.kt)("p",null,"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/special/null"},"\u0414\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 Null"))))}f.isMDXComponent=!0}}]);