"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{9357:function(e,t,n){var r=n(7294),l=n(1883);t.Z=e=>{var t,n,a;let{description:i,title:o,children:c}=e;const{site:m}=(0,l.useStaticQuery)("2841359383"),s=i||m.siteMetadata.description,d=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,d?o+" | "+d:o),r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{property:"og:title",content:o}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(a=n.social)||void 0===a?void 0:a.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:o}),r.createElement("meta",{name:"twitter:description",content:s}),c)}},780:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return s}});var r=n(7294),l=n(1883),a=n(8771),i=n(9793),o=n(9357);var c=e=>{let{id:t}=e;return(0,r.useEffect)((()=>{if(!window)return;const e=window.document;return e.getElementById("commento")&&((e,t,n)=>{const r=window.document.createElement("script");r.async=!0,r.src=e,r.id=t,n.appendChild(r)})("https://ka0824.github.io/js/commento.js","commento-script",e.body),()=>((e,t)=>{const n=window.document.getElementById(e);n&&t.removeChild(n)})("commento-script",e.body)}),[t]),r.createElement("div",{id:"commento"})};const m=e=>{let{data:{markdownRemark:t}}=e;return r.createElement(o.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var s=e=>{var t;let{data:{previous:n,next:o,site:m,markdownRemark:s},location:d}=e;const u=(null===(t=m.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(i.Z,{location:d,title:u},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},s.frontmatter.title),r.createElement("p",null,s.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:s.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement("footer",null,r.createElement(a.Z,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,n&&r.createElement(l.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.createElement("li",null,o&&r.createElement(l.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →")))),r.createElement(c,{id:s.id}),r.createElement("div",null,"테스트"))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-fe18538947c9ba48d942.js.map