"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[41854],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||f[m]||s;return r?t.createElement(g,o(o({ref:n},l),{},{components:r})):t.createElement(g,o({ref:n},l))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<s;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37655:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var t=r(87462),a=(r(67294),r(3905));const s={slug:"/en/sql-reference/aggregate-functions/reference/skewsamp",sidebar_position:151},o="skewSamp",p={unversionedId:"en/sql-reference/aggregate-functions/reference/skewsamp",id:"en/sql-reference/aggregate-functions/reference/skewsamp",title:"skewSamp",description:"Computes the sample skewness of a sequence.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/skewsamp.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/skewsamp",permalink:"/docs/en/sql-reference/aggregate-functions/reference/skewsamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/skewsamp.md",tags:[],version:"current",sidebarPosition:151,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/skewsamp",sidebar_position:151},sidebar:"english",previous:{title:"skewPop",permalink:"/docs/en/sql-reference/aggregate-functions/reference/skewpop"},next:{title:"kurtPop",permalink:"/docs/en/sql-reference/aggregate-functions/reference/kurtpop"}},c={},i=[],l={toc:i},u="wrapper";function f(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"skewsamp"},"skewSamp"),(0,a.kt)("p",null,"Computes the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Skewness"},"sample skewness")," of a sequence."),(0,a.kt)("p",null,"It represents an unbiased estimate of the skewness of a random variable if passed values form its sample."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"skewSamp(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a number."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"The skewness of the given distribution. Type \u2014 ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"n <= 1")," (",(0,a.kt)("inlineCode",{parentName:"p"},"n")," is the size of the sample), then the function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"nan"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT skewSamp(value) FROM series_with_value_column;\n")))}f.isMDXComponent=!0}}]);