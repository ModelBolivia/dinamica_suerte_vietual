(()=>{var e,t={3055:(e,t,l)=>{"use strict";const a=window.React,n=window.wp.i18n,i=window.wp.components,r=window.wp.blocks;var o=l(6942),c=l.n(o);const s=window.wp.element,m=window.wp.data,u=window.wp.blockEditor,d=window.wp.compose,g=window.wp.hooks,p=JSON.parse('{"UU":"gutenify/slider","uK":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{}},"columns":{"type":"number","default":1},"spaceBetween":{"type":"number","default":10},"hasNavigation":{"type":"boolean","default":true},"hasPagination":{"type":"boolean","default":true},"isAutoplay":{"type":"boolean","default":false}}}'),{UU:h}=p,w={name:h,blockId:h.replace("/","--"),hookPrefix:"slider",layouts:[{name:"layout-1",label:"Layout 1",iconAlign:"center",titleAlign:"center",buttonAlign:"center"},{name:"layout-2",label:"Layout 2",iconAlign:"center",titleAlign:"left",buttonAlign:"left"},{name:"layout-3",label:"Layout 3",iconAlign:"center",titleAlign:"right",buttonAlign:"right"},{name:"layout-4",label:"Layout 4",iconAlign:"center",titleAlign:"right",buttonAlign:"right"},{name:"layout-5",label:"Layout 5",iconAlign:"center",titleAlign:"right",buttonAlign:"right"}]},f="gutenify",v=window?.[`_${f}_vars`]?window[`_${f}_vars`]:{},{is_pro_activated:C,pro_account_url:b,pro_license_status:E,title:y,prefix:_,slug:A,authorWebSite:x,authorDemoWebSite:L,authorWebSiteProPage:k,defaultTheme:H,authorWebSiteSupport:M,plugin_directory_url:V,brand_color:Z,plugin_main_version:S,documentationsURL:B,pro_title:$,active_blocks:N,plugin_main_camel_case_name:P}=v,O=(v?.siteUrl?v.siteUrl:v.site_url,(0,n.sprintf)("Want to enjoy all feature of blocks? Checkout %1$s%2$s%3$s.",'<a href="'+k+'" target="_blank">',$,"</a>"),{pluginMainSlug:"gutenify",pluginMainCamelCaseName:P,pluginMainFunctionPrefix:"gutenify"}),{blockId:I}=w,{pluginMainSlug:z}=O,F=({layouts:e,label:t="Layouts",value:l,onChange:n,blockName:r})=>{e=(0,g.applyFilters)(`${A}--layouts--${r}`,e);const o=r.replace(new RegExp(A+"--","gi"),"");return(0,a.createElement)(a.Fragment,null,e&&e.length?(0,a.createElement)("div",{className:`${A}-template-browser`},(0,a.createElement)(i.Flex,{direction:"column",gap:"20px"},(0,a.createElement)(i.FlexBlock,null,(0,a.createElement)("h2",null,t)),(0,a.createElement)(i.FlexBlock,null,(0,a.createElement)("ul",null,e.map((e=>{let t=`${A}-template-browser-item`;return l===e.name&&(t+=` ${A}-template-browser-item-active`),(0,a.createElement)("li",{className:t,key:e.name},(0,a.createElement)("button",{className:`${A}-template-browser-selector`,onClick:()=>{n(e)}},(0,a.createElement)("img",{src:e?.thumbnailUrl?e.thumbnailUrl:`${V}/assets/images/layouts/${o}/${e.name}.png`,alt:e.name}),(0,a.createElement)("small",null,e.label)))})))))):"")},{Accordion:U}=window?.[`_${_}_vars`]?.components,{hookPrefix:T,layouts:j,blockId:G}=w,{pluginMainSlug:R}=O;(0,g.addFilter)(`${R}--inspector-controls--${G}--content`,`${R}--inspector-controls--${G}--content--options`,((e,t)=>{const{attributes:l,setAttributes:r}=t,{columns:o,hasNavigation:c,hasPagination:m,spaceBetween:u,blockAdvanceOptions:d}=l,{layout:p}=d;return[...e,(0,a.createElement)(s.Fragment,{key:`gutenify-block-${G}-options-tab-content-basic`},(0,a.createElement)(U,{tabs:[{name:"slider-options",initialOpen:!0,label:()=>(0,n.__)("Slider"),cb:()=>(0,a.createElement)(s.Fragment,null,(0,a.createElement)(F,{layouts:j,value:p,blockName:G,onChange:e=>{const t={...d,layout:e.name};r({blockAdvanceOptions:t})}}),(0,a.createElement)(i.RangeControl,{label:(0,n.__)("Columns"),value:o,onChange:e=>{r({columns:e})},min:1,max:(0,g.applyFilters)(`${R}--${G}--max-columns`,3),step:1}),(0,a.createElement)(i.RangeControl,{label:(0,n.__)("Slider space"),value:u,onChange:e=>{r({spaceBetween:e})},min:0,max:100,step:1,help:(0,n.__)("Space between each slide.")}),(0,a.createElement)(i.ToggleControl,{label:(0,n.__)("Enable Navigation","gutenify"),checked:c,help:c?(0,n.__)("Showing slider navigation.","gutenify"):(0,n.__)("Toggle to enable slider navigation.","gutenify"),onChange:()=>r({hasNavigation:!c})}),(0,a.createElement)(i.ToggleControl,{label:(0,n.__)("Enable Pagination","gutenify"),checked:m,help:m?(0,n.__)("Showing slider pagination.","gutenify"):(0,n.__)("Toggle to enable slider pagination.","gutenify"),onChange:()=>r({hasPagination:!m})}),(0,g.applyFilters)(`gutenify--${T}--inspector--tab-content--slider`,[],t))}]}))]}));const W=e=>{const{children:t,name:l,className:n}=e,i=l.replace("/","-")+"-section",r=c()(i,n);return(0,a.createElement)("div",{className:r},t)},D=window.wp.primitives,K=((0,a.createElement)(D.SVG,{fill:"none","view-box":"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(D.G,{fill:Z},(0,a.createElement)(D.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"}))),(0,a.createElement)(D.SVG,{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,a.createElement)(D.Rect,{height:"14.5",rx:".875",stroke:Z,strokeWidth:"1.5",width:"14.5",x:"4.75",y:"4.75",fill:"none"}),(0,a.createElement)(D.Path,{d:"m5.06667 14.6666 3.9619-2.1334 2.97143 1.4222 3.4667-2.4888 3.4666 2.4888",stroke:Z,strokeLinejoin:"round",strokeWidth:"1.5",fill:"none"}),(0,a.createElement)(D.G,{fill:Z},(0,a.createElement)(D.Path,{d:"m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"}),(0,a.createElement)(D.Path,{d:"m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"})))),J=((0,a.createElement)(D.SVG,{width:"27",height:"13",viewBox:"0 0 27 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(D.Rect,{width:"27",height:"13",rx:"6.5",fill:"#05A015"}),(0,a.createElement)(D.Path,{d:"M6.57812 6.99609L6.22656 9H5.08203L6.07031 3.3125L8.0625 3.31641C8.67708 3.31641 9.16016 3.48698 9.51172 3.82812C9.86328 4.16927 10.0169 4.61458 9.97266 5.16406C9.93099 5.72135 9.69792 6.16667 9.27344 6.5C8.85156 6.83333 8.3125 7 7.65625 7L6.57812 6.99609ZM6.73828 6.04688L7.69141 6.05469C7.9987 6.05469 8.25391 5.97526 8.45703 5.81641C8.66016 5.65755 8.78125 5.44271 8.82031 5.17188C8.85938 4.90104 8.8151 4.6849 8.6875 4.52344C8.5625 4.36198 8.3763 4.27604 8.12891 4.26562L7.05078 4.26172L6.73828 6.04688ZM12.5664 6.91797H11.6367L11.2734 9H10.1289L11.1172 3.3125L13 3.31641C13.6302 3.31641 14.1146 3.46484 14.4531 3.76172C14.7943 4.05859 14.9453 4.47135 14.9062 5C14.8516 5.78125 14.4349 6.32422 13.6562 6.62891L14.457 8.9375V9H13.2383L12.5664 6.91797ZM11.8008 5.96875L12.6523 5.97656C12.9544 5.97135 13.2031 5.89062 13.3984 5.73438C13.5964 5.57552 13.7148 5.36068 13.7539 5.08984C13.7904 4.83724 13.75 4.63932 13.6328 4.49609C13.5156 4.35286 13.3294 4.27604 13.0742 4.26562L12.0977 4.26172L11.8008 5.96875ZM17.4062 9.07812C17.0286 9.07031 16.6953 8.98177 16.4062 8.8125C16.1198 8.64062 15.8919 8.39453 15.7227 8.07422C15.556 7.7513 15.4596 7.38151 15.4336 6.96484C15.4049 6.53776 15.4505 6.08203 15.5703 5.59766C15.6901 5.11328 15.8828 4.6875 16.1484 4.32031C16.4141 3.95312 16.7253 3.67839 17.082 3.49609C17.4414 3.3138 17.8294 3.22656 18.2461 3.23438C18.6289 3.24219 18.9635 3.33333 19.25 3.50781C19.5365 3.67969 19.7617 3.92839 19.9258 4.25391C20.0898 4.57682 20.1836 4.94401 20.207 5.35547C20.2331 5.8138 20.1836 6.28516 20.0586 6.76953C19.9336 7.25391 19.7396 7.67318 19.4766 8.02734C19.2135 8.38151 18.9049 8.64714 18.5508 8.82422C18.1992 9.0013 17.8177 9.08594 17.4062 9.07812ZM19.0273 6L19.0586 5.62891C19.0846 5.16536 19.0221 4.8138 18.8711 4.57422C18.7227 4.33464 18.4961 4.20964 18.1914 4.19922C17.7148 4.18359 17.3359 4.39453 17.0547 4.83203C16.776 5.26953 16.6185 5.88151 16.582 6.66797C16.556 7.12891 16.6172 7.48438 16.7656 7.73438C16.9141 7.98177 17.1445 8.11068 17.457 8.12109C17.8659 8.13932 18.2044 7.98047 18.4727 7.64453C18.7409 7.30599 18.9167 6.82812 19 6.21094L19.0273 6Z",fill:"white"})),(0,a.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,a.createElement)("path",{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z",fill:Z})),(0,a.createElement)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1080 1080",xmlSpace:"preserve"},(0,a.createElement)("g",null,(0,a.createElement)("g",null,(0,a.createElement)("path",{className:"st0",d:"M828.5,552.9c-6.8,152.9-133.3,275.1-287.9,275.1c-158.9,0-288.2-129.3-288.2-288.2 c0-150.6,116.2-274.5,263.5-287.1V0.4C229.1,13.2,0.5,249.9,0.5,539.9c0,298.2,241.7,540.1,540.1,540.1 c293.9,0,533-234.8,539.8-527H828.5V552.9z"}),(0,a.createElement)("rect",{x:"518.9",y:"254.6",className:"st1",width:"309.8",height:"298.2"})))),(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 278.799 278.799"},(0,a.createElement)("g",null,(0,a.createElement)("path",{d:"M265.54,0H13.259C5.939,0,0.003,5.936,0.003,13.256v252.287c0,7.32,5.936,13.256,13.256,13.256H265.54 c7.318,0,13.256-5.936,13.256-13.256V13.255C278.796,5.935,272.86,0,265.54,0z M252.284,252.287H26.515V26.511h225.769V252.287z",fill:Z}))),(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,a.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,a.createElement)("g",null,(0,a.createElement)("path",{d:"M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z",fill:Z}))),(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"24",viewBox:"0 0 18 24",fill:"none"},(0,a.createElement)("g",{"clip-path":"url(#clip0_19763_6460)"},(0,a.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.6381 2.38009C17.5756 1.72504 17.2698 1.11722 16.781 0.676609C16.2923 0.235999 15.6561 -0.00538825 14.9981 9.12843e-05H2.99812C2.34701 0.00457166 1.72071 0.250426 1.24042 0.690075C0.760129 1.12972 0.460004 1.73191 0.398125 2.38009L0.328125 3.38009V20.6201L0.358125 21.6201C0.420653 22.2751 0.726469 22.883 1.21521 23.3236C1.70396 23.7642 2.34011 24.0056 2.99812 24.0001H14.9981C15.6492 23.9956 16.2755 23.7498 16.7558 23.3101C17.2361 22.8705 17.5362 22.2683 17.5981 21.6201L17.6681 20.6201V3.38009L17.6381 2.38009ZM14.9981 1.00009H2.99812C2.7794 0.996085 2.56209 1.03588 2.35898 1.11713C2.15586 1.19838 1.97106 1.31944 1.81544 1.4732C1.65983 1.62695 1.53655 1.81028 1.45285 2.0124C1.36916 2.21452 1.32675 2.43134 1.32812 2.65009V13.1301L4.70813 10.1301C4.75817 10.0851 4.81663 10.0504 4.88013 10.0281C4.94363 10.0058 5.01092 9.99627 5.07812 10.0001C5.14254 10.0031 5.20573 10.0187 5.26407 10.0462C5.32242 10.0737 5.37477 10.1124 5.41813 10.1601L7.92813 13.0001L12.3581 7.17009C12.4106 7.11303 12.4739 7.06688 12.5442 7.03428C12.6146 7.00168 12.6907 6.98327 12.7681 6.98009C12.8468 6.98043 12.9242 6.99969 12.9938 7.03624C13.0634 7.07279 13.1232 7.12556 13.1681 7.19009L16.6281 12.1901V2.65009C16.6294 2.43472 16.5883 2.2212 16.5071 2.02172C16.4259 1.82225 16.3062 1.64072 16.1549 1.4875C16.0035 1.33428 15.8234 1.21238 15.625 1.12875C15.4265 1.04512 15.2135 1.0014 14.9981 1.00009ZM16.5434 21.9878C16.6271 21.7857 16.6695 21.5688 16.6681 21.3501V14.0001L12.7781 8.39009L8.34813 14.1801C8.30415 14.2394 8.24684 14.2875 8.18082 14.3205C8.1148 14.3535 8.04194 14.3705 7.96813 14.3701C7.89452 14.3729 7.82123 14.3591 7.75371 14.3296C7.68619 14.3002 7.62617 14.2559 7.57812 14.2001L4.99813 11.2001L1.36812 14.4801V21.3501C1.36681 21.5655 1.40792 21.779 1.48913 21.9785C1.57033 22.1779 1.69003 22.3595 1.84139 22.5127C1.99275 22.6659 2.17281 22.7878 2.37128 22.8714C2.56975 22.9551 2.78276 22.9988 2.99812 23.0001H14.9981C15.2168 23.0041 15.4342 22.9643 15.6373 22.8831C15.8404 22.8018 16.0252 22.6807 16.1808 22.527C16.3364 22.3732 16.4597 22.1899 16.5434 21.9878Z",fill:"#2196F3"}),(0,a.createElement)("path",{d:"M6.10156 7.35938C6.632 7.35938 7.1407 7.14866 7.51578 6.77359C7.89085 6.39852 8.10156 5.88981 8.10156 5.35938C8.10156 4.82894 7.89085 4.32023 7.51578 3.94516C7.1407 3.57009 6.632 3.35938 6.10156 3.35938C5.57113 3.35938 5.06242 3.57009 4.68735 3.94516C4.31228 4.32023 4.10156 4.82894 4.10156 5.35938C4.10156 5.88981 4.31228 6.39852 4.68735 6.77359C5.06242 7.14866 5.57113 7.35937 6.10156 7.35938ZM6.10156 4.35938C6.36678 4.35938 6.62113 4.46473 6.80867 4.65227C6.99621 4.8398 7.10156 5.09416 7.10156 5.35938C7.10156 5.62459 6.99621 5.87895 6.80867 6.06648C6.62113 6.25402 6.36678 6.35938 6.10156 6.35938C5.83635 6.35938 5.58199 6.25402 5.39446 6.06648C5.20692 5.87895 5.10156 5.62459 5.10156 5.35938C5.10024 5.22721 5.12513 5.0961 5.17479 4.97362C5.22446 4.85114 5.29791 4.73972 5.3909 4.6458C5.48389 4.55187 5.59457 4.47732 5.71656 4.42644C5.83854 4.37556 5.9694 4.34937 6.10156 4.34938V4.35938Z",fill:"#2196F3"})),(0,a.createElement)("defs",null,(0,a.createElement)("clipPath",{id:"clip0_19763_6460"},(0,a.createElement)("rect",{width:"18",height:"24",fill:"white"})))),(0,a.createElement)("svg",{id:"a764fa4e-cc3b-472f-ad43-7e74fc450527","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M3.49,19.54H9.1l2.47,4.21a.49.49,0,0,0,.86,0l2.47-4.21h5.61a2.22,2.22,0,0,0,2.22-2.23V2.23A2.22,2.22,0,0,0,20.51,0h-17A2.22,2.22,0,0,0,1.27,2.23V17.31A2.22,2.22,0,0,0,3.49,19.54ZM2.27,2.23A1.23,1.23,0,0,1,3.49,1h17a1.23,1.23,0,0,1,1.22,1.23V17.31a1.23,1.23,0,0,1-1.22,1.23h-5.9a.5.5,0,0,0-.43.24L12,22.51,9.82,18.78a.5.5,0,0,0-.43-.24H3.49a1.23,1.23,0,0,1-1.22-1.23Z",fill:Z}),(0,a.createElement)("path",{d:"M8.31,11a.64.64,0,0,1,.18.57L8,14.65a.64.64,0,0,0,.93.68l2.81-1.48a.64.64,0,0,1,.6,0l2.81,1.48a.64.64,0,0,0,.93-.68l-.53-3.13a.64.64,0,0,1,.18-.57L18,8.74a.64.64,0,0,0-.35-1.1l-3.14-.46A.66.66,0,0,1,14,6.83L12.58,4a.65.65,0,0,0-1.16,0L10,6.83a.66.66,0,0,1-.49.35l-3.14.46A.64.64,0,0,0,6,8.74Z",fill:Z})),(0,a.createElement)("svg",{id:"af96b2d0-e766-45ff-a399-fea356ead648","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M10.84,9.71H4.26a.5.5,0,0,0-.5.5V11.9a.5.5,0,0,0,1,0V10.71H7.05V18H6.28a.5.5,0,0,0-.5.5.51.51,0,0,0,.5.5H8.82a.51.51,0,0,0,.5-.5.5.5,0,0,0-.5-.5H8.05V10.71h2.29V11.9a.5.5,0,1,0,1,0V10.21A.5.5,0,0,0,10.84,9.71Z",fill:Z}),(0,a.createElement)("path",{d:"M19.74,10H14.06a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h5.68a.5.5,0,0,0,.5-.5A.5.5,0,0,0,19.74,10Z",fill:Z}),(0,a.createElement)("path",{d:"M19.74,17.72H14.06a.5.5,0,0,0,0,1h5.68a.5.5,0,0,0,0-1Z",fill:Z}),(0,a.createElement)("path",{d:"M19.74,13.84H14.06a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h5.68a.5.5,0,0,0,.5-.5A.5.5,0,0,0,19.74,13.84Z",fill:Z}),(0,a.createElement)("path",{d:"M21.58,0H2.42A2.43,2.43,0,0,0,0,2.38V21.53A2.43,2.43,0,0,0,2.42,24H21.58A2.43,2.43,0,0,0,24,21.53V2.38A2.43,2.43,0,0,0,21.58,0ZM2.42,1H21.58A1.43,1.43,0,0,1,23,2.38V4.54H1V2.38A1.43,1.43,0,0,1,2.42,1ZM21.58,23H2.42A1.43,1.43,0,0,1,1,21.53v-16H23v16A1.43,1.43,0,0,1,21.58,23Z",fill:Z})),(0,a.createElement)("svg",{id:"b9750429-17f3-433d-9161-079c88c0d998","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M9.71,9.15h4.58a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H9.71a.5.5,0,0,0-.5.5A.5.5,0,0,0,9.71,9.15Z",fill:Z}),(0,a.createElement)("path",{d:"M17.63,10.72H6.37a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H17.63a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.63,10.72Z",fill:Z}),(0,a.createElement)("path",{d:"M17.63,13.29H6.37a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H17.63a.5.5,0,0,0,.5-.5A.5.5,0,0,0,17.63,13.29Z",fill:Z}),(0,a.createElement)("path",{d:"M15.94,15.87H8.06a.5.5,0,0,0-.5.5v2.8a.5.5,0,0,0,.5.5h7.88a.5.5,0,0,0,.5-.5v-2.8A.5.5,0,0,0,15.94,15.87Zm-.5,2.8H8.56v-1.8h6.88Z",fill:Z}),(0,a.createElement)("path",{d:"M21.58,0H2.42A2.43,2.43,0,0,0,0,2.38V21.53A2.43,2.43,0,0,0,2.42,24H21.58A2.43,2.43,0,0,0,24,21.53V2.38A2.43,2.43,0,0,0,21.58,0ZM2.42,1H21.58A1.43,1.43,0,0,1,23,2.38V4.54H1V2.38A1.43,1.43,0,0,1,2.42,1ZM21.58,23H2.42A1.43,1.43,0,0,1,1,21.53v-16H23v16A1.43,1.43,0,0,1,21.58,23Z",fill:Z})),(0,a.createElement)("svg",{id:"a7f22ee9-1614-475a-8b5a-2a4b05234844","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23Z",fill:Z}),(0,a.createElement)("path",{d:"M17.61,10.12l-3.14-.45A.67.67,0,0,1,14,9.31l-1.4-2.84a.65.65,0,0,0-1.16,0L10,9.31a.67.67,0,0,1-.49.36l-3.14.45A.64.64,0,0,0,6,11.22l2.27,2.22a.64.64,0,0,1,.18.57L8,17.14a.64.64,0,0,0,.93.67l2.81-1.47a.64.64,0,0,1,.6,0l2.81,1.47a.64.64,0,0,0,.93-.67L15.51,14a.64.64,0,0,1,.18-.57L18,11.22A.64.64,0,0,0,17.61,10.12Z",fill:Z})),(0,a.createElement)("svg",{id:"a1a34775-0c0f-439f-9b3d-b3905e6f0449","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)("path",{d:"M23.37,4.36l-7.54,2-2.62-.7V5.6a5,5,0,1,0-10.09,0s0,.05,0,.08L.37,6.41A.5.5,0,0,0,0,6.9V23a.47.47,0,0,0,.2.39.46.46,0,0,0,.3.11l.13,0,7.54-2,7.53,2,.13,0,.13,0,7.67-2.05A.5.5,0,0,0,24,20.9v-16a.51.51,0,0,0-.63-.49ZM8.17,1.55a4.05,4.05,0,0,1,4,4.05c0,1.73-2.64,5.33-4,7.05-1.41-1.72-4-5.32-4-7A4.06,4.06,0,0,1,8.17,1.55ZM1,7.28l2.3-.62c.75,2.54,3.65,6.11,4.37,7v6.89L1,22.29Zm7.67,6.34c.71-.85,3.62-4.42,4.36-7l2.3.62v15L8.67,20.51ZM23,20.51l-6.67,1.78v-15L23,5.5Z",fill:Z}),(0,a.createElement)("path",{d:"M10.74,5.6A2.57,2.57,0,1,0,8.17,8.17,2.58,2.58,0,0,0,10.74,5.6ZM6.6,5.6A1.57,1.57,0,1,1,8.17,7.17,1.57,1.57,0,0,1,6.6,5.6Z",fill:Z})),({clientId:e,label:t})=>(0,a.createElement)(u.Inserter,{rootClientId:e,renderToggle:({onToggle:e,disabled:l})=>(0,a.createElement)("div",{className:"gutenify-block-list-appender"},(0,a.createElement)(i.Button,{className:"my-button-block-appender",onClick:e,disabled:l,label:t,variant:"primary"},t)),isAppender:!0})),q=(0,d.compose)([(0,m.withDispatch)(((e,t)=>{const{selectBlock:l}=e("core/block-editor");return{selectBlock:()=>{l(t.clientId)}}}))])((e=>{const{className:t,clientId:l,attributes:r}=e,{blockClientId:o,blockAdvanceOptions:d}=r,{layout:g="layout-1"}=d,[{isEditing:p},h]=(0,s.useState)({isEditing:!1}),{hasInnerBlocks:w}=(0,m.useSelect)((e=>{const{getBlock:t}=e(u.store),a=t(l);return{hasInnerBlocks:!(!a||!a.innerBlocks.length)}}),[l]);(0,s.useEffect)((()=>{h({isEditing:!w})}),[]);const f=c()(t,`gutenify-section-${o}`,`gutenify-section-${g}`);return(0,a.createElement)("div",{className:f},(0,a.createElement)(W,{...e},(0,a.createElement)(i.Placeholder,{icon:K,label:(0,n.__)("Edit Slides")},(0,a.createElement)("div",{className:"gutenify-slider-edit-wrapper"},(0,a.createElement)(u.InnerBlocks,{allowedBlocks:["gutenify/slide-item"],renderAppender:()=>(0,a.createElement)(J,{...e,label:(0,n.__)("+ Add Slide")})})))))})),{hookPrefix:Q}=w,{GalleryCarouselIcon:X}=window?.[`_${_}_vars`]?.components?.Icons,{UU:Y,uK:ee}=p,te={title:(0,n.__)("Slider"),description:(0,n.__)("Gutenify slider."),icon:(0,a.createElement)(i.Icon,{icon:X}),keywords:["gutenify",(0,n.__)("Gallery Carousel"),(0,n.__)("Gallery"),(0,n.__)("Carousel"),(0,n.__)("Slider"),(0,n.__)("Sliders")],example:{attributes:{}},attributes:ee,edit:q,save:function(){return(0,a.createElement)(u.InnerBlocks.Content,null)},supports:{html:!1,align:["center","wide","full"],inserter:!1},gutenify:{customStylesCallback:e=>function(e){return(0,g.applyFilters)(`gutenify--${Q}--inline-styles`,"",e)}(e)}};(0,r.registerBlockType)(Y,{...te})},6942:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=r(e,i(l)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=r(t,l));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var i=l[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,e=[],a.O=(t,l,n,i)=>{if(!l){var r=1/0;for(m=0;m<e.length;m++){for(var[l,n,i]=e[m],o=!0,c=0;c<l.length;c++)(!1&i||r>=i)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(o=!1,i<r&&(r=i));if(o){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[l,n,i]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={9373:0,5153:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,i,[r,o,c]=l,s=0;if(r.some((t=>0!==e[t]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var m=c(a)}for(t&&t(l);s<r.length;s++)i=r[s],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(m)},l=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[5153],(()=>a(3055)));n=a.O(n)})();