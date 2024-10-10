"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[9678],{9984:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var t=s(1527),o=s(6213);const i={title:"Justfiles - universal command control",sidebar_position:2,slug:"/one-justfile-to-bind-them-all",authors:["dion"]},d="justfiles are part of the golden three {#91d4820bc6cc4164b589f63c0590793d}",l={permalink:"/blog/one-justfile-to-bind-them-all",source:"@site/blog/blog/one-justfile-to-bind-them-all.md",title:"Justfiles - universal command control",description:"b19d4c49d3a343cfa8398d2677e39bb7}",date:"2024-10-10T00:49:54.788Z",formattedDate:"October 10, 2024",tags:[],hasTruncateMarker:!1,authors:[{name:"Dion Whitehead",title:"Metapages Inventor",url:"https://evolvedeeptimecomplex.systems/",imageURL:"https://github.com/dionjwa.png",key:"dion"}],frontMatter:{title:"Justfiles - universal command control",sidebar_position:2,slug:"/one-justfile-to-bind-them-all",authors:["dion"]},unlisted:!1,prevItem:{title:"Deno is part of the golden three",permalink:"/blog/deno-and-tool-ecosystems"},nextItem:{title:"URL Configured Websites",permalink:"/blog/url-configured-websites"}},c={authorsImageUrls:[void 0]},r=[{value:"Enter <code>just</code>.",id:"7e62c704e1af4e32820f2f2de80273be",level:2},{value:"Sharing",id:"fd5d981cdca54b9fa96e60dba428c947",level:2},{value:"Just Words of Wisdom (To Myself) about <code>just</code> etiquette",id:"a660199f26954368939f6ff59ee255ae",level:2},{value:"Always include the full path of commands",id:"d2d23cebe20b4d158daa8400e3cdf9ac",level:3},{value:"Include links to important locations",id:"6b0c9c026c4a45678c754ae92ffb7d6b",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.mermaid,{value:'flowchart LR\n\t\n    %%subgraph g [golden three]\n        %%direction LR\n        j[justfiles]\n        d[deno]\n        docker[docker]\n        j --\x3e d --\x3e docker --\x3e j\n    %%end\n  click j "/one-justfile-to-bind-them-all"\n  click d "/deno-and-tool-ecosystems"\n  click docker "/docker-wasm-web-containers"'}),"\n",(0,t.jsxs)(n.h1,{id:"b19d4c49d3a343cfa8398d2677e39bb7",children:[(0,t.jsx)(n.a,{href:"https://just.systems/man/en/",children:(0,t.jsx)(n.code,{children:"just"})})," solves a set of complex problems:"]}),"\n",(0,t.jsx)(n.p,{children:"I want a single command to give me a CLI menu, where ever I am"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2362).Z+"",width:"1826",height:"484"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"I\u2019m tired, and forgetful, and I just want this repository to build or test or deploy, and I don\u2019t want to remember all the specifics, I just want to get things done and move on."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When you have multiple repositories you create scripts + tools for"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CI operations"}),"\n",(0,t.jsx)(n.li,{children:"Development"}),"\n",(0,t.jsx)(n.li,{children:"Testing"}),"\n",(0,t.jsx)(n.li,{children:"All kinds of other tasks"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You want to organise these commands, so you put them in a ",(0,t.jsx)(n.code,{children:"Make"})," file or some custom CLI thing."]}),"\n",(0,t.jsx)(n.p,{children:"But:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the custom thing isn\u2019t easily transferrable to other projects/repositories"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Make"})," is very specific, and has a bunch of ugly workarounds for doing simple things (e.g. ",(0,t.jsx)(n.code,{children:".PHONY"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"so you and up with a bunch of kludge."}),"\n",(0,t.jsxs)(n.h2,{id:"7e62c704e1af4e32820f2f2de80273be",children:["Enter ",(0,t.jsx)(n.a,{href:"https://just.systems/man/en/",children:(0,t.jsx)(n.code,{children:"just"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"just"})," is exactly what I needed:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"simple well formatted commands in any language"}),"\n",(0,t.jsx)(n.li,{children:"introspection"}),"\n",(0,t.jsx)(n.li,{children:"the utilities you need when munging strings/paths etc"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now ",(0,t.jsx)(n.strong,{children:"ALL"})," my projects have a ",(0,t.jsx)(n.code,{children:"justfile"})," in the root"]}),"\n",(0,t.jsx)(n.p,{children:"I expect the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Most common commands FIRST (ie. NOT alphabetical order)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dev"}),", ",(0,t.jsx)(n.code,{children:"test"}),", ",(0,t.jsx)(n.code,{children:"deploy"})," / ",(0,t.jsx)(n.code,{children:"publish"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Commands check for dependencies and libraries/modules at runtime, and automatically install if needed","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Don\u2019t make me write commands for no reason, there\u2019s no reason to not automatically install e.g. npm modules if they are missing."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"List various links e.g. to the github repo, to the published URL endpoint, to the docs"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["I alias ",(0,t.jsx)(n.code,{children:"just"})," to ",(0,t.jsx)(n.code,{children:"j"})," so that I am just ",(0,t.jsx)(n.code,{children:"j"}),"'ing everywhere. It\u2019s short, fast, and gets me reliably building/publishing even if I have forgotten all the details of the commands."]}),"\n",(0,t.jsx)(n.h2,{id:"fd5d981cdca54b9fa96e60dba428c947",children:"Sharing"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"just"})," on it\u2019s own doesn\u2019t solve the problem of sharing complex commands. That\u2019s where ",(0,t.jsx)(n.a,{href:"https://docs.deno.com/runtime/manual",children:(0,t.jsx)(n.code,{children:"deno"})})," comes in. It\u2019s a single binary, running Typescript. I know Typescript is not everyone\u2019s cup of tea, but it\u2019s typed, gets the job done, and the URL imports make sharing between repositories MUCH easier."]}),"\n",(0,t.jsx)(n.p,{children:"Basically before URL imports, I struggled with how to share complex build/publish/deploy scripts."}),"\n",(0,t.jsxs)(n.h2,{id:"a660199f26954368939f6ff59ee255ae",children:["Just Words of Wisdom (To Myself) about ",(0,t.jsx)(n.code,{children:"just"})," etiquette"]}),"\n",(0,t.jsx)(n.h3,{id:"d2d23cebe20b4d158daa8400e3cdf9ac",children:"Always include the full path of commands"}),"\n",(0,t.jsx)(n.p,{children:"If you document something with what <command> you should run, e.g."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# And then you type: 'just <command>'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["but you are ",(0,t.jsx)(n.code,{children:"</over/here>"})," but you have to be ",(0,t.jsx)(n.code,{children:"</somewhere/else>"})," then please include the full path so there is never any doubt and you don\u2019t have to go ",(0,t.jsx)(n.code,{children:"fd"}),"'ing: ",(0,t.jsx)(n.code,{children:"'</be/specific> just <command>'"}),". It doesn\u2019t have to be this exact formula, but try to remove this kind of friction."]}),"\n",(0,t.jsx)(n.h3,{id:"6b0c9c026c4a45678c754ae92ffb7d6b",children:"Include links to important locations"}),"\n",(0,t.jsx)(n.p,{children:"See the links at the bottom, they are a click away"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8056).Z+"",width:"1826",height:"484"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8056:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/1890867935-78ab13cf633661f25eefe1d5332f7342.png"},2362:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/91296038-78ab13cf633661f25eefe1d5332f7342.png"},6213:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var t=s(959);const o={},i=t.createContext(o);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);