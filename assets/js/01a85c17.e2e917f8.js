"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4013],{7154:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(7294),r=a(6010),n=a(5272),s=a(7524),c=a(9960),i=a(5999);const m="sidebar_re4s",o="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",b="sidebarItemLinkActive_I1ZP";function E(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.default)(m,"thin-scrollbar"),"aria-label":(0,i.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.default)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.default)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(c.default,{isNavLink:!0,to:e.permalink,className:g,activeClassName:b},e.title)))))))}var p=a(3102);function f(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function N(e){return l.createElement(p.NavbarSecondaryMenuFiller,{component:f,props:e})}function h(e){let{sidebar:t}=e;const a=(0,s.useWindowSize)();return null!=t&&t.items.length?"mobile"===a?l.createElement(N,{sidebar:t}):l.createElement(E,{sidebar:t}):null}function v(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(n.default,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(h,{sidebar:t}),l.createElement("main",{className:(0,r.default)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},4170:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(7294),r=a(6010),n=a(5999);var s=a(1944),c=a(5281),i=a(7154),m=a(7845);const o="tag_Nnez";function u(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(m.default,e))))),l.createElement("hr",null))}function d(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(u,{key:e.letter,letterEntry:e}))))}var g=a(197);function b(e){let{tags:t,sidebar:a}=e;const m=(0,n.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return l.createElement(s.HtmlClassNameProvider,{className:(0,r.default)(c.ThemeClassNames.wrapper.blogPages,c.ThemeClassNames.page.blogTagsListPage)},l.createElement(s.PageMetadata,{title:m}),l.createElement(g.default,{tag:"blog_tags_list"}),l.createElement(i.default,{sidebar:a},l.createElement("h1",null,m),l.createElement(d,{tags:t})))}},7845:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(7294),r=a(6010),n=a(9960);const s="tag_zVej",c="tagRegular_sFm0",i="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(n.default,{href:t,className:(0,r.default)(s,m?i:c)},a,m&&l.createElement("span",null,m))}}}]);