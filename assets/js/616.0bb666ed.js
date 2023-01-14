"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[616],{7154:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var l=a(7294),n=a(6010),r=a(5272),s=a(7524),o=a(9960),i=a(5999);const c="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function p(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.default)(c,"thin-scrollbar"),"aria-label":(0,i.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.default)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.default)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(o.default,{isNavLink:!0,to:e.permalink,className:g,activeClassName:f},e.title)))))))}var h=a(3102);function E(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return l.createElement(h.NavbarSecondaryMenuFiller,{component:E,props:e})}function v(e){let{sidebar:t}=e;const a=(0,s.useWindowSize)();return null!=t&&t.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(p,{sidebar:t}):null}function P(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return l.createElement(r.default,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,n.default)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},2983:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var l=a(7294),n=a(6010),r=a(9460),s=a(4996);function o(e){let{children:t,className:a}=e;const{frontMatter:n,assets:o}=(0,r.useBlogPost)(),{withBaseUrl:i}=(0,s.useBaseUrlUtils)(),c=o.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var i=a(9960);const c="title_f1Hy";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.useBlogPost)(),{permalink:o,title:m}=a,u=s?"h1":"h2";return l.createElement(u,{className:(0,n.default)(c,t),itemProp:"headline"},s?m:l.createElement(i.default,{itemProp:"url",to:o},m))}var u=a(5999),d=a(8824);const g="container_mt6G";function f(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,(0,u.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function h(){return l.createElement(l.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,r.useBlogPost)(),{date:s,formattedDate:o,readingTime:i}=a;return l.createElement("div",{className:(0,n.default)(g,"margin-vert--md",t)},l.createElement(p,{date:s,formattedDate:o}),void 0!==i&&l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(f,{readingTime:i})))}function b(e){return e.href?l.createElement(i.default,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:s,url:o,imageURL:i,email:c}=t,m=o||c&&`mailto:${c}`||void 0;return l.createElement("div",{className:(0,n.default)("avatar margin-bottom--sm",a)},i&&l.createElement(b,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),s&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const P="authorCol_Hf19",N="imageOnlyAuthorRow_pa_O",_="imageOnlyAuthorCol_G86a";function k(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.useBlogPost)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.default)("margin-top--md margin-bottom--sm",o?N:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.default)(!o&&"col col--6",o?_:P),key:t},l.createElement(v,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}function B(){return l.createElement("header",null,l.createElement(m,null),l.createElement(E,null),l.createElement(k,null))}var T=a(8780),w=a(8654);function F(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.useBlogPost)();return l.createElement("div",{id:s?T.blogPostContainerID:void 0,className:(0,n.default)("markdown",a),itemProp:"articleBody"},l.createElement(w.default,null,t))}var y=a(2760),x=a(4049),C=a(7462);function L(){return l.createElement("b",null,l.createElement(u.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function M(e){const{blogPostTitle:t,...a}=e;return l.createElement(i.default,(0,C.default)({"aria-label":(0,u.translate)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(L,null))}const R="blogPostFooterDetailsFull_mRVl";function I(){const{metadata:e,isBlogPostPage:t}=(0,r.useBlogPost)(),{tags:a,title:s,editUrl:o,hasTruncateMarker:i}=e,c=!t&&i,m=a.length>0;return m||c||o?l.createElement("footer",{className:(0,n.default)("row docusaurus-mt-lg",t&&R)},m&&l.createElement("div",{className:(0,n.default)("col",{"col--9":c})},l.createElement(x.default,{tags:a})),t&&o&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(y.default,{editUrl:o})),c&&l.createElement("div",{className:(0,n.default)("col text--right",{"col--3":m})},l.createElement(M,{blogPostTitle:s,to:e.permalink}))):null}function U(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.useBlogPost)();return e?void 0:"margin-bottom--xl"}();return l.createElement(o,{className:(0,n.default)(s,a)},l.createElement(B,null),l.createElement(F,null,t),l.createElement(I,null))}},2760:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(7294),n=a(5999),r=a(5281),s=a(7462),o=a(6010);const i="iconEdit_Z9Sw";function c(e){let{className:t,...a}=e;return l.createElement("svg",(0,s.default)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.default)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.ThemeClassNames.common.editThisPage},l.createElement(c,null),l.createElement(n.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var l=a(7294),n=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return l.createElement(r.default,{className:(0,n.default)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&l.createElement("div",{className:"pagination-nav__sublabel"},s),l.createElement("div",{className:"pagination-nav__label"},a))}},7845:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(7294),n=a(6010),r=a(9960);const s="tag_zVej",o="tagRegular_sFm0",i="tagWithCount_h2kH";function c(e){let{permalink:t,label:a,count:c}=e;return l.createElement(r.default,{href:t,className:(0,n.default)(s,c?i:o)},a,c&&l.createElement("span",null,c))}},4049:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(7294),n=a(6010),r=a(5999),s=a(7845);const o="tags_jXut",i="tag_QGVx";function c(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.default)(o,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:i},l.createElement(s.default,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.r(t),a.d(t,{BlogPostProvider:()=>s,useBlogPost:()=>o});var l=a(7294),n=a(902);const r=l.createContext(null);function s(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:s},t)}function o(){const e=(0,l.useContext)(r);if(null===e)throw new n.ReactContextError("BlogPostProvider");return e}},8824:(e,t,a)=>{a.r(t),a.d(t,{usePluralForm:()=>c});var l=a(7294),n=a(2263);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);