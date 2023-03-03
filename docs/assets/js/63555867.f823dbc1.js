"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[78156],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=u(t),s=r,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return t?a.createElement(k,i(i({ref:n},g),{},{components:t})):a.createElement(k,i({ref:n},g))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},61545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const l={slug:"/zh/sql-reference/aggregate-functions/combinators",sidebar_position:37,sidebar_label:"\u805a\u5408\u51fd\u6570\u7ec4\u5408\u5668"},i="\u805a\u5408\u51fd\u6570\u7ec4\u5408\u5668",o={unversionedId:"zh/sql-reference/aggregate-functions/combinators",id:"zh/sql-reference/aggregate-functions/combinators",title:"\u805a\u5408\u51fd\u6570\u7ec4\u5408\u5668",description:"aggregatefunctionscombinators}",source:"@site/docs/zh/sql-reference/aggregate-functions/combinators.md",sourceDirName:"zh/sql-reference/aggregate-functions",slug:"/zh/sql-reference/aggregate-functions/combinators",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/combinators",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/combinators.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/combinators",sidebar_position:37,sidebar_label:"\u805a\u5408\u51fd\u6570\u7ec4\u5408\u5668"},sidebar:"chinese",previous:{title:"rankCorr",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/rankCorr"},next:{title:"\u53c2\u6570\u805a\u5408\u51fd\u6570",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/parametric-functions"}},p={},u=[{value:"-If",id:"agg-functions-combinator-if",level:2},{value:"-Array",id:"agg-functions-combinator-array",level:2},{value:"-State",id:"agg-functions-combinator-state",level:2},{value:"-Merge",id:"aggregate_functions_combinators-merge",level:2},{value:"-MergeState",id:"aggregate_functions_combinators-mergestate",level:2},{value:"-ForEach",id:"agg-functions-combinator-foreach",level:2},{value:"-OrDefault",id:"agg-functions-combinator-ordefault",level:2},{value:"-OrNull",id:"agg-functions-combinator-ornull",level:2},{value:"-Resample",id:"agg-functions-combinator-resample",level:2}],g={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aggregate_functions_combinators"},"\u805a\u5408\u51fd\u6570\u7ec4\u5408\u5668"),(0,r.kt)("p",null,"\u805a\u5408\u51fd\u6570\u7684\u540d\u79f0\u53ef\u4ee5\u9644\u52a0\u4e00\u4e2a\u540e\u7f00\u3002 \u8fd9\u6539\u53d8\u4e86\u805a\u5408\u51fd\u6570\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002"),(0,r.kt)("h2",{id:"agg-functions-combinator-if"},"-If"),(0,r.kt)("p",null,"-If\u53ef\u4ee5\u52a0\u5230\u4efb\u4f55\u805a\u5408\u51fd\u6570\u4e4b\u540e\u3002\u52a0\u4e86-If\u4e4b\u540e\u805a\u5408\u51fd\u6570\u9700\u8981\u63a5\u53d7\u4e00\u4e2a\u989d\u5916\u7684\u53c2\u6570\uff0c\u4e00\u4e2a\u6761\u4ef6\uff08Uint8\u7c7b\u578b\uff09\uff0c\u5982\u679c\u6761\u4ef6\u6ee1\u8db3\uff0c\u90a3\u805a\u5408\u51fd\u6570\u5904\u7406\u5f53\u524d\u7684\u884c\u6570\u636e\uff0c\u5982\u679c\u4e0d\u6ee1\u8db3\uff0c\u90a3\u8fd4\u56de\u9ed8\u8ba4\u503c\uff08\u901a\u5e38\u662f0\u6216\u8005\u7a7a\u5b57\u7b26\u4e32\uff09\u3002"),(0,r.kt)("p",null,"\u4f8b\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"sumIf(column, cond)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"countIf(cond)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"avgIf(x, cond)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"quantilesTimingIf(level1, level2)(x, cond)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"argMinIf(arg, val, cond)")," \u7b49\u7b49\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u6761\u4ef6\u805a\u5408\u51fd\u6570\uff0c\u60a8\u53ef\u4ee5\u4e00\u6b21\u8ba1\u7b97\u591a\u4e2a\u6761\u4ef6\u7684\u805a\u5408\uff0c\u800c\u65e0\u9700\u4f7f\u7528\u5b50\u67e5\u8be2\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN"),"\u4f8b\u5982\uff0c\u5728Yandex.Metrica\uff0c\u6761\u4ef6\u805a\u5408\u51fd\u6570\u7528\u4e8e\u5b9e\u73b0\u6bb5\u6bd4\u8f83\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"agg-functions-combinator-array"},"-Array"),(0,r.kt)("p",null,"-Array\u540e\u7f00\u53ef\u4ee5\u9644\u52a0\u5230\u4efb\u4f55\u805a\u5408\u51fd\u6570\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u805a\u5408\u51fd\u6570\u91c7\u7528\u7684\u53c2\u6570 \u2018Array(T)\u2019 \u7c7b\u578b\uff08\u6570\u7ec4\uff09\u800c\u4e0d\u662f \u2018T\u2019 \u7c7b\u578b\u53c2\u6570\u3002 \u5982\u679c\u805a\u5408\u51fd\u6570\u63a5\u53d7\u591a\u4e2a\u53c2\u6570\uff0c\u5219\u5b83\u5fc5\u987b\u662f\u957f\u5ea6\u76f8\u7b49\u7684\u6570\u7ec4\u3002 \u5728\u5904\u7406\u6570\u7ec4\u65f6\uff0c\u805a\u5408\u51fd\u6570\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e0e\u6240\u6709\u6570\u7ec4\u5143\u7d20\u7684\u539f\u59cb\u805a\u5408\u51fd\u6570\u7c7b\u4f3c\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b1\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"sumArray(arr)")," -\u603b\u8ba1\u6240\u6709\u7684\u6240\u6709\u5143\u7d20 \u2018arr\u2019 \u9635\u5217\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5b83\u53ef\u4ee5\u66f4\u7b80\u5355\u5730\u7f16\u5199: ",(0,r.kt)("inlineCode",{parentName:"p"},"sum(arraySum(arr))"),"."),(0,r.kt)("p",null,"\u793a\u4f8b2\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"uniqArray(arr)")," \u2013 \u8ba1\u7b97\u2018arr\u2019\u4e2d\u552f\u4e00\u5143\u7d20\u7684\u4e2a\u6570\u3002\u8fd9\u53ef\u4ee5\u662f\u4e00\u4e2a\u66f4\u7b80\u5355\u7684\u65b9\u6cd5\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"uniq(arrayJoin(arr))"),"\uff0c\u4f46\u5b83\u5e76\u4e0d\u603b\u662f\u53ef\u4ee5\u6dfb\u52a0 \u2018arrayJoin\u2019 \u5230\u67e5\u8be2\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u548c-If\u7ec4\u5408\uff0c\u2018Array\u2019 \u5fc5\u987b\u5148\u6765\uff0c\u7136\u540e \u2018If\u2019. \u4f8b\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"uniqArrayIf(arr, cond)"),"\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"quantilesTimingArrayIf(level1, level2)(arr, cond)"),"\u3002\u7531\u4e8e\u8fd9\u4e2a\u987a\u5e8f\uff0c\u8be5 \u2018cond\u2019 \u53c2\u6570\u4e0d\u4f1a\u662f\u6570\u7ec4\u3002"),(0,r.kt)("h2",{id:"agg-functions-combinator-state"},"-State"),(0,r.kt)("p",null,"\u5982\u679c\u5e94\u7528\u6b64combinator\uff0c\u5219\u805a\u5408\u51fd\u6570\u4e0d\u4f1a\u8fd4\u56de\u7ed3\u679c\u503c\uff08\u4f8b\u5982\u552f\u4e00\u503c\u7684\u6570\u91cf ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")," \u51fd\u6570\uff09\uff0c\u4f46\u662f\u8fd4\u56de\u805a\u5408\u7684\u4e2d\u95f4\u72b6\u6001\uff08\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"uniq"),"\uff0c\u8fd4\u56de\u7684\u662f\u8ba1\u7b97\u552f\u4e00\u503c\u7684\u6570\u91cf\u7684\u54c8\u5e0c\u8868\uff09\u3002 \u8fd9\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregateFunction(...)")," \u53ef\u7528\u4e8e\u8fdb\u4e00\u6b65\u5904\u7406\u6216\u5b58\u50a8\u5728\u8868\u4e2d\u4ee5\u5b8c\u6210\u7a0d\u540e\u7684\u805a\u5408\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\u72b6\u6001\uff0c\u8bf7\u4f7f\u7528:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/mergetree-family/aggregatingmergetree"},"AggregatingMergeTree")," \u8868\u5f15\u64ce\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/other-functions#function-finalizeaggregation"},"finalizeAggregation")," \u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/other-functions#function-runningaccumulate"},"runningAccumulate")," \u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#aggregate_functions_combinators-merge"},"-Merge")," combinator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#aggregate_functions_combinators-mergestate"},"-MergeState")," combinator")),(0,r.kt)("h2",{id:"aggregate_functions_combinators-merge"},"-Merge"),(0,r.kt)("p",null,"\u5982\u679c\u5e94\u7528\u6b64\u7ec4\u5408\u5668\uff0c\u5219\u805a\u5408\u51fd\u6570\u5c06\u4e2d\u95f4\u805a\u5408\u72b6\u6001\u4f5c\u4e3a\u53c2\u6570\uff0c\u7ec4\u5408\u72b6\u6001\u4ee5\u5b8c\u6210\u805a\u5408\uff0c\u5e76\u8fd4\u56de\u7ed3\u679c\u503c\u3002"),(0,r.kt)("h2",{id:"aggregate_functions_combinators-mergestate"},"-MergeState"),(0,r.kt)("p",null,"\u4ee5\u4e0e-Merge \u76f8\u540c\u7684\u65b9\u5f0f\u5408\u5e76\u4e2d\u95f4\u805a\u5408\u72b6\u6001\u3002 \u4f46\u662f\uff0c\u5b83\u4e0d\u4f1a\u8fd4\u56de\u7ed3\u679c\u503c\uff0c\u800c\u662f\u8fd4\u56de\u4e2d\u95f4\u805a\u5408\u72b6\u6001\uff0c\u7c7b\u4f3c\u4e8e-State\u3002"),(0,r.kt)("h2",{id:"agg-functions-combinator-foreach"},"-ForEach"),(0,r.kt)("p",null,"\u5c06\u8868\u7684\u805a\u5408\u51fd\u6570\u8f6c\u6362\u4e3a\u805a\u5408\u76f8\u5e94\u6570\u7ec4\u9879\u5e76\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4\u7684\u6570\u7ec4\u7684\u805a\u5408\u51fd\u6570\u3002 \u4f8b\u5982, ",(0,r.kt)("inlineCode",{parentName:"p"},"sumForEach")," \u5bf9\u4e8e\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 2]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[3, 4, 5]"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"[6, 7]"),"\u8fd4\u56de\u7ed3\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"[10, 13, 5]")," \u4e4b\u540e\u5c06\u76f8\u5e94\u7684\u6570\u7ec4\u9879\u6dfb\u52a0\u5728\u4e00\u8d77\u3002"),(0,r.kt)("h2",{id:"agg-functions-combinator-ordefault"},"-OrDefault"),(0,r.kt)("p",null,"\u66f4\u6539\u805a\u5408\u51fd\u6570\u7684\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u805a\u5408\u51fd\u6570\u6ca1\u6709\u8f93\u5165\u503c\uff0c\u5219\u4f7f\u7528\u6b64\u7ec4\u5408\u5668\u5b83\u8fd4\u56de\u5176\u8fd4\u56de\u6570\u636e\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\u3002 \u9002\u7528\u4e8e\u53ef\u4ee5\u91c7\u7528\u7a7a\u8f93\u5165\u6570\u636e\u7684\u805a\u5408\u51fd\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-OrDefault")," \u53ef\u4e0e\u5176\u4ed6\u7ec4\u5408\u5668\u4e00\u8d77\u4f7f\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"<aggFunction>OrDefault(x)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u805a\u5408\u51fd\u6570\u53c2\u6570\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u8981\u805a\u5408\u7684\u5185\u5bb9\uff0c\u5219\u8fd4\u56de\u805a\u5408\u51fd\u6570\u8fd4\u56de\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("p",null,"\u7c7b\u578b\u53d6\u51b3\u4e8e\u6240\u4f7f\u7528\u7684\u805a\u5408\u51fd\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u67e5\u8be2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avg(number), avgOrDefault(number) FROM numbers(0)\n")),(0,r.kt)("p",null,"\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500avg(number)\u2500\u252c\u2500avgOrDefault(number)\u2500\u2510\n\u2502         nan \u2502                    0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u8fd8\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"-OrDefault")," \u53ef\u4e0e\u5176\u4ed6\u7ec4\u5408\u5668\u4e00\u8d77\u4f7f\u7528\u3002 \u5f53\u805a\u5408\u51fd\u6570\u4e0d\u63a5\u53d7\u7a7a\u8f93\u5165\u65f6\uff0c\u5b83\u5f88\u6709\u7528\u3002"),(0,r.kt)("p",null,"\u67e5\u8be2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avgOrDefaultIf(x, x > 10)\nFROM\n(\n    SELECT toDecimal32(1.23, 2) AS x\n)\n")),(0,r.kt)("p",null,"\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500avgOrDefaultIf(x, greater(x, 10))\u2500\u2510\n\u2502                              0.00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"agg-functions-combinator-ornull"},"-OrNull"),(0,r.kt)("p",null,"\u66f4\u6539\u805a\u5408\u51fd\u6570\u7684\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"\u6b64\u7ec4\u5408\u5668\u5c06\u805a\u5408\u51fd\u6570\u7684\u7ed3\u679c\u8f6c\u6362\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"\u53ef\u4e3a\u7a7a")," \u6570\u636e\u7c7b\u578b\u3002 \u5982\u679c\u805a\u5408\u51fd\u6570\u6ca1\u6709\u503c\u6765\u8ba1\u7b97\u5b83\u8fd4\u56de ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/syntax#null-literal"},"NULL"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-OrNull")," \u53ef\u4e0e\u5176\u4ed6\u7ec4\u5408\u5668\u4e00\u8d77\u4f7f\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"<aggFunction>OrNull(x)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Aggregate function parameters.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u805a\u5408\u51fd\u6570\u7684\u7ed3\u679c\uff0c\u8f6c\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Nullable")," \u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"\uff0c\u5982\u679c\u6ca1\u6709\u4ec0\u4e48\u805a\u5408\u3002")),(0,r.kt)("p",null,"\u7c7b\u578b: ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable(aggregate function return type)"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"-orNull")," \u5230\u805a\u5408\u51fd\u6570\u7684\u672b\u5c3e\u3002"),(0,r.kt)("p",null,"\u67e5\u8be2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sumOrNull(number), toTypeName(sumOrNull(number)) FROM numbers(10) WHERE number > 10\n")),(0,r.kt)("p",null,"\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sumOrNull(number)\u2500\u252c\u2500toTypeName(sumOrNull(number))\u2500\u2510\n\u2502              \u1d3a\u1d41\u1d38\u1d38 \u2502 Nullable(UInt64)              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u8fd8\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"-OrNull")," \u53ef\u4e0e\u5176\u4ed6\u7ec4\u5408\u5668\u4e00\u8d77\u4f7f\u7528\u3002 \u5f53\u805a\u5408\u51fd\u6570\u4e0d\u63a5\u53d7\u7a7a\u8f93\u5165\u65f6\uff0c\u5b83\u5f88\u6709\u7528\u3002"),(0,r.kt)("p",null,"\u67e5\u8be2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avgOrNullIf(x, x > 10)\nFROM\n(\n    SELECT toDecimal32(1.23, 2) AS x\n)\n")),(0,r.kt)("p",null,"\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500avgOrNullIf(x, greater(x, 10))\u2500\u2510\n\u2502                           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"agg-functions-combinator-resample"},"-Resample"),(0,r.kt)("p",null,"\u5141\u8bb8\u60a8\u5c06\u6570\u636e\u5212\u5206\u4e3a\u7ec4\uff0c\u7136\u540e\u5355\u72ec\u805a\u5408\u8fd9\u4e9b\u7ec4\u4e2d\u7684\u6570\u636e\u3002 \u901a\u8fc7\u5c06\u4e00\u5217\u4e2d\u7684\u503c\u62c6\u5206\u4e3a\u95f4\u9694\u6765\u521b\u5efa\u7ec4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"<aggFunction>Resample(start, end, step)(<aggFunction_params>, resampling_key)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"resampling_key")," \u5f00\u59cb\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stop")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"resampling_key")," \u7ed3\u675f\u8fb9\u754c\u3002 \u533a\u95f4\u5185\u90e8\u4e0d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"stop")," \u503c\uff0c\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"[start, stop)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"step")," \u2014 \u5206\u7ec4\u7684\u6b65\u957f\u3002 The ",(0,r.kt)("inlineCode",{parentName:"li"},"aggFunction")," \u5728\u6bcf\u4e2a\u5b50\u533a\u95f4\u4e0a\u72ec\u7acb\u6267\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resampling_key")," \u2014 \u53d6\u6837\u5217\uff0c\u88ab\u7528\u6765\u5206\u7ec4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aggFunction_params")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"aggFunction")," \u53c2\u6570\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aggFunction")," \u6bcf\u4e2a\u5b50\u533a\u95f4\u7684\u7ed3\u679c\uff0c\u7ed3\u679c\u4e3a\u6570\u7ec4\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u8003\u8651\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"people")," \u8868\u5177\u6709\u4ee5\u4e0b\u6570\u636e\u7684\u8868\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u252c\u2500age\u2500\u252c\u2500wage\u2500\u2510\n\u2502 John   \u2502  16 \u2502   10 \u2502\n\u2502 Alice  \u2502  30 \u2502   15 \u2502\n\u2502 Mary   \u2502  35 \u2502    8 \u2502\n\u2502 Evelyn \u2502  48 \u2502 11.5 \u2502\n\u2502 David  \u2502  62 \u2502  9.9 \u2502\n\u2502 Brian  \u2502  60 \u2502   16 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u5f97\u5230\u7684\u4eba\u7684\u540d\u5b57\uff0c\u4ed6\u4eec\u7684\u5e74\u9f84\u5728\u4e8e\u7684\u65f6\u95f4\u95f4\u9694 ",(0,r.kt)("inlineCode",{parentName:"p"},"[30,60)")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"[60,75)"),"\u3002 \u7531\u4e8e\u6211\u4eec\u4f7f\u7528\u6574\u6570\u8868\u793a\u7684\u5e74\u9f84\uff0c\u6211\u4eec\u5f97\u5230\u7684\u5e74\u9f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"[30, 59]")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"[60,74]")," \u95f4\u9694\u3002"),(0,r.kt)("p",null,"\u8981\u5728\u6570\u7ec4\u4e2d\u805a\u5408\u540d\u79f0\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/grouparray#agg_function-grouparray"},"groupArray")," \u805a\u5408\u51fd\u6570\u3002 \u8fd9\u9700\u8981\u4e00\u4e2a\u53c2\u6570\u3002 \u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u5b83\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u5217\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"groupArrayResample")," \u51fd\u6570\u5e94\u8be5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," \u6309\u5e74\u9f84\u805a\u5408\u540d\u79f0\uff0c \u8981\u5b9a\u4e49\u6240\u9700\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u6211\u4eec\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"30, 75, 30")," \u53c2\u6570\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"groupArrayResample")," \u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayResample(30, 75, 30)(name, age) FROM people\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayResample(30, 75, 30)(name, age)\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [['Alice','Mary','Evelyn'],['David','Brian']] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u8003\u8651\u7ed3\u679c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Jonh")," \u6ca1\u6709\u88ab\u9009\u4e2d\uff0c\u56e0\u4e3a\u4ed6\u592a\u5e74\u8f7b\u4e86\u3002 \u5176\u4ed6\u4eba\u6309\u7167\u6307\u5b9a\u7684\u5e74\u9f84\u95f4\u9694\u8fdb\u884c\u5206\u914d\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u8ba1\u7b97\u6307\u5b9a\u5e74\u9f84\u95f4\u9694\u5185\u7684\u603b\u4eba\u6570\u548c\u5e73\u5747\u5de5\u8d44\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    countResample(30, 75, 30)(name, age) AS amount,\n    avgResample(30, 75, 30)(wage, age) AS avg_wage\nFROM people\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500amount\u2500\u252c\u2500avg_wage\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [3,2]  \u2502 [11.5,12.949999809265137] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);