"use strict";(self.webpackChunkanomaly_mods_docs=self.webpackChunkanomaly_mods_docs||[]).push([[8734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||c;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));n(8209),n(6525);const c={},a="Engine Documentation",i={unversionedId:"index",id:"index",title:"Engine Documentation",description:"--\x3e",source:"@site/docs/engine/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/engine/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"engine"},l={},s=[],u={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"engine-documentation"},"Engine Documentation"))}m.isMDXComponent=!0},6525:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(7294),o=n(6010),c=n(2802),a=n(9960),i=n(3919);const l="cardContainer_S8oU",s="cardTitle_HoSo",u="cardDescription_c27F";function m(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:c,description:a}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:c},n," ",c),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",u),title:a},a))}function f(e){var t;let{item:n}=e;const o=(0,c.Wl)(n);return o?r.createElement(p,{href:o,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null==(t=n.customProps)?void 0:t.description}):null}function d(e){var t;let{item:n}=e;const o=(0,i.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:o,title:n.label,description:null==a?void 0:a.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const a=(0,c.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},8209:(e,t,n)=>{n(7294)}}]);