"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[17743],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const i={slug:"/en/sql-reference/functions/arithmetic-functions",sidebar_position:34,sidebar_label:"Arithmetic"},r="Arithmetic Functions",o={unversionedId:"en/sql-reference/functions/arithmetic-functions",id:"en/sql-reference/functions/arithmetic-functions",title:"Arithmetic Functions",description:"For all arithmetic functions, the result type is calculated as the smallest number type that the result fits in, if there is such a type. The minimum is taken simultaneously based on the number of bits, whether it is signed, and whether it floats. If there are not enough bits, the highest bit type is taken.",source:"@site/docs/en/sql-reference/functions/arithmetic-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/arithmetic-functions",permalink:"/docs/en/sql-reference/functions/arithmetic-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/arithmetic-functions.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{slug:"/en/sql-reference/functions/arithmetic-functions",sidebar_position:34,sidebar_label:"Arithmetic"},sidebar:"english",previous:{title:"Functions",permalink:"/docs/en/sql-reference/functions/"},next:{title:"Arrays",permalink:"/docs/en/sql-reference/functions/array-functions"}},s={},u=[{value:"plus(a, b), a + b operator",id:"plusa-b-a--b-operator",level:2},{value:"minus(a, b), a - b operator",id:"minusa-b-a---b-operator",level:2},{value:"multiply(a, b), a * b operator",id:"multiplya-b-a--b-operator",level:2},{value:"divide(a, b), a / b operator",id:"dividea-b-a--b-operator",level:2},{value:"intDiv(a, b)",id:"intdiva-b",level:2},{value:"intDivOrZero(a, b)",id:"intdivorzeroa-b",level:2},{value:"modulo(a, b), a % b operator",id:"moduloa-b-a--b-operator",level:2},{value:"moduloOrZero(a, b)",id:"moduloorzeroa-b",level:2},{value:"positiveModulo(a, b), positive_modulo(a, b), pmod(a, b)",id:"positivemoduloa-b-positive_moduloa-b-pmoda-b",level:2},{value:"negate(a), -a operator",id:"negatea--a-operator",level:2},{value:"abs(a)",id:"absa",level:2},{value:"gcd(a, b)",id:"gcda-b",level:2},{value:"lcm(a, b)",id:"lcma-b",level:2},{value:"max2",id:"max2",level:2},{value:"min2",id:"min2",level:2},{value:"multiplyDecimal(a, b, result_scale)",id:"multiplydecimala-b-result_scale",level:2},{value:"divideDecimal(a, b, result_scale)",id:"dividedecimala-b-result_scale",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"arithmetic-functions"},"Arithmetic Functions"),(0,l.kt)("p",null,"For all arithmetic functions, the result type is calculated as the smallest number type that the result fits in, if there is such a type. The minimum is taken simultaneously based on the number of bits, whether it is signed, and whether it floats. If there are not enough bits, the highest bit type is taken."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(0), toTypeName(0 + 0), toTypeName(0 + 0 + 0), toTypeName(0 + 0 + 0 + 0)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(0)\u2500\u252c\u2500toTypeName(plus(0, 0))\u2500\u252c\u2500toTypeName(plus(plus(0, 0), 0))\u2500\u252c\u2500toTypeName(plus(plus(plus(0, 0), 0), 0))\u2500\u2510\n\u2502 UInt8         \u2502 UInt16                 \u2502 UInt32                          \u2502 UInt64                                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Arithmetic functions work for any pair of types from UInt8, UInt16, UInt32, UInt64, Int8, Int16, Int32, Int64, Float32, or Float64."),(0,l.kt)("p",null,"Overflow is produced the same way as in C++."),(0,l.kt)("h2",{id:"plusa-b-a--b-operator"},"plus(a, b), a + b operator"),(0,l.kt)("p",null,"Calculates the sum of the numbers.\nYou can also add integer numbers with a date or date and time. In the case of a date, adding an integer means adding the corresponding number of days. For a date with time, it means adding the corresponding number of seconds."),(0,l.kt)("h2",{id:"minusa-b-a---b-operator"},"minus(a, b), a - b operator"),(0,l.kt)("p",null,"Calculates the difference. The result is always signed."),(0,l.kt)("p",null,"You can also calculate integer numbers from a date or date with time. The idea is the same \u2013 see above for \u2018plus\u2019."),(0,l.kt)("h2",{id:"multiplya-b-a--b-operator"},"multiply(a, b), a ","*"," b operator"),(0,l.kt)("p",null,"Calculates the product of the numbers."),(0,l.kt)("h2",{id:"dividea-b-a--b-operator"},"divide(a, b), a / b operator"),(0,l.kt)("p",null,"Calculates the quotient of the numbers. The result type is always a floating-point type.\nIt is not integer division. For integer division, use the \u2018intDiv\u2019 function.\nWhen dividing by zero you get \u2018inf\u2019, \u2018-inf\u2019, or \u2018nan\u2019."),(0,l.kt)("h2",{id:"intdiva-b"},"intDiv(a, b)"),(0,l.kt)("p",null,"Calculates the quotient of the numbers. Divides into integers, rounding down (by the absolute value).\nAn exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,l.kt)("h2",{id:"intdivorzeroa-b"},"intDivOrZero(a, b)"),(0,l.kt)("p",null,"Differs from \u2018intDiv\u2019 in that it returns zero when dividing by zero or when dividing a minimal negative number by minus one."),(0,l.kt)("h2",{id:"moduloa-b-a--b-operator"},"modulo(a, b), a % b operator"),(0,l.kt)("p",null,"Calculates the remainder when dividing ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),".\nThe result type is an integer if both inputs are integers. If one of the inputs is a floating-point number, the result is a floating-point number.\nThe remainder is computed like in C++. Truncated division is used for negative numbers.\nAn exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,l.kt)("h2",{id:"moduloorzeroa-b"},"moduloOrZero(a, b)"),(0,l.kt)("p",null,"Differs from ",(0,l.kt)("a",{parentName:"p",href:"#modulo"},"modulo")," in that it returns zero when the divisor is zero."),(0,l.kt)("h2",{id:"positivemoduloa-b-positive_moduloa-b-pmoda-b"},"positiveModulo(a, b), positive_modulo(a, b), pmod(a, b)"),(0,l.kt)("p",null,"Calculates the remainder when dividing ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),". Similar to the function ",(0,l.kt)("inlineCode",{parentName:"p"},"modulo")," except that ",(0,l.kt)("inlineCode",{parentName:"p"},"positive_modulo")," always returns a non-negative number."),(0,l.kt)("p",null,"Notice that ",(0,l.kt)("inlineCode",{parentName:"p"},"positive_modulo")," is 4-5 times slower than ",(0,l.kt)("inlineCode",{parentName:"p"},"modulo"),". You should not use ",(0,l.kt)("inlineCode",{parentName:"p"},"positive_modulo")," unless you want to get a positive result and don't care about performance too much."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT positiveModulo(-1, 10)\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\n\u250c\u2500positiveModulo(-1, 10)\u2500\u2510\n\u2502                      9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"negatea--a-operator"},"negate(a), -a operator"),(0,l.kt)("p",null,"Calculates a number with the reverse sign. The result is always signed."),(0,l.kt)("h2",{id:"absa"},"abs(a)"),(0,l.kt)("p",null,"Calculates the absolute value of the number (a). That is, if a \\< 0, it returns -a. For unsigned types it does not do anything. For signed integer types, it returns an unsigned number."),(0,l.kt)("h2",{id:"gcda-b"},"gcd(a, b)"),(0,l.kt)("p",null,"Returns the greatest common divisor of the numbers.\nAn exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,l.kt)("h2",{id:"lcma-b"},"lcm(a, b)"),(0,l.kt)("p",null,"Returns the least common multiple of the numbers.\nAn exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,l.kt)("h2",{id:"max2"},"max2"),(0,l.kt)("p",null,"Compares two values and returns the maximum. The returned value is converted to ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"max2(value1, value2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value1")," \u2014 First value. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int/UInt")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value2")," \u2014 Second value. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int/UInt")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The maximum of two values.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT max2(-1, 2);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500max2(-1, 2)\u2500\u2510\n\u2502           2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"min2"},"min2"),(0,l.kt)("p",null,"Compares two values and returns the minimum. The returned value is converted to ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"min2(value1, value2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value1")," \u2014 First value. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int/UInt")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value2")," \u2014 Second value. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int/UInt")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The minimum of two values.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT min2(-1, 2);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500min2(-1, 2)\u2500\u2510\n\u2502          -1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"multiplydecimala-b-result_scale"},"multiplyDecimal(a, b","[, result_scale]",")"),(0,l.kt)("p",null,"Performs multiplication on two decimals. Result value will be of type ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal256"),".\nResult scale can be explicitly specified by ",(0,l.kt)("inlineCode",{parentName:"p"},"result_scale")," argument (const Integer in range ",(0,l.kt)("inlineCode",{parentName:"p"},"[0, 76]"),"). If not specified, the result scale is the max scale of given arguments."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"These functions work significantly slower than usual ",(0,l.kt)("inlineCode",{parentName:"p"},"multiply"),".\nIn case you don't really need controlled precision and/or need fast computation, consider using ",(0,l.kt)("a",{parentName:"p",href:"#multiply"},"multiply"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"multiplyDecimal(a, b[, result_scale])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a")," \u2014 First value: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"b")," \u2014 Second value: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"result_scale")," \u2014 Scale of result: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int/UInt"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The result of multiplication with given scale.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal256"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500multiplyDecimal(toDecimal256(-12, 0), toDecimal32(-2.1, 1), 1)\u2500\u2510\n\u2502                                                           25.2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Difference from regular multiplication:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDecimal64(-12.647, 3) * toDecimal32(2.1239, 4);\nSELECT toDecimal64(-12.647, 3) as a, toDecimal32(2.1239, 4) as b, multiplyDecimal(a, b);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500multiply(toDecimal64(-12.647, 3), toDecimal32(2.1239, 4))\u2500\u2510\n\u2502                                               -26.8609633 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500multiplyDecimal(toDecimal64(-12.647, 3), toDecimal32(2.1239, 4))\u2500\u2510\n\u2502                                                         -26.8609 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toDecimal64(-12.647987876, 9) AS a,\n    toDecimal64(123.967645643, 9) AS b,\n    multiplyDecimal(a, b);\n\nSELECT\n    toDecimal64(-12.647987876, 9) AS a,\n    toDecimal64(123.967645643, 9) AS b,\n    a * b;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500a\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500b\u2500\u252c\u2500multiplyDecimal(toDecimal64(-12.647987876, 9), toDecimal64(123.967645643, 9))\u2500\u2510\n\u2502 -12.647987876 \u2502 123.967645643 \u2502                                                               -1567.941279108 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nReceived exception from server (version 22.11.1):\nCode: 407. DB::Exception: Received from localhost:9000. DB::Exception: Decimal math overflow: While processing toDecimal64(-12.647987876, 9) AS a, toDecimal64(123.967645643, 9) AS b, a * b. (DECIMAL_OVERFLOW)\n")),(0,l.kt)("h2",{id:"dividedecimala-b-result_scale"},"divideDecimal(a, b","[, result_scale]",")"),(0,l.kt)("p",null,"Performs division on two decimals. Result value will be of type ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal256"),".\nResult scale can be explicitly specified by ",(0,l.kt)("inlineCode",{parentName:"p"},"result_scale")," argument (const Integer in range ",(0,l.kt)("inlineCode",{parentName:"p"},"[0, 76]"),"). If not specified, the result scale is the max scale of given arguments."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"These function work significantly slower than usual ",(0,l.kt)("inlineCode",{parentName:"p"},"divide"),".\nIn case you don't really need controlled precision and/or need fast computation, consider using ",(0,l.kt)("a",{parentName:"p",href:"#divide"},"divide"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"divideDecimal(a, b[, result_scale])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a")," \u2014 First value: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"b")," \u2014 Second value: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"result_scale")," \u2014 Scale of result: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int/UInt"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The result of division with given scale.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal256"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divideDecimal(toDecimal256(-12, 0), toDecimal32(2.1, 1), 10)\u2500\u2510\n\u2502                                                -5.7142857142 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Difference from regular division:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDecimal64(-12, 1) / toDecimal32(2.1, 1);\nSELECT toDecimal64(-12, 1) as a, toDecimal32(2.1, 1) as b, divideDecimal(a, b, 1), divideDecimal(a, b, 5);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divide(toDecimal64(-12, 1), toDecimal32(2.1, 1))\u2500\u2510\n\u2502                                             -5.7 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500\u2500\u2500a\u2500\u252c\u2500\u2500\u2500b\u2500\u252c\u2500divideDecimal(toDecimal64(-12, 1), toDecimal32(2.1, 1), 1)\u2500\u252c\u2500divideDecimal(toDecimal64(-12, 1), toDecimal32(2.1, 1), 5)\u2500\u2510\n\u2502 -12 \u2502 2.1 \u2502                                                       -5.7 \u2502                                                   -5.71428 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDecimal64(-12, 0) / toDecimal32(2.1, 1);\nSELECT toDecimal64(-12, 0) as a, toDecimal32(2.1, 1) as b, divideDecimal(a, b, 1), divideDecimal(a, b, 5);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"DB::Exception: Decimal result's scale is less than argument's one: While processing toDecimal64(-12, 0) / toDecimal32(2.1, 1). (ARGUMENT_OUT_OF_BOUND)\n\n\u250c\u2500\u2500\u2500a\u2500\u252c\u2500\u2500\u2500b\u2500\u252c\u2500divideDecimal(toDecimal64(-12, 0), toDecimal32(2.1, 1), 1)\u2500\u252c\u2500divideDecimal(toDecimal64(-12, 0), toDecimal32(2.1, 1), 5)\u2500\u2510\n\u2502 -12 \u2502 2.1 \u2502                                                       -5.7 \u2502                                                   -5.71428 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}c.isMDXComponent=!0}}]);