"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[16045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/en/sql-reference/table-functions/hdfs",sidebar_position:45,sidebar_label:"hdfs"},i="hdfs",o={unversionedId:"en/sql-reference/table-functions/hdfs",id:"en/sql-reference/table-functions/hdfs",title:"hdfs",description:"Creates a table from files in HDFS. This table function is similar to url and file ones.",source:"@site/docs/en/sql-reference/table-functions/hdfs.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/hdfs",permalink:"/docs/en/sql-reference/table-functions/hdfs",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/hdfs.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/en/sql-reference/table-functions/hdfs",sidebar_position:45,sidebar_label:"hdfs"},sidebar:"english",previous:{title:"odbc",permalink:"/docs/en/sql-reference/table-functions/odbc"},next:{title:"s3",permalink:"/docs/en/sql-reference/table-functions/s3"}},s={},u=[{value:"Virtual Columns",id:"virtual-columns",level:2}],p={toc:u},f="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hdfs"},"hdfs"),(0,a.kt)("p",null,"Creates a table from files in HDFS. This table function is similar to ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/url"},"url")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/file"},"file")," ones."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"hdfs(URI, format, structure)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Input parameters")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"URI")," \u2014 The relative URI to the file in HDFS. Path to file support following globs in readonly mode: ",(0,a.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"{abc,def}")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"{N..M}")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"M")," \u2014 numbers, ","`",(0,a.kt)("inlineCode",{parentName:"li"},"'abc', 'def'")," \u2014 strings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"format")," \u2014 The ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#formats"},"format")," of the file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 Structure of the table. Format ",(0,a.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"A table with the specified structure for reading or writing data in the specified file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Table from ",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs://hdfs1:9000/test")," and selection of the first two rows from it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hdfs('hdfs://hdfs1:9000/test', 'TSV', 'column1 UInt32, column2 UInt32, column3 UInt32')\nLIMIT 2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Globs in path")),(0,a.kt)("p",null,"Multiple path components can have globs. For being processed file should exists and matches to the whole path pattern (not only suffix or prefix)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*")," \u2014 Substitutes any number of any characters except ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," including empty string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"?")," \u2014 Substitutes any single character."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{some_string,another_string,yet_another_one}")," \u2014 Substitutes any of strings ",(0,a.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 Substitutes any number in range from N to M including both borders.")),(0,a.kt)("p",null,"Constructions with ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," are similar to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/remote"},"remote table function"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Suppose that we have several files with following URIs on HDFS:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_1\u2019"),(0,a.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_2\u2019"),(0,a.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_3\u2019"),(0,a.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_1\u2019"),(0,a.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_2\u2019"),(0,a.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_3\u2019")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Query the amount of rows in these files:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfs('hdfs://hdfs1:9000/{some,another}_dir/some_file_{1..3}', 'TSV', 'name String, value UInt32')\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Query the amount of rows in all files of these two directories:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfs('hdfs://hdfs1:9000/{some,another}_dir/*', 'TSV', 'name String, value UInt32')\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If your listing of files contains number ranges with leading zeros, use the construction with braces for each digit separately or use ",(0,a.kt)("inlineCode",{parentName:"p"},"?"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query the data from files named ",(0,a.kt)("inlineCode",{parentName:"p"},"file000"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file001"),", \u2026 , ",(0,a.kt)("inlineCode",{parentName:"p"},"file999"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hdfs('hdfs://hdfs1:9000/big_dir/file{0..9}{0..9}{0..9}', 'CSV', 'name String, value UInt32')\n")),(0,a.kt)("h2",{id:"virtual-columns"},"Virtual Columns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 Path to the file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 Name of the file.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/#table_engines-virtual_columns"},"Virtual columns"))))}c.isMDXComponent=!0}}]);