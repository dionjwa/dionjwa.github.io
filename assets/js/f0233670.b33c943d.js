"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[6446],{6759:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var A=i(1527),s=i(6213);const a={title:"Metapages- publish, embed, edit, share composable complete applications",sidebar_position:7,slug:"/metapages-scientific-embed",authors:["dion"]},n=void 0,o={permalink:"/blog/metapages-scientific-embed",source:"@site/blog/blog/metapages-scientific-embed.md",title:"Metapages- publish, embed, edit, share composable complete applications",description:"This is a deeper dive into an example metapage, that runs python, creates plots using matplotlib.",date:"2024-09-01T00:50:33.540Z",formattedDate:"September 1, 2024",tags:[],hasTruncateMarker:!1,authors:[{name:"Dion Whitehead",title:"Metapages Inventor",url:"https://evolvedeeptimecomplex.systems/",imageURL:"https://github.com/dionjwa.png",key:"dion"}],frontMatter:{title:"Metapages- publish, embed, edit, share composable complete applications",sidebar_position:7,slug:"/metapages-scientific-embed",authors:["dion"]},unlisted:!1,prevItem:{title:"A New Kind of Scientific Publishing",permalink:"/blog/a-new-kind-of-scientific-publishing"},nextItem:{title:"How this blog is automated",permalink:"/blog/how-this-blog-is-automated"}},l={authorsImageUrls:[void 0]},h=[{value:"The example published application",id:"86b0b533b2194720aba8d8657a03fb7b",level:2}];function d(e){const t={a:"a",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(t.p,{children:["This is a deeper dive into an example ",(0,A.jsx)(t.a,{href:"https://docs.metapage.io/docs",children:"metapage"}),", that runs python, creates plots using ",(0,A.jsx)(t.a,{href:"https://matplotlib.org/",children:"matplotlib"}),"."]}),"\n",(0,A.jsx)(t.p,{children:"Concepts:"}),"\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsxs)(t.li,{children:["The ",(0,A.jsx)(t.strong,{children:"entire"})," user created application exists ",(0,A.jsx)(t.em,{children:"completely"})," in the URL","\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsx)(t.li,{children:"When you edit the application below, you are editing the URL"}),"\n",(0,A.jsx)(t.li,{children:"Obviously there is a limit, but it\u2019s quite high"}),"\n",(0,A.jsx)(t.li,{children:"The URL can be shared, and then edited by someone else"}),"\n",(0,A.jsx)(t.li,{children:"If you have this URL, you own it. I do not store any application state, in this example at least"}),"\n"]}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["Each of the boxes is a ",(0,A.jsx)(t.a,{href:"https://docs.metapage.io/docs/what-is-a-metaframe",children:(0,A.jsx)(t.em,{children:"metaframe"})}),(0,A.jsx)(t.em,{children:","})," which is a term used here to mean a separate webpage URL, with a small library to listen to inputs and send outputs (because the application is a graph of ",(0,A.jsx)(t.a,{href:"https://docs.metapage.io/docs/what-is-a-metaframe",children:(0,A.jsx)(t.em,{children:"metaframes"})}),")","\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsxs)(t.li,{children:["Because the components are also just URLs, and those URLs are ",(0,A.jsx)(t.em,{children:"also"})," editable, you can edit the components and the changes are persisted in the main parent URL"]}),"\n"]}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["You can edit the global configuration","\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsxs)(t.li,{children:["This uses an ",(0,A.jsx)(t.a,{href:"https://editor.mtfm.io/",children:"editor metaframe"})," to do this"]}),"\n"]}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["You can edit the individual components","\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsx)(t.li,{children:"Metaframes have their own internal editing overlays/menus"}),"\n"]}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["You can see the graph layout","\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsxs)(t.li,{children:["This uses an ",(0,A.jsx)(t.a,{href:"https://app.metapage.io/mf/edit?mfk=vi5y75frll",children:"mermaid metaframe"})," to do this"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(t.h2,{id:"86b0b533b2194720aba8d8657a03fb7b",children:"The example published application"}),"\n",(0,A.jsx)(t.p,{children:"This application runs python (in the browser via pyodide), and generates some plots, sends those as outputs to components that just display images."}),"\n",(0,A.jsx)(t.p,{children:"You can take this, modify it, and share it. No backend servers needed (except for serving plain static assets). Embed in your blog, group websites, company docs, etc."}),"\n",(0,A.jsx)(t.p,{children:"Click any of the hamburger menus to edit the individual components:"}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{src:i(343).Z+"",width:"112",height:"108"})}),"\n",(0,A.jsx)("iframe",{scrolling:"no",allow:"fullscreen *; camera *; speaker *;",style:{width:"100%",height:"370px",overflow:"hidden"},src:"https://app.metapage.io/dion/py.mtfm.io-example-01/"})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(d,{...e})}):d(e)}},343:(e,t,i)=>{i.d(t,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABsCAYAAACy9DarAAABXmlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGDiSSwoyGFhYGDIzSspCnJ3UoiIjFJgf87ADYQ8DMIMconJxQWOAQE+QCUMMBoVfLvGwAiiL+uCzLLdpKe+NmHS5SCNue9jI0W2Y6pHAVwpqcXJQPoPEJskFxSVMDAwGgDZAeUlBSB2A5AtUgR0FJA9BcROh7BXgNhJEPYesJqQIGcg+wKQLZCckZgCZD8AsnWSkMTTkdi5OaXJUDeAXM+TmhcaDKQlgFiGwYXBlcEHCBUYQhmMGMyB2JghkMEVhx4TsB5nhnyGAoZKhiKGTIZ0hgyGEqBuR6BIAUMOQyqQ7cmQx5DMoMegA2QbMRiAzASFNXoYIsRamhgYbP4DGecRYr5AvGky0OpqhJhqCNA7eQwMR58UJBYlwkOW8RtLcZqxEYTNDYwH1mn//38OZ2Bg12Rg+Hv9///f2////7uMgYH5FgPDgW8AKl1jw4U3q3kAAACKZVhJZk1NACoAAAAIAAQBGgAFAAAAAQAAAD4BGwAFAAAAAQAAAEYBKAADAAAAAQACAACHaQAEAAAAAQAAAE4AAAAAAAAAkAAAAAEAAACQAAAAAQADkoYABwAAABIAAAB4oAIABAAAAAEAAABwoAMABAAAAAEAAABsAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdO4y9B8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAHWaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjEwODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMTI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTeqdNQAAABxpRE9UAAAAAgAAAAAAAAA2AAAAKAAAADYAAAA2AAABceiYLw8AAAE9SURBVHgB7JgxCoNAFAXXO9h6NS9i7UW8mq29ZUICdls8ZIs/MGlCwkaGmTwhme77/jQfWAOTAbHt/uAGZPdrBjQg3AAc3wUaEG4Aju8CDQg3AMd3gQaEG4Dju0ADwg3A8V2gAeEG4Pgu0IBwA3B8F2hAuAE4vgs0INwAHN8FGhBuAI7vAg0INwDHd4EGhBuA47tAA8INwPFdoAHhBuD4LtCAcANwfBdoQLgBOL4LNCDcABzfBRpwjIHjONq2be26rjEXHHSVeZ7bvu9tXddBVxx7mTILXJalXLxH9S/ieZ7Py1LPBgxyGDCQ5C00kNQ5UmaBHTbfCgwYMJBU+YgBK9cJ2AwYSKp8xICV6wRsBgwkVT5iwMp1AjYDBpIqHykT0B/y774mZQL6X6gB3xkIPuV/oYEkb6GBpM6RLwAAAP//nagvXgAAAWdJREFU7dwxigJBAETRnjtM6tW8yMReZK5mOvHKssHKLpgJ/mCC3/BNxLFoinq0ocvj8fgdvaZdYAlwWrv/4gHO7TcCDHDyBSav3w0McPIFJq/fDQzwnAX2fR/bto3jOM458KRT1nUdt9ttXK/Xk0489xjNDbxcLjq819R/iPf7/fVR9R4g4AgQjNRPKBjpTURzA9906xFYIEAwkjkSoFkHdAsQjGSOBGjWAd0CBCOZIwGadUC3AMFI5kiAZh3QLUAwkjkSoFkHdAsQjGSOBGjWAd0CBCOZIwGadUC3AMFI5kiAZh3QLUAwkjkSoFkHdAsQjGSOBGjWAd0CBCOZIwGadUC3AMFI5kiAZh3QLUAwkjkSoFkHdAsQjGSOBGjWAd0CBCOZIwGadUC3AMFI5kiAZh3QLUAwkjkSoFkHdAsQjGSOBGjWAd0CBCOZIwGadUC3AMFI5sjy9f3Tf2abhT50C/DDQPavn8x3/raAGoU0AAAAAElFTkSuQmCC"},6213:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>n});var A=i(959);const s={},a=A.createContext(s);function n(e){const t=A.useContext(a);return A.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),A.createElement(a.Provider,{value:t},e.children)}}}]);