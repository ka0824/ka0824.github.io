"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{6558:function(e,t,l){l.r(t),l.d(t,{Head:function(){return i}});var n=l(7294),r=l(1883),a=l(8771),o=l(9793),s=l(9357);t.default=e=>{var t,l;let{data:s,location:i}=e;const c=(null===(t=s.site)||void 0===t||null===(l=t.siteMetadata)||void 0===l?void 0:l.title)||"Title",m=s.allMarkdownRemark.nodes;return 0===m.length?n.createElement(o.Z,{location:i,title:c},n.createElement(a.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(o.Z,{location:i,title:c},n.createElement(a.Z,null),n.createElement("ol",{style:{listStyle:"none"}},m.map((e=>{const t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const i=()=>n.createElement(s.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-6616861f0354dfe4f515.js.map