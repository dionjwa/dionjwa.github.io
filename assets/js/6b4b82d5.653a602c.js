"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[137],{9613:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2719:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(1163),r=(o(9496),o(9613));const a={title:"How this blog is automated",sidebar_position:3,slug:"/e03a55f0-1333-47cc-85a6-5f39e22a917a"},i=void 0,l={permalink:"/blog/e03a55f0-1333-47cc-85a6-5f39e22a917a",source:"@site/blog/blog/How-this-blog-is-automated.md",title:"How this blog is automated",description:"1. I write blog posts in notion, structured how I like",date:"2023-04-10T16:31:39.000Z",formattedDate:"April 10, 2023",tags:[],readingTime:1.08,hasTruncateMarker:!1,authors:[],frontMatter:{title:"How this blog is automated",sidebar_position:3,slug:"/e03a55f0-1333-47cc-85a6-5f39e22a917a"},prevItem:{title:"Docker and wasm",permalink:"/blog/a61f5e76-5622-4c91-987e-211375a28dd6"},nextItem:{title:"deno is part of the golden three",permalink:"/blog/61b14da3-8e9f-4f33-b823-fb39965a6bd6"}},s={authorsImageUrls:[]},u=[{value:"How it works",id:"1900a1e531c64d3ab4896817eefc7eba",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"I write blog posts in ",(0,r.kt)("a",{parentName:"li",href:"https://notion.so"},"notion"),", structured how I like"),(0,r.kt)("li",{parentName:"ol"},"Automatically ~15 minutes later the website + blog is generated from notion, using ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"docusaurus")," + ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sillsdev/docu-notion"},"docu-notion"),", and pushed to github pages"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("del",{parentName:"li"},"There\u2019s nothing I actually needed to do except write"))),(0,r.kt)("p",null,"That\u2019s it. I just write. The rest is automated."),(0,r.kt)("h3",{id:"1900a1e531c64d3ab4896817eefc7eba"},"How it works"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dionjwa/dionjwa.github.io"},"https://github.com/dionjwa/dionjwa.github.io")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},"flowchart LR\n    subgraph gh [github action every 30m]\n        direction LR\n        db[(notion.so)] --\x3e D[docu-notion]\n        D --\x3e ds(docusaurus)\n        ds --\x3e deploy[deploy to github pages ]\n\n    end\n  \n  click D https://github.com/sillsdev/docu-notion\n  click ds https://docusaurus.io/\n  click db https://www.notion.so\n")),(0,r.kt)("p",null,"A github action runs a few scripts commands:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sillsdev/docu-notion"},"docu-notion")," (and a root notion page) the docusaurus blog markdown is generated from specified notion pages"),(0,r.kt)("li",{parentName:"ol"},"The docusaurus website is built"),(0,r.kt)("li",{parentName:"ol"},"Then deployed to github pages")),(0,r.kt)("p",null,"It\u2019s otherwise tricky to find a set of tools for writing/publishing a blog+resume with the following requirements (for me):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"open source, or high data trust"),(0,r.kt)("li",{parentName:"ul"},"able to output from notion. I\u2019m too tired to convert to anything, like multiple publishing endpoints. I just want to write, and have everything be automated"),(0,r.kt)("li",{parentName:"ul"},"but also look good"),(0,r.kt)("li",{parentName:"ul"},"where i just write, and do absolutely nothing else. no saving, no publishing step."),(0,r.kt)("li",{parentName:"ul"},"but also everything is backed up, with full version history")))}d.isMDXComponent=!0}}]);