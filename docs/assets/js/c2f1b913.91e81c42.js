"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[66577],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=a,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75240:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/zh/faq/general/mapreduce",title:"\u4e3a\u4f55\u4e0d\u4f7f\u7528 MapReduce\u7b49\u6280\u672f?",toc_hidden:!0,sidebar_position:110},c="\u4e3a\u4f55\u4e0d\u4f7f\u7528 MapReduce\u7b49\u6280\u672f?",l={unversionedId:"zh/faq/general/mapreduce",id:"zh/faq/general/mapreduce",title:"\u4e3a\u4f55\u4e0d\u4f7f\u7528 MapReduce\u7b49\u6280\u672f?",description:"why-not-use-something-like-mapreduce}",source:"@site/docs/zh/faq/general/mapreduce.md",sourceDirName:"zh/faq/general",slug:"/zh/faq/general/mapreduce",permalink:"/AlgoliaDocsSelfCrawl/zh/faq/general/mapreduce",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/general/mapreduce.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{slug:"/zh/faq/general/mapreduce",title:"\u4e3a\u4f55\u4e0d\u4f7f\u7528 MapReduce\u7b49\u6280\u672f?",toc_hidden:!0,sidebar_position:110},sidebar:"chinese",previous:{title:"\u4ec0\u4e48\u662f\u5217\u5b58\u50a8\u6570\u636e\u5e93?",permalink:"/AlgoliaDocsSelfCrawl/zh/faq/general/columnar-database"},next:{title:"\u6211\u5982\u4f55\u4e3aClickHouse\u8d21\u732e\u4ee3\u7801?",permalink:"/AlgoliaDocsSelfCrawl/zh/faq/general/how-do-i-contribute-code-to-clickhouse"}},i={},p=[],u={toc:p},s="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-not-use-something-like-mapreduce"},"\u4e3a\u4f55\u4e0d\u4f7f\u7528 MapReduce\u7b49\u6280\u672f?"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06MapReduce\u8fd9\u6837\u7684\u7cfb\u7edf\u79f0\u4e3a\u5206\u5e03\u5f0f\u8ba1\u7b97\u7cfb\u7edf\uff0c\u5176\u4e2d\u7684reduce\u64cd\u4f5c\u662f\u57fa\u4e8e\u5206\u5e03\u5f0f\u6392\u5e8f\u7684\u3002\u8fd9\u4e2a\u9886\u57df\u4e2d\u6700\u5e38\u89c1\u7684\u5f00\u6e90\u89e3\u51b3\u65b9\u6848\u662f",(0,a.kt)("a",{parentName:"p",href:"http://hadoop.apache.org"},"Apache Hadoop"),"\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u7cfb\u7edf\u4e0d\u9002\u5408\u7528\u4e8e\u5728\u7ebf\u67e5\u8be2\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u5ef6\u8fdf\u5f88\u5927\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u4eec\u4e0d\u80fd\u88ab\u7528\u4f5c\u7f51\u9875\u754c\u9762\u7684\u540e\u7aef\u3002\u8fd9\u4e9b\u7c7b\u578b\u7684\u7cfb\u7edf\u5bf9\u4e8e\u5b9e\u65f6\u6570\u636e\u66f4\u65b0\u5e76\u4e0d\u662f\u5f88\u6709\u7528\u3002\u5982\u679c\u64cd\u4f5c\u7684\u7ed3\u679c\u548c\u6240\u6709\u4e2d\u95f4\u7ed3\u679c(\u5982\u679c\u6709\u7684\u8bdd)\u90fd\u4f4d\u4e8e\u5355\u4e2a\u670d\u52a1\u5668\u7684\u5185\u5b58\u4e2d\uff0c\u90a3\u4e48\u5206\u5e03\u5f0f\u6392\u5e8f\u5c31\u4e0d\u662f\u6267\u884creduce\u64cd\u4f5c\u7684\u6700\u4f73\u65b9\u5f0f\uff0c\u8fd9\u901a\u5e38\u662f\u5728\u7ebf\u67e5\u8be2\u7684\u60c5\u51b5\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u54c8\u5e0c\u8868\u662f\u6267\u884creduce\u64cd\u4f5c\u7684\u6700\u4f73\u65b9\u5f0f\u3002\u4f18\u5316map-reduce\u4efb\u52a1\u7684\u4e00\u79cd\u5e38\u89c1\u65b9\u6cd5\u662f\u4f7f\u7528\u5185\u5b58\u4e2d\u7684\u54c8\u5e0c\u8868\u8fdb\u884c\u9884\u805a\u5408(\u90e8\u5206reduce)\u3002\u7528\u6237\u624b\u52a8\u6267\u884c\u6b64\u4f18\u5316\u3002\u5728\u8fd0\u884c\u7b80\u5355\u7684map-reduce\u4efb\u52a1\u65f6\uff0c\u5206\u5e03\u5f0f\u6392\u5e8f\u662f\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d\u7684\u4e3b\u8981\u539f\u56e0\u4e4b\u4e00\u3002"),(0,a.kt)("p",null,"\u5927\u591a\u6570MapReduce\u5b9e\u73b0\u5141\u8bb8\u4f60\u5728\u96c6\u7fa4\u4e2d\u6267\u884c\u4efb\u610f\u4ee3\u7801\u3002\u4f46\u662f\u58f0\u660e\u6027\u67e5\u8be2\u8bed\u8a00\u66f4\u9002\u5408\u4e8eOLAP\uff0c\u4ee5\u4fbf\u5feb\u901f\u8fd0\u884c\u5b9e\u9a8c\u3002\u4f8b\u5982\uff0cHadoop\u6709Hive\u548cPig\u3002\u8fd8\u53ef\u4ee5\u8003\u8651\u4f7f\u7528Cloudera Impala\u6216Shark(\u5df2\u7ecf\u8fc7\u65f6\u4e86)\u6765\u652f\u6301Spark\uff0c\u4ee5\u53caSpark SQL\u3001Presto\u548cApache Drill\u3002\u4e0e\u4e13\u95e8\u7684\u7cfb\u7edf\u76f8\u6bd4\uff0c\u8fd0\u884c\u8fd9\u4e9b\u4efb\u52a1\u7684\u6027\u80fd\u662f\u975e\u5e38\u4e0d\u7406\u60f3\u7684\uff0c\u4f46\u662f\u76f8\u5bf9\u8f83\u9ad8\u7684\u5ef6\u8fdf\u4f7f\u5f97\u4f7f\u7528\u8fd9\u4e9b\u7cfb\u7edf\u4f5c\u4e3aweb\u754c\u9762\u7684\u540e\u7aef\u662f\u4e0d\u73b0\u5b9e\u7684\u3002"))}d.isMDXComponent=!0}}]);