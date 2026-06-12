import{B as G,ap as W,c as h,o as p,a as d,m as C,r as H,a0 as J,a4 as M,a5 as Q,W as S,aq as X,ar as E,a1 as V,y as r,a8 as c,d as Y,aj as Z,L as f,A as ee,t as B,al as te,as as L,at as N,x as ne,F as I,u as P,au as ae,ao as oe,av as le,aw as ie}from"./index-ChOcjsJQ.js";import{a as se}from"./index-BtO9pEtN.js";import{d as ce}from"./vuedraggable.umd-CA4UEiCT.js";var re=function(o){var e=o.dt;return`
.p-toggleswitch {
    display: inline-block;
    width: `.concat(e("toggleswitch.width"),`;
    height: `).concat(e("toggleswitch.height"),`;
}

.p-toggleswitch-input {
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
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
}

.p-toggleswitch-slider {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: `).concat(e("toggleswitch.border.width"),`;
    border-style: solid;
    border-color: `).concat(e("toggleswitch.border.color"),`;
    background: `).concat(e("toggleswitch.background"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", border-color ").concat(e("toggleswitch.transition.duration"),", outline-color ").concat(e("toggleswitch.transition.duration"),", box-shadow ").concat(e("toggleswitch.transition.duration"),`;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("toggleswitch.shadow"),`;
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: `).concat(e("toggleswitch.handle.background"),`;
    color: `).concat(e("toggleswitch.handle.color"),`;
    width: `).concat(e("toggleswitch.handle.size"),`;
    height: `).concat(e("toggleswitch.handle.size"),`;
    inset-inline-start: `).concat(e("toggleswitch.gap"),`;
    margin-block-start: calc(-1 * calc(`).concat(e("toggleswitch.handle.size"),` / 2));
    border-radius: `).concat(e("toggleswitch.handle.border.radius"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", inset-inline-start ").concat(e("toggleswitch.slide.duration"),", box-shadow ").concat(e("toggleswitch.slide.duration"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.background"),`;
    border-color: `).concat(e("toggleswitch.checked.border.color"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.checked.background"),`;
    color: `).concat(e("toggleswitch.handle.checked.color"),`;
    inset-inline-start: calc(`).concat(e("toggleswitch.width")," - calc(").concat(e("toggleswitch.handle.size")," + ").concat(e("toggleswitch.gap"),`));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.hover.background"),`;
    border-color: `).concat(e("toggleswitch.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.hover.background"),`;
    color: `).concat(e("toggleswitch.handle.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.hover.background"),`;
    border-color: `).concat(e("toggleswitch.checked.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.checked.hover.background"),`;
    color: `).concat(e("toggleswitch.handle.checked.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: `).concat(e("toggleswitch.focus.ring.shadow"),`;
    outline: `).concat(e("toggleswitch.focus.ring.width")," ").concat(e("toggleswitch.focus.ring.style")," ").concat(e("toggleswitch.focus.ring.color"),`;
    outline-offset: `).concat(e("toggleswitch.focus.ring.offset"),`;
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: `).concat(e("toggleswitch.invalid.border.color"),`;
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.disabled.background"),`;
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.disabled.background"),`;
}
`)},de={root:{position:"relative"}},ue={root:function(o){var e=o.instance,w=o.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":w.disabled,"p-invalid":e.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},ge=G.extend({name:"toggleswitch",theme:re,classes:ue,inlineStyles:de}),he={name:"BaseToggleSwitch",extends:W,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ge,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},z={name:"ToggleSwitch",extends:he,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(o){var e=o==="root"?this.ptmi:this.ptm;return e(o,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(o){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.writeValue(e,o),this.$emit("change",o)}},onFocus:function(o){this.$emit("focus",o)},onBlur:function(o){var e,w;this.$emit("blur",o),(e=(w=this.formField).onBlur)===null||e===void 0||e.call(w,o)}},computed:{checked:function(){return this.d_value===this.trueValue}}},pe=["data-p-checked","data-p-disabled"],we=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function ve(a,o,e,w,b,l){return p(),h("div",C({class:a.cx("root"),style:a.sx("root")},l.getPTOptions("root"),{"data-p-checked":l.checked,"data-p-disabled":a.disabled}),[d("input",C({id:a.inputId,type:"checkbox",role:"switch",class:[a.cx("input"),a.inputClass],style:a.inputStyle,checked:l.checked,tabindex:a.tabindex,disabled:a.disabled,readonly:a.readonly,"aria-checked":l.checked,"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel,"aria-invalid":a.invalid||void 0,onFocus:o[0]||(o[0]=function(){return l.onFocus&&l.onFocus.apply(l,arguments)}),onBlur:o[1]||(o[1]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)}),onChange:o[2]||(o[2]=function(){return l.onChange&&l.onChange.apply(l,arguments)})},l.getPTOptions("input")),null,16,we),d("div",C({class:a.cx("slider")},l.getPTOptions("slider")),[d("div",C({class:a.cx("handle")},l.getPTOptions("handle")),[H(a.$slots,"handle",{checked:l.checked})],16)],16)],16,pe)}z.render=ve;const be={class:"p-2 min-h-[56px] flex items-center gap-1 border-b border-[var(--line-color)]"},fe={key:0,class:"!text-lg font-extrabold"},ke={class:"opacity-50 text-sm uppercase"},ye={class:"p-2 pb-[calc(80px+var(--footer-gap))] text-sm"},me={key:0,class:"p-4 text-center"},xe={key:1,class:"p-2"},Ce={key:2,class:"p-2"},Ve={key:3},Se={class:"flex gap-1 py-2"},Be={class:"flex items-center gap-1 px-1 min-h-[48px] border-b border-[var(--line-color)] last:border-b-0"},Oe=J({__name:"optionItems",setup(a){const o=X(),e=Z(),w=M(),{ingredients:b,sortedIngredients:l,isCloudData:U,isReady:j}=Q(),u=S(()=>o.params.category),T=S(()=>E.includes(u.value)),K=S(()=>l.value[u.value]||[]),g=V(!1),k=V(""),m=V(null),y=V("");function $(i){w.add({severity:"error",summary:"Error",detail:`發生不可預期的錯誤，請先截圖。${i}`,life:5e3})}async function x(i){g.value=!0;try{return await oe(u.value,i),!0}catch(n){return $(n),!1}finally{g.value=!1}}async function F(){const i=k.value.trim();if(!i)return;const n=b.value[u.value];if(n.some(q=>q.label===i)){w.add({severity:"warn",summary:"重複",detail:`「${i}」已存在`,life:3e3});return}const{sort:t,idx:s}=le(b.value),v={label:i,value:ie(n),active:!0,sort:t,idx:s};await x([...n,v])&&(k.value="")}function R(i){m.value=i.value,y.value=i.label}async function O(i){const n=y.value.trim();if(!n)return;const t=b.value[u.value].map(v=>v.value===i.value?{...v,label:n}:v);await x(t)&&(m.value=null)}async function A(i,n){const t=b.value[u.value].map(s=>s.value===i.value?{...s,active:n}:s);await x(t)}async function D(i){const n=b.value[u.value].map(t=>t.value===i.value?{...t,favorite:!t.favorite}:t);await x(n)}async function _(i){const n=[];E.forEach(t=>{(t===u.value?i:l.value[t]).forEach(v=>n.push(v.idx))}),g.value=!0;try{await ae(n)}catch(t){$(t)}finally{g.value=!1}}return(i,n)=>(p(),h(I,null,[r(c(se),{position:"center"}),d("header",be,[r(c(f),{icon:"pi pi-arrow-left",variant:"text",severity:"secondary",class:"w-[40px] h-[40px] shrink-0",onClick:n[0]||(n[0]=t=>c(e).push("/options"))}),T.value?(p(),h("h1",fe,[ee(B(c(te)[u.value])+" ",1),d("span",ke,B(u.value),1)])):Y("",!0)]),d("main",ye,[c(j)?T.value?c(U)?(p(),h("div",Ve,[n[6]||(n[6]=d("p",{class:"opacity-60 text-xs my-2"}," 按住 ☰ 拖曳排序；選項只能停用不能刪除，停用後不再出現於新增表單，歷史紀錄仍正常顯示。 ",-1)),d("div",Se,[r(c(N),{modelValue:k.value,"onUpdate:modelValue":n[1]||(n[1]=t=>k.value=t),class:"w-full",placeholder:"新增選項名稱",onKeyup:L(F,["enter"])},null,8,["modelValue"]),r(c(f),{icon:"pi pi-plus",class:"w-[46px] shrink-0",disabled:g.value||!k.value.trim(),onClick:F},null,8,["disabled"])]),r(c(ce),{"model-value":K.value,"item-key":"value",tag:"ul",handle:".drag-handle",disabled:g.value,class:"border border-[var(--line-color)] rounded-lg shadow-sm overflow-hidden","onUpdate:modelValue":n[4]||(n[4]=t=>_(t))},{item:ne(({element:t})=>[d("li",Be,[n[5]||(n[5]=d("i",{class:"pi pi-bars drag-handle opacity-40 p-2 shrink-0 touch-none"},null,-1)),m.value===t.value?(p(),h(I,{key:0},[r(c(N),{modelValue:y.value,"onUpdate:modelValue":n[2]||(n[2]=s=>y.value=s),class:"w-full",onKeyup:L(s=>O(t),["enter"])},null,8,["modelValue","onKeyup"]),r(c(f),{icon:"pi pi-check",class:"w-[40px] h-[40px] shrink-0",disabled:g.value||!y.value.trim(),onClick:s=>O(t)},null,8,["disabled","onClick"]),r(c(f),{icon:"pi pi-times",severity:"secondary",variant:"outlined",class:"w-[40px] h-[40px] shrink-0",onClick:n[3]||(n[3]=s=>m.value=null)})],64)):(p(),h(I,{key:1},[d("span",{class:P(["w-full",{"opacity-40 line-through":!t.active}])},B(t.label),3),r(c(f),{icon:t.favorite?"pi pi-star-fill":"pi pi-star",variant:"text",class:P(["w-[40px] h-[40px] shrink-0",t.favorite?"[&_.p-button-icon]:text-yellow-500":""]),disabled:g.value,onClick:s=>D(t)},null,8,["icon","class","disabled","onClick"]),r(c(f),{icon:"pi pi-pencil",variant:"text",class:"w-[40px] h-[40px] shrink-0",disabled:g.value,onClick:s=>R(t)},null,8,["disabled","onClick"]),r(c(z),{modelValue:t.active,disabled:g.value,class:"shrink-0","onUpdate:modelValue":s=>A(t,s)},null,8,["modelValue","disabled","onUpdate:modelValue"])],64))])]),_:1},8,["model-value","disabled"])])):(p(),h("div",Ce," 選項尚未匯入雲端，請先回「選項管理」執行匯入。 ")):(p(),h("div",xe," 找不到這個分類，請回「選項管理」重新選擇。 ")):(p(),h("div",me,"載入中..."))])],64))}});export{Oe as default};
