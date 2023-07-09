"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7918],{2148:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(7462),l=a(7294),r=a(6010),s=a(5281),o=a(2802),i=a(8596),c=a(9960),d=a(4996),m=a(5999);function u(e){return l.createElement("svg",(0,n.default)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const f={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function h(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(c.default,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function v(e){let{children:t,active:a,index:s,addMicrodata:o}=e;return l.createElement("li",(0,n.default)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.default)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(s+1)}))}function b(){const e=(0,d.default)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(c.default,{"aria-label":(0,m.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.default)("breadcrumbs__link",f.breadcrumbsItemLink),href:e},l.createElement(u,{className:f.breadcrumbHomeIcon})))}function p(){const e=(0,o.useSidebarBreadcrumbs)(),t=(0,i.useHomePageRoute)();return e?l.createElement("nav",{className:(0,r.default)(s.ThemeClassNames.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,m.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(v,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(h,{href:t.href,isLast:n},t.label))})))):null}},9945:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var n=a(7294),l=a(1944),r=a(902);const s=n.createContext(null);function o(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(s.Provider,{value:l},t)}function i(){const e=(0,n.useContext)(s);if(null===e)throw new r.ReactContextError("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:a}=i();return n.createElement(l.PageMetadata,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(6010),m=a(7524),u=a(49);function f(){const{metadata:e}=i();return n.createElement(u.default,{previous:e.previous,next:e.next})}var h=a(3120),v=a(4364),b=a(5281),p=a(5999);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(p.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return n.createElement(p.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:b.ThemeClassNames.common.lastUpdated},n.createElement(p.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(2760),C=a(4049);const y="lastUpdated_vwxv";function _(e){return n.createElement("div",{className:(0,d.default)(b.ThemeClassNames.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(C.default,e)))}function k(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.default)(b.ThemeClassNames.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L.default,{editUrl:t})),n.createElement("div",{className:(0,d.default)("col",y)},(a||l)&&n.createElement(N,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function x(){const{metadata:e}=i(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,o=s.length>0,c=!!(t||a||r);return o||c?n.createElement("footer",{className:(0,d.default)(b.ThemeClassNames.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(_,{tags:s}),c&&n.createElement(k,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var T=a(6043),w=a(3743),H=a(7462);const A="tocCollapsibleButton_TO0P",U="tocCollapsibleButtonExpanded_MG3E";function M(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,H.default)({type:"button"},a,{className:(0,d.default)("clean-btn",A,!t&&U,a.className)}),n.createElement(p.default,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const B="tocCollapsible_ETCw",S="tocCollapsibleContent_vkbj",P="tocCollapsibleExpanded_sAul";function V(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:o}=(0,T.useCollapsible)({initialState:!0});return n.createElement("div",{className:(0,d.default)(B,!s&&P,a)},n.createElement(M,{collapsed:s,onClick:o}),n.createElement(T.Collapsible,{lazy:!0,className:S,collapsed:s},n.createElement(w.default,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const I="tocMobile_ITEo";function O(){const{toc:e,frontMatter:t}=i();return n.createElement(V,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.default)(b.ThemeClassNames.docs.docTocMobile,I)})}var R=a(4151);function D(){const{toc:e,frontMatter:t}=i();return n.createElement(R.default,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.ThemeClassNames.docs.docTocDesktop})}var z=a(1498),j=a(8654);function F(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=i();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.default)(b.ThemeClassNames.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(z.default,{as:"h1"},a)),n.createElement(j.default,null,t))}var q=a(2148);const $="docItemContainer_Djhp",G="docItemCol_VOVn";function W(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=i(),a=(0,m.useWindowSize)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(O,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(D,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.default)("col",!a.hidden&&G)},n.createElement(h.default,null),n.createElement("div",{className:$},n.createElement("article",null,n.createElement(q.default,null),n.createElement(v.default,null),a.mobile,n.createElement(F,null,t),n.createElement(x,null)),n.createElement(f,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function Z(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(o,{content:e.content},n.createElement(l.HtmlClassNameProvider,{className:t},n.createElement(c,null),n.createElement(W,null,n.createElement(a,null))))}},49:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(7462),l=a(7294),r=a(5999),s=a(2244);function o(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(s.default,(0,n.default)({},t,{subLabel:l.createElement(r.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(s.default,(0,n.default)({},a,{subLabel:l.createElement(r.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),l=a(6010),r=a(5999),s=a(5281),o=a(4477);function i(e){let{className:t}=e;const a=(0,o.useDocsVersion)();return a.badge?n.createElement("span",{className:(0,l.default)(t,s.ThemeClassNames.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3120:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(7294),l=a(6010),r=a(2263),s=a(9960),o=a(5999),i=a(143),c=a(5281),d=a(373),m=a(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function f(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.default,{to:a,onClick:l},n.createElement(o.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,r.default)(),{pluginId:o}=(0,i.useActivePlugin)({failfast:!0}),{savePreferredVersionName:m}=(0,d.useDocsPreferredVersion)(o),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,i.useDocVersionSuggestions)(o),b=u??(p=v).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,l.default)(t,c.ThemeClassNames.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(f,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:v.label,to:b.path,onClick:()=>m(v.name)})))}function b(e){let{className:t}=e;const a=(0,m.useDocsVersion)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},2760:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7294),l=a(5999),r=a(5281),s=a(7462),o=a(6010);const i="iconEdit_Z9Sw";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.default)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.default)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.ThemeClassNames.common.editThisPage},n.createElement(c,null),n.createElement(l.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(7294),l=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return n.createElement(r.default,{className:(0,l.default)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},4151:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7462),l=a(7294),r=a(6010),s=a(3743);const o="tableOfContents_bqdL";function i(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.default)(o,"thin-scrollbar",t)},l.createElement(s.default,(0,n.default)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(7462),l=a(7294),r=a(6668);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function o(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function c(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>i(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.useThemeConfig)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),i=c(o,{anchorTopOffset:a.current}),d=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const f=l.memo(u);function h(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...h}=e;const v=(0,r.useThemeConfig)(),b=d??v.tableOfContents.minHeadingLevel,p=u??v.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>o({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:b,maxHeadingLevel:p});return m((0,l.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:p}}),[i,c,b,p])),l.createElement(f,(0,n.default)({toc:g,className:a,linkClassName:i},h))}},7845:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(7294),l=a(6010),r=a(9960);const s="tag_zVej",o="tagRegular_sFm0",i="tagWithCount_h2kH";function c(e){let{permalink:t,label:a,count:c}=e;return n.createElement(r.default,{href:t,className:(0,l.default)(s,c?i:o)},a,c&&n.createElement("span",null,c))}},4049:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(7294),l=a(6010),r=a(5999),s=a(7845);const o="tags_jXut",i="tag_QGVx";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.default)(o,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i},n.createElement(s.default,{label:t,permalink:a}))}))))}},3475:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(7462),l=a(7294),r=a(2389),s=a(1170),o=a(1903),i=a(1262),c=a(2949),d=a(4440),m=a(6010);const u={enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,highlightActiveLine:!1,showPrintMargin:!1},f=e=>{e.renderer.setScrollMargin(10,10,0,0),e.moveCursorTo(0,0)};function h(e){const{code:t}=e,[n,r]=(0,l.useState)(t.trimEnd()),[s,o]=(0,l.useState)(!1);(0,l.useEffect)((()=>{r(t.trimEnd()),o(!1)}),[t]);const{colorMode:h}=(0,c.useColorMode)(),{runPython:v,stdout:b,stderr:p,isLoading:g,isRunning:E,interruptExecution:N}=(0,d.usePython)();return l.createElement("div",{className:"relative mb-10"},l.createElement(i.default,{fallback:l.createElement("div",null,"Loading...")},(()=>{const e=a(4981).default;return a(4007),a(2692),a(7787),a(2679),l.createElement(e,{value:n,mode:"python",name:"CodeBlock",fontSize:"0.9rem",className:"min-h-[3.5rem] overflow-clip rounded shadow-md",theme:"dark"===h?"dracula":"chrome",onChange:e=>r(e),width:"100%",maxLines:1/0,onLoad:f,editorProps:{$blockScrolling:!0},setOptions:u})})),l.createElement("span",{className:"absolute top-2 right-2 z-10 inline-flex rounded-md shadow-sm"},E?l.createElement("button",{onClick:function(){N(),o(!1)},type:"button",className:"relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100"},"Stop"):l.createElement("button",{onClick:function(){v(n),o(!0)},type:"button",disabled:g||E,className:(0,m.default)("relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700",g?"opacity-50":"opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100")},"Run"),l.createElement("button",{onClick:function(){o(!1),r(t.trimEnd())},type:"button",disabled:E,className:(0,m.default)("relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700",E?"opacity-50":"opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100")},"Reset")),s&&l.createElement("pre",{className:"mt-4 text-left"},l.createElement("code",null,b),l.createElement("code",{className:"text-red-500"},p)))}function v(e){let{children:t,...a}=e;const i=(0,r.default)(),c=function(e){return l.Children.toArray(e).some((e=>(0,l.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t);if("language-python"===a.className&&a.enablePythonEditor)return l.createElement(h,{code:c});{const e="string"==typeof c?o.default:s.default;return l.createElement(e,(0,n.default)({key:String(i)},a),c)}}}}]);