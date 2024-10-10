"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[5945],{8526:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=s(1527),i=s(6213);const n={title:"How this blog is automated",sidebar_position:6,slug:"/how-this-blog-is-automated",authors:["dion"]},a="I just write. The rest is automated. {#2ba2fcbe9bf4410bb57fcdb79ac603e0}",l={permalink:"/blog/how-this-blog-is-automated",source:"@site/blog/blog/how-this-blog-is-automated.md",title:"How this blog is automated",description:"Steps (actually, there is only one step: writing)",date:"2024-10-10T00:50:18.660Z",formattedDate:"October 10, 2024",tags:[],hasTruncateMarker:!1,authors:[{name:"Dion Whitehead",title:"Metapages Inventor",url:"https://evolvedeeptimecomplex.systems/",imageURL:"https://github.com/dionjwa.png",key:"dion"}],frontMatter:{title:"How this blog is automated",sidebar_position:6,slug:"/how-this-blog-is-automated",authors:["dion"]},unlisted:!1,prevItem:{title:"Metapages- publish, embed, edit, share composable complete applications",permalink:"/blog/metapages-scientific-embed"},nextItem:{title:"The golden trifecta- justfiles, deno, and docker",permalink:"/blog/the-golden-three-just-deno-docker"}},r={authorsImageUrls:[void 0]},d=[{value:"Steps (actually, there is only one step: writing)",id:"25ebe3c7689f477ca278e5b101e0a8fd",level:3},{value:"How it works",id:"1900a1e531c64d3ab4896817eefc7eba",level:3}];function c(e){const t={a:"a",del:"del",h1:"h1",h3:"h3",hr:"hr",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.mermaid,{value:'flowchart LR\n\tmermaid["mermaid diagrams to navigate posts"]\n\tblog["automated this blog"]\n\tmermaid --\x3e blog\n  click blog "/how-this-blog-is-automated"\n  click mermaid "https://www.notion.so/metapages/Use-mermaid-diagrams-to-navigate-your-docs-or-blog-6d45b4ca7c3d40e699c63c29e306a871?pvs=4"\n'}),"\n",(0,o.jsx)(t.h3,{id:"25ebe3c7689f477ca278e5b101e0a8fd",children:"Steps (actually, there is only one step: writing)"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["I write blog posts in ",(0,o.jsx)(t.a,{href:"https://notion.so/",children:"notion"}),", structured how I like"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Automatically"})," ~15 minutes later the website + blog is generated from notion, using ",(0,o.jsx)(t.a,{href:"https://docusaurus.io/",children:"docusaurus"})," + ",(0,o.jsx)(t.a,{href:"https://github.com/sillsdev/docu-notion",children:"docu-notion"}),", and pushed to github pages"]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.del,{children:"There\u2019s nothing I actually needed to do except write"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"That\u2019s it. I just write. The rest is automated."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:s(2039).Z+"",width:"1634",height:"1372"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"1900a1e531c64d3ab4896817eefc7eba",children:"How it works"}),"\n",(0,o.jsxs)(t.p,{children:["Source: ",(0,o.jsx)(t.a,{href:"https://github.com/dionjwa/dionjwa.github.io",children:"https://github.com/dionjwa/dionjwa.github.io"})]}),"\n",(0,o.jsx)(t.mermaid,{value:'flowchart LR\n    subgraph gh [github action every 30m]\n        direction LR\n        db[(notion.so)] --\x3e D[docu-notion]\n        D --\x3e ds(docusaurus)\n        ds --\x3e deploy[deploy to github pages ]\n\n    end\n  \n  click D "https://github.com/sillsdev/docu-notion"\n  click ds "https://docusaurus.io/"\n  click db "https://www.notion.so"'}),"\n",(0,o.jsx)(t.p,{children:"A github action runs a few scripts commands:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Using ",(0,o.jsx)(t.a,{href:"https://github.com/sillsdev/docu-notion",children:"docu-notion"})," (and a root notion page) the docusaurus blog markdown is generated from specified notion pages","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["I also use a custom set of plugins for various pieces: ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/@metapages/docu-notion-plugins",children:"https://www.npmjs.com/package/@metapages/docu-notion-plugins"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"The docusaurus website is built"}),"\n",(0,o.jsx)(t.li,{children:"Then deployed to github pages"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"It\u2019s otherwise tricky to find a set of tools for writing/publishing a blog+resume with the following requirements (for me):"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"open source, or high data trust"}),"\n",(0,o.jsx)(t.li,{children:"able to output from notion. I\u2019m too tired to convert to anything, like multiple publishing endpoints. I just want to write, and have everything be automated"}),"\n",(0,o.jsx)(t.li,{children:"but also look good"}),"\n",(0,o.jsx)(t.li,{children:"where i just write, and do absolutely nothing else. no saving, no publishing step."}),"\n",(0,o.jsx)(t.li,{children:"but also everything is backed up, with full version history"}),"\n"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h1,{id:"f3d0a352838849cf962de872111c8cfb",children:"Published examples in the wild"}),"\n",(0,o.jsxs)("div",{className:"custom-docunotion-row",children:[(0,o.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,o.jsx)("p",{children:(0,o.jsx)("img",{src:s(5207).Z})})}),(0,o.jsx)("div",{className:"custom-docunotion-row-cell",children:(0,o.jsx)("p",{children:(0,o.jsx)("img",{src:s(866).Z})})})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:s(541).Z+"",width:"1894",height:"842"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},866:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/1377012718-19ad213c9b14cde64df94128193293ba.png"},5207:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/880052731-9b4b532030f34fe6f4a2cea892aead94.png"},541:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/1470369498-5e7c3439fbbda36bbb8505c30af3b41a.png"},2039:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/1555530775-a63260f98858e105c8f1ea7e47308fab.png"},6213:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>a});var o=s(959);const i={},n=o.createContext(i);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);