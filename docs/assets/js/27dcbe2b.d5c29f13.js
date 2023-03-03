"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[16851],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),i=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):g(g({},r),e)),n},c=function(e){var r=i(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||s[f]||o;return n?t.createElement(m,g(g({ref:r},c),{},{components:n})):t.createElement(m,g({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,g=new Array(o);g[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:a,g[1]=l;for(var i=2;i<o;i++)g[i]=n[i];return t.createElement.apply(null,g)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28997:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>g,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/ru/sql-reference/aggregate-functions/reference/grouparraymovingavg",sidebar_position:114},g="groupArrayMovingAvg",l={unversionedId:"ru/sql-reference/aggregate-functions/reference/grouparraymovingavg",id:"ru/sql-reference/aggregate-functions/reference/grouparraymovingavg",title:"groupArrayMovingAvg",description:"agg_function-grouparraymovingavg}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/grouparraymovingavg.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/grouparraymovingavg",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparraymovingavg",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/grouparraymovingavg.md",tags:[],version:"current",sidebarPosition:114,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/grouparraymovingavg",sidebar_position:114},sidebar:"russia",previous:{title:"groupArrayMovingSum",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparraymovingsum"},next:{title:"groupArraySample",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparraysample"}},u={},i=[],c={toc:i},p="wrapper";function s(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_function-grouparraymovingavg"},"groupArrayMovingAvg"),(0,a.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0441\u043a\u043e\u043b\u044c\u0437\u044f\u0449\u0435\u0435 \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupArrayMovingAvg(numbers_for_summing)\ngroupArrayMovingAvg(window_size)(numbers_for_summing)\n")),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430. \u0415\u0441\u043b\u0438 \u043e\u043a\u043d\u043e \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e, \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430, \u0440\u0430\u0432\u043d\u044b\u0439 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0441\u0442\u0440\u043e\u043a \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"numbers_for_summing")," \u2014 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/syntax#syntax-expressions"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"window_size")," \u2014 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041c\u0430\u0441\u0441\u0438\u0432 \u0442\u043e\u0433\u043e \u0436\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0438 \u0442\u0438\u043f\u0430, \u0447\u0442\u043e \u0438 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435.")),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%9E%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5#%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B"},"\u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u043a \u043c\u0435\u043d\u044c\u0448\u0435\u043c\u0443 \u043f\u043e \u043c\u043e\u0434\u0443\u043b\u044e"),". \u041e\u043d\u043e \u0443\u0441\u0435\u043a\u0430\u0435\u0442 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u044b\u0435 \u0440\u0430\u0437\u0440\u044f\u0434\u044b, \u043d\u0435\u0437\u043d\u0430\u0447\u0438\u043c\u044b\u0435 \u0434\u043b\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    `int` UInt8,\n    `float` Float32,\n    `dec` Decimal32(2)\n)\nENGINE = TinyLog\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int\u2500\u252c\u2500float\u2500\u252c\u2500\u2500dec\u2500\u2510\n\u2502   1 \u2502   1.1 \u2502 1.10 \u2502\n\u2502   2 \u2502   2.2 \u2502 2.20 \u2502\n\u2502   4 \u2502   4.4 \u2502 4.40 \u2502\n\u2502   7 \u2502  7.77 \u2502 7.77 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    groupArrayMovingAvg(int) AS I,\n    groupArrayMovingAvg(float) AS F,\n    groupArrayMovingAvg(dec) AS D\nFROM t\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500I\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [0,0,1,3] \u2502 [0.275,0.82500005,1.9250001,3.8675] \u2502 [0.27,0.82,1.92,3.86] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    groupArrayMovingAvg(2)(int) AS I,\n    groupArrayMovingAvg(2)(float) AS F,\n    groupArrayMovingAvg(2)(dec) AS D\nFROM t\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500I\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [0,1,3,5] \u2502 [0.55,1.6500001,3.3000002,6.085] \u2502 [0.55,1.65,3.30,6.08] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}s.isMDXComponent=!0}}]);