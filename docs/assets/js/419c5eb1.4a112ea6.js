"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[31922],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||i;return t?r.createElement(u,s(s({ref:n},c),{},{components:t})):r.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},12972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={slug:"/en/operations/settings/constraints-on-settings",sidebar_position:62,sidebar_label:"Constraints on Settings"},s="Constraints on Settings",o={unversionedId:"en/operations/settings/constraints-on-settings",id:"en/operations/settings/constraints-on-settings",title:"Constraints on Settings",description:"The constraints on settings can be defined in the profiles section of the user.xml configuration file and prohibit users from changing some of the settings with the SET query.",source:"@site/docs/en/operations/settings/constraints-on-settings.md",sourceDirName:"en/operations/settings",slug:"/en/operations/settings/constraints-on-settings",permalink:"/docs/en/operations/settings/constraints-on-settings",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/settings/constraints-on-settings.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/en/operations/settings/constraints-on-settings",sidebar_position:62,sidebar_label:"Constraints on Settings"},sidebar:"english",previous:{title:"Settings Profiles",permalink:"/docs/en/operations/settings/settings-profiles"},next:{title:"User Settings",permalink:"/docs/en/operations/settings/settings-users"}},l={},p=[{value:"Constraints on Merge Tree Settings",id:"constraints-on-merge-tree-settings",level:2}],c={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"constraints-on-settings"},"Constraints on Settings"),(0,a.kt)("p",null,"The constraints on settings can be defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"profiles")," section of the ",(0,a.kt)("inlineCode",{parentName:"p"},"user.xml")," configuration file and prohibit users from changing some of the settings with the ",(0,a.kt)("inlineCode",{parentName:"p"},"SET")," query.\nThe constraints are defined as the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <user_name>\n    <constraints>\n      <setting_name_1>\n        <min>lower_boundary</min>\n      </setting_name_1>\n      <setting_name_2>\n        <max>upper_boundary</max>\n      </setting_name_2>\n      <setting_name_3>\n        <min>lower_boundary</min>\n        <max>upper_boundary</max>\n      </setting_name_3>\n      <setting_name_4>\n        <readonly/>\n      </setting_name_4>\n      <setting_name_5>\n        <min>lower_boundary</min>\n        <max>upper_boundary</max>\n        <changeable_in_readonly/>\n      </setting_name_5>\n    </constraints>\n  </user_name>\n</profiles>\n")),(0,a.kt)("p",null,"If the user tries to violate the constraints an exception is thrown and the setting isn\u2019t changed.\nThere are supported few types of constraints: ",(0,a.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," (with alias ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),") and ",(0,a.kt)("inlineCode",{parentName:"p"},"changeable_in_readonly"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"max")," constraints specify upper and lower boundaries for a numeric setting and can be used in combination. The ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," constraint specifies that the user cannot change the corresponding setting at all. The ",(0,a.kt)("inlineCode",{parentName:"p"},"changeable_in_readonly")," constraint type allows user to change the setting within ",(0,a.kt)("inlineCode",{parentName:"p"},"min"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"max")," range even if ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," setting is set to 1, otherwise settings are not allow to be changed in ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly=1")," mode. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"changeable_in_readonly")," is supported only if ",(0,a.kt)("inlineCode",{parentName:"p"},"settings_constraints_replace_previous")," is enabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<access_control_improvements>\n  <settings_constraints_replace_previous>true<settings_constraints_replace_previous>\n</access_control_improvements>\n")),(0,a.kt)("p",null,"If there are multiple profiles active for a user, then constraints are merged. Merge process depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"settings_constraints_replace_previous"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"true")," (recommended): constraints for the same setting are replaced during merge, such that the last constraint is used and all previous are ignored including fields that are not set in new constraint."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"false")," (default): constraints for the same setting are merged in a way that every not set type of constraint is taken from previous profile and every set type of constraint is replaced by value from new profile.")),(0,a.kt)("p",null,"Read-only mode is enabled by ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," setting (not to confuse with ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," constraint type):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readonly=0"),": No read-only restrictions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readonly=1"),": Only read queries are allowed and settings cannot be changes unless ",(0,a.kt)("inlineCode",{parentName:"li"},"changeable_in_readonly")," is set."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readonly=2"),": Only read queries are allowed, but settings can be changed, except for ",(0,a.kt)("inlineCode",{parentName:"li"},"readonly")," setting itself.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," Let ",(0,a.kt)("inlineCode",{parentName:"p"},"users.xml")," includes lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <default>\n    <max_memory_usage>10000000000</max_memory_usage>\n    <force_index_by_date>0</force_index_by_date>\n    ...\n    <constraints>\n      <max_memory_usage>\n        <min>5000000000</min>\n        <max>20000000000</max>\n      </max_memory_usage>\n      <force_index_by_date>\n        <readonly/>\n      </force_index_by_date>\n    </constraints>\n  </default>\n</profiles>\n")),(0,a.kt)("p",null,"The following queries all throw exceptions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET max_memory_usage=20000000001;\nSET max_memory_usage=4999999999;\nSET force_index_by_date=1;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Code: 452, e.displayText() = DB::Exception: Setting max_memory_usage should not be greater than 20000000000.\nCode: 452, e.displayText() = DB::Exception: Setting max_memory_usage should not be less than 5000000000.\nCode: 452, e.displayText() = DB::Exception: Setting force_index_by_date should not be changed.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," profile has special handling: all the constraints defined for the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," profile become the default constraints, so they restrict all the users until they\u2019re overridden explicitly for these users."),(0,a.kt)("h2",{id:"constraints-on-merge-tree-settings"},"Constraints on Merge Tree Settings"),(0,a.kt)("p",null,"It is possible to set constraints for ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/merge-tree-settings"},"merge tree settings"),". These constraints are applied when table with merge tree engine is created or its storage settings are altered. Name of merge tree setting must be prepended by ",(0,a.kt)("inlineCode",{parentName:"p"},"merge_tree_")," prefix when referenced in ",(0,a.kt)("inlineCode",{parentName:"p"},"<constraints>")," section."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," Forbid to create new tables with explicitly specified ",(0,a.kt)("inlineCode",{parentName:"p"},"storage_policy")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <default>\n    <constraints>\n      <merge_tree_storage_policy>\n        <const/>\n      </merge_tree_storage_policy>\n    </constraints>\n  </default>\n</profiles>\n")))}m.isMDXComponent=!0}}]);