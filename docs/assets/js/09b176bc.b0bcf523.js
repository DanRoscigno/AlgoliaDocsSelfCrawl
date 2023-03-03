"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[18354],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>g});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(i,".").concat(m)]||s[m]||f[m]||o;return n?t.createElement(g,c(c({ref:r},u),{},{components:n})):t.createElement(g,c({ref:r},u))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72749:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/ru/sql-reference/aggregate-functions/reference/maxmap",sidebar_position:143},c="maxMap",l={unversionedId:"ru/sql-reference/aggregate-functions/reference/maxmap",id:"ru/sql-reference/aggregate-functions/reference/maxmap",title:"maxMap",description:"agg_functions-maxmap}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/maxmap.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/maxmap",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/maxmap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/maxmap.md",tags:[],version:"current",sidebarPosition:143,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/maxmap",sidebar_position:143},sidebar:"russia",previous:{title:"minMap",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/minmap"},next:{title:"sumCount",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/sumcount"}},i={},p=[],u={toc:p},s="wrapper";function f(e){let{components:r,...n}=e;return(0,a.kt)(s,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_functions-maxmap"},"maxMap"),(0,a.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441: ",(0,a.kt)("inlineCode",{parentName:"p"},"maxMap(key, value)")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"maxMap(Tuple(key, value))")),(0,a.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),", \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043a\u043b\u044e\u0447\u0430\u043c, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,a.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043a\u043e\u0440\u0442\u0435\u0436\u0430 \u043a\u043b\u044e\u0447\u0435\u0439 \u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0434\u0432\u0443\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u043a\u043b\u044e\u0447\u0435\u0439 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,a.kt)("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0443\u043c\u043c\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,a.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u0440\u0442\u0435\u0436 \u0438\u0437 \u0434\u0432\u0443\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432: \u043a\u043b\u044e\u0447\u0438 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043a\u043b\u044e\u0447\u0435\u0439."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT maxMap(a, b)\nFROM values('a Array(Int32), b Array(Int64)', ([1, 2], [2, 2]), ([2, 3], [1, 1]))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500maxMap(a, b)\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ([1,2,3],[2,2,1]) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);