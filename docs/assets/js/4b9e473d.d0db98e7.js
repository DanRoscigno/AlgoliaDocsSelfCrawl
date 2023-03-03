"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[80790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,b=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(b,o(o({ref:t},m),{},{components:n})):a.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"Incremental Materializations",sidebar_position:6,slug:"/en/integrations/dbt/dbt-incremental-model",description:"Table materializations with dbt and ClickHouse"},o="Creating an Incremental Materialization",s={unversionedId:"en/integrations/data-ingestion/etl-tools/dbt/dbt-incremental-model",id:"en/integrations/data-ingestion/etl-tools/dbt/dbt-incremental-model",title:"Creating an Incremental Materialization",description:"Table materializations with dbt and ClickHouse",source:"@site/docs/en/integrations/data-ingestion/etl-tools/dbt/dbt-incremental-model.md",sourceDirName:"en/integrations/data-ingestion/etl-tools/dbt",slug:"/en/integrations/dbt/dbt-incremental-model",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/dbt/dbt-incremental-model",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/etl-tools/dbt/dbt-incremental-model.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Incremental Materializations",sidebar_position:6,slug:"/en/integrations/dbt/dbt-incremental-model",description:"Table materializations with dbt and ClickHouse"},sidebar:"english",previous:{title:"Table Materializations",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/dbt/dbt-table-model"},next:{title:"Snapshots",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/dbt/dbt-snapshot"}},l={},d=[{value:"Internals",id:"internals",level:2},{value:"Append Strategy (inserts-only mode)",id:"append-strategy-inserts-only-mode",level:2},{value:"Delete+Insert mode (Experimental)",id:"deleteinsert-mode-experimental",level:2}],m={toc:d},c="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-an-incremental-materialization"},"Creating an Incremental Materialization"),(0,r.kt)("p",null,"The previous example created a table to materialize the model. This table will be reconstructed for each dbt execution. This may be infeasible and extremely costly for larger result sets or complex transformations. To address this challenge and reduce the build time, dbt offers Incremental materializations. This allows dbt to insert or update records into a table since the last execution, making it appropriate for event-style data. Under the hood a temporary table is created with all the updated records and then all the untouched records as well as the updated records are inserted into a new target table. This results in similar ",(0,r.kt)("a",{parentName:"p",href:"./dbt-limitations"},"limitations")," for large result sets as for the table model."),(0,r.kt)("p",null,"To overcome these limitations for large sets, the plugin supports \u2018inserts_only\u2018 mode, where all the updates are inserted into the target table without creating a temporary table (more about it below)."),(0,r.kt)("p",null,'To illustrate this example, we will add the actor "Clicky McClickHouse", who will appear in an incredible 910 movies - ensuring he has appeared in more films than even ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mel_Blanc"},"Mel Blanc"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First, we modify our model to be of type incremental. This addition requires:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"unique_key")," - To ensure the plugin can uniquely identify rows, we must provide a unique_key - in this case, the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," field from our query will suffice. This ensures we will have no row duplicates in our materialized table. For more details on uniqueness constraints, see",(0,r.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/configuring-incremental-models#defining-a-uniqueness-constraint-optional"}," here"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Incremental filter")," - We also need to tell dbt how it should identify which rows have changed on an incremental run. This is achieved by providing a delta expression. Typically this involves a timestamp for event data; hence our updated_at timestamp field. This column, which defaults to the value of now() when rows are inserted, allows new roles to be identified. Additionally, we need to identify the alternative case where new actors are added. Using the {{this}} variable, to denote the existing materialized table, this gives us the expression ",(0,r.kt)("inlineCode",{parentName:"li"},"where id > (select max(id) from {{ this }}) or updated_at > (select max(updated_at) from {{this}})"),". We embed this inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"{% if is_incremental() %}")," condition, ensuring it is only used on incremental runs and not when the table is first constructed. For more details on filtering rows for incremental models, see ",(0,r.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/configuring-incremental-models#filtering-rows-on-an-incremental-run"},"this discussion in the dbt docs"),".")),(0,r.kt)("p",{parentName:"li"},"Update the file ",(0,r.kt)("inlineCode",{parentName:"p"},"actor_summary.sql")," as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{{ config(order_by='(updated_at, id, name)', engine='MergeTree()', materialized='incremental', unique_key='id') }}\nwith actor_summary as (\n    SELECT id,\n        any(actor_name) as name,\n        uniqExact(movie_id)    as num_movies,\n        avg(rank)                as avg_rank,\n        uniqExact(genre)         as genres,\n        uniqExact(director_name) as directors,\n        max(created_at) as updated_at\n    FROM (\n        SELECT {{ source('imdb', 'actors') }}.id as id,\n            concat({{ source('imdb', 'actors') }}.first_name, ' ', {{ source('imdb', 'actors') }}.last_name) as actor_name,\n            {{ source('imdb', 'movies') }}.id as movie_id,\n            {{ source('imdb', 'movies') }}.rank as rank,\n            genre,\n            concat({{ source('imdb', 'directors') }}.first_name, ' ', {{ source('imdb', 'directors') }}.last_name) as director_name,\n            created_at\n    FROM {{ source('imdb', 'actors') }}\n        JOIN {{ source('imdb', 'roles') }} ON {{ source('imdb', 'roles') }}.actor_id = {{ source('imdb', 'actors') }}.id\n        LEFT OUTER JOIN {{ source('imdb', 'movies') }} ON {{ source('imdb', 'movies') }}.id = {{ source('imdb', 'roles') }}.movie_id\n        LEFT OUTER JOIN {{ source('imdb', 'genres') }} ON {{ source('imdb', 'genres') }}.movie_id = {{ source('imdb', 'movies') }}.id\n        LEFT OUTER JOIN {{ source('imdb', 'movie_directors') }} ON {{ source('imdb', 'movie_directors') }}.movie_id = {{ source('imdb', 'movies') }}.id\n        LEFT OUTER JOIN {{ source('imdb', 'directors') }} ON {{ source('imdb', 'directors') }}.id = {{ source('imdb', 'movie_directors') }}.director_id\n    )\n    GROUP BY id\n)\nselect *\nfrom actor_summary\n\n{% if is_incremental() %}\n\n-- this filter will only be applied on an incremental run\nwhere id > (select max(id) from {{ this }}) or updated_at > (select max(updated_at) from {{this}})\n\n{% endif %}\n")),(0,r.kt)("p",{parentName:"li"},"Note that our model will only respond to updates and additions to the ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"actors")," tables. To respond to all tables, users would be encouraged to split this model into multiple sub-models - each with their own incremental criteria. These models can in turn be referenced and connected. For further details on cross-referencing models see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/dbt-jinja-functions/ref"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute a ",(0,r.kt)("inlineCode",{parentName:"p"},"dbt run")," and confirm the results of the resulting table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"clickhouse-user@clickhouse:~/imdb$  dbt run\n15:33:34  Running with dbt=1.1.0\n15:33:34  Found 1 model, 0 tests, 1 snapshot, 0 analyses, 181 macros, 0 operations, 0 seed files, 6 sources, 0 exposures, 0 metrics\n15:33:34\n15:33:35  Concurrency: 1 threads (target='dev')\n15:33:35\n15:33:35  1 of 1 START incremental model imdb_dbt.actor_summary........................... [RUN]\n15:33:41  1 of 1 OK created incremental model imdb_dbt.actor_summary...................... [OK in 6.33s]\n15:33:41\n15:33:41  Finished running 1 incremental model in 7.30s.\n15:33:41\n15:33:41  Completed successfully\n15:33:41\n15:33:41  Done. PASS=1 WARN=0 ERROR=0 SKIP=0 TOTAL=1\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM imdb_dbt.actor_summary ORDER BY num_movies DESC LIMIT 5;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"+------+------------+----------+------------------+------+---------+-------------------+\n|id    |name        |num_movies|avg_rank          |genres|directors|updated_at         |\n+------+------------+----------+------------------+------+---------+-------------------+\n|45332 |Mel Blanc   |832       |6.175853582979779 |18    |84       |2022-04-26 15:26:55|\n|621468|Bess Flowers|659       |5.57727638854796  |19    |293      |2022-04-26 15:26:57|\n|372839|Lee Phelps  |527       |5.032976449684617 |18    |261      |2022-04-26 15:26:56|\n|283127|Tom London  |525       |2.8721716524875673|17    |203      |2022-04-26 15:26:56|\n|356804|Bud Osborne |515       |2.0389507108727773|15    |149      |2022-04-26 15:26:56|\n+------+------------+----------+------------------+------+---------+-------------------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'We will now add data to our model to illustrate an incremental update. Add our actor  "Clicky McClickHouse" to the ',(0,r.kt)("inlineCode",{parentName:"p"},"actors")," table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO imdb.actors VALUES (845466, 'Clicky', 'McClickHouse', 'M');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's have Clicky star in 910 random movies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO imdb.roles\nSELECT now() as created_at, 845466 as actor_id, id as movie_id, 'Himself' as role\nFROM imdb.movies\nLIMIT 910 OFFSET 10000;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm he is indeed now the actor with the most appearances by querying the underlying source table and bypassing any dbt models:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id,\n    any(actor_name)          as name,\n    uniqExact(movie_id)    as num_movies,\n    avg(rank)                as avg_rank,\n    uniqExact(genre)         as unique_genres,\n    uniqExact(director_name) as uniq_directors,\n    max(created_at)          as updated_at\nFROM (\n        SELECT imdb.actors.id                                                   as id,\n                concat(imdb.actors.first_name, ' ', imdb.actors.last_name)       as actor_name,\n                imdb.movies.id as movie_id,\n                imdb.movies.rank                                                 as rank,\n                genre,\n                concat(imdb.directors.first_name, ' ', imdb.directors.last_name) as director_name,\n                created_at\n        FROM imdb.actors\n                JOIN imdb.roles ON imdb.roles.actor_id = imdb.actors.id\n                LEFT OUTER JOIN imdb.movies ON imdb.movies.id = imdb.roles.movie_id\n                LEFT OUTER JOIN imdb.genres ON imdb.genres.movie_id = imdb.movies.id\n                LEFT OUTER JOIN imdb.movie_directors ON imdb.movie_directors.movie_id = imdb.movies.id\n                LEFT OUTER JOIN imdb.directors ON imdb.directors.id = imdb.movie_directors.director_id\n        )\nGROUP BY id\nORDER BY num_movies DESC\nLIMIT 2;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"+------+-------------------+----------+------------------+------+---------+-------------------+\n|id    |name               |num_movies|avg_rank          |genres|directors|updated_at         |\n+------+-------------------+----------+------------------+------+---------+-------------------+\n|845466|Clicky McClickHouse|910       |1.4687938697032283|21    |662      |2022-04-26 16:20:36|\n|45332 |Mel Blanc          |909       |5.7884792542982515|19    |148      |2022-04-26 16:17:42|\n+------+-------------------+----------+------------------+------+---------+-------------------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute a ",(0,r.kt)("inlineCode",{parentName:"p"},"dbt run")," and confirm our model has been updated and matches the above results:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"clickhouse-user@clickhouse:~/imdb$  dbt run\n16:12:16  Running with dbt=1.1.0\n16:12:16  Found 1 model, 0 tests, 1 snapshot, 0 analyses, 181 macros, 0 operations, 0 seed files, 6 sources, 0 exposures, 0 metrics\n16:12:16\n16:12:17  Concurrency: 1 threads (target='dev')\n16:12:17\n16:12:17  1 of 1 START incremental model imdb_dbt.actor_summary........................... [RUN]\n16:12:24  1 of 1 OK created incremental model imdb_dbt.actor_summary...................... [OK in 6.82s]\n16:12:24\n16:12:24  Finished running 1 incremental model in 7.79s.\n16:12:24\n16:12:24  Completed successfully\n16:12:24\n16:12:24  Done. PASS=1 WARN=0 ERROR=0 SKIP=0 TOTAL=1\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM imdb_dbt.actor_summary ORDER BY num_movies DESC LIMIT 2;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"+------+-------------------+----------+------------------+------+---------+-------------------+\n|id    |name               |num_movies|avg_rank          |genres|directors|updated_at         |\n+------+-------------------+----------+------------------+------+---------+-------------------+\n|845466|Clicky McClickHouse|910       |1.4687938697032283|21    |662      |2022-04-26 16:20:36|\n|45332 |Mel Blanc          |909       |5.7884792542982515|19    |148      |2022-04-26 16:17:42|\n+------+-------------------+----------+------------------+------+---------+-------------------+\n")))),(0,r.kt)("h2",{id:"internals"},"Internals"),(0,r.kt)("p",null,"We can identify the statements executed to achieve the above incremental update by querying ClickHouse\u2019s query log."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT event_time, query  FROM system.query_log WHERE type='QueryStart' AND query LIKE '%dbt%'\nAND event_time > subtractMinutes(now(), 15) ORDER BY event_time LIMIT 100;\n")),(0,r.kt)("p",null,"Adjust the above query to the period of execution. We leave result inspection to the user but highlight the general strategy used by the plugin to perform incremental updates:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The plugin creates a temporary table ",(0,r.kt)("inlineCode",{parentName:"li"},"actor_sumary__dbt_tmp"),". Rows that have changed are streamed into this table."),(0,r.kt)("li",{parentName:"ol"},"A new table, ",(0,r.kt)("inlineCode",{parentName:"li"},"actor_summary_new,")," is created. The rows from the old table are, in turn, streamed from the old to new, with a check to make sure row ids do not exist in the temporary table. This effectively handles updates and duplicates."),(0,r.kt)("li",{parentName:"ol"},"The results from the temporary table are streamed into the new ",(0,r.kt)("inlineCode",{parentName:"li"},"actor_summary")," table:"),(0,r.kt)("li",{parentName:"ol"},"Finally, the new table is exchanged atomically with the old version via an ",(0,r.kt)("inlineCode",{parentName:"li"},"EXCHANGE TABLES")," statement. The old and temporary tables are in turn dropped.")),(0,r.kt)("p",null,"This is visualized below:"),(0,r.kt)("img",{src:n(73385).Z,class:"image",alt:"incremental updates dbt",style:{width:"100%"}}),(0,r.kt)("p",null,"This strategy may encounter challenges on very large models. For further details see ",(0,r.kt)("a",{parentName:"p",href:"./dbt-limitations"},"Limitations"),"."),(0,r.kt)("h2",{id:"append-strategy-inserts-only-mode"},"Append Strategy (inserts-only mode)"),(0,r.kt)("p",null,"To overcome the limitations of large datasets in incremental models, the plugin uses the dbt configuration parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"incremental_strategy"),". This can be set to the value ",(0,r.kt)("inlineCode",{parentName:"p"},"append"),". When set, updated rows are inserted directly into the target table (a.k.a ",(0,r.kt)("inlineCode",{parentName:"p"},"imdb_dbt.actor_summary"),") and no temporary table is created.\nNote: Append only mode requires your data to be immutable or for duplicates to be acceptable. If you want an incremental table model that supports altered rows don\u2019t use this mode!"),(0,r.kt)("p",null,"To illustrate this mode, we will add another new actor and re-execute dbt run with ",(0,r.kt)("inlineCode",{parentName:"p"},"incremental_strategy='append'"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure append only mode in actor_summary.sql:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{{ config(order_by='(updated_at, id, name)', engine='MergeTree()', materialized='incremental', unique_key='id', incremental_strategy='append') }}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let\u2019s add another famous actor - Danny DeBito"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO imdb.actors VALUES (845467, 'Danny', 'DeBito', 'M');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's star Danny in 920 random movies."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO imdb.roles\nSELECT now() as created_at, 845467 as actor_id, id as movie_id, 'Himself' as role\nFROM imdb.movies\nLIMIT 920 OFFSET 10000;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute a dbt run and confirm that Danny was added to the actor-summary table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"clickhouse-user@clickhouse:~/imdb$ dbt run\n16:12:16  Running with dbt=1.1.0\n16:12:16  Found 1 model, 0 tests, 1 snapshot, 0 analyses, 186 macros, 0 operations, 0 seed files, 6 sources, 0 exposures, 0 metrics\n16:12:16  \n16:12:17  Concurrency: 1 threads (target='dev')\n16:12:17  \n16:12:17  1 of 1 START incremental model imdb_dbt.actor_summary........................... [RUN]\n16:12:24  1 of 1 OK created incremental model imdb_dbt.actor_summary...................... [OK in 0.17s]\n16:12:24  \n16:12:24  Finished running 1 incremental model in 0.19s.\n16:12:24  \n16:12:24  Completed successfully\n16:12:24  \n16:12:24  Done. PASS=1 WARN=0 ERROR=0 SKIP=0 TOTAL=1\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM imdb_dbt.actor_summary ORDER BY num_movies DESC LIMIT 3;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"+------+-------------------+----------+------------------+------+---------+-------------------+\n|id    |name               |num_movies|avg_rank          |genres|directors|updated_at         |\n+------+-------------------+----------+------------------+------+---------+-------------------+\n|845467|Danny DeBito       |920       |1.4768987303293204|21    |670      |2022-04-26 16:22:06|\n|845466|Clicky McClickHouse|910       |1.4687938697032283|21    |662      |2022-04-26 16:20:36|\n|45332 |Mel Blanc          |909       |5.7884792542982515|19    |148      |2022-04-26 16:17:42|\n+------+-------------------+----------+------------------+------+---------+-------------------+\n")))),(0,r.kt)("p",null,"Note how much faster that incremental was compared to the insertion of Clicky."),(0,r.kt)("p",null,"Checking again the query_log table reveals the differences between the 2 incremental runs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'insert into imdb_dbt.actor_summary ("id", "name", "num_movies", "avg_rank", "genres", "directors", "updated_at")\nwith actor_summary as (\n   SELECT id,\n      any(actor_name) as name,\n      uniqExact(movie_id)    as num_movies,\n      avg(rank)                as avg_rank,\n      uniqExact(genre)         as genres,\n      uniqExact(director_name) as directors,\n      max(created_at) as updated_at\n   FROM (\n      SELECT imdb.actors.id as id,\n         concat(imdb.actors.first_name, \' \', imdb.actors.last_name) as actor_name,\n         imdb.movies.id as movie_id,\n         imdb.movies.rank as rank,\n         genre,\n         concat(imdb.directors.first_name, \' \', imdb.directors.last_name) as director_name,\n         created_at\n      FROM imdb.actors\n         JOIN imdb.roles ON imdb.roles.actor_id = imdb.actors.id\n         LEFT OUTER JOIN imdb.movies ON imdb.movies.id = imdb.roles.movie_id\n         LEFT OUTER JOIN imdb.genres ON imdb.genres.movie_id = imdb.movies.id\n         LEFT OUTER JOIN imdb.movie_directors ON imdb.movie_directors.movie_id = imdb.movies.id\n         LEFT OUTER JOIN imdb.directors ON imdb.directors.id = imdb.movie_directors.director_id\n   )\n   GROUP BY id\n)\n\nselect *\nfrom actor_summary\n-- this filter will only be applied on an incremental run\nwhere id > (select max(id) from imdb_dbt.actor_summary) or updated_at > (select max(updated_at) from imdb_dbt.actor_summary)\n')),(0,r.kt)("p",null,"In this run, only the new rows are added straight to imdb_dbt.actor_summary table and there is no table creation involved."),(0,r.kt)("h2",{id:"deleteinsert-mode-experimental"},"Delete+Insert mode (Experimental)"),(0,r.kt)("p",null,"Historically ClickHouse has had only limited support for updates and deletes, in the form of asynchronous ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/alter/"},"Mutations"),".  These can be extremely IO-intensive and should generally ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/alter/"},"be avoided"),"."),(0,r.kt)("p",null,"ClickHouse 22.8 introduced ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/delete/"},"Lightweight deletes"),". These are currently experimental but offer a more performant means of deleting data."),(0,r.kt)("p",null,"This mode can be configured for a model via the ",(0,r.kt)("inlineCode",{parentName:"p"},"incremental_strategy")," parameter i.e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{{ config(order_by='(updated_at, id, name)', engine='MergeTree()', materialized='incremental', unique_key='id', incremental_strategy='delete+insert') }}\n")),(0,r.kt)("p",null,"This strategy operates directly on the target model's table, so if there is an issue during the operation, the data in the incremental model is likely to be in an invalid state -  there is no atomic update."),(0,r.kt)("p",null,"In summary, this approach:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The plugin creates a temporary table ",(0,r.kt)("inlineCode",{parentName:"li"},"actor_sumary__dbt_tmp"),". Rows that have changed are streamed into this table."),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")," is issued against the current ",(0,r.kt)("inlineCode",{parentName:"li"},"actor_summary")," table. Rows are deleted by id from ",(0,r.kt)("inlineCode",{parentName:"li"},"actor_sumary__dbt_tmp")),(0,r.kt)("li",{parentName:"ol"},"The rows from ",(0,r.kt)("inlineCode",{parentName:"li"},"actor_sumary__dbt_tmp")," are inserted into ",(0,r.kt)("inlineCode",{parentName:"li"},"actor_summary")," using an ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT INTO actor_summary SELECT * FROM actor_sumary__dbt_tmp"),".")),(0,r.kt)("p",null,"This process is shown below:"),(0,r.kt)("img",{src:n(63745).Z,class:"image",alt:"lightweight delete incremental",style:{width:"100%"}}))}p.isMDXComponent=!0},73385:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dbt_05-1e364a9c0b3e8d517a559b582c66571c.png"},63745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dbt_06-179ed8803cfcbb5ed7661a25cf33cb30.png"}}]);