"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[46884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/ru/sql-reference/table-functions/hdfs",sidebar_position:45,sidebar_label:"hdfs"},i="hdfs",o={unversionedId:"ru/sql-reference/table-functions/hdfs",id:"ru/sql-reference/table-functions/hdfs",title:"hdfs",description:"hdfs}",source:"@site/docs/ru/sql-reference/table-functions/hdfs.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/hdfs",permalink:"/docs/ru/sql-reference/table-functions/hdfs",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/hdfs.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/ru/sql-reference/table-functions/hdfs",sidebar_position:45,sidebar_label:"hdfs"},sidebar:"russia",previous:{title:"odbc",permalink:"/docs/ru/sql-reference/table-functions/odbc"},next:{title:"s3",permalink:"/docs/ru/sql-reference/table-functions/s3"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hdfs"},"hdfs"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 \u0432 HDFS. \u0414\u0430\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0445\u043e\u0436\u0430 \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/table-functions/url"},"url")," \u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/table-functions/file"},"file"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"hdfs(URI, format, structure)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u0445\u043e\u0434\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"URI")," \u2014 URI \u0444\u0430\u0439\u043b\u0430 \u0432 HDFS. \u041f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"{abc,def}")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"{N..M}"),", \u0433\u0434\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"M")," \u2014 \u0447\u0438\u0441\u043b\u0430, ","`",(0,a.kt)("inlineCode",{parentName:"li"},"'abc', 'def'")," \u2014 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"format")," \u2014 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/formats#formats"},"\u0444\u043e\u0440\u043c\u0430\u0442")," \u0444\u0430\u0439\u043b\u0430."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0424\u043e\u0440\u043c\u0430\u0442 ",(0,a.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439, \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs://hdfs1:9000/test")," \u0438 \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u043f\u0435\u0440\u0432\u044b\u0445 \u0434\u0432\u0443\u0445 \u0441\u0442\u0440\u043e\u043a \u0438\u0437 \u043d\u0435\u0451:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM hdfs('hdfs://hdfs1:9000/test', 'TSV', 'column1 UInt32, column2 UInt32, column3 UInt32')\nLIMIT 2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0432 \u043f\u0443\u0442\u0438")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*")," \u2014 \u0417\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u044e\u0431\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u043a\u0440\u043e\u043c\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"/"),", \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"?")," \u2014 \u0417\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u0438\u043d \u043b\u044e\u0431\u043e\u0439 \u0441\u0438\u043c\u0432\u043e\u043b."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{some_string,another_string,yet_another_one}")," \u2014 \u0417\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043b\u044e\u0431\u0443\u044e \u0438\u0437 \u0441\u0442\u0440\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 \u0417\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043b\u044e\u0431\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 \u043e\u0442 ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," \u0434\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"M")," \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e (\u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0432\u0435\u0434\u0443\u0449\u0438\u0435 \u043d\u0443\u043b\u0438).")),(0,a.kt)("p",null,"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/table-functions/remote"},"remote"),"."),(0,a.kt)("admonition",{title:'"Warning"',type:"danger"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"\u0415\u0441\u043b\u0438 \u0432\u0430\u0448 \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0430\u0439\u043b\u043e\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0441 \u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438 \u043d\u0443\u043b\u044f\u043c\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e \u0441 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u043c\u0438 \u0441\u043a\u043e\u0431\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0446\u0438\u0444\u0440\u044b \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 `?`.\n")),(0,a.kt)("p",{parentName:"admonition"},"\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u044f\u0445 \u043f\u0443\u0442\u0438. \u041e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0431\u0443\u0434\u0443\u0442 \u0440\u043e\u0432\u043d\u043e \u0442\u0435 \u0444\u0430\u0439\u043b\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438 \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u044e\u0442 \u0432\u0441\u0435\u043c\u0443 \u0448\u0430\u0431\u043b\u043e\u043d\u0443 \u043f\u0443\u0442\u0438, \u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435."),(0,a.kt)("h2",{parentName:"admonition",id:"virtualnye-stolbtsy"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 \u041f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 \u0418\u043c\u044f \u0444\u0430\u0439\u043b\u0430.")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/table-functions/#table_engines-virtual_columns"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b")))))}m.isMDXComponent=!0}}]);