"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[19604],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(t),m=a,f=s["".concat(c,".").concat(m)]||s[m]||g[m]||o;return t?n.createElement(f,p(p({ref:r},u),{},{components:t})):n.createElement(f,p({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[s]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26927:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/groupbitmapor",sidebar_position:130},p="groupBitmapOr",i={unversionedId:"zh/sql-reference/aggregate-functions/reference/groupbitmapor",id:"zh/sql-reference/aggregate-functions/reference/groupbitmapor",title:"groupBitmapOr",description:"groupbitmapor}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapor.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/groupbitmapor",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/groupbitmapor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapor.md",tags:[],version:"current",sidebarPosition:130,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/groupbitmapor",sidebar_position:130},sidebar:"chinese",previous:{title:"groupBitmapAnd",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/groupbitmapand"},next:{title:"groupBitmapXor",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/groupbitmapxor"}},c={},l=[],u={toc:l},s="wrapper";function g(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groupbitmapor"},"groupBitmapOr"),(0,a.kt)("p",null,"\u8ba1\u7b97\u4f4d\u56fe\u5217\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"OR")," \uff0c\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt64")," \u7c7b\u578b\u7684\u57fa\u6570\uff0c\u5982\u679c\u6dfb\u52a0\u540e\u7f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"State")," \uff0c\u5219\u8fd4\u56de ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/bitmap-functions"},"\u4f4d\u56fe\u5bf9\u8c61"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitmapOr(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u7ed3\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateFunction(groupBitmap, UInt*)")," \u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UInt64")," \u7c7b\u578b\u7684\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS bitmap_column_expr_test2;\nCREATE TABLE bitmap_column_expr_test2\n(\n    tag_id String,\n    z AggregateFunction(groupBitmap, UInt32)\n)\nENGINE = MergeTree\nORDER BY tag_id;\n\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag1', bitmapBuild(cast([1,2,3,4,5,6,7,8,9,10] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag2', bitmapBuild(cast([6,7,8,9,10,11,12,13,14,15] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag3', bitmapBuild(cast([2,4,6,8,10,12] as Array(UInt32))));\n\nSELECT groupBitmapOr(z) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500groupBitmapOr(z)\u2500\u2510\n\u2502             15   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT arraySort(bitmapToArray(groupBitmapOrState(z))) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500arraySort(bitmapToArray(groupBitmapOrState(z)))\u2500\u2510\n\u2502 [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);