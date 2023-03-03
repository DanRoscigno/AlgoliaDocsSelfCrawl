"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[54163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},E=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),E=a,d=u["".concat(i,".").concat(E)]||u[E]||m[E]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=E;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}E.displayName="MDXCreateElement"},29498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/ru/sql-reference/statements/revoke",sidebar_position:39,sidebar_label:"REVOKE"},o="REVOKE",s={unversionedId:"ru/sql-reference/statements/revoke",id:"ru/sql-reference/statements/revoke",title:"REVOKE",description:"\u041e\u0442\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u043b\u0438 \u0440\u043e\u043b\u0435\u0439.",source:"@site/docs/ru/sql-reference/statements/revoke.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/revoke",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/revoke",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/revoke.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/ru/sql-reference/statements/revoke",sidebar_position:39,sidebar_label:"REVOKE"},sidebar:"russia",previous:{title:"EXPLAIN",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/explain"},next:{title:"ATTACH",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/attach"}},i={},c=[{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"revoke-syntax",level:2},{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"revoke-description",level:2},{value:"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u043e\u0442\u0437\u044b\u0432",id:"partial-revokes-dscr",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"revoke-example",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"revoke"},"REVOKE"),(0,a.kt)("p",null,"\u041e\u0442\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u043b\u0438 \u0440\u043e\u043b\u0435\u0439."),(0,a.kt)("h2",{id:"revoke-syntax"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041e\u0442\u0437\u044b\u0432 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] privilege[(column_name [,...])] [,...] ON {db.table|db.*|*.*|table|*} FROM {user | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user | CURRENT_USER} [,...]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041e\u0442\u0437\u044b\u0432 \u0440\u043e\u043b\u0435\u0439 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] [ADMIN OPTION FOR] role [,...] FROM {user | role | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user_name | role_name | CURRENT_USER} [,...]\n")),(0,a.kt)("h2",{id:"revoke-description"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043e\u0442\u0437\u044b\u0432\u0430 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044e \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0435\u0441\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT (x,y)"),", \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u0435\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432: ",(0,a.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT(x,y) ..."),", ",(0,a.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT * ...")," \u0438\u043b\u0438 \u0434\u0430\u0436\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"REVOKE ALL PRIVILEGES ..."),"."),(0,a.kt)("h3",{id:"partial-revokes-dscr"},"\u0427\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u043e\u0442\u0437\u044b\u0432"),(0,a.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u0447\u0430\u0441\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0435\u0441\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT *.*"),", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044e \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u043b\u0438 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("h2",{id:"revoke-example"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("p",null,"\u041f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044e \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438\u0437 \u0432\u0441\u0435\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0440\u043e\u043c\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON *.* TO john;\nREVOKE SELECT ON accounts.* FROM john;\n")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"mira")," \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044e \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438\u0437 \u0432\u0441\u0435\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts.staff")," \u043a\u0440\u043e\u043c\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"wage"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON accounts.staff TO mira;\nREVOKE SELECT(wage) ON accounts.staff FROM mira;\n")))}m.isMDXComponent=!0}}]);