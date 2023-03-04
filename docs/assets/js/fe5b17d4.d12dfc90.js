"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[6670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={slug:"/en/faq/general/dbms-naming",title:"What does \u201cClickHouse\u201d mean?",toc_hidden:!0,toc_priority:10},i="What Does \u201cClickHouse\u201d Mean?",s={unversionedId:"en/faq/general/dbms-naming",id:"en/faq/general/dbms-naming",title:"What does \u201cClickHouse\u201d mean?",description:"what-does-clickhouse-mean}",source:"@site/docs/en/faq/general/dbms-naming.md",sourceDirName:"en/faq/general",slug:"/en/faq/general/dbms-naming",permalink:"/AlgoliaDocsSelfCrawl/en/faq/general/dbms-naming",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/general/dbms-naming.md",tags:[],version:"current",frontMatter:{slug:"/en/faq/general/dbms-naming",title:"What does \u201cClickHouse\u201d mean?",toc_hidden:!0,toc_priority:10}},l={},c=[],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-does-clickhouse-mean"},"What Does \u201cClickHouse\u201d Mean?"),(0,r.kt)("p",null,"It\u2019s a combination of \u201c",(0,r.kt)("strong",{parentName:"p"},"Click"),"stream\u201d and \u201cData ware",(0,r.kt)("strong",{parentName:"p"},"House"),"\u201d. It comes from the original use case at Yandex.Metrica, where ClickHouse was supposed to keep records of all clicks by people from all over the Internet, and it still does the job. You can read more about this use case on ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/about-us/history"},"ClickHouse history")," page."),(0,r.kt)("p",null,"This two-part meaning has two consequences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The only correct way to write Click",(0,r.kt)("strong",{parentName:"li"},"H"),"ouse is with capital H."),(0,r.kt)("li",{parentName:"ul"},"If you need to abbreviate it, use ",(0,r.kt)("strong",{parentName:"li"},"CH"),". For some historical reasons, abbreviating as CK is also popular in China, mostly because one of the first talks about ClickHouse in Chinese used this form.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Many years after ClickHouse got its name, this approach of combining two words that are meaningful on their own has been highlighted as the best way to name a database in a ",(0,r.kt)("a",{parentName:"p",href:"https://www.cs.cmu.edu/~pavlo/blog/2020/03/on-naming-a-database-management-system.html"},"research by Andy Pavlo"),", an Associate Professor of Databases at Carnegie Mellon University. ClickHouse shared his \u201cbest database name of all time\u201d award with Postgres.")))}p.isMDXComponent=!0}}]);