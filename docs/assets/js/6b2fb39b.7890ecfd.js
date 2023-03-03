"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[46174],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},27580:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const l={slug:"/ru/sql-reference/distributed-ddl",sidebar_position:32,sidebar_label:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 DDL \u0437\u0430\u043f\u0440\u043e\u0441\u044b"},o="\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 DDL \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u0441\u0435\u043a\u0446\u0438\u044f ON CLUSTER)",a={unversionedId:"ru/sql-reference/distributed-ddl",id:"ru/sql-reference/distributed-ddl",title:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 DDL \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u0441\u0435\u043a\u0446\u0438\u044f ON CLUSTER)",description:"raspredelennye-ddl-zaprosy-sektsiia-on-cluster}",source:"@site/docs/ru/sql-reference/distributed-ddl.md",sourceDirName:"ru/sql-reference",slug:"/ru/sql-reference/distributed-ddl",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/distributed-ddl",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/distributed-ddl.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{slug:"/ru/sql-reference/distributed-ddl",sidebar_position:32,sidebar_label:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 DDL \u0437\u0430\u043f\u0440\u043e\u0441\u044b"},sidebar:"russia",previous:{title:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/syntax"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/functions/"}},s={},c=[],u={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,i.kt)(d,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"raspredelennye-ddl-zaprosy-sektsiia-on-cluster"},"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 DDL \u0437\u0430\u043f\u0440\u043e\u0441\u044b (\u0441\u0435\u043a\u0446\u0438\u044f ON CLUSTER)"),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RENAME")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435.\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e (Distributed) \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"all_hits")," \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0445\u043e\u0441\u0442\u0435 \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS all_hits ON CLUSTER cluster (p Date, i Int32) ENGINE = Distributed(cluster, default, hits)\n")),(0,i.kt)("p",null,"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0442\u0430\u043a\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0445\u043e\u0441\u0442\u0435 \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 (\u0434\u043b\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u043e\u0432 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438\u0437 ZooKeeper). \u0422\u0430\u043a\u0436\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a ZooKeeper \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c.\n\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u043c \u0438\u0442\u043e\u0433\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0445\u043e\u0441\u0442\u0435 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0441\u0442\u044b \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b. \u0413\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043e\u0434\u043d\u043e\u0433\u043e \u0445\u043e\u0441\u0442\u0430."))}p.isMDXComponent=!0}}]);