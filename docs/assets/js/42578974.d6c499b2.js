"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[7613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/ru/sql-reference/table-functions/s3",sidebar_position:45,sidebar_label:"s3"},s="\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0424\u0443\u043d\u043a\u0446\u0438\u044f S3",o={unversionedId:"ru/sql-reference/table-functions/s3",id:"ru/sql-reference/table-functions/s3",title:"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0424\u0443\u043d\u043a\u0446\u0438\u044f S3",description:"s3-table-function}",source:"@site/docs/ru/sql-reference/table-functions/s3.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/s3",permalink:"/docs/ru/sql-reference/table-functions/s3",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/s3.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/ru/sql-reference/table-functions/s3",sidebar_position:45,sidebar_label:"s3"},sidebar:"russia",previous:{title:"hdfs",permalink:"/docs/ru/sql-reference/table-functions/hdfs"},next:{title:"input",permalink:"/docs/ru/sql-reference/table-functions/input"}},i={},p=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"usage-examples",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3-table-function"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0424\u0443\u043d\u043a\u0446\u0438\u044f S3"),(0,r.kt)("p",null,"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430/\u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3"),". \u042d\u0442\u0430 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0445\u043e\u0436\u0430 \u043d\u0430 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/table-functions/hdfs"},"hdfs"),", \u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u043b\u044f S3 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"s3(path [,aws_access_key_id, aws_secret_access_key] [,format] [,structure] [,compression])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),' \u2014 URL-\u0430\u0434\u0440\u0435\u0441 \u0431\u0430\u043a\u0435\u0442\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u043f\u0443\u0442\u0438 \u043a \u0444\u0430\u0439\u043b\u0443. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u0447\u043d\u044b\u0435 \u0437\u043d\u0430\u043a\u0438 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 "\u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u0435\u043d\u0438\u0435": ',(0,r.kt)("inlineCode",{parentName:"li"},"*, ?, {abc,def} \u0438 {N..M}")," \u0433\u0434\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"N, M")," \u2014 \u0447\u0438\u0441\u043b\u0430, ",(0,r.kt)("inlineCode",{parentName:"li"},"'abc', 'def'")," \u2014 \u0441\u0442\u0440\u043e\u043a\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c\u043e\u0442\u0440\u0438 ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/engines/table-engines/integrations/s3#wildcards-in-path"},"\u0437\u0434\u0435\u0441\u044c"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/formats#formats"},"\u0444\u043e\u0440\u043c\u0430\u0442")," \u0444\u0430\u0439\u043b\u0430."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 c\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0424\u043e\u0440\u043c\u0430\u0442 ",(0,r.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compression")," \u2014 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u0436\u0430\u0442\u0438\u0435 \u043f\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044e \u0444\u0430\u0439\u043b\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"gzip/gz"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"brotli/br"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"xz/LZMA"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"zstd/zst"),". \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,r.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 S3 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://storage.yandexcloud.net/my-test-bucket-768/data.csv")," \u0438 \u0432\u044b\u0431\u043e\u0440 \u043f\u0435\u0440\u0432\u044b\u0445 \u0442\u0440\u0435\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0438\u0437 \u043d\u0435\u0435:"),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM s3('https://storage.yandexcloud.net/my-test-bucket-768/data.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32')\nLIMIT 2;\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u0422\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u043d\u043e \u0444\u0430\u0439\u043b \u0441\u043e \u0441\u0436\u0430\u0442\u0438\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"gzip"),":"),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM s3('https://storage.yandexcloud.net/my-test-bucket-768/data.csv.gz', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32', 'gzip')\nLIMIT 2;\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"usage-examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,r.kt)("p",null,"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 URI \u043d\u0430 S3:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'",(0,r.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_1.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_1.csv'")),(0,r.kt)("li",{parentName:"ul"},"'",(0,r.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_2.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_2.csv'")),(0,r.kt)("li",{parentName:"ul"},"'",(0,r.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_3.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_3.csv'")),(0,r.kt)("li",{parentName:"ul"},"'",(0,r.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_4.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/some_prefix/some_file_4.csv'")),(0,r.kt)("li",{parentName:"ul"},"'",(0,r.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_1.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_1.csv'")),(0,r.kt)("li",{parentName:"ul"},"'",(0,r.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_2.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_2.csv'")),(0,r.kt)("li",{parentName:"ul"},"'",(0,r.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_3.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_3.csv'")),(0,r.kt)("li",{parentName:"ul"},"'",(0,r.kt)("a",{parentName:"li",href:"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_4.csv'"},"https://storage.yandexcloud.net/my-test-bucket-768/another_prefix/some_file_4.csv'"))),(0,r.kt)("p",null,"\u041f\u043e\u0434\u0441\u0447\u0438\u0442\u0430\u0435\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0432 \u0444\u0430\u0439\u043b\u0430\u0445, \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0446\u0438\u0444\u0440\u0430\u043c\u0438 \u043e\u0442 1 \u0434\u043e 3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://storage.yandexcloud.net/my-test-bucket-768/{some,another}_prefix/some_file_{1..3}.csv', 'CSV', 'name String, value UInt32');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      18 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u041f\u043e\u0434\u0441\u0447\u0438\u0442\u0430\u0435\u043c \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0432\u043e \u0432\u0441\u0435\u0445 \u0444\u0430\u0439\u043b\u0430\u0445 \u044d\u0442\u0438\u0445 \u0434\u0432\u0443\u0445 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://storage.yandexcloud.net/my-test-bucket-768/{some,another}_prefix/*', 'CSV', 'name String, value UInt32');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      24 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("admonition",{title:'"Warning"',type:"danger"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"\u0415\u0441\u043b\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0430\u0439\u043b\u043e\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u044b \u0447\u0438\u0441\u0435\u043b \u0441 \u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438 \u043d\u0443\u043b\u044f\u043c\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e \u0441 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u043c\u0438 \u0441\u043a\u043e\u0431\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0446\u0438\u0444\u0440\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 `?`.\n")),(0,r.kt)("p",{parentName:"admonition"},"\u041f\u043e\u0434\u0441\u0447\u0438\u0442\u0430\u0435\u043c \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0432 \u0444\u0430\u0439\u043b\u0430\u0445 \u0441 \u0438\u043c\u0435\u043d\u0430\u043c\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"file-000.csv"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"file-001.csv"),", \u2026 , ",(0,r.kt)("inlineCode",{parentName:"p"},"file-999.csv"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://storage.yandexcloud.net/my-test-bucket-768/big_prefix/file-{000..999}.csv', 'CSV', 'name String, value UInt32');\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      12 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",{parentName:"admonition"},"\u0417\u0430\u043f\u0438\u0448\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0444\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},"test-data.csv.gz"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://storage.yandexcloud.net/my-test-bucket-768/test-data.csv.gz', 'CSV', 'name String, value UInt32', 'gzip')\nVALUES ('test-data', 1), ('test-data-2', 2);\n")),(0,r.kt)("p",{parentName:"admonition"},"\u0417\u0430\u043f\u0438\u0448\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0444\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},"test-data.csv.gz"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://storage.yandexcloud.net/my-test-bucket-768/test-data.csv.gz', 'CSV', 'name String, value UInt32', 'gzip')\nSELECT name, value FROM existing_table;\n")),(0,r.kt)("h2",{parentName:"admonition",id:"partitioned-write"},"\u041f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,r.kt)("p",{parentName:"admonition"},"\u0415\u0441\u043b\u0438 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 S3 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITION BY"),", \u0442\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043b\u044e\u0447\u0430 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b. \u042d\u0442\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0447\u0442\u0435\u043d\u0438\u044f."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 ID \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0432 \u0438\u043c\u0435\u043d\u0438 \u043a\u043b\u044e\u0447\u0430 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TABLE FUNCTION\n    s3('http://bucket.amazonaws.com/my_bucket/file_{_partition_id}.csv', 'CSV', 'a UInt32, b UInt32, c UInt32')\n    PARTITION BY a VALUES ('x', 2, 3), ('x', 4, 5), ('y', 11, 12), ('y', 13, 14), ('z', 21, 22), ('z', 23, 24);\n")),(0,r.kt)("p",{parentName:"admonition"},"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u0432 \u0442\u0440\u0438 \u0444\u0430\u0439\u043b\u0430: ",(0,r.kt)("inlineCode",{parentName:"p"},"file_x.csv"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"file_y.csv")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"file_z.csv"),"."),(0,r.kt)("ol",{parentName:"admonition",start:2},(0,r.kt)("li",{parentName:"ol"},"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 ID \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u0431\u0430\u043a\u0435\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0444\u0430\u0439\u043b\u044b \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0431\u0430\u043a\u0435\u0442\u0430\u0445:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TABLE FUNCTION\n    s3('http://bucket.amazonaws.com/my_bucket_{_partition_id}/file.csv', 'CSV', 'a UInt32, b UInt32, c UInt32')\n    PARTITION BY a VALUES (1, 2, 3), (1, 4, 5), (10, 11, 12), (10, 13, 14), (20, 21, 22), (20, 23, 24);\n")),(0,r.kt)("p",{parentName:"admonition"},"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0442\u0440\u0438 \u0444\u0430\u0439\u043b\u0430 \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0431\u0430\u043a\u0435\u0442\u0430\u0445: ",(0,r.kt)("inlineCode",{parentName:"p"},"my_bucket_1/file.csv"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my_bucket_10/file.csv")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"my_bucket_20/file.csv"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ru/engines/table-engines/integrations/s3"},"\u0414\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 S3")))))}u.isMDXComponent=!0}}]);