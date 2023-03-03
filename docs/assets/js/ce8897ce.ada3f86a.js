"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[75203],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,m=s["".concat(c,".").concat(f)]||s[f]||g[f]||a;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73281:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={slug:"/ru/sql-reference/aggregate-functions/reference/groupbitor",sidebar_position:126},l="groupBitOr",i={unversionedId:"ru/sql-reference/aggregate-functions/reference/groupbitor",id:"ru/sql-reference/aggregate-functions/reference/groupbitor",title:"groupBitOr",description:"groupbitor}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/groupbitor.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/groupbitor",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/groupbitor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/groupbitor.md",tags:[],version:"current",sidebarPosition:126,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/groupbitor",sidebar_position:126},sidebar:"russia",previous:{title:"groupBitAnd",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/groupbitand"},next:{title:"groupBitXor",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/aggregate-functions/reference/groupbitxor"}},c={},u=[],p={toc:u},s="wrapper";function g(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupbitor"},"groupBitOr"),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u043e\u0431\u0438\u0442\u043e\u0432\u043e\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u0418\u041b\u0418")," \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0447\u0438\u0441\u0435\u043b."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitOr(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt*"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,o.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt*"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("p",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00101100 = 44\n00011100 = 28\n00001101 = 13\n01010101 = 85\n")),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitOr(num) FROM t\n")),(0,o.kt)("p",null,"\u0413\u0434\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"num")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."),(0,o.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n01111101 = 125\n")))}g.isMDXComponent=!0}}]);