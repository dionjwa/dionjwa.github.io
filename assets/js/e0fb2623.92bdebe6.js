"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[564],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(8957),o=(r(9496),r(9613));const a={title:"Docker and wasm",sidebar_position:3,slug:"/docker-wasm-web-containers"},c=void 0,i={permalink:"/blog/docker-wasm-web-containers",source:"@site/blog/blog/docker-wasm-web-containers.md",title:"Docker and wasm",description:"",date:"2023-09-14T21:11:50.000Z",formattedDate:"September 14, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Docker and wasm",sidebar_position:3,slug:"/docker-wasm-web-containers"},prevItem:{title:"Deno is part of the golden three",permalink:"/blog/deno-and-tool-ecosystems"},nextItem:{title:"How this blog is automated",permalink:"/blog/how-this-blog-is-automated"}},s={authorsImageUrls:[]},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:"flowchart LR\n    subgraph g [golden three]\n        direction LR\n        j[justfiles]\n        d[deno]\n        docker[docker]\n        j --\x3e d --\x3e docker --\x3e j\n    end\n\n    click j https://www.notion.so/metapages/justfiles-to-bind-them-7b15587ae7a041b9acca4a65a1f30ea5?pvs=4\n    click d https://www.notion.so/metapages/deno-is-part-of-the-golden-three-61b14da38e9f4f33b823fb39965a6bd6?pvs=4\n    click docker https://www.notion.so/metapages/Docker-and-wasm-a61f5e7656224c91987e211375a28dd6?pvs=4"}))}d.isMDXComponent=!0}}]);