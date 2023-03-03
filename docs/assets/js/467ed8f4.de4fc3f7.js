"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[20850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=o(a),c=l,N=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(N,i(i({ref:t},d),{},{components:a})):n.createElement(N,i({ref:t},d))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));const r={slug:"/zh/engines/database-engines/mysql",sidebar_position:30,sidebar_label:"MySQL"},i="MySQL",s={unversionedId:"zh/engines/database-engines/mysql",id:"zh/engines/database-engines/mysql",title:"MySQL",description:"mysql}",source:"@site/docs/zh/engines/database-engines/mysql.md",sourceDirName:"zh/engines/database-engines",slug:"/zh/engines/database-engines/mysql",permalink:"/AlgoliaDocsSelfCrawl/zh/engines/database-engines/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/database-engines/mysql.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{slug:"/zh/engines/database-engines/mysql",sidebar_position:30,sidebar_label:"MySQL"},sidebar:"chinese",previous:{title:"MaterializedPostgreSQL",permalink:"/AlgoliaDocsSelfCrawl/zh/engines/database-engines/materialized-postgresql"},next:{title:"Lazy",permalink:"/AlgoliaDocsSelfCrawl/zh/engines/database-engines/lazy"}},p={},o=[{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"creating-a-database",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b",id:"data_types-support",level:2},{value:"\u5168\u5c40\u53d8\u91cf\u652f\u6301",id:"global-variables-support",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"examples-of-use",level:2}],d={toc:o},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql"},"MySQL"),(0,l.kt)("p",null,"MySQL\u5f15\u64ce\u7528\u4e8e\u5c06\u8fdc\u7a0b\u7684MySQL\u670d\u52a1\u5668\u4e2d\u7684\u8868\u6620\u5c04\u5230ClickHouse\u4e2d\uff0c\u5e76\u5141\u8bb8\u60a8\u5bf9\u8868\u8fdb\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u67e5\u8be2\uff0c\u4ee5\u65b9\u4fbf\u60a8\u5728ClickHouse\u4e0eMySQL\u4e4b\u95f4\u8fdb\u884c\u6570\u636e\u4ea4\u6362"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u6570\u636e\u5e93\u5f15\u64ce\u4f1a\u5c06\u5bf9\u5176\u7684\u67e5\u8be2\u8f6c\u6362\u4e3aMySQL\u8bed\u6cd5\u5e76\u53d1\u9001\u5230MySQL\u670d\u52a1\u5668\u4e2d\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u6267\u884c\u8bf8\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW TABLES"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE"),"\u4e4b\u7c7b\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u4f46\u60a8\u65e0\u6cd5\u5bf9\u5176\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RENAME")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE TABLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER"))),(0,l.kt)("h2",{id:"creating-a-database"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster]\nENGINE = MySQL('host:port', ['database' | database], 'user', 'password')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 MySQL\u670d\u52a1\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"database")," \u2014 MySQL\u6570\u636e\u5e93\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user")," \u2014 MySQL\u7528\u6237\u540d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password")," \u2014 MySQL\u7528\u6237\u5bc6\u7801")),(0,l.kt)("h2",{id:"data_types-support"},"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("th",{parentName:"tr",align:null},"ClickHouse"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED INT, UNSIGNED MEDIUMINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT, MEDIUMINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"UInt64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Int64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/float"},"Float32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/float"},"Float64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/date"},"Date"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME, TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/fixedstring"},"FixedString"))))),(0,l.kt)("p",null,"\u5176\u4ed6\u7684MySQL\u6570\u636e\u7c7b\u578b\u5c06\u5168\u90e8\u90fd\u8f6c\u6362\u4e3a",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"Nullable"),"\u5df2\u7ecf\u652f\u6301"),(0,l.kt)("h2",{id:"global-variables-support"},"\u5168\u5c40\u53d8\u91cf\u652f\u6301"),(0,l.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u5730\u517c\u5bb9\uff0c\u60a8\u53ef\u4ee5\u5728SQL\u6837\u5f0f\u4e2d\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"@@identifier"),"."),(0,l.kt)("p",null,"\u652f\u6301\u8fd9\u4e9b\u53d8\u91cf\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_allowed_packet"))),(0,l.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u8fd9\u4e9b\u53d8\u91cf\u662f\u5b58\u6839\uff0c\u5e76\u4e14\u4e0d\u5bf9\u5e94\u4efb\u4f55\u5185\u5bb9\u3002'),(0,l.kt)("p",null,"\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT @@version;\n")),(0,l.kt)("h2",{id:"examples-of-use"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("p",null,"MySQL\u64cd\u4f5c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"mysql> USE test;\nDatabase changed\n\nmysql> CREATE TABLE `mysql_table` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `float` FLOAT NOT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into mysql_table (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from mysql_table;\n+------+-----+\n| int_id | value |\n+------+-----+\n|      1 |     2 |\n+------+-----+\n1 row in set (0,00 sec)\n")),(0,l.kt)("p",null,"ClickHouse\u4e2d\u7684\u6570\u636e\u5e93\uff0c\u4e0eMySQL\u670d\u52a1\u5668\u4ea4\u6362\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mysql_db ENGINE = MySQL('localhost:3306', 'test', 'my_user', 'user_password')\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 default  \u2502\n\u2502 mysql_db \u2502\n\u2502 system   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM mysql_db\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  mysql_table \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql_db.mysql_table\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500value\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO mysql_db.mysql_table VALUES (3,4)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql_db.mysql_table\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500value\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2502      3 \u2502     4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}u.isMDXComponent=!0}}]);