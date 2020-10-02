(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(11),a=(n(0),n(221)),c={title:"Render Components"},i={id:"infrastructure/fb/rendercomponents/components",title:"Render Components",description:"We have couple new components in ComponentKit that conform to the render protocol.",source:"@site/docs/infrastructure/fb/rendercomponents/components.md",permalink:"/docs/infrastructure/fb/rendercomponents/components"},p=[{value:"<code>CKRenderComponent</code>",id:"ckrendercomponent",children:[]},{value:"<strong>Interface</strong>",id:"interface",children:[]},{value:"<strong>Constructor</strong>",id:"constructor",children:[]},{value:"<strong>Render method</strong>",id:"render-method",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We have couple new components in ComponentKit that conform to the render protocol."),Object(a.b)("h2",{id:"ckrendercomponent"},Object(a.b)("inlineCode",{parentName:"h2"},"CKRenderComponent")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Replaces",Object(a.b)("inlineCode",{parentName:"li"},"CKCompositeComponent"),"."),Object(a.b)("li",{parentName:"ul"},"Has a single child."),Object(a.b)("li",{parentName:"ul"},"No custom layout is allowed (same as ",Object(a.b)("inlineCode",{parentName:"li"},"CKCompositeComponent"),")."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"faster-state-update"}),Object(a.b)("strong",{parentName:"a"},"Faster state updates"))," support out-of-the-box"),Object(a.b)("li",{parentName:"ul"},"For the ",Object(a.b)("strong",{parentName:"li"},"majority")," of the cases, you ",Object(a.b)("strong",{parentName:"li"},"should subclass from")," ",Object(a.b)("inlineCode",{parentName:"li"},"CKRenderComponent")," - same as the general recommendation to use ",Object(a.b)("inlineCode",{parentName:"li"},"CKCompositeComponent"),".")),Object(a.b)("h2",{id:"interface"},Object(a.b)("strong",{parentName:"h2"},"Interface")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"#import <ComponentKit/CKRenderComponent.h>\n\n@interface MyRenderComponent : CKRenderComponent\n+ (instancetype)newWithText:(NSString *)text;\n\n@end\n")),Object(a.b)("h2",{id:"constructor"},Object(a.b)("strong",{parentName:"h2"},"Constructor")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Creates the ",Object(a.b)("strong",{parentName:"li"},"component")," itself only (no other components)."),Object(a.b)("li",{parentName:"ul"},"Saves all the props (passing parameters) to iVars.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"@implementation MyRenderComponent\n{\n  NSString *_text;\n}\n\n+ (instancetype)newWithText:(NSString *)text\n{\n  auto const c = [super new];\n  if (c) {\n    c->_text = text;\n  }\n  return c;\n}\n")),Object(a.b)("h2",{id:"render-method"},Object(a.b)("strong",{parentName:"h2"},"Render method")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This method responsible to create the component's child."),Object(a.b)("li",{parentName:"ul"},"It receives the state as a parameter (Only if there is an initial state)."),Object(a.b)("li",{parentName:"ul"},"Might not be called if the component has been ",Object(a.b)("strong",{parentName:"li"},"reused"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"- (CKComponent *)render:(id)state\n{\n  const BOOL multiLine = [state boolValue];\n  return multiLine\n         ? [MultiLineTextComponent newWithText:text]\n         : [SingleLineTextComponent newWithText:text];\n}\n")))}s.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(d,i({ref:t},l,{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);