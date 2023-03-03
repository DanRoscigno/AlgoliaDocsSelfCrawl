"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[37567,68093],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=l,d=c["".concat(o,".").concat(g)]||c[g]||m[g]||r;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},82410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const r={slug:"/en/sql-reference/functions/nlp-functions",sidebar_position:67,sidebar_label:"NLP",title:"[experimental] Natural Language Processing functions"},i=void 0,s={unversionedId:"en/sql-reference/functions/nlp-functions",id:"en/sql-reference/functions/nlp-functions",title:"[experimental] Natural Language Processing functions",description:"This is an experimental feature that is currently in development and is not ready for general use. It will change in unpredictable backwards-incompatible ways in future releases. Set allowexperimentalnlp_functions = 1 to enable it.",source:"@site/docs/en/sql-reference/functions/nlp-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/nlp-functions",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/nlp-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/nlp-functions.md",tags:[],version:"current",sidebarPosition:67,frontMatter:{slug:"/en/sql-reference/functions/nlp-functions",sidebar_position:67,sidebar_label:"NLP",title:"[experimental] Natural Language Processing functions"},sidebar:"english",previous:{title:"Encryption",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/encryption-functions"},next:{title:"Other",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/other-functions"}},o={},p=[{value:"stem",id:"stem",level:2},{value:"lemmatize",id:"lemmatize",level:2},{value:"synonyms",id:"synonyms",level:2},{value:"detectLanguage",id:"detectlanguage",level:2},{value:"detectLanguageMixed",id:"detectlanguagemixed",level:2},{value:"detectLanguageUnknown",id:"detectlanguageunknown",level:2},{value:"detectCharset",id:"detectcharset",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This is an experimental feature that is currently in development and is not ready for general use. It will change in unpredictable backwards-incompatible ways in future releases. Set ",(0,l.kt)("inlineCode",{parentName:"p"},"allow_experimental_nlp_functions = 1")," to enable it.")),(0,l.kt)("h2",{id:"stem"},"stem"),(0,l.kt)("p",null,"Performs stemming on a given word."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"stem('language', word)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"language")," \u2014 Language which rules will be applied. Must be in lowercase. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string#string"},"String"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"word")," \u2014 word that needs to be stemmed. Must be in lowercase. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string#string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT arrayMap(x -> stem('en', x), ['I', 'think', 'it', 'is', 'a', 'blessing', 'in', 'disguise']) as res;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['I','think','it','is','a','bless','in','disguis'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"lemmatize"},"lemmatize"),(0,l.kt)("p",null,"Performs lemmatization on a given word. Needs dictionaries to operate, which can be obtained ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/vpodpecan/lemmagen3/tree/master/src/lemmagen3/models"},"here"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"lemmatize('language', word)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"language")," \u2014 Language which rules will be applied. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string#string"},"String"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"word")," \u2014 Word that needs to be lemmatized. Must be lowercase. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string#string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT lemmatize('en', 'wolves');\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'\u250c\u2500lemmatize("wolves")\u2500\u2510\n\u2502              "wolf" \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,l.kt)("p",null,"Configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<lemmatizers>\n    <lemmatizer>\n        <lang>en</lang>\n        <path>en.bin</path>\n    </lemmatizer>\n</lemmatizers>\n")),(0,l.kt)("h2",{id:"synonyms"},"synonyms"),(0,l.kt)("p",null,"Finds synonyms to a given word. There are two types of synonym extensions: ",(0,l.kt)("inlineCode",{parentName:"p"},"plain")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"wordnet"),"."),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"plain")," extension type we need to provide a path to a simple text file, where each line corresponds to a certain synonym set. Words in this line must be separated with space or tab characters."),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"wordnet")," extension type we need to provide a path to a directory with WordNet thesaurus in it. Thesaurus must contain a WordNet sense index."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"synonyms('extension_name', word)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"extension_name")," \u2014 Name of the extension in which search will be performed. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string#string"},"String"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"word")," \u2014 Word that will be searched in extension. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string#string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT synonyms('list', 'important');\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500synonyms('list', 'important')\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['important','big','critical','crucial'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<synonyms_extensions>\n    <extension>\n        <name>en</name>\n        <type>plain</type>\n        <path>en.txt</path>\n    </extension>\n    <extension>\n        <name>en</name>\n        <type>wordnet</type>\n        <path>en/</path>\n    </extension>\n</synonyms_extensions>\n")),(0,l.kt)("h2",{id:"detectlanguage"},"detectLanguage"),(0,l.kt)("p",null,"Detects the language of the UTF8-encoded input string. The function uses the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/CLD2Owners/cld2"},"CLD2 library")," for detection, and it returns the 2-letter ISO language code."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"detectLanguage")," function works best when providing over 200 characters in the input string."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"detectLanguage('text_to_be_analyzed')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text_to_be_analyzed")," \u2014 A collection (or sentences) of strings to analyze. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string#string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The 2-letter ISO code of the detected language")),(0,l.kt)("p",null,"Other possible results:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"un")," = unknown, can not detect any language."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"other")," = the detected language does not have 2 letter code.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT detectLanguageMixed('Je pense que je ne parviendrai jamais \xe0 parler fran\xe7ais comme un natif. Where there\u2019s a will, there\u2019s a way.');\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"fr\n")),(0,l.kt)("h2",{id:"detectlanguagemixed"},"detectLanguageMixed"),(0,l.kt)("p",null,"Similar to the ",(0,l.kt)("inlineCode",{parentName:"p"},"detectLanguage")," function, but ",(0,l.kt)("inlineCode",{parentName:"p"},"detectLanguageMixed")," returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," of 2-letter language codes that are mapped to the percentage of the certain language in the text."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"detectLanguageMixed('text_to_be_analyzed')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text_to_be_analyzed")," \u2014 A collection (or sentences) of strings to analyze. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string#string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Map(String, Float32)"),": The keys are 2-letter ISO codes and the values are a perentage of text found for that language")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT detectLanguageMixed('\u4e8c\u514e\u3092\u8ffd\u3046\u8005\u306f\u4e00\u514e\u3092\u3082\u5f97\u305a\u4e8c\u514e\u3092\u8ffd\u3046\u8005\u306f\u4e00\u514e\u3092\u3082\u5f97\u305a A vaincre sans peril, on triomphe sans gloire.');\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500detectLanguageMixed()\u2500\u2510\n\u2502 {'ja':0.62,'fr':0.36  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"detectlanguageunknown"},"detectLanguageUnknown"),(0,l.kt)("p",null,"Similar to the ",(0,l.kt)("inlineCode",{parentName:"p"},"detectLanguage")," function, except the ",(0,l.kt)("inlineCode",{parentName:"p"},"detectLanguageUnknown")," function works with non-UTF8-encoded strings. Prefer this version when your character set is UTF-16 or UTF-32."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"detectLanguageUnknown('text_to_be_analyzed')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text_to_be_analyzed")," \u2014 A collection (or sentences) of strings to analyze. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string#string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The 2-letter ISO code of the detected language")),(0,l.kt)("p",null,"Other possible results:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"un")," = unknown, can not detect any language."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"other")," = the detected language does not have 2 letter code.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT detectLanguageUnknown('Ich bleibe f\xfcr ein paar Tage.');\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500detectLanguageUnknown('Ich bleibe f\xfcr ein paar Tage.')\u2500\u2510\n\u2502 de                                                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"detectcharset"},"detectCharset"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"detectCharset")," function detects the character set of the non-UTF8-encoded input string."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"detectCharset('text_to_be_analyzed')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text_to_be_analyzed")," \u2014 A collection (or sentences) of strings to analyze. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string#string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"String")," containing the code of the detected character set")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT detectCharset('Ich bleibe f\xfcr ein paar Tage.');\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500detectCharset('Ich bleibe f\xfcr ein paar Tage.')\u2500\u2510\n\u2502 WINDOWS-1252                                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0},18517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(87462),l=(t(67294),t(3905)),r=t(82410);const i={slug:"/zh/sql-reference/functions/nlp-functions",sidebar_position:67,sidebar_label:"NLP",title:"[experimental] Natural Language Processing functions"},s=void 0,o={unversionedId:"zh/sql-reference/functions/nlp-functions",id:"zh/sql-reference/functions/nlp-functions",title:"[experimental] Natural Language Processing functions",description:"",source:"@site/docs/zh/sql-reference/functions/nlp-functions.mdx",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/nlp-functions",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/nlp-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/nlp-functions.mdx",tags:[],version:"current",sidebarPosition:67,frontMatter:{slug:"/zh/sql-reference/functions/nlp-functions",sidebar_position:67,sidebar_label:"NLP",title:"[experimental] Natural Language Processing functions"},sidebar:"chinese",previous:{title:"Encryption",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/encryption-functions"},next:{title:"\u65f6\u95f4\u7a97\u53e3",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/time-window-functions"}},p={},u=[],c={toc:u},m="wrapper";function g(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(r.default,{mdxType:"Content"}))}g.isMDXComponent=!0}}]);