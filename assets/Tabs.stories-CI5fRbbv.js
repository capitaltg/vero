import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{s as me}from"./styles-Bqt2ynIu.js";import{a as q}from"./utils-CU3My8Oi.js";import{r,R as A}from"./index-D4H_InIO.js";import{c as H,b as y,a as fe,u as Z}from"./index-DB-GfMvg.js";import{c as Ke,u as k}from"./index-D8GmRN1t.js";import{u as pe}from"./index-Ak5Mws-w.js";import"./index-bUn38NNn.js";import{u as Be}from"./index-DAnQV6hb.js";import{u as be}from"./index-YtIeenAn.js";import"./index-vYCkCKEW.js";function K(e){const t=qe(e),n=r.forwardRef((a,s)=>{const{children:i,...c}=a,d=r.Children.toArray(i),p=d.find(ze);if(p){const l=p.props.children,u=d.map(m=>m===p?r.Children.count(l)>1?r.Children.only(null):r.isValidElement(l)?l.props.children:null:m);return o.jsx(t,{...c,ref:s,children:r.isValidElement(l)?r.cloneElement(l,void 0,u):null})}return o.jsx(t,{...c,ref:s,children:i})});return n.displayName=`${e}.Slot`,n}function qe(e){const t=r.forwardRef((n,a)=>{const{children:s,...i}=n;if(r.isValidElement(s)){const c=Ze(s),d=Ye(i,s.props);return s.type!==r.Fragment&&(d.ref=a?Ke(a,c):c),r.cloneElement(s,d)}return r.Children.count(s)>1?r.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var He=Symbol("radix.slottable");function ze(e){return r.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===He}function Ye(e,t){const n={...t};for(const a in t){const s=e[a],i=t[a];/^on[A-Z]/.test(a)?s&&i?n[a]=(...d)=>{const p=i(...d);return s(...d),p}:s&&(n[a]=s):a==="style"?n[a]={...s,...i}:a==="className"&&(n[a]=[s,i].filter(Boolean).join(" "))}return{...e,...n}}function Ze(e){var a,s;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Je(e){const t=e+"CollectionProvider",[n,a]=H(t),[s,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=x=>{const{scope:f,children:T}=x,N=A.useRef(null),b=A.useRef(new Map).current;return o.jsx(s,{scope:f,itemMap:b,collectionRef:N,children:T})};c.displayName=t;const d=e+"CollectionSlot",p=K(d),l=A.forwardRef((x,f)=>{const{scope:T,children:N}=x,b=i(d,T),g=k(f,b.collectionRef);return o.jsx(p,{ref:g,children:N})});l.displayName=d;const u=e+"CollectionItemSlot",m="data-radix-collection-item",v=K(u),h=A.forwardRef((x,f)=>{const{scope:T,children:N,...b}=x,g=A.useRef(null),E=k(f,g),j=i(u,T);return A.useEffect(()=>(j.itemMap.set(g,{ref:g,...b}),()=>void j.itemMap.delete(g))),o.jsx(v,{[m]:"",ref:E,children:N})});h.displayName=u;function R(x){const f=i(e+"CollectionConsumer",x);return A.useCallback(()=>{const N=f.collectionRef.current;if(!N)return[];const b=Array.from(N.querySelectorAll(`[${m}]`));return Array.from(f.itemMap.values()).sort((j,L)=>b.indexOf(j.ref.current)-b.indexOf(L.ref.current))},[f.collectionRef,f.itemMap])}return[{Provider:c,Slot:l,ItemSlot:h},R,a]}var Qe=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],M=Qe.reduce((e,t)=>{const n=K(`Primitive.${t}`),a=r.forwardRef((s,i)=>{const{asChild:c,...d}=s,p=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(p,{...d,ref:i})});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{}),$="rovingFocusGroup.onEntryFocus",Xe={bubbles:!1,cancelable:!0},O="RovingFocusGroup",[B,ve,et]=Je(O),[tt,ge]=H(O,[et]),[at,nt]=tt(O),he=r.forwardRef((e,t)=>o.jsx(B.Provider,{scope:e.__scopeRovingFocusGroup,children:o.jsx(B.Slot,{scope:e.__scopeRovingFocusGroup,children:o.jsx(ot,{...e,ref:t})})}));he.displayName=O;var ot=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:a,loop:s=!1,dir:i,currentTabStopId:c,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:p,onEntryFocus:l,preventScrollOnEntryFocus:u=!1,...m}=e,v=r.useRef(null),h=k(t,v),R=be(i),[x,f]=fe({prop:c,defaultProp:d??null,onChange:p,caller:O}),[T,N]=r.useState(!1),b=Be(l),g=ve(n),E=r.useRef(!1),[j,L]=r.useState(0);return r.useEffect(()=>{const C=v.current;if(C)return C.addEventListener($,b),()=>C.removeEventListener($,b)},[b]),o.jsx(at,{scope:n,orientation:a,dir:R,loop:s,currentTabStopId:x,onItemFocus:r.useCallback(C=>f(C),[f]),onItemShiftTab:r.useCallback(()=>N(!0),[]),onFocusableItemAdd:r.useCallback(()=>L(C=>C+1),[]),onFocusableItemRemove:r.useCallback(()=>L(C=>C-1),[]),children:o.jsx(M.div,{tabIndex:T||j===0?-1:0,"data-orientation":a,...m,ref:h,style:{outline:"none",...e.style},onMouseDown:y(e.onMouseDown,()=>{E.current=!0}),onFocus:y(e.onFocus,C=>{const ke=!E.current;if(C.target===C.currentTarget&&ke&&!T){const Y=new CustomEvent($,Xe);if(C.currentTarget.dispatchEvent(Y),!Y.defaultPrevented){const G=g().filter(S=>S.focusable),Ue=G.find(S=>S.active),Ge=G.find(S=>S.id===x),$e=[Ue,Ge,...G].filter(Boolean).map(S=>S.ref.current);Ce($e,u)}}E.current=!1}),onBlur:y(e.onBlur,()=>N(!1))})})}),Te="RovingFocusGroupItem",xe=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:a=!0,active:s=!1,tabStopId:i,children:c,...d}=e,p=pe(),l=i||p,u=nt(Te,n),m=u.currentTabStopId===l,v=ve(n),{onFocusableItemAdd:h,onFocusableItemRemove:R,currentTabStopId:x}=u;return r.useEffect(()=>{if(a)return h(),()=>R()},[a,h,R]),o.jsx(B.ItemSlot,{scope:n,id:l,focusable:a,active:s,children:o.jsx(M.span,{tabIndex:m?0:-1,"data-orientation":u.orientation,...d,ref:t,onMouseDown:y(e.onMouseDown,f=>{a?u.onItemFocus(l):f.preventDefault()}),onFocus:y(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:y(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){u.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const T=it(f,u.orientation,u.dir);if(T!==void 0){if(f.metaKey||f.ctrlKey||f.altKey||f.shiftKey)return;f.preventDefault();let b=v().filter(g=>g.focusable).map(g=>g.ref.current);if(T==="last")b.reverse();else if(T==="prev"||T==="next"){T==="prev"&&b.reverse();const g=b.indexOf(f.currentTarget);b=u.loop?ct(b,g+1):b.slice(g+1)}setTimeout(()=>Ce(b))}}),children:typeof c=="function"?c({isCurrentTabStop:m,hasTabStop:x!=null}):c})})});xe.displayName=Te;var st={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function rt(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function it(e,t,n){const a=rt(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return st[a]}function Ce(e,t=!1){const n=document.activeElement;for(const a of e)if(a===n||(a.focus({preventScroll:t}),document.activeElement!==n))return}function ct(e,t){return e.map((n,a)=>e[(t+a)%e.length])}var lt=he,ut=xe;function dt(e,t){return r.useReducer((n,a)=>t[n][a]??n,e)}var Ne=e=>{const{present:t,children:n}=e,a=mt(t),s=typeof n=="function"?n({present:a.isPresent}):r.Children.only(n),i=k(a.ref,ft(s));return typeof n=="function"||a.isPresent?r.cloneElement(s,{ref:i}):null};Ne.displayName="Presence";function mt(e){const[t,n]=r.useState(),a=r.useRef(null),s=r.useRef(e),i=r.useRef("none"),c=e?"mounted":"unmounted",[d,p]=dt(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const l=W(a.current);i.current=d==="mounted"?l:"none"},[d]),Z(()=>{const l=a.current,u=s.current;if(u!==e){const v=i.current,h=W(l);e?p("MOUNT"):h==="none"||(l==null?void 0:l.display)==="none"?p("UNMOUNT"):p(u&&v!==h?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,p]),Z(()=>{if(t){let l;const u=t.ownerDocument.defaultView??window,m=h=>{const x=W(a.current).includes(h.animationName);if(h.target===t&&x&&(p("ANIMATION_END"),!s.current)){const f=t.style.animationFillMode;t.style.animationFillMode="forwards",l=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=f)})}},v=h=>{h.target===t&&(i.current=W(a.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{u.clearTimeout(l),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(l=>{a.current=l?getComputedStyle(l):null,n(l)},[])}}function W(e){return(e==null?void 0:e.animationName)||"none"}function ft(e){var a,s;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var U="Tabs",[pt,Mt]=H(U,[ge]),ye=ge(),[bt,z]=pt(U),we=r.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,onValueChange:s,defaultValue:i,orientation:c="horizontal",dir:d,activationMode:p="automatic",...l}=e,u=be(d),[m,v]=fe({prop:a,onChange:s,defaultProp:i??"",caller:U});return o.jsx(bt,{scope:n,baseId:pe(),value:m,onValueChange:v,orientation:c,dir:u,activationMode:p,children:o.jsx(M.div,{dir:u,"data-orientation":c,...l,ref:t})})});we.displayName=U;var Ie="TabsList",Re=r.forwardRef((e,t)=>{const{__scopeTabs:n,loop:a=!0,...s}=e,i=z(Ie,n),c=ye(n);return o.jsx(lt,{asChild:!0,...c,orientation:i.orientation,dir:i.dir,loop:a,children:o.jsx(M.div,{role:"tablist","aria-orientation":i.orientation,...s,ref:t})})});Re.displayName=Ie;var Se="TabsTrigger",Ae=r.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,disabled:s=!1,...i}=e,c=z(Se,n),d=ye(n),p=Me(c.baseId,a),l=_e(c.baseId,a),u=a===c.value;return o.jsx(ut,{asChild:!0,...d,focusable:!s,active:u,children:o.jsx(M.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":l,"data-state":u?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:p,...i,ref:t,onMouseDown:y(e.onMouseDown,m=>{!s&&m.button===0&&m.ctrlKey===!1?c.onValueChange(a):m.preventDefault()}),onKeyDown:y(e.onKeyDown,m=>{[" ","Enter"].includes(m.key)&&c.onValueChange(a)}),onFocus:y(e.onFocus,()=>{const m=c.activationMode!=="manual";!u&&!s&&m&&c.onValueChange(a)})})})});Ae.displayName=Se;var Ee="TabsContent",je=r.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,forceMount:s,children:i,...c}=e,d=z(Ee,n),p=Me(d.baseId,a),l=_e(d.baseId,a),u=a===d.value,m=r.useRef(u);return r.useEffect(()=>{const v=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(v)},[]),o.jsx(Ne,{present:s||u,children:({present:v})=>o.jsx(M.div,{"data-state":u?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":p,hidden:!v,id:l,tabIndex:0,...c,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:v&&i})})});je.displayName=Ee;function Me(e,t){return`${e}-trigger-${t}`}function _e(e,t){return`${e}-content-${t}`}var Pe=we,Fe=Re,De=Ae,Oe=je;const _=r.forwardRef(({activationMode:e="manual",...t},n)=>o.jsx(Pe,{ref:n,activationMode:e,...t}));_.displayName=Pe.displayName;const V=r.forwardRef(({className:e,...t},n)=>o.jsx(Fe,{ref:n,className:q(`inline-flex items-center justify-center gap-1 rounded border-[1px] border-base-300 bg-white
        p-1 text-muted-foreground`,e),...t}));V.displayName=Fe.displayName;const w=r.forwardRef(({className:e,...t},n)=>o.jsx(De,{ref:n,className:q(me.focusRingVisible,`inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm
      font-bold ring-offset-background transition-all hover:bg-primary-200 hover:text-primary
      disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
      aria-disabled:cursor-not-allowed aria-disabled:opacity-50 data-[state=active]:bg-primary
      data-[state=active]:text-white`,e),...t}));w.displayName=De.displayName;const I=r.forwardRef(({className:e,...t},n)=>o.jsx(Oe,{ref:n,className:q(me.focusRingVisible,`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-ring focus-visible:ring-offset-2`,e),...t}));I.displayName=Oe.displayName;_.__docgenInfo={description:"",methods:[],props:{value:{required:!1,tsType:{name:"string"},description:"The controlled value of the active tab. When provided, the component becomes a controlled component."},defaultValue:{required:!1,tsType:{name:"string"},description:"The default value of the active tab when the component is uncontrolled."},activationMode:{required:!1,tsType:{name:"union",raw:"'automatic' | 'manual'",elements:[{name:"literal",value:"'automatic'"},{name:"literal",value:"'manual'"}]},description:'How tabs are activated. When set to "automatic", tabs are activated when receiving focus. When set to "manual", tabs are activated when clicked.',defaultValue:{value:"'manual'",computed:!1}}},composes:["ComponentPropsWithoutRef"]};I.__docgenInfo={description:"",methods:[]};V.__docgenInfo={description:"",methods:[]};w.__docgenInfo={description:"",methods:[]};const Ve=({defaultValue:e="tab1",value:t,activationMode:n,...a})=>o.jsxs(_,{activationMode:n,className:"w-md",defaultValue:e,value:t,...a,children:[o.jsxs(V,{className:"grid w-full grid-cols-3 border-none bg-base-200 text-black",children:[o.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab1",children:"Favorites"}),o.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab2",children:"Calls"}),o.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab3",children:"Contacts"})]}),o.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab1",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Favorites Tab"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the first tab."})]}),o.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab2",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Calls Tab"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the second tab."})]}),o.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab3",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Contacts Tab"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the third tab."})]})]});Ve.__docgenInfo={description:"",methods:[],displayName:"TabsCustomStyling",props:{defaultValue:{defaultValue:{value:"'tab1'",computed:!1},required:!1}}};const vt=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
import { TabsProps } from '../types';

export const TabsCustomStyling = ({
  defaultValue = 'tab1',
  value,
  activationMode,
  ...args
}: Partial<TabsProps>) => (
  <Tabs
    activationMode={activationMode}
    className="w-md"
    defaultValue={defaultValue}
    value={value}
    {...args}
  >
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
      <h3 className="text-lg font-medium">Favorites Tab</h3>
      <p className="text-sm text-muted-foreground">Content for the first tab.</p>
    </TabsContent>
    <TabsContent className="mt-2 min-h-40 rounded bg-base-200 p-4" value="tab2">
      <h3 className="text-lg font-medium">Calls Tab</h3>
      <p className="text-sm text-muted-foreground">Content for the second tab.</p>
    </TabsContent>
    <TabsContent className="mt-2 min-h-40 rounded bg-base-200 p-4" value="tab3">
      <h3 className="text-lg font-medium">Contacts Tab</h3>
      <p className="text-sm text-muted-foreground">Content for the third tab.</p>
    </TabsContent>
  </Tabs>
);
`,Le=({defaultValue:e="account",value:t,activationMode:n,...a})=>o.jsxs(_,{activationMode:n,className:"w-md",defaultValue:e,value:t,...a,children:[o.jsxs(V,{children:[o.jsx(w,{value:"account",children:"Account"}),o.jsx(w,{value:"password",children:"Password"})]}),o.jsxs(I,{value:"account",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Account Settings"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your account preferences and settings."})]}),o.jsxs(I,{value:"password",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Password Settings"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security preferences."})]})]});Le.__docgenInfo={description:"",methods:[],displayName:"TabsDefault",props:{defaultValue:{defaultValue:{value:"'account'",computed:!1},required:!1}}};const gt=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
import { TabsProps } from '../types';

export const TabsDefault = ({
  defaultValue = 'account',
  value,
  activationMode,
  ...args
}: Partial<TabsProps>) => (
  <Tabs
    activationMode={activationMode}
    className="w-md"
    defaultValue={defaultValue}
    value={value}
    {...args}
  >
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <h3 className="text-lg font-medium">Account Settings</h3>
      <p className="text-sm text-muted-foreground">
        Configure your account preferences and settings.
      </p>
    </TabsContent>
    <TabsContent value="password">
      <h3 className="text-lg font-medium">Password Settings</h3>
      <p className="text-sm text-muted-foreground">
        Change your password and security preferences.
      </p>
    </TabsContent>
  </Tabs>
);
`,We=({defaultValue:e="active",value:t,activationMode:n,...a})=>o.jsxs(_,{activationMode:n,className:"w-md",defaultValue:e,value:t,...a,children:[o.jsxs(V,{children:[o.jsx(w,{value:"active",children:"Active Tab"}),o.jsx(w,{disabled:!0,value:"disabled",children:"Disabled Tab"})]}),o.jsxs(I,{value:"active",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Active Content"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"This tab is currently active."})]}),o.jsxs(I,{value:"disabled",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Disabled Content"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"This content is not accessible."})]})]});We.__docgenInfo={description:"",methods:[],displayName:"TabsWithDisabledTab",props:{defaultValue:{defaultValue:{value:"'active'",computed:!1},required:!1}}};const ht=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
import { TabsProps } from '../types';

export const TabsWithDisabledTab = ({
  defaultValue = 'active',
  value,
  activationMode,
  ...args
}: Partial<TabsProps>) => (
  <Tabs
    activationMode={activationMode}
    className="w-md"
    defaultValue={defaultValue}
    value={value}
    {...args}
  >
    <TabsList>
      <TabsTrigger value="active">Active Tab</TabsTrigger>
      <TabsTrigger disabled value="disabled">
        Disabled Tab
      </TabsTrigger>
    </TabsList>
    <TabsContent value="active">
      <h3 className="text-lg font-medium">Active Content</h3>
      <p className="text-sm text-muted-foreground">This tab is currently active.</p>
    </TabsContent>
    <TabsContent value="disabled">
      <h3 className="text-lg font-medium">Disabled Content</h3>
      <p className="text-sm text-muted-foreground">This content is not accessible.</p>
    </TabsContent>
  </Tabs>
);
`,_t={title:"Actions & Navigation/Tabs",component:_,parameters:{},tags:["autodocs"],args:{activationMode:"manual"},argTypes:{value:{control:"text",description:"The controlled value of the active tab. When provided, the component becomes a controlled component.",table:{type:{summary:"string"}}},defaultValue:{control:"text",description:"The default value of the active tab when the component is uncontrolled.",table:{type:{summary:"string"}}},activationMode:{control:"radio",options:["automatic","manual"],description:'How tabs are activated. When set to "automatic", tabs are activated when receiving focus. When set to "manual", tabs are activated when clicked.',table:{defaultValue:{summary:"manual"},type:{summary:"automatic | manual"}}}}},P={args:{defaultValue:"account",activationMode:"manual"},render:e=>o.jsx(Le,{...e}),parameters:{docs:{source:{code:gt}}}},F={args:{defaultValue:"active",activationMode:"manual"},render:e=>o.jsx(We,{...e}),parameters:{docs:{source:{code:ht}}}},D={args:{defaultValue:"tab1",activationMode:"manual"},render:e=>o.jsx(Ve,{...e}),parameters:{docs:{source:{code:vt}}}};var J,Q,X,ee,te;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultValue: 'account',
    activationMode: 'manual'
  },
  render: args => <TabsDefault {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(X=(Q=P.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`The default state of the Tabs component.
Shows a basic tab interface with multiple panels.`,...(te=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,ne,oe,se,re;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    defaultValue: 'active',
    activationMode: 'manual'
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
Shows how tabs appear when certain options are not available.`,...(re=(se=F.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var ie,ce,le,ue,de;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    activationMode: 'manual'
  },
  render: args => <TabsCustomStyling {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomStyling
      }
    }
  }
}`,...(le=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:le.source},description:{story:`Tabs with custom styling.
Demonstrates how to customize the appearance of tabs.`,...(de=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:de.description}}};const Pt=["Default","WithDisabledTab","CustomStyling"];export{D as CustomStyling,P as Default,F as WithDisabledTab,Pt as __namedExportsOrder,_t as default};
