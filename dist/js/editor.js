!function(){"use strict";var e={n:function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(l,{a:l}),l},d:function(t,l){for(var n in l)e.o(l,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.hooks;const l=(e,t)=>({...e,attributes:{...e.attributes,align:{type:"string",default:t}}});(0,t.addFilter)("blocks.registerBlockType","pulsar/set-default-align",((e,t)=>{switch(t){case"core/columns":case"core/media-text":return l(e,"wide");case"core/group":return l(e,"full")}return e}));var n=window.wp.element,a=window.wp.blockEditor,o=window.wp.components,r=window.wp.tokenList,s=e.n(r),c=window.wp.i18n;(0,t.addFilter)("editor.BlockEdit","pulsar/columns-block",(e=>t=>{const{attributes:l,setAttributes:r}=t,{className:i}=l,u=["sm","md","lg","xl"],d={reversed:"is-reversed-when-stacked",...u.reduce(((e,t)=>(e[t]=`is-stacked-on-${t}`,e)),{})},[m,b]=(0,n.useState)(!1),w={sm:(0,c.__)("Mobile screens."),md:(0,c.__)("Landscape mobiles and below."),lg:(0,c.__)("Tablets in portrait mode and below."),xl:(0,c.__)("Smaller laptops or tablets in landscape mode and below.")},p=(e,t)=>{const l=new(s())(i);u.forEach((t=>{t!==e&&l.remove(d[t])})),t&&l.add(e),r({className:l.value})},k=e=>l.className?.includes(e);return(0,n.useEffect)((()=>{if(l.isStackedOnMobile){const e=u.find((e=>k(d[e])));e?b(e):(b("sm"),p(d.sm,!0))}else(()=>{const e=new(s())(i);for(const t in d)e.remove(d[t]);r({className:e.value})})(),b(!1)}),[l.isStackedOnMobile]),"core/columns"===t.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,{...t}),(0,n.createElement)(a.InspectorControls,null,l.isStackedOnMobile&&(0,n.createElement)(o.PanelBody,null,(0,n.createElement)(o.__experimentalToggleGroupControl,{label:(0,c.__)("Screen sizes up to"),onChange:e=>{b(e),p(d[e],e)},value:m,isBlock:!0,help:(g=m,w[g])},u.map((e=>(0,n.createElement)(o.__experimentalToggleGroupControlOption,{key:e,value:e,label:e.toUpperCase()})))),(0,n.createElement)(o.ToggleControl,{label:(0,c.__)("Reversed when stacked"),help:(0,c.__)("Reverse columns when stacked."),checked:k(d.reversed),onChange:e=>{(e=>{const t=new(s())(i);e?t.add(d.reversed):t.remove(d.reversed),r({className:t.value})})(e)}})))):(0,n.createElement)(e,{...t});var g})),(0,t.addFilter)("editor.BlockEdit","pulsar/navigation-block",(e=>t=>{const{attributes:l,setAttributes:r}=t,{className:i,overlayMenu:u}=l,d="mobile"===u||"always"===u,m={back:"has-back-button",all:"has-view-all",title:"has-parent-title"},b=(e,t)=>{const l=new(s())(i);e?l.add(t):l.remove(t),r({className:l.value})},w=e=>{const t=new(s())(i);for(const l in e)t.remove(e[l]);r({className:t.value})},p=e=>l.className?.includes(e);return(0,n.useEffect)((()=>{if(d){const e=Object.keys(m).find((e=>p(m[e])));e?b(!0,m[e]):w()}else w()}),[u]),"core/navigation"===t.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,{...t}),(0,n.createElement)(a.InspectorControls,null,d&&(0,n.createElement)(o.PanelBody,null,(0,n.createElement)(o.ToggleControl,{label:(0,c.__)("Show back button","pulsar"),checked:p(m.back),onChange:e=>{b(e,m.back)}}),p(m.back)&&(0,n.createElement)(o.ToggleControl,{label:(0,c.__)("Show view all","pulsar"),checked:p(m.all),onChange:e=>{b(e,m.all)}}),p(m.back)&&(0,n.createElement)(o.ToggleControl,{label:(0,c.__)("Show parent title","pulsar"),checked:p(m.title),onChange:e=>{b(e,m.title)}})))):(0,n.createElement)(e,{...t})}));var i=window.wp.domReady,u=e.n(i),d=window.wp.blocks;u()((()=>{(0,d.unregisterBlockStyle)("core/button","outline")})),u()((()=>{(0,d.unregisterBlockStyle)("core/quote","plain")})),u()((()=>{(0,d.unregisterBlockStyle)("core/image","rounded")}));const m=["vimeo","youtube"];u()((()=>{(0,d.getBlockVariations)("core/embed").forEach((e=>{m.includes(e.name)||(0,d.unregisterBlockVariation)("core/embed",e.name)}))}))}();