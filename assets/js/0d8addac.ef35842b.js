"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[557],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(1163),o=(n(9496),n(9613));const a={title:"Deno is part of the golden three",sidebar_position:2,slug:"/deno-and-tool-ecosystems"},c=void 0,i={unversionedId:"Technical/deno-and-tool-ecosystems",id:"Technical/deno-and-tool-ecosystems",title:"Deno is part of the golden three",description:"",source:"@site/docs/Technical/deno-and-tool-ecosystems.md",sourceDirName:"Technical",slug:"/deno-and-tool-ecosystems",permalink:"/deno-and-tool-ecosystems",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deno is part of the golden three",sidebar_position:2,slug:"/deno-and-tool-ecosystems"},sidebar:"defaultSidebar",previous:{title:"Justfiles - universal command control",permalink:"/one-justfile-to-bind-them-all"},next:{title:"Docker and wasm",permalink:"/docker-wasm-web-containers"}},s={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:'flowchart LR\n    subgraph g [golden three]\n        direction LR\n        j[justfiles]\n        d[deno]\n        docker[docker]\n        j --\x3e d --\x3e docker --\x3e j\n    end\n  click j "/one-justfile-to-bind-them-all"\n  click d "/deno-and-tool-ecosystems"\n  click docker "/docker-wasm-web-containers"'}))}p.isMDXComponent=!0}}]);