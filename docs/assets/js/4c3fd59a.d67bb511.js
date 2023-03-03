"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[91045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={slug:"/zh/interfaces/third-party/",sidebar_label:"\u7b2c\u4e09\u65b9\u5de5\u5177",sidebar_position:24},o="\u7b2c\u4e09\u65b9\u5de5\u5177",c={unversionedId:"zh/interfaces/third-party/index",id:"zh/interfaces/third-party/index",title:"\u7b2c\u4e09\u65b9\u5de5\u5177",description:"third-party-interfaces}",source:"@site/docs/zh/interfaces/third-party/index.md",sourceDirName:"zh/interfaces/third-party",slug:"/zh/interfaces/third-party/",permalink:"/docs/zh/interfaces/third-party/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/interfaces/third-party/index.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{slug:"/zh/interfaces/third-party/",sidebar_label:"\u7b2c\u4e09\u65b9\u5de5\u5177",sidebar_position:24},sidebar:"chinese",previous:{title:"C++\u5ba2\u6237\u7aef\u5e93",permalink:"/docs/zh/interfaces/cpp"},next:{title:"\u5ba2\u6237\u7aef\u5f00\u53d1\u5e93",permalink:"/docs/zh/interfaces/third-party/client-libraries"}},s={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"third-party-interfaces"},"\u7b2c\u4e09\u65b9\u5de5\u5177"),(0,a.kt)("p",null,"\u8fd9\u662f\u7b2c\u4e09\u65b9\u5de5\u5177\u7684\u94fe\u63a5\u96c6\u5408\uff0c\u5b83\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9bClickHouse\u7684\u63a5\u53e3\u3002\u5b83\u53ef\u4ee5\u662f\u53ef\u89c6\u5316\u754c\u9762\u3001\u547d\u4ee4\u884c\u754c\u9762\u6216API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/third-party/client-libraries"},"Client libraries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/third-party/integrations"},"Integrations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/third-party/gui"},"GUI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/third-party/proxy"},"Proxies"))),(0,a.kt)("p",null,'!!! note "\u6ce8\u610f"\n\u652f\u6301\u901a\u7528API\u7684\u901a\u7528\u5de5\u5177',(0,a.kt)("a",{parentName:"p",href:"/docs/zh/interfaces/odbc"},"ODBC"),"\u6216",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/interfaces/jdbc"},"JDBC"),"\uff0c\u901a\u5e38\u4e5f\u9002\u7528\u4e8eClickHouse\uff0c\u4f46\u8fd9\u91cc\u6ca1\u6709\u5217\u51fa\uff0c\u56e0\u4e3a\u5b83\u4eec\u5b9e\u5728\u592a\u591a\u4e86\u3002"))}f.isMDXComponent=!0}}]);