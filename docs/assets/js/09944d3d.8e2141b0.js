"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[48680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/en/sql-reference/functions/encoding-functions",sidebar_position:52,sidebar_label:"Encoding"},i="Encoding Functions",s={unversionedId:"en/sql-reference/functions/encoding-functions",id:"en/sql-reference/functions/encoding-functions",title:"Encoding Functions",description:"char",source:"@site/docs/en/sql-reference/functions/encoding-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/encoding-functions",permalink:"/docs/en/sql-reference/functions/encoding-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/encoding-functions.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{slug:"/en/sql-reference/functions/encoding-functions",sidebar_position:52,sidebar_label:"Encoding"},sidebar:"english",previous:{title:"Pseudo-Random Numbers",permalink:"/docs/en/sql-reference/functions/random-functions"},next:{title:"UUID",permalink:"/docs/en/sql-reference/functions/uuid-functions"}},p={},o=[{value:"char",id:"char",level:2},{value:"hex",id:"hex",level:2},{value:"unhex",id:"unhex",level:2},{value:"bin",id:"bin",level:2},{value:"unbin",id:"unbin",level:2},{value:"bitmaskToList(num)",id:"bitmasktolistnum",level:2},{value:"bitmaskToArray(num)",id:"bitmasktoarraynum",level:2},{value:"bitPositionsToArray(num)",id:"bitpositionstoarraynum",level:2}],u={toc:o},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"encoding-functions"},"Encoding Functions"),(0,r.kt)("h2",{id:"char"},"char"),(0,r.kt)("p",null,"Returns the string with the length as the number of passed arguments and each byte has the value of corresponding argument. Accepts multiple arguments of numeric types. If the value of argument is out of range of UInt8 data type, it is converted to UInt8 with possible rounding and overflow."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"char(number_1, [number_2, ..., number_n]);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number_1, number_2, ..., number_n")," \u2014 Numerical arguments interpreted as integers. Types: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a string of given bytes.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT char(104.1, 101, 108.9, 108.9, 111) AS hello;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hello\u2500\u2510\n\u2502 hello \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"You can construct a string of arbitrary encoding by passing the corresponding bytes. Here is example for UTF-8:"),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT char(0xD0, 0xBF, 0xD1, 0x80, 0xD0, 0xB8, 0xD0, 0xB2, 0xD0, 0xB5, 0xD1, 0x82) AS hello;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hello\u2500\u2500\u2510\n\u2502 \u043f\u0440\u0438\u0432\u0435\u0442 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT char(0xE4, 0xBD, 0xA0, 0xE5, 0xA5, 0xBD) AS hello;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hello\u2500\u2510\n\u2502 \u4f60\u597d  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"hex"},"hex"),(0,r.kt)("p",null,"Returns a string containing the argument\u2019s hexadecimal representation."),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"HEX"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"hex(arg)\n")),(0,r.kt)("p",null,"The function is using uppercase letters ",(0,r.kt)("inlineCode",{parentName:"p"},"A-F")," and not using any prefixes (like ",(0,r.kt)("inlineCode",{parentName:"p"},"0x"),") or suffixes (like ",(0,r.kt)("inlineCode",{parentName:"p"},"h"),")."),(0,r.kt)("p",null,"For integer arguments, it prints hex digits (\u201cnibbles\u201d) from the most significant to least significant (big-endian or \u201chuman-readable\u201d order). It starts with the most significant non-zero byte (leading zero bytes are omitted) but always prints both digits of every byte even if the leading digit is zero."),(0,r.kt)("p",null,"Values of type ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/date"},"Date")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime")," are formatted as corresponding integers (the number of days since Epoch for Date and the value of Unix Timestamp for DateTime)."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString"),", all bytes are simply encoded as two hexadecimal numbers. Zero bytes are not omitted."),(0,r.kt)("p",null,"Values of ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal")," types are encoded as their representation in memory. As we support little-endian architecture, they are encoded in little-endian. Zero leading/trailing bytes are not omitted."),(0,r.kt)("p",null,"Values of ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/uuid"},"UUID")," type are encoded as big-endian order string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg")," \u2014 A value to convert to hexadecimal. Types: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A string with the hexadecimal representation of the argument.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT hex(1);\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"01\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT hex(toFloat32(number)) AS hex_presentation FROM numbers(15, 2);\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hex_presentation\u2500\u2510\n\u2502 00007041         \u2502\n\u2502 00008041         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT hex(toFloat64(number)) AS hex_presentation FROM numbers(15, 2);\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hex_presentation\u2500\u2510\n\u2502 0000000000002E40 \u2502\n\u2502 0000000000003040 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT lower(hex(toUUID('61f0c404-5cb3-11e7-907b-a6006ad3dba0'))) as uuid_hex\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500uuid_hex\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 61f0c4045cb311e7907ba6006ad3dba0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"unhex"},"unhex"),(0,r.kt)("p",null,"Performs the opposite operation of ",(0,r.kt)("a",{parentName:"p",href:"#hex"},"hex"),". It interprets each pair of hexadecimal digits (in the argument) as a number and converts it to the byte represented by the number. The return value is a binary string (BLOB)."),(0,r.kt)("p",null,"If you want to convert the result to a number, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/string-functions#reverse"},"reverse")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/type-conversion-functions#type-conversion-functions"},"reinterpretAs","<","Type",">")," functions."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"unhex")," is invoked from within the ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),", binary strings display using UTF-8.")),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"UNHEX"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"unhex(arg)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg")," \u2014 A string containing any number of hexadecimal digits. Type: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString"),".")),(0,r.kt)("p",null,"Supports both uppercase and lowercase letters ",(0,r.kt)("inlineCode",{parentName:"p"},"A-F"),". The number of hexadecimal digits does not have to be even. If it is odd, the last digit is interpreted as the least significant half of the ",(0,r.kt)("inlineCode",{parentName:"p"},"00-0F")," byte. If the argument string contains anything other than hexadecimal digits, some implementation-defined result is returned (an exception isn\u2019t thrown). For a numeric argument the inverse of hex(N) is not performed by unhex()."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A binary string (BLOB).")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT unhex('303132'), UNHEX('4D7953514C');\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500unhex('303132')\u2500\u252c\u2500unhex('4D7953514C')\u2500\u2510\n\u2502 012             \u2502 MySQL               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT reinterpretAsUInt64(reverse(unhex('FFF'))) AS num;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500num\u2500\u2510\n\u2502 4095 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"bin"},"bin"),(0,r.kt)("p",null,"Returns a string containing the argument\u2019s binary representation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"bin(arg)\n")),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"BIN"),"."),(0,r.kt)("p",null,"For integer arguments, it prints bin digits from the most significant to least significant (big-endian or \u201chuman-readable\u201d order). It starts with the most significant non-zero byte (leading zero bytes are omitted) but always prints eight digits of every byte if the leading digit is zero."),(0,r.kt)("p",null,"Values of type ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/date"},"Date")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime")," are formatted as corresponding integers (the number of days since Epoch for ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," and the value of Unix Timestamp for ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime"),")."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString"),", all bytes are simply encoded as eight binary numbers. Zero bytes are not omitted."),(0,r.kt)("p",null,"Values of ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal")," types are encoded as their representation in memory. As we support little-endian architecture, they are encoded in little-endian. Zero leading/trailing bytes are not omitted."),(0,r.kt)("p",null,"Values of ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/uuid"},"UUID")," type are encoded as big-endian order string."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg")," \u2014 A value to convert to binary. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date"),", or ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A string with the binary representation of the argument.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bin(14);\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bin(14)\u2500\u2500\u2510\n\u2502 00001110 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bin(toFloat32(number)) AS bin_presentation FROM numbers(15, 2);\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bin_presentation\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 00000000000000000111000001000001 \u2502\n\u2502 00000000000000001000000001000001 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bin(toFloat64(number)) AS bin_presentation FROM numbers(15, 2);\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bin_presentation\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 0000000000000000000000000000000000000000000000000010111001000000 \u2502\n\u2502 0000000000000000000000000000000000000000000000000011000001000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bin(toUUID('61f0c404-5cb3-11e7-907b-a6006ad3dba0')) as bin_uuid\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bin_uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 01100001111100001100010000000100010111001011001100010001111001111001000001111011101001100000000001101010110100111101101110100000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"unbin"},"unbin"),(0,r.kt)("p",null,"Interprets each pair of binary digits (in the argument) as a number and converts it to the byte represented by the number. The functions performs the opposite operation to ",(0,r.kt)("a",{parentName:"p",href:"#bin"},"bin"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"unbin(arg)\n")),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"UNBIN"),"."),(0,r.kt)("p",null,"For a numeric argument ",(0,r.kt)("inlineCode",{parentName:"p"},"unbin()")," does not return the inverse of ",(0,r.kt)("inlineCode",{parentName:"p"},"bin()"),". If you want to convert the result to a number, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/string-functions#reverse"},"reverse")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/type-conversion-functions#reinterpretasuint8163264"},"reinterpretAs","<","Type",">")," functions."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"unbin")," is invoked from within the ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),", binary strings are displayed using UTF-8.")),(0,r.kt)("p",null,"Supports binary digits ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". The number of binary digits does not have to be multiples of eight. If the argument string contains anything other than binary digits, some implementation-defined result is returned (an exception isn\u2019t thrown). "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg")," \u2014 A string containing any number of binary digits. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A binary string (BLOB).")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT UNBIN('001100000011000100110010'), UNBIN('0100110101111001010100110101000101001100');\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500unbin('001100000011000100110010')\u2500\u252c\u2500unbin('0100110101111001010100110101000101001100')\u2500\u2510\n\u2502 012                               \u2502 MySQL                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT reinterpretAsUInt64(reverse(unbin('1110'))) AS num;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500num\u2500\u2510\n\u2502  14 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"bitmasktolistnum"},"bitmaskToList(num)"),(0,r.kt)("p",null,"Accepts an integer. Returns a string containing the list of powers of two that total the source number when summed. They are comma-separated without spaces in text format, in ascending order."),(0,r.kt)("h2",{id:"bitmasktoarraynum"},"bitmaskToArray(num)"),(0,r.kt)("p",null,"Accepts an integer. Returns an array of UInt64 numbers containing the list of powers of two that total the source number when summed. Numbers in the array are in ascending order."),(0,r.kt)("h2",{id:"bitpositionstoarraynum"},"bitPositionsToArray(num)"),(0,r.kt)("p",null,"Accepts an integer and converts it to an unsigned integer. Returns an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt64")," numbers containing the list of positions of bits of ",(0,r.kt)("inlineCode",{parentName:"p"},"arg")," that equal ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", in ascending order."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"bitPositionsToArray(arg)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg")," \u2014 Integer value. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int/UInt"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An array containing a list of positions of bits that equal ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),", in ascending order.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitPositionsToArray(toInt8(1)) AS bit_positions;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bit_positions\u2500\u2510\n\u2502 [0]           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitPositionsToArray(toInt8(-1)) AS bit_positions;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bit_positions\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [0,1,2,3,4,5,6,7] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);