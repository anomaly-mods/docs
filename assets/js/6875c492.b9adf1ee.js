"use strict";(self.webpackChunkanomaly_mods_docs=self.webpackChunkanomaly_mods_docs||[]).push([[610],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(5999),r=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(9460),r=a(390);function s(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(7294),n=a(6010),r=a(5999),s=a(8824),o=a(1944),c=a(5281),i=a(9960),m=a(9058),g=a(9703),d=a(197),p=a(9985);function u(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function E(e){let{tag:t}=e;const a=u(t);return l.createElement(l.Fragment,null,l.createElement(o.d,{title:a}),l.createElement(d.Z,{tag:"blog_tags_posts"}))}function h(e){let{tag:t,items:a,sidebar:n,listMetadata:s}=e;const o=u(t);return l.createElement(m.Z,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,o),l.createElement(i.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(p.Z,{items:a}),l.createElement(g.Z,{metadata:s}))}function b(e){return l.createElement(o.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},l.createElement(E,e),l.createElement(h,e))}},907:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(4547),n=a(7294);const r="callout_c1Kp",s="icon_Jbpn",o="title_DZmD",c="content_RLDW",i="definition_rP3u",m="title_iEfB",g="content__c_K";var d=a(7870);const p={};console.log(p);const u={...l.Z,callout:e=>{let{title:t,children:a}=e;n.Children.count(a);let l;if(t)l=n.createElement(n.Fragment,null,n.createElement("span",{className:o},t),n.createElement("div",{className:c,style:{display:t?"block":"inline"}},a));else{const e=n.Children.toArray(a)[0];var i;if("object"==typeof e)t=null==(i=e.props)?void 0:i.children,a=n.Children.toArray(a).slice(1),l=n.createElement(n.Fragment,null,n.createElement("span",null,t),n.createElement("div",{className:c,style:{display:t?"block":"inline"}},a));else l=n.createElement("span",null,e)}return n.createElement("aside",{className:r},n.createElement("span",{className:s},"\ud83d\udca1"),l)},definition:e=>{let{title:t,children:a}=e;const l=null==t?void 0:t.toLowerCase().replace(/\s/g,"-"),r=n.createElement(n.Fragment,null,n.createElement("a",{href:"#"+l},n.createElement("h2",{id:l,className:m},t)),n.createElement("div",{className:g,style:{display:t?"block":"inline"}},a));return n.createElement("aside",{className:i},r)},discussion:e=>{const t=""+p[e.title];return n.createElement(d.Z,{id:"comments",repo:"anomaly-mods/docs",repoId:"MDEwOlJlcG9zaXRvcnkzODc4NzYxNDU=",category:"Blog Articles",categoryId:"DIC_kwDOFx6FMc4CRecj",mapping:"number",term:t,reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:"preferred_color_scheme",lang:"en",loading:"lazy"})}}}}]);