"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[26],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},989:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Quality Assurance & Awarding"},l=void 0,u={unversionedId:"quality_assessment_and_awarding/intro",id:"quality_assessment_and_awarding/intro",isDocsHomePage:!1,title:"Quality Assurance & Awarding",description:"The Quality Assessment & Awarding (QAA) module analyzes the level of",source:"@site/docs/quality_assessment_and_awarding/intro.md",sourceDirName:"quality_assessment_and_awarding",slug:"/quality_assessment_and_awarding/intro",permalink:"/quality_assessment_and_awarding/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/quality_assessment_and_awarding/intro.md",version:"current",frontMatter:{title:"Quality Assurance & Awarding"},sidebar:"tutorialSidebar",previous:{title:"Summary report",permalink:"/pipeline_as_a_service/summary"},next:{title:"Badging in EOSC-Synergy",permalink:"/quality_assessment_and_awarding/synergy_badging_approach"}},c=[{value:"What does the QAA module bring?",id:"what-does-the-qaa-module-bring",children:[]},{value:"What happens under the hood?",id:"what-happens-under-the-hood",children:[]},{value:"Certifying the results",id:"certifying-the-results",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Quality Assessment & Awarding (QAA)")," module analyzes the level of\ncompliance of a given code repository with a set of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/indigo-dc/sqa-baseline"},"standards for software"),"."),(0,i.kt)("h2",{id:"what-does-the-qaa-module-bring"},"What does the QAA module bring?"),(0,i.kt)("p",null,"For any given code repository the QAA performs an assessment through the\nselection and subsquent execution of the right set of open source tools. The\ntools that will be ran for each quality criterion (such as licensing,\ndocumentation, unit or security testing) are defined beforehand, and their\noutputs are parsed in order to certify whether such criterion was successfully\nor unsuccessfully fulfilled."),(0,i.kt)("p",null,"With this information the QAA provides two main outcomes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("strong",{parentName:"li"},"quality report")," with the results of the assessment. The validity of\neach quality criterion is computed according to the outputs provided by the\ntools."),(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("strong",{parentName:"li"},"digital badge")," highlighting the achievements of the software. The\nSQAaaS supports three of badges for software that, from lowest to highest\nlevels of quality are: bronze, silver and gold.")),(0,i.kt)("h2",{id:"what-happens-under-the-hood"},"What happens under the hood?"),(0,i.kt)("p",null,"Unsurprinsingly, the assessment process uses a CI/CD pipeline in order to\nexecute the complete set of tools that will evaluate the multiple quality\nattributes covered in the criteria. The pipeline is composed by several stages\nand defined according to the following requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"each stage in the pipeline executes a single tool,"),(0,i.kt)("li",{parentName:"ul"},"the stages are run sequentially, and"),(0,i.kt)("li",{parentName:"ul"},"the execution of the pipeline is not interrupted if a stage fails.")),(0,i.kt)("h2",{id:"certifying-the-results"},"Certifying the results"),(0,i.kt)("p",null,"The selection and execution of the appropriate tools that take part in the\nquality assessment process must be accompanied by the validation of their\noutputs. Thus, it is not enough to just rely on the exit status of each tool,\nbut also to inspect the output of the tool as the only way to ensure that any\ngiven quality attribute has been properly evaluated."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Digital badges are the result of the certification process"),". They are issued\nusing the ",(0,i.kt)("a",{parentName:"p",href:"https://info.badgr.com/"},"Badgr platform")," that implements the ",(0,i.kt)("a",{parentName:"p",href:"https://openbadges.org/"},"Open\nBadges specification"),". Hence, each badge has\nassociated metadata that is used by the SQAaaS to store relevant data about\nthe quality assessment process, such as pointers to the standard (with the\ndefinition of the quality criteria), or the build data, using permanent links\nto the continuous integration (CI) system. The image below shows the metadata,\nas it is displayed by Badgr, for an awarded badge:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/badge_metadata.png",alt:"Badge metadata"})))}p.isMDXComponent=!0}}]);