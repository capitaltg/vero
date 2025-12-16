import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{s as me}from"./styles-Bqt2ynIu.js";import{a as q}from"./utils-CU3My8Oi.js";import{r,R as A}from"./index-D4H_InIO.js";import{c as H,b as y,a as fe,u as Z}from"./index-DB-GfMvg.js";import{c as Ke,u as U}from"./index-D8GmRN1t.js";import{u as pe}from"./index-Ak5Mws-w.js";import"./index-bUn38NNn.js";import{u as Be}from"./index-DAnQV6hb.js";import{u as be}from"./index-YtIeenAn.js";import"./index-vYCkCKEW.js";function K(e){const t=qe(e),a=r.forwardRef((n,s)=>{const{children:i,...c}=n,d=r.Children.toArray(i),p=d.find(ze);if(p){const l=p.props.children,u=d.map(m=>m===p?r.Children.count(l)>1?r.Children.only(null):r.isValidElement(l)?l.props.children:null:m);return o.jsx(t,{...c,ref:s,children:r.isValidElement(l)?r.cloneElement(l,void 0,u):null})}return o.jsx(t,{...c,ref:s,children:i})});return a.displayName=`${e}.Slot`,a}function qe(e){const t=r.forwardRef((a,n)=>{const{children:s,...i}=a;if(r.isValidElement(s)){const c=Ze(s),d=Ye(i,s.props);return s.type!==r.Fragment&&(d.ref=n?Ke(n,c):c),r.cloneElement(s,d)}return r.Children.count(s)>1?r.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var He=Symbol("radix.slottable");function ze(e){return r.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===He}function Ye(e,t){const a={...t};for(const n in t){const s=e[n],i=t[n];/^on[A-Z]/.test(n)?s&&i?a[n]=(...d)=>{const p=i(...d);return s(...d),p}:s&&(a[n]=s):n==="style"?a[n]={...s,...i}:n==="className"&&(a[n]=[s,i].filter(Boolean).join(" "))}return{...e,...a}}function Ze(e){var n,s;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}function Je(e){const t=e+"CollectionProvider",[a,n]=H(t),[s,i]=a(t,{collectionRef:{current:null},itemMap:new Map}),c=x=>{const{scope:f,children:h}=x,N=A.useRef(null),b=A.useRef(new Map).current;return o.jsx(s,{scope:f,itemMap:b,collectionRef:N,children:h})};c.displayName=t;const d=e+"CollectionSlot",p=K(d),l=A.forwardRef((x,f)=>{const{scope:h,children:N}=x,b=i(d,h),v=U(f,b.collectionRef);return o.jsx(p,{ref:v,children:N})});l.displayName=d;const u=e+"CollectionItemSlot",m="data-radix-collection-item",g=K(u),T=A.forwardRef((x,f)=>{const{scope:h,children:N,...b}=x,v=A.useRef(null),E=U(f,v),j=i(u,h);return A.useEffect(()=>(j.itemMap.set(v,{ref:v,...b}),()=>void j.itemMap.delete(v))),o.jsx(g,{[m]:"",ref:E,children:N})});T.displayName=u;function R(x){const f=i(e+"CollectionConsumer",x);return A.useCallback(()=>{const N=f.collectionRef.current;if(!N)return[];const b=Array.from(N.querySelectorAll(`[${m}]`));return Array.from(f.itemMap.values()).sort((j,L)=>b.indexOf(j.ref.current)-b.indexOf(L.ref.current))},[f.collectionRef,f.itemMap])}return[{Provider:c,Slot:l,ItemSlot:T},R,n]}var Qe=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],_=Qe.reduce((e,t)=>{const a=K(`Primitive.${t}`),n=r.forwardRef((s,i)=>{const{asChild:c,...d}=s,p=c?a:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(p,{...d,ref:i})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),$="rovingFocusGroup.onEntryFocus",Xe={bubbles:!1,cancelable:!0},O="RovingFocusGroup",[B,ge,et]=Je(O),[tt,ve]=H(O,[et]),[nt,at]=tt(O),Te=r.forwardRef((e,t)=>o.jsx(B.Provider,{scope:e.__scopeRovingFocusGroup,children:o.jsx(B.Slot,{scope:e.__scopeRovingFocusGroup,children:o.jsx(ot,{...e,ref:t})})}));Te.displayName=O;var ot=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,orientation:n,loop:s=!1,dir:i,currentTabStopId:c,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:p,onEntryFocus:l,preventScrollOnEntryFocus:u=!1,...m}=e,g=r.useRef(null),T=U(t,g),R=be(i),[x,f]=fe({prop:c,defaultProp:d??null,onChange:p,caller:O}),[h,N]=r.useState(!1),b=Be(l),v=ge(a),E=r.useRef(!1),[j,L]=r.useState(0);return r.useEffect(()=>{const C=g.current;if(C)return C.addEventListener($,b),()=>C.removeEventListener($,b)},[b]),o.jsx(nt,{scope:a,orientation:n,dir:R,loop:s,currentTabStopId:x,onItemFocus:r.useCallback(C=>f(C),[f]),onItemShiftTab:r.useCallback(()=>N(!0),[]),onFocusableItemAdd:r.useCallback(()=>L(C=>C+1),[]),onFocusableItemRemove:r.useCallback(()=>L(C=>C-1),[]),children:o.jsx(_.div,{tabIndex:h||j===0?-1:0,"data-orientation":n,...m,ref:T,style:{outline:"none",...e.style},onMouseDown:y(e.onMouseDown,()=>{E.current=!0}),onFocus:y(e.onFocus,C=>{const Ue=!E.current;if(C.target===C.currentTarget&&Ue&&!h){const Y=new CustomEvent($,Xe);if(C.currentTarget.dispatchEvent(Y),!Y.defaultPrevented){const k=v().filter(S=>S.focusable),Ge=k.find(S=>S.active),ke=k.find(S=>S.id===x),$e=[Ge,ke,...k].filter(Boolean).map(S=>S.ref.current);Ce($e,u)}}E.current=!1}),onBlur:y(e.onBlur,()=>N(!1))})})}),he="RovingFocusGroupItem",xe=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,focusable:n=!0,active:s=!1,tabStopId:i,children:c,...d}=e,p=pe(),l=i||p,u=at(he,a),m=u.currentTabStopId===l,g=ge(a),{onFocusableItemAdd:T,onFocusableItemRemove:R,currentTabStopId:x}=u;return r.useEffect(()=>{if(n)return T(),()=>R()},[n,T,R]),o.jsx(B.ItemSlot,{scope:a,id:l,focusable:n,active:s,children:o.jsx(_.span,{tabIndex:m?0:-1,"data-orientation":u.orientation,...d,ref:t,onMouseDown:y(e.onMouseDown,f=>{n?u.onItemFocus(l):f.preventDefault()}),onFocus:y(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:y(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){u.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const h=it(f,u.orientation,u.dir);if(h!==void 0){if(f.metaKey||f.ctrlKey||f.altKey||f.shiftKey)return;f.preventDefault();let b=g().filter(v=>v.focusable).map(v=>v.ref.current);if(h==="last")b.reverse();else if(h==="prev"||h==="next"){h==="prev"&&b.reverse();const v=b.indexOf(f.currentTarget);b=u.loop?ct(b,v+1):b.slice(v+1)}setTimeout(()=>Ce(b))}}),children:typeof c=="function"?c({isCurrentTabStop:m,hasTabStop:x!=null}):c})})});xe.displayName=he;var st={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function rt(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function it(e,t,a){const n=rt(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return st[n]}function Ce(e,t=!1){const a=document.activeElement;for(const n of e)if(n===a||(n.focus({preventScroll:t}),document.activeElement!==a))return}function ct(e,t){return e.map((a,n)=>e[(t+n)%e.length])}var lt=Te,ut=xe;function dt(e,t){return r.useReducer((a,n)=>t[a][n]??a,e)}var Ne=e=>{const{present:t,children:a}=e,n=mt(t),s=typeof a=="function"?a({present:n.isPresent}):r.Children.only(a),i=U(n.ref,ft(s));return typeof a=="function"||n.isPresent?r.cloneElement(s,{ref:i}):null};Ne.displayName="Presence";function mt(e){const[t,a]=r.useState(),n=r.useRef(null),s=r.useRef(e),i=r.useRef("none"),c=e?"mounted":"unmounted",[d,p]=dt(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const l=W(n.current);i.current=d==="mounted"?l:"none"},[d]),Z(()=>{const l=n.current,u=s.current;if(u!==e){const g=i.current,T=W(l);e?p("MOUNT"):T==="none"||(l==null?void 0:l.display)==="none"?p("UNMOUNT"):p(u&&g!==T?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,p]),Z(()=>{if(t){let l;const u=t.ownerDocument.defaultView??window,m=T=>{const x=W(n.current).includes(T.animationName);if(T.target===t&&x&&(p("ANIMATION_END"),!s.current)){const f=t.style.animationFillMode;t.style.animationFillMode="forwards",l=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=f)})}},g=T=>{T.target===t&&(i.current=W(n.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{u.clearTimeout(l),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(l=>{n.current=l?getComputedStyle(l):null,a(l)},[])}}function W(e){return(e==null?void 0:e.animationName)||"none"}function ft(e){var n,s;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,a=t&&"isReactWarning"in t&&t.isReactWarning;return a?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,a=t&&"isReactWarning"in t&&t.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}var G="Tabs",[pt,_t]=H(G,[ve]),ye=ve(),[bt,z]=pt(G),we=r.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,onValueChange:s,defaultValue:i,orientation:c="horizontal",dir:d,activationMode:p="automatic",...l}=e,u=be(d),[m,g]=fe({prop:n,onChange:s,defaultProp:i??"",caller:G});return o.jsx(bt,{scope:a,baseId:pe(),value:m,onValueChange:g,orientation:c,dir:u,activationMode:p,children:o.jsx(_.div,{dir:u,"data-orientation":c,...l,ref:t})})});we.displayName=G;var Ie="TabsList",Re=r.forwardRef((e,t)=>{const{__scopeTabs:a,loop:n=!0,...s}=e,i=z(Ie,a),c=ye(a);return o.jsx(lt,{asChild:!0,...c,orientation:i.orientation,dir:i.dir,loop:n,children:o.jsx(_.div,{role:"tablist","aria-orientation":i.orientation,...s,ref:t})})});Re.displayName=Ie;var Se="TabsTrigger",Ae=r.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,disabled:s=!1,...i}=e,c=z(Se,a),d=ye(a),p=_e(c.baseId,n),l=Pe(c.baseId,n),u=n===c.value;return o.jsx(ut,{asChild:!0,...d,focusable:!s,active:u,children:o.jsx(_.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":l,"data-state":u?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:p,...i,ref:t,onMouseDown:y(e.onMouseDown,m=>{!s&&m.button===0&&m.ctrlKey===!1?c.onValueChange(n):m.preventDefault()}),onKeyDown:y(e.onKeyDown,m=>{[" ","Enter"].includes(m.key)&&c.onValueChange(n)}),onFocus:y(e.onFocus,()=>{const m=c.activationMode!=="manual";!u&&!s&&m&&c.onValueChange(n)})})})});Ae.displayName=Se;var Ee="TabsContent",je=r.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,forceMount:s,children:i,...c}=e,d=z(Ee,a),p=_e(d.baseId,n),l=Pe(d.baseId,n),u=n===d.value,m=r.useRef(u);return r.useEffect(()=>{const g=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(g)},[]),o.jsx(Ne,{present:s||u,children:({present:g})=>o.jsx(_.div,{"data-state":u?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":p,hidden:!g,id:l,tabIndex:0,...c,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:g&&i})})});je.displayName=Ee;function _e(e,t){return`${e}-trigger-${t}`}function Pe(e,t){return`${e}-content-${t}`}var Fe=we,De=Re,Me=Ae,Oe=je;const P=r.forwardRef(({...e},t)=>o.jsx(Fe,{ref:t,activationMode:"manual",...e}));P.displayName=Fe.displayName;const V=r.forwardRef(({className:e,...t},a)=>o.jsx(De,{ref:a,className:q(`inline-flex items-center justify-center gap-1 rounded border-[1px] border-base-300 bg-white
        p-1 text-muted-foreground`,e),...t}));V.displayName=De.displayName;const w=r.forwardRef(({className:e,...t},a)=>o.jsx(Me,{ref:a,className:q(me.focusRingVisible,`inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm
      font-bold ring-offset-background transition-all hover:bg-primary-200 hover:text-primary
      disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
      aria-disabled:cursor-not-allowed aria-disabled:opacity-50 data-[state=active]:bg-primary
      data-[state=active]:text-white`,e),...t}));w.displayName=Me.displayName;const I=r.forwardRef(({className:e,...t},a)=>o.jsx(Oe,{ref:a,className:q(me.focusRingVisible,`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-ring focus-visible:ring-offset-2`,e),...t}));I.displayName=Oe.displayName;P.__docgenInfo={description:"",methods:[],props:{value:{required:!1,tsType:{name:"string"},description:"The controlled value of the active tab. When provided, the component becomes a controlled component."},defaultValue:{required:!1,tsType:{name:"string"},description:"The default value of the active tab when the component is uncontrolled."}},composes:["ComponentPropsWithoutRef"]};I.__docgenInfo={description:"",methods:[]};V.__docgenInfo={description:"",methods:[]};w.__docgenInfo={description:"",methods:[]};const Ve=({defaultValue:e="tab1",value:t,...a})=>o.jsxs(P,{className:"w-md",defaultValue:e,value:t,...a,children:[o.jsxs(V,{className:"grid w-full grid-cols-3 border-none bg-base-200 text-black",children:[o.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab1",children:"Favorites"}),o.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab2",children:"Calls"}),o.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab3",children:"Contacts"})]}),o.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab1",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Favorites Tab"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the first tab."})]}),o.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab2",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Calls Tab"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the second tab."})]}),o.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab3",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Contacts Tab"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the third tab."})]})]});Ve.__docgenInfo={description:"",methods:[],displayName:"TabsCustomStyling",props:{defaultValue:{defaultValue:{value:"'tab1'",computed:!1},required:!1}}};const gt=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
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
`,Le=({defaultValue:e="account",value:t,...a})=>o.jsxs(P,{className:"w-md",defaultValue:e,value:t,...a,children:[o.jsxs(V,{children:[o.jsx(w,{value:"account",children:"Account"}),o.jsx(w,{value:"password",children:"Password"})]}),o.jsxs(I,{value:"account",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Account Settings"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your account preferences and settings."})]}),o.jsxs(I,{value:"password",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Password Settings"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security preferences."})]})]});Le.__docgenInfo={description:"",methods:[],displayName:"TabsDefault",props:{defaultValue:{defaultValue:{value:"'account'",computed:!1},required:!1}}};const vt=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
import { TabsProps } from '../types';

export const TabsDefault = ({ defaultValue = 'account', value, ...args }: Partial<TabsProps>) => (
  <Tabs className="w-md" defaultValue={defaultValue} value={value} {...args}>
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
`,We=({defaultValue:e="active",value:t,...a})=>o.jsxs(P,{className:"w-md",defaultValue:e,value:t,...a,children:[o.jsxs(V,{children:[o.jsx(w,{value:"active",children:"Active Tab"}),o.jsx(w,{disabled:!0,value:"disabled",children:"Disabled Tab"})]}),o.jsxs(I,{value:"active",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Active Content"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"This tab is currently active."})]}),o.jsxs(I,{value:"disabled",children:[o.jsx("h3",{className:"text-lg font-medium",children:"Disabled Content"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"This content is not accessible."})]})]});We.__docgenInfo={description:"",methods:[],displayName:"TabsWithDisabledTab",props:{defaultValue:{defaultValue:{value:"'active'",computed:!1},required:!1}}};const Tt=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
import { TabsProps } from '../types';

export const TabsWithDisabledTab = ({
  defaultValue = 'active',
  value,
  ...args
}: Partial<TabsProps>) => (
  <Tabs className="w-md" defaultValue={defaultValue} value={value} {...args}>
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
`,Pt={title:"Actions & Navigation/Tabs",component:P,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The controlled value of the active tab. When provided, the component becomes a controlled component.",table:{type:{summary:"string"}}},defaultValue:{control:"text",description:"The default value of the active tab when the component is uncontrolled.",table:{type:{summary:"string"}}}}},F={args:{defaultValue:"account"},render:e=>o.jsx(Le,{...e}),parameters:{docs:{source:{code:vt}}}},D={args:{defaultValue:"active"},render:e=>o.jsx(We,{...e}),parameters:{docs:{source:{code:Tt}}}},M={args:{defaultValue:"tab1"},render:e=>o.jsx(Ve,{...e}),parameters:{docs:{source:{code:gt}}}};var J,Q,X,ee,te;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=F.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`The default state of the Tabs component.
Shows a basic tab interface with multiple panels.`,...(te=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ne,ae,oe,se,re;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:oe.source},description:{story:`Tabs with disabled state.
Shows how tabs appear when certain options are not available.`,...(re=(se=D.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var ie,ce,le,ue,de;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
Demonstrates how to customize the appearance of tabs.`,...(de=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:de.description}}};const Ft=["Default","WithDisabledTab","CustomStyling"];export{M as CustomStyling,F as Default,D as WithDisabledTab,Ft as __namedExportsOrder,Pt as default};
