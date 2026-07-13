import{j as o}from"./jsx-runtime-DSvmvvsx.js";import{u as Ke}from"./useAriaDisabled-BVkOu7OW.js";import{s as me}from"./styles-CafxXXJc.js";import{a as G}from"./utils-CU3My8Oi.js";import{r,R as A}from"./index-B0WjJBI_.js";import{c as H,b as y,a as fe,u as Z}from"./index-B5oA2Zbg.js";import{c as Be,u as U}from"./index-EiwPuDyL.js";import{u as pe}from"./index-Cdcq5Wwr.js";import"./index-KklXjS-Z.js";import{u as qe}from"./index-OiR64VEf.js";import{u as be}from"./index-Chx8Kgs6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";function B(e){const t=He(e),n=r.forwardRef((a,s)=>{const{children:i,...c}=a,d=r.Children.toArray(i),p=d.find(Ye);if(p){const l=p.props.children,u=d.map(m=>m===p?r.Children.count(l)>1?r.Children.only(null):r.isValidElement(l)?l.props.children:null:m);return o.jsx(t,{...c,ref:s,children:r.isValidElement(l)?r.cloneElement(l,void 0,u):null})}return o.jsx(t,{...c,ref:s,children:i})});return n.displayName=`${e}.Slot`,n}function He(e){const t=r.forwardRef((n,a)=>{const{children:s,...i}=n;if(r.isValidElement(s)){const c=Je(s),d=Ze(i,s.props);return s.type!==r.Fragment&&(d.ref=a?Be(a,c):c),r.cloneElement(s,d)}return r.Children.count(s)>1?r.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ze=Symbol("radix.slottable");function Ye(e){return r.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ze}function Ze(e,t){const n={...t};for(const a in t){const s=e[a],i=t[a];/^on[A-Z]/.test(a)?s&&i?n[a]=(...d)=>{const p=i(...d);return s(...d),p}:s&&(n[a]=s):a==="style"?n[a]={...s,...i}:a==="className"&&(n[a]=[s,i].filter(Boolean).join(" "))}return{...e,...n}}function Je(e){var a,s;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Qe(e){const t=e+"CollectionProvider",[n,a]=H(t),[s,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=x=>{const{scope:f,children:h}=x,C=A.useRef(null),b=A.useRef(new Map).current;return o.jsx(s,{scope:f,itemMap:b,collectionRef:C,children:h})};c.displayName=t;const d=e+"CollectionSlot",p=B(d),l=A.forwardRef((x,f)=>{const{scope:h,children:C}=x,b=i(d,h),v=U(f,b.collectionRef);return o.jsx(p,{ref:v,children:C})});l.displayName=d;const u=e+"CollectionItemSlot",m="data-radix-collection-item",g=B(u),T=A.forwardRef((x,f)=>{const{scope:h,children:C,...b}=x,v=A.useRef(null),E=U(f,v),j=i(u,h);return A.useEffect(()=>(j.itemMap.set(v,{ref:v,...b}),()=>void j.itemMap.delete(v))),o.jsx(g,{[m]:"",ref:E,children:C})});T.displayName=u;function R(x){const f=i(e+"CollectionConsumer",x);return A.useCallback(()=>{const C=f.collectionRef.current;if(!C)return[];const b=Array.from(C.querySelectorAll(`[${m}]`));return Array.from(f.itemMap.values()).sort((j,L)=>b.indexOf(j.ref.current)-b.indexOf(L.ref.current))},[f.collectionRef,f.itemMap])}return[{Provider:c,Slot:l,ItemSlot:T},R,a]}var Xe=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],_=Xe.reduce((e,t)=>{const n=B(`Primitive.${t}`),a=r.forwardRef((s,i)=>{const{asChild:c,...d}=s,p=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(p,{...d,ref:i})});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{}),K="rovingFocusGroup.onEntryFocus",et={bubbles:!1,cancelable:!0},O="RovingFocusGroup",[q,ge,tt]=Qe(O),[at,ve]=H(O,[tt]),[nt,ot]=at(O),Te=r.forwardRef((e,t)=>o.jsx(q.Provider,{scope:e.__scopeRovingFocusGroup,children:o.jsx(q.Slot,{scope:e.__scopeRovingFocusGroup,children:o.jsx(st,{...e,ref:t})})}));Te.displayName=O;var st=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:a,loop:s=!1,dir:i,currentTabStopId:c,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:p,onEntryFocus:l,preventScrollOnEntryFocus:u=!1,...m}=e,g=r.useRef(null),T=U(t,g),R=be(i),[x,f]=fe({prop:c,defaultProp:d??null,onChange:p,caller:O}),[h,C]=r.useState(!1),b=qe(l),v=ge(n),E=r.useRef(!1),[j,L]=r.useState(0);return r.useEffect(()=>{const N=g.current;if(N)return N.addEventListener(K,b),()=>N.removeEventListener(K,b)},[b]),o.jsx(nt,{scope:n,orientation:a,dir:R,loop:s,currentTabStopId:x,onItemFocus:r.useCallback(N=>f(N),[f]),onItemShiftTab:r.useCallback(()=>C(!0),[]),onFocusableItemAdd:r.useCallback(()=>L(N=>N+1),[]),onFocusableItemRemove:r.useCallback(()=>L(N=>N-1),[]),children:o.jsx(_.div,{tabIndex:h||j===0?-1:0,"data-orientation":a,...m,ref:T,style:{outline:"none",...e.style},onMouseDown:y(e.onMouseDown,()=>{E.current=!0}),onFocus:y(e.onFocus,N=>{const Ue=!E.current;if(N.target===N.currentTarget&&Ue&&!h){const Y=new CustomEvent(K,et);if(N.currentTarget.dispatchEvent(Y),!Y.defaultPrevented){const $=v().filter(S=>S.focusable),Ge=$.find(S=>S.active),ke=$.find(S=>S.id===x),$e=[Ge,ke,...$].filter(Boolean).map(S=>S.ref.current);Ne($e,u)}}E.current=!1}),onBlur:y(e.onBlur,()=>C(!1))})})}),he="RovingFocusGroupItem",xe=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:a=!0,active:s=!1,tabStopId:i,children:c,...d}=e,p=pe(),l=i||p,u=ot(he,n),m=u.currentTabStopId===l,g=ge(n),{onFocusableItemAdd:T,onFocusableItemRemove:R,currentTabStopId:x}=u;return r.useEffect(()=>{if(a)return T(),()=>R()},[a,T,R]),o.jsx(q.ItemSlot,{scope:n,id:l,focusable:a,active:s,children:o.jsx(_.span,{tabIndex:m?0:-1,"data-orientation":u.orientation,...d,ref:t,onMouseDown:y(e.onMouseDown,f=>{a?u.onItemFocus(l):f.preventDefault()}),onFocus:y(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:y(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){u.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const h=ct(f,u.orientation,u.dir);if(h!==void 0){if(f.metaKey||f.ctrlKey||f.altKey||f.shiftKey)return;f.preventDefault();let b=g().filter(v=>v.focusable).map(v=>v.ref.current);if(h==="last")b.reverse();else if(h==="prev"||h==="next"){h==="prev"&&b.reverse();const v=b.indexOf(f.currentTarget);b=u.loop?lt(b,v+1):b.slice(v+1)}setTimeout(()=>Ne(b))}}),children:typeof c=="function"?c({isCurrentTabStop:m,hasTabStop:x!=null}):c})})});xe.displayName=he;var rt={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function it(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function ct(e,t,n){const a=it(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return rt[a]}function Ne(e,t=!1){const n=document.activeElement;for(const a of e)if(a===n||(a.focus({preventScroll:t}),document.activeElement!==n))return}function lt(e,t){return e.map((n,a)=>e[(t+a)%e.length])}var ut=Te,dt=xe;function mt(e,t){return r.useReducer((n,a)=>t[n][a]??n,e)}var Ce=e=>{const{present:t,children:n}=e,a=ft(t),s=typeof n=="function"?n({present:a.isPresent}):r.Children.only(n),i=U(a.ref,pt(s));return typeof n=="function"||a.isPresent?r.cloneElement(s,{ref:i}):null};Ce.displayName="Presence";function ft(e){const[t,n]=r.useState(),a=r.useRef(null),s=r.useRef(e),i=r.useRef("none"),c=e?"mounted":"unmounted",[d,p]=mt(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const l=W(a.current);i.current=d==="mounted"?l:"none"},[d]),Z(()=>{const l=a.current,u=s.current;if(u!==e){const g=i.current,T=W(l);e?p("MOUNT"):T==="none"||(l==null?void 0:l.display)==="none"?p("UNMOUNT"):p(u&&g!==T?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,p]),Z(()=>{if(t){let l;const u=t.ownerDocument.defaultView??window,m=T=>{const x=W(a.current).includes(T.animationName);if(T.target===t&&x&&(p("ANIMATION_END"),!s.current)){const f=t.style.animationFillMode;t.style.animationFillMode="forwards",l=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=f)})}},g=T=>{T.target===t&&(i.current=W(a.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{u.clearTimeout(l),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(l=>{a.current=l?getComputedStyle(l):null,n(l)},[])}}function W(e){return(e==null?void 0:e.animationName)||"none"}function pt(e){var a,s;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var k="Tabs",[bt,Ft]=H(k,[ve]),ye=ve(),[gt,z]=bt(k),we=r.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,onValueChange:s,defaultValue:i,orientation:c="horizontal",dir:d,activationMode:p="automatic",...l}=e,u=be(d),[m,g]=fe({prop:a,onChange:s,defaultProp:i??"",caller:k});return o.jsx(gt,{scope:n,baseId:pe(),value:m,onValueChange:g,orientation:c,dir:u,activationMode:p,children:o.jsx(_.div,{dir:u,"data-orientation":c,...l,ref:t})})});we.displayName=k;var Ie="TabsList",Re=r.forwardRef((e,t)=>{const{__scopeTabs:n,loop:a=!0,...s}=e,i=z(Ie,n),c=ye(n);return o.jsx(ut,{asChild:!0,...c,orientation:i.orientation,dir:i.dir,loop:a,children:o.jsx(_.div,{role:"tablist","aria-orientation":i.orientation,...s,ref:t})})});Re.displayName=Ie;var Se="TabsTrigger",Ae=r.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,disabled:s=!1,...i}=e,c=z(Se,n),d=ye(n),p=_e(c.baseId,a),l=Pe(c.baseId,a),u=a===c.value;return o.jsx(dt,{asChild:!0,...d,focusable:!s,active:u,children:o.jsx(_.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":l,"data-state":u?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:p,...i,ref:t,onMouseDown:y(e.onMouseDown,m=>{!s&&m.button===0&&m.ctrlKey===!1?c.onValueChange(a):m.preventDefault()}),onKeyDown:y(e.onKeyDown,m=>{[" ","Enter"].includes(m.key)&&c.onValueChange(a)}),onFocus:y(e.onFocus,()=>{const m=c.activationMode!=="manual";!u&&!s&&m&&c.onValueChange(a)})})})});Ae.displayName=Se;var Ee="TabsContent",je=r.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,forceMount:s,children:i,...c}=e,d=z(Ee,n),p=_e(d.baseId,a),l=Pe(d.baseId,a),u=a===d.value,m=r.useRef(u);return r.useEffect(()=>{const g=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(g)},[]),o.jsx(Ce,{present:s||u,children:({present:g})=>o.jsx(_.div,{"data-state":u?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":p,hidden:!g,id:l,tabIndex:0,...c,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:g&&i})})});je.displayName=Ee;function _e(e,t){return`${e}-trigger-${t}`}function Pe(e,t){return`${e}-content-${t}`}var De=we,Fe=Re,Me=Ae,Oe=je;const P=r.forwardRef(({...e},t)=>o.jsx(De,{ref:t,activationMode:"manual",...e,className:G("vero-tabs",e.className)}));P.displayName=De.displayName;const V=r.forwardRef(({className:e,...t},n)=>o.jsx(Fe,{ref:n,className:G(`inline-flex items-center justify-center gap-1 rounded border-[1px] border-base-300 bg-white
        p-1 text-muted-foreground`,e),...t}));V.displayName=Fe.displayName;const w=r.forwardRef(({className:e,isDisabled:t,...n},a)=>{const s=Ke({isDisabled:t});return o.jsx(Me,{ref:a,className:G(me.focusRing,`inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm
        font-bold ring-offset-background transition-all hover:bg-primary-200 hover:text-primary
        aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50
        data-[state=active]:bg-primary data-[state=active]:text-white`,e),...n,...s})});w.displayName=Me.displayName;const I=r.forwardRef(({className:e,...t},n)=>o.jsx(Oe,{ref:n,className:G(me.focusRingVisible,"mt-2",e),...t}));I.displayName=Oe.displayName;P.__docgenInfo={description:"",methods:[],props:{value:{required:!1,tsType:{name:"string"},description:"The controlled value of the active tab. When provided, the component becomes a controlled component."},defaultValue:{required:!1,tsType:{name:"string"},description:"The default value of the active tab when the component is uncontrolled."}},composes:["ComponentPropsWithoutRef"]};I.__docgenInfo={description:"",methods:[]};V.__docgenInfo={description:"",methods:[]};w.__docgenInfo={description:"",methods:[],props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const Ve=({defaultValue:e="tab1",value:t,...n})=>o.jsxs(P,{className:"w-md",defaultValue:e,value:t,...n,children:[o.jsxs(V,{className:"grid w-full grid-cols-3 border-none bg-base-200 text-black",children:[o.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab1",children:"Favorites"}),o.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab2",children:"Calls"}),o.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab3",children:"Contacts"})]}),o.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab1",children:[o.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Favorites Tab"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the first tab."})]}),o.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab2",children:[o.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Calls Tab"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the second tab."})]}),o.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab3",children:[o.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Contacts Tab"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the third tab."})]})]});Ve.__docgenInfo={description:"",methods:[],displayName:"TabsCustomStyling",props:{defaultValue:{defaultValue:{value:"'tab1'",computed:!1},required:!1}}};const vt=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
import { TabsProps } from '../types';

export const TabsCustomStyling = ({
  defaultValue = 'tab1',
  value,
  ...args
}: Partial<TabsProps>) => (
  <Tabs className="w-md" defaultValue={defaultValue} value={value} {...args}>
    <TabsList className="grid w-full grid-cols-3 border-none bg-base-200 text-black">
      <TabsTrigger
        className="hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400"
        value="tab1"
      >
        Favorites
      </TabsTrigger>
      <TabsTrigger
        className="hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400"
        value="tab2"
      >
        Calls
      </TabsTrigger>
      <TabsTrigger
        className="hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400"
        value="tab3"
      >
        Contacts
      </TabsTrigger>
    </TabsList>
    <TabsContent className="mt-2 min-h-40 rounded bg-base-200 p-4" value="tab1">
      <h3 className="mb-0 mt-0 text-lg font-medium">Favorites Tab</h3>
      <p className="text-sm text-muted-foreground">Content for the first tab.</p>
    </TabsContent>
    <TabsContent className="mt-2 min-h-40 rounded bg-base-200 p-4" value="tab2">
      <h3 className="mb-0 mt-0 text-lg font-medium">Calls Tab</h3>
      <p className="text-sm text-muted-foreground">Content for the second tab.</p>
    </TabsContent>
    <TabsContent className="mt-2 min-h-40 rounded bg-base-200 p-4" value="tab3">
      <h3 className="mb-0 mt-0 text-lg font-medium">Contacts Tab</h3>
      <p className="text-sm text-muted-foreground">Content for the third tab.</p>
    </TabsContent>
  </Tabs>
);
`,Le=({defaultValue:e="account",value:t,...n})=>o.jsxs(P,{className:"w-md",defaultValue:e,value:t,...n,children:[o.jsxs(V,{children:[o.jsx(w,{value:"account",children:"Account"}),o.jsx(w,{value:"password",children:"Password"})]}),o.jsxs(I,{value:"account",children:[o.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Account Settings"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your account preferences and settings."})]}),o.jsxs(I,{value:"password",children:[o.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Password Settings"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security preferences."})]})]});Le.__docgenInfo={description:"",methods:[],displayName:"TabsDefault",props:{defaultValue:{defaultValue:{value:"'account'",computed:!1},required:!1}}};const Tt=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
import { TabsProps } from '../types';

export const TabsDefault = ({ defaultValue = 'account', value, ...args }: Partial<TabsProps>) => (
  <Tabs className="w-md" defaultValue={defaultValue} value={value} {...args}>
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <h3 className="mb-0 mt-0 text-lg font-medium">Account Settings</h3>
      <p className="text-sm text-muted-foreground">
        Configure your account preferences and settings.
      </p>
    </TabsContent>
    <TabsContent value="password">
      <h3 className="mb-0 mt-0 text-lg font-medium">Password Settings</h3>
      <p className="text-sm text-muted-foreground">
        Change your password and security preferences.
      </p>
    </TabsContent>
  </Tabs>
);
`,We=({defaultValue:e="active",value:t,...n})=>o.jsxs(P,{className:"w-md",defaultValue:e,value:t,...n,children:[o.jsxs(V,{children:[o.jsx(w,{value:"active",children:"Active Tab"}),o.jsx(w,{isDisabled:!0,value:"disabled",children:"Disabled Tab"})]}),o.jsxs(I,{value:"active",children:[o.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Active Content"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"This tab is currently active."})]}),o.jsxs(I,{value:"disabled",children:[o.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Disabled Content"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"This content is not accessible."})]})]});We.__docgenInfo={description:"",methods:[],displayName:"TabsWithDisabledTab",props:{defaultValue:{defaultValue:{value:"'active'",computed:!1},required:!1}}};const ht=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
import { TabsProps } from '../types';

export const TabsWithDisabledTab = ({
  defaultValue = 'active',
  value,
  ...args
}: Partial<TabsProps>) => (
  <Tabs className="w-md" defaultValue={defaultValue} value={value} {...args}>
    <TabsList>
      <TabsTrigger value="active">Active Tab</TabsTrigger>
      <TabsTrigger isDisabled value="disabled">
        Disabled Tab
      </TabsTrigger>
    </TabsList>
    <TabsContent value="active">
      <h3 className="mb-0 mt-0 text-lg font-medium">Active Content</h3>
      <p className="text-sm text-muted-foreground">This tab is currently active.</p>
    </TabsContent>
    <TabsContent value="disabled">
      <h3 className="mb-0 mt-0 text-lg font-medium">Disabled Content</h3>
      <p className="text-sm text-muted-foreground">This content is not accessible.</p>
    </TabsContent>
  </Tabs>
);
`,Mt={title:"Actions & Navigation/Tabs",component:P,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The controlled value of the active tab. When provided, the component becomes a controlled component.",table:{type:{summary:"string"}}},defaultValue:{control:"text",description:"The default value of the active tab when the component is uncontrolled.",table:{type:{summary:"string"}}}}},D={args:{defaultValue:"account"},render:e=>o.jsx(Le,{...e}),parameters:{docs:{source:{code:Tt}}}},F={args:{defaultValue:"active"},render:e=>o.jsx(We,{...e}),parameters:{docs:{source:{code:ht}}}},M={args:{defaultValue:"tab1"},render:e=>o.jsx(Ve,{...e}),parameters:{docs:{source:{code:vt}}}};var J,Q,X,ee,te;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultValue: 'account'
  },
  render: args => <TabsDefault {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(X=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`The default state of the Tabs component.
Shows a basic tab interface with multiple panels.`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,ne,oe,se,re;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    defaultValue: 'active'
  },
  render: args => <TabsWithDisabledTab {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDisabledTab
      }
    }
  }
}`,...(oe=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:oe.source},description:{story:`Tabs with disabled state.
Shows how tabs appear when certain options are not available.`,...(re=(se=F.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var ie,ce,le,ue,de;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1'
  },
  render: args => <TabsCustomStyling {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomStyling
      }
    }
  }
}`,...(le=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:le.source},description:{story:`Tabs with custom styling.
Demonstrates how to customize the appearance of tabs.`,...(de=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:de.description}}};const Ot=["Default","WithDisabledTab","CustomStyling"];export{M as CustomStyling,D as Default,F as WithDisabledTab,Ot as __namedExportsOrder,Mt as default};
