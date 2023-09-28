"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[341],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(8957),o=(n(9496),n(9613));const r={title:"Justfiles - universal command control",sidebar_position:2,slug:"/one-justfile-to-bind-them-all"},l="[justfiles](https://just.systems/man/en/) are part of the golden three",i={permalink:"/blog/one-justfile-to-bind-them-all",source:"@site/blog/blog/one-justfile-to-bind-them-all.md",title:"Justfiles - universal command control",description:"b19d4c49d3a343cfa8398d2677e39bb7}",date:"2023-09-28T16:59:21.315Z",formattedDate:"September 28, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Justfiles - universal command control",sidebar_position:2,slug:"/one-justfile-to-bind-them-all"},prevItem:{title:"Deno is part of the golden three",permalink:"/blog/deno-and-tool-ecosystems"},nextItem:{title:"URL Configured Websites",permalink:"/blog/url-configured-websites"}},s={authorsImageUrls:[]},u=[{value:"Enter <code>just</code>.",id:"7e62c704e1af4e32820f2f2de80273be",level:2},{value:"Sharing",id:"fd5d981cdca54b9fa96e60dba428c947",level:2},{value:"Just Words of Wisdom (To Myself) about <code>just</code> etiquette",id:"a660199f26954368939f6ff59ee255ae",level:2},{value:"Always include the full path of commands",id:"d2d23cebe20b4d158daa8400e3cdf9ac",level:3},{value:"Include links to important locations",id:"6b0c9c026c4a45678c754ae92ffb7d6b",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:'flowchart LR\n    subgraph g [golden three]\n        direction LR\n        j[justfiles]\n        d[deno]\n        docker[docker]\n        j --\x3e d --\x3e docker --\x3e j\n    end\n  click j "/one-justfile-to-bind-them-all"\n  click d "/deno-and-tool-ecosystems"\n  click docker "/docker-wasm-web-containers"'}),(0,o.kt)("h1",{id:"b19d4c49d3a343cfa8398d2677e39bb7"},(0,o.kt)("a",{parentName:"h1",href:"https://just.systems/man/en/"},(0,o.kt)("inlineCode",{parentName:"a"},"just"))," solves a set of complex problems:"),(0,o.kt)("p",null,"I want a single command to give me a CLI menu, where ever I am"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4318).Z,width:"1826",height:"484"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"I\u2019m tired, and forgetful, and I just want this repository to build or test or deploy, and I don\u2019t want to remember all the specifics, I just want to get things done and move on.")),(0,o.kt)("p",null,"When you have multiple repositories you create scripts + tools for "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CI operations"),(0,o.kt)("li",{parentName:"ul"},"Development"),(0,o.kt)("li",{parentName:"ul"},"Testing"),(0,o.kt)("li",{parentName:"ul"},"All kinds of other tasks")),(0,o.kt)("p",null,"You want to organise these commands, so you put them in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Make")," file or some custom CLI thing."),(0,o.kt)("p",null,"But: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the custom thing isn\u2019t easily transferrable to other projects/repositories"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Make")," is very specific, and has a bunch of ugly workarounds for doing simple things (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},".PHONY"),")")),(0,o.kt)("p",null,"so you and up with a bunch of kludge."),(0,o.kt)("h2",{id:"7e62c704e1af4e32820f2f2de80273be"},"Enter ",(0,o.kt)("a",{parentName:"h2",href:"https://just.systems/man/en/"},(0,o.kt)("inlineCode",{parentName:"a"},"just")),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"just")," is exactly what I needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"simple well formatted commands in any language"),(0,o.kt)("li",{parentName:"ul"},"introspection"),(0,o.kt)("li",{parentName:"ul"},"the utilities you need when munging strings/paths etc")),(0,o.kt)("p",null,"Now ",(0,o.kt)("strong",{parentName:"p"},"ALL")," my projects have a ",(0,o.kt)("inlineCode",{parentName:"p"},"justfile")," in the root"),(0,o.kt)("p",null,"I expect the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Most common commands FIRST (ie. NOT alphabetical order)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"deploy")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"publish")))),(0,o.kt)("li",{parentName:"ul"},"Commands check for dependencies and libraries/modules at runtime, and automatically install if needed",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Don\u2019t make me write commands for no reason, there\u2019s no reason to not automatically install e.g. npm modules if they are missing."))),(0,o.kt)("li",{parentName:"ul"},"List various links e.g. to the github repo, to the published URL endpoint, to the docs")),(0,o.kt)("p",null,"I alias ",(0,o.kt)("inlineCode",{parentName:"p"},"just")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"j")," so that I am just ",(0,o.kt)("inlineCode",{parentName:"p"},"j"),"'ing everywhere. It\u2019s short, fast, and gets me reliably building/publishing even if I have forgotten all the details of the commands."),(0,o.kt)("h2",{id:"fd5d981cdca54b9fa96e60dba428c947"},"Sharing"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"just")," on it\u2019s own doesn\u2019t solve the problem of sharing complex commands. That\u2019s where ",(0,o.kt)("a",{parentName:"p",href:"https://docs.deno.com/runtime/manual"},(0,o.kt)("inlineCode",{parentName:"a"},"deno"))," comes in. It\u2019s a single binary, running Typescript. I know Typescript is not everyone\u2019s cup of tea, but it\u2019s typed, gets the job done, and the URL imports make sharing between repositories MUCH easier. "),(0,o.kt)("p",null,"Basically before URL imports, I struggled with how to share complex build/publish/deploy scripts."),(0,o.kt)("h2",{id:"a660199f26954368939f6ff59ee255ae"},"Just Words of Wisdom (To Myself) about ",(0,o.kt)("inlineCode",{parentName:"h2"},"just")," etiquette"),(0,o.kt)("h3",{id:"d2d23cebe20b4d158daa8400e3cdf9ac"},"Always include the full path of commands"),(0,o.kt)("p",null,"If you document something with what ","<","command",">"," you should run, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# And then you type: 'just <command>'\n")),(0,o.kt)("p",null,"but you are ",(0,o.kt)("inlineCode",{parentName:"p"},"</over/here>")," but you have to be ",(0,o.kt)("inlineCode",{parentName:"p"},"</somewhere/else>")," then please include the full path so there is never any doubt and you don\u2019t have to go ",(0,o.kt)("inlineCode",{parentName:"p"},"fd"),"'ing: ",(0,o.kt)("inlineCode",{parentName:"p"},"'</be/specific> just <command>'"),". It doesn\u2019t have to be this exact formula, but try to remove this kind of friction."),(0,o.kt)("h3",{id:"6b0c9c026c4a45678c754ae92ffb7d6b"},"Include links to important locations"),(0,o.kt)("p",null,"See the links at the bottom, they are a click away"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4011).Z,width:"1826",height:"484"})))}c.isMDXComponent=!0},4011:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1890867935-78ab13cf633661f25eefe1d5332f7342.png"},4318:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/91296038-78ab13cf633661f25eefe1d5332f7342.png"}}]);