"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[2322],{1807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var i=n(1527),o=n(6213);const s={title:"Connect compute to my tasks- it\u2019s too complicated",sidebar_position:4,slug:"/cloud-compute-too-complicated"},c=void 0,r={id:"Scientific-Publishing/cloud-compute-too-complicated",title:"Connect compute to my tasks- it\u2019s too complicated",description:"2023-11-28",source:"@site/docs/Scientific-Publishing/cloud-compute-too-complicated.md",sourceDirName:"Scientific-Publishing",slug:"/cloud-compute-too-complicated",permalink:"/cloud-compute-too-complicated",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Connect compute to my tasks- it\u2019s too complicated",sidebar_position:4,slug:"/cloud-compute-too-complicated"},sidebar:"defaultSidebar",previous:{title:"A New Kind of Scientific Publishing",permalink:"/a-new-kind-of-scientific-publishing"},next:{title:"The Internet Archive and URL configured websites",permalink:"/internet-archive-url-configured-websites"}},l={},a=[{value:"We have plenty of options for connecting compute to our tasks/simulations, but they are all complicated and not easily compatible",id:"d6395cc828f44649b3e04738dfafc668",level:2},{value:"Problems",id:"7605962b12bc4f87b25b52bf767afd37",level:3},{value:"Proposed solution",id:"ac8127616c354e79870d58d9677b0517",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"2023-11-28"}),"\n",(0,i.jsx)(t.mermaid,{value:'flowchart LR\n\tst["cloud data"]\n\tc["compute"]\n  u["workflows as URLs"]\n  sim["sharable simulations"]\n\tdt["preserved through deep time"]\n\n\tst --\x3e u\n\tc --\x3e u --\x3e sim --\x3e dt\n  click st "/blob-storage-is-solved-but-what-about-compute"\n  click u "/url-configured-websites"\n  click c "/cloud-compute-too-complicated"\n  style c fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click dt "/internet-archive-url-configured-websites"\n  click sim "/sharable-simulations"'}),"\n",(0,i.jsx)(t.h2,{id:"d6395cc828f44649b3e04738dfafc668",children:"We have plenty of options for connecting compute to our tasks/simulations, but they are all complicated and not easily compatible"}),"\n",(0,i.jsx)(t.p,{children:"I want to run some batch compute for some tasks, it might be big, it might be small. There are so many choices, and"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"kubernetes"}),"\n",(0,i.jsx)(t.li,{children:"slurm"}),"\n",(0,i.jsx)(t.li,{children:"condor"}),"\n",(0,i.jsx)(t.li,{children:"nomad"}),"\n",(0,i.jsx)(t.li,{children:"AWS batch"}),"\n",(0,i.jsx)(t.li,{children:"Google similar thing"}),"\n",(0,i.jsx)(t.li,{children:"Azure (I don\u2019t even know but surprised if they don\u2019t have a similar thing)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"7605962b12bc4f87b25b52bf767afd37",children:"Problems"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"they require infrastructure skills, or an institution or group that has that support"}),"\n",(0,i.jsx)(t.li,{children:"adhoc solutions do not last"}),"\n",(0,i.jsx)(t.li,{children:"the configurations are not transferable without significant work"}),"\n",(0,i.jsx)(t.li,{children:"it\u2019s unlikely that any single solution above will dominate, reducing the likelihood of simper solutions for individuals and researchers"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"ac8127616c354e79870d58d9677b0517",children:"Proposed solution"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Users do not think much about where the compute is performed. It"})," ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"just works."})})]}),"\n",(0,i.jsx)(t.p,{children:"The batch compute job specification is entirely encoded in the URL. For example:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"https:"})," // ",(0,i.jsx)(t.code,{children:"<origin>"})," / ",(0,i.jsx)(t.code,{children:"#?"})," ",(0,i.jsx)(t.code,{children:"definition=<base64 encoded JSON>"})]}),"\n",(0,i.jsx)(t.p,{children:"The definition can start with simple docker container jobs:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"job:\n  type: docker\n  image: <image-name>\n  command: run-script.sh\n  resources:\n    cpu: 1000\n    memory: 2gb\n  ttl: 1h \n"})}),"\n",(0,i.jsx)(t.p,{children:"The minimal example above is encoded in the URL. The origin can be dynamically changed, and represents the location that will handle actual executing the above job definition."}),"\n",(0,i.jsxs)(t.p,{children:["Job inputs and outputs? Handled by the ",(0,i.jsx)(t.a,{href:"https://docs.metapage.io/docs/npm-metapage",children:"metapage library"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Advantages:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You can click on the link, and immediately test, and edit the definition"}),"\n",(0,i.jsxs)(t.li,{children:["Agnostic of ",(0,i.jsx)(t.em,{children:"where"})," the job is executed, as the origin can be changed without losing the definition"]}),"\n",(0,i.jsx)(t.li,{children:"The web is durable and everyone has a portal/environment (the browser) the will reliably view and execute the above definition"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The backend of exactly where the docker image is run is an implementation detail. For starting out, users can simply connect their own personal computers, test and iterate, then copy the link to a domain with access to more resources: ",(0,i.jsx)(t.a,{href:"https://docker.mtfm.io/#?tab=6",children:"https://docker.mtfm.io/#?tab=6"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6213:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var i=n(959);const o={},s=i.createContext(o);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);