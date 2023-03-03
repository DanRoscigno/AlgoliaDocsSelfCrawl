"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[74283],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,g=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(g,c(c({ref:r},l),{},{components:t})):n.createElement(g,c({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56031:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/kurtsamp",sidebar_position:154},c="kurtSamp",s={unversionedId:"zh/sql-reference/aggregate-functions/reference/kurtsamp",id:"zh/sql-reference/aggregate-functions/reference/kurtsamp",title:"kurtSamp",description:"kurtsamp}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/kurtsamp.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/kurtsamp",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/kurtsamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/kurtsamp.md",tags:[],version:"current",sidebarPosition:154,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/kurtsamp",sidebar_position:154},sidebar:"chinese",previous:{title:"kurtPop",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/kurtpop"},next:{title:"uniq",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniq"}},p={},i=[],l={toc:i},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kurtsamp"},"kurtSamp"),(0,a.kt)("p",null,"\u8ba1\u7b97\u7ed9\u5b9a\u5e8f\u5217\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kurtosis"},"\u5cf0\u5ea6\u6837\u672c"),"\u3002\n\u5b83\u8868\u793a\u968f\u673a\u53d8\u91cf\u5cf0\u5ea6\u7684\u65e0\u504f\u4f30\u8ba1\uff0c\u5982\u679c\u4f20\u9012\u7684\u503c\u5f62\u6210\u5176\u6837\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"kurtSamp(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 \u7ed3\u679c\u4e3a\u6570\u5b57\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,"\u7ed9\u5b9a\u5e8f\u5217\u7684\u5cf0\u5ea6\u3002\u7c7b\u578b \u2014 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/float"},"Float64"),"\u3002 \u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"n <= 1")," (",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u662f\u6837\u672c\u7684\u5927\u5c0f\uff09\uff0c\u5219\u8be5\u51fd\u6570\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"nan"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT kurtSamp(value) FROM series_with_value_column;\n")))}f.isMDXComponent=!0}}]);