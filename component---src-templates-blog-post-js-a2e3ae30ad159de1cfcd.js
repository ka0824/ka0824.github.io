"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{9357:function(e,t,n){var r=n(7294),a=n(1883);t.Z=e=>{var t,n,l;let{description:i,title:c,children:o}=e;const{site:m}=(0,a.useStaticQuery)("2841359383"),s=i||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?c+" | "+u:c),r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{property:"og:title",content:c}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(l=n.social)||void 0===l?void 0:l.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:c}),r.createElement("meta",{name:"twitter:description",content:s}),o)}},6814:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s},default:function(){return u}});var r=n(7294),a=n(1883),l=n(8771),i=n(9793),c=n(9357);const o="comments-container";var m=()=>((0,r.useEffect)((()=>{const e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo","ka0824.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("theme","dark-blue"),e.setAttribute("crossorigin","anonymous"),e.async=!0;const t=document.getElementById(o);return t&&t.appendChild(e),()=>{const e=document.getElementById(o);e&&(e.innerHTML="")}}),[]),r.createElement("div",{id:o}));const s=e=>{let{data:{markdownRemark:t}}=e;return r.createElement(c.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var u=e=>{var t;let{data:{previous:n,next:c,site:o,markdownRemark:s},location:u}=e;const d=(null===(t=o.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(i.Z,{location:u,title:d},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},s.frontmatter.title),r.createElement("p",null,s.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:s.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement("footer",null,r.createElement(l.Z,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,n&&r.createElement(a.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.createElement("li",null,c&&r.createElement(a.Link,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →")))),r.createElement(m,null),r.createElement("div",null,"test2"))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a2e3ae30ad159de1cfcd.js.map