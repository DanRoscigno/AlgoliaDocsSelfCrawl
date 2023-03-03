"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[37418],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||g[f]||o;return n?t.createElement(m,l(l({ref:r},s),{},{components:n})):t.createElement(m,l({ref:r},s))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54593:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/groupbitand",sidebar_position:125},l="groupBitAnd",i={unversionedId:"en/sql-reference/aggregate-functions/reference/groupbitand",id:"en/sql-reference/aggregate-functions/reference/groupbitand",title:"groupBitAnd",description:"Applies bitwise AND for series of numbers.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/groupbitand.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/groupbitand",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/groupbitand",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/groupbitand.md",tags:[],version:"current",sidebarPosition:125,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/groupbitand",sidebar_position:125},sidebar:"english",previous:{title:"groupArraySample",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/grouparraysample"},next:{title:"groupBitOr",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/groupbitor"}},p={},c=[],s={toc:c},u="wrapper";function g(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groupbitand"},"groupBitAnd"),(0,a.kt)("p",null,"Applies bitwise ",(0,a.kt)("inlineCode",{parentName:"p"},"AND")," for series of numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitAnd(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 An expression that results in ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt*")," type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value")),(0,a.kt)("p",null,"Value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt*")," type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Test data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00101100 = 44\n00011100 = 28\n00001101 = 13\n01010101 = 85\n")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitAnd(num) FROM t\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"num")," is the column with the test data."),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00000100 = 4\n")))}g.isMDXComponent=!0}}]);