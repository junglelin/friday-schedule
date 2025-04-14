import{S as Re,T as ze,V as je,W as Ke,X as Ye,s as ue,j as He,B as R,G as Ne,H as Ue,p as Xe,Z as re,I as Ge,R as We,Y as Ze,U as be,a as qe,n as Qe,P as Je,Q as ge}from"./index-CujdQDWo.js";import{B as W,c as v,o as g,e as h,b as S,m as b,_ as _e,f as se,j as et,a as X,w as O,h as w,T as we,q as ke,r as E,F,n as De,t as L,d as Ce,x as tt,z as nt,A as m,I as me,H as at,D as C,g as ee,U as ot,k as it}from"./index-BJd_b72K.js";import{s as rt,F as lt,a as st}from"./index-B3ueTVnq.js";import{i as dt,d as U}from"./ingredients-BGH0k99h.js";import{t as le}from"./tempData-CRpOTtw5.js";var ut=function(t){var n=t.dt;return`
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
`)},ct={handle:{position:"absolute"},range:{position:"absolute"}},pt={root:function(t){var n=t.instance,o=t.props;return["p-slider p-component",{"p-disabled":o.disabled,"p-invalid":n.$invalid,"p-slider-horizontal":o.orientation==="horizontal","p-slider-vertical":o.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},ht=W.extend({name:"slider",theme:ut,classes:pt,inlineStyles:ct}),ft={name:"BaseSlider",extends:Re,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ht,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function bt(e){return yt(e)||vt(e)||mt(e)||gt()}function gt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mt(e,t){if(e){if(typeof e=="string")return de(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?de(e,t):void 0}}function vt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yt(e){if(Array.isArray(e))return de(e)}function de(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var Se={name:"Slider",extends:ft,inheritAttrs:!1,emits:["change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var t=this.$el.getBoundingClientRect();this.initX=t.left+Ke(),this.initY=t.top+Ye(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(t){var n,o=t.touches?t.touches[0].pageX:t.pageX,l=t.touches?t.touches[0].pageY:t.pageY;this.orientation==="horizontal"?je(this.$el)?n=(this.initX+this.barWidth-o)*100/this.barWidth:n=(o-this.initX)*100/this.barWidth:n=(this.initY+this.barHeight-l)*100/this.barHeight;var a=(this.max-this.min)*(n/100)+this.min;if(this.step){var s=this.range?this.value[this.handleIndex]:this.value,P=a-s;P<0?a=s+Math.ceil(a/this.step-s/this.step)*this.step:P>0&&(a=s+Math.floor(a/this.step-s/this.step)*this.step)}else a=Math.floor(a);this.updateModel(t,a)},updateModel:function(t,n){var o=parseFloat(n.toFixed(10)),l;this.range?(l=this.value?bt(this.value):[],this.handleIndex==0?(o<this.min?o=this.min:o>=this.max&&(o=this.max),l[0]=o):(o>this.max?o=this.max:o<=this.min&&(o=this.min),l[1]=o)):(o<this.min?o=this.min:o>this.max&&(o=this.max),l=o),this.writeValue(l,t),this.$emit("change",l)},onDragStart:function(t,n){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=n,t.currentTarget.focus())},onDrag:function(t){this.dragging&&this.setValue(t)},onDragEnd:function(t){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:t,value:this.value}))},onBarClick:function(t){this.disabled||ze(t.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(t))},onMouseDown:function(t,n){this.bindDragListeners(),this.onDragStart(t,n)},onKeyDown:function(t,n){switch(this.handleIndex=n,t.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(t,n),t.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(t,n),t.preventDefault();break;case"PageDown":this.decrementValue(t,n,!0),t.preventDefault();break;case"PageUp":this.incrementValue(t,n,!0),t.preventDefault();break;case"Home":this.updateModel(t,this.min),t.preventDefault();break;case"End":this.updateModel(t,this.max),t.preventDefault();break}},onBlur:function(t,n){var o,l;(o=(l=this.formField).onBlur)===null||o===void 0||o.call(l,t)},decrementValue:function(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,l;this.range?this.step?l=this.value[n]-this.step:l=this.value[n]-1:this.step?l=this.value-this.step:!this.step&&o?l=this.value-10:l=this.value-1,this.updateModel(t,l),t.preventDefault()},incrementValue:function(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,l;this.range?this.step?l=this.value[n]+this.step:l=this.value[n]+1:this.step?l=this.value+this.step:!this.step&&o?l=this.value+10:l=this.value+1,this.updateModel(t,l),t.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)},rangeStyle:function(){if(this.range){var t=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,n=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":n+"%",width:t+"%"}:{bottom:n+"%",height:t+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}},computed:{value:function(){var t;if(this.range){var n,o,l,a;return[(n=(o=this.d_value)===null||o===void 0?void 0:o[0])!==null&&n!==void 0?n:this.min,(l=(a=this.d_value)===null||a===void 0?void 0:a[1])!==null&&l!==void 0?l:this.max]}return(t=this.d_value)!==null&&t!==void 0?t:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100}}},wt=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],kt=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],Dt=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"];function Ct(e,t,n,o,l,a){return g(),v("div",b({class:e.cx("root"),onClick:t[18]||(t[18]=function(){return a.onBarClick&&a.onBarClick.apply(a,arguments)})},e.ptmi("root"),{"data-p-sliding":!1}),[h("span",b({class:e.cx("range"),style:[e.sx("range"),a.rangeStyle()]},e.ptm("range")),null,16),e.range?S("",!0):(g(),v("span",b({key:0,class:e.cx("handle"),style:[e.sx("handle"),a.handleStyle()],onTouchstartPassive:t[0]||(t[0]=function(s){return a.onDragStart(s)}),onTouchmovePassive:t[1]||(t[1]=function(s){return a.onDrag(s)}),onTouchend:t[2]||(t[2]=function(s){return a.onDragEnd(s)}),onMousedown:t[3]||(t[3]=function(s){return a.onMouseDown(s)}),onKeydown:t[4]||(t[4]=function(s){return a.onKeyDown(s)}),onBlur:t[5]||(t[5]=function(s){return a.onBlur(s)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("handle")),null,16,wt)),e.range?(g(),v("span",b({key:1,class:e.cx("handle"),style:[e.sx("handle"),a.rangeStartHandleStyle()],onTouchstartPassive:t[6]||(t[6]=function(s){return a.onDragStart(s,0)}),onTouchmovePassive:t[7]||(t[7]=function(s){return a.onDrag(s)}),onTouchend:t[8]||(t[8]=function(s){return a.onDragEnd(s)}),onMousedown:t[9]||(t[9]=function(s){return a.onMouseDown(s,0)}),onKeydown:t[10]||(t[10]=function(s){return a.onKeyDown(s,0)}),onBlur:t[11]||(t[11]=function(s){return a.onBlur(s,0)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("startHandler")),null,16,kt)):S("",!0),e.range?(g(),v("span",b({key:2,class:e.cx("handle"),style:[e.sx("handle"),a.rangeEndHandleStyle()],onTouchstartPassive:t[12]||(t[12]=function(s){return a.onDragStart(s,1)}),onTouchmovePassive:t[13]||(t[13]=function(s){return a.onDrag(s)}),onTouchend:t[14]||(t[14]=function(s){return a.onDragEnd(s)}),onMousedown:t[15]||(t[15]=function(s){return a.onMouseDown(s,1)}),onKeydown:t[16]||(t[16]=function(s){return a.onKeyDown(s,1)}),onBlur:t[17]||(t[17]=function(s){return a.onBlur(s,1)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("endHandler")),null,16,Dt)):S("",!0)],16)}Se.render=Ct;var St={root:{position:"relative"}},Bt={root:"p-chart"},Lt=W.extend({name:"chart",classes:Bt,inlineStyles:St}),Et={name:"BaseChart",extends:ue,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:Lt,provide:function(){return{$pcChart:this,$parentInstance:this}}},Be={name:"Chart",extends:Et,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var t=this;_e(()=>import("./auto-BsvuWMA9.js"),[]).then(function(n){t.chart&&(t.chart.destroy(),t.chart=null),n&&n.default&&(t.chart=new n.default(t.$refs.canvas,{type:t.type,data:t.data,options:t.options,plugins:t.plugins})),t.$emit("loaded",t.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(t){if(this.chart){var n=this.chart.getElementsAtEventForMode(t,"nearest",{intersect:!0},!1),o=this.chart.getElementsAtEventForMode(t,"dataset",{intersect:!0},!1);n&&n[0]&&o&&this.$emit("select",{originalEvent:t,element:n[0],dataset:o})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function G(e){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(e)}function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ve(Object(n),!0).forEach(function(o){xt(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function xt(e,t,n){return(t=Pt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pt(e){var t=At(e,"string");return G(t)=="symbol"?t:t+""}function At(e,t){if(G(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(G(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var $t=["width","height"];function Mt(e,t,n,o,l,a){return g(),v("div",b({class:e.cx("root"),style:e.sx("root")},e.ptmi("root")),[h("canvas",b({ref:"canvas",width:e.width,height:e.height,onClick:t[0]||(t[0]=function(s){return a.onCanvasClick(s)})},ye(ye({},e.canvasProps),e.ptm("canvas"))),null,16,$t)],16)}Be.render=Mt;var Tt=function(t){var n=t.dt;return`
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
`)},It={mask:function(t){var n=t.position,o=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center",pointerEvents:o?"auto":"none"}},root:{pointerEvents:"auto"}},Ot={mask:function(t){var n=t.instance,o=t.props,l=["left","right","top","bottom"],a=l.find(function(s){return s===o.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":o.modal,"p-drawer-open":n.containerVisible,"p-drawer-full":n.fullScreen},a?"p-drawer-".concat(a):""]},root:function(t){var n=t.instance;return["p-drawer p-component",{"p-drawer-full":n.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Vt=W.extend({name:"drawer",theme:Tt,classes:Ot,inlineStyles:It}),Ft={name:"BaseDrawer",extends:ue,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Vt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},Le={name:"Drawer",extends:Ft,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&re.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&re.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Ge(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&re.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(l){return l&&l.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.$slots.footer&&t(this.footerContainer),n||(n=this.closeButton))),n&&Xe(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&Ue()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&Ne()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:lt},components:{Button:R,Portal:He,TimesIcon:rt}},Rt=["aria-modal"];function zt(e,t,n,o,l,a){var s=se("Button"),P=se("Portal"),V=et("focustrap");return g(),X(P,null,{default:O(function(){return[l.containerVisible?(g(),v("div",b({key:0,ref:a.maskRef,onMousedown:t[0]||(t[0]=function(){return a.onMaskClick&&a.onMaskClick.apply(a,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal})},e.ptm("mask")),[w(we,b({name:"p-drawer",onEnter:a.onEnter,onAfterEnter:a.onAfterEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},e.ptm("transition")),{default:O(function(){return[e.visible?ke((g(),v("div",b({key:0,ref:a.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?E(e.$slots,"container",{key:0,closeCallback:a.hide}):(g(),v(F,{key:1},[h("div",b({ref:a.headerContainerRef,class:e.cx("header")},e.ptm("header")),[E(e.$slots,"header",{class:De(e.cx("title"))},function(){return[e.header?(g(),v("div",b({key:0,class:e.cx("title")},e.ptm("title")),L(e.header),17)):S("",!0)]}),e.showCloseIcon?(g(),X(s,b({key:0,ref:a.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":a.closeAriaLabel,unstyled:e.unstyled,onClick:a.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:O(function(te){return[E(e.$slots,"closeicon",{},function(){return[(g(),X(Ce(e.closeIcon?"span":"TimesIcon"),b({class:[e.closeIcon,te.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):S("",!0)],16),h("div",b({ref:a.contentRef,class:e.cx("content")},e.ptm("content")),[E(e.$slots,"default")],16),e.$slots.footer?(g(),v("div",b({key:0,ref:a.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[E(e.$slots,"footer")],16)):S("",!0)],64))],16,Rt)),[[V]]):S("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):S("",!0)]}),_:3})}Le.render=zt;var jt=function(t){var n=t.dt;return`
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
`)},Kt={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},Yt=W.extend({name:"panel",theme:jt,classes:Kt}),Ht={name:"BasePanel",extends:ue,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Yt,provide:function(){return{$pcPanel:this,$parentInstance:this}}},Ee={name:"Panel",extends:Ht,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||be()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||be()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:st,MinusIcon:Ze,Button:R},directives:{ripple:We}},Nt=["id"],Ut=["id","aria-labelledby"];function Xt(e,t,n,o,l,a){var s=se("Button");return g(),v("div",b({class:e.cx("root")},e.ptmi("root")),[h("div",b({class:e.cx("header")},e.ptm("header")),[E(e.$slots,"header",{id:l.id+"_header",class:De(e.cx("title"))},function(){return[e.header?(g(),v("span",b({key:0,id:l.id+"_header",class:e.cx("title")},e.ptm("title")),L(e.header),17,Nt)):S("",!0)]}),h("div",b({class:e.cx("headerActions")},e.ptm("headerActions")),[E(e.$slots,"icons"),e.toggleable?(g(),X(s,b({key:0,id:l.id+"_header",class:e.cx("pcToggleButton"),"aria-label":a.buttonAriaLabel,"aria-controls":l.id+"_content","aria-expanded":!l.d_collapsed,unstyled:e.unstyled,onClick:a.toggle,onKeydown:a.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:O(function(P){return[E(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed},function(){return[(g(),X(Ce(l.d_collapsed?"PlusIcon":"MinusIcon"),b({class:P.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):S("",!0)],16)],16),w(we,b({name:"p-toggleable-content"},e.ptm("transition")),{default:O(function(){return[ke(h("div",b({id:l.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":l.id+"_header"},e.ptm("contentContainer")),[h("div",b({class:e.cx("content")},e.ptm("content")),[E(e.$slots,"default")],16),e.$slots.footer?(g(),v("div",b({key:0,class:e.cx("footer")},e.ptm("footer")),[E(e.$slots,"footer")],16)):S("",!0)],16,Ut),[[tt,!l.d_collapsed]])]}),_:3},16)],16)}Ee.render=Xt;var Gt=function(t){var n=t.dt;return`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(n("radiobutton.width"),`;
    height: `).concat(n("radiobutton.height"),`;
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid `).concat(n("radiobutton.border.color"),`;
    background: `).concat(n("radiobutton.background"),`;
    width: `).concat(n("radiobutton.width"),`;
    height: `).concat(n("radiobutton.height"),`;
    transition: background `).concat(n("radiobutton.transition.duration"),", color ").concat(n("radiobutton.transition.duration"),", border-color ").concat(n("radiobutton.transition.duration"),", box-shadow ").concat(n("radiobutton.transition.duration"),", outline-color ").concat(n("radiobutton.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("radiobutton.shadow"),`;
}

.p-radiobutton-icon {
    transition-duration: `).concat(n("radiobutton.transition.duration"),`;
    background: transparent;
    font-size: `).concat(n("radiobutton.icon.size"),`;
    width: `).concat(n("radiobutton.icon.size"),`;
    height: `).concat(n("radiobutton.icon.size"),`;
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.hover.border.color"),`;
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.border.color"),`;
    background: `).concat(n("radiobutton.checked.background"),`;
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.checked.color"),`;
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.hover.border.color"),`;
    background: `).concat(n("radiobutton.checked.hover.background"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.checked.hover.color"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.focus.border.color"),`;
    box-shadow: `).concat(n("radiobutton.focus.ring.shadow"),`;
    outline: `).concat(n("radiobutton.focus.ring.width")," ").concat(n("radiobutton.focus.ring.style")," ").concat(n("radiobutton.focus.ring.color"),`;
    outline-offset: `).concat(n("radiobutton.focus.ring.offset"),`;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.focus.border.color"),`;
}

.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.invalid.border.color"),`;
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: `).concat(n("radiobutton.filled.background"),`;
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(n("radiobutton.checked.background"),`;
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(n("radiobutton.checked.hover.background"),`;
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: `).concat(n("radiobutton.disabled.background"),`;
    border-color: `).concat(n("radiobutton.checked.disabled.border.color"),`;
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.disabled.color"),`;
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: `).concat(n("radiobutton.sm.width"),`;
    height: `).concat(n("radiobutton.sm.height"),`;
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: `).concat(n("radiobutton.icon.sm.size"),`;
    width: `).concat(n("radiobutton.icon.sm.size"),`;
    height: `).concat(n("radiobutton.icon.sm.size"),`;
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: `).concat(n("radiobutton.lg.width"),`;
    height: `).concat(n("radiobutton.lg.height"),`;
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: `).concat(n("radiobutton.icon.lg.size"),`;
    width: `).concat(n("radiobutton.icon.lg.size"),`;
    height: `).concat(n("radiobutton.icon.lg.size"),`;
}
`)},Wt={root:function(t){var n=t.instance,o=t.props;return["p-radiobutton p-component",{"p-radiobutton-checked":n.checked,"p-disabled":o.disabled,"p-invalid":n.$pcRadioButtonGroup?n.$pcRadioButtonGroup.$invalid:n.$invalid,"p-variant-filled":n.$variant==="filled","p-radiobutton-sm p-inputfield-sm":o.size==="small","p-radiobutton-lg p-inputfield-lg":o.size==="large"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},Zt=W.extend({name:"radiobutton",theme:Gt,classes:Wt}),qt={name:"BaseRadioButton",extends:qe,props:{value:null,binary:Boolean,readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Zt,provide:function(){return{$pcRadioButton:this,$parentInstance:this}}},xe={name:"RadioButton",extends:qt,inheritAttrs:!1,emits:["change","focus","blur"],inject:{$pcRadioButtonGroup:{default:void 0}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var n=this.binary?!this.checked:this.value;this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.writeValue(n,t):this.writeValue(n,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var n,o;this.$emit("blur",t),(n=(o=this.formField).onBlur)===null||n===void 0||n.call(o,t)}},computed:{groupName:function(){return this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.groupName:this.$formName},checked:function(){var t=this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.d_value:this.d_value;return t!=null&&(this.binary?!!t:Qe(t,this.value))}}},Qt=["data-p-checked","data-p-disabled"],Jt=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function _t(e,t,n,o,l,a){return g(),v("div",b({class:e.cx("root")},a.getPTOptions("root"),{"data-p-checked":a.checked,"data-p-disabled":e.disabled}),[h("input",b({id:e.inputId,type:"radio",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:a.groupName,checked:a.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:t[1]||(t[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onChange:t[2]||(t[2]=function(){return a.onChange&&a.onChange.apply(a,arguments)})},a.getPTOptions("input")),null,16,Jt),h("div",b({class:e.cx("box")},a.getPTOptions("box")),[h("div",b({class:e.cx("icon")},a.getPTOptions("icon")),null,16)],16)],16,Qt)}xe.render=_t;const en={class:"card"},tn={class:"fixed top-4 right-4 z-10"},nn={class:"grid grid-cols-2 gap-2 my-2"},an=["for"],on={class:"flex justify-between text-sm text-gray-600"},rn={class:"card"},ln={class:"flex items-center py-2 border-b border-[var(--line-color)]"},sn={class:"flex py-1"},dn=["for"],un={class:"grid grid-cols-2 gap-1"},cn={key:0,class:"text-gray-500"},pn={class:"flex w-full justify-center"},vn=nt({__name:"chart",setup(e){function t(i){const d=new Map;return i.forEach(r=>{if(r.status===!0)for(const u of Object.keys(r.options))r.options[u].forEach(c=>{const p=dt[u].find(f=>f.value===c);if(p){const f=`${p.label}-${u}-${c}`;d.has(f)?(d.get(f).counts++,r.id&&d.get(f).ids.push(r.id)):d.set(f,{options:p.label,optionsValue:[u,c],counts:1,ids:r.id?[r.id]:[]})}})}),Array.from(d.values())}const n=m(t(le.value)),o=m(),l=m(),a=m(n.value.map(i=>i.optionsValue));me(a,i=>{Z.value=i.length===n.value.length},{deep:!0});const s=(i=n.value)=>{const d=[...new Set(i.map(p=>p.options))],r=[],u=[];for(let p=0;p<100;p++){const f=p*3.6;r.push(`hsl(${f}, 70%, 50%, 0.2)`),u.push(`hsl(${f}, 70%, 50%)`)}const c=d.map(p=>i.filter(f=>f.options===p).reduce((f,M)=>f+M.counts,0));return{labels:d,datasets:[{label:"Options",data:c,backgroundColor:d.map((p,f)=>r[f%r.length]),borderColor:d.map((p,f)=>u[f%u.length]),borderWidth:1}]}},P=()=>{const i=getComputedStyle(document.documentElement),d=i.getPropertyValue("--p-text-muted-color"),r=i.getPropertyValue("--p-content-border-color");return{indexAxis:"y",maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{ticks:{color:d},grid:{color:r}},y:{beginAtZero:!0,ticks:{color:d},grid:{color:r}}}}},V=m(!1),te=m(!0),Z=m(!0),z=m(n.value),k=m([0,24]),ne=m(new Date("2025-01-21")),ae=m(new Date("2025-04-07")),Pe=new Date,x=m([ne.value,ae.value]),A=m("range"),Ae=[{label:"Multiple",value:"multiple"},{label:"Range",value:"range"}],$e=()=>{Z.value?a.value=n.value.map(i=>i.optionsValue):a.value=[]};me(A,i=>{i==="range"?x.value=[ne.value,ae.value]:x.value=[Pe]});const ce=["bg-blue-200","bg-green-200","bg-yellow-200","bg-purple-200","bg-pink-200","bg-teal-200","bg-indigo-200","bg-gray-200","bg-blue-400","bg-green-400","bg-yellow-400","bg-purple-400","bg-pink-400","bg-teal-400","bg-indigo-400","bg-gray-400","bg-blue-600","bg-green-600","bg-yellow-600","bg-purple-600","bg-pink-600","bg-teal-600","bg-indigo-600","bg-gray-600","bg-blue-800","bg-green-800","bg-yellow-800","bg-orange-200","bg-orange-400","bg-orange-600","bg-orange-800","bg-cyan-200","bg-cyan-400","bg-cyan-600","bg-cyan-800","bg-brown-400"],Me={"bg-blue-200":"#93C5FD","bg-green-200":"#86EFAC","bg-yellow-200":"#FDE68A","bg-purple-200":"#D8B4FE","bg-pink-200":"#F9A8D4","bg-teal-200":"#99F6E4","bg-indigo-200":"#BFDBFE","bg-gray-200":"#E5E7EB","bg-blue-400":"#60A5FA","bg-green-400":"#4ADE80","bg-yellow-400":"#FACC15","bg-purple-400":"#BE77F1","bg-pink-400":"#F472B6","bg-teal-400":"#4FD1C5","bg-indigo-400":"#818CF8","bg-gray-400":"#9CA3AF","bg-blue-600":"#2563EB","bg-green-600":"#10B981","bg-yellow-600":"#D97706","bg-purple-600":"#7C3AED","bg-pink-600":"#DB2777","bg-teal-600":"#0D9488","bg-indigo-600":"#4F46E5","bg-gray-600":"#4B5563","bg-blue-800":"#1E40AF","bg-green-800":"#065F46","bg-yellow-800":"#92400E","bg-orange-200":"#F7DC6F","bg-orange-400":"#F97316","bg-orange-600":"#EA580C","bg-orange-800":"#A3300B","bg-cyan-200":"#A5F3FC","bg-cyan-400":"#45A0E6","bg-cyan-600":"#0097E6","bg-cyan-800":"#006BA1","bg-brown-400":"#964B00"};let oe=0;const pe=()=>{const i=ce[oe];return oe=(oe+1)%ce.length,i},q=m(!1),y=m(null),Q=m(null),$=m([]),B=m(210),j=m(0),D=m(0),K=m(24),Y=m(!1),Te=()=>{q.value=!q.value,J()},ie=i=>`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.floor(i%1*60)).padStart(2,"0")}`,Ie=(i,d,r,u,c)=>Math.sqrt(Math.pow(i-r,2)+Math.pow(d-u,2))<=c,Oe=i=>{if(!y.value)return;const d=y.value.getBoundingClientRect(),r=i.clientX-d.left,u=i.clientY-d.top;Y.value=!1,H.value.forEach(c=>{c.data.forEach(p=>{const f=String(p.options),M=$.value.indexOf(f);if(M===-1)return;const T=new Date(p.timestampCurrentDateTime),I=T.getHours()+T.getMinutes()/60+T.getSeconds()/3600;if(I>=k.value[0]&&I<=k.value[1]){const N=B.value+(I-k.value[0])/K.value*(j.value-B.value),_=D.value-(M+1)*(D.value-50)/($.value.length+1);Ie(r,u,N,_,5)&&(Q.value=c.date,Y.value=!0)}})}),Y.value||(Q.value=null),J()},J=()=>{if(!y.value)return;y.value.width=window.innerWidth-40,y.value.height=window.innerHeight-140;const i=y.value.getContext("2d");if(!i)return;i.clearRect(0,0,y.value.width,y.value.height);const d=[...new Set(H.value.flatMap(u=>u.data.map(c=>c.options)))];$.value=d.map(String);const r=Math.max(...$.value.map(u=>u.length))*18;y.value.height=window.innerHeight-140+r,D.value=y.value.height-50-r,B.value=210,j.value=y.value.width-50,K.value=k.value[1]-k.value[0],i.beginPath(),i.moveTo(B.value,D.value),i.lineTo(j.value,D.value),i.moveTo(B.value,50),i.lineTo(B.value,D.value),i.strokeStyle="#ddd",i.stroke(),$.value.forEach((u,c)=>{const p=B.value-10,f=D.value-(c+1)*(D.value-50)/($.value.length+1);i.font="14px Helvetica Neue, Helvetica, Arial, sans-serif",i.textAlign="right",i.textBaseline="middle",i.fillStyle="#333",i.fillText(u,p,f)});for(let u=0;u<=K.value;u++){const c=k.value[0]+u,p=ie(c),f=B.value+u/K.value*(j.value-B.value);i.beginPath(),i.moveTo(f,D.value),i.lineTo(f,50),i.strokeStyle="#f0f0f0",i.stroke(),i.textAlign="center",i.textBaseline="top",i.fillStyle="#333",i.fillText(p,f,D.value+8)}H.value.forEach(u=>{const c=Q.value===u.date,p=Me[u.useColor];u.data.forEach(f=>{const M=String(f.options),T=$.value.indexOf(M);if(T===-1)return;const I=new Date(f.timestampCurrentDateTime),N=I.getHours()+I.getMinutes()/60+I.getSeconds()/3600;if(N>=k.value[0]&&N<=k.value[1]){const _=B.value+(N-k.value[0])/K.value*(j.value-B.value),fe=D.value-(T+1)*(D.value-50)/($.value.length+1);if(Y.value&&(i.globalAlpha=c?1:.05),i.fillStyle=p,i.beginPath(),i.arc(_,fe,5,0,2*Math.PI),i.fill(),q.value){i.textAlign="left",i.textBaseline="bottom",i.fillStyle="black";const Fe=I.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});i.fillText(Fe,_+10,fe+7)}}})})},he=i=>{const d={};return i.forEach(r=>{r.ids.forEach(u=>{const c=le.value.find(p=>p.id===u);if(c){const p=c.isCurrentDate,f=c.isCurrentTime,M=c.timestampCurrentDateTime,T=pe();d[p]||(d[p]=[]),d[p].push({time:f,options:r.options,optionsValue:r.optionsValue,useColor:T,timestampCurrentDateTime:M,remark:c.remark})}})}),Object.keys(d).forEach(r=>{d[r].sort((u,c)=>c.timestampCurrentDateTime-u.timestampCurrentDateTime)}),Object.keys(d).map(r=>({date:r,useColor:pe(),data:d[r]}))},H=m(he(z.value)),Ve=()=>{let i=le.value;if(A.value==="range"&&x.value.length===2){const r=U(x.value[0]).format("YYYY-MM-DD"),u=U(x.value[1]).format("YYYY-MM-DD");i=i.filter(c=>{const p=U(c.isCurrentDate).format("YYYY-MM-DD");return p>=r&&p<=u})}else if(A.value==="multiple"&&x.value.length>0){const r=x.value.map(u=>U(u).format("YYYY-MM-DD"));i=i.filter(u=>{const c=U(u.isCurrentDate).format("YYYY-MM-DD");return r.includes(c)})}const d=t(i);a.value.length>0?z.value=d.filter(r=>a.value.some(u=>u[0]===r.optionsValue[0]&&u[1]===r.optionsValue[1])):z.value=d,H.value=he(z.value),J(),o.value=s(z.value),V.value=!1,Q.value=null,Y.value=!1};return at(()=>{o.value=s(),l.value=P(),J(),y.value&&y.value.addEventListener("mousemove",Oe)}),(i,d)=>(g(),v(F,null,[h("div",en,[w(C(Be),{type:"bar",data:o.value,options:l.value,class:"h-screen"},null,8,["data","options"])]),h("div",tn,[w(C(Le),{visible:V.value,"onUpdate:visible":d[7]||(d[7]=r=>V.value=r),header:"Filter",position:"right",class:"!w-1/4"},{footer:O(()=>[h("div",un,[w(C(R),{label:"Cancel",onClick:d[5]||(d[5]=r=>V.value=!1)}),w(C(R),{label:"Filter",onClick:d[6]||(d[6]=r=>Ve())})])]),default:O(()=>[h("div",null,[h("div",nn,[(g(),v(F,null,ee(Ae,r=>h("div",{key:r.value,class:"flex items-center"},[w(C(xe),{modelValue:A.value,"onUpdate:modelValue":d[0]||(d[0]=u=>A.value=u),value:r.value,inputId:r.value},null,8,["modelValue","value","inputId"]),h("label",{for:r.value,class:"ml-2"},L(r.label),9,an)])),64))]),w(C(Je),{modelValue:x.value,"onUpdate:modelValue":d[1]||(d[1]=r=>x.value=r),selectionMode:A.value,minDate:A.value==="range"?ne.value:void 0,maxDate:A.value==="range"?ae.value:void 0,placeholder:"選擇日期範圍",class:"p-inputtext w-full",showButtonBar:""},null,8,["modelValue","selectionMode","minDate","maxDate"]),w(C(Se),{modelValue:k.value,"onUpdate:modelValue":d[2]||(d[2]=r=>k.value=r),range:"",class:"my-8 mx-2 w-full",min:0,max:24,step:1},null,8,["modelValue"]),h("div",on,[h("span",null,L(ie(k.value[0])),1),h("span",null,L(ie(k.value[1])),1)])]),h("div",rn,[h("div",ln,[w(C(ge),{inputId:"select-all",modelValue:Z.value,"onUpdate:modelValue":d[3]||(d[3]=r=>Z.value=r),onChange:$e,class:"mr-1",binary:!0},null,8,["modelValue"]),d[9]||(d[9]=h("label",{for:"select-all",class:"w-full inline-block font-bold"}," 全選/取消全選 ",-1))]),(g(!0),v(F,null,ee(n.value,r=>(g(),v("div",{key:r.options},[h("ul",null,[h("li",sn,[w(C(ge),{inputId:r.options,value:r.optionsValue,modelValue:a.value,"onUpdate:modelValue":d[4]||(d[4]=u=>a.value=u),class:"mr-1"},null,8,["inputId","value","modelValue"]),h("label",{for:r.options,class:"w-full inline-block"},L(r.options),9,dn)])])]))),128))])]),_:1},8,["visible"]),w(C(R),{class:"!bg-[var(--main-color)]",icon:"pi pi-filter",onClick:d[8]||(d[8]=r=>V.value=!0)}),w(C(R),{onClick:Te,label:q.value?"隱藏時間":"顯示時間",class:"p-button-secondary ml-2"},null,8,["label"])]),h("main",null,[w(C(Ee),{header:"Detail Information",toggleable:"",collapsed:te.value,class:"p-2 m-2 [&>div]:mb-1 text-sm"},{default:O(()=>[(g(!0),v(F,null,ee(H.value,r=>(g(),v("div",{key:r.date,class:"mb-4"},[h("div",{class:"font-bold",style:ot({color:r.useColor})},L(r.date),5),h("div",null,[(g(!0),v(F,null,ee(r.data,(u,c)=>(g(),v("div",{key:c},[it(L(u.time)+" - "+L(u.options)+" ",1),u.remark?(g(),v("span",cn,"("+L(u.remark)+")",1)):S("",!0)]))),128))])]))),128))]),_:1},8,["collapsed"]),h("div",pn,[h("canvas",{ref_key:"canvas",ref:y},null,512)])])],64))}});export{vn as default};
