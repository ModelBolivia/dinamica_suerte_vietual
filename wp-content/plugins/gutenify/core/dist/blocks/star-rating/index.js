(()=>{var t,e={6485:(t,e,n)=>{"use strict";const r=window.React,a=window.wp.i18n,o=window.wp.components,l=window.wp.blocks;var i=n(6942),s=n.n(i);const c=window.wp.blockEditor,u=t=>{const{children:e,name:n,className:a}=t,o=n.replace("/","-")+"-section",l=s()(o,a);return(0,r.createElement)("div",{className:l},e)},f=window.lodash,p=({rating:t,blockAdvanceOptions:e})=>{const n=e?.starStyle?e.starStyle:"default",a=e?.maxRating?e.maxRating:5,o=(0,f.floor)(t),l=t%1!=0;let i=a-o;i=l&&i>0?i-1:i;const s=[];for(let t=0;t<o;t++){let e="thumbs-up"===n?"fas fa-thumbs-up":"fas fa-star";e="thumbs-up-fill"===n?"fas fa-thumbs-up":e,e="smiley"===n?"fas fa-smile":e,e="smiley-fill"===n?"fas fa-smile":e,s.push((0,r.createElement)("span",{className:e+" gutenify-star-rating-filled",key:`rating-filled-${t}`}))}if(l){let t="fas fa-star-half-alt";t="thumbs-up"===n?"fas fa-thumbs-up":t,t="thumbs-up-fill"===n?"fas fa-thumbs-up":t,t="smiley"===n?"fas fa-smile":t,t="smiley-fill"===n?"fas fa-smile":t,s.push((0,r.createElement)("span",{className:t+" gutenify-star-rating-half",key:"rating-half"}))}if(i>0&&"just-marked"!==n)for(let t=0;t<i;t++){let e="default-fill"===n?"fas fa-star":"far fa-star";e="thumbs-up"===n?"far fa-thumbs-down":e,e="thumbs-up-fill"===n?"fas fa-thumbs-down":e,e="smiley"===n?"far fa-frown":e,e="smiley-fill"===n?"fas fa-frown":e,s.push((0,r.createElement)("span",{className:e+" gutenify-star-rating-empty",key:`rating-empty-${t}`}))}return(0,r.createElement)(r.Fragment,null,s)},m=JSON.parse('{"UU":"gutenify/star-rating","rE":"2","uK":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"textColor":"#ff9800"}},"rating":{"type":"number","default":5},"textAlignment":{"type":"string","default":"center"}}}'),g=window.wp.hooks,d=window.wp.element,{UU:b}=m,y={name:b,blockId:b.replace("/","--"),hookPrefix:"star-rating"},h="gutenify",v=window?.[`_${h}_vars`]?window[`_${h}_vars`]:{},{is_pro_activated:$,pro_account_url:k,pro_license_status:w,title:_,prefix:x,slug:E,authorWebSite:C,authorDemoWebSite:S,authorWebSiteProPage:O,defaultTheme:A,authorWebSiteSupport:U,plugin_directory_url:I,brand_color:R,plugin_main_version:j,documentationsURL:P,pro_title:F,active_blocks:M,plugin_main_camel_case_name:N}=v,T=(v?.siteUrl?v.siteUrl:v.site_url,(0,a.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+O+'" target="_blank">',F,"</a>"),{pluginMainSlug:"gutenify",pluginMainCamelCaseName:N,pluginMainFunctionPrefix:"gutenify"}),{blockId:W}=y,{pluginMainSlug:B}=T;(0,g.addFilter)(`${B}--block-controls--${W}`,`${B}--block-controls--${W}--alignment`,((t,e)=>{const{attributes:n,setAttributes:a}=e,{textAlignment:o}=n;return[...t,(0,r.createElement)(d.Fragment,{key:`${B}--block-controls--${W}--alignment`},(0,r.createElement)(c.AlignmentToolbar,{value:o,onChange:t=>{a({textAlignment:t})}}))]}));const{blockId:K}=y,{pluginMainSlug:D}=T;(0,g.addFilter)(`${D}--inspector-controls--${K}--content`,`${D}--inspector-controls--${K}--content--opitons`,((t,e)=>{const{attributes:n,setAttributes:l}=e,{rating:i,blockAdvanceOptions:s}=n,c=s?.maxRating?s.maxRating:5;return[...t,(0,r.createElement)(d.Fragment,{key:`${D}--inspector-controls--${K}--content--opitons`},(0,r.createElement)(o.RangeControl,{label:(0,a.__)("Rating"),value:i,onChange:t=>{l({rating:t})},min:0,max:c,step:.5}))]}));const G=window.wp.data,J=t=>{const{clearable:e=!0}=t,{colors:n}=(0,G.useSelect)((t=>({colors:t("core/block-editor").getSettings().colors||[]})));return(0,r.createElement)(o.BaseControl,{label:t.label,id:"textcolor-1"},(0,r.createElement)(o.ColorPalette,{colors:n,value:t.value,onChange:e=>{t.onChange(e)},clearable:e}))};d.Component;const{blockId:L}=y,{pluginMainSlug:q}=T;(0,g.addFilter)(`${q}--inspector-controls--${L}--style`,`${q}--inspector-controls--${L}--style--opitons`,((t,e)=>{const{attributes:n,setAttributes:o}=e,{blockAdvanceOptions:l}=n;return[...t,(0,r.createElement)(d.Fragment,{key:`${q}--inspector-controls--${L}--style--opitons`},(0,r.createElement)(J,{label:(0,a.__)("Icon Color (Marked)"),onChange:t=>{const e={blockAdvanceOptions:{...l,textColor:t}};o(e)},value:l.textColor}))]}));const{blockId:z,name:H,hookPrefix:Q}=y,{pluginMainSlug:V}=T;(0,g.addFilter)(`${V}--inline-styles--${z}`,`${V}--inline-styles--${z}--button`,((t,e,n="")=>{const{attributes:r,name:a}=e;if(a!==H)return t;const{blockAdvanceOptions:o,blockClientId:l}=r;n=n||`.${V}-section-${l} .${V}-star-rating-filled, .${V}-section-${l} .${V}-star-rating-half`;let i="";return i+=(0,f.has)(o,"textColor")&&!(0,f.isEmpty)(o.textColor)?`color: ${o.textColor};`:"",i&&(t+=`${n} { ${i} }`),(0,g.applyFilters)(`${V}--${Q}--inline-styles`,t,e)}));const{starRating:X}=window?.[`_${x}_vars`]?.components?.Icons,{UU:Y,uK:Z}=m,tt={title:(0,a.__)("Star Rating"),description:(0,a.__)("Gutenify Star Rating"),icon:(0,r.createElement)(o.Icon,{icon:X}),keywords:["gutenify",(0,a.__)("Star Rating"),(0,a.__)("rating")],example:{attributes:{}},attributes:Z,edit:t=>{const{attributes:e}=t,{textAlignment:n,blockClientId:a}=e,o=s()(`is-content-justification-${n}`,`gutenify-section-${a}`,`${m.UU.replace(/\//gm,"-")}-version-${m.rE}`),l=(0,c.useBlockProps)({className:o});return(0,r.createElement)("div",{...l},(0,r.createElement)(u,{...t},(0,r.createElement)(p,{...e})))},save:function(t){const{attributes:e}=t,{textAlignment:n,blockClientId:a}=e,o=s()(`is-content-justification-${n}`,`gutenify-section-${a}`,`${m.UU.replace(/\//gm,"-")}-version-${m.rE}`),l=c.useBlockProps.save({className:o});return(0,r.createElement)("div",{...l},(0,r.createElement)(u,{...t,name:"gutenify/star-rating"},(0,r.createElement)(p,{...e})))}};(0,l.registerBlockType)(Y,{...tt})},6942:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=l(t,o(n)))}return t}function o(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return a.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=l(e,n));return e}function l(t,e){return e?t?t+" "+e:t+e:t}t.exports?(a.default=a,t.exports=a):void 0===(n=function(){return a}.apply(e,[]))||(t.exports=n)}()}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.m=e,t=[],r.O=(e,n,a,o)=>{if(!n){var l=1/0;for(u=0;u<t.length;u++){for(var[n,a,o]=t[u],i=!0,s=0;s<n.length;s++)(!1&o||l>=o)&&Object.keys(r.O).every((t=>r.O[t](n[s])))?n.splice(s--,1):(i=!1,o<l&&(l=o));if(i){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,a,o]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={4026:0,9342:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var a,o,[l,i,s]=n,c=0;if(l.some((e=>0!==t[e]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(s)var u=s(r)}for(e&&e(n);c<l.length;c++)o=l[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},n=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var a=r.O(void 0,[9342],(()=>r(6485)));a=r.O(a)})();