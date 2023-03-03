"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[88532],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>g});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),i=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,g=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?t.createElement(g,s(s({ref:r},u),{},{components:n})):t.createElement(g,s({ref:r},u))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58107:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/cramersv",sidebar_position:351},s="cramersV",l={unversionedId:"en/sql-reference/aggregate-functions/reference/cramersv",id:"en/sql-reference/aggregate-functions/reference/cramersv",title:"cramersV",description:"Cram\xe9r's V (sometimes referred to as Cram\xe9r's phi) is a measure of association between two columns in a table. The result of the cramersV function ranges from 0 (corresponding to no association between the variables) to 1 and can reach 1 only when each value is completely determined by the other. It may be viewed as the association between two variables as a percentage of their maximum possible variation.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/cramersv.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/cramersv",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/cramersv",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/cramersv.md",tags:[],version:"current",sidebarPosition:351,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/cramersv",sidebar_position:351},sidebar:"english",previous:{title:"contingency",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/contingency"},next:{title:"cramersVBiasCorrected",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/cramersvbiascorrected"}},c={},i=[],u={toc:i},p="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cramersv"},"cramersV"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cram%C3%A9r%27s_V"},"Cram\xe9r's V")," (sometimes referred to as Cram\xe9r's phi) is a measure of association between two columns in a table. The result of the ",(0,a.kt)("inlineCode",{parentName:"p"},"cramersV")," function ranges from 0 (corresponding to no association between the variables) to 1 and can reach 1 only when each value is completely determined by the other. It may be viewed as the association between two variables as a percentage of their maximum possible variation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"cramersV(column1, column2)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"column1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"column2")," are the columns to be compared")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a value between 0 (corresponding to no association between the columns' values) to 1 (complete association).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return type")," is always ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"The following two columns being compared below have no association with each other, so the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"cramersV")," is 0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    cramersV(a, b)\nFROM\n    (\n        SELECT\n            number % 3 AS a,\n            number % 5 AS b\n        FROM\n            numbers(150)\n    );\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500cramersV(a, b)\u2500\u2510\n\u2502              0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"The following two columns below have a fairly close association, so the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"cramersV")," is a high value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    cramersV(a, b)\nFROM\n    (\n        SELECT\n            number % 10 AS a,\n            number % 5 AS b\n        FROM\n            numbers(150)\n    );\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500\u2500\u2500\u2500cramersV(a, b)\u2500\u2510\n\u2502 0.8944271909999159 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);