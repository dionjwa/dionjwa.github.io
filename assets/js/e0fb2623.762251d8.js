"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[564],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(8957),o=(r(9496),r(9613));const a={title:"Docker and wasm",sidebar_position:3,slug:"/docker-wasm-web-containers"},i=void 0,l={permalink:"/blog/docker-wasm-web-containers",source:"@site/blog/blog/docker-wasm-web-containers.md",title:"Docker and wasm",description:"For building any project, you just need:",date:"2023-09-22T20:34:44.460Z",formattedDate:"September 22, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Docker and wasm",sidebar_position:3,slug:"/docker-wasm-web-containers"},prevItem:{title:"The golden trifecta- justfiles, deno, and docker",permalink:"/blog/the-golden-three-just-deno-docker"},nextItem:{title:"Deno is part of the golden three",permalink:"/blog/deno-and-tool-ecosystems"}},c={authorsImageUrls:[]},s=[{value:"Wasm",id:"544990805fd546a599ad5b7e6e5cd31e",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:'flowchart LR\n    subgraph g [golden three]\n        direction LR\n        j[justfiles]\n        d[deno]\n        docker[docker]\n        j --\x3e d --\x3e docker --\x3e j\n    end\n  click j "/one-justfile-to-bind-them-all"\n  click d "/deno-and-tool-ecosystems"\n  click docker "/docker-wasm-web-containers"'}),(0,o.kt)("p",null,"For building any project, you just need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a platform agnostic reproducible environment: ",(0,o.kt)("inlineCode",{parentName:"li"},"docker")),(0,o.kt)("li",{parentName:"ul"},"an entrypoint to display and run commands: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/casey/just"},(0,o.kt)("inlineCode",{parentName:"a"},"just"))),(0,o.kt)("li",{parentName:"ul"},"a way to share/update scripts: ",(0,o.kt)("inlineCode",{parentName:"li"},"deno"))),(0,o.kt)("p",null,"The requirement is not just for one project in a single point in time, it\u2019s for as MANY projects as possible over DEEP time. That\u2019s why the setup has to be ",(0,o.kt)("strong",{parentName:"p"},"simple"),", reproducible, and sharable (bespoke things fade into the complexity barrier quicker)"),(0,o.kt)("h2",{id:"544990805fd546a599ad5b7e6e5cd31e"},"Wasm"),(0,o.kt)("p",null,"This will be a game changer: super fast to deploy, arbitrary code, running at the edge or the browser, compiled from pretty much any language."),(0,o.kt)("p",null,"My prediction is that WASM will take over edge compute, and even heavy workloads."))}d.isMDXComponent=!0}}]);