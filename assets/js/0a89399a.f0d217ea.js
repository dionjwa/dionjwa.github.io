"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[678],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(1163),o=(n(9496),n(9613));const a={title:"justfiles to bind them",sidebar_position:0,slug:"/one-justfile-to-bind-them-all"},l="justfiles are part of the golden three",i={permalink:"/blog/one-justfile-to-bind-them-all",source:"@site/blog/blog/one-justfile-to-bind-them-all.md",title:"justfiles to bind them",description:"Just Words of Wisdom (To Myself)",date:"2023-04-10T05:28:34.000Z",formattedDate:"April 10, 2023",tags:[],readingTime:.575,hasTruncateMarker:!1,authors:[],frontMatter:{title:"justfiles to bind them",sidebar_position:0,slug:"/one-justfile-to-bind-them-all"},prevItem:{title:"deno is part of the golden three",permalink:"/blog/61b14da3-8e9f-4f33-b823-fb39965a6bd6"}},s={authorsImageUrls:[]},c=[{value:"Just Words of Wisdom (To Myself)",id:"a660199f26954368939f6ff59ee255ae",level:2},{value:"Always include the full path of commands",id:"d2d23cebe20b4d158daa8400e3cdf9ac",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mermaid"},"flowchart LR\n    subgraph g [golden three]\n        direction LR\n        j[justfiles]\n        d[deno]\n        docker[docker]\n        j --\x3e d --\x3e docker --\x3e j\n    end\n\n    click j https://www.notion.so/metapages/justfiles-to-bind-them-7b15587ae7a041b9acca4a65a1f30ea5?pvs=4\n    click d https://www.notion.so/metapages/deno-is-part-of-the-golden-three-61b14da38e9f4f33b823fb39965a6bd6?pvs=4\n    click docker https://www.notion.so/metapages/Docker-and-wasm-a61f5e7656224c91987e211375a28dd6?pvs=4\n")),(0,o.kt)("h2",{id:"a660199f26954368939f6ff59ee255ae"},"Just Words of Wisdom (To Myself)"),(0,o.kt)("h3",{id:"d2d23cebe20b4d158daa8400e3cdf9ac"},"Always include the full path of commands"),(0,o.kt)("p",null,"If you document something with what ","<","command",">"," you should run, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# And then you type: 'just <command>'\n")),(0,o.kt)("p",null,"but you are ",(0,o.kt)("inlineCode",{parentName:"p"},"</over/here>")," but you have to be ",(0,o.kt)("inlineCode",{parentName:"p"},"</somewhere/else>")," then please include the full path so there is never any doubt and you don\u2019t have to go ",(0,o.kt)("inlineCode",{parentName:"p"},"fd"),"'ing: ",(0,o.kt)("inlineCode",{parentName:"p"},"'</be/specific> just <command>'"),". It doesn\u2019t have to be this exact formula, but try to remove this kind of friction."))}p.isMDXComponent=!0}}]);