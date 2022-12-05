"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[266],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=d(t),u=r,h=g["".concat(l,".").concat(u)]||g[u]||p[u]||i;return t?n.createElement(h,s(s({ref:a},c),{},{components:t})):n.createElement(h,s({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2375:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const i={title:"Sharing the badges"},s=void 0,o={unversionedId:"quality_assessment_and_awarding/share",id:"quality_assessment_and_awarding/share",isDocsHomePage:!1,title:"Sharing the badges",description:"The digital badges obtained when assessing digital assets with SQAaaS can be",source:"@site/docs/quality_assessment_and_awarding/share.md",sourceDirName:"quality_assessment_and_awarding",slug:"/quality_assessment_and_awarding/share",permalink:"/quality_assessment_and_awarding/share",version:"current",frontMatter:{title:"Sharing the badges"},sidebar:"tutorialSidebar",previous:{title:"Analysing the results",permalink:"/quality_assessment_and_awarding/report"},next:{title:"Scan GitHub organisation in Jenkins",permalink:"/advanced/jenkins_scan_organisation"}},l=[{value:"EOSC-Synergy badge image",id:"eosc-synergy-badge-image",children:[]},{value:"shields.io badge",id:"shieldsio-badge",children:[]}],d={toc:l};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The digital badges obtained when assessing digital assets with SQAaaS can be\nshared in popular code and data repository platforms. Here we offer two ways of\ndoing so, either by using a custom entry that uses the EOSC-Synergy badge image\nor through the ",(0,r.kt)("a",{parentName:"p",href:"https://shields.io/"},"shields.io")," common badge solution. "),(0,r.kt)("p",null,"The specific code in Markdown, ready to be copy-pasted, is available for each\nof the options, so that when the badge is clicked, you will be redirected to a\n",(0,r.kt)("a",{parentName:"p",href:"https://info.badgr.com/"},"Badgr")," page with all the information about the\nquality attributes of the badge. Besides, you will be able to perform\nadditional operations such as verifying the badges."),(0,r.kt)("h3",{id:"eosc-synergy-badge-image"},"EOSC-Synergy badge image"),(0,r.kt)("p",null,"In this case, we will use a 150x116 pixel sized image so that it does not take\nmuch space in your README. The proposed solution would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'#### Achievements \n[![SQAaaS badge](https://github.com/EOSC-synergy/SQAaaS/raw/master/badges/badges_150x116/badge_software_bronze.png)](https://eu.badgr.com/public/assertions/bw3v-fVCR6eJoMjwG11afw "SQAaaS bronze badge achieved")\n')),(0,r.kt)("p",null,"which would be rendered as:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/badge_share_image.png"})),(0,r.kt)("h3",{id:"shieldsio-badge"},"shields.io badge"),(0,r.kt)("p",null,"The popular ",(0,r.kt)("a",{parentName:"p",href:"https://shields.io/"},"shields.io")," can be also be used to share a\nSQAaaS badge:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'[![SQAaaS badge shields.io](https://img.shields.io/badge/sqaaas%20software-bronze-e6ae77)](https://eu.badgr.com/public/assertions/bw3v-fVCR6eJoMjwG11afw "SQAaaS bronze badge achieved")\n')),(0,r.kt)("p",null,"which would be rendered as:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/badge_share_shields.png"})))}c.isMDXComponent=!0}}]);