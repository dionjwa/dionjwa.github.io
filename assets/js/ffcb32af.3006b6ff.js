"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[89],{6695:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=o(1527),a=o(6213);const i={title:"Blob storage is a solved problem- what about compute?",sidebar_position:9,slug:"/blob-storage-is-solved-but-what-about-compute",authors:["dion"]},n=void 0,r={permalink:"/blog/blob-storage-is-solved-but-what-about-compute",source:"@site/blog/blog/blob-storage-is-solved-but-what-about-compute.md",title:"Blob storage is a solved problem- what about compute?",description:"2023-11-26",date:"2023-12-06T18:35:32.986Z",formattedDate:"December 6, 2023",tags:[],hasTruncateMarker:!1,authors:[{name:"Dion Whitehead",title:"Metapages Inventor",url:"https://evolvedeeptimecomplex.systems/",imageURL:"https://github.com/dionjwa.png",key:"dion"}],frontMatter:{title:"Blob storage is a solved problem- what about compute?",sidebar_position:9,slug:"/blob-storage-is-solved-but-what-about-compute",authors:["dion"]},unlisted:!1,prevItem:{title:"Tools / Software matched to job-  Data room",permalink:"/blog/tools-for-the-job"},nextItem:{title:"A New Kind of Scientific Publishing",permalink:"/blog/a-new-kind-of-scientific-publishing"}},l={authorsImageUrls:[void 0]},c=[{value:"Storage is a solved problem",id:"391abf3711fb4cdc989cd95a352c95d3",level:2},{value:"Compute is not a solved problem",id:"7998c587d99540c98564ff6646cb9977",level:2},{value:"References",id:"f72739ff70d843c7b655beb4d3c9c218",level:2},{value:"[1] <strong>How data is lost in the cloud</strong>",id:"5ff5b92126b14c0cb53ba25f3a9f00d3",level:3},{value:"[2] <strong>Mechanisms of ionizing-radiation resistance</strong>",id:"7d4f1319505a45ddb4c4b1a2e8c47ceb",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"2023-11-26"}),"\n",(0,s.jsx)(t.mermaid,{value:'flowchart LR\n\tst["cloud data"]\n\tc["compute"]\n  u["workflows as URLs"]\n  sim["sharable simulations"]\n\tdt["preserved through deep time"]\n\n\tst --\x3e u\n\tc --\x3e u --\x3e sim --\x3e dt\n  click st "/blob-storage-is-solved-but-what-about-compute"\n  click u "/url-configured-websites"\n  click c "https://www.notion.so/metapages/Connect-compute-to-my-tasks-it-s-too-complicated-665f6bbcd4724d5ba3a4b66573473b69?pvs=4"\n  click dt "https://www.notion.so/metapages/The-Internet-Archive-and-URL-configured-websites-f4b9e02d29234caa932bd553e1eaec75?pvs=4"\n  click sim "https://www.notion.so/metapages/Sharable-Simulations-d8dcdfeed5ef423396086ce22875c735?pvs=4"'}),"\n",(0,s.jsx)(t.h2,{id:"391abf3711fb4cdc989cd95a352c95d3",children:"Storage is a solved problem"}),"\n",(0,s.jsxs)(t.p,{children:["Storing blobs of data for your web application used to be more involved, I had to ",(0,s.jsx)(t.em,{children:"think"})," about it. Now I don\u2019t (much): when I build an app or website, that needs some blob storage my thoughts are:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"create a bucket or whatever it\u2019s called in one of some cloud provider, doesn\u2019t have to be the biggest name, they\u2019re all very reliable"}),"\n",(0,s.jsx)(t.li,{children:"put stuff in"}),"\n",(0,s.jsx)(t.li,{children:"get stuff out"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["I don\u2019t care where much it is. Why? Because it\u2019s a ",(0,s.jsx)(t.strong,{children:"solved problem"}),". Remote blob storage is:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"very cheap, and getting cheaper"}),"\n",(0,s.jsx)(t.li,{children:"reliable [1]"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["At scale however, yes, you do have to think about cost, but those calculations are pretty straightforward business calculations. At anything below very large data, you don\u2019t have to think much about it, and this makes it a ",(0,s.jsx)(t.strong,{children:"solved problem"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"It\u2019s a solved problem in a similar way that nature has solved storing information: replication, with automated mechanisms for damage repair/reconciliation [2]."}),"\n",(0,s.jsx)(t.h2,{id:"7998c587d99540c98564ff6646cb9977",children:"Compute is not a solved problem"}),"\n",(0,s.jsx)(t.p,{children:"Because you have to think about it. What I want:"}),"\n",(0,s.jsx)(t.p,{children:"I give you some application, some workflow, for example, a machine learning agent, some program I have created, some tool, and it requires from time to time, some level of computing power. You are able to automatically, safely, connect that application to the right level of compute resources as needed."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If the program is in the browser, I might be able to use the GPU, while the tab is open and running."}),"\n",(0,s.jsx)(t.li,{children:"If the program is downloaded and installed program, I have access to your entire computer, but due to that, security and parasitic programs become a problem."}),"\n",(0,s.jsx)(t.li,{children:"If I make available some cloud computing, it suddenly becomes complex, with lots of decisions, but with lots of scalable compute resources of different useful types."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Computing resources are inherently valuable, and often able to be converted to $$ efficiently via automation."}),"\n",(0,s.jsxs)(t.p,{children:["Obviously ",(0,s.jsx)(t.code,{children:"storage !== compute"})," but if it were as easy, then I could distribute complex scientific simulations, and revive them years later, and they would \u201cjust work\u201d."]}),"\n",(0,s.jsx)(t.h2,{id:"f72739ff70d843c7b655beb4d3c9c218",children:"References"}),"\n",(0,s.jsxs)(t.h3,{id:"5ff5b92126b14c0cb53ba25f3a9f00d3",children:["[1] ",(0,s.jsx)(t.strong,{children:"How data is lost in the cloud"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://spanning.com/blog/how-data-is-lost-in-the-cloud/",children:"https://spanning.com/blog/how-data-is-lost-in-the-cloud/"})}),"\n",(0,s.jsxs)(t.h3,{id:"7d4f1319505a45ddb4c4b1a2e8c47ceb",children:["[2] ",(0,s.jsx)(t.strong,{children:"Mechanisms of ionizing-radiation resistance"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Deinococcus_radiodurans",children:"https://en.wikipedia.org/wiki/Deinococcus_radiodurans"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6213:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>n});var s=o(959);const a={},i=s.createContext(a);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);