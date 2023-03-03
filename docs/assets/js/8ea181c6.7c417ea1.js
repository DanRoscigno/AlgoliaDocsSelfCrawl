"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[66510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,h=p["".concat(l,".").concat(g)]||p[g]||k[g]||a;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>k});var o=n(87462),r=(n(67294),n(3905));const a={toc:[{value:"Installation",id:"troubleshooting-installation-errors",level:2},{value:"You Cannot Get Deb Packages from ClickHouse Repository with Apt-get",id:"you-cannot-get-deb-packages-from-clickhouse-repository-with-apt-get",level:3},{value:"You Cannot Update Deb Packages from ClickHouse Repository with Apt-get",id:"you-cannot-update-deb-packages-from-clickhouse-repository-with-apt-get",level:3},{value:"You Get Different Warnings with <code>apt-get update</code>",id:"you-get-different-warnings-with-apt-get-update",level:3},{value:"You Can&#39;t Get Packages With Yum Because Of Wrong Signature",id:"you-cant-get-packages-with-yum-because-of-wrong-signature",level:3},{value:"Connecting to the Server",id:"troubleshooting-accepts-no-connections",level:2},{value:"Server Is Not Running",id:"server-is-not-running",level:3},{value:"Configuration Parameters",id:"configuration-parameters",level:3},{value:"Query Processing",id:"troubleshooting-does-not-process-queries",level:2},{value:"Efficiency of Query Processing",id:"troubleshooting-too-slow",level:2}]},s="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#troubleshooting-installation-errors"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#troubleshooting-accepts-no-connections"},"Connecting to the server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#troubleshooting-does-not-process-queries"},"Query processing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#troubleshooting-too-slow"},"Efficiency of query processing"))),(0,r.kt)("h2",{id:"troubleshooting-installation-errors"},"Installation"),(0,r.kt)("h3",{id:"you-cannot-get-deb-packages-from-clickhouse-repository-with-apt-get"},"You Cannot Get Deb Packages from ClickHouse Repository with Apt-get"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check firewall settings."),(0,r.kt)("li",{parentName:"ul"},"If you cannot access the repository for any reason, download packages as described in the ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/install"},"install guide")," article and install them manually using the ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo dpkg -i <packages>")," command. You will also need the ",(0,r.kt)("inlineCode",{parentName:"li"},"tzdata")," package.")),(0,r.kt)("h3",{id:"you-cannot-update-deb-packages-from-clickhouse-repository-with-apt-get"},"You Cannot Update Deb Packages from ClickHouse Repository with Apt-get"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The issue may be happened when the GPG key is changed.")),(0,r.kt)("p",null,"Please use the following scripts to resolve the issue:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 8919F6BD2B48D754\nsudo apt-get update\n")),(0,r.kt)("h3",{id:"you-get-different-warnings-with-apt-get-update"},"You Get Different Warnings with ",(0,r.kt)("inlineCode",{parentName:"h3"},"apt-get update")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The completed warning messages are as one of following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"N: Skipping acquire of configured file 'main/binary-i386/Packages' as repository 'https://packages.clickhouse.com/deb stable InRelease' doesn't support architecture 'i386'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"E: Failed to fetch https://packages.clickhouse.com/deb/dists/stable/main/binary-amd64/Packages.gz  File has unexpected size (30451 != 28154). Mirror sync in progress?\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"E: Repository 'https://packages.clickhouse.com/deb stable InRelease' changed its 'Origin' value from 'Artifactory' to 'ClickHouse'\nE: Repository 'https://packages.clickhouse.com/deb stable InRelease' changed its 'Label' value from 'Artifactory' to 'ClickHouse'\nN: Repository 'https://packages.clickhouse.com/deb stable InRelease' changed its 'Suite' value from 'stable' to ''\nN: This must be accepted explicitly before updates for this repository can be applied. See apt-secure(8) manpage for details.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Err:11 https://packages.clickhouse.com/deb stable InRelease\n  400  Bad Request [IP: 172.66.40.249 443]\n")),(0,r.kt)("p",null,"To resolve the above issue, please use the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm /var/lib/apt/lists/packages.clickhouse.com_* /var/lib/dpkg/arch /var/lib/apt/lists/partial/packages.clickhouse.com_*\nsudo apt-get clean\nsudo apt-get autoclean\n")),(0,r.kt)("h3",{id:"you-cant-get-packages-with-yum-because-of-wrong-signature"},"You Can't Get Packages With Yum Because Of Wrong Signature"),(0,r.kt)("p",null,"Possible issue: the cache is wrong, maybe it's broken after updated GPG key in 2022-09."),(0,r.kt)("p",null,"The solution is to clean out the cache and lib directory for yum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo find /var/lib/yum/repos/ /var/cache/yum/ -name 'clickhouse-*' -type d -exec rm -rf {} +\nsudo rm -f /etc/yum.repos.d/clickhouse.repo\n")),(0,r.kt)("p",null,"After that follow the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/install#from-rpm-packages"},"install guide")),(0,r.kt)("h2",{id:"troubleshooting-accepts-no-connections"},"Connecting to the Server"),(0,r.kt)("p",null,"Possible issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The server is not running."),(0,r.kt)("li",{parentName:"ul"},"Unexpected or wrong configuration parameters.")),(0,r.kt)("h3",{id:"server-is-not-running"},"Server Is Not Running"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Check if server is running")),(0,r.kt)("p",null,"Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service clickhouse-server status\n")),(0,r.kt)("p",null,"If the server is not running, start it with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service clickhouse-server start\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Check logs")),(0,r.kt)("p",null,"The main log of ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," is in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/clickhouse-server/clickhouse-server.log")," by default."),(0,r.kt)("p",null,"If the server started successfully, you should see the strings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<Information> Application: starting up.")," \u2014 Server started."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<Information> Application: Ready for connections.")," \u2014 Server is running and ready for connections.")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," start failed with a configuration error, you should see the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Error>")," string with an error description. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"2019.01.11 15:23:25.549505 [ 45 ] {} <Error> ExternalDictionaries: Failed reloading 'event2id' external dictionary: Poco::Exception. Code: 1000, e.code() = 111, e.displayText() = Connection refused, e.what() = Connection refused\n")),(0,r.kt)("p",null,"If you do not see an error at the end of the file, look through the entire file starting from the string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<Information> Application: starting up.\n")),(0,r.kt)("p",null,"If you try to start a second instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," on the server, you see the following log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"2019.01.11 15:25:11.151730 [ 1 ] {} <Information> : Starting ClickHouse 19.1.0 with revision 54413\n2019.01.11 15:25:11.154578 [ 1 ] {} <Information> Application: starting up\n2019.01.11 15:25:11.156361 [ 1 ] {} <Information> StatusFile: Status file ./status already exists - unclean restart. Contents:\nPID: 8510\nStarted at: 2019-01-11 15:24:23\nRevision: 54413\n\n2019.01.11 15:25:11.156673 [ 1 ] {} <Error> Application: DB::Exception: Cannot lock file ./status. Another server instance in same directory is already running.\n2019.01.11 15:25:11.156682 [ 1 ] {} <Information> Application: shutting down\n2019.01.11 15:25:11.156686 [ 1 ] {} <Debug> Application: Uninitializing subsystem: Logging Subsystem\n2019.01.11 15:25:11.156716 [ 2 ] {} <Information> BaseDaemon: Stop SignalListener thread\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See system.d logs")),(0,r.kt)("p",null,"If you do not find any useful information in ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," logs or there aren\u2019t any logs, you can view ",(0,r.kt)("inlineCode",{parentName:"p"},"system.d")," logs using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo journalctl -u clickhouse-server\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start clickhouse-server in interactive mode")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo -u clickhouse /usr/bin/clickhouse-server --config-file /etc/clickhouse-server/config.xml\n")),(0,r.kt)("p",null,"This command starts the server as an interactive app with standard parameters of the autostart script. In this mode ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," prints all the event messages in the console."),(0,r.kt)("h3",{id:"configuration-parameters"},"Configuration Parameters"),(0,r.kt)("p",null,"Check:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Docker settings."),(0,r.kt)("p",{parentName:"li"},"If you run ClickHouse in Docker in an IPv6 network, make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"network=host")," is set.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Endpoint settings."),(0,r.kt)("p",{parentName:"li"},"Check ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/server-configuration-parameters/settings#server_configuration_parameters-listen_host"},"listen_host")," and ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port"},"tcp_port")," settings."),(0,r.kt)("p",{parentName:"li"},"ClickHouse server accepts localhost connections only by default.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"HTTP protocol settings."),(0,r.kt)("p",{parentName:"li"},"Check protocol settings for the HTTP API.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secure connection settings."),(0,r.kt)("p",{parentName:"li"},"Check:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port_secure"},"tcp_port_secure")," setting."),(0,r.kt)("li",{parentName:"ul"},"Settings for ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},"SSL certificates"),".")),(0,r.kt)("p",{parentName:"li"},"Use proper parameters while connecting. For example, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"port_secure")," parameter with ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse_client"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User settings."),(0,r.kt)("p",{parentName:"li"},"You might be using the wrong user name or password."))),(0,r.kt)("h2",{id:"troubleshooting-does-not-process-queries"},"Query Processing"),(0,r.kt)("p",null,"If ClickHouse is not able to process the query, it sends an error description to the client. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," you get a description of the error in the console. If you are using the HTTP interface, ClickHouse sends the error description in the response body. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'http://localhost:8123/' --data-binary \"SELECT a\"\nCode: 47, e.displayText() = DB::Exception: Unknown identifier: a. Note that there are no tables (FROM clause) in your query, context: required_names: 'a' source_tables: table_aliases: private_aliases: column_aliases: public_columns: 'a' masked_columns: array_join_columns: source_columns: , e.what() = DB::Exception\n")),(0,r.kt)("p",null,"If you start ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"stack-trace")," parameter, ClickHouse returns the server stack trace with the description of an error."),(0,r.kt)("p",null,"You might see a message about a broken connection. In this case, you can repeat the query. If the connection breaks every time you perform the query, check the server logs for errors."),(0,r.kt)("h2",{id:"troubleshooting-too-slow"},"Efficiency of Query Processing"),(0,r.kt)("p",null,"If you see that ClickHouse is working too slowly, you need to profile the load on the server resources and network for your queries."),(0,r.kt)("p",null,"You can use the clickhouse-benchmark utility to profile queries. It shows the number of queries processed per second, the number of rows processed per second, and percentiles of query processing times."))}i.isMDXComponent=!0;const l={sidebar_position:1,slug:"/en/faq/troubleshooting",title:"Troubleshooting"},c=void 0,u={unversionedId:"en/faq/troubleshooting",id:"en/faq/troubleshooting",title:"Troubleshooting",description:"ClickHouse Cloud Troubleshooting",source:"@site/docs/en/faq/troubleshooting.md",sourceDirName:"en/faq",slug:"/en/faq/troubleshooting",permalink:"/AlgoliaDocsSelfCrawl/en/faq/troubleshooting",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/troubleshooting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/en/faq/troubleshooting",title:"Troubleshooting"},sidebar:"english",previous:{title:"Billing",permalink:"/AlgoliaDocsSelfCrawl/en/faq/billing"},next:{title:"General Questions about ClickHouse",permalink:"/AlgoliaDocsSelfCrawl/en/faq/general/"}},p={},k=[{value:"ClickHouse Cloud Troubleshooting",id:"clickhouse-cloud-troubleshooting",level:2},{value:"Unable to access a ClickHouse Cloud service",id:"unable-to-access-a-clickhouse-cloud-service",level:3},{value:"Self-managed ClickHouse Troubleshooting",id:"self-managed-clickhouse-troubleshooting",level:2}],g={toc:k},h="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"clickhouse-cloud-troubleshooting"},"ClickHouse Cloud Troubleshooting"),(0,r.kt)("h3",{id:"unable-to-access-a-clickhouse-cloud-service"},"Unable to access a ClickHouse Cloud service"),(0,r.kt)("p",null,"If you are seeing an error message like one of these, your IP Access List may be denying access:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"curl: (35) error:02FFF036:system library:func(4095):Connection reset by peer\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"curl: (35) LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to HOSTNAME.clickhouse.cloud:8443\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Code: 210. DB::NetException: SSL connection unexpectedly closed (e46453teek.us-east-2.aws.clickhouse-staging.com:9440). (NETWORK_ERROR)\n")),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/manage/security/ip-access-list"},"IP Access List"),", if you are attempting to connect from outside the allowed list then your connection will fail."),(0,r.kt)("h2",{id:"self-managed-clickhouse-troubleshooting"},"Self-managed ClickHouse Troubleshooting"),(0,r.kt)(i,{mdxType:"SelfManagedTroubleshooting"}))}d.isMDXComponent=!0}}]);