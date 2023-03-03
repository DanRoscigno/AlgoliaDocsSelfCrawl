"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[14173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),g=a,m=u["".concat(o,".").concat(g)]||u[g]||f[g]||l;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=g;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<l;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/ru/sql-reference/aggregate-functions/reference/welchttest",sidebar_position:301,sidebar_label:"welchTTest"},s="welchTTest",c={unversionedId:"ru/sql-reference/aggregate-functions/reference/welchttest",id:"ru/sql-reference/aggregate-functions/reference/welchttest",title:"welchTTest",description:"welchttest}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/welchttest.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/welchttest",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/welchttest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/welchttest.md",tags:[],version:"current",sidebarPosition:301,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/welchttest",sidebar_position:301,sidebar_label:"welchTTest"},sidebar:"russia",previous:{title:"studentTTest",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/studentttest"},next:{title:"entropy",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/entropy"}},o={},i=[],p={toc:i},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welchttest"},"welchTTest"),(0,a.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0423\u044d\u043b\u0447\u0430 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u043e\u043a \u0438\u0437 \u0434\u0432\u0443\u0445 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u0435\u0439."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"welchTTest(sample_data, sample_index)\n")),(0,a.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u043e\u0440\u043e\u043a \u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0438\u0437 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"sample_data"),". \u0415\u0441\u043b\u0438  ",(0,a.kt)("inlineCode",{parentName:"p"},"sample_index")," \u0440\u0430\u0432\u043d\u043e 0, \u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043f\u0435\u0440\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435. \u0412\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u0432\u0442\u043e\u0440\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.\n\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u043d\u0443\u043b\u0435\u0432\u0430\u044f \u0433\u0438\u043f\u043e\u0442\u0435\u0437\u0430, \u0447\u0442\u043e \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u0435\u0439 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442. \u0414\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f \u0423\u044d\u043b\u0447\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u044f\u0445 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c. \u0414\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sample_data")," \u2014 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u044b\u0431\u043e\u0440\u043e\u043a. ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"Integer"),", ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/float"},"Float")," or ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/decimal"},"Decimal"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sample_index")," \u2014 \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0432\u044b\u0431\u043e\u0440\u043e\u043a. ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/int-uint"},"Integer"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/tuple"},"\u041a\u043e\u0440\u0442\u0435\u0436")," \u0441 \u0434\u0432\u0443\u043c\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f \u0423\u044d\u043b\u0447\u0430. ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/float"},"Float64"),"."),(0,a.kt)("li",{parentName:"ul"},"\u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435 p-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/float"},"Float64"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sample_data\u2500\u252c\u2500sample_index\u2500\u2510\n\u2502        20.3 \u2502            0 \u2502\n\u2502        22.1 \u2502            0 \u2502\n\u2502        21.9 \u2502            0 \u2502\n\u2502        18.9 \u2502            1 \u2502\n\u2502        20.3 \u2502            1 \u2502\n\u2502          19 \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT welchTTest(sample_data, sample_index) FROM welch_ttest;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500welchTTest(sample_data, sample_index)\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (2.7988719532211235,0.051807360348581945) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/T-%D0%BA%D1%80%D0%B8%D1%82%D0%B5%D1%80%D0%B8%D0%B9_%D0%A3%D1%8D%D0%BB%D1%87%D0%B0"},"t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0423\u044d\u043b\u0447\u0430")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/studentttest#studentttest"},"studentTTest"))))}f.isMDXComponent=!0}}]);