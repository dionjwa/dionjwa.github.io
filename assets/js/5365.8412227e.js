"use strict";(self.webpackChunkdionjwa_resume_docusaurus=self.webpackChunkdionjwa_resume_docusaurus||[]).push([[5365],{4289:(e,t,a)=>{a.d(t,{Z:()=>b});var s=a(959),l=a(5924),n=a(2091),r=a(4892),i=a(9388),o=a(1896),c=a(8903),d=a(7579);function m(e){const{pathname:t}=(0,c.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_mxYH",sidebarItemTitle:"sidebarItemTitle_HBa5",sidebarItemList:"sidebarItemList_ciBc",sidebarItem:"sidebarItem_a7Bx",sidebarItemLink:"sidebarItemLink_M4Ua",sidebarItemLinkActive:"sidebarItemLinkActive_Ozox"};var h=a(1527);function g(e){let{sidebar:t}=e;const a=m(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,l.default)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,l.default)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,l.default)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=a(9249);function x(e){let{sidebar:t}=e;const a=m(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function f(e){return(0,h.jsx)(p.Zo,{component:x,props:e})}function j(e){let{sidebar:t}=e;const a=(0,r.i)();return t?.items.length?"mobile"===a?(0,h.jsx)(f,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function b(e){const{sidebar:t,toc:a,children:s,...r}=e,i=t&&t.items.length>0;return(0,h.jsx)(n.Z,{...r,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(j,{sidebar:t}),(0,h.jsx)("main",{className:(0,l.default)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),a&&(0,h.jsx)("div",{className:"col col--2",children:a})]})})})}},3869:(e,t,a)=>{a.d(t,{Z:()=>O});var s=a(959),l=a(5924),n=a(6606),r=a(9805),i=a(1527);function o(e){let{children:t,className:a}=e;const{frontMatter:s,assets:l,metadata:{description:o}}=(0,n.C)(),{withBaseUrl:c}=(0,r.C)(),d=l.image??s.image,m=s.keywords??[];return(0,i.jsxs)("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,i.jsx)("meta",{itemProp:"description",content:o}),d&&(0,i.jsx)("link",{itemProp:"image",href:c(d,{absolute:!0})}),m.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:m.join(",")}),t]})}var c=a(9388);const d={title:"title_r6C8"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,n.C)(),{permalink:r,title:o}=a,m=s?"h1":"h2";return(0,i.jsx)(m,{className:(0,l.default)(d.title,t),itemProp:"headline",children:s?o:(0,i.jsx)(c.Z,{itemProp:"url",to:r,children:o})})}var u=a(1896),h=a(5793);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const x={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function f(){const{i18n:{currentLocale:e}}=(0,h.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),x}}),[e])}function j(){const e=f();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const l=a.select(t),n=a.pluralForms.indexOf(l);return s[Math.min(n,s.length-1)]}(a,t,e)}}const b={container:"container_PHTD"};function v(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=j();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,i.jsx)(i.Fragment,{children:a(t)})}function N(e){let{date:t,formattedDate:a}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:a})}function _(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function P(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:s,formattedDate:r,readingTime:o}=a;return(0,i.jsxs)("div",{className:(0,l.default)(b.container,"margin-vert--md",t),children:[(0,i.jsx)(N,{date:s,formattedDate:r}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_,{}),(0,i.jsx)(v,{readingTime:o})]})]})}function k(e){return e.href?(0,i.jsx)(c.Z,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function T(e){let{author:t,className:a}=e;const{name:s,title:n,url:r,imageURL:o,email:c}=t,d=r||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,l.default)("avatar margin-bottom--sm",a),children:[o&&(0,i.jsx)(k,{href:d,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:s,itemProp:"image"})}),s&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(k,{href:d,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:s})})}),n&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:n})]})]})}const C={authorCol:"authorCol_VHbN",imageOnlyAuthorRow:"imageOnlyAuthorRow_raDu",imageOnlyAuthorCol:"imageOnlyAuthorCol_atZJ"};function w(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,n.C)();if(0===a.length)return null;const r=a.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,l.default)("margin-top--md margin-bottom--sm",r?C.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,i.jsx)("div",{className:(0,l.default)(!r&&"col col--6",r?C.imageOnlyAuthorCol:C.authorCol),children:(0,i.jsx)(T,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function I(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(m,{}),(0,i.jsx)(P,{}),(0,i.jsx)(w,{})]})}var Z=a(3543),L=a(3085);function y(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,n.C)();return(0,i.jsx)("div",{id:s?Z.blogPostContainerID:void 0,className:(0,l.default)("markdown",a),itemProp:"articleBody",children:(0,i.jsx)(L.Z,{children:t})})}var F=a(8734),B=a(5522);function M(){return(0,i.jsx)("b",{children:(0,i.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function A(e){const{blogPostTitle:t,...a}=e;return(0,i.jsx)(c.Z,{"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,i.jsx)(M,{})})}const R={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_JVVN"};function D(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:s,editUrl:r,hasTruncateMarker:o}=e,c=!t&&o,d=a.length>0;return d||c||r?(0,i.jsxs)("footer",{className:(0,l.default)("row docusaurus-mt-lg",t&&R.blogPostFooterDetailsFull),children:[d&&(0,i.jsx)("div",{className:(0,l.default)("col",{"col--9":c}),children:(0,i.jsx)(B.Z,{tags:a})}),t&&r&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(F.Z,{editUrl:r})}),c&&(0,i.jsx)("div",{className:(0,l.default)("col text--right",{"col--3":d}),children:(0,i.jsx)(A,{blogPostTitle:s,to:e.permalink})})]}):null}function O(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(o,{className:(0,l.default)(s,a),children:[(0,i.jsx)(I,{}),(0,i.jsx)(y,{children:t}),(0,i.jsx)(D,{})]})}},8734:(e,t,a)=>{a.d(t,{Z:()=>d});a(959);var s=a(1896),l=a(7237),n=a(9388),r=a(5924);const i={iconEdit:"iconEdit_EE_1"};var o=a(1527);function c(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.default)(i.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,o.jsxs)(n.Z,{to:t,className:l.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},2957:(e,t,a)=>{a.d(t,{Z:()=>r});a(959);var s=a(5924),l=a(9388),n=a(1527);function r(e){const{permalink:t,title:a,subLabel:r,isNext:i}=e;return(0,n.jsxs)(l.Z,{className:(0,s.default)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,n.jsx)("div",{className:"pagination-nav__label",children:a})]})}},5522:(e,t,a)=>{a.d(t,{Z:()=>d});a(959);var s=a(5924),l=a(1896),n=a(9388);const r={tag:"tag_TrbS",tagRegular:"tagRegular_pDyG",tagWithCount:"tagWithCount_AJyX"};var i=a(1527);function o(e){let{permalink:t,label:a,count:l}=e;return(0,i.jsxs)(n.Z,{href:t,className:(0,s.default)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}const c={tags:"tags_CTod",tag:"tag_dXTZ"};function d(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.default)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,i.jsx)("li",{className:c.tag,children:(0,i.jsx)(o,{label:t,permalink:a})},a)}))})]})}},6606:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>i});var s=a(959),l=a(8280),n=a(1527);const r=s.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return(0,n.jsx)(r.Provider,{value:i,children:t})}function o(){const e=(0,s.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}}}]);