"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[227],{6739:function(e,t,l){l.r(t);var r=l(7294),a=l(1883),n=l(8771),i=l(9793);t.default=e=>{let{location:t,pageContext:l}=e;const{category:m,subcategory:c}=l,s=(0,a.useStaticQuery)("479176784"),o=s.allMarkdownRemark.nodes,p=s.site.siteMetadata.title;if(!c){const e=o.filter((e=>e.frontmatter.main===m));return r.createElement(i.Z,{location:t,title:p,isCategory:!0},r.createElement(n.Z,null),e.map((e=>r.createElement("li",{key:e.fields.slug},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h2",null,r.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},p))),r.createElement("small",null,e.frontmatter.date)),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})))))))}const u=o.filter((e=>e.frontmatter.main===m&&e.frontmatter.sub===c));return r.createElement(i.Z,{location:t,title:p,isCategory:!0},r.createElement(n.Z,null),u.map((e=>r.createElement("li",{key:e.fields.slug},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h2",null,r.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},p))),r.createElement("small",null,e.frontmatter.date)),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})))))))}}}]);
//# sourceMappingURL=component---src-templates-category-post-js-649f9da510cce2a08844.js.map