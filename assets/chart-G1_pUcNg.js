import{R as se,S as ue,l as ye,n as oe,A as X,T as He,V as Ue,W as Ne,X as We,s as de,j as qe,B as F,G as Xe,H as Ze,p as Ge,Z as ae,I as Qe,b as Je,Y as _e,U as we,N as et,P as tt,Q as ke,M as H}from"./ingredients-B2E8slhi.js";import{B as R,j as Le,q as ce,c as m,o as c,e as h,r as S,n as pe,b as C,m as d,t as E,f as G,F as z,g as Z,a as j,p as nt,w as x,_ as ot,h as D,T as Be,d as Ee,R as at,x as rt,y as w,E as De,D as it,G as L,S as lt,k as st}from"./index-oh3zOTm7.js";import{t as re}from"./tempData-DmAOFpk_.js";import{s as ut,F as dt}from"./index-sYYQGSMH.js";var ct=function(t){var n=t.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("togglebutton.color"),`;
    background: `).concat(n("togglebutton.background"),`;
    border: 1px solid `).concat(n("togglebutton.border.color"),`;
    padding: `).concat(n("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(n("togglebutton.transition.duration"),", color ").concat(n("togglebutton.transition.duration"),", border-color ").concat(n("togglebutton.transition.duration"),`,
        outline-color `).concat(n("togglebutton.transition.duration"),", box-shadow ").concat(n("togglebutton.transition.duration"),`;
    border-radius: `).concat(n("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(n("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(n("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(n("togglebutton.transition.duration"),", color ").concat(n("togglebutton.transition.duration"),", border-color ").concat(n("togglebutton.transition.duration"),`,
            outline-color `).concat(n("togglebutton.transition.duration"),", box-shadow ").concat(n("togglebutton.transition.duration"),`;
    position: absolute;
    inset-inline-start: `).concat(n("togglebutton.content.left"),`;
    inset-block-start: `).concat(n("togglebutton.content.top"),`;
    width: calc(100% - calc(2 * `).concat(n("togglebutton.content.left"),`));
    height: calc(100% - calc(2 * `).concat(n("togglebutton.content.top"),`));
    border-radius: `).concat(n("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(n("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(n("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(n("togglebutton.hover.background"),`;
    color: `).concat(n("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(n("togglebutton.checked.background"),`;
    border-color: `).concat(n("togglebutton.checked.border.color"),`;
    color: `).concat(n("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(n("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(n("togglebutton.focus.ring.width")," ").concat(n("togglebutton.focus.ring.style")," ").concat(n("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(n("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(n("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(n("togglebutton.disabled.background"),`;
    border-color: `).concat(n("togglebutton.disabled.border.color"),`;
    color: `).concat(n("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.disabled.color"),`;
}

.p-togglebutton-sm {
    padding: `).concat(n("togglebutton.sm.padding"),`;
    font-size: `).concat(n("togglebutton.sm.font.size"),`;
}

.p-togglebutton-lg {
    padding: `).concat(n("togglebutton.lg.padding"),`;
    font-size: `).concat(n("togglebutton.lg.font.size"),`;
}
`)},pt={root:function(t){var n=t.instance,a=t.props;return["p-togglebutton p-component",{"p-togglebutton-checked":n.active,"p-invalid":n.$invalid,"p-togglebutton-sm p-inputfield-sm":a.size==="small","p-togglebutton-lg p-inputfield-lg":a.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},ht=R.extend({name:"togglebutton",theme:ct,classes:pt}),gt={name:"BaseToggleButton",extends:ue,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:ht,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},Ae={name:"ToggleButton",extends:gt,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{active:this.active,disabled:this.disabled}})},onChange:function(t){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,t),this.$emit("change",t))},onBlur:function(t){var n,a;(n=(a=this.formField).onBlur)===null||n===void 0||n.call(a,t)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return ye(this.onLabel)&&ye(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "}},directives:{ripple:se}},ft=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function bt(e,t,n,a,r,o){var i=Le("ripple");return ce((c(),m("button",d({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:t[0]||(t[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:t[1]||(t[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":e.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":e.disabled}),[h("span",d({class:e.cx("content")},o.getPTOptions("content")),[S(e.$slots,"default",{},function(){return[S(e.$slots,"icon",{value:e.d_value,class:pe(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(c(),m("span",d({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},o.getPTOptions("icon")),null,16)):C("",!0)]}),h("span",d({class:e.cx("label")},o.getPTOptions("label")),E(o.label),17)]})],16)],16,ft)),[[i]])}Ae.render=bt;var mt=function(t){var n=t.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(n("selectbutton.border.radius"),`;
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
    border-start-start-radius: `).concat(n("selectbutton.border.radius"),`;
    border-end-start-radius: `).concat(n("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: `).concat(n("selectbutton.border.radius"),`;
    border-end-end-radius: `).concat(n("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(n("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},vt={root:function(t){var n=t.instance;return["p-selectbutton p-component",{"p-invalid":n.$invalid}]}},yt=R.extend({name:"selectbutton",theme:mt,classes:vt}),wt={name:"BaseSelectButton",extends:ue,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:yt,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function kt(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Pe(e))||t){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(B){throw B},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,g=!1;return{s:function(){n=n.call(e)},n:function(){var B=n.next();return i=B.done,B},e:function(B){g=!0,o=B},f:function(){try{i||n.return==null||n.return()}finally{if(g)throw o}}}}function Dt(e){return Lt(e)||Ct(e)||Pe(e)||St()}function St(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(e,t){if(e){if(typeof e=="string")return ie(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(e,t):void 0}}function Ct(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lt(e){if(Array.isArray(e))return ie(e)}function ie(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var $e={name:"SelectButton",extends:wt,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(t){return this.optionLabel?X(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?X(t,this.optionValue):t},getOptionRenderKey:function(t){return this.dataKey?X(t,this.dataKey):this.getOptionLabel(t)},isOptionDisabled:function(t){return this.optionDisabled?X(t,this.optionDisabled):!1},onOptionSelect:function(t,n,a){var r=this;if(!(this.disabled||this.isOptionDisabled(n))){var o=this.isSelected(n);if(!(o&&!this.allowEmpty)){var i=this.getOptionValue(n),g;this.multiple?o?g=this.d_value.filter(function(y){return!oe(y,i,r.equalityKey)}):g=this.d_value?[].concat(Dt(this.d_value),[i]):[i]:g=o?null:i,this.writeValue(g,t),this.$emit("change",{event:t,value:g})}}},isSelected:function(t){var n=!1,a=this.getOptionValue(t);if(this.multiple){if(this.d_value){var r=kt(this.d_value),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;if(oe(i,a,this.equalityKey)){n=!0;break}}}catch(g){r.e(g)}finally{r.f()}}}else n=oe(this.d_value,a,this.equalityKey);return n}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:se},components:{ToggleButton:Ae}},Bt=["aria-labelledby"];function Et(e,t,n,a,r,o){var i=G("ToggleButton");return c(),m("div",d({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(c(!0),m(z,null,Z(e.options,function(g,y){return c(),j(i,{key:o.getOptionRenderKey(g),modelValue:o.isSelected(g),onLabel:o.getOptionLabel(g),offLabel:o.getOptionLabel(g),disabled:e.disabled||o.isOptionDisabled(g),unstyled:e.unstyled,size:e.size,readonly:!e.allowEmpty&&o.isSelected(g),onChange:function(M){return o.onOptionSelect(M,g,y)},pt:e.ptm("pcToggleButton")},nt({_:2},[e.$slots.option?{name:"default",fn:x(function(){return[S(e.$slots,"option",{option:g,index:y},function(){return[h("span",d({ref_for:!0},e.ptm("pcToggleButton").label),E(o.getOptionLabel(g)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,Bt)}$e.render=Et;var At=function(t){var n=t.dt;return`
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
`)},Pt={handle:{position:"absolute"},range:{position:"absolute"}},$t={root:function(t){var n=t.instance,a=t.props;return["p-slider p-component",{"p-disabled":a.disabled,"p-invalid":n.$invalid,"p-slider-horizontal":a.orientation==="horizontal","p-slider-vertical":a.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},xt=R.extend({name:"slider",theme:At,classes:$t,inlineStyles:Pt}),Vt={name:"BaseSlider",extends:ue,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:xt,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function Ot(e){return Kt(e)||Mt(e)||It(e)||Tt()}function Tt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function It(e,t){if(e){if(typeof e=="string")return le(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,t):void 0}}function Mt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Kt(e){if(Array.isArray(e))return le(e)}function le(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var xe={name:"Slider",extends:Vt,inheritAttrs:!1,emits:["change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var t=this.$el.getBoundingClientRect();this.initX=t.left+Ne(),this.initY=t.top+We(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(t){var n,a=t.touches?t.touches[0].pageX:t.pageX,r=t.touches?t.touches[0].pageY:t.pageY;this.orientation==="horizontal"?Ue(this.$el)?n=(this.initX+this.barWidth-a)*100/this.barWidth:n=(a-this.initX)*100/this.barWidth:n=(this.initY+this.barHeight-r)*100/this.barHeight;var o=(this.max-this.min)*(n/100)+this.min;if(this.step){var i=this.range?this.value[this.handleIndex]:this.value,g=o-i;g<0?o=i+Math.ceil(o/this.step-i/this.step)*this.step:g>0&&(o=i+Math.floor(o/this.step-i/this.step)*this.step)}else o=Math.floor(o);this.updateModel(t,o)},updateModel:function(t,n){var a=parseFloat(n.toFixed(10)),r;this.range?(r=this.value?Ot(this.value):[],this.handleIndex==0?(a<this.min?a=this.min:a>=this.max&&(a=this.max),r[0]=a):(a>this.max?a=this.max:a<=this.min&&(a=this.min),r[1]=a)):(a<this.min?a=this.min:a>this.max&&(a=this.max),r=a),this.writeValue(r,t),this.$emit("change",r)},onDragStart:function(t,n){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=n,t.currentTarget.focus())},onDrag:function(t){this.dragging&&this.setValue(t)},onDragEnd:function(t){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:t,value:this.value}))},onBarClick:function(t){this.disabled||He(t.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(t))},onMouseDown:function(t,n){this.bindDragListeners(),this.onDragStart(t,n)},onKeyDown:function(t,n){switch(this.handleIndex=n,t.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(t,n),t.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(t,n),t.preventDefault();break;case"PageDown":this.decrementValue(t,n,!0),t.preventDefault();break;case"PageUp":this.incrementValue(t,n,!0),t.preventDefault();break;case"Home":this.updateModel(t,this.min),t.preventDefault();break;case"End":this.updateModel(t,this.max),t.preventDefault();break}},onBlur:function(t,n){var a,r;(a=(r=this.formField).onBlur)===null||a===void 0||a.call(r,t)},decrementValue:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r;this.range?this.step?r=this.value[n]-this.step:r=this.value[n]-1:this.step?r=this.value-this.step:!this.step&&a?r=this.value-10:r=this.value-1,this.updateModel(t,r),t.preventDefault()},incrementValue:function(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r;this.range?this.step?r=this.value[n]+this.step:r=this.value[n]+1:this.step?r=this.value+this.step:!this.step&&a?r=this.value+10:r=this.value+1,this.updateModel(t,r),t.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)},rangeStyle:function(){if(this.range){var t=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,n=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":n+"%",width:t+"%"}:{bottom:n+"%",height:t+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}},computed:{value:function(){var t;if(this.range){var n,a,r,o;return[(n=(a=this.d_value)===null||a===void 0?void 0:a[0])!==null&&n!==void 0?n:this.min,(r=(o=this.d_value)===null||o===void 0?void 0:o[1])!==null&&r!==void 0?r:this.max]}return(t=this.d_value)!==null&&t!==void 0?t:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100}}},Ft=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],zt=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"],jt=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation"];function Rt(e,t,n,a,r,o){return c(),m("div",d({class:e.cx("root"),onClick:t[18]||(t[18]=function(){return o.onBarClick&&o.onBarClick.apply(o,arguments)})},e.ptmi("root"),{"data-p-sliding":!1}),[h("span",d({class:e.cx("range"),style:[e.sx("range"),o.rangeStyle()]},e.ptm("range")),null,16),e.range?C("",!0):(c(),m("span",d({key:0,class:e.cx("handle"),style:[e.sx("handle"),o.handleStyle()],onTouchstartPassive:t[0]||(t[0]=function(i){return o.onDragStart(i)}),onTouchmovePassive:t[1]||(t[1]=function(i){return o.onDrag(i)}),onTouchend:t[2]||(t[2]=function(i){return o.onDragEnd(i)}),onMousedown:t[3]||(t[3]=function(i){return o.onMouseDown(i)}),onKeydown:t[4]||(t[4]=function(i){return o.onKeyDown(i)}),onBlur:t[5]||(t[5]=function(i){return o.onBlur(i)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("handle")),null,16,Ft)),e.range?(c(),m("span",d({key:1,class:e.cx("handle"),style:[e.sx("handle"),o.rangeStartHandleStyle()],onTouchstartPassive:t[6]||(t[6]=function(i){return o.onDragStart(i,0)}),onTouchmovePassive:t[7]||(t[7]=function(i){return o.onDrag(i)}),onTouchend:t[8]||(t[8]=function(i){return o.onDragEnd(i)}),onMousedown:t[9]||(t[9]=function(i){return o.onMouseDown(i,0)}),onKeydown:t[10]||(t[10]=function(i){return o.onKeyDown(i,0)}),onBlur:t[11]||(t[11]=function(i){return o.onBlur(i,0)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("startHandler")),null,16,zt)):C("",!0),e.range?(c(),m("span",d({key:2,class:e.cx("handle"),style:[e.sx("handle"),o.rangeEndHandleStyle()],onTouchstartPassive:t[12]||(t[12]=function(i){return o.onDragStart(i,1)}),onTouchmovePassive:t[13]||(t[13]=function(i){return o.onDrag(i)}),onTouchend:t[14]||(t[14]=function(i){return o.onDragEnd(i)}),onMousedown:t[15]||(t[15]=function(i){return o.onMouseDown(i,1)}),onKeydown:t[16]||(t[16]=function(i){return o.onKeyDown(i,1)}),onBlur:t[17]||(t[17]=function(i){return o.onBlur(i,1)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("endHandler")),null,16,jt)):C("",!0)],16)}xe.render=Rt;var Yt={root:{position:"relative"}},Ht={root:"p-chart"},Ut=R.extend({name:"chart",classes:Ht,inlineStyles:Yt}),Nt={name:"BaseChart",extends:de,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:Ut,provide:function(){return{$pcChart:this,$parentInstance:this}}},Ve={name:"Chart",extends:Nt,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var t=this;ot(()=>import("./auto-BsvuWMA9.js"),[]).then(function(n){t.chart&&(t.chart.destroy(),t.chart=null),n&&n.default&&(t.chart=new n.default(t.$refs.canvas,{type:t.type,data:t.data,options:t.options,plugins:t.plugins})),t.$emit("loaded",t.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(t){if(this.chart){var n=this.chart.getElementsAtEventForMode(t,"nearest",{intersect:!0},!1),a=this.chart.getElementsAtEventForMode(t,"dataset",{intersect:!0},!1);n&&n[0]&&a&&this.$emit("select",{originalEvent:t,element:n[0],dataset:a})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function U(e){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(e)}function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Se(Object(n),!0).forEach(function(a){Wt(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Wt(e,t,n){return(t=qt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qt(e){var t=Xt(e,"string");return U(t)=="symbol"?t:t+""}function Xt(e,t){if(U(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(U(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Zt=["width","height"];function Gt(e,t,n,a,r,o){return c(),m("div",d({class:e.cx("root"),style:e.sx("root")},e.ptmi("root")),[h("canvas",d({ref:"canvas",width:e.width,height:e.height,onClick:t[0]||(t[0]=function(i){return o.onCanvasClick(i)})},Ce(Ce({},e.canvasProps),e.ptm("canvas"))),null,16,Zt)],16)}Ve.render=Gt;var Qt=function(t){var n=t.dt;return`
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
`)},Jt={mask:function(t){var n=t.position,a=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center",pointerEvents:a?"auto":"none"}},root:{pointerEvents:"auto"}},_t={mask:function(t){var n=t.instance,a=t.props,r=["left","right","top","bottom"],o=r.find(function(i){return i===a.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":a.modal,"p-drawer-open":n.containerVisible,"p-drawer-full":n.fullScreen},o?"p-drawer-".concat(o):""]},root:function(t){var n=t.instance;return["p-drawer p-component",{"p-drawer-full":n.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},en=R.extend({name:"drawer",theme:Qt,classes:_t,inlineStyles:Jt}),tn={name:"BaseDrawer",extends:de,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:en,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},Oe={name:"Drawer",extends:tn,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&ae.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&ae.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Qe(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&ae.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(r){return r&&r.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.$slots.footer&&t(this.footerContainer),n||(n=this.closeButton))),n&&Ge(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&Ze()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&Xe()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:dt},components:{Button:F,Portal:qe,TimesIcon:ut}},nn=["aria-modal"];function on(e,t,n,a,r,o){var i=G("Button"),g=G("Portal"),y=Le("focustrap");return c(),j(g,null,{default:x(function(){return[r.containerVisible?(c(),m("div",d({key:0,ref:o.maskRef,onMousedown:t[0]||(t[0]=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal})},e.ptm("mask")),[D(Be,d({name:"p-drawer",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},e.ptm("transition")),{default:x(function(){return[e.visible?ce((c(),m("div",d({key:0,ref:o.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?S(e.$slots,"container",{key:0,closeCallback:o.hide}):(c(),m(z,{key:1},[h("div",d({ref:o.headerContainerRef,class:e.cx("header")},e.ptm("header")),[S(e.$slots,"header",{class:pe(e.cx("title"))},function(){return[e.header?(c(),m("div",d({key:0,class:e.cx("title")},e.ptm("title")),E(e.header),17)):C("",!0)]}),e.showCloseIcon?(c(),j(i,d({key:0,ref:o.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":o.closeAriaLabel,unstyled:e.unstyled,onClick:o.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:x(function(B){return[S(e.$slots,"closeicon",{},function(){return[(c(),j(Ee(e.closeIcon?"span":"TimesIcon"),d({class:[e.closeIcon,B.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):C("",!0)],16),h("div",d({ref:o.contentRef,class:e.cx("content")},e.ptm("content")),[S(e.$slots,"default")],16),e.$slots.footer?(c(),m("div",d({key:0,ref:o.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[S(e.$slots,"footer")],16)):C("",!0)],64))],16,nn)),[[y]]):C("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):C("",!0)]}),_:3})}Oe.render=on;var Te={name:"PlusIcon",extends:Je};function an(e,t,n,a,r,o){return c(),m("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[h("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}Te.render=an;var rn=function(t){var n=t.dt;return`
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
`)},ln={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},sn=R.extend({name:"panel",theme:rn,classes:ln}),un={name:"BasePanel",extends:de,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:sn,provide:function(){return{$pcPanel:this,$parentInstance:this}}},Ie={name:"Panel",extends:un,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||we()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||we()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:Te,MinusIcon:_e,Button:F},directives:{ripple:se}},dn=["id"],cn=["id","aria-labelledby"];function pn(e,t,n,a,r,o){var i=G("Button");return c(),m("div",d({class:e.cx("root")},e.ptmi("root")),[h("div",d({class:e.cx("header")},e.ptm("header")),[S(e.$slots,"header",{id:r.id+"_header",class:pe(e.cx("title"))},function(){return[e.header?(c(),m("span",d({key:0,id:r.id+"_header",class:e.cx("title")},e.ptm("title")),E(e.header),17,dn)):C("",!0)]}),h("div",d({class:e.cx("headerActions")},e.ptm("headerActions")),[S(e.$slots,"icons"),e.toggleable?(c(),j(i,d({key:0,id:r.id+"_header",class:e.cx("pcToggleButton"),"aria-label":o.buttonAriaLabel,"aria-controls":r.id+"_content","aria-expanded":!r.d_collapsed,unstyled:e.unstyled,onClick:o.toggle,onKeydown:o.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:x(function(g){return[S(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed},function(){return[(c(),j(Ee(r.d_collapsed?"PlusIcon":"MinusIcon"),d({class:g.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):C("",!0)],16)],16),D(Be,d({name:"p-toggleable-content"},e.ptm("transition")),{default:x(function(){return[ce(h("div",d({id:r.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":r.id+"_header"},e.ptm("contentContainer")),[h("div",d({class:e.cx("content")},e.ptm("content")),[S(e.$slots,"default")],16),e.$slots.footer?(c(),m("div",d({key:0,class:e.cx("footer")},e.ptm("footer")),[S(e.$slots,"footer")],16)):C("",!0)],16,cn),[[at,!r.d_collapsed]])]}),_:3},16)],16)}Ie.render=pn;const hn={class:"card"},gn={class:"fixed top-4 right-4"},fn={class:"flex justify-between text-sm text-gray-600"},bn={class:"card"},mn={class:"flex items-center py-2 border-b border-[var(--line-color)]"},vn={class:"flex py-1"},yn=["for"],wn={class:"grid grid-cols-2 gap-1"},kn={key:0,class:"text-gray-500"},Dn={class:"flex w-full justify-center"},En=rt({__name:"chart",setup(e){function t(l){const u=new Map;return l.forEach(s=>{for(const f of Object.keys(s.options))s.options[f].forEach(b=>{const p=et[f].find(v=>v.value===b);if(p){const v=`${p.label}-${f}-${b}`;u.has(v)?(u.get(v).counts++,s.id&&u.get(v).ids.push(s.id)):u.set(v,{options:p.label,optionsValue:[f,b],counts:1,ids:s.id?[s.id]:[]})}})}),Array.from(u.values())}const n=w(t(re.value)),a=w(),r=w(),o=w(n.value.map(l=>l.optionsValue));De(o,l=>{M.value=l.length===n.value.length},{deep:!0});const i=(l=n.value)=>{const u=[...new Set(l.map(p=>p.options))],s=[],f=[];for(let p=0;p<100;p++){const v=p*3.6;s.push(`hsl(${v}, 70%, 50%, 0.2)`),f.push(`hsl(${v}, 70%, 50%)`)}const b=u.map(p=>l.filter(v=>v.options===p).reduce((v,O)=>v+O.counts,0));return{labels:u,datasets:[{label:"Options",data:b,backgroundColor:u.map((p,v)=>s[v%s.length]),borderColor:u.map((p,v)=>f[v%f.length]),borderWidth:1}]}},g=()=>{const l=getComputedStyle(document.documentElement),u=l.getPropertyValue("--p-text-muted-color"),s=l.getPropertyValue("--p-content-border-color");return{indexAxis:"y",maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{ticks:{color:u},grid:{color:s}},y:{beginAtZero:!0,ticks:{color:u},grid:{color:s}}}}},y=w(!1),B=w(!0),M=w(!0),Y=w(n.value),A=w([0,24]),Q=w(new Date("2025-02-26")),J=w(new Date("2025-04-07")),Me=new Date,$=w([Q.value,J.value]),V=w("range"),Ke=[{label:"Multiple",value:"multiple"},{label:"Range",value:"range"}],Fe=()=>{M.value?o.value=n.value.map(l=>l.optionsValue):o.value=[]};De(V,l=>{l==="range"?$.value=[Q.value,J.value]:$.value=[Me]});const he=["bg-blue-200","bg-green-200","bg-yellow-200","bg-red-200","bg-purple-200","bg-pink-200","bg-teal-200","bg-indigo-200","bg-gray-200","bg-blue-400","bg-green-400","bg-yellow-400","bg-red-400","bg-purple-400","bg-pink-400","bg-teal-400","bg-indigo-400","bg-gray-400","bg-blue-600","bg-green-600","bg-yellow-600","bg-red-600","bg-purple-600","bg-pink-600","bg-teal-600","bg-indigo-600","bg-gray-600","bg-blue-800","bg-green-800","bg-yellow-800"],ze={"bg-blue-200":"#93C5FD","bg-green-200":"#86EFAC","bg-yellow-200":"#FDE68A","bg-red-200":"#FCA5A5","bg-purple-200":"#D8B4FE","bg-pink-200":"#F9A8D4","bg-teal-200":"#99F6E4","bg-indigo-200":"#BFDBFE","bg-gray-200":"#E5E7EB","bg-blue-400":"#60A5FA","bg-green-400":"#4ADE80","bg-yellow-400":"#FACC15","bg-red-400":"#F87171","bg-purple-400":"#BE77F1","bg-pink-400":"#F472B6","bg-teal-400":"#4FD1C5","bg-indigo-400":"#818CF8","bg-gray-400":"#9CA3AF","bg-blue-600":"#2563EB","bg-green-600":"#10B981","bg-yellow-600":"#D97706","bg-red-600":"#DC2626","bg-purple-600":"#7C3AED","bg-pink-600":"#DB2777","bg-teal-600":"#0D9488","bg-indigo-600":"#4F46E5","bg-gray-600":"#4B5563","bg-blue-800":"#1E40AF","bg-green-800":"#065F46","bg-yellow-800":"#92400E"};let _=0;const ge=()=>{const l=he[_];return _=(_+1)%he.length,l},N=w(!1),P=w(null),je=()=>{N.value=!N.value,te()},ee=l=>`${String(Math.floor(l)).padStart(2,"0")}:${String(Math.floor(l%1*60)).padStart(2,"0")}`,te=()=>{if(!P.value)return;P.value.width=window.innerWidth-40,P.value.height=window.innerHeight-140;const l=P.value.getContext("2d");if(!l)return;l.clearRect(0,0,P.value.width,P.value.height);const s=[...new Set(W.value.flatMap(k=>k.data.map(T=>T.options)))].map(String),f=Math.max(...s.map(k=>k.length))*18;P.value.height=window.innerHeight-140+f;const b=P.value.height-50-f,p=70,v=P.value.width-50;l.beginPath(),l.moveTo(p,b),l.lineTo(v,b),l.moveTo(p,50),l.lineTo(p,b),l.strokeStyle="#ddd",l.stroke(),s.forEach((k,T)=>{const K=p-10,I=b-(T+1)*(b-50)/(s.length+1);l.font="14px Arial",l.textAlign="right",l.textBaseline="middle",l.fillStyle="#333",l.fillText(k,K,I)});const O=A.value[1]-A.value[0];for(let k=0;k<=O;k++){const T=A.value[0]+k,K=ee(T),I=p+k/O*(v-p);l.beginPath(),l.moveTo(I,b),l.lineTo(I,50),l.strokeStyle="#f0f0f0",l.stroke(),l.font="12px Arial",l.textAlign="center",l.textBaseline="top",l.fillStyle="#333",l.fillText(K,I,b+8)}W.value.forEach(k=>{const T=ze[k.useColor];k.data.forEach(K=>{const I=String(K.options),be=s.indexOf(I);if(be===-1)return;const q=new Date(K.timestampCurrentDateTime),ne=q.getHours()+q.getMinutes()/60+q.getSeconds()/3600;if(ne>=A.value[0]&&ne<=A.value[1]){const me=p+(ne-A.value[0])/O*(v-p),ve=b-(be+1)*(b-50)/(s.length+1);if(l.fillStyle=T,l.beginPath(),l.arc(me,ve,5,0,2*Math.PI),l.fill(),N.value){l.font="12px Arial",l.textAlign="left",l.textBaseline="bottom",l.fillStyle="black";const Ye=q.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});l.fillText(Ye,me+10,ve+7)}}})})},fe=l=>{const u={};return l.forEach(s=>{s.ids.forEach(f=>{const b=re.value.find(p=>p.id===f);if(b){const p=b.isCurrentDate,v=b.isCurrentTime,O=b.timestampCurrentDateTime,k=ge();u[p]||(u[p]=[]),u[p].push({time:v,options:s.options,optionsValue:s.optionsValue,useColor:k,timestampCurrentDateTime:O,remark:b.remark})}})}),Object.keys(u).map(s=>({date:s,useColor:ge(),data:u[s]}))},W=w(fe(Y.value)),Re=()=>{let l=re.value;if(V.value==="range"&&$.value.length===2){const s=H($.value[0]).format("YYYY-MM-DD"),f=H($.value[1]).format("YYYY-MM-DD");l=l.filter(b=>{const p=H(b.isCurrentDate).format("YYYY-MM-DD");return p>=s&&p<=f})}else if(V.value==="multiple"&&$.value.length>0){const s=$.value.map(f=>H(f).format("YYYY-MM-DD"));l=l.filter(f=>{const b=H(f.isCurrentDate).format("YYYY-MM-DD");return s.includes(b)})}const u=t(l);o.value.length>0?Y.value=u.filter(s=>o.value.some(f=>f[0]===s.optionsValue[0]&&f[1]===s.optionsValue[1])):Y.value=u,W.value=fe(Y.value),te(),a.value=i(Y.value),y.value=!1};return it(()=>{a.value=i(),r.value=g(),te()}),(l,u)=>(c(),m(z,null,[h("div",hn,[D(L(Ve),{type:"bar",data:a.value,options:r.value,class:"h-screen"},null,8,["data","options"])]),h("div",gn,[D(L(Oe),{visible:y.value,"onUpdate:visible":u[7]||(u[7]=s=>y.value=s),header:"Filter",position:"right",class:"!w-1/4"},{footer:x(()=>[h("div",wn,[D(L(F),{label:"Cancel",onClick:u[5]||(u[5]=s=>y.value=!1)}),D(L(F),{label:"Filter",onClick:u[6]||(u[6]=s=>Re())})])]),default:x(()=>[h("div",null,[D(L(tt),{modelValue:$.value,"onUpdate:modelValue":u[0]||(u[0]=s=>$.value=s),selectionMode:V.value,minDate:V.value==="range"?Q.value:void 0,maxDate:V.value==="range"?J.value:void 0,placeholder:"選擇日期範圍",class:"p-inputtext w-full",showButtonBar:""},null,8,["modelValue","selectionMode","minDate","maxDate"]),D(L($e),{modelValue:V.value,"onUpdate:modelValue":u[1]||(u[1]=s=>V.value=s),options:Ke,class:"my-2 w-full [&>button]:w-full",optionLabel:"label",optionValue:"value"},null,8,["modelValue"]),D(L(xe),{modelValue:A.value,"onUpdate:modelValue":u[2]||(u[2]=s=>A.value=s),range:"",class:"my-2 w-full",min:0,max:24,step:1},null,8,["modelValue"]),h("div",fn,[h("span",null,E(ee(A.value[0])),1),h("span",null,E(ee(A.value[1])),1)])]),h("div",bn,[h("div",mn,[D(L(ke),{inputId:"select-all",modelValue:M.value,"onUpdate:modelValue":u[3]||(u[3]=s=>M.value=s),onChange:Fe,class:"mr-1",binary:!0},null,8,["modelValue"]),u[9]||(u[9]=h("label",{for:"select-all",class:"w-full inline-block font-bold"}," 全選/取消全選 ",-1))]),(c(!0),m(z,null,Z(n.value,s=>(c(),m("div",{key:s.options},[h("ul",null,[h("li",vn,[D(L(ke),{inputId:s.options,value:s.optionsValue,modelValue:o.value,"onUpdate:modelValue":u[4]||(u[4]=f=>o.value=f),class:"mr-1"},null,8,["inputId","value","modelValue"]),h("label",{for:s.options,class:"w-full inline-block"},E(s.options),9,yn)])])]))),128))])]),_:1},8,["visible"]),D(L(F),{class:"!bg-[var(--main-color)]",icon:"pi pi-filter",onClick:u[8]||(u[8]=s=>y.value=!0)}),D(L(F),{onClick:je,label:N.value?"隱藏時間":"顯示時間",class:"p-button-secondary ml-2"},null,8,["label"])]),h("main",null,[D(L(Ie),{header:"Detail Information",toggleable:"",collapsed:B.value,class:"p-2 m-2 [&>div]:mb-1 text-sm"},{default:x(()=>[(c(!0),m(z,null,Z(W.value,s=>(c(),m("div",{key:s.date,class:"mb-4"},[h("div",{class:"font-bold",style:lt({color:s.useColor})},E(s.date),5),h("div",null,[(c(!0),m(z,null,Z(s.data,(f,b)=>(c(),m("div",{key:b},[st(E(f.time)+" - "+E(f.options)+" ",1),f.remark?(c(),m("span",kn,"("+E(f.remark)+")",1)):C("",!0)]))),128))])]))),128))]),_:1},8,["collapsed"]),h("div",Dn,[h("canvas",{ref_key:"canvas",ref:P},null,512)])])],64))}});export{En as default};
