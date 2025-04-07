import{Q as Ae,S as xe,T as $e,V as Ve,W as Ie,s as ne,j as Te,B as M,G as Me,H as Oe,p as Fe,Z as G,I as Ke,b as je,R as Re,X as He,U as de,M as ze,N as Ye,P as ue}from"./ingredients-DnF6geEU.js";import{B as U,c as b,o as p,e as c,b as k,m as h,_ as Ue,f as ee,j as Ne,a as j,w as P,h as w,T as pe,q as fe,r as L,F as K,n as ge,t as B,d as me,R as We,x as Xe,y,E as Ze,D as qe,G as C,g as Q,S as Ge,k as Qe}from"./index-C-Oxmfz_.js";import{d as J}from"./dayjs.min-Cbbdfn5l.js";import{t as _}from"./tempData-Bj-_d5Se.js";import{s as Je,F as _e}from"./index-C41_KRdb.js";var et=function(t){var n=t.dt;return`
.p-slider {
    position: relative;
    background: `.concat(n("slider.track.background"),`;
    border-radius: `).concat(n("slider.track.border.radius"),`;
}

.p-slider-handle {
    cursor: grab;
    touch-action: none;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: `).concat(n("slider.handle.height"),`;
    width: `).concat(n("slider.handle.width"),`;
    background: `).concat(n("slider.handle.background"),`;
    border-radius: `).concat(n("slider.handle.border.radius"),`;
    transition: background `).concat(n("slider.transition.duration"),", color ").concat(n("slider.transition.duration"),", border-color ").concat(n("slider.transition.duration"),", box-shadow ").concat(n("slider.transition.duration"),", outline-color ").concat(n("slider.transition.duration"),`;
    outline-color: transparent;
}

.p-slider-handle::before {
    content: "";
    width: `).concat(n("slider.handle.content.width"),`;
    height: `).concat(n("slider.handle.content.height"),`;
    display: block;
    background: `).concat(n("slider.handle.content.background"),`;
    border-radius: `).concat(n("slider.handle.content.border.radius"),`;
    box-shadow: `).concat(n("slider.handle.content.shadow"),`;
    transition: background `).concat(n("slider.transition.duration"),`;
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: `).concat(n("slider.handle.hover.background"),`;
}

.p-slider:not(.p-disabled) .p-slider-handle:hover::before {
    background: `).concat(n("slider.handle.content.hover.background"),`;
}

.p-slider-handle:focus-visible {
    box-shadow: `).concat(n("slider.handle.focus.ring.shadow"),`;
    outline: `).concat(n("slider.handle.focus.ring.width")," ").concat(n("slider.handle.focus.ring.style")," ").concat(n("slider.handle.focus.ring.color"),`;
    outline-offset: `).concat(n("slider.handle.focus.ring.offset"),`;
}

.p-slider-range {
    display: block;
    background: `).concat(n("slider.range.background"),`;
    border-radius: `).concat(n("slider.border.radius"),`;
}

.p-slider.p-slider-horizontal {
    height: `).concat(n("slider.track.size"),`;
}

.p-slider-horizontal .p-slider-range {
    inset-block-start: 0;
    inset-inline-start: 0;
    height: 100%;
}

.p-slider-horizontal .p-slider-handle {
    inset-block-start: 50%;
    margin-block-start: calc(-1 * calc(`).concat(n("slider.handle.height"),` / 2));
    margin-inline-start: calc(-1 * calc(`).concat(n("slider.handle.width"),` / 2));
}

.p-slider-vertical {
    min-height: 100px;
    width: `).concat(n("slider.track.size"),`;
}

.p-slider-vertical .p-slider-handle {
    inset-inline-start: 50%;
    margin-inline-start: calc(-1 * calc(`).concat(n("slider.handle.width"),` / 2));
    margin-block-end: calc(-1 * calc(`).concat(n("slider.handle.height"),` / 2));
}

.p-slider-vertical .p-slider-range {
    inset-block-end: 0;
    inset-inline-start: 0;
    width: 100%;
}
`)},tt={handle:{position:"absolute"},range:{position:"absolute"}},nt={root:function(t){var n=t.instance,a=t.props;return["p-slider p-component",{"p-disabled":a.disabled,"p-invalid":n.$invalid,"p-slider-horizontal":a.orientation==="horizontal","p-slider-vertical":a.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},rt=U.extend({name:"slider",theme:et,classes:nt,inlineStyles:tt}),at={name:"BaseSlider",extends:Ae,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:rt,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function it(e){return dt(e)||lt(e)||st(e)||ot()}function ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(e,t){if(e){if(typeof e=="string")return te(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}function lt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dt(e){if(Array.isArray(e))return te(e)}function te(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var be={name:"Slider",extends:at,inheritAttrs:!1,emits:["change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var t=this.$el.getBoundingClientRect();this.initX=t.left+Ve(),this.initY=t.top+Ie(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(t){var n,a=t.touches?t.touches[0].pageX:t.pageX,o=t.touches?t.touches[0].pageY:t.pageY;this.orientation==="horizontal"?$e(this.$el)?n=(this.initX+this.barWidth-a)*100/this.barWidth:n=(a-this.initX)*100/this.barWidth:n=(this.initY+this.barHeight-o)*100/this.barHeight;var r=(this.max-this.min)*(n/100)+this.min;if(this.step){var l=this.range?this.value[this.handleIndex]:this.value,E=r-l;E<0?r=l+Math.ceil(r/this.step-l/this.step)*this.step:E>0&&(r=l+Math.floor(r/this.step-l/this.step)*this.step)}else r=Math.floor(r);this.updateModel(t,r)},updateModel:function(t,n){var a=parseFloat(n.toFixed(10)),o;this.range?(o=this.value?it(this.value):[],this.handleIndex==0?(a<this.min?a=this.min:a>=this.max&&(a=this.max),o[0]=a):(a>this.max?a=this.max:a<=this.min&&(a=this.min),o[1]=a)):(a<this.min?a=this.min:a>this.max&&(a=this.max),o=a),this.writeValue(o,t),this.$emit("change",o)},onDragStart:function(t,n){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=n,t.currentTarget.focus())},onDrag:function(t){this.dragging&&this.setValue(t)},onDragEnd:function(t){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:t,value:this.value}))},onBarClick:function(t){this.disabled||xe(t.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(t))},onMouseDown:function(t,n){this.bindDragListeners(),this.onDragStart(t,n)},onKeyDown:function(t,n){switch(this.handleIndex=n,t.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(t,n),t.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(t,n),t.preventDefault();break;case"PageDown":this.decrementValue(t,n,!0),t.preventDefault();break;case"PageUp":this.incrementValue(t,n,!0),t.preventDefault();break;case"Home":this.updateModel(t,this.min),t.preventDefault();break;case"End":this.updateModel(t,this.max),t.preventDefault();break}},onBlur:function(t,n){var a,o;(a=(o=this.formField).onBlur)===null||a===void 0||a.call(o,t)},decrementValue:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o;this.range?this.step?o=this.value[n]-this.step:o=this.value[n]-1:this.step?o=this.value-this.step:!this.step&&a?o=this.value-10:o=this.value-1,this.updateModel(t,o),t.preventDefault()},incrementValue:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o;this.range?this.step?o=this.value[n]+this.step:o=this.value[n]+1:this.step?o=this.value+this.step:!this.step&&a?o=this.value+10:o=this.value+1,this.updateModel(t,o),t.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)},rangeStyle:function(){if(this.range){var t=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,n=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":n+"%",width:t+"%"}:{bottom:n+"%",height:t+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}},computed:{value:function(){var t;if(this.range){var n,a,o,r;return[(n=(a=this.d_value)===null||a===void 0?void 0:a[0])!==null&&n!==void 0?n:this.min,(o=(r=this.d_value)===null||r===void 0?void 0:r[1])!==null&&o!==void 0?o:this.max]}return(t=this.d_value)!==null&&t!==void 0?t:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100}}},ut=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],ct=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],ht=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"];function pt(e,t,n,a,o,r){return p(),b("div",h({class:e.cx("root"),onClick:t[18]||(t[18]=function(){return r.onBarClick&&r.onBarClick.apply(r,arguments)})},e.ptmi("root"),{"data-p-sliding":!1}),[c("span",h({class:e.cx("range"),style:[e.sx("range"),r.rangeStyle()]},e.ptm("range")),null,16),e.range?k("",!0):(p(),b("span",h({key:0,class:e.cx("handle"),style:[e.sx("handle"),r.handleStyle()],onTouchstartPassive:t[0]||(t[0]=function(l){return r.onDragStart(l)}),onTouchmovePassive:t[1]||(t[1]=function(l){return r.onDrag(l)}),onTouchend:t[2]||(t[2]=function(l){return r.onDragEnd(l)}),onMousedown:t[3]||(t[3]=function(l){return r.onMouseDown(l)}),onKeydown:t[4]||(t[4]=function(l){return r.onKeyDown(l)}),onBlur:t[5]||(t[5]=function(l){return r.onBlur(l)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("handle")),null,16,ut)),e.range?(p(),b("span",h({key:1,class:e.cx("handle"),style:[e.sx("handle"),r.rangeStartHandleStyle()],onTouchstartPassive:t[6]||(t[6]=function(l){return r.onDragStart(l,0)}),onTouchmovePassive:t[7]||(t[7]=function(l){return r.onDrag(l)}),onTouchend:t[8]||(t[8]=function(l){return r.onDragEnd(l)}),onMousedown:t[9]||(t[9]=function(l){return r.onMouseDown(l,0)}),onKeydown:t[10]||(t[10]=function(l){return r.onKeyDown(l,0)}),onBlur:t[11]||(t[11]=function(l){return r.onBlur(l,0)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("startHandler")),null,16,ct)):k("",!0),e.range?(p(),b("span",h({key:2,class:e.cx("handle"),style:[e.sx("handle"),r.rangeEndHandleStyle()],onTouchstartPassive:t[12]||(t[12]=function(l){return r.onDragStart(l,1)}),onTouchmovePassive:t[13]||(t[13]=function(l){return r.onDrag(l)}),onTouchend:t[14]||(t[14]=function(l){return r.onDragEnd(l)}),onMousedown:t[15]||(t[15]=function(l){return r.onMouseDown(l,1)}),onKeydown:t[16]||(t[16]=function(l){return r.onKeyDown(l,1)}),onBlur:t[17]||(t[17]=function(l){return r.onBlur(l,1)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("endHandler")),null,16,ht)):k("",!0)],16)}be.render=pt;var ft={root:{position:"relative"}},gt={root:"p-chart"},mt=U.extend({name:"chart",classes:gt,inlineStyles:ft}),bt={name:"BaseChart",extends:ne,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:mt,provide:function(){return{$pcChart:this,$parentInstance:this}}},ve={name:"Chart",extends:bt,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var t=this;Ue(()=>import("./auto-BsvuWMA9.js"),[]).then(function(n){t.chart&&(t.chart.destroy(),t.chart=null),n&&n.default&&(t.chart=new n.default(t.$refs.canvas,{type:t.type,data:t.data,options:t.options,plugins:t.plugins})),t.$emit("loaded",t.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(t){if(this.chart){var n=this.chart.getElementsAtEventForMode(t,"nearest",{intersect:!0},!1),a=this.chart.getElementsAtEventForMode(t,"dataset",{intersect:!0},!1);n&&n[0]&&a&&this.$emit("select",{originalEvent:t,element:n[0],dataset:a})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(n),!0).forEach(function(a){vt(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function vt(e,t,n){return(t=yt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yt(e){var t=wt(e,"string");return R(t)=="symbol"?t:t+""}function wt(e,t){if(R(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(R(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var kt=["width","height"];function Ct(e,t,n,a,o,r){return p(),b("div",h({class:e.cx("root"),style:e.sx("root")},e.ptmi("root")),[c("canvas",h({ref:"canvas",width:e.width,height:e.height,onClick:t[0]||(t[0]=function(l){return r.onCanvasClick(l)})},he(he({},e.canvasProps),e.ptm("canvas"))),null,16,kt)],16)}ve.render=Ct;var Dt=function(t){var n=t.dt;return`
.p-drawer {
    display: flex;
    flex-direction: column;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: `.concat(n("drawer.background"),`;
    color: `).concat(n("drawer.color"),`;
    border: 1px solid `).concat(n("drawer.border.color"),`;
    box-shadow: `).concat(n("drawer.shadow"),`;
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: `).concat(n("drawer.content.padding"),`;
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(n("drawer.header.padding"),`;
}

.p-drawer-footer {
    padding: `).concat(n("drawer.footer.padding"),`;
}

.p-drawer-title {
    font-weight: `).concat(n("drawer.title.font.weight"),`;
    font-size: `).concat(n("drawer.title.font.size"),`;
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
`)},St={mask:function(t){var n=t.position,a=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center",pointerEvents:a?"auto":"none"}},root:{pointerEvents:"auto"}},Lt={mask:function(t){var n=t.instance,a=t.props,o=["left","right","top","bottom"],r=o.find(function(l){return l===a.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":a.modal,"p-drawer-open":n.containerVisible,"p-drawer-full":n.fullScreen},r?"p-drawer-".concat(r):""]},root:function(t){var n=t.instance;return["p-drawer p-component",{"p-drawer-full":n.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Bt=U.extend({name:"drawer",theme:Dt,classes:Lt,inlineStyles:St}),Et={name:"BaseDrawer",extends:ne,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Bt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},ye={name:"Drawer",extends:Et,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&G.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&G.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Ke(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&G.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(o){return o&&o.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.$slots.footer&&t(this.footerContainer),n||(n=this.closeButton))),n&&Fe(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&Oe()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&Me()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:_e},components:{Button:M,Portal:Te,TimesIcon:Je}},Pt=["aria-modal"];function At(e,t,n,a,o,r){var l=ee("Button"),E=ee("Portal"),A=Ne("focustrap");return p(),j(E,null,{default:P(function(){return[o.containerVisible?(p(),b("div",h({key:0,ref:r.maskRef,onMousedown:t[0]||(t[0]=function(){return r.onMaskClick&&r.onMaskClick.apply(r,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal})},e.ptm("mask")),[w(pe,h({name:"p-drawer",onEnter:r.onEnter,onAfterEnter:r.onAfterEnter,onBeforeLeave:r.onBeforeLeave,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave,appear:""},e.ptm("transition")),{default:P(function(){return[e.visible?fe((p(),b("div",h({key:0,ref:r.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?L(e.$slots,"container",{key:0,closeCallback:r.hide}):(p(),b(K,{key:1},[c("div",h({ref:r.headerContainerRef,class:e.cx("header")},e.ptm("header")),[L(e.$slots,"header",{class:ge(e.cx("title"))},function(){return[e.header?(p(),b("div",h({key:0,class:e.cx("title")},e.ptm("title")),B(e.header),17)):k("",!0)]}),e.showCloseIcon?(p(),j(l,h({key:0,ref:r.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":r.closeAriaLabel,unstyled:e.unstyled,onClick:r.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:P(function(N){return[L(e.$slots,"closeicon",{},function(){return[(p(),j(me(e.closeIcon?"span":"TimesIcon"),h({class:[e.closeIcon,N.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):k("",!0)],16),c("div",h({ref:r.contentRef,class:e.cx("content")},e.ptm("content")),[L(e.$slots,"default")],16),e.$slots.footer?(p(),b("div",h({key:0,ref:r.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[L(e.$slots,"footer")],16)):k("",!0)],64))],16,Pt)),[[A]]):k("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):k("",!0)]}),_:3})}ye.render=At;var we={name:"PlusIcon",extends:je};function xt(e,t,n,a,o,r){return p(),b("svg",h({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[c("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}we.render=xt;var $t=function(t){var n=t.dt;return`
.p-panel {
    border: 1px solid `.concat(n("panel.border.color"),`;
    border-radius: `).concat(n("panel.border.radius"),`;
    background: `).concat(n("panel.background"),`;
    color: `).concat(n("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(n("panel.header.padding"),`;
    background: `).concat(n("panel.header.background"),`;
    color: `).concat(n("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(n("panel.header.border.width"),`;
    border-color: `).concat(n("panel.header.border.color"),`;
    border-radius: `).concat(n("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(n("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(n("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(n("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(n("panel.footer.padding"),`;
}
`)},Vt={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},It=U.extend({name:"panel",theme:$t,classes:Vt}),Tt={name:"BasePanel",extends:ne,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:It,provide:function(){return{$pcPanel:this,$parentInstance:this}}},ke={name:"Panel",extends:Tt,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||de()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||de()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:we,MinusIcon:He,Button:M},directives:{ripple:Re}},Mt=["id"],Ot=["id","aria-labelledby"];function Ft(e,t,n,a,o,r){var l=ee("Button");return p(),b("div",h({class:e.cx("root")},e.ptmi("root")),[c("div",h({class:e.cx("header")},e.ptm("header")),[L(e.$slots,"header",{id:o.id+"_header",class:ge(e.cx("title"))},function(){return[e.header?(p(),b("span",h({key:0,id:o.id+"_header",class:e.cx("title")},e.ptm("title")),B(e.header),17,Mt)):k("",!0)]}),c("div",h({class:e.cx("headerActions")},e.ptm("headerActions")),[L(e.$slots,"icons"),e.toggleable?(p(),j(l,h({key:0,id:o.id+"_header",class:e.cx("pcToggleButton"),"aria-label":r.buttonAriaLabel,"aria-controls":o.id+"_content","aria-expanded":!o.d_collapsed,unstyled:e.unstyled,onClick:r.toggle,onKeydown:r.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:P(function(E){return[L(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:o.d_collapsed},function(){return[(p(),j(me(o.d_collapsed?"PlusIcon":"MinusIcon"),h({class:E.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):k("",!0)],16)],16),w(pe,h({name:"p-toggleable-content"},e.ptm("transition")),{default:P(function(){return[fe(c("div",h({id:o.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":o.id+"_header"},e.ptm("contentContainer")),[c("div",h({class:e.cx("content")},e.ptm("content")),[L(e.$slots,"default")],16),e.$slots.footer?(p(),b("div",h({key:0,class:e.cx("footer")},e.ptm("footer")),[L(e.$slots,"footer")],16)):k("",!0)],16,Ot),[[We,!o.d_collapsed]])]}),_:3},16)],16)}ke.render=Ft;const Kt={class:"card"},jt={class:"fixed top-4 right-4"},Rt={class:"flex justify-between text-sm text-gray-600"},Ht={class:"card"},zt={class:"flex items-center py-2 border-b border-[var(--line-color)]"},Yt={class:"flex py-1"},Ut=["for"],Nt={class:"grid grid-cols-2 gap-1"},Wt={key:0,class:"text-gray-500"},Xt={class:"flex w-full justify-center"},_t=Xe({__name:"chart",setup(e){function t(i){const d=new Map;return i.forEach(s=>{for(const f of Object.keys(s.options))s.options[f].forEach(g=>{const u=ze[f].find(m=>m.value===g);if(u){const m=`${u.label}-${f}-${g}`;d.has(m)?(d.get(m).counts++,s.id&&d.get(m).ids.push(s.id)):d.set(m,{options:u.label,optionsValue:[f,g],counts:1,ids:s.id?[s.id]:[]})}})}),Array.from(d.values())}const n=y(t(_.value)),a=y(),o=y(),r=y(n.value.map(i=>i.optionsValue));Ze(r,i=>{H.value=i.length===n.value.length},{deep:!0});const l=(i=n.value)=>{const d=[...new Set(i.map(u=>u.options))],s=[],f=[];for(let u=0;u<100;u++){const m=u*3.6;s.push(`hsl(${m}, 70%, 50%, 0.2)`),f.push(`hsl(${m}, 70%, 50%)`)}const g=d.map(u=>i.filter(m=>m.options===u).reduce((m,x)=>m+x.counts,0));return{labels:d,datasets:[{label:"Options",data:g,backgroundColor:d.map((u,m)=>s[m%s.length]),borderColor:d.map((u,m)=>f[m%f.length]),borderWidth:1}]}},E=()=>{const i=getComputedStyle(document.documentElement),d=i.getPropertyValue("--p-text-muted-color"),s=i.getPropertyValue("--p-content-border-color");return{indexAxis:"y",maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{ticks:{color:d},grid:{color:s}},y:{beginAtZero:!0,ticks:{color:d},grid:{color:s}}}}},A=y(!1),N=y(!0),H=y(!0),I=y(n.value),D=y([0,24]),Ce=y(new Date("2025-02-22")),De=y(new Date("2025-04-07")),O=y([Ce.value,De.value]),Se=()=>{H.value?r.value=n.value.map(i=>i.optionsValue):r.value=[]},re=["bg-blue-200","bg-green-200","bg-yellow-200","bg-red-200","bg-purple-200","bg-pink-200","bg-teal-200","bg-indigo-200","bg-gray-200","bg-blue-400","bg-green-400","bg-yellow-400","bg-red-400","bg-purple-400","bg-pink-400","bg-teal-400","bg-indigo-400","bg-gray-400","bg-blue-600","bg-green-600","bg-yellow-600","bg-red-600","bg-purple-600","bg-pink-600","bg-teal-600","bg-indigo-600","bg-gray-600","bg-blue-800","bg-green-800","bg-yellow-800"],Le={"bg-blue-200":"#93C5FD","bg-green-200":"#86EFAC","bg-yellow-200":"#FDE68A","bg-red-200":"#FCA5A5","bg-purple-200":"#D8B4FE","bg-pink-200":"#F9A8D4","bg-teal-200":"#99F6E4","bg-indigo-200":"#BFDBFE","bg-gray-200":"#E5E7EB","bg-blue-400":"#60A5FA","bg-green-400":"#4ADE80","bg-yellow-400":"#FACC15","bg-red-400":"#F87171","bg-purple-400":"#BE77F1","bg-pink-400":"#F472B6","bg-teal-400":"#4FD1C5","bg-indigo-400":"#818CF8","bg-gray-400":"#9CA3AF","bg-blue-600":"#2563EB","bg-green-600":"#10B981","bg-yellow-600":"#D97706","bg-red-600":"#DC2626","bg-purple-600":"#7C3AED","bg-pink-600":"#DB2777","bg-teal-600":"#0D9488","bg-indigo-600":"#4F46E5","bg-gray-600":"#4B5563","bg-blue-800":"#1E40AF","bg-green-800":"#065F46","bg-yellow-800":"#92400E"};let W=0;const ae=()=>{const i=re[W];return W=(W+1)%re.length,i},z=y(!1),S=y(null),Be=()=>{z.value=!z.value,Z()},X=i=>`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.floor(i%1*60)).padStart(2,"0")}`,Z=()=>{if(!S.value)return;S.value.width=window.innerWidth-40,S.value.height=window.innerHeight-140;const i=S.value.getContext("2d");if(!i)return;i.clearRect(0,0,S.value.width,S.value.height);const s=[...new Set(F.value.flatMap(v=>v.data.map($=>$.options)))].map(String),f=Math.max(...s.map(v=>v.length))*18;S.value.height=window.innerHeight-140+f;const g=S.value.height-50-f,u=70,m=S.value.width-50;i.beginPath(),i.moveTo(u,g),i.lineTo(m,g),i.moveTo(u,50),i.lineTo(u,g),i.strokeStyle="#ddd",i.stroke(),s.forEach((v,$)=>{const T=u-10,V=g-($+1)*(g-50)/(s.length+1);i.font="14px Arial",i.textAlign="right",i.textBaseline="middle",i.fillStyle="#333",i.fillText(v,T,V)});const x=D.value[1]-D.value[0];for(let v=0;v<=x;v++){const $=D.value[0]+v,T=X($),V=u+v/x*(m-u);i.beginPath(),i.moveTo(V,g),i.lineTo(V,50),i.strokeStyle="#f0f0f0",i.stroke(),i.font="12px Arial",i.textAlign="center",i.textBaseline="top",i.fillStyle="#333",i.fillText(T,V,g+8)}F.value.forEach(v=>{const $=Le[v.useColor];v.data.forEach(T=>{const V=String(T.options),oe=s.indexOf(V);if(oe===-1)return;const Y=new Date(T.timestampCurrentDateTime),q=Y.getHours()+Y.getMinutes()/60+Y.getSeconds()/3600;if(q>=D.value[0]&&q<=D.value[1]){const se=u+(q-D.value[0])/x*(m-u),le=g-(oe+1)*(g-50)/(s.length+1);if(i.fillStyle=$,i.beginPath(),i.arc(se,le,5,0,2*Math.PI),i.fill(),z.value){i.font="12px Arial",i.textAlign="left",i.textBaseline="bottom",i.fillStyle="black";const Pe=Y.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});i.fillText(Pe,se+10,le+7)}}})})},ie=i=>{const d={};return i.forEach(s=>{s.ids.forEach(f=>{const g=_.value.find(u=>u.id===f);if(g){const u=g.isCurrentDate,m=g.isCurrentTime,x=g.timestampCurrentDateTime,v=ae();d[u]||(d[u]=[]),d[u].push({time:m,options:s.options,optionsValue:s.optionsValue,useColor:v,timestampCurrentDateTime:x,remark:g.remark})}})}),Object.keys(d).map(s=>({date:s,useColor:ae(),data:d[s]}))},F=y(ie(I.value)),Ee=()=>{let i=_.value;if(O.value.length===2){const s=J(O.value[0]).format("YYYY-MM-DD"),f=J(O.value[1]).format("YYYY-MM-DD");i=i.filter(g=>{const u=J(g.isCurrentDate).format("YYYY-MM-DD");return u>=s&&u<=f})}const d=t(i);console.log(d),r.value.length>0?I.value=d.filter(s=>(console.log(s),r.value.some(f=>f[0]===s.optionsValue[0]&&f[1]===s.optionsValue[1]))):I.value=d,console.log(I.value),F.value=ie(I.value),Z(),a.value=l(I.value),A.value=!1,console.log(F.value)};return qe(()=>{a.value=l(),o.value=E(),Z()}),(i,d)=>(p(),b(K,null,[c("div",Kt,[w(C(ve),{type:"bar",data:a.value,options:o.value,class:"h-screen"},null,8,["data","options"])]),c("div",jt,[w(C(ye),{visible:A.value,"onUpdate:visible":d[6]||(d[6]=s=>A.value=s),header:"Filter",position:"right",class:"!w-1/4"},{footer:P(()=>[c("div",Nt,[w(C(M),{label:"Cancel",onClick:d[4]||(d[4]=s=>A.value=!1)}),w(C(M),{label:"Filter",onClick:d[5]||(d[5]=s=>Ee())})])]),default:P(()=>[c("div",null,[w(C(Ye),{modelValue:O.value,"onUpdate:modelValue":d[0]||(d[0]=s=>O.value=s),selectionMode:"range",placeholder:"選擇日期範圍",class:"p-inputtext w-full",showButtonBar:""},null,8,["modelValue"]),w(C(be),{modelValue:D.value,"onUpdate:modelValue":d[1]||(d[1]=s=>D.value=s),range:"",class:"my-4 w-full",min:0,max:24,step:1},null,8,["modelValue"]),c("div",Rt,[c("span",null,B(X(D.value[0])),1),c("span",null,B(X(D.value[1])),1)])]),c("div",Ht,[c("div",zt,[w(C(ue),{inputId:"select-all",modelValue:H.value,"onUpdate:modelValue":d[2]||(d[2]=s=>H.value=s),onChange:Se,class:"mr-1",binary:!0},null,8,["modelValue"]),d[8]||(d[8]=c("label",{for:"select-all",class:"w-full inline-block font-bold"}," 全選/取消全選 ",-1))]),(p(!0),b(K,null,Q(n.value,s=>(p(),b("div",{key:s.options},[c("ul",null,[c("li",Yt,[w(C(ue),{inputId:s.options,value:s.optionsValue,modelValue:r.value,"onUpdate:modelValue":d[3]||(d[3]=f=>r.value=f),class:"mr-1"},null,8,["inputId","value","modelValue"]),c("label",{for:s.options,class:"w-full inline-block"},B(s.options),9,Ut)])])]))),128))])]),_:1},8,["visible"]),w(C(M),{class:"!bg-[var(--main-color)]",icon:"pi pi-filter",onClick:d[7]||(d[7]=s=>A.value=!0)}),w(C(M),{onClick:Be,label:z.value?"隱藏時間":"顯示時間",class:"p-button-secondary ml-2"},null,8,["label"])]),c("main",null,[w(C(ke),{header:"Detail Information",toggleable:"",collapsed:N.value,class:"p-2 m-2 [&>div]:mb-1 text-sm"},{default:P(()=>[(p(!0),b(K,null,Q(F.value,s=>(p(),b("div",{key:s.date,class:"mb-4"},[c("div",{class:"font-bold",style:Ge({color:s.useColor})},B(s.date),5),c("div",null,[(p(!0),b(K,null,Q(s.data,(f,g)=>(p(),b("div",{key:g},[Qe(B(f.time)+" - "+B(f.options)+" ",1),f.remark?(p(),b("span",Wt,"("+B(f.remark)+")",1)):k("",!0)]))),128))])]))),128))]),_:1},8,["collapsed"]),c("div",Xt,[c("canvas",{ref_key:"canvas",ref:S},null,512)])])],64))}});export{_t as default};
