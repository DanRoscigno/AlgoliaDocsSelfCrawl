"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[5120],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(l,".").concat(f)]||s[f]||g[f]||o;return n?t.createElement(d,c(c({ref:r},u),{},{components:n})):t.createElement(d,c({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23939:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/ru/sql-reference/aggregate-functions/reference/groupbitand",sidebar_position:125},c="groupBitAnd",i={unversionedId:"ru/sql-reference/aggregate-functions/reference/groupbitand",id:"ru/sql-reference/aggregate-functions/reference/groupbitand",title:"groupBitAnd",description:"groupbitand}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/groupbitand.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/groupbitand",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/groupbitand",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/groupbitand.md",tags:[],version:"current",sidebarPosition:125,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/groupbitand",sidebar_position:125},sidebar:"russia",previous:{title:"groupArraySample",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparraysample"},next:{title:"groupBitOr",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/groupbitor"}},l={},p=[],u={toc:p},s="wrapper";function g(e){let{components:r,...n}=e;return(0,a.kt)(s,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groupbitand"},"groupBitAnd"),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u043f\u043e\u0431\u0438\u0442\u043e\u0432\u043e\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u0418")," \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0447\u0438\u0441\u0435\u043b."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitAnd(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt*"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt*"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00101100 = 44\n00011100 = 28\n00001101 = 13\n01010101 = 85\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitAnd(num) FROM t\n")),(0,a.kt)("p",null,"\u0413\u0434\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00000100 = 4\n")))}g.isMDXComponent=!0}}]);