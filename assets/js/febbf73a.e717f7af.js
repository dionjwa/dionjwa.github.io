"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[5384],{2582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(1527),r=t(6213);const s={title:"Docker and wasm",sidebar_position:4,slug:"/docker-wasm-web-containers",authors:["dion"]},a=void 0,i={permalink:"/blog/docker-wasm-web-containers",source:"@site/blog/blog/docker-wasm-web-containers.md",title:"Docker and wasm",description:"For building any project, you just need:",date:"2024-03-10T00:48:55.929Z",formattedDate:"March 10, 2024",tags:[],hasTruncateMarker:!1,authors:[{name:"Dion Whitehead",title:"Metapages Inventor",url:"https://evolvedeeptimecomplex.systems/",imageURL:"https://github.com/dionjwa.png",key:"dion"}],frontMatter:{title:"Docker and wasm",sidebar_position:4,slug:"/docker-wasm-web-containers",authors:["dion"]},unlisted:!1,prevItem:{title:"The golden trifecta- justfiles, deno, and docker",permalink:"/blog/the-golden-three-just-deno-docker"},nextItem:{title:"Deno is part of the golden three",permalink:"/blog/deno-and-tool-ecosystems"}},d={authorsImageUrls:[void 0]},c=[{value:"Wasm",id:"544990805fd546a599ad5b7e6e5cd31e",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.mermaid,{value:'flowchart LR\n\t\n    %%subgraph g [golden three]\n        %%direction LR\n        j[justfiles]\n        d[deno]\n        docker[docker]\n        j --\x3e d --\x3e docker --\x3e j\n    %%end\n  click j "/one-justfile-to-bind-them-all"\n  click d "/deno-and-tool-ecosystems"\n  click docker "/docker-wasm-web-containers"'}),"\n",(0,o.jsx)(n.p,{children:"For building any project, you just need:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["a platform agnostic reproducible environment: ",(0,o.jsx)(n.code,{children:"docker"})]}),"\n",(0,o.jsxs)(n.li,{children:["an entrypoint to display and run commands: ",(0,o.jsx)(n.a,{href:"https://github.com/casey/just",children:(0,o.jsx)(n.code,{children:"just"})})]}),"\n",(0,o.jsxs)(n.li,{children:["a way to share/update scripts: ",(0,o.jsx)(n.code,{children:"deno"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The requirement is not just for one project in a single point in time, it\u2019s for as MANY projects as possible over DEEP time. That\u2019s why the setup has to be ",(0,o.jsx)(n.strong,{children:"simple"}),", reproducible, and sharable (bespoke things fade into the complexity barrier quicker)"]}),"\n",(0,o.jsx)(n.h2,{id:"544990805fd546a599ad5b7e6e5cd31e",children:"Wasm"}),"\n",(0,o.jsx)(n.p,{children:"This will be a game changer: super fast to deploy, arbitrary code, running at the edge or the browser, compiled from pretty much any language."}),"\n",(0,o.jsx)(n.p,{children:"My prediction is that WASM will take over edge compute, and even heavy workloads."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},6213:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(959);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);