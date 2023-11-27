"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[7139],{9613:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||n;return o?a.createElement(m,i(i({ref:t},u),{},{components:o})):a.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},8021:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=o(8957),r=(o(9496),o(9613));const n={title:"Blob storage is a solved problem- what about compute?",sidebar_position:9,slug:"/blob-storage-is-solved-but-what-about-compute"},i=void 0,l={permalink:"/blog/blob-storage-is-solved-but-what-about-compute",source:"@site/blog/blog/blob-storage-is-solved-but-what-about-compute.md",title:"Blob storage is a solved problem- what about compute?",description:"2023-11-26",date:"2023-11-27T01:02:43.277Z",formattedDate:"November 27, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Blob storage is a solved problem- what about compute?",sidebar_position:9,slug:"/blob-storage-is-solved-but-what-about-compute"},prevItem:{title:"Tools / Software matched to job-  Data room",permalink:"/blog/tools-for-the-job"},nextItem:{title:"A New Kind of Scientific Publishing",permalink:"/blog/a-new-kind-of-scientific-publishing"}},s={authorsImageUrls:[]},c=[{value:"Storage is a solved problem",id:"391abf3711fb4cdc989cd95a352c95d3",level:2},{value:"Compute is not a solved problem",id:"7998c587d99540c98564ff6646cb9977",level:2},{value:"References",id:"f72739ff70d843c7b655beb4d3c9c218",level:2},{value:"1 <strong>How data is lost in the cloud</strong>",id:"5ff5b92126b14c0cb53ba25f3a9f00d3",level:3},{value:"2 <strong>Mechanisms of ionizing-radiation resistance</strong>",id:"7d4f1319505a45ddb4c4b1a2e8c47ceb",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("mermaid",{value:'flowchart LR\n\tst["data storage"]\n\tc["compute storage"]\n  u["workflows as URLs"]\n  sim["simulations as URLs"]\n\n\tst --\x3e u\n\tc --\x3e u --\x3e sim\n  click st "/blob-storage-is-solved-but-what-about-compute"\n  click u "/url-configured-websites"'}),(0,r.kt)("p",null,"2023-11-26 "),(0,r.kt)("h2",{id:"391abf3711fb4cdc989cd95a352c95d3"},"Storage is a solved problem"),(0,r.kt)("p",null,"Storing blobs of data for your web application used to be more involved, I had to ",(0,r.kt)("em",{parentName:"p"},"think")," about it. Now I don\u2019t (much): when I build an app or website, that needs some blob storage my thoughts are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"create a bucket or whatever it\u2019s called in one of some cloud provider, doesn\u2019t have to be the biggest name, they\u2019re all very reliable"),(0,r.kt)("li",{parentName:"ol"},"put stuff in"),(0,r.kt)("li",{parentName:"ol"},"get stuff out")),(0,r.kt)("p",null,"I don\u2019t care where much it is. Why? Because it\u2019s a ",(0,r.kt)("strong",{parentName:"p"},"solved problem"),". Remote blob storage is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"very cheap, and getting cheaper"),(0,r.kt)("li",{parentName:"ul"},"reliable ","[1]")),(0,r.kt)("p",null,"At scale however, yes, you do have to think about cost, but those calculations are pretty straightforward business calculations. At anything below very large data, you don\u2019t have to think much about it, and this makes it a ",(0,r.kt)("strong",{parentName:"p"},"solved problem"),"."),(0,r.kt)("p",null,"It\u2019s a solved problem in a similar way that nature has solved storing information: replication, with automated mechanisms for damage repair/reconciliation ","[2]","."),(0,r.kt)("h2",{id:"7998c587d99540c98564ff6646cb9977"},"Compute is not a solved problem"),(0,r.kt)("p",null,"Because you have to think about it. What I want: "),(0,r.kt)("p",null,"I give you some application, some workflow, for example, a machine learning agent, some program I have created, some tool, and it requires from time to time, some level of computing power. You are able to automatically, safely, connect that application to the right level of compute resources as needed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the program is in the browser, I might be able to use the GPU, while the tab is open and running."),(0,r.kt)("li",{parentName:"ul"},"If the program is downloaded and installed program, I have access to your entire computer, but due to that, security and parasitic programs become a problem."),(0,r.kt)("li",{parentName:"ul"},"If I make available some cloud computing, it suddenly becomes complex, with lots of decisions, but with lots of scalable compute resources of different useful types.")),(0,r.kt)("p",null,"Computing resources are inherently valuable, and often able to be converted to $$ efficiently via automation."),(0,r.kt)("p",null,"Obviously ",(0,r.kt)("inlineCode",{parentName:"p"},"storage !== compute")," but if it were as easy, then I could distribute complex scientific simulations, and revive them years later, and they would \u201cjust work\u201d."),(0,r.kt)("h2",{id:"f72739ff70d843c7b655beb4d3c9c218"},"References"),(0,r.kt)("h3",{id:"5ff5b92126b14c0cb53ba25f3a9f00d3"},"[1]"," ",(0,r.kt)("strong",{parentName:"h3"},"How data is lost in the cloud")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://spanning.com/blog/how-data-is-lost-in-the-cloud/"},"https://spanning.com/blog/how-data-is-lost-in-the-cloud/")),(0,r.kt)("h3",{id:"7d4f1319505a45ddb4c4b1a2e8c47ceb"},"[2]"," ",(0,r.kt)("strong",{parentName:"h3"},"Mechanisms of ionizing-radiation resistance")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deinococcus_radiodurans"},"https://en.wikipedia.org/wiki/Deinococcus_radiodurans")))}d.isMDXComponent=!0}}]);