"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},95113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const s={sidebar_label:"Backups",slug:"/en/manage/backups"},o="Backups",i={unversionedId:"en/cloud/manage/backups",id:"en/cloud/manage/backups",title:"Backups",description:"Backup status list",source:"@site/docs/en/cloud/manage/backups.md",sourceDirName:"en/cloud/manage",slug:"/en/manage/backups",permalink:"/AlgoliaDocsSelfCrawl/en/manage/backups",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/manage/backups.md",tags:[],version:"current",frontMatter:{sidebar_label:"Backups",slug:"/en/manage/backups"}},l={},c=[{value:"Backup status list",id:"backup-status-list",level:2},{value:"Restore a backup",id:"restore-a-backup",level:2},{value:"Working with your restored service",id:"working-with-your-restored-service",level:2},{value:"Use the <strong>new restored service</strong>",id:"use-the-new-restored-service",level:3},{value:"Migrate data from the <strong>new restored service</strong> back to the <strong>original service</strong>",id:"migrate-data-from-the-new-restored-service-back-to-the-original-service",level:3},{value:"Allow remote access to the newly restored service",id:"allow-remote-access-to-the-newly-restored-service",level:4},{value:"On the newly restored ClickHouse service (the system that hosts the restored data)",id:"on-the-newly-restored-clickhouse-service-the-system-that-hosts-the-restored-data",level:4},{value:"On the destination ClickHouse Cloud system (the one that had the damaged table):",id:"on-the-destination-clickhouse-cloud-system-the-one-that-had-the-damaged-table",level:4}],p={toc:c},d="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"backups"},"Backups"),(0,n.kt)("h2",{id:"backup-status-list"},"Backup status list"),(0,n.kt)("p",null,"Each of your services are backed up daily.  You can see the backup list for a service on the ",(0,n.kt)("strong",{parentName:"p"},"Backups")," tab of the service.  From there you can restore a backup, or delete a backup:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"List of backups",src:a(41119).Z,width:"1637",height:"535"})),(0,n.kt)("h2",{id:"restore-a-backup"},"Restore a backup"),(0,n.kt)("p",null,"Backups are restored to a new ClickHouse Cloud service.  After clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Restore backup")," icon you can specify the ",(0,n.kt)("strong",{parentName:"p"},"Service name")," of the new service that will be created, and then ",(0,n.kt)("strong",{parentName:"p"},"Restore this backup"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Restore details",src:a(52436).Z,width:"697",height:"272"})),(0,n.kt)("p",null,"The new service will show in the services list as ",(0,n.kt)("strong",{parentName:"p"},"Provisioning")," until it is ready:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"New service provisioning",src:a(28597).Z,width:"1058",height:"573"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please do not use the ",(0,n.kt)("inlineCode",{parentName:"p"},"BACKUP")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"RESTORE")," commands in your SQL client when working with ClickHouse Cloud services.  Cloud backups should be managed from the UI.")),(0,n.kt)("h2",{id:"working-with-your-restored-service"},"Working with your restored service"),(0,n.kt)("p",null,"You now have two similar services, the ",(0,n.kt)("strong",{parentName:"p"},"original service")," one that for some reason needed to be restored, and a ",(0,n.kt)("strong",{parentName:"p"},"new restored service")," that was restored from a backup of the original.  You have two choices:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Use the ",(0,n.kt)("strong",{parentName:"li"},"new restored service")," and remove the ",(0,n.kt)("strong",{parentName:"li"},"original service"),"."),(0,n.kt)("li",{parentName:"ol"},"Migrate data from the ",(0,n.kt)("strong",{parentName:"li"},"new restored service")," back to the ",(0,n.kt)("strong",{parentName:"li"},"original service")," and remove the ",(0,n.kt)("strong",{parentName:"li"},"new restored service"),".")),(0,n.kt)("h3",{id:"use-the-new-restored-service"},"Use the ",(0,n.kt)("strong",{parentName:"h3"},"new restored service")),(0,n.kt)("p",null,"To use the new service perform these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Verify that the new service has the IP Access List entries required by your use cases."),(0,n.kt)("li",{parentName:"ol"},"Verify that the new service contains the data that you need."),(0,n.kt)("li",{parentName:"ol"},"Remove the original service.")),(0,n.kt)("h3",{id:"migrate-data-from-the-new-restored-service-back-to-the-original-service"},"Migrate data from the ",(0,n.kt)("strong",{parentName:"h3"},"new restored service")," back to the ",(0,n.kt)("strong",{parentName:"h3"},"original service")),(0,n.kt)("p",null,"Suppose you cannot work with the newly restored service for any reason; for example, if you have users or applications that connect to the existing service, you may decide to migrate the newly restored data into the original service.  The migration can be accomplished by following these steps:"),(0,n.kt)("h4",{id:"allow-remote-access-to-the-newly-restored-service"},"Allow remote access to the newly restored service"),(0,n.kt)("p",null,"The new service is restored from backup with the same IP Allow List as the original service, this means that connections will not be allowed from other ClickHouse Cloud services unless you had allowed access from everywhere.  Modify the allow list and allow access from ",(0,n.kt)("strong",{parentName:"p"},"Anywhere")," temporarily.  See the ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/manage/security/ip-access-list"},"IP Access List")," docs for details."),(0,n.kt)("h4",{id:"on-the-newly-restored-clickhouse-service-the-system-that-hosts-the-restored-data"},"On the newly restored ClickHouse service (the system that hosts the restored data)"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You will need to reset the password for the new service in order to access it, you can do that from the service list.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add a read only user that can read the source table (",(0,n.kt)("inlineCode",{parentName:"p"},"db.table")," in this example)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER exporter\nIDENTIFIED WITH SHA256_PASSWORD BY 'password-here'\nSETTINGS readonly = 1;\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON db.table TO exporter;\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copy the table definition"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select create_table_query\nfrom system.tables\nwhere database = 'db' and table = 'table'\n")))),(0,n.kt)("h4",{id:"on-the-destination-clickhouse-cloud-system-the-one-that-had-the-damaged-table"},"On the destination ClickHouse Cloud system (the one that had the damaged table):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create the destination database:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Using the CREATE TABLE statement from the source, create the destination."),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Change the ENGINE to to ReplicatedMergeTree without any parameters when you run the CREATE statement.  ClickHouse Cloud always replicates tables and provides the correct parameters.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db.table ...\n# highlight-next-line\nENGINE = ReplicatedMergeTree\nORDER BY ...\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"remoteSecure")," function to pull the data from the newly restored ClickHouse Cloud service"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db.table SELECT * FROM\nremoteSecure('source-hostname', db, table, 'exporter', 'password-here')\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify the data in the service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete the newly restored service once the data is verified"))))}u.isMDXComponent=!0},41119:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-backup-list-8869e660a34f5d00b2312d36b1fed970.png"},28597:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-backup-new-service-5c4c28b4c16c197b9ab89fa0a49e8fde.png"},52436:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-backup-restore-164583a320bf985d1aece65944602413.png"}}]);