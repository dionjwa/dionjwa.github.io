"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[4557],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(8957),r=(n(9496),n(9613));const a={title:"Deno is part of the golden three",sidebar_position:3,slug:"/deno-and-tool-ecosystems"},i=void 0,l={unversionedId:"Technical/deno-and-tool-ecosystems",id:"Technical/deno-and-tool-ecosystems",title:"Deno is part of the golden three",description:"479dc190b1644ccdac96e631b4b44a0d}",source:"@site/docs/Technical/deno-and-tool-ecosystems.md",sourceDirName:"Technical",slug:"/deno-and-tool-ecosystems",permalink:"/deno-and-tool-ecosystems",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Deno is part of the golden three",sidebar_position:3,slug:"/deno-and-tool-ecosystems"},sidebar:"defaultSidebar",previous:{title:"Justfiles - universal command control",permalink:"/one-justfile-to-bind-them-all"},next:{title:"Docker and wasm",permalink:"/docker-wasm-web-containers"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("mermaid",{value:'flowchart LR\n    subgraph g [golden three]\n        direction LR\n        j[justfiles]\n        d[deno]\n        docker[docker]\n        j --\x3e d --\x3e docker --\x3e j\n    end\n  click j "/one-justfile-to-bind-them-all"\n  click d "/deno-and-tool-ecosystems"\n  click docker "/docker-wasm-web-containers"'}),(0,r.kt)("h1",{id:"479dc190b1644ccdac96e631b4b44a0d"},"Deno: why it\u2019s good"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Problem:")," scripts and utilities written for one repository, and you want to share them with other repositories"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"python: it\u2019s painful, and tied to the python ecosystem. You have to publish etc which is slow",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this applies to most other languages"))),(0,r.kt)("li",{parentName:"ul"},"specific languages mostly require a lot of specific install/tooling")),(0,r.kt)("p",null,"With deno:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a single binary"),(0,r.kt)("li",{parentName:"ul"},"URL imports, so you don\u2019t ever have to manually install modules/libraries"),(0,r.kt)("li",{parentName:"ul"},"URL imports can point to anywhere, e.g. a github repo"),(0,r.kt)("li",{parentName:"ul"},"You can publish distinct packages, if you want, but you don\u2019t have to"),(0,r.kt)("li",{parentName:"ul"},"The entire npm ecosystem is available. Size matters.")),(0,r.kt)("p",null,"Having used it for a while now, it definitely fits well into my ability to create / build / deploy servers as quickly and simply as possible, allowing me to effectively maintain a larger set of deployable code than before."))}d.isMDXComponent=!0}}]);