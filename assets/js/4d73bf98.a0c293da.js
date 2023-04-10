"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[341],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(s,".").concat(p)]||d[p]||f[p]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(1163),o=(n(9496),n(9613));const a={title:"Justfiles - universal command control",sidebar_position:0,slug:"/one-justfile-to-bind-them-all"},l="justfiles are part of the golden three",i={permalink:"/blog/one-justfile-to-bind-them-all",source:"@site/blog/blog/one-justfile-to-bind-them-all.md",title:"Justfiles - universal command control",description:"Just Words of Wisdom (To Myself)",date:"2023-04-10T23:29:22.000Z",formattedDate:"April 10, 2023",tags:[],readingTime:.575,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Justfiles - universal command control",sidebar_position:0,slug:"/one-justfile-to-bind-them-all"},prevItem:{title:"How this blog is automated",permalink:"/blog/how-this-blog-is-automated"},nextItem:{title:"Publications",permalink:"/blog/publications"}},s={authorsImageUrls:[]},c=[{value:"Just Words of Wisdom (To Myself)",id:"a660199f26954368939f6ff59ee255ae",level:2},{value:"Always include the full path of commands",id:"d2d23cebe20b4d158daa8400e3cdf9ac",level:3}],u={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:'flowchart LR\n    subgraph g [golden three]\n        direction LR\n        j[justfiles]\n        d[deno]\n        docker[docker]\n        j --\x3e d --\x3e docker --\x3e j\n    end\n  click j "/blog/one-justfile-to-bind-them-all"\n  click d "/blog/deno-and-tool-ecosystems"\n  click docker "/blog/docker-wasm-web-containers"'}),(0,o.kt)("h2",{id:"a660199f26954368939f6ff59ee255ae"},"Just Words of Wisdom (To Myself)"),(0,o.kt)("h3",{id:"d2d23cebe20b4d158daa8400e3cdf9ac"},"Always include the full path of commands"),(0,o.kt)("p",null,"If you document something with what ","<","command",">"," you should run, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# And then you type: 'just <command>'\n")),(0,o.kt)("p",null,"but you are ",(0,o.kt)("inlineCode",{parentName:"p"},"</over/here>")," but you have to be ",(0,o.kt)("inlineCode",{parentName:"p"},"</somewhere/else>")," then please include the full path so there is never any doubt and you don\u2019t have to go ",(0,o.kt)("inlineCode",{parentName:"p"},"fd"),"'ing: ",(0,o.kt)("inlineCode",{parentName:"p"},"'</be/specific> just <command>'"),". It doesn\u2019t have to be this exact formula, but try to remove this kind of friction."))}f.isMDXComponent=!0}}]);