"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[40724],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=p(a),f=l,k=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return a?n.createElement(k,r(r({ref:t},o),{},{components:a})):n.createElement(k,r({ref:t},o))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:l,r[1]=u;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},39836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const i={slug:"/en/sql-reference/aggregate-functions/reference/quantileexact",sidebar_position:202},r="quantileExact Functions",u={unversionedId:"en/sql-reference/aggregate-functions/reference/quantileexact",id:"en/sql-reference/aggregate-functions/reference/quantileexact",title:"quantileExact Functions",description:"quantileExact",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantileexact.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantileexact",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantileexact",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/quantileexact.md",tags:[],version:"current",sidebarPosition:202,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/quantileexact",sidebar_position:202},sidebar:"english",previous:{title:"quantiles Functions",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiles"},next:{title:"quantileExactWeighted",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantileexactweighted"}},s={},p=[{value:"quantileExact",id:"quantileexact",level:2},{value:"quantileExactLow",id:"quantileexactlow",level:2},{value:"quantileExactHigh",id:"quantileexacthigh",level:2},{value:"quantileExactExclusive",id:"quantileexactexclusive",level:2},{value:"quantileExactInclusive",id:"quantileexactinclusive",level:2}],o={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quantileexact-functions"},"quantileExact Functions"),(0,l.kt)("h2",{id:"quantileexact"},"quantileExact"),(0,l.kt)("p",null,"Exactly computes the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence."),(0,l.kt)("p",null,"To get exact value, all the passed values \u200b\u200bare combined into an array, which is then partially sorted. Therefore, the function consumes ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)")," memory, where ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," is a number of values that were passed. However, for a small number of values, the function is very effective."),(0,l.kt)("p",null,"When using multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantileExact(level)(expr)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"medianExact"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,l.kt)("inlineCode",{parentName:"li"},"level")," value in the range of ",(0,l.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,l.kt)("inlineCode",{parentName:"li"},"level=0.5")," the function calculates ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"median"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date")," or ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Quantile of the specified level.")),(0,l.kt)("p",null,"Type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileExact(number) FROM numbers(10)\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileExact(number)\u2500\u2510\n\u2502                     5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"quantileexactlow"},"quantileExactLow"),(0,l.kt)("p",null,"Similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"quantileExact"),", this computes the exact ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence."),(0,l.kt)("p",null,"To get the exact value, all the passed values are combined into an array, which is then fully sorted.  The sorting ",(0,l.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/algorithm/sort"},"algorithm's")," complexity is ",(0,l.kt)("inlineCode",{parentName:"p"},"O(N\xb7log(N))"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"N = std::distance(first, last)")," comparisons."),(0,l.kt)("p",null,"The return value depends on the quantile level and the number of elements in the selection, i.e. if the level is 0.5, then the function returns the lower median value for an even number of elements and the middle median value for an odd number of elements. Median is calculated similarly to the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/statistics.html#statistics.median_low"},"median_low")," implementation which is used in python."),(0,l.kt)("p",null,"For all other levels, the element at the index corresponding to the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"level * size_of_array")," is returned. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileExactLow(0.1)(number) FROM numbers(10)\n\n\u250c\u2500quantileExactLow(0.1)(number)\u2500\u2510\n\u2502                             1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"When using multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantileExactLow(level)(expr)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"medianExactLow"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,l.kt)("inlineCode",{parentName:"li"},"level")," value in the range of ",(0,l.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,l.kt)("inlineCode",{parentName:"li"},"level=0.5")," the function calculates ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"median"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date")," or ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Quantile of the specified level.")),(0,l.kt)("p",null,"Type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileExactLow(number) FROM numbers(10)\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileExactLow(number)\u2500\u2510\n\u2502                        4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"quantileexacthigh"},"quantileExactHigh"),(0,l.kt)("p",null,"Similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"quantileExact"),", this computes the exact ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence."),(0,l.kt)("p",null,"All the passed values are combined into an array, which is then fully sorted, to get the exact value.  The sorting ",(0,l.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/algorithm/sort"},"algorithm's")," complexity is ",(0,l.kt)("inlineCode",{parentName:"p"},"O(N\xb7log(N))"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"N = std::distance(first, last)")," comparisons."),(0,l.kt)("p",null,"The return value depends on the quantile level and the number of elements in the selection, i.e. if the level is 0.5, then the function returns the higher median value for an even number of elements and the middle median value for an odd number of elements. Median is calculated similarly to the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/statistics.html#statistics.median_high"},"median_high")," implementation which is used in python. For all other levels, the element at the index corresponding to the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"level * size_of_array")," is returned."),(0,l.kt)("p",null,"This implementation behaves exactly similar to the current ",(0,l.kt)("inlineCode",{parentName:"p"},"quantileExact")," implementation."),(0,l.kt)("p",null,"When using multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantileExactHigh(level)(expr)\n")),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"medianExactHigh"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,l.kt)("inlineCode",{parentName:"li"},"level")," value in the range of ",(0,l.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,l.kt)("inlineCode",{parentName:"li"},"level=0.5")," the function calculates ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"median"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date")," or ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Quantile of the specified level.")),(0,l.kt)("p",null,"Type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileExactHigh(number) FROM numbers(10)\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileExactHigh(number)\u2500\u2510\n\u2502                         5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"quantileexactexclusive"},"quantileExactExclusive"),(0,l.kt)("p",null,"Exactly computes the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence."),(0,l.kt)("p",null,"To get exact value, all the passed values \u200b\u200bare combined into an array, which is then partially sorted. Therefore, the function consumes ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)")," memory, where ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," is a number of values that were passed. However, for a small number of values, the function is very effective."),(0,l.kt)("p",null,"This function is equivalent to ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/office/percentile-exc-function-bbaa7204-e9e1-4010-85bf-c31dc5dce4ba"},"PERCENTILE.EXC")," Excel function, (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample"},"type R6"),")."),(0,l.kt)("p",null,"When using multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"quantileExactExclusive")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiles#quantilesexactexclusive"},"quantilesExactExclusive")," function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantileExactExclusive(level)(expr)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date")," or ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional. Possible values: (0, 1) \u2014 bounds not included. Default value: 0.5. At ",(0,l.kt)("inlineCode",{parentName:"li"},"level=0.5")," the function calculates ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"median"),". ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Quantile of the specified level.")),(0,l.kt)("p",null,"Type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE num AS numbers(1000);\n\nSELECT quantileExactExclusive(0.6)(x) FROM (SELECT number AS x FROM num);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileExactExclusive(0.6)(x)\u2500\u2510\n\u2502                          599.6 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"quantileexactinclusive"},"quantileExactInclusive"),(0,l.kt)("p",null,"Exactly computes the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence."),(0,l.kt)("p",null,"To get exact value, all the passed values \u200b\u200bare combined into an array, which is then partially sorted. Therefore, the function consumes ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)")," memory, where ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," is a number of values that were passed. However, for a small number of values, the function is very effective."),(0,l.kt)("p",null,"This function is equivalent to ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/office/percentile-inc-function-680f9539-45eb-410b-9a5e-c1355e5fe2ed"},"PERCENTILE.INC")," Excel function, (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample"},"type R7"),")."),(0,l.kt)("p",null,"When using multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"quantileExactInclusive")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiles#quantilesexactinclusive"},"quantilesExactInclusive")," function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantileExactInclusive(level)(expr)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date")," or ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional. Possible values: ","[0, 1]"," \u2014 bounds included. Default value: 0.5. At ",(0,l.kt)("inlineCode",{parentName:"li"},"level=0.5")," the function calculates ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"median"),". ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Quantile of the specified level.")),(0,l.kt)("p",null,"Type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE num AS numbers(1000);\n\nSELECT quantileExactInclusive(0.6)(x) FROM (SELECT number AS x FROM num);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileExactInclusive(0.6)(x)\u2500\u2510\n\u2502                          599.4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}m.isMDXComponent=!0}}]);