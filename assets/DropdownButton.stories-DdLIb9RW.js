import{j as r}from"./jsx-runtime-DSvmvvsx.js";import{a as Ze}from"./utils-DrFeXHBK.js";import{c as Je,P as To,a as Oo,b as jo,g as No}from"./index-BA9XdM4e.js";import{r as a}from"./index-B0WjJBI_.js";import{a as Qe,c as b,b as Lo}from"./index-BKPsKW-F.js";import{u as B,c as Fo}from"./index-Cg8zIP29.js";import{d as Ko,P as oe}from"./index-Cf-CwZ9y.js";import{c as Bo,u as Vo}from"./index-B5VgmDqq.js";import{c as Go,b as Uo,F as Wo,a as qo,D as zo}from"./index-DFajAlJc.js";import{P as Ho,h as Xo,u as Yo,R as $o}from"./index-sukfHunG.js";import{P as eo}from"./index-CzzBuDdg.js";import{c as oo,R as Zo,a as Jo}from"./index-Bm9-4BKu.js";import{u as Qo}from"./index-V0BpeevJ.js";import{u as fe}from"./index-lUtbbSKC.js";import{B as en}from"./Button-DP2wrfBF.js";import{C as on}from"./chevron-down-CLkoBCE4.js";import{U as no,S as to}from"./user-mYAjcJ3w.js";import{c as nn}from"./createLucideIcon-BeEkWZrd.js";import"./index-B6qhCouN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dif16jpf.js";import"./index-BPj7F_2H.js";import"./useAriaDisabled-BVkOu7OW.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ro=nn("mail",tn);var rn=Object.defineProperty,m=(t,e)=>rn(t,"name",{value:e,configurable:!0}),sn=["Enter"," "],an=["ArrowDown","PageUp","Home"],so=["ArrowUp","PageDown","End"],cn=[...an,...so],z="Menu",[Q,ln,un]=Bo(z),[P,ao]=Qe(z,[un,Je,oo]),ne=Je(),io=oo(),[dn,V]=P(z),[pn,te]=P(z),mn=m(t=>{const{__scopeMenu:e,open:o=!1,children:n,dir:s,onOpenChange:l,modal:i=!0}=t,d=ne(e),[g,u]=a.useState(null),f=a.useRef(!1),h=Qo(l),p=Vo(s);return a.useEffect(()=>{const w=m(()=>{f.current=!0,document.addEventListener("pointerdown",M,{capture:!0,once:!0}),document.addEventListener("pointermove",M,{capture:!0,once:!0})},"handleKeyDown"),M=m(()=>f.current=!1,"handlePointer");return document.addEventListener("keydown",w,{capture:!0}),()=>{document.removeEventListener("keydown",w,{capture:!0}),document.removeEventListener("pointerdown",M,{capture:!0}),document.removeEventListener("pointermove",M,{capture:!0})}},[]),a.useEffect(()=>{if(!o)return;const w=m(()=>h(!1),"handleBlur");return window.addEventListener("blur",w),()=>window.removeEventListener("blur",w)},[o,h]),r.jsx(To,{...d,children:r.jsx(dn,{scope:e,open:o,onOpenChange:h,content:g,onContentChange:u,children:r.jsx(pn,{scope:e,onClose:a.useCallback(()=>h(!1),[h]),isUsingKeyboardRef:f,dir:p,modal:i,children:n})})})},"Menu"),fn=a.forwardRef(m(function(e,o){const{__scopeMenu:n,...s}=e,l=ne(n);return r.jsx(Oo,{...l,...s,ref:o})},"MenuAnchor")),co="MenuPortal",[gn,hn]=P(co,{forceMount:void 0}),wn=m(t=>{const{__scopeMenu:e,forceMount:o,children:n,container:s}=t,l=V(co,e);return r.jsx(gn,{scope:e,forceMount:o,children:r.jsx(eo,{present:o||l.open,children:r.jsx(Ho,{asChild:!0,container:s,children:n})})})},"MenuPortal"),S="MenuContent",[bn,lo]=P(S),Cn=a.forwardRef(m(function(e,o){const n=hn(S,e.__scopeMenu),{forceMount:s=n.forceMount,...l}=e,i=V(S,e.__scopeMenu),d=te(S,e.__scopeMenu);return r.jsx(Q.Provider,{scope:e.__scopeMenu,children:r.jsx(eo,{present:s||i.open,children:r.jsx(Q.Slot,{scope:e.__scopeMenu,children:d.modal?r.jsx(vn,{...l,ref:o}):r.jsx(Mn,{...l,ref:o})})})})},"MenuContent")),vn=a.forwardRef(m(function(e,o){const n=V(S,e.__scopeMenu),s=a.useRef(null),l=B(o,s);return a.useEffect(()=>{const i=s.current;if(i)return Xo(i)},[]),r.jsx(uo,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:b(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})},"MenuRootContentModal")),Mn=a.forwardRef(m(function(e,o){const n=V(S,e.__scopeMenu);return r.jsx(uo,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})},"MenuRootContentNonModal")),kn=Fo("MenuContent.ScrollLock"),uo=a.forwardRef(m(function(e,o){const{__scopeMenu:n,loop:s=!1,trapFocus:l,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:g,onEntryFocus:u,onEscapeKeyDown:f,onPointerDownOutside:h,onFocusOutside:p,onInteractOutside:w,onDismiss:M,disableOutsideScroll:C,...G}=e,ie=V(S,n),H=te(S,n),vo=ne(n),Mo=io(n),ce=ln(n),[ko,le]=a.useState(null),I=a.useRef(null),[xo,Do]=a.useState(null);Go(xo);const{nodes:X,registry:So}=Uo(),yo=!!(l||C),Po=B(o,I,ie.onContentChange,Do),U=a.useRef(0),W=a.useRef(""),Io=a.useRef(0),Y=a.useRef(null),ue=a.useRef("right"),$=a.useRef(0),Ro=a.useMemo(()=>C?[I,...X.map(c=>({current:c}))]:[],[I,X,C]),_o=C?$o:a.Fragment,Eo=C?{as:kn,allowPinchZoom:!0,shards:Ro}:void 0,Ao=m(c=>{var pe,me;const v=W.current+c,k=ce().filter(x=>!x.disabled),D=document.activeElement,Z=(pe=k.find(x=>x.ref.current===D))==null?void 0:pe.textValue,J=k.map(x=>x.textValue),de=ho(J,v,Z),A=(me=k.find(x=>x.textValue===de))==null?void 0:me.ref.current;function y(x){W.current=x,window.clearTimeout(U.current),x!==""&&(U.current=window.setTimeout(()=>y(""),1e3))}m(y,"updateSearch"),y(v),A&&setTimeout(()=>A.focus())},"handleTypeaheadSearch");a.useEffect(()=>()=>window.clearTimeout(U.current),[]),Yo();const R=a.useCallback(c=>{var k,D;return ue.current===((k=Y.current)==null?void 0:k.side)&&bo(c,(D=Y.current)==null?void 0:D.area)},[]);return r.jsx(bn,{scope:n,searchRef:W,onItemEnter:a.useCallback(c=>{R(c)&&c.preventDefault()},[R]),onItemLeave:a.useCallback(c=>{var v;R(c)||((v=I.current)==null||v.focus(),le(null))},[R]),onTriggerLeave:a.useCallback(c=>{R(c)&&c.preventDefault()},[R]),pointerGraceTimerRef:Io,onPointerGraceIntentChange:a.useCallback(c=>{Y.current=c},[]),children:r.jsx(Wo,{registry:yo?So:null,children:r.jsx(_o,{...Eo,children:r.jsx(qo,{asChild:!0,trapped:l,branches:X,onMountAutoFocus:b(i,c=>{var v;c.preventDefault(),(v=I.current)==null||v.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:r.jsx(zo,{asChild:!0,disableOutsidePointerEvents:g,onEscapeKeyDown:f,onPointerDownOutside:h,onFocusOutside:p,onInteractOutside:w,onDismiss:M,children:r.jsx(Jo,{asChild:!0,...Mo,dir:H.dir,orientation:"vertical",loop:s,currentTabStopId:ko,onCurrentTabStopIdChange:le,onEntryFocus:b(u,c=>{H.isUsingKeyboardRef.current||c.preventDefault()}),preventScrollOnEntryFocus:!0,children:r.jsx(jo,{role:"menu","aria-orientation":"vertical","data-state":po(ie.open),"data-radix-menu-content":"",dir:H.dir,...vo,...G,ref:Po,style:{outline:"none",...G.style},onKeyDown:b(G.onKeyDown,c=>{const k=c.target.closest("[data-radix-menu-content]")===c.currentTarget,D=c.ctrlKey||c.altKey||c.metaKey,Z=c.key.length===1;k&&(c.key==="Tab"&&c.preventDefault(),!D&&Z&&Ao(c.key));const J=I.current;if(c.target!==J||!cn.includes(c.key))return;c.preventDefault();const A=ce().filter(y=>!y.disabled).map(y=>y.ref.current);so.includes(c.key)&&A.reverse(),fo(A)}),onBlur:b(e.onBlur,c=>{c.currentTarget.contains(c.target)||(window.clearTimeout(U.current),W.current="")}),onPointerMove:b(e.onPointerMove,q(c=>{const v=c.target,k=$.current!==c.clientX;if(c.currentTarget.contains(v)&&k){const D=c.clientX>$.current?"right":"left";ue.current=D,$.current=c.clientX}}))})})})})})})})},"MenuContentImpl")),ee="MenuItem",ge="menu.itemSelect",xn=a.forwardRef(m(function(e,o){const{disabled:n=!1,onSelect:s,...l}=e,i=a.useRef(null),d=te(ee,e.__scopeMenu),g=lo(ee,e.__scopeMenu),u=B(o,i),f=a.useRef(!1),h=m(()=>{const p=i.current;if(!n&&p){const w=new CustomEvent(ge,{bubbles:!0,cancelable:!0});p.addEventListener(ge,M=>s==null?void 0:s(M),{once:!0}),Ko(p,w),w.defaultPrevented?f.current=!1:d.onClose()}},"handleSelect");return r.jsx(Dn,{...l,ref:u,disabled:n,onClick:b(e.onClick,h),onPointerDown:p=>{var w;(w=e.onPointerDown)==null||w.call(e,p),f.current=!0},onPointerUp:b(e.onPointerUp,p=>{var w;f.current||(w=p.currentTarget)==null||w.click()}),onKeyDown:b(e.onKeyDown,p=>{n||p.target!==p.currentTarget||g.searchRef.current!==""&&p.key===" "||sn.includes(p.key)&&(p.currentTarget.click(),p.preventDefault())})})},"MenuItem")),Dn=a.forwardRef(m(function(e,o){const{__scopeMenu:n,disabled:s=!1,textValue:l,...i}=e,d=lo(ee,n),g=io(n),u=a.useRef(null),f=B(o,u),[h,p]=a.useState(!1),[w,M]=a.useState("");return a.useEffect(()=>{const C=u.current;C&&M((C.textContent??"").trim())},[i.children]),r.jsx(Q.ItemSlot,{scope:n,disabled:s,textValue:l??w,children:r.jsx(Zo,{asChild:!0,...g,focusable:!s,children:r.jsx(oe.div,{role:"menuitem","data-highlighted":h?"":void 0,"aria-disabled":s||void 0,"data-disabled":s?"":void 0,...i,ref:f,onPointerMove:b(e.onPointerMove,q(C=>{s?d.onItemLeave(C):(d.onItemEnter(C),C.defaultPrevented||C.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:b(e.onPointerLeave,q(C=>d.onItemLeave(C))),onFocus:b(e.onFocus,()=>p(!0)),onBlur:b(e.onBlur,()=>p(!1))})})})},"MenuItemImpl")),Sn="MenuRadioGroup",[mt,ft]=P(Sn,{value:void 0,onValueChange:m(()=>{},"onValueChange")}),yn="MenuItemIndicator",[gt,ht]=P(yn,{checked:!1}),Pn=a.forwardRef(m(function(e,o){const{__scopeMenu:n,...s}=e;return r.jsx(oe.div,{role:"separator","aria-orientation":"horizontal",...s,ref:o})},"MenuSeparator")),In="MenuSub",[wt,bt]=P(In);function po(t){return t?"open":"closed"}m(po,"getOpenState");function mo(t){return t==="indeterminate"}m(mo,"isIndeterminate");function Rn(t){return mo(t)?"indeterminate":t?"checked":"unchecked"}m(Rn,"getCheckedState");function fo(t){const e=document.activeElement;for(const o of t)if(o===e||(o.focus(),document.activeElement!==e))return}m(fo,"focusFirst");function go(t,e){return t.map((o,n)=>t[(e+n)%t.length])}m(go,"wrapArray");function ho(t,e,o){const s=e.length>1&&Array.from(e).every(u=>u===e[0])?e[0]:e,l=o?t.indexOf(o):-1;let i=go(t,Math.max(l,0));s.length===1&&(i=i.filter(u=>u!==o));const g=i.find(u=>u.toLowerCase().startsWith(s.toLowerCase()));return g!==o?g:void 0}m(ho,"getNextMatch");function wo(t,e){const{x:o,y:n}=t;let s=!1;for(let l=0,i=e.length-1;l<e.length;i=l++){const d=e[l],g=e[i],u=d.x,f=d.y,h=g.x,p=g.y;f>n!=p>n&&o<(h-u)*(n-f)/(p-f)+u&&(s=!s)}return s}m(wo,"isPointInPolygon");function bo(t,e){if(!e)return!1;const o={x:t.clientX,y:t.clientY};return wo(o,e)}m(bo,"isPointerInGraceArea");function q(t){return e=>e.pointerType==="mouse"?t(e):void 0}m(q,"whenMouse");var _n=Object.defineProperty,_=(t,e)=>_n(t,"name",{value:e,configurable:!0}),re="DropdownMenu",[En,Ct]=Qe(re,[ao]),E=ao(),[An,Co]=En(re),Tn=_(t=>{const{__scopeDropdownMenu:e,children:o,dir:n,open:s,defaultOpen:l,onOpenChange:i,modal:d=!0}=t,g=E(e),u=a.useRef(null),[f,h]=Lo({prop:s,defaultProp:l??!1,onChange:i,caller:re});return r.jsx(An,{scope:e,triggerId:fe(),triggerRef:u,contentId:fe(),open:f,onOpenChange:h,onOpenToggle:a.useCallback(()=>h(p=>!p),[h]),modal:d,children:r.jsx(mn,{...g,open:f,onOpenChange:h,dir:n,modal:d,children:o})})},"DropdownMenu"),On="DropdownMenuTrigger",jn=a.forwardRef(_(function(e,o){const{__scopeDropdownMenu:n,disabled:s=!1,...l}=e,i=Co(On,n),d=E(n),g=B(o,i.triggerRef);return r.jsx(fn,{asChild:!0,...d,children:r.jsx(oe.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":s?"":void 0,disabled:s,...l,ref:g,onPointerDown:b(e.onPointerDown,u=>{!s&&u.button===0&&u.ctrlKey===!1&&(i.onOpenToggle(),i.open||u.preventDefault())}),onKeyDown:b(e.onKeyDown,u=>{s||(["Enter"," "].includes(u.key)&&i.onOpenToggle(),u.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})},"DropdownMenuTrigger")),Nn=_(t=>{const{__scopeDropdownMenu:e,...o}=t,n=E(e);return r.jsx(wn,{...n,...o})},"DropdownMenuPortal"),Ln="DropdownMenuContent",Fn=a.forwardRef(_(function(e,o){const{__scopeDropdownMenu:n,...s}=e,l=Co(Ln,n),i=E(n),d=a.useRef(!1);return r.jsx(Cn,{id:l.contentId,"aria-labelledby":l.triggerId,...i,...s,ref:o,onCloseAutoFocus:b(e.onCloseAutoFocus,g=>{var u;d.current||(u=l.triggerRef.current)==null||u.focus(),d.current=!1,g.preventDefault()}),onInteractOutside:b(e.onInteractOutside,g=>{const u=g.detail.originalEvent,f=u.button===0&&u.ctrlKey===!0,h=u.button===2||f;(!l.modal||h)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent")),Kn=a.forwardRef(_(function(e,o){const{__scopeDropdownMenu:n,...s}=e,l=E(n);return r.jsx(xn,{...l,...s,ref:o})},"DropdownMenuItem")),Bn=a.forwardRef(_(function(e,o){const{__scopeDropdownMenu:n,...s}=e,l=E(n);return r.jsx(Pn,{...l,...s,ref:o})},"DropdownMenuSeparator"));const se=a.memo(({item:t})=>{const{isDisabled:e,onClick:o,icon:n,label:s}=t,l=a.useCallback(i=>{e?(i.preventDefault(),i.stopPropagation()):o==null||o()},[e,o]);return r.jsxs(Kn,{"aria-disabled":e,className:Ze(`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm
        outline-none transition-colors focus:bg-accent focus:text-accent-foreground`,o&&!e&&"cursor-pointer",e&&"cursor-not-allowed opacity-50"),onClick:l,children:[n?r.jsx("span",{className:"mr-2",children:n}):null,s]})});se.displayName="DropdownMenuItem";se.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem",props:{item:{required:!0,tsType:{name:"DropdownItem"},description:""}}};const ae=a.forwardRef(({className:t,children:e,items:o,align:n="start",variant:s="default",isDisabled:l=!1,zIndex:i,...d},g)=>{const u=No("dropdown",i);return r.jsxs(Tn,{children:[r.jsx(jn,{asChild:!0,children:r.jsxs(en,{ref:g,className:Ze("vero-dropdown-button","flex items-center gap-1",t),isDisabled:l,variant:s,...d,children:[e,r.jsx(on,{className:"h-4 w-4"})]})}),r.jsx(Nn,{children:r.jsx(Fn,{align:n,className:`min-w-[8rem] overflow-hidden rounded-md border bg-popover px-1 py-1
              text-popover-foreground shadow-md data-[state=open]:animate-in
              data-[state=closed]:animate-out data-[state=closed]:fade-out-0
              data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
              data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2
              data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
              data-[side=top]:slide-in-from-bottom-2`,sideOffset:4,style:{zIndex:u},children:o.map((f,h)=>f==="separator"?r.jsx(Bn,{className:"my-1 h-px bg-muted"},`separator-${h}`):r.jsx(se,{item:f},f.label))})})]})});ae.displayName="DropdownButton";ae.__docgenInfo={description:"",methods:[],displayName:"DropdownButton",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"DropdownItem | 'separator'",elements:[{name:"DropdownItem"},{name:"literal",value:"'separator'"}]}],raw:"DropdownItemType[]"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:""},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};const vt={title:"Actions & Navigation/DropdownButton",component:ae,parameters:{},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","danger","link","input","ghost"],description:"The visual style variant of the dropdown button"},size:{options:["default","sm","lg"],control:"radio",description:"The size of the dropdown button"},items:{control:"object",description:"The items to be displayed in the dropdown button"},className:{type:"string",description:"Additional class names to apply to the dropdown button"}}},T={args:{children:"Actions",items:[{label:"Profile",onClick:()=>console.log("Profile clicked")},{label:"Settings",onClick:()=>console.log("Settings clicked")},{label:"Logout",onClick:()=>console.log("Logout clicked")}]}},O={args:{children:"Disabled Dropdown Button",isDisabled:!0,items:[{label:"Profile",onClick:()=>console.log("Profile clicked")},{label:"Settings",onClick:()=>console.log("Settings clicked")},{label:"Logout",onClick:()=>console.log("Logout clicked")}]}},j={args:{children:"Menu",items:[{label:"Profile",icon:r.jsx(no,{className:"h-4 w-4"}),onClick:()=>console.log("Profile clicked")},{label:"Settings",icon:r.jsx(to,{className:"h-4 w-4"}),onClick:()=>console.log("Settings clicked")},{label:"Messages",icon:r.jsx(ro,{className:"h-4 w-4"}),onClick:()=>console.log("Messages clicked")}]}},N={args:{children:"Options",items:[{label:"View profile",onClick:()=>console.log("View profile clicked")},{label:"Settings",onClick:()=>console.log("Settings clicked")},"separator",{label:"Help",onClick:()=>console.log("Help clicked")},{label:"Feedback",onClick:()=>console.log("Feedback clicked")},"separator",{label:"Logout",onClick:()=>console.log("Logout clicked")}]}},L={args:{children:"Options",items:[{label:"Active Option",icon:r.jsx(no,{className:"h-4 w-4"}),onClick:()=>console.log("Active clicked")},{label:"Disabled Option (no onClick)",icon:r.jsx(to,{className:"h-4 w-4"}),isDisabled:!0},{label:"Disabled Option (with onClick - won't fire)",icon:r.jsx(ro,{className:"h-4 w-4"}),isDisabled:!0,onClick:()=>console.log("This will never fire")},"separator",{label:"Another Active",onClick:()=>console.log("Another clicked")},{label:"Disabled Text Only",isDisabled:!0}]}},F={args:{children:"Settings",variant:"link",items:[{label:"Account",onClick:()=>console.log("Account clicked")},{label:"Security",onClick:()=>console.log("Security clicked")},"separator",{label:"Notifications",onClick:()=>console.log("Notifications clicked")}]}},K={args:{children:"Aligned Menu",align:"end",items:[{label:"Right-aligned item 1",onClick:()=>console.log("Item 1 clicked")},{label:"Right-aligned item 2",onClick:()=>console.log("Item 2 clicked")}]}};var he,we,be,Ce,ve;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    children: 'Actions',
    items: [{
      label: 'Profile',
      onClick: () => console.log('Profile clicked')
    }, {
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    }, {
      label: 'Logout',
      onClick: () => console.log('Logout clicked')
    }]
  }
}`,...(be=(we=T.parameters)==null?void 0:we.docs)==null?void 0:be.source},description:{story:`The default state of the DropdownButton component.
Shows a basic dropdown menu with simple text items.`,...(ve=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:ve.description}}};var Me,ke,xe,De,Se;O.parameters={...O.parameters,docs:{...(Me=O.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Dropdown Button',
    isDisabled: true,
    items: [{
      label: 'Profile',
      onClick: () => console.log('Profile clicked')
    }, {
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    }, {
      label: 'Logout',
      onClick: () => console.log('Logout clicked')
    }]
  }
}`,...(xe=(ke=O.parameters)==null?void 0:ke.docs)==null?void 0:xe.source},description:{story:`A disabled dropdown button.
Demonstrates how the component appears when it's not interactive.`,...(Se=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Se.description}}};var ye,Pe,Ie,Re,_e;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    children: 'Menu',
    items: [{
      label: 'Profile',
      icon: <User className="h-4 w-4" />,
      onClick: () => console.log('Profile clicked')
    }, {
      label: 'Settings',
      icon: <Settings className="h-4 w-4" />,
      onClick: () => console.log('Settings clicked')
    }, {
      label: 'Messages',
      icon: <Mail className="h-4 w-4" />,
      onClick: () => console.log('Messages clicked')
    }]
  }
}`,...(Ie=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source},description:{story:`A dropdown menu with icons next to each item.
Shows how to enhance menu items with visual indicators.`,...(_e=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:_e.description}}};var Ee,Ae,Te,Oe,je;N.parameters={...N.parameters,docs:{...(Ee=N.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    children: 'Options',
    items: [{
      label: 'View profile',
      onClick: () => console.log('View profile clicked')
    }, {
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    }, 'separator', {
      label: 'Help',
      onClick: () => console.log('Help clicked')
    }, {
      label: 'Feedback',
      onClick: () => console.log('Feedback clicked')
    }, 'separator', {
      label: 'Logout',
      onClick: () => console.log('Logout clicked')
    }]
  }
}`,...(Te=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source},description:{story:`A dropdown menu with separators between groups of items.
Demonstrates how to organize menu items into logical sections.`,...(je=(Oe=N.parameters)==null?void 0:Oe.docs)==null?void 0:je.description}}};var Ne,Le,Fe,Ke,Be;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    children: 'Options',
    items: [{
      label: 'Active Option',
      icon: <User className="h-4 w-4" />,
      onClick: () => console.log('Active clicked')
    }, {
      label: 'Disabled Option (no onClick)',
      icon: <Settings className="h-4 w-4" />,
      isDisabled: true
    }, {
      label: "Disabled Option (with onClick - won't fire)",
      icon: <Mail className="h-4 w-4" />,
      isDisabled: true,
      onClick: () => console.log('This will never fire')
    }, 'separator', {
      label: 'Another Active',
      onClick: () => console.log('Another clicked')
    }, {
      label: 'Disabled Text Only',
      isDisabled: true
    }]
  }
}`,...(Fe=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source},description:{story:`A dropdown menu with some disabled items.
Shows how to indicate that certain options are not currently available.

Disabled items:
- Remain focusable for keyboard navigation (ARIA compliant)
- Are announced as disabled by screen readers via \`aria-disabled\`
- Prevent all interactions (mouse, touch, keyboard activation)
- Display with reduced opacity and a not-allowed cursor
- Even if they have an \`onClick\` handler, it will not fire when disabled`,...(Be=(Ke=L.parameters)==null?void 0:Ke.docs)==null?void 0:Be.description}}};var Ve,Ge,Ue,We,qe;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    children: 'Settings',
    variant: 'link',
    items: [{
      label: 'Account',
      onClick: () => console.log('Account clicked')
    }, {
      label: 'Security',
      onClick: () => console.log('Security clicked')
    }, 'separator', {
      label: 'Notifications',
      onClick: () => console.log('Notifications clicked')
    }]
  }
}`,...(Ue=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source},description:{story:`A dropdown button with a different visual style.
Demonstrates how to change the button's appearance using variants.`,...(qe=(We=F.parameters)==null?void 0:We.docs)==null?void 0:qe.description}}};var ze,He,Xe,Ye,$e;K.parameters={...K.parameters,docs:{...(ze=K.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    children: 'Aligned Menu',
    align: 'end',
    items: [{
      label: 'Right-aligned item 1',
      onClick: () => console.log('Item 1 clicked')
    }, {
      label: 'Right-aligned item 2',
      onClick: () => console.log('Item 2 clicked')
    }]
  }
}`,...(Xe=(He=K.parameters)==null?void 0:He.docs)==null?void 0:Xe.source},description:{story:`A dropdown menu with custom alignment.
Shows how to control the positioning of the dropdown menu.`,...($e=(Ye=K.parameters)==null?void 0:Ye.docs)==null?void 0:$e.description}}};const Mt=["Default","Disabled","WithIcons","WithSeparators","WithDisabledItems","WithVariant","WithAlignment"];export{T as Default,O as Disabled,K as WithAlignment,L as WithDisabledItems,j as WithIcons,N as WithSeparators,F as WithVariant,Mt as __namedExportsOrder,vt as default};
