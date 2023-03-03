"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[69610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),f=o,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/en/sql-reference/data-types/boolean",sidebar_position:43,sidebar_label:"Boolean"},l="Bool",s={unversionedId:"en/sql-reference/data-types/boolean",id:"en/sql-reference/data-types/boolean",title:"Bool",description:"Type bool is internally stored as UInt8. Possible values are true (1), false (0).",source:"@site/docs/en/sql-reference/data-types/boolean.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/boolean",permalink:"/docs/en/sql-reference/data-types/boolean",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/boolean.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{slug:"/en/sql-reference/data-types/boolean",sidebar_position:43,sidebar_label:"Boolean"},sidebar:"english",previous:{title:"Decimal",permalink:"/docs/en/sql-reference/data-types/decimal"},next:{title:"String",permalink:"/docs/en/sql-reference/data-types/string"}},c={},i=[],p={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bool"},"Bool"),(0,o.kt)("p",null,"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"bool")," is internally stored as UInt8. Possible values are ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (1), ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," (0)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select true as col, toTypeName(col);\n\u250c\u2500col\u2500\u2500\u252c\u2500toTypeName(true)\u2500\u2510\n\u2502 true \u2502 Bool             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nselect true == 1 as col, toTypeName(col);\n\u250c\u2500col\u2500\u252c\u2500toTypeName(equals(true, 1))\u2500\u2510\n\u2502   1 \u2502 UInt8                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_bool\n(\n    `A` Int64,\n    `B` Bool\n)\nENGINE = Memory;\n\nINSERT INTO test_bool VALUES (1, true),(2,0);\n\nSELECT * FROM test_bool;\n\u250c\u2500A\u2500\u252c\u2500B\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 true  \u2502\n\u2502 2 \u2502 false \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);