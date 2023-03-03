"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[93411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>E});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,E=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(E,o(o({ref:t},p),{},{components:n})):r.createElement(E,o({ref:t},p))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/en/sql-reference/statements/select/intersect",sidebar_label:"INTERSECT"},o="INTERSECT Clause",s={unversionedId:"en/sql-reference/statements/select/intersect",id:"en/sql-reference/statements/select/intersect",title:"INTERSECT Clause",description:"The INTERSECT clause returns only those rows that result from both the first and the second queries. The queries must match the number of columns, order, and type. The result of INTERSECT can contain duplicate rows.",source:"@site/docs/en/sql-reference/statements/select/intersect.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/intersect",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/select/intersect",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/intersect.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/statements/select/intersect",sidebar_label:"INTERSECT"},sidebar:"english",previous:{title:"HAVING",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/select/having"},next:{title:"INTO OUTFILE",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/select/into-outfile"}},i={},c=[{value:"Examples",id:"examples",level:2},{value:"INTERSECT DISTINCT",id:"intersect-distinct",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intersect-clause"},"INTERSECT Clause"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," clause returns only those rows that result from both the first and the second queries. The queries must match the number of columns, order, and type. The result of ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," can contain duplicate rows."),(0,a.kt)("p",null,"Multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," statements are executed left to right if parentheses are not specified. The ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," operator has a higher priority than the ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EXCEPT")," clauses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column1 [, column2 ]\nFROM table1\n[WHERE condition]\n\nINTERSECT\n\nSELECT column1 [, column2 ]\nFROM table2\n[WHERE condition]\n\n")),(0,a.kt)("p",null,"The condition could be any expression based on your requirements."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here is a simple example that intersects the numbers 1 to 10 with the numbers 3 to 8:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number FROM numbers(1,10) INTERSECT SELECT number FROM numbers(3,6);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500number\u2500\u2510\n\u2502      3 \u2502\n\u2502      4 \u2502\n\u2502      5 \u2502\n\u2502      6 \u2502\n\u2502      7 \u2502\n\u2502      8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," is useful if you have two tables that share a common column (or columns). You can intersect the results of two queries, as long as the results contain the same columns. For example, suppose we have a few million rows of historical cryptocurrency data that contains trade prices and volume:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE crypto_prices\n(\n    trade_date Date,\n    crypto_name String,\n    volume Float32,\n    price Float32,\n    market_cap Float32,\n    change_1_day Float32\n)\nENGINE = MergeTree\nPRIMARY KEY (crypto_name, trade_date);\n\nINSERT INTO crypto_prices\n   SELECT *\n   FROM s3(\n    'https://learn-clickhouse.s3.us-east-2.amazonaws.com/crypto_prices.csv',\n    'CSVWithNames'\n);\n\nSELECT * FROM crypto_prices\nWHERE crypto_name = 'Bitcoin'\nORDER BY trade_date DESC\nLIMIT 10;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500trade_date\u2500\u252c\u2500crypto_name\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500volume\u2500\u252c\u2500\u2500\u2500\u2500price\u2500\u252c\u2500\u2500\u2500market_cap\u2500\u252c\u2500\u2500change_1_day\u2500\u2510\n\u2502 2020-11-02 \u2502 Bitcoin     \u2502 30771456000 \u2502 13550.49 \u2502 251119860000 \u2502  -0.013585099 \u2502\n\u2502 2020-11-01 \u2502 Bitcoin     \u2502 24453857000 \u2502 13737.11 \u2502 254569760000 \u2502 -0.0031840964 \u2502\n\u2502 2020-10-31 \u2502 Bitcoin     \u2502 30306464000 \u2502 13780.99 \u2502 255372070000 \u2502   0.017308505 \u2502\n\u2502 2020-10-30 \u2502 Bitcoin     \u2502 30581486000 \u2502 13546.52 \u2502 251018150000 \u2502   0.008084608 \u2502\n\u2502 2020-10-29 \u2502 Bitcoin     \u2502 56499500000 \u2502 13437.88 \u2502 248995320000 \u2502   0.012552661 \u2502\n\u2502 2020-10-28 \u2502 Bitcoin     \u2502 35867320000 \u2502 13271.29 \u2502 245899820000 \u2502   -0.02804481 \u2502\n\u2502 2020-10-27 \u2502 Bitcoin     \u2502 33749879000 \u2502 13654.22 \u2502 252985950000 \u2502    0.04427984 \u2502\n\u2502 2020-10-26 \u2502 Bitcoin     \u2502 29461459000 \u2502 13075.25 \u2502 242251000000 \u2502  0.0033826586 \u2502\n\u2502 2020-10-25 \u2502 Bitcoin     \u2502 24406921000 \u2502 13031.17 \u2502 241425220000 \u2502 -0.0058658565 \u2502\n\u2502 2020-10-24 \u2502 Bitcoin     \u2502 24542319000 \u2502 13108.06 \u2502 242839880000 \u2502   0.013650347 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Now suppose we have a table named ",(0,a.kt)("inlineCode",{parentName:"p"},"holdings")," that contains a list of cryptocurrencies that we own, along with the number of coins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE holdings\n(\n    crypto_name String,\n    quantity UInt64\n)\nENGINE = MergeTree\nPRIMARY KEY (crypto_name);\n\nINSERT INTO holdings VALUES\n   ('Bitcoin', 1000),\n   ('Bitcoin', 200),\n   ('Ethereum', 250),\n   ('Ethereum', 5000),\n   ('DOGEFI', 10);\n   ('Bitcoin Diamond', 5000);\n")),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," to answer questions like ",(0,a.kt)("strong",{parentName:"p"},'"Which coins do we own have traded at a price greater than $100?"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT crypto_name FROM holdings\nINTERSECT\nSELECT crypto_name FROM crypto_prices\nWHERE price > 100\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500crypto_name\u2500\u2510\n\u2502 Bitcoin     \u2502\n\u2502 Bitcoin     \u2502\n\u2502 Ethereum    \u2502\n\u2502 Ethereum    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"This means at some point in time, Bitcoin and Ethereum traded above $100, and DOGEFI and Bitcoin Diamond have never traded above $100 (at least using the data we have here in this example)."),(0,a.kt)("h2",{id:"intersect-distinct"},"INTERSECT DISTINCT"),(0,a.kt)("p",null,"Notice in the previous query we had multiple Bitcoin and Ethereum holdings that traded above $100. It might be nice to remove duplicate rows (since they only repeat what we already know). You can add ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"INTERSECT")," to eliminate duplicate rows from the result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT crypto_name FROM holdings\nINTERSECT DISTINCT\nSELECT crypto_name FROM crypto_prices\nWHERE price > 100;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500crypto_name\u2500\u2510\n\u2502 Bitcoin     \u2502\n\u2502 Ethereum    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/select/union#union-clause"},"UNION")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/select/except#except-clause"},"EXCEPT"))))}m.isMDXComponent=!0}}]);