import{R as de,S as pe,l as se,n as Q,A as N,s as fe,j as Ee,B as K,G as $e,H as Ae,p as Te,Z as J,I as Ie,N as Ve,P as Pe,Q as Fe,M}from"./ingredients-CbsDv9Aj.js";import{B as Z,j as ge,q as be,c as v,o as g,e as h,r as E,n as he,b as T,m as y,t as $,f as ee,F as V,g as U,a as q,p as Me,w as P,_ as Ke,h as S,T as Re,d as je,x as Ye,y as C,E as ze,D as Ne,G as B,R as Ue,k as qe}from"./index-CaVTAMnq.js";import{t as _}from"./tempData-BoLwHAxF.js";import{s as Ze,F as He}from"./index-Z1oSbs21.js";var Ge=function(n){var t=n.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("togglebutton.color"),`;
    background: `).concat(t("togglebutton.background"),`;
    border: 1px solid `).concat(t("togglebutton.border.color"),`;
    padding: `).concat(t("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
        outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    border-radius: `).concat(t("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(t("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
            outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    position: absolute;
    inset-inline-start: `).concat(t("togglebutton.content.left"),`;
    inset-block-start: `).concat(t("togglebutton.content.top"),`;
    width: calc(100% - calc(2 * `).concat(t("togglebutton.content.left"),`));
    height: calc(100% - calc(2 * `).concat(t("togglebutton.content.top"),`));
    border-radius: `).concat(t("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(t("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(t("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(t("togglebutton.hover.background"),`;
    color: `).concat(t("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(t("togglebutton.checked.background"),`;
    border-color: `).concat(t("togglebutton.checked.border.color"),`;
    color: `).concat(t("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(t("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(t("togglebutton.focus.ring.width")," ").concat(t("togglebutton.focus.ring.style")," ").concat(t("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(t("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(t("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(t("togglebutton.disabled.background"),`;
    border-color: `).concat(t("togglebutton.disabled.border.color"),`;
    color: `).concat(t("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.disabled.color"),`;
}

.p-togglebutton-sm {
    padding: `).concat(t("togglebutton.sm.padding"),`;
    font-size: `).concat(t("togglebutton.sm.font.size"),`;
}

.p-togglebutton-lg {
    padding: `).concat(t("togglebutton.lg.padding"),`;
    font-size: `).concat(t("togglebutton.lg.font.size"),`;
}
`)},We={root:function(n){var t=n.instance,i=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-sm p-inputfield-sm":i.size==="small","p-togglebutton-lg p-inputfield-lg":i.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Xe=Z.extend({name:"togglebutton",theme:Ge,classes:We}),Qe={name:"BaseToggleButton",extends:pe,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:Xe,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},me={name:"ToggleButton",extends:Qe,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,n),this.$emit("change",n))},onBlur:function(n){var t,i;(t=(i=this.formField).onBlur)===null||t===void 0||t.call(i,n)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return se(this.onLabel)&&se(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "}},directives:{ripple:de}},Je=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function _e(e,n,t,i,p,o){var b=ge("ripple");return be((g(),v("button",y({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:n[0]||(n[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":e.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":e.disabled}),[h("span",y({class:e.cx("content")},o.getPTOptions("content")),[E(e.$slots,"default",{},function(){return[E(e.$slots,"icon",{value:e.d_value,class:he(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(g(),v("span",y({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},o.getPTOptions("icon")),null,16)):T("",!0)]}),h("span",y({class:e.cx("label")},o.getPTOptions("label")),$(o.label),17)]})],16)],16,Je)),[[b]])}me.render=_e;var et=function(n){var t=n.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: `).concat(t("selectbutton.border.radius"),`;
    border-end-start-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: `).concat(t("selectbutton.border.radius"),`;
    border-end-end-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(t("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},tt={root:function(n){var t=n.instance;return["p-selectbutton p-component",{"p-invalid":t.$invalid}]}},nt=Z.extend({name:"selectbutton",theme:et,classes:tt}),ot={name:"BaseSelectButton",extends:pe,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:nt,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function rt(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=ve(e))||n){t&&(e=t);var i=0,p=function(){};return{s:p,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(k){throw k},f:p}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,b=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var k=t.next();return b=k.done,k},e:function(k){c=!0,o=k},f:function(){try{b||t.return==null||t.return()}finally{if(c)throw o}}}}function at(e){return st(e)||lt(e)||ve(e)||it()}function it(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(e,n){if(e){if(typeof e=="string")return te(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?te(e,n):void 0}}function lt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function st(e){if(Array.isArray(e))return te(e)}function te(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}var ye={name:"SelectButton",extends:ot,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?N(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?N(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?N(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?N(n,this.optionDisabled):!1},onOptionSelect:function(n,t,i){var p=this;if(!(this.disabled||this.isOptionDisabled(t))){var o=this.isSelected(t);if(!(o&&!this.allowEmpty)){var b=this.getOptionValue(t),c;this.multiple?o?c=this.d_value.filter(function(m){return!Q(m,b,p.equalityKey)}):c=this.d_value?[].concat(at(this.d_value),[b]):[b]:c=o?null:b,this.writeValue(c,n),this.$emit("change",{event:n,value:c})}}},isSelected:function(n){var t=!1,i=this.getOptionValue(n);if(this.multiple){if(this.d_value){var p=rt(this.d_value),o;try{for(p.s();!(o=p.n()).done;){var b=o.value;if(Q(b,i,this.equalityKey)){t=!0;break}}}catch(c){p.e(c)}finally{p.f()}}}else t=Q(this.d_value,i,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:de},components:{ToggleButton:me}},ut=["aria-labelledby"];function ct(e,n,t,i,p,o){var b=ee("ToggleButton");return g(),v("div",y({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(g(!0),v(V,null,U(e.options,function(c,m){return g(),q(b,{key:o.getOptionRenderKey(c),modelValue:o.isSelected(c),onLabel:o.getOptionLabel(c),offLabel:o.getOptionLabel(c),disabled:e.disabled||o.isOptionDisabled(c),unstyled:e.unstyled,size:e.size,readonly:!e.allowEmpty&&o.isSelected(c),onChange:function(F){return o.onOptionSelect(F,c,m)},pt:e.ptm("pcToggleButton")},Me({_:2},[e.$slots.option?{name:"default",fn:P(function(){return[E(e.$slots,"option",{option:c,index:m},function(){return[h("span",y({ref_for:!0},e.ptm("pcToggleButton").label),$(o.getOptionLabel(c)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,ut)}ye.render=ct;var dt={root:{position:"relative"}},pt={root:"p-chart"},ft=Z.extend({name:"chart",classes:pt,inlineStyles:dt}),gt={name:"BaseChart",extends:fe,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:ft,provide:function(){return{$pcChart:this,$parentInstance:this}}},we={name:"Chart",extends:gt,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var n=this;Ke(()=>import("./auto-BsvuWMA9.js"),[]).then(function(t){n.chart&&(n.chart.destroy(),n.chart=null),t&&t.default&&(n.chart=new t.default(n.$refs.canvas,{type:n.type,data:n.data,options:n.options,plugins:n.plugins})),n.$emit("loaded",n.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(n){if(this.chart){var t=this.chart.getElementsAtEventForMode(n,"nearest",{intersect:!0},!1),i=this.chart.getElementsAtEventForMode(n,"dataset",{intersect:!0},!1);t&&t[0]&&i&&this.$emit("select",{originalEvent:n,element:t[0],dataset:i})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},R(e)}function ue(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),t.push.apply(t,i)}return t}function ce(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ue(Object(t),!0).forEach(function(i){bt(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function bt(e,n,t){return(n=ht(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ht(e){var n=mt(e,"string");return R(n)=="symbol"?n:n+""}function mt(e,n){if(R(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n);if(R(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var vt=["width","height"];function yt(e,n,t,i,p,o){return g(),v("div",y({class:e.cx("root"),style:e.sx("root")},e.ptmi("root")),[h("canvas",y({ref:"canvas",width:e.width,height:e.height,onClick:n[0]||(n[0]=function(b){return o.onCanvasClick(b)})},ce(ce({},e.canvasProps),e.ptm("canvas"))),null,16,vt)],16)}we.render=yt;var wt=function(n){var t=n.dt;return`
.p-drawer {
    display: flex;
    flex-direction: column;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: `.concat(t("drawer.background"),`;
    color: `).concat(t("drawer.color"),`;
    border: 1px solid `).concat(t("drawer.border.color"),`;
    box-shadow: `).concat(t("drawer.shadow"),`;
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: `).concat(t("drawer.content.padding"),`;
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(t("drawer.header.padding"),`;
}

.p-drawer-footer {
    padding: `).concat(t("drawer.footer.padding"),`;
}

.p-drawer-title {
    font-weight: `).concat(t("drawer.title.font.weight"),`;
    font-size: `).concat(t("drawer.title.font.size"),`;
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-drawer-left .p-drawer {
    width: 20rem;
    height: 100%;
    border-inline-end-width: 1px;
}

.p-drawer-right .p-drawer {
    width: 20rem;
    height: 100%;
    border-inline-start-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-block-end-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-block-start-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-mask:dir(rtl) {
    flex-direction: row-reverse;
}
`)},kt={mask:function(n){var t=n.position,i=n.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"?"flex-start":t==="right"?"flex-end":"center",alignItems:t==="top"?"flex-start":t==="bottom"?"flex-end":"center",pointerEvents:i?"auto":"none"}},root:{pointerEvents:"auto"}},Ct={mask:function(n){var t=n.instance,i=n.props,p=["left","right","top","bottom"],o=p.find(function(b){return b===i.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":i.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},o?"p-drawer-".concat(o):""]},root:function(n){var t=n.instance;return["p-drawer p-component",{"p-drawer-full":t.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Dt=Z.extend({name:"drawer",theme:wt,classes:Ct,inlineStyles:kt}),St={name:"BaseDrawer",extends:fe,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Dt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},ke={name:"Drawer",extends:St,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(n){n?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&J.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&J.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Ie(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&J.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(n){this.dismissable&&this.modal&&this.mask===n.target&&this.hide()},focus:function(){var n=function(p){return p&&p.querySelector("[autofocus]")},t=this.$slots.header&&n(this.headerContainer);t||(t=this.$slots.default&&n(this.container),t||(t=this.$slots.footer&&n(this.footerContainer),t||(t=this.closeButton))),t&&Te(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&Ae()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&$e()},onKeydown:function(n){n.code==="Escape"&&this.hide()},containerRef:function(n){this.container=n},maskRef:function(n){this.mask=n},contentRef:function(n){this.content=n},headerContainerRef:function(n){this.headerContainer=n},footerContainerRef:function(n){this.footerContainer=n},closeButtonRef:function(n){this.closeButton=n?n.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){n.isOutsideClicked(t)&&n.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(n){return this.container&&!this.container.contains(n.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:He},components:{Button:K,Portal:Ee,TimesIcon:Ze}},Lt=["aria-modal"];function Bt(e,n,t,i,p,o){var b=ee("Button"),c=ee("Portal"),m=ge("focustrap");return g(),q(c,null,{default:P(function(){return[p.containerVisible?(g(),v("div",y({key:0,ref:o.maskRef,onMousedown:n[0]||(n[0]=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal})},e.ptm("mask")),[S(Re,y({name:"p-drawer",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},e.ptm("transition")),{default:P(function(){return[e.visible?be((g(),v("div",y({key:0,ref:o.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?E(e.$slots,"container",{key:0,closeCallback:o.hide}):(g(),v(V,{key:1},[h("div",y({ref:o.headerContainerRef,class:e.cx("header")},e.ptm("header")),[E(e.$slots,"header",{class:he(e.cx("title"))},function(){return[e.header?(g(),v("div",y({key:0,class:e.cx("title")},e.ptm("title")),$(e.header),17)):T("",!0)]}),e.showCloseIcon?(g(),q(b,y({key:0,ref:o.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":o.closeAriaLabel,unstyled:e.unstyled,onClick:o.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:P(function(k){return[E(e.$slots,"closeicon",{},function(){return[(g(),q(je(e.closeIcon?"span":"TimesIcon"),y({class:[e.closeIcon,k.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):T("",!0)],16),h("div",y({ref:o.contentRef,class:e.cx("content")},e.ptm("content")),[E(e.$slots,"default")],16),e.$slots.footer?(g(),v("div",y({key:0,ref:o.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[E(e.$slots,"footer")],16)):T("",!0)],64))],16,Lt)),[[m]]):T("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):T("",!0)]}),_:3})}ke.render=Bt;const Ot={class:"card"},xt={class:"fixed top-4 right-4"},Et={class:"card"},$t={class:"flex py-1"},At=["for"],Tt={class:"grid grid-cols-2 gap-1"},It={class:"p-2 [&>div]:mb-1 text-sm"},Vt={key:0,class:"text-gray-500"},Pt={class:"flex w-full justify-center"},jt=Ye({__name:"chart",setup(e){function n(r){const l=new Map;return r.forEach(a=>{for(const u of Object.keys(a.options))a.options[u].forEach(d=>{const s=Ve[u].find(f=>f.value===d);if(s){const f=`${s.label}-${u}-${d}`;l.has(f)?(l.get(f).counts++,a.id&&l.get(f).ids.push(a.id)):l.set(f,{options:s.label,optionsValue:[u,d],counts:1,ids:a.id?[a.id]:[]})}})}),Array.from(l.values())}const t=C(n(_.value)),i=C(),p=C(),o=(r=t.value)=>{const l=[...new Set(r.map(s=>s.options))],a=[],u=[];for(let s=0;s<100;s++){const f=s*3.6;a.push(`hsl(${f}, 70%, 50%, 0.2)`),u.push(`hsl(${f}, 70%, 50%)`)}const d=l.map(s=>r.filter(f=>f.options===s).reduce((f,I)=>f+I.counts,0));return{labels:l,datasets:[{label:"Options",data:d,backgroundColor:l.map((s,f)=>a[f%a.length]),borderColor:l.map((s,f)=>u[f%u.length]),borderWidth:1}]}},b=()=>{const r=getComputedStyle(document.documentElement),l=r.getPropertyValue("--p-text-muted-color"),a=r.getPropertyValue("--p-content-border-color");return{indexAxis:"y",maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{ticks:{color:l},grid:{color:a}},y:{beginAtZero:!0,ticks:{color:l},grid:{color:a}}}}},c=C(!1),m=C(t.value),k=C([]),F=C(new Date("2025-02-26")),H=C(new Date("2025-04-07")),Ce=new Date,L=C([F.value,H.value]),O=C("range"),De=[{label:"Multiple",value:"multiple"},{label:"Range",value:"range"}];ze(O,r=>{r==="range"?L.value=[F.value,H.value]:L.value=[Ce]});const ne=["bg-blue-200","bg-green-200","bg-yellow-200","bg-red-200","bg-purple-200","bg-pink-200","bg-teal-200","bg-indigo-200","bg-gray-200","bg-blue-400","bg-green-400","bg-yellow-400","bg-red-400","bg-purple-400","bg-pink-400","bg-teal-400","bg-indigo-400","bg-gray-400","bg-blue-600","bg-green-600","bg-yellow-600","bg-red-600","bg-purple-600","bg-pink-600","bg-teal-600","bg-indigo-600","bg-gray-600","bg-blue-800","bg-green-800","bg-yellow-800"],Se={"bg-blue-200":"#93C5FD","bg-green-200":"#86EFAC","bg-yellow-200":"#FDE68A","bg-red-200":"#FCA5A5","bg-purple-200":"#D8B4FE","bg-pink-200":"#F9A8D4","bg-teal-200":"#99F6E4","bg-indigo-200":"#BFDBFE","bg-gray-200":"#E5E7EB","bg-blue-400":"#60A5FA","bg-green-400":"#4ADE80","bg-yellow-400":"#FACC15","bg-red-400":"#F87171","bg-purple-400":"#BE77F1","bg-pink-400":"#F472B6","bg-teal-400":"#4FD1C5","bg-indigo-400":"#818CF8","bg-gray-400":"#9CA3AF","bg-blue-600":"#2563EB","bg-green-600":"#10B981","bg-yellow-600":"#D97706","bg-red-600":"#DC2626","bg-purple-600":"#7C3AED","bg-pink-600":"#DB2777","bg-teal-600":"#0D9488","bg-indigo-600":"#4F46E5","bg-gray-600":"#4B5563","bg-blue-800":"#1E40AF","bg-green-800":"#065F46","bg-yellow-800":"#92400E"};let G=0;const oe=()=>{const r=ne[G];return G=(G+1)%ne.length,r},j=C(!1),D=C(null),Le=()=>{j.value=!j.value,W()},W=()=>{if(!D.value)return;D.value.width=window.innerWidth-40,D.value.height=window.innerHeight-140;const r=D.value.getContext("2d");if(!r)return;r.clearRect(0,0,D.value.width,D.value.height);const a=[...new Set(Y.value.flatMap(w=>w.data.map(A=>A.options)))].map(String),u=Math.max(...a.map(w=>w.length))*18;D.value.height=window.innerHeight-140+u;const d=D.value.height-50-u,s=70,f=D.value.width-50;r.beginPath(),r.moveTo(s,d),r.lineTo(f,d),r.moveTo(s,50),r.lineTo(s,d),r.strokeStyle="#ddd",r.stroke(),a.forEach((w,A)=>{const x=s-10,X=d-(A+1)*(d-50)/(a.length+1);r.font="14px Arial",r.textAlign="right",r.textBaseline="middle",r.fillStyle="#333",r.fillText(w,x,X)});const I=24;for(let w=0;w<=I;w++){const A=`${String(w).padStart(2,"0")}:00`,x=s+w/I*(f-s);r.beginPath(),r.moveTo(x,d),r.lineTo(x,50),r.strokeStyle="#f0f0f0",r.stroke(),r.font="12px Arial",r.textAlign="center",r.textBaseline="top",r.fillStyle="#333",r.fillText(A,x,d+8)}Y.value.forEach(w=>{const A=Se[w.useColor];w.data.forEach(x=>{const X=String(x.options),ae=a.indexOf(X);if(ae===-1)return;const z=new Date(x.timestampCurrentDateTime),Oe=z.getHours()+z.getMinutes()/60+z.getSeconds()/3600,ie=s+Oe/24*(f-s),le=d-(ae+1)*(d-50)/(a.length+1);if(r.fillStyle=A,r.beginPath(),r.arc(ie,le,5,0,2*Math.PI),r.fill(),j.value){r.font="12px Arial",r.textAlign="left",r.textBaseline="bottom",r.fillStyle="black";const xe=z.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});r.fillText(xe,ie+10,le-10)}})})},re=r=>{const l={};return r.forEach(a=>{a.ids.forEach(u=>{const d=_.value.find(s=>s.id===u);if(d){const s=d.isCurrentDate,f=d.isCurrentTime,I=d.timestampCurrentDateTime,w=oe();l[s]||(l[s]=[]),l[s].push({time:f,options:a.options,optionsValue:a.optionsValue,useColor:w,timestampCurrentDateTime:I,remark:d.remark})}})}),Object.keys(l).map(a=>({date:a,useColor:oe(),data:l[a]}))},Y=C(re(m.value)),Be=()=>{let r=_.value;if(O.value==="range"&&L.value.length===2){const a=M(L.value[0]).format("YYYY-MM-DD"),u=M(L.value[1]).format("YYYY-MM-DD");r=r.filter(d=>{const s=M(d.isCurrentDate).format("YYYY-MM-DD");return s>=a&&s<=u})}else if(O.value==="multiple"&&L.value.length>0){const a=L.value.map(u=>M(u).format("YYYY-MM-DD"));r=r.filter(u=>{const d=M(u.isCurrentDate).format("YYYY-MM-DD");return a.includes(d)})}const l=n(r);k.value.length>0?m.value=l.filter(a=>k.value.some(u=>u[0]===a.optionsValue[0]&&u[1]===a.optionsValue[1])):m.value=l,Y.value=re(m.value),W(),i.value=o(m.value),c.value=!1};return Ne(()=>{i.value=o(),p.value=b(),W()}),(r,l)=>(g(),v(V,null,[h("div",Ot,[S(B(we),{type:"bar",data:i.value,options:p.value,class:"h-screen"},null,8,["data","options"])]),h("div",xt,[S(B(ke),{visible:c.value,"onUpdate:visible":l[5]||(l[5]=a=>c.value=a),header:"Filter",position:"right"},{footer:P(()=>[h("div",Tt,[S(B(K),{label:"Cancel",onClick:l[3]||(l[3]=a=>c.value=!1)}),S(B(K),{label:"Filter",onClick:l[4]||(l[4]=a=>Be())})])]),default:P(()=>[h("div",null,[S(B(Pe),{modelValue:L.value,"onUpdate:modelValue":l[0]||(l[0]=a=>L.value=a),selectionMode:O.value,minDate:O.value==="range"?F.value:void 0,maxDate:O.value==="range"?H.value:void 0,placeholder:"選擇日期範圍",class:"p-inputtext",showButtonBar:""},null,8,["modelValue","selectionMode","minDate","maxDate"]),S(B(ye),{modelValue:O.value,"onUpdate:modelValue":l[1]||(l[1]=a=>O.value=a),options:De,class:"mt-2",optionLabel:"label",optionValue:"value"},null,8,["modelValue"])]),h("div",Et,[(g(!0),v(V,null,U(t.value,a=>(g(),v("div",{key:a.options},[h("ul",null,[h("li",$t,[S(B(Fe),{inputId:a.options,value:a.optionsValue,modelValue:k.value,"onUpdate:modelValue":l[2]||(l[2]=u=>k.value=u),class:"mr-1"},null,8,["inputId","value","modelValue"]),h("label",{for:a.options,class:"w-full inline-block"},$(a.options),9,At)])])]))),128))])]),_:1},8,["visible"]),S(B(K),{class:"!bg-[var(--main-color)]",icon:"pi pi-filter",onClick:l[6]||(l[6]=a=>c.value=!0)}),S(B(K),{onClick:Le,label:j.value?"隱藏時間":"顯示時間",class:"p-button-secondary ml-2"},null,8,["label"])]),h("main",null,[h("section",It,[(g(!0),v(V,null,U(Y.value,a=>(g(),v("div",{key:a.date,class:"mb-4"},[h("div",{class:"font-bold",style:Ue({color:a.useColor})},$(a.date),5),h("div",null,[(g(!0),v(V,null,U(a.data,(u,d)=>(g(),v("div",{key:d},[qe($(u.time)+" - "+$(u.options)+" ",1),u.remark?(g(),v("span",Vt,"("+$(u.remark)+")",1)):T("",!0)]))),128))])]))),128))]),h("div",Pt,[h("canvas",{ref_key:"canvas",ref:D},null,512)])])],64))}});export{jt as default};
