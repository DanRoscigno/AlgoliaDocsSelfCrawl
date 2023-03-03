"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[56927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,k=p["".concat(u,".").concat(f)]||p[f]||h[f]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/sql-reference/functions/uniqtheta-functions"},o="uniqTheta Functions",c={unversionedId:"en/sql-reference/functions/uniqtheta-functions",id:"en/sql-reference/functions/uniqtheta-functions",title:"uniqTheta Functions",description:"uniqTheta functions work for two uniqThetaSketch objects to do set operation calculations such as  \u222a / \u2229 / \xd7 (union/intersect/not), it is to return a new uniqThetaSketch object contain the result.",source:"@site/docs/en/sql-reference/functions/uniqtheta-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/uniqtheta-functions",permalink:"/docs/en/sql-reference/functions/uniqtheta-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/uniqtheta-functions.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/functions/uniqtheta-functions"},sidebar:"english",previous:{title:"Distance functions",permalink:"/docs/en/sql-reference/functions/distance-functions"},next:{title:"Aggregate Functions",permalink:"/docs/en/sql-reference/aggregate-functions/"}},u={},l=[{value:"uniqThetaUnion",id:"uniqthetaunion",level:2},{value:"uniqThetaIntersect",id:"uniqthetaintersect",level:2},{value:"uniqThetaNot",id:"uniqthetanot",level:2}],s={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uniqtheta-functions"},"uniqTheta Functions"),(0,r.kt)("p",null,"uniqTheta functions work for two uniqThetaSketch objects to do set operation calculations such as  \u222a / \u2229 / \xd7 (union/intersect/not), it is to return a new uniqThetaSketch object contain the result."),(0,r.kt)("p",null,"A uniqThetaSketch object is to be constructed by aggregation function uniqTheta with -State."),(0,r.kt)("p",null,"UniqThetaSketch is a data structure storage of approximate values set.\nFor more information on RoaringBitmap, see: ",(0,r.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Theta/ThetaSketchFramework.html"},"Theta Sketch Framework"),"."),(0,r.kt)("h2",{id:"uniqthetaunion"},"uniqThetaUnion"),(0,r.kt)("p",null,"Two uniqThetaSketch objects to do union calculation(set operation \u222a), the result is a new uniqThetaSketch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"uniqThetaUnion(uniqThetaSketch,uniqThetaSketch)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uniqThetaSketch")," \u2013 uniqThetaSketch object.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select finalizeAggregation(uniqThetaUnion(a, b)) as a_union_b, finalizeAggregation(a) as a_cardinality, finalizeAggregation(b) as b_cardinality\nfrom\n(select arrayReduce('uniqThetaState',[1,2]) as a, arrayReduce('uniqThetaState',[2,3,4]) as b );\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a_union_b\u2500\u252c\u2500a_cardinality\u2500\u252c\u2500b_cardinality\u2500\u2510\n\u2502         4 \u2502             2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"uniqthetaintersect"},"uniqThetaIntersect"),(0,r.kt)("p",null,"Two uniqThetaSketch objects to do intersect calculation(set operation \u2229), the result is a new uniqThetaSketch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"uniqThetaIntersect(uniqThetaSketch,uniqThetaSketch)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uniqThetaSketch")," \u2013 uniqThetaSketch object.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select finalizeAggregation(uniqThetaIntersect(a, b)) as a_intersect_b, finalizeAggregation(a) as a_cardinality, finalizeAggregation(b) as b_cardinality\nfrom\n(select arrayReduce('uniqThetaState',[1,2]) as a, arrayReduce('uniqThetaState',[2,3,4]) as b );\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a_intersect_b\u2500\u252c\u2500a_cardinality\u2500\u252c\u2500b_cardinality\u2500\u2510\n\u2502             1 \u2502             2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"uniqthetanot"},"uniqThetaNot"),(0,r.kt)("p",null,"Two uniqThetaSketch objects to do a_not_b calculation(set operation \xd7), the result is a new uniqThetaSketch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"uniqThetaNot(uniqThetaSketch,uniqThetaSketch)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uniqThetaSketch")," \u2013 uniqThetaSketch object.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select finalizeAggregation(uniqThetaNot(a, b)) as a_not_b, finalizeAggregation(a) as a_cardinality, finalizeAggregation(b) as b_cardinality\nfrom\n(select arrayReduce('uniqThetaState',[2,3,4]) as a, arrayReduce('uniqThetaState',[1,2]) as b );\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a_not_b\u2500\u252c\u2500a_cardinality\u2500\u252c\u2500b_cardinality\u2500\u2510\n\u2502       2 \u2502             3 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch#agg_function-uniqthetasketch"},"uniqThetaSketch"))))}h.isMDXComponent=!0}}]);