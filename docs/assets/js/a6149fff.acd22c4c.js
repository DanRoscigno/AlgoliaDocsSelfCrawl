"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[75139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const i={slug:"/en/operations/system-tables/merges"},o="merges",s={unversionedId:"en/operations/system-tables/merges",id:"en/operations/system-tables/merges",title:"merges",description:"Contains information about merges and part mutations currently in process for tables in the MergeTree family.",source:"@site/docs/en/operations/system-tables/merges.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/merges",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/merges",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/merges.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/merges"},sidebar:"english",previous:{title:"merge_tree_settings",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/merge_tree_settings"},next:{title:"metric_log",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/metric_log"}},l={},m=[],p={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"merges"},"merges"),(0,a.kt)("p",null,"Contains information about merges and part mutations currently in process for tables in the MergeTree family."),(0,a.kt)("p",null,"Columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"database")," (String) \u2014 The name of the database the table is in."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"table")," (String) \u2014 Table name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elapsed")," (Float64) \u2014 The time elapsed (in seconds) since the merge started."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"progress")," (Float64) \u2014 The percentage of completed work from 0 to 1."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"num_parts")," (UInt64) \u2014 The number of pieces to be merged."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"result_part_name")," (String) \u2014 The name of the part that will be formed as the result of merging."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_mutation")," (UInt8) \u2014 1 if this process is a part mutation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"total_size_bytes_compressed")," (UInt64) \u2014 The total size of the compressed data in the merged chunks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"total_size_marks")," (UInt64) \u2014 The total number of marks in the merged parts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bytes_read_uncompressed")," (UInt64) \u2014 Number of bytes read, uncompressed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rows_read")," (UInt64) \u2014 Number of rows read."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bytes_written_uncompressed")," (UInt64) \u2014 Number of bytes written, uncompressed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rows_written")," (UInt64) \u2014 Number of rows written."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"memory_usage")," (UInt64) \u2014 Memory consumption of the merge process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thread_id")," (UInt64) \u2014 Thread ID of the merge process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"merge_type")," \u2014 The type of current merge. Empty if it's an mutation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"merge_algorithm")," \u2014 The algorithm used in current merge. Empty if it's an mutation.")))}c.isMDXComponent=!0}}]);