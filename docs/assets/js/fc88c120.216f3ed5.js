"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[56553],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={slug:"/ru/operations/settings/constraints-on-settings",sidebar_position:62,sidebar_label:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"},s="\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",i={unversionedId:"ru/operations/settings/constraints-on-settings",id:"ru/operations/settings/constraints-on-settings",title:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",description:"constraints-on-settings}",source:"@site/docs/ru/operations/settings/constraints-on-settings.md",sourceDirName:"ru/operations/settings",slug:"/ru/operations/settings/constraints-on-settings",permalink:"/docs/ru/operations/settings/constraints-on-settings",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/settings/constraints-on-settings.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/ru/operations/settings/constraints-on-settings",sidebar_position:62,sidebar_label:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"},sidebar:"russia",previous:{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",permalink:"/docs/ru/operations/settings/settings-profiles"},next:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",permalink:"/docs/ru/operations/settings/settings-users"}},l={},p=[],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"constraints-on-settings"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),(0,o.kt)("p",null,"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043c\u043e\u0433\u0443\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"profiles")," \u0444\u0430\u0439\u043b\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"user.xml")," \u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0430\u044e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"SET"),".\n\u0412\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u044d\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <\u0438\u043c\u044f_\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f>\n    <constraints>\n      <\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430_1>\n        <min>\u043d\u0438\u0436\u043d\u044f\u044f_\u0433\u0440\u0430\u043d\u0438\u0446\u0430</min>\n      </\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430_1>\n      <\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430_2>\n        <max>\u0432\u0435\u0440\u0445\u043d\u044f\u044f_\u0433\u0440\u0430\u043d\u0438\u0446\u0430</max>\n      </\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430_2>\n      <\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430_3>\n        <min>\u043d\u0438\u0436\u043d\u044f\u044f_\u0433\u0440\u0430\u043d\u0438\u0446\u0430</min>\n        <max>\u0432\u0435\u0440\u0445\u043d\u044f\u044f_\u0433\u0440\u0430\u043d\u0438\u0446\u0430</max>\n      </\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430_3>\n      <\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430_4>\n        <readonly/>\n      </\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430_4>\n    </constraints>\n  </\u0438\u043c\u044f_\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f>\n</profiles>\n")),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u0439\u0442\u0438 \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u044b, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u044d\u0442\u0438\u043c\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043c\u0438, \u0442\u043e \u043a\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u043f\u0440\u0435\u0436\u043d\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.\n\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u0440\u0438 \u0442\u0438\u043f\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439: ",(0,o.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"max")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly"),". \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"min")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"max")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u043d\u0438\u0436\u043d\u044e\u044e \u0438 \u0432\u0435\u0440\u0445\u043d\u044e\u044e \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0434\u043b\u044f \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435.\n\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440:")," \u041f\u0443\u0441\u0442\u044c \u0444\u0430\u0439\u043b ",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0442\u0440\u043e\u043a\u0438:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <default>\n    <max_memory_usage>10000000000</max_memory_usage>\n    <force_index_by_date>0</force_index_by_date>\n    ...\n    <constraints>\n      <max_memory_usage>\n        <min>5000000000</min>\n        <max>20000000000</max>\n      </max_memory_usage>\n      <force_index_by_date>\n        <readonly/>\n      </force_index_by_date>\n    </constraints>\n  </default>\n</profiles>\n")),(0,o.kt)("p",null,"\u041a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a\u0438\u043d\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET max_memory_usage=20000000001;\nSET max_memory_usage=4999999999;\nSET force_index_by_date=1;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Code: 452, e.displayText() = DB::Exception: Setting max_memory_usage should not be greater than 20000000000.\nCode: 452, e.displayText() = DB::Exception: Setting max_memory_usage should not be less than 5000000000.\nCode: 452, e.displayText() = DB::Exception: Setting force_index_by_date should not be changed.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435:")," \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c: \u0432\u0441\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u043c\u0438 \u0438 \u0432\u043b\u0438\u044f\u044e\u0442 \u043d\u0430 \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a\u0440\u043e\u043c\u0435 \u0442\u0435\u0445, \u0433\u0434\u0435 \u044d\u0442\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u044f\u0432\u043d\u043e \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b."))}u.isMDXComponent=!0}}]);