"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[34589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||l;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/en/sql-reference/aggregate-functions/reference/studentttest",sidebar_position:300,sidebar_label:"studentTTest"},s="studentTTest",o={unversionedId:"en/sql-reference/aggregate-functions/reference/studentttest",id:"en/sql-reference/aggregate-functions/reference/studentttest",title:"studentTTest",description:"Applies Student's t-test to samples from two populations.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/studentttest.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/studentttest",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/studentttest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/studentttest.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/studentttest",sidebar_position:300,sidebar_label:"studentTTest"},sidebar:"english",previous:{title:"categoricalInformationValue",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue"},next:{title:"welchTTest",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/welchttest"}},i={},c=[],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"studentttest"},"studentTTest"),(0,r.kt)("p",null,"Applies Student's t-test to samples from two populations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"studentTTest([confidence_level])(sample_data, sample_index)\n")),(0,r.kt)("p",null,"Values of both samples are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sample_data")," column. If ",(0,r.kt)("inlineCode",{parentName:"p"},"sample_index")," equals to 0 then the value in that row belongs to the sample from the first population. Otherwise it belongs to the sample from the second population.\nThe null hypothesis is that means of populations are equal. Normal distribution with equal variances is assumed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sample_data")," \u2014 Sample data. ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float")," or ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sample_index")," \u2014 Sample index. ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"Integer"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"confidence_level")," \u2014 Confidence level in order to calculate confidence intervals. ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned values")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/tuple"},"Tuple")," with two or four elements (if the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"confidence_level")," is specified):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"calculated t-statistic. ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64"),"."),(0,r.kt)("li",{parentName:"ul"},"calculated p-value. ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64"),"."),(0,r.kt)("li",{parentName:"ul"},"[calculated confidence-interval-low.][Float64]","(/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float)."),(0,r.kt)("li",{parentName:"ul"},"[calculated confidence-interval-high.][Float64]","(/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Input table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sample_data\u2500\u252c\u2500sample_index\u2500\u2510\n\u2502        20.3 \u2502            0 \u2502\n\u2502        21.1 \u2502            0 \u2502\n\u2502        21.9 \u2502            1 \u2502\n\u2502        21.7 \u2502            0 \u2502\n\u2502        19.9 \u2502            1 \u2502\n\u2502        21.8 \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT studentTTest(sample_data, sample_index) FROM student_ttest;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500studentTTest(sample_data, sample_index)\u2500\u2500\u2500\u2510\n\u2502 (-0.21739130434783777,0.8385421208415731) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Student%27s_t-test"},"Student's t-test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/welchttest#welchttest"},"welchTTest function"))))}f.isMDXComponent=!0}}]);