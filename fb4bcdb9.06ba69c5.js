(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(11),i=(n(0),n(231)),a={title:"Focus on content"},c={id:"ckswift-content",title:"Focus on content",description:"ComponentKit\u2019s hierarchical code structure very closely matched the final component structure. For example, to centre & inset a component one would first need to describe the containers and then the content as such:",source:"@site/docs/ckswift-content.md",permalink:"/docs/ckswift-content",sidebar:"docs",previous:{title:"State, state updates & bindings",permalink:"/docs/ckswift-state"},next:{title:"Never Subclass Components",permalink:"/docs/never-subclass-components"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ComponentKit\u2019s hierarchical code structure very closely matched the final component structure. For example, to centre & inset a component one would first need to describe the containers and then the content as such:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"// ComponentKit\nCK::CenterLayoutComponentBuilder() // Layout container\n .child(\n   CK::InsetComponentBuilder() // Layout container\n    .insetLeft(42)\n    .component(\n      ContentComponent().build() // Content\n    )\n    .build()\n )\n .build();\n")),Object(i.b)("p",null,"While the above syntax makes it easy to compare side by side the code with the component tree, it makes it harder for us humans to quickly parse and understand what is happening as our mind have a tendency to first think about the subject (i.e the content) and then its ornaments."),Object(i.b)("p",null,"With CKSwift we\u2019ve instead opted to borrow the SwiftUI approach to focus on content first, followed by ornaments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"// CKSwift\nlet wrappedContent = ContentView() // Content\n  .inset(left: 42) // Container\n  .center() // Container\n")),Object(i.b)("p",null,"If you\u2019d like to explore more product code written with CKSwift, have a look ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.internalfb.com/intern/codesearch/path/fbsource/fbobjc/Apps/WorkSpeed/Libraries/WPMEmojiStatusSettingsKit/WPMEmojiStatusSettingsKitSwift/Views/EmojiStatusEditorView.swift?find_case_sensitive=false&find_regex=true&find_text=.swift&highlighted_tokens=%2F%2F%20(c)%20Facebook%2C%20Inc.%20and%20its%20affiliates.%20Confidential%20and%20proprietary.&lines=21&repo=fbsource&revision=28a6f7e3b5c35d42cd5ca34f58aed2b2c74b0893"}),"here"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.internalfb.com/intern/codesearch/path/fbsource/fbobjc/Apps/WorkSpeed/Libraries/WPMEmojiStatusSettingsKit/WPMEmojiStatusSettingsKitSwift/Views/EmojiStatusCellView.swift?find_case_sensitive=false&find_regex=true&find_text=.swift&lines&repo=fbsource&revision=578449229c7ed68bad415862fab894f5170c3634"}),"there")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.internalfb.com/intern/codesearch/path/fbsource/fbobjc/Apps/WorkSpeed/Libraries/WPMEmojiStatusSettingsKit/WPMEmojiStatusSettingsKitSwift/Views/EmojiStatusPickerView.swift?find_case_sensitive=false&find_regex=true&find_text=.swift&lines&repo=fbsource&revision=578449229c7ed68bad415862fab894f5170c3634"}),"there"),"."))}u.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,b=f["".concat(a,".").concat(d)]||f[d]||l[d]||i;return n?o.a.createElement(b,c({ref:t},p,{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);