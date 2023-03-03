"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[55673],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return n?t.createElement(g,l(l({ref:r},p),{},{components:n})):t.createElement(g,l({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67729:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/maxmap",sidebar_position:143},l="maxMap",c={unversionedId:"en/sql-reference/aggregate-functions/reference/maxmap",id:"en/sql-reference/aggregate-functions/reference/maxmap",title:"maxMap",description:"Syntax: maxMap(key, value) or maxMap(Tuple(key, value))",source:"@site/docs/en/sql-reference/aggregate-functions/reference/maxmap.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/maxmap",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/maxmap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/maxmap.md",tags:[],version:"current",sidebarPosition:143,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/maxmap",sidebar_position:143},sidebar:"english",previous:{title:"minMap",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/minmap"},next:{title:"sumCount",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/sumcount"}},i={},s=[],p={toc:s},u="wrapper";function f(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"maxmap"},"maxMap"),(0,a.kt)("p",null,"Syntax: ",(0,a.kt)("inlineCode",{parentName:"p"},"maxMap(key, value)")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"maxMap(Tuple(key, value))")),(0,a.kt)("p",null,"Calculates the maximum from ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," array according to the keys specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," array."),(0,a.kt)("p",null,"Passing a tuple of keys and value arrays is identical to passing two arrays of keys and values."),(0,a.kt)("p",null,"The number of elements in ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," must be the same for each row that is totaled."),(0,a.kt)("p",null,"Returns a tuple of two arrays: keys and values calculated for the corresponding keys."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT maxMap(a, b)\nFROM values('a Array(Char), b Array(Int64)', (['x', 'y'], [2, 2]), (['y', 'z'], [3, 1]))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500maxMap(a, b)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [['x','y','z'],[2,3,1]]\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);