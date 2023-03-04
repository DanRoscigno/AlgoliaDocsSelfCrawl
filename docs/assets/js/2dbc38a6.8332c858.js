"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[8699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),p=i,b=c["".concat(d,".").concat(p)]||c[p]||u[p]||o;return n?a.createElement(b,r(r({ref:t},m),{},{components:n})):a.createElement(b,r({ref:t},m))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_label:"Setup",sidebar_position:2,slug:"/en/integrations/dbt/dbt-setup",description:"Setup of dbt and the ClickHouse plugin"},r="Installation",s={unversionedId:"en/integrations/data-ingestion/etl-tools/dbt/dbt-setup",id:"en/integrations/data-ingestion/etl-tools/dbt/dbt-setup",title:"Installation",description:"Setup of dbt and the ClickHouse plugin",source:"@site/docs/en/integrations/data-ingestion/etl-tools/dbt/dbt-setup.md",sourceDirName:"en/integrations/data-ingestion/etl-tools/dbt",slug:"/en/integrations/dbt/dbt-setup",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/dbt/dbt-setup",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/etl-tools/dbt/dbt-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Setup",sidebar_position:2,slug:"/en/integrations/dbt/dbt-setup",description:"Setup of dbt and the ClickHouse plugin"}},d={},l=[{value:"dbt",id:"dbt",level:2},{value:"ClickHouse plugin",id:"clickhouse-plugin",level:2}],m={toc:l},c="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("h2",{id:"dbt"},"dbt"),(0,i.kt)("p",null,"We assume the use of the dbt CLI for the following examples. Users may also wish to consider",(0,i.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/dbt-cloud/cloud-overview"}," dbt Cloud"),", which offers a web-based Integrated Development Environment (IDE) allowing users to edit and run projects."),(0,i.kt)("p",null,"dbt offers a number of options for CLI installation. Follow the instructions described",(0,i.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/dbt-cli/install/overview"}," here"),". At this stage install dbt-core only. We recommend the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install dbt-core\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important: The following is tested under python 3.9.")),(0,i.kt)("h2",{id:"clickhouse-plugin"},"ClickHouse plugin"),(0,i.kt)("p",null,"Install the dbt ClickHouse plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install dbt-clickhouse\n")),(0,i.kt)("h1",{id:"prepare-clickhouse"},"Prepare ClickHouse"),(0,i.kt)("p",null,"dbt excels when modeling highly relational data. For the purposes of example, we provide a small IMDB dataset with the following relational schema. This dataset originates from the",(0,i.kt)("a",{parentName:"p",href:"https://relational.fit.cvut.cz/dataset/IMDb"}," relational dataset repository"),". This is trivial relative to common schemas used with dbt but represents a manageable sample:"),(0,i.kt)("img",{src:n(97988).Z,class:"image",alt:"IMDB table schema",style:{width:"100%"}}),(0,i.kt)("p",null,"We use a subset of these tables as shown."),(0,i.kt)("p",null,"Create the following tables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE imdb;\n\nCREATE TABLE imdb.actors\n(\n    id         UInt32,\n    first_name String,\n    last_name  String,\n    gender     FixedString(1)\n) ENGINE = MergeTree ORDER BY (id, first_name, last_name, gender);\n\nCREATE TABLE imdb.directors\n(\n    id         UInt32,\n    first_name String,\n    last_name  String\n) ENGINE = MergeTree ORDER BY (id, first_name, last_name);\n\nCREATE TABLE imdb.genres\n(\n    movie_id UInt32,\n    genre    String\n) ENGINE = MergeTree ORDER BY (movie_id, genre);\n\nCREATE TABLE imdb.movie_directors\n(\n    director_id UInt32,\n    movie_id    UInt64\n) ENGINE = MergeTree ORDER BY (director_id, movie_id);\n\nCREATE TABLE imdb.movies\n(\n    id   UInt32,\n    name String,\n    year UInt32,\n    rank Float32 DEFAULT 0\n) ENGINE = MergeTree ORDER BY (id, name, year);\n\nCREATE TABLE imdb.roles\n(\n    created_at DateTime DEFAULT now(),\n    actor_id   UInt32,\n    movie_id   UInt32,\n    role       String\n) ENGINE = MergeTree ORDER BY (actor_id, movie_id);\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The column ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at")," for the table ",(0,i.kt)("inlineCode",{parentName:"p"},"roles"),", which defaults to a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"now()"),". We use this later to identify incremental updates to our models - see ",(0,i.kt)("a",{parentName:"p",href:"./dbt-incremental-model"},"Incremental Models"),".")),(0,i.kt)("p",null,"We use the ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," function to read the source data from public endpoints to insert data. Run the following commands to populate the tables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO imdb.actors\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_actors.tsv.gz',\n'TSVWithNames');\n\nINSERT INTO imdb.directors\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_directors.tsv.gz',\n'TSVWithNames');\n\nINSERT INTO imdb.genres\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_movies_genres.tsv.gz',\n'TSVWithNames');\n\nINSERT INTO imdb.movie_directors\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_movies_directors.tsv.gz',\n        'TSVWithNames');\n\nINSERT INTO imdb.movies\nSELECT *\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_movies.tsv.gz',\n'TSVWithNames');\n\nINSERT INTO imdb.roles(actor_id, movie_id, role)\nSELECT actor_id, movie_id, role\nFROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/imdb/imdb_ijs_roles.tsv.gz',\n'TSVWithNames');\n")),(0,i.kt)("p",null,"The execution of these may vary depending on your bandwidth, but each should only take a few seconds to complete. Execute the following query to compute a summary of each actor, ordered by the most movie appearances, and to confirm the data was loaded successfully:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id,\n       any(actor_name)          as name,\n       uniqExact(movie_id)    as num_movies,\n       avg(rank)                as avg_rank,\n       uniqExact(genre)         as unique_genres,\n       uniqExact(director_name) as uniq_directors,\n       max(created_at)          as updated_at\nFROM (\n         SELECT imdb.actors.id  as id,\n                concat(imdb.actors.first_name, ' ', imdb.actors.last_name)  as actor_name,\n                imdb.movies.id as movie_id,\n                imdb.movies.rank as rank,\n                genre,\n                concat(imdb.directors.first_name, ' ', imdb.directors.last_name) as director_name,\n                created_at\n         FROM imdb.actors\n                  JOIN imdb.roles ON imdb.roles.actor_id = imdb.actors.id\n                  LEFT OUTER JOIN imdb.movies ON imdb.movies.id = imdb.roles.movie_id\n                  LEFT OUTER JOIN imdb.genres ON imdb.genres.movie_id = imdb.movies.id\n                  LEFT OUTER JOIN imdb.movie_directors ON imdb.movie_directors.movie_id = imdb.movies.id\n                  LEFT OUTER JOIN imdb.directors ON imdb.directors.id = imdb.movie_directors.director_id\n         )\nGROUP BY id\nORDER BY num_movies DESC\nLIMIT 5;\n")),(0,i.kt)("p",null,"The response should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"+------+------------+----------+------------------+-------------+--------------+-------------------+\n|id    |name        |num_movies|avg_rank          |unique_genres|uniq_directors|updated_at         |\n+------+------------+----------+------------------+-------------+--------------+-------------------+\n|45332 |Mel Blanc   |832       |6.175853582979779 |18           |84            |2022-04-26 14:01:45|\n|621468|Bess Flowers|659       |5.57727638854796  |19           |293           |2022-04-26 14:01:46|\n|372839|Lee Phelps  |527       |5.032976449684617 |18           |261           |2022-04-26 14:01:46|\n|283127|Tom London  |525       |2.8721716524875673|17           |203           |2022-04-26 14:01:46|\n|356804|Bud Osborne |515       |2.0389507108727773|15           |149           |2022-04-26 14:01:46|\n+------+------------+----------+------------------+-------------+--------------+-------------------+\n")),(0,i.kt)("p",null,"In the later guides, we will convert this query into a model - materializing it in ClickHouse as a dbt view and table."))}u.isMDXComponent=!0},97988:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dbt_01-24a161b0216de65d39a8785fb345730e.png"}}]);