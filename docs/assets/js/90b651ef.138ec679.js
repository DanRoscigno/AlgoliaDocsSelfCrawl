"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[74733],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(o,".").concat(f)]||m[f]||u[f]||l;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/zh/sql-reference/statements/alter/",sidebar_position:35,sidebar_label:"ALTER"},s=void 0,i={unversionedId:"zh/sql-reference/statements/alter/index",id:"zh/sql-reference/statements/alter/index",title:"index",description:"ALTER",source:"@site/docs/zh/sql-reference/statements/alter/index.md",sourceDirName:"zh/sql-reference/statements/alter",slug:"/zh/sql-reference/statements/alter/",permalink:"/docs/zh/sql-reference/statements/alter/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/alter/index.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{slug:"/zh/sql-reference/statements/alter/",sidebar_position:35,sidebar_label:"ALTER"},sidebar:"chinese",previous:{title:"SETTINGS PROFILE",permalink:"/docs/zh/sql-reference/statements/create/settings-profile"},next:{title:"COLUMN",permalink:"/docs/zh/sql-reference/statements/alter/column"}},o={},p=[{value:"ALTER",id:"query_language_queries_alter",level:2},{value:"Mutations \u7a81\u53d8",id:"mutations",level:2},{value:"ALTER \u67e5\u8be2\u7684\u540c\u6b65\u6027",id:"synchronicity-of-alter-queries",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"query_language_queries_alter"},"ALTER"),(0,a.kt)("p",null,"\u5927\u591a\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," \u67e5\u8be2\u4fee\u6539\u8868\u8bbe\u7f6e\u6216\u6570\u636e:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/column"},"COLUMN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/partition"},"PARTITION")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/delete"},"DELETE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/update"},"UPDATE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/order-by"},"ORDER BY")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/index"},"INDEX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/constraint"},"CONSTRAINT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/ttl"},"TTL"))),(0,a.kt)("p",null,'!!! note "\u5907\u6ce8"\n\u5927\u591a\u6570 ',(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," \u67e5\u8be2\u53ea\u652f\u6301",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/"},"*","MergeTree"),"\u8868\uff0c\u4ee5\u53ca",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/merge"},"Merge"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/distributed"},"Distributed"),"\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER")," \u8bed\u53e5\u64cd\u4f5c\u89c6\u56fe:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/view"},"ALTER TABLE ... MODIFY QUERY")," \u2014 \u4fee\u6539\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create/view#materialized"},"Materialized view")," \u7ed3\u6784."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/view#alter-live-view"},"ALTER LIVE VIEW")," \u2014 \u5237\u65b0\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create/view#live-view"},"Live view"),".")),(0,a.kt)("p",null,"\u8fd9\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER")," \u8bed\u53e5\u4fee\u6539\u4e0e\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u76f8\u5173\u7684\u5b9e\u4f53:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/user"},"USER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/role"},"ROLE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/quota"},"QUOTA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/row-policy"},"ROW POLICY")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/settings-profile"},"SETTINGS PROFILE"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/alter/"},"ALTER TABLE ... MODIFY COMMENT")," \u8bed\u53e5\u6dfb\u52a0\u3001\u4fee\u6539\u6216\u5220\u9664\u8868\u4e2d\u7684\u6ce8\u91ca\uff0c\u65e0\u8bba\u4e4b\u524d\u662f\u5426\u8bbe\u7f6e\u8fc7\u3002"),(0,a.kt)("h2",{id:"mutations"},"Mutations \u7a81\u53d8"),(0,a.kt)("p",null,"\u7528\u6765\u64cd\u4f5c\u8868\u6570\u636e\u7684ALTER\u67e5\u8be2\u662f\u901a\u8fc7\u4e00\u79cd\u53eb\u505a\u201c\u7a81\u53d8\u201d\u7684\u673a\u5236\u6765\u5b9e\u73b0\u7684\uff0c\u6700\u660e\u663e\u7684\u662f",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/alter/delete"},"ALTER TABLE \u2026 DELETE"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/alter/update"},"ALTER TABLE \u2026 UPDATE"),"\u3002\u5b83\u4eec\u662f\u5f02\u6b65\u7684\u540e\u53f0\u8fdb\u7a0b\uff0c\u7c7b\u4f3c\u4e8e",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/"},"MergeTree"),"\u8868\u7684\u5408\u5e76\uff0c\u4ea7\u751f\u65b0\u7684\u201c\u7a81\u53d8\u201d\u7248\u672c\u7684\u90e8\u4ef6\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"*MergeTree")," \u8868\uff0c\u901a\u8fc7\u91cd\u5199\u6574\u4e2a\u6570\u636e\u90e8\u5206\u6765\u6267\u884c\u7a81\u53d8\u3002\u6ca1\u6709\u539f\u5b50\u6027\u2014\u2014\u4e00\u65e6\u7a81\u53d8\u7684\u90e8\u4ef6\u51c6\u5907\u597d\uff0c\u90e8\u4ef6\u5c31\u4f1a\u88ab\u66ff\u6362\uff0c\u5e76\u4e14\u5728\u7a81\u53d8\u671f\u95f4\u5f00\u59cb\u6267\u884c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u5c06\u770b\u5230\u6765\u81ea\u5df2\u7ecf\u7a81\u53d8\u7684\u90e8\u4ef6\u7684\u6570\u636e\uff0c\u4ee5\u53ca\u6765\u81ea\u5c1a\u672a\u7a81\u53d8\u7684\u90e8\u4ef6\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u7a81\u53d8\u5b8c\u5168\u6309\u7167\u5b83\u4eec\u7684\u4ea7\u751f\u987a\u5e8f\u6392\u5217\uff0c\u5e76\u6309\u6b64\u987a\u5e8f\u5e94\u7528\u4e8e\u6bcf\u4e2a\u90e8\u5206\u3002\u7a81\u53d8\u8fd8\u4e0e\u201cINSERT INTO\u201d\u67e5\u8be2\u8fdb\u884c\u90e8\u5206\u6392\u5e8f:\u5728\u63d0\u4ea4\u7a81\u53d8\u4e4b\u524d\u63d2\u5165\u8868\u4e2d\u7684\u6570\u636e\u5c06\u88ab\u7a81\u53d8\uff0c\u800c\u5728\u6b64\u4e4b\u540e\u63d2\u5165\u7684\u6570\u636e\u5c06\u4e0d\u4f1a\u88ab\u7a81\u53d8\u3002\u6ce8\u610f\uff0c\u7a81\u53d8\u4e0d\u4f1a\u4ee5\u4efb\u4f55\u65b9\u5f0f\u963b\u6b62\u63d2\u5165\u3002"),(0,a.kt)("p",null,"\u7a81\u53d8\u67e5\u8be2\u5728\u6dfb\u52a0\u7a81\u53d8\u6761\u76ee\u540e\u7acb\u5373\u8fd4\u56de(\u5bf9\u4e8e\u590d\u5236\u8868\u5230ZooKeeper\uff0c\u5bf9\u4e8e\u975e\u590d\u5236\u8868\u5230\u6587\u4ef6\u7cfb\u7edf)\u3002\u7a81\u53d8\u672c\u8eab\u4f7f\u7528\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e\u5f02\u6b65\u6267\u884c\u3002\u8981\u8ddf\u8e2a\u7a81\u53d8\u7684\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/mutations#system_tables-mutations"},(0,a.kt)("inlineCode",{parentName:"a"},"system.mutations"))," \u8868\u3002\u6210\u529f\u63d0\u4ea4\u7684\u53d8\u5f02\u5c06\u7ee7\u7eed\u6267\u884c\uff0c\u5373\u4f7fClickHouse\u670d\u52a1\u5668\u91cd\u65b0\u542f\u52a8\u3002\u6ca1\u6709\u529e\u6cd5\u56de\u6eda\u7a81\u53d8\u4e00\u65e6\u63d0\u4ea4\uff0c\u4f46\u5982\u679c\u7a81\u53d8\u5361\u4f4f\u4e86\uff0c\u5b83\u53ef\u4ee5\u53d6\u6d88\u4e0e",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/misc#kill-mutation"},(0,a.kt)("inlineCode",{parentName:"a"},"KILL MUTATION"))," \u67e5\u8be2\u3002"),(0,a.kt)("p",null,"\u5b8c\u6210\u7a81\u53d8\u7684\u6761\u76ee\u4e0d\u4f1a\u7acb\u5373\u5220\u9664(\u4fdd\u7559\u6761\u76ee\u7684\u6570\u91cf\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"finished_mutations_to_keep")," \u5b58\u50a8\u5f15\u64ce\u53c2\u6570\u51b3\u5b9a)\u3002\u5220\u9664\u65e7\u7684\u7a81\u53d8\u6761\u76ee\u3002"),(0,a.kt)("h2",{id:"synchronicity-of-alter-queries"},"ALTER \u67e5\u8be2\u7684\u540c\u6b65\u6027"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u975e\u590d\u5236\u8868\uff0c\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER")," \u67e5\u8be2\u90fd\u662f\u540c\u6b65\u6267\u884c\u7684\u3002\u5bf9\u4e8e\u590d\u5236\u8868\uff0c\u67e5\u8be2\u53ea\u662f\u5411\u201cZooKeeper\u201d\u6dfb\u52a0\u76f8\u5e94\u52a8\u4f5c\u7684\u6307\u4ee4\uff0c\u52a8\u4f5c\u672c\u8eab\u4f1a\u5c3d\u5feb\u6267\u884c\u3002\u4f46\u662f\uff0c\u67e5\u8be2\u53ef\u4ee5\u7b49\u5f85\u6240\u6709\u526f\u672c\u4e0a\u7684\u8fd9\u4e9b\u64cd\u4f5c\u5b8c\u6210\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6240\u6709\u7684\u201cALTER\u201d\u67e5\u8be2\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#alter-sync"},"alter_sync"),"\u8bbe\u7f6e\u7b49\u5f85\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7","[replication_wait_for_inactive_replica_timeout]","(/docs/zh/operations/settings/settings#replication-wait-for-inactive-replica-timeout]\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e0d\u6d3b\u52a8\u7684\u526f\u672c\u6267\u884c\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER")," \u67e5\u8be2\u7684\u7b49\u5f85\u65f6\u95f4(\u4ee5\u79d2\u4e3a\u5355\u4f4d)\u3002"),(0,a.kt)("p",null,'!!! info "\u5907\u6ce8"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5bf9\u4e8e\u6240\u6709\u7684 `ALTER` \u67e5\u8be2\uff0c\u5982\u679c  `alter_sync = 2`  \u548c\u4e00\u4e9b\u526f\u672c\u7684\u4e0d\u6fc0\u6d3b\u65f6\u95f4\u8d85\u8fc7\u65f6\u95f4(\u5728 `replication_wait_for_inactive_replica_timeout` \u8bbe\u7f6e\u4e2d\u6307\u5b9a)\uff0c\u90a3\u4e48\u5c06\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38 `UNFINISHED`\u3002\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... UPDATE|DELETE")," \u67e5\u8be2\u7531 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#mutations_sync"},"mutations_sync")," \u8bbe\u7f6e\u5b9a\u4e49\u7684\u540c\u6b65\u5ea6\u3002"))}u.isMDXComponent=!0}}]);