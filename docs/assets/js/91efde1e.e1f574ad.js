"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[98446],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>E});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=l,E=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return t?n.createElement(E,o(o({ref:r},c),{},{components:t})):n.createElement(E,o({ref:r},c))}));function E(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32503:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(87462),l=(t(67294),t(3905));const a={slug:"/ru/sql-reference/statements/select/prewhere",sidebar_label:"PREWHERE"},o="\u0421\u0435\u043a\u0446\u0438\u044f PREWHERE",i={unversionedId:"ru/sql-reference/statements/select/prewhere",id:"ru/sql-reference/statements/select/prewhere",title:"\u0421\u0435\u043a\u0446\u0438\u044f PREWHERE",description:"prewhere-clause}",source:"@site/docs/ru/sql-reference/statements/select/prewhere.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/prewhere",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/select/prewhere",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/prewhere.md",tags:[],version:"current",frontMatter:{slug:"/ru/sql-reference/statements/select/prewhere",sidebar_label:"PREWHERE"},sidebar:"russia",previous:{title:"ORDER BY",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/select/order-by"},next:{title:"SAMPLE",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/select/sample"}},s={},p=[{value:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 PREWHERE \u0432\u0440\u0443\u0447\u043d\u0443\u044e",id:"controlling-prewhere-manually",level:2},{value:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",id:"limitations",level:2}],c={toc:p},u="wrapper";function m(e){let{components:r,...t}=e;return(0,l.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"prewhere-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f PREWHERE"),(0,l.kt)("p",null,"Prewhere \u2014 \u044d\u0442\u043e \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438. \u041e\u043d\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0441\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u044f\u0432\u043d\u043e \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0447\u0430\u0441\u0442\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u0437 ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/select/where"},"WHERE")," \u0434\u043e \u0441\u0442\u0430\u0434\u0438\u0438 prewhere. \u0420\u043e\u043b\u044c \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0435\u0439, \u0435\u0441\u043b\u0438 \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043b\u0443\u0447\u0448\u0435, \u0447\u0435\u043c \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 prewhere \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f prewhere. \u0417\u0430\u0442\u0435\u043c \u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0431\u043b\u043e\u043a\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 prewhere \xab\u0432\u0435\u0440\u043d\u043e\xbb \u043f\u043e \u043a\u0440\u0430\u0439\u043d\u0435\u0439 \u043c\u0435\u0440\u0435 \u0434\u043b\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u044f\u0434\u043e\u0432. \u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u043e\u0432, \u0433\u0434\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 prewhere \xab\u043b\u043e\u0436\u043d\u043e\xbb \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u043e\u043a \u0438 \u0434\u043b\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f prewhere \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043c\u0435\u043d\u044c\u0448\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0447\u0435\u043c \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0447\u0430\u0441\u0442\u0435\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u044d\u0442\u043e \u0447\u0430\u0441\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u043c\u0435\u043d\u044c\u0448\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0434\u0438\u0441\u043a\u0430 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("h2",{id:"controlling-prewhere-manually"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 PREWHERE \u0432\u0440\u0443\u0447\u043d\u0443\u044e"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0438\u0437 \u0442\u0435\u0445, \u0447\u0442\u043e \u0435\u0441\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435, \u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,l.kt)("p",null,"\u0412 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"PREWHERE"),", \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),"."),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/operations/settings/settings#optimize_move_to_prewhere"},"optimize_move_to_prewhere")," \u0440\u0430\u0432\u043d\u043e 0, \u044d\u0432\u0440\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044e \u0447\u0430\u0441\u0442\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," \u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f."),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0435\u0441\u0442\u044c \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/select/from#select-from-final"},"FINAL"),", \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430. \u041e\u043d\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043e\u0431\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/operations/settings/settings#optimize_move_to_prewhere"},"optimize_move_to_prewhere")," \u0438 ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/operations/settings/settings#optimize_move_to_prewhere_if_final"},"optimize_move_to_prewhere_if_final"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':::note "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"\n\u0421\u0435\u043a\u0446\u0438\u044f `PREWHERE` \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u043e `FINAL`, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 `FROM ... FINAL` \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043a\u0430\u0437\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 `PREWHERE` \u0441 \u043f\u043e\u043b\u044f\u043c\u0438, \u043d\u0435 \u0432\u0445\u043e\u0434\u044f\u0449\u044f\u043c\u0438 \u0432 `ORDER BY` \u0442\u0430\u0431\u043b\u0438\u0446\u044b.\n:::\n')),(0,l.kt)("h2",{id:"limitations"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0434\u0432\u0438\u0436\u043a\u0430\u043c\u0438 \u0438\u0437 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/mergetree-family/"},"*MergeTree"),"."))}m.isMDXComponent=!0}}]);