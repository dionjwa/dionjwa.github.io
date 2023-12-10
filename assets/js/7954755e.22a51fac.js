"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[8444],{8823:(l,V,e)=>{e.r(V),e.d(V,{assets:()=>M,contentTitle:()=>i,default:()=>J,frontMatter:()=>a,metadata:()=>t,toc:()=>p});var U=e(1527),d=e(6213);const a={title:"Metapages- publish, embed, edit, share composable complete applications",sidebar_position:7,slug:"/metapages-scientific-embed",authors:["dion"]},i=void 0,t={permalink:"/blog/metapages-scientific-embed",source:"@site/blog/blog/metapages-scientific-embed.md",title:"Metapages- publish, embed, edit, share composable complete applications",description:"This is a deeper dive into an example metapage, that runs python, creates plots using matplotlib.",date:"2023-12-10T15:34:33.272Z",formattedDate:"December 10, 2023",tags:[],hasTruncateMarker:!1,authors:[{name:"Dion Whitehead",title:"Metapages Inventor",url:"https://evolvedeeptimecomplex.systems/",imageURL:"https://github.com/dionjwa.png",key:"dion"}],frontMatter:{title:"Metapages- publish, embed, edit, share composable complete applications",sidebar_position:7,slug:"/metapages-scientific-embed",authors:["dion"]},unlisted:!1,prevItem:{title:"A New Kind of Scientific Publishing",permalink:"/blog/a-new-kind-of-scientific-publishing"},nextItem:{title:"How this blog is automated",permalink:"/blog/how-this-blog-is-automated"}},M={authorsImageUrls:[void 0]},p=[{value:"The example published application",id:"86b0b533b2194720aba8d8657a03fb7b",level:2}];function s(l){const V={a:"a",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.a)(),...l.components};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(V.p,{children:["This is a deeper dive into an example ",(0,U.jsx)(V.a,{href:"https://docs.metapage.io/docs",children:"metapage"}),", that runs python, creates plots using ",(0,U.jsx)(V.a,{href:"https://matplotlib.org/",children:"matplotlib"}),"."]}),"\n",(0,U.jsx)(V.p,{children:"Concepts:"}),"\n",(0,U.jsxs)(V.ul,{children:["\n",(0,U.jsxs)(V.li,{children:["The ",(0,U.jsx)(V.strong,{children:"entire"})," user created application exists ",(0,U.jsx)(V.em,{children:"completely"})," in the URL","\n",(0,U.jsxs)(V.ul,{children:["\n",(0,U.jsx)(V.li,{children:"When you edit the application below, you are editing the URL"}),"\n",(0,U.jsx)(V.li,{children:"Obviously there is a limit, but it\u2019s quite high"}),"\n",(0,U.jsx)(V.li,{children:"The URL can be shared, and then edited by someone else"}),"\n",(0,U.jsx)(V.li,{children:"If you have this URL, you own it. I do not store any application state, in this example at least"}),"\n"]}),"\n"]}),"\n",(0,U.jsxs)(V.li,{children:["Each of the boxes is a ",(0,U.jsx)(V.a,{href:"https://docs.metapage.io/docs/what-is-a-metaframe",children:(0,U.jsx)(V.em,{children:"metaframe"})}),(0,U.jsx)(V.em,{children:","})," which is a term used here to mean a separate webpage URL, with a small library to listen to inputs and send outputs (because the application is a graph of ",(0,U.jsx)(V.a,{href:"https://docs.metapage.io/docs/what-is-a-metaframe",children:(0,U.jsx)(V.em,{children:"metaframes"})}),")","\n",(0,U.jsxs)(V.ul,{children:["\n",(0,U.jsxs)(V.li,{children:["Because the components are also just URLs, and those URLs are ",(0,U.jsx)(V.em,{children:"also"})," editable, you can edit the components and the changes are persisted in the main parent URL"]}),"\n"]}),"\n"]}),"\n",(0,U.jsxs)(V.li,{children:["You can edit the global configuration","\n",(0,U.jsxs)(V.ul,{children:["\n",(0,U.jsxs)(V.li,{children:["This uses an ",(0,U.jsx)(V.a,{href:"https://editor.mtfm.io/",children:"editor metaframe"})," to do this"]}),"\n"]}),"\n"]}),"\n",(0,U.jsxs)(V.li,{children:["You can edit the individual components","\n",(0,U.jsxs)(V.ul,{children:["\n",(0,U.jsx)(V.li,{children:"Metaframes have their own internal editing overlays/menus"}),"\n"]}),"\n"]}),"\n",(0,U.jsxs)(V.li,{children:["You can see the graph layout","\n",(0,U.jsxs)(V.ul,{children:["\n",(0,U.jsxs)(V.li,{children:["This uses an ",(0,U.jsx)(V.a,{href:"https://app.metapage.io/mf/edit?mfk=vi5y75frll",children:"mermaid metaframe"})," to do this"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,U.jsx)(V.h2,{id:"86b0b533b2194720aba8d8657a03fb7b",children:"The example published application"}),"\n",(0,U.jsx)(V.p,{children:"This application runs python (in the browser via pyodide), and generates some plots, sends those as outputs to components that just display images."}),"\n",(0,U.jsx)(V.p,{children:"You can take this, modify it, and share it. No backend servers needed (except for serving plain static assets). Embed in your blog, group websites, company docs, etc."}),"\n",(0,U.jsx)(V.p,{children:"Click any of the hamburger menus to edit the individual components:"}),"\n",(0,U.jsx)(V.p,{children:(0,U.jsx)(V.img,{src:e(343).Z+"",width:"112",height:"108"})}),"\n",(0,U.jsx)("iframe",{scrolling:"no",allow:"fullscreen *; camera *; speaker *;",style:{width:"100%",height:"1150px",overflow:"hidden"},src:"https://app.metapages.org/#?definition=JTdCJTIybWV0YSUyMiUzQSU3QiUyMmxheW91dHMlMjIlM0ElN0IlMjJyZWFjdC1ncmlkLWxheW91dCUyMiUzQSU3QiUyMmRvY3MlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnd3dy5ucG1qcy5jb20lMkZwYWNrYWdlJTJGcmVhY3QtZ3JpZC1sYXlvdXQlMjIlMkMlMjJsYXlvdXQlMjIlM0ElNUIlN0IlMjJoJTIyJTNBMyUyQyUyMmklMjIlM0ElMjJpbWFnZTElMjIlMkMlMjJtb3ZlZCUyMiUzQWZhbHNlJTJDJTIyc3RhdGljJTIyJTNBZmFsc2UlMkMlMjJ3JTIyJTNBMTIlMkMlMjJ4JTIyJTNBMCUyQyUyMnklMjIlM0EyJTdEJTJDJTdCJTIyaCUyMiUzQTUlMkMlMjJpJTIyJTNBJTIyaW1hZ2UyJTIyJTJDJTIybW92ZWQlMjIlM0FmYWxzZSUyQyUyMnN0YXRpYyUyMiUzQWZhbHNlJTJDJTIydyUyMiUzQTEyJTJDJTIyeCUyMiUzQTAlMkMlMjJ5JTIyJTNBNSU3RCUyQyU3QiUyMmglMjIlM0EyJTJDJTIyaSUyMiUzQSUyMnB5aW9kaWRlLWRldiUyMiUyQyUyMm1vdmVkJTIyJTNBZmFsc2UlMkMlMjJzdGF0aWMlMjIlM0FmYWxzZSUyQyUyMnclMjIlM0ExMiUyQyUyMnglMjIlM0EwJTJDJTIyeSUyMiUzQTAlN0QlNUQlMkMlMjJwcm9wcyUyMiUzQSU3QiUyMmNvbHMlMjIlM0ExMiUyQyUyMmNvbnRhaW5lclBhZGRpbmclMjIlM0ElNUI1JTJDNSU1RCUyQyUyMm1hcmdpbiUyMiUzQSU1QjEwJTJDMjAlNUQlMkMlMjJyb3dIZWlnaHQlMjIlM0ExMDAlN0QlN0QlN0QlMkMlMjJuYW1lJTIyJTNBJTIyQSUyMG5ldyUyMGtpbmQlMjBvZiUyMHB1Ymxpc2hpbmclMjAtJTIwc2VsZi1jb250YWluZWQlMjBVUkxTJTIyJTdEJTJDJTIybWV0YWZyYW1lcyUyMiUzQSU3QiUyMmltYWdlMSUyMiUzQSU3QiUyMmlucHV0cyUyMiUzQSU1QiU3QiUyMm1ldGFmcmFtZSUyMiUzQSUyMnB5aW9kaWRlLWRldiUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMmltYWdlMSUyMiUyQyUyMnRhcmdldCUyMiUzQSUyMmltYWdlMSUyMiU3RCU1RCUyQyUyMnVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGanMubXRmbS5pbyUyRiUyMyUzRmVkaXQlM0QxJTI2anMlM0RZMjl1YzNRbE1qQnliMjkwSlRJd0pUTkVKVEl3Wkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KVEl5Y205dmRDVXlNaWtsTUVFbE1FRjJZWElsTWpCdmJrbHVjSFYwY3lVeU1DVXpSQ1V5TUdsdWNIVjBjeVV5TUNVelJDVXpSU1V5TUNVM1FpVXdRU1V5TUNVeU1DVXlNQ1V5TUdOdmJuTjBKVEl3YXlVeU1DVXpSQ1V5TUU5aWFtVmpkQzVyWlhsektHbHVjSFYwY3lrbE5VSXdKVFZFSlROQ0pUQkJKVEl3SlRJd0pUSXdKVEl3YVdZbE1qQW9JU2hySlRJd0pUSTJKVEkySlRJd2FXNXdkWFJ6SlRWQ2F5VTFSQ2twSlRJd0pUZENKVEJCSlRJd0pUSXdKVEl3SlRJd0pUSXdKVEl3SlRJd0pUSXdjbVYwZFhKdUpUTkNKVEJCSlRJd0pUSXdKVEl3SlRJd0pUZEVKVEJCSlRJd0pUSXdKVEl3SlRJd1kyOXVjM1FsTWpCMkpUSXdKVE5FSlRJd2FXNXdkWFJ6SlRWQ2F5VTFSQ1V3UVNVeU1DVXlNQ1V5TUNVeU1IWmhjaVV5TUdsdFlXZGxKVEl3SlRORUpUSXdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnbmFXMW5KeWtsTTBJbE1FRWxNRGxwYldGblpTNXpjbU1sTWpBbE0wUWxNakIwZVhCbGIyWW9kaWtsTWpBbE0wUWxNMFFsTTBRbE1qQWxNakp6ZEhKcGJtY2xNaklsTWpBbE1qWWxNallsTWpCMkxuTjBZWEowYzFkcGRHZ29KVEl5WkdGMFlTVXpRV2x0WVdkbEpUSXlLU1V5TUNVelJpVXlNSFlsTWpBbE0wRWxNakJWVWt3dVkzSmxZWFJsVDJKcVpXTjBWVkpNS0hZcEpUTkNKVEJCSlRJd0pUSXdKVEl3SlRJd2QyaHBiR1VsTWpBb2NtOXZkQzVtYVhKemRFTm9hV3hrS1NVeU1DVTNRaVV3UVNVeU1DVXlNQ1V5TUNVeU1DVXlNQ1V5TUNVeU1DVXlNSEp2YjNRdWNtVnRiM1psUTJocGJHUW9jbTl2ZEM1c1lYTjBRMmhwYkdRcEpUTkNKVEJCSlRJd0pUSXdKVEl3SlRJd0pUZEVKVEJCSlRJd0pUSXdKVEl3SlRJd2NtOXZkQzVoY0hCbGJtUkRhR2xzWkNocGJXRm5aU2tsTTBJbE1FRWxOMFFsTUVFbE1FRnZia2x1Y0hWMGN5aHRaWFJoWm5KaGJXVXVaMlYwU1c1d2RYUnpLQ2twSlRCQkpUQkJZMjl1YzNRbE1qQmthWE53YjNObEpUSXdKVE5FSlRJd2JXVjBZV1p5WVcxbExtOXVTVzV3ZFhSektHOXVTVzV3ZFhSektTVXdRWGRwYm1SdmR5NXpZM0pwY0hSVmJteHZZV1FsTWpBbE0wUWxNakFvS1NVeU1DVXpSQ1V6UlNVeU1DVTNRaVV3UVNVd09XUnBjM0J2YzJVb0tTVXdRU1UzUkElM0QlM0QlMjZtb2R1bGVzJTNESlRWQ0pUVkUlMjIlN0QlMkMlMjJpbWFnZTIlMjIlM0ElN0IlMjJpbnB1dHMlMjIlM0ElNUIlN0IlMjJtZXRhZnJhbWUlMjIlM0ElMjJweWlvZGlkZS1kZXYlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJpbWFnZTIlMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjJpbWFnZTIlMjIlN0QlNUQlMkMlMjJ1cmwlMjIlM0ElMjJodHRwcyUzQSUyRiUyRmpzLm10Zm0uaW8lMkYlMjMlM0ZlZGl0JTNEMSUyNmpzJTNEWTI5dWMzUWxNakJ5YjI5MEpUSXdKVE5FSlRJd1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSlRJeWNtOXZkQ1V5TWlrbE1FRWxNRUYyWVhJbE1qQnZia2x1Y0hWMGN5VXlNQ1V6UkNVeU1HbHVjSFYwY3lVeU1DVXpSQ1V6UlNVeU1DVTNRaVV3UVNVeU1DVXlNQ1V5TUNVeU1HTnZibk4wSlRJd2F5VXlNQ1V6UkNVeU1FOWlhbVZqZEM1clpYbHpLR2x1Y0hWMGN5a2xOVUl3SlRWRUpUTkNKVEJCSlRJd0pUSXdKVEl3SlRJd2FXWWxNakFvSVNockpUSXdKVEkySlRJMkpUSXdhVzV3ZFhSekpUVkNheVUxUkNrcEpUSXdKVGRDSlRCQkpUSXdKVEl3SlRJd0pUSXdKVEl3SlRJd0pUSXdKVEl3Y21WMGRYSnVKVE5DSlRCQkpUSXdKVEl3SlRJd0pUSXdKVGRFSlRCQkpUSXdKVEl3SlRJd0pUSXdZMjl1YzNRbE1qQjJKVEl3SlRORUpUSXdhVzV3ZFhSekpUVkNheVUxUkNVd1FTVXlNQ1V5TUNVeU1DVXlNSFpoY2lVeU1HbHRZV2RsSlRJd0pUTkVKVEl3Wkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25hVzFuSnlrbE0wSWxNRUVsTURscGJXRm5aUzV6Y21NbE1qQWxNMFFsTWpCMGVYQmxiMllvZGlrbE1qQWxNMFFsTTBRbE0wUWxNakFsTWpKemRISnBibWNsTWpJbE1qQWxNallsTWpZbE1qQjJMbk4wWVhKMGMxZHBkR2dvSlRJeVpHRjBZU1V6UVdsdFlXZGxKVEl5S1NVeU1DVXpSaVV5TUhZbE1qQWxNMEVsTWpCVlVrd3VZM0psWVhSbFQySnFaV04wVlZKTUtIWXBKVE5DSlRCQkpUSXdKVEl3SlRJd0pUSXdkMmhwYkdVbE1qQW9jbTl2ZEM1bWFYSnpkRU5vYVd4a0tTVXlNQ1UzUWlVd1FTVXlNQ1V5TUNVeU1DVXlNQ1V5TUNVeU1DVXlNQ1V5TUhKdmIzUXVjbVZ0YjNabFEyaHBiR1FvY205dmRDNXNZWE4wUTJocGJHUXBKVE5DSlRCQkpUSXdKVEl3SlRJd0pUSXdKVGRFSlRCQkpUSXdKVEl3SlRJd0pUSXdjbTl2ZEM1aGNIQmxibVJEYUdsc1pDaHBiV0ZuWlNrbE0wSWxNRUVsTjBRbE1FRWxNRUZ2YmtsdWNIVjBjeWh0WlhSaFpuSmhiV1V1WjJWMFNXNXdkWFJ6S0NrcEpUQkJKVEJCWTI5dWMzUWxNakJrYVhOd2IzTmxKVEl3SlRORUpUSXdiV1YwWVdaeVlXMWxMbTl1U1c1d2RYUnpLRzl1U1c1d2RYUnpLU1V3UVhkcGJtUnZkeTV6WTNKcGNIUlZibXh2WVdRbE1qQWxNMFFsTWpBb0tTVXlNQ1V6UkNVelJTVXlNQ1UzUWlVd1FTVXdPV1JwYzNCdmMyVW9LU1V3UVNVM1JBJTNEJTNEJTI2bW9kdWxlcyUzREpUVkNKVFZFJTIyJTdEJTJDJTIycHlpb2RpZGUtZGV2JTIyJTNBJTdCJTIyaW5wdXRzJTIyJTNBJTVCJTdCJTIybWV0YWZyYW1lJTIyJTNBJTIyaW5wdXQlMjIlMkMlMjJzb3VyY2UlMjIlM0ElMjJ0ZXh0JTIyJTJDJTIydGFyZ2V0JTIyJTNBJTIydGV4dCUyMiU3RCUyQyU3QiUyMm1ldGFmcmFtZSUyMiUzQSUyMmdlbmVyYXRlLWlucHV0cyUyMiUyQyUyMnNvdXJjZSUyMiUzQSUyMiolMjIlMkMlMjJ0YXJnZXQlMjIlM0ElMjIqJTIyJTdEJTVEJTJDJTIydXJsJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZweS5tdGZtLmlvJTJGJTIzJTNGZWRpdCUzRDElMjZvcHRpb25zJTNESlRkQ0pUSXljaVV5TWlVelFYUnlkV1VsTjBRJTNEJTI2cHklM0RhVzF3YjNKMEpUSXdjSGx2Wkdsa1pTVXdRV2x0Y0c5eWRDVXlNRzFwWTNKdmNHbHdKVEJCWm5KdmJTVXlNR3B6SlRJd2FXMXdiM0owSlRJd2JXVjBZV1p5WVcxbEpUSkRKVEl3Ykc5bkpUQkJKVEJCWVhkaGFYUWxNakJ0YVdOeWIzQnBjQzVwYm5OMFlXeHNLQ1V5TW0xaGRIQnNiM1JzYVdJbE1qSXBKVEJCWVhkaGFYUWxNakJ0YVdOeWIzQnBjQzVwYm5OMFlXeHNLQ1V5TW01MWJYQjVKVEl5S1NVd1FTVXdRV2x0Y0c5eWRDVXlNRzFoZEhCc2IzUnNhV0l1Y0hsd2JHOTBKVEl3WVhNbE1qQndiSFFsTUVGcGJYQnZjblFsTWpCcGJ5VXlReVV5TUdKaGMyVTJOQ1V3UVdsdGNHOXlkQ1V5TUc1MWJYQjVKVEl3WVhNbE1qQnVjQ1V3UVNVd1FXeHZaeWdsTWpKUWVYUm9iMjRsTWpCemRHRnlkR1ZrSlRKREpUSXdZMjl0Y0hWMGFXNW5KVEl3Y0d4dmRITXVMaTRsTWpJcEpUQkJKVEJCYm5BdWNtRnVaRzl0TG5ObFpXUW9NVGsyT0RBNE1ERXBKVEl3SlRJd0pUSXpKVEl3YzJWbFpDVXlNSFJvWlNVeU1ISmhibVJ2YlNVeU1HNTFiV0psY2lVeU1HZGxibVZ5WVhSdmNpNGxNRUZrWVhSaEpUSXdKVE5FSlRJd0pUZENKMkVuSlROQkpUSXdibkF1WVhKaGJtZGxLRFV3S1NVeVF5VXdRU1V5TUNVeU1DVXlNQ1V5TUNVeU1DVXlNQ1V5TUNVeU1DZGpKeVV6UVNVeU1HNXdMbkpoYm1SdmJTNXlZVzVrYVc1MEtEQWxNa01sTWpBMU1DVXlReVV5TURVd0tTVXlReVV3UVNVeU1DVXlNQ1V5TUNVeU1DVXlNQ1V5TUNVeU1DVXlNQ2RrSnlVelFTVXlNRzV3TG5KaGJtUnZiUzV5WVc1a2JpZzFNQ2tsTjBRbE1FRmtZWFJoSlRWQ0oySW5KVFZFSlRJd0pUTkVKVEl3WkdGMFlTVTFRaWRoSnlVMVJDVXlNQ1V5UWlVeU1ERXdKVEl3S2lVeU1HNXdMbkpoYm1SdmJTNXlZVzVrYmlnMU1Da2xNRUZrWVhSaEpUVkNKMlFuSlRWRUpUSXdKVE5FSlRJd2JuQXVZV0p6S0dSaGRHRWxOVUluWkNjbE5VUXBKVEl3S2lVeU1ERXdNQ1V3UVNVd1FXWnBaeVV5UXlVeU1HRjRKVEl3SlRORUpUSXdjR3gwTG5OMVluQnNiM1J6S0dacFozTnBlbVVsTTBRb05TVXlReVV5TURJdU55a2xNa01sTWpCc1lYbHZkWFFsTTBRblkyOXVjM1J5WVdsdVpXUW5LU1V3UVdGNExuTmpZWFIwWlhJb0oyRW5KVEpESlRJd0oySW5KVEpESlRJd1l5VXpSQ2RqSnlVeVF5VXlNSE1sTTBRblpDY2xNa01sTWpCa1lYUmhKVE5FWkdGMFlTa2xNRUZoZUM1elpYUmZlR3hoWW1Wc0tDZGxiblJ5ZVNVeU1HRW5LU1V3UVdGNExuTmxkRjk1YkdGaVpXd29KMlZ1ZEhKNUpUSXdZaWNwSlRCQkpUQkJZblZtSlRJd0pUTkVKVEl3YVc4dVFubDBaWE5KVHlncEpUQkJabWxuTG5OaGRtVm1hV2NvWW5WbUpUSkRKVEl3Wm05eWJXRjBKVE5FSjNCdVp5Y3BKVEJCWW5WbUxuTmxaV3NvTUNrbE1FRnBiV2RmYzNSeUpUSXdKVE5FSlRJd0oyUmhkR0VsTTBGcGJXRm5aU1V5Um5CdVp5VXpRbUpoYzJVMk5DVXlReWNsTWpBbE1rSWxNakJpWVhObE5qUXVZalkwWlc1amIyUmxLR0oxWmk1eVpXRmtLQ2twTG1SbFkyOWtaU2duVlZSR0xUZ25LU1V3UVd4dlp5Z2xNakpUWlc1MEpUSXdhVzFoWjJVeElTVXlNaWtsTUVGdFpYUmhabkpoYldVdWMyVjBUM1YwY0hWMEtDVXlNbWx0WVdkbE1TVXlNaVV5UXlVeU1HbHRaMTl6ZEhJcEpUQkJKVEJCSlRCQlptbG5KVEpESlRJd1lYZ2xNakFsTTBRbE1qQndiSFF1YzNWaWNHeHZkSE1vS1NVd1FXRjRMbkJzYjNRb0pUVkNNU1V5UXpNbE1rTXlKVFZFS1NVd1FXSjFaaVV5TUNVelJDVXlNR2x2TGtKNWRHVnpTVThvS1NVd1FXWnBaeTV6WVhabFptbG5LR0oxWmlVeVF5VXlNR1p2Y20xaGRDVXpSQ2R3Ym1jbktTVXdRV0oxWmk1elpXVnJLREFwSlRCQmFXMW5YM04wY2lVeU1DVXpSQ1V5TUNka1lYUmhKVE5CYVcxaFoyVWxNa1p3Ym1jbE0wSmlZWE5sTmpRbE1rTW5KVEl3SlRKQ0pUSXdZbUZ6WlRZMExtSTJOR1Z1WTI5a1pTaGlkV1l1Y21WaFpDZ3BLUzVrWldOdlpHVW9KMVZVUmkwNEp5a2xNRUZzYjJjb0pUSXlVMlZ1ZENVeU1HbHRZV2RsTWlFbE1qSXBKVEJCYldWMFlXWnlZVzFsTG5ObGRFOTFkSEIxZENnbE1qSnBiV0ZuWlRJbE1qSWxNa01sTWpCcGJXZGZjM1J5S1ElM0QlM0QlMjIlN0QlN0QlMkMlMjJwbHVnaW5zJTIyJTNBJTVCJTIyaHR0cHMlM0ElMkYlMkZtZXJtYWlkLm10Zm0uaW8lMkYlMjMlM0ZobSUzRGRpc2FibGVkJTIyJTJDJTIyaHR0cHMlM0ElMkYlMkZlZGl0b3IubXRmbS5pbyUyRiUyMyUzRmhtJTNEZGlzYWJsZWQlMjZvcHRpb25zJTNESlRkQ0pUSXliVzlrWlNVeU1pVXpRU1V5TW1wemIyNGxNaklsTWtNbE1qSnpZWFpsYkc5aFpHbHVhR0Z6YUNVeU1pVXpRWFJ5ZFdVbE1rTWxNakowYUdWdFpTVXlNaVV6UVNVeU1uWnpMV1JoY21zbE1qSWxOMFElM0QlMjIlNUQlMkMlMjJ2ZXJzaW9uJTIyJTNBJTIyMC4zJTIyJTdE&hide-header=true"})]})}function J(l={}){const{wrapper:V}={...(0,d.a)(),...l.components};return V?(0,U.jsx)(V,{...l,children:(0,U.jsx)(s,{...l})}):s(l)}},343:(l,V,e)=>{e.d(V,{Z:()=>U});const U="data:image/png;base64,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"},6213:(l,V,e)=>{e.d(V,{Z:()=>t,a:()=>i});var U=e(959);const d={},a=U.createContext(d);function i(l){const V=U.useContext(a);return U.useMemo((function(){return"function"==typeof l?l(V):{...V,...l}}),[V,l])}function t(l){let V;return V=l.disableParentContext?"function"==typeof l.components?l.components(d):l.components||d:i(l.components),U.createElement(a.Provider,{value:V},l.children)}}}]);