"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[51510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={slug:"/zh/sql-reference/dictionaries/internal-dicts",machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:39,sidebar_label:"\u5185\u90e8\u5b57\u5178"},l="\u5185\u90e8\u5b57\u5178",o={unversionedId:"zh/sql-reference/dictionaries/internal-dicts",id:"zh/sql-reference/dictionaries/internal-dicts",title:"\u5185\u90e8\u5b57\u5178",description:"internal_dicts}",source:"@site/docs/zh/sql-reference/dictionaries/internal-dicts.md",sourceDirName:"zh/sql-reference/dictionaries",slug:"/zh/sql-reference/dictionaries/internal-dicts",permalink:"/docs/zh/sql-reference/dictionaries/internal-dicts",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/dictionaries/internal-dicts.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/zh/sql-reference/dictionaries/internal-dicts",machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:39,sidebar_label:"\u5185\u90e8\u5b57\u5178"},sidebar:"chinese",previous:{title:"\u5b57\u5178",permalink:"/docs/zh/sql-reference/dictionaries/"},next:{title:"\u6982\u8ff0",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts"}},c={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"internal_dicts"},"\u5185\u90e8\u5b57\u5178"),(0,i.kt)("p",null,"ClickHouse\u5305\u542b\u7528\u4e8e\u5904\u7406\u5730\u7406\u6570\u636e\u5e93\u7684\u5185\u7f6e\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u8fd9\u4f7f\u60a8\u53ef\u4ee5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u533a\u57df\u7684ID\u4ee5\u6240\u9700\u8bed\u8a00\u83b7\u53d6\u5176\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u533a\u57dfID\u83b7\u53d6\u57ce\u5e02\u3001\u5730\u533a\u3001\u8054\u90a6\u533a\u3001\u56fd\u5bb6\u6216\u5927\u9646\u7684ID\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u4e00\u4e2a\u533a\u57df\u662f\u5426\u5c5e\u4e8e\u53e6\u4e00\u4e2a\u533a\u57df\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u7236\u533a\u57df\u94fe\u3002")),(0,i.kt)("p",null,"\u6240\u6709\u529f\u80fd\u652f\u6301 \u201ctranslocality,\u201d \u80fd\u591f\u540c\u65f6\u4f7f\u7528\u4e0d\u540c\u7684\u89d2\u5ea6\u5bf9\u533a\u57df\u6240\u6709\u6743\u3002 \u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u90e8\u5206 \u201cFunctions for working with Yandex.Metrica dictionaries\u201d."),(0,i.kt)("p",null,"\u5728\u9ed8\u8ba4\u5305\u4e2d\u7981\u7528\u5185\u90e8\u5b57\u5178\u3002\n\u8981\u542f\u7528\u5b83\u4eec\uff0c\u8bf7\u53d6\u6d88\u6ce8\u91ca\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"path_to_regions_hierarchy_file")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"path_to_regions_names_files")," \u5728\u670d\u52a1\u5668\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002"),(0,i.kt)("p",null,"Geobase\u4ece\u6587\u672c\u6587\u4ef6\u52a0\u8f7d\u3002"),(0,i.kt)("p",null,"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"regions_hierarchy*.txt")," \u6587\u4ef6\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"path_to_regions_hierarchy_file")," \u76ee\u5f55\u3002 \u6b64\u914d\u7f6e\u53c2\u6570\u5fc5\u987b\u5305\u542b\u6307\u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"regions_hierarchy.txt")," \u6587\u4ef6\uff08\u9ed8\u8ba4\u533a\u57df\u5c42\u6b21\u7ed3\u6784\uff09\u548c\u5176\u4ed6\u6587\u4ef6 (",(0,i.kt)("inlineCode",{parentName:"p"},"regions_hierarchy_ua.txt"),"\uff09\u5fc5\u987b\u4f4d\u4e8e\u540c\u4e00\u76ee\u5f55\u4e2d\u3002"),(0,i.kt)("p",null,"\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"regions_names_*.txt")," \u5728\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"path_to_regions_names_files")," \u76ee\u5f55\u3002"),(0,i.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u81ea\u5df1\u521b\u5efa\u8fd9\u4e9b\u6587\u4ef6\u3002 \u6587\u4ef6\u683c\u5f0f\u5982\u4e0b:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"regions_hierarchy*.txt"),"\uff1aTabSeparated\uff08\u65e0\u6807\u9898\uff09\uff0c\u5217:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5730\u533aID (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt32"),")"),(0,i.kt)("li",{parentName:"ul"},"\u7236\u533a\u57dfID (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt32"),")"),(0,i.kt)("li",{parentName:"ul"},"\u533a\u57df\u7c7b\u578b (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt8"),"\uff09\uff1a1-\u5927\u9646\uff0c3-\u56fd\u5bb6\uff0c4-\u8054\u90a6\u533a\uff0c5-\u5730\u533a\uff0c6-\u57ce\u5e02;\u5176\u4ed6\u7c7b\u578b\u6ca1\u6709\u4ef7\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u4eba\u53e3 (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt32"),") \u2014 optional column")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"regions_names_*.txt"),"\uff1aTabSeparated\uff08\u65e0\u6807\u9898\uff09\uff0c\u5217:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5730\u533aID (",(0,i.kt)("inlineCode",{parentName:"li"},"UInt32"),")"),(0,i.kt)("li",{parentName:"ul"},"\u5730\u533a\u540d\u79f0 (",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") \u2014 Can't contain tabs or line feeds, even escaped ones.")),(0,i.kt)("p",null,"\u5e73\u9762\u9635\u5217\u7528\u4e8e\u5b58\u50a8\u5728RAM\u4e2d\u3002 \u51fa\u4e8e\u8fd9\u4e2a\u539f\u56e0\uff0cId\u4e0d\u5e94\u8be5\u8d85\u8fc7\u4e00\u767e\u4e07\u3002"),(0,i.kt)("p",null,"\u5b57\u5178\u53ef\u4ee5\u5728\u4e0d\u91cd\u65b0\u542f\u52a8\u670d\u52a1\u5668\u7684\u60c5\u51b5\u4e0b\u66f4\u65b0\u3002 \u4f46\u662f\uff0c\u4e0d\u4f1a\u66f4\u65b0\u53ef\u7528\u5b57\u5178\u96c6\u3002\n\u5bf9\u4e8e\u66f4\u65b0\uff0c\u5c06\u68c0\u67e5\u6587\u4ef6\u4fee\u6539\u65f6\u95f4\u3002 \u5982\u679c\u6587\u4ef6\u5df2\u66f4\u6539\uff0c\u5219\u66f4\u65b0\u5b57\u5178\u3002\n\u68c0\u67e5\u66f4\u6539\u7684\u65f6\u95f4\u95f4\u9694\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"builtin_dictionaries_reload_interval")," \u53c2\u6570\u3002\n\u5b57\u5178\u66f4\u65b0\uff08\u9996\u6b21\u4f7f\u7528\u65f6\u52a0\u8f7d\u9664\u5916\uff09\u4e0d\u4f1a\u963b\u6b62\u67e5\u8be2\u3002 \u5728\u66f4\u65b0\u671f\u95f4\uff0c\u67e5\u8be2\u4f7f\u7528\u65e7\u7248\u672c\u7684\u5b57\u5178\u3002 \u5982\u679c\u5728\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u53d1\u751f\u9519\u8bef\uff0c\u5219\u5c06\u9519\u8bef\u5199\u5165\u670d\u52a1\u5668\u65e5\u5fd7\uff0c\u5e76\u4f7f\u7528\u65e7\u7248\u672c\u7684\u5b57\u5178\u7ee7\u7eed\u67e5\u8be2\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5b9a\u671f\u4f7f\u7528geobase\u66f4\u65b0\u5b57\u5178\u3002 \u5728\u66f4\u65b0\u671f\u95f4\uff0c\u751f\u6210\u65b0\u6587\u4ef6\u5e76\u5c06\u5176\u5199\u5165\u5355\u72ec\u7684\u4f4d\u7f6e\u3002 \u4e00\u5207\u51c6\u5907\u5c31\u7eea\u540e\uff0c\u5c06\u5176\u91cd\u547d\u540d\u4e3a\u670d\u52a1\u5668\u4f7f\u7528\u7684\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u8fd8\u6709\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u6807\u8bc6\u7b26\u548cYandex\u7684\u5de5\u4f5c\u529f\u80fd\u3002Metrica\u641c\u7d22\u5f15\u64ce\uff0c\u4f46\u4ed6\u4eec\u4e0d\u5e94\u8be5\u88ab\u4f7f\u7528\u3002"))}u.isMDXComponent=!0}}]);