"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[33356],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(t),h=i,m=f["".concat(l,".").concat(h)]||f[h]||p[h]||o;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=h;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[f]="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},69291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={slug:"/zh/sql-reference/functions/machine-learning-functions"},c="\u673a\u5668\u5b66\u4e60\u51fd\u6570",a={unversionedId:"zh/sql-reference/functions/machine-learning-functions",id:"zh/sql-reference/functions/machine-learning-functions",title:"\u673a\u5668\u5b66\u4e60\u51fd\u6570",description:"ji-qi-xue-xi-han-shu}",source:"@site/docs/zh/sql-reference/functions/machine-learning-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/machine-learning-functions",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/machine-learning-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/machine-learning-functions.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/functions/machine-learning-functions"},sidebar:"chinese",previous:{title:"JSON\u51fd\u6570",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/json-functions"},next:{title:"\u6570\u5b66\u51fd\u6570",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/math-functions"}},l={},s=[{value:"evalMLMethod\uff08\u9884\u6d4b)",id:"machine_learning_methods-evalmlmethod",level:2},{value:"\u968f\u673a\u7ebf\u6027\u56de\u5f52",id:"stochastic-linear-regression",level:2},{value:"\u968f\u673a\u903b\u8f91\u56de\u5f52",id:"stochastic-logistic-regression",level:2}],u={toc:s},f="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(f,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ji-qi-xue-xi-han-shu"},"\u673a\u5668\u5b66\u4e60\u51fd\u6570"),(0,i.kt)("h2",{id:"machine_learning_methods-evalmlmethod"},"evalMLMethod\uff08\u9884\u6d4b)"),(0,i.kt)("p",null,"\u4f7f\u7528\u62df\u5408\u56de\u5f52\u6a21\u578b\u7684\u9884\u6d4b\u8bf7\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"evalMLMethod"),"\u51fd\u6570\u3002 \u8bf7\u53c2\u9605",(0,i.kt)("inlineCode",{parentName:"p"},"linearRegression"),"\u4e2d\u7684\u94fe\u63a5\u3002"),(0,i.kt)("h2",{id:"stochastic-linear-regression"},"\u968f\u673a\u7ebf\u6027\u56de\u5f52"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stochasticLinearRegression"),"\u805a\u5408\u51fd\u6570\u4f7f\u7528\u7ebf\u6027\u6a21\u578b\u548cMSE\u635f\u5931\u51fd\u6570\u5b9e\u73b0\u968f\u673a\u68af\u5ea6\u4e0b\u964d\u6cd5\u3002 \u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"evalMLMethod"),"\u6765\u9884\u6d4b\u65b0\u6570\u636e\u3002\n\u8bf7\u53c2\u9605\u793a\u4f8b\u548c\u6ce8\u91ca",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/machine-learning-functions#agg_functions-stochasticlinearregression"},"\u6b64\u5904"),"\u3002"),(0,i.kt)("h2",{id:"stochastic-logistic-regression"},"\u968f\u673a\u903b\u8f91\u56de\u5f52"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stochasticLogisticRegression"),"\u805a\u5408\u51fd\u6570\u5b9e\u73b0\u4e86\u4e8c\u5143\u5206\u7c7b\u95ee\u9898\u7684\u968f\u673a\u68af\u5ea6\u4e0b\u964d\u6cd5\u3002 \u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"evalMLMethod"),"\u6765\u9884\u6d4b\u65b0\u6570\u636e\u3002\n\u8bf7\u53c2\u9605\u793a\u4f8b\u548c\u6ce8\u91ca",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/machine-learning-functions#agg_functions-stochasticlogisticregression"},"\u6b64\u5904"),"\u3002"))}p.isMDXComponent=!0}}]);