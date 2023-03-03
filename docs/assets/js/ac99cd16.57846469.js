"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[377,22429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=s,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:s,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={slug:"/en/sql-reference/table-functions/s3Cluster",sidebar_position:55,sidebar_label:"s3Cluster",title:"s3Cluster Table Function"},l=void 0,i={unversionedId:"en/sql-reference/table-functions/s3Cluster",id:"en/sql-reference/table-functions/s3Cluster",title:"s3Cluster Table Function",description:"Allows processing files from Amazon S3 in parallel from many nodes in a specified cluster. On initiator it creates a connection to all nodes in the cluster, discloses asterics in S3 file path, and dispatches each file dynamically. On the worker node it asks the initiator about the next task to process and processes it. This is repeated until all tasks are finished.",source:"@site/docs/en/sql-reference/table-functions/s3Cluster.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/s3Cluster",permalink:"/docs/en/sql-reference/table-functions/s3Cluster",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/s3Cluster.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{slug:"/en/sql-reference/table-functions/s3Cluster",sidebar_position:55,sidebar_label:"s3Cluster",title:"s3Cluster Table Function"},sidebar:"english",previous:{title:"hdfsCluster",permalink:"/docs/en/sql-reference/table-functions/hdfsCluster"},next:{title:"sqlite",permalink:"/docs/en/sql-reference/table-functions/sqlite"}},o={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Allows processing files from ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")," in parallel from many nodes in a specified cluster. On initiator it creates a connection to all nodes in the cluster, discloses asterics in S3 file path, and dispatches each file dynamically. On the worker node it asks the initiator about the next task to process and processes it. This is repeated until all tasks are finished."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"s3Cluster(cluster_name, source, [,access_key_id, secret_access_key] [,format] [,structure])\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Arguments")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cluster_name")," \u2014 Name of a cluster that is used to build a set of addresses and connection parameters to remote and local servers."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"source")," \u2014 URL to a file or a bunch of files. Supports following wildcards in readonly mode: ",(0,s.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"{'abc','def'}")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"{N..M}")," where ",(0,s.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"M")," \u2014 numbers, ",(0,s.kt)("inlineCode",{parentName:"li"},"abc"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"def")," \u2014 strings. For more information see ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/s3#wildcards-in-path"},"Wildcards In Path"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"access_key_id")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"secret_access_key")," \u2014 Keys that specify credentials to use with given endpoint. Optional."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"format")," \u2014 The ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#formats"},"format")," of the file."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 Structure of the table. Format ",(0,s.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returned value")),(0,s.kt)("p",null,"A table with the specified structure for reading or writing data in the specified file."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"Select the data from all the files in the ",(0,s.kt)("inlineCode",{parentName:"p"},"/root/data/clickhouse")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"/root/data/database/")," folders, using all the nodes in the ",(0,s.kt)("inlineCode",{parentName:"p"},"cluster_simple")," cluster:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM s3Cluster(\n    'cluster_simple', \n    'http://minio1:9001/root/data/{clickhouse,database}/*', \n    'minio', \n    'minio123', \n    'CSV', \n    'name String, value UInt32, polygon Array(Array(Tuple(Float64, Float64)))'\n) ORDER BY (name, value, polygon);\n")),(0,s.kt)("p",null,"Count the total amount of rows in all files in the cluster ",(0,s.kt)("inlineCode",{parentName:"p"},"cluster_simple"),":"),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"If your listing of files contains number ranges with leading zeros, use the construction with braces for each digit separately or use ",(0,s.kt)("inlineCode",{parentName:"p"},"?"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See Also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/s3"},"S3 engine")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/s3"},"s3 table function"))))}d.isMDXComponent=!0},93349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),s=(n(67294),n(3905)),a=n(25237);const l={slug:"/zh/sql-reference/table-functions/s3Cluster",sidebar_position:55,sidebar_label:"s3Cluster",title:"s3Cluster Table Function"},i=void 0,o={unversionedId:"zh/sql-reference/table-functions/s3Cluster",id:"zh/sql-reference/table-functions/s3Cluster",title:"s3Cluster Table Function",description:"",source:"@site/docs/zh/sql-reference/table-functions/s3Cluster.mdx",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/s3Cluster",permalink:"/docs/zh/sql-reference/table-functions/s3Cluster",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/s3Cluster.mdx",tags:[],version:"current",sidebarPosition:55,frontMatter:{slug:"/zh/sql-reference/table-functions/s3Cluster",sidebar_position:55,sidebar_label:"s3Cluster",title:"s3Cluster Table Function"},sidebar:"chinese",previous:{title:"dictionary function",permalink:"/docs/zh/sql-reference/table-functions/dictionary"},next:{title:"sqlite",permalink:"/docs/zh/sql-reference/table-functions/sqlite"}},c={},u=[],p={toc:u},d="wrapper";function f(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.default,{mdxType:"Content"}))}f.isMDXComponent=!0}}]);