"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[1937],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return n?t.createElement(d,c(c({ref:r},u),{},{components:n})):t.createElement(d,c({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43538:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/cramersvbiascorrected",sidebar_position:352},c="cramersVBiasCorrected",s={unversionedId:"en/sql-reference/aggregate-functions/reference/cramersvbiascorrected",id:"en/sql-reference/aggregate-functions/reference/cramersvbiascorrected",title:"cramersVBiasCorrected",description:"Cram\xe9r's V is a measure of association between two columns in a table. The result of the cramersV function ranges from 0 (corresponding to no association between the variables) to 1 and can reach 1 only when each value is completely determined by the other. The function can be heavily biased, so this version of Cram\xe9r's V uses the bias correction.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/cramersvbiascorrected.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/cramersvbiascorrected",permalink:"/docs/en/sql-reference/aggregate-functions/reference/cramersvbiascorrected",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/cramersvbiascorrected.md",tags:[],version:"current",sidebarPosition:352,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/cramersvbiascorrected",sidebar_position:352},sidebar:"english",previous:{title:"cramersV",permalink:"/docs/en/sql-reference/aggregate-functions/reference/cramersv"},next:{title:"theilsU",permalink:"/docs/en/sql-reference/aggregate-functions/reference/theilsu"}},i={},l=[],u={toc:l},p="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cramersvbiascorrected"},"cramersVBiasCorrected"),(0,a.kt)("p",null,"Cram\xe9r's V is a measure of association between two columns in a table. The result of the ",(0,a.kt)("a",{parentName:"p",href:"./cramersv"},(0,a.kt)("inlineCode",{parentName:"a"},"cramersV")," function")," ranges from 0 (corresponding to no association between the variables) to 1 and can reach 1 only when each value is completely determined by the other. The function can be heavily biased, so this version of Cram\xe9r's V uses the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cram%C3%A9r%27s_V#Bias_correction"},"bias correction"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"cramersVBiasCorrected(column1, column2)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"column1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"column2")," are the columns to be compared")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a value between 0 (corresponding to no association between the columns' values) to 1 (complete association).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return type")," is always ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"The following two columns being compared below have a small association with each other. Notice the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"cramersVBiasCorrected")," is smaller than the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"cramersV"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    cramersV(a, b),\n    cramersVBiasCorrected(a ,b)\nFROM\n    (\n        SELECT\n            number % 10 AS a,\n            number % 4 AS b\n        FROM\n            numbers(150)\n    );\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500cramersV(a, b)\u2500\u252c\u2500cramersVBiasCorrected(a, b)\u2500\u2510\n\u2502 0.41171788506213564 \u2502         0.33369281784141364 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);