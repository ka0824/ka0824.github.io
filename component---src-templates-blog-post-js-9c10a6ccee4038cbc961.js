"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{9357:function(e,t,n){var a=n(7294),l=n(1883);t.Z=e=>{var t,n,r;let{description:i,title:o,children:c}=e;const{site:m}=(0,l.useStaticQuery)("2841359383"),s=i||m.siteMetadata.description,d=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?o+" | "+d:o),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:s}),c)}},4982:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var a=n(7294),l=n(1883),r=n(8771),i=n(9793),o=n(9357);const c=e=>{let{data:{markdownRemark:t}}=e;return a.createElement(o.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};t.default=e=>{var t;let{data:{previous:n,next:o,site:c,markdownRemark:m},location:s}=e;const d=(null===(t=c.siteMetadata)||void 0===t?void 0:t.title)||"Title";return a.createElement(i.Z,{location:s,title:d},a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},m.frontmatter.title),a.createElement("p",null,m.frontmatter.date)),a.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"}),a.createElement("hr",null),a.createElement("footer",null,a.createElement(r.Z,null))),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,n&&a.createElement(l.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.createElement("li",null,o&&a.createElement(l.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9c10a6ccee4038cbc961.js.map