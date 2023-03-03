"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=p(n),m=l,k=o["".concat(c,".").concat(m)]||o[m]||d[m]||a;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[o]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={slug:"/ru/sql-reference/table-functions/cluster",sidebar_position:50,sidebar_label:"cluster"},s="cluster, clusterAllReplicas",i={unversionedId:"ru/sql-reference/table-functions/cluster",id:"ru/sql-reference/table-functions/cluster",title:"cluster, clusterAllReplicas",description:"cluster-clusterallreplicas}",source:"@site/docs/ru/sql-reference/table-functions/cluster.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/cluster",permalink:"/docs/ru/sql-reference/table-functions/cluster",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/cluster.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{slug:"/ru/sql-reference/table-functions/cluster",sidebar_position:50,sidebar_label:"cluster"},sidebar:"russia",previous:{title:"generateRandom",permalink:"/docs/ru/sql-reference/table-functions/generate"},next:{title:"null \u0444\u0443\u043d\u043a\u0446\u0438\u044f",permalink:"/docs/ru/sql-reference/table-functions/null"}},c={},p=[],u={toc:p},o="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(o,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cluster-clusterallreplicas"},"cluster, clusterAllReplicas"),(0,l.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u043c \u0448\u0430\u0440\u0434\u0430\u043c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"remote_servers")," \u0431\u0435\u0437 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0438\u043f\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/special/distributed"},"Distributed"),". \u0412 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0430 \u0440\u0435\u043f\u043b\u0438\u043a\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0448\u0430\u0440\u0434\u0430."),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterAllReplicas")," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u0430\u043a\u0436\u0435 \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster"),", \u043d\u043e \u043a\u0430\u0436\u0434\u0430\u044f \u0440\u0435\u043f\u043b\u0438\u043a\u0430 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0448\u0430\u0440\u0434/\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0412\u0441\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 [system.clusters](/docs/ru/operations/system-tables/clusters).\n:::\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"cluster('cluster_name', db.table[, sharding_key])\ncluster('cluster_name', db, table[, sharding_key])\nclusterAllReplicas('cluster_name', db.table[, sharding_key])\nclusterAllReplicas('cluster_name', db, table[, sharding_key])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cluster_name")," \u2013 \u0438\u043c\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u043c \u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c, \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u043c \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db.table")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"db"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," - \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sharding_key")," - \u043a\u043b\u044e\u0447 \u0448\u0430\u0440\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442. \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u0432 \u043e\u0434\u0438\u043d \u0448\u0430\u0440\u0434 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430. ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("p",null,"\u041d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u043a\u0440\u043e\u0441\u043e\u0432")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cluster_name")," \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0430\u043a\u0440\u043e\u0441 \u2014 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u0432 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u0445 \u0441\u043a\u043e\u0431\u043a\u0430\u0445. \u042d\u0442\u0430 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#macros"},"macros")," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM cluster('{cluster}', default.example_table);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438")," "),(0,l.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterAllReplicas")," \u043c\u0435\u043d\u0435\u0435 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e, \u0447\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0438\u043f\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"Distributed"),", \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u043d\u043e\u0432\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c. \u041f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"Distributed")," \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0438 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterAllReplicas"),"."),(0,l.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterAllReplicas")," \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u044b \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0427\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0434\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."),(0,l.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0440\u0430\u0437\u043d\u044b\u043c ClickHouse \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430\u043c \u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u043c \u0432 \u0446\u0435\u043b\u044f\u0445 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f."),(0,l.kt)("li",{parentName:"ul"},"\u041d\u0435\u0447\u0430\u0441\u0442\u044b\u0445 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0435\u043b\u0430\u044e\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e.")),(0,l.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"compression"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"secure")," \u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0438\u0437 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"<remote_servers>")," \u0444\u0430\u0439\u043b\u043e\u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438. \u0421\u043c. \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/special/distributed"},"Distributed")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#settings-skip_unavailable_shards"},"skip_unavailable_shards")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#settings-load_balancing"},"load_balancing"))))}d.isMDXComponent=!0}}]);