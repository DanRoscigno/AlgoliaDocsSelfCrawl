"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[79468,51509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),k=l,f=p["".concat(s,".").concat(k)]||p[k]||m[k]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},40305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={slug:"/en/operations/utilities/clickhouse-format",title:"clickhouse-format"},i=void 0,o={unversionedId:"en/operations/utilities/clickhouse-format",id:"en/operations/utilities/clickhouse-format",title:"clickhouse-format",description:"Allows formatting input queries.",source:"@site/docs/en/operations/utilities/clickhouse-format.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/clickhouse-format",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-format",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/utilities/clickhouse-format.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/utilities/clickhouse-format",title:"clickhouse-format"},sidebar:"english",previous:{title:"clickhouse-compressor",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-compressor"},next:{title:"clickhouse-obfuscator",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-obfuscator"}},s={},u=[{value:"Examples",id:"examples",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Allows formatting input queries."),(0,l.kt)("p",null,"Keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help")," or",(0,l.kt)("inlineCode",{parentName:"li"},"-h")," \u2014 Produce help message."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--query")," \u2014 Format queries of any length and complexity."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--hilite")," \u2014 Add syntax highlight with ANSI terminal escape sequences."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--oneline")," \u2014 Format in single line."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--quiet")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"-q")," \u2014 Just check syntax, no output on success."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--multiquery")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"-n")," \u2014 Allow multiple queries in the same file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--obfuscate")," \u2014 Obfuscate instead of formatting."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--seed <string>")," \u2014 Seed arbitrary string that determines the result of obfuscation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--backslash")," \u2014 Add a backslash at the end of each line of the formatted query. Can be useful when you copy a query from web or somewhere else with multiple lines, and want to execute it in command line.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Formatting a query:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --query "select number from numbers(10) where number%2 order by number desc;"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT number\nFROM numbers(10)\nWHERE number % 2\nORDER BY number DESC\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Highlighting and single line:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --oneline --hilite <<< "SELECT sum(number) FROM numbers(5);"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(number) FROM numbers(5)\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Multiqueries:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format -n <<< "SELECT * FROM (SELECT 1 AS x UNION ALL SELECT 1 UNION DISTINCT SELECT 3);"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT *\nFROM\n(\n    SELECT 1 AS x\n    UNION ALL\n    SELECT 1\n    UNION DISTINCT\n    SELECT 3\n)\n;\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Obfuscating:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --seed Hello --obfuscate <<< "SELECT cost_first_screen BETWEEN a AND b, CASE WHEN x >= 123 THEN y ELSE NULL END;"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT treasury_mammoth_hazelnut BETWEEN nutmeg AND span, CASE WHEN chive >= 116 THEN switching ELSE ANYTHING END;\n")),(0,l.kt)("p",null,"Same query and another seed string:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --seed World --obfuscate <<< "SELECT cost_first_screen BETWEEN a AND b, CASE WHEN x >= 123 THEN y ELSE NULL END;"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT horse_tape_summer BETWEEN folklore AND moccasins, CASE WHEN intestine >= 116 THEN nonconformist ELSE FORESTRY END;\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Adding backslash:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-format --backslash <<< "SELECT * FROM (SELECT 1 AS x UNION ALL SELECT 1 UNION DISTINCT SELECT 3);"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT * \\\nFROM  \\\n( \\\n    SELECT 1 AS x \\\n    UNION ALL \\\n    SELECT 1 \\\n    UNION DISTINCT \\\n    SELECT 3 \\\n)\n")))}m.isMDXComponent=!0},89395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),l=(n(67294),n(3905)),a=n(40305);const i={slug:"/zh/operations/utilities/clickhouse-format",title:"clickhouse-format"},o=void 0,s={unversionedId:"zh/operations/utilities/clickhouse-format",id:"zh/operations/utilities/clickhouse-format",title:"clickhouse-format",description:"",source:"@site/docs/zh/operations/utilities/clickhouse-format.mdx",sourceDirName:"zh/operations/utilities",slug:"/zh/operations/utilities/clickhouse-format",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-format",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/utilities/clickhouse-format.mdx",tags:[],version:"current",frontMatter:{slug:"/zh/operations/utilities/clickhouse-format",title:"clickhouse-format"},sidebar:"chinese",previous:{title:"clickhouse-copier",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-copier"},next:{title:"clickhouse-obfuscator",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-obfuscator"}},u={},c=[],p={toc:c},m="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(a.default,{mdxType:"Content"}))}k.isMDXComponent=!0}}]);