import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{s as me}from"./styles-BasBkTzl.js";import{a as H}from"./utils-CU3My8Oi.js";import{r as a,R as A}from"./index-D4H_InIO.js";import{c as z,b as y,a as fe,u as Z}from"./index-DB-GfMvg.js";import{c as $e,u as U}from"./index-D8GmRN1t.js";import{u as pe}from"./index-Ak5Mws-w.js";import"./index-bUn38NNn.js";import{u as Ke}from"./index-DAnQV6hb.js";import{u as be}from"./index-YtIeenAn.js";import"./index-vYCkCKEW.js";function K(e){const t=Be(e),o=a.forwardRef((n,r)=>{const{children:i,...c}=n,d=a.Children.toArray(i),p=d.find(ze);if(p){const l=p.props.children,u=d.map(m=>m===p?a.Children.count(l)>1?a.Children.only(null):a.isValidElement(l)?l.props.children:null:m);return s.jsx(t,{...c,ref:r,children:a.isValidElement(l)?a.cloneElement(l,void 0,u):null})}return s.jsx(t,{...c,ref:r,children:i})});return o.displayName=`${e}.Slot`,o}function Be(e){const t=a.forwardRef((o,n)=>{const{children:r,...i}=o;if(a.isValidElement(r)){const c=qe(r),d=Ye(i,r.props);return r.type!==a.Fragment&&(d.ref=n?$e(n,c):c),a.cloneElement(r,d)}return a.Children.count(r)>1?a.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var He=Symbol("radix.slottable");function ze(e){return a.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===He}function Ye(e,t){const o={...t};for(const n in t){const r=e[n],i=t[n];/^on[A-Z]/.test(n)?r&&i?o[n]=(...d)=>{const p=i(...d);return r(...d),p}:r&&(o[n]=r):n==="style"?o[n]={...r,...i}:n==="className"&&(o[n]=[r,i].filter(Boolean).join(" "))}return{...e,...o}}function qe(e){var n,r;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}function Ze(e){const t=e+"CollectionProvider",[o,n]=z(t),[r,i]=o(t,{collectionRef:{current:null},itemMap:new Map}),c=x=>{const{scope:f,children:h}=x,N=A.useRef(null),b=A.useRef(new Map).current;return s.jsx(r,{scope:f,itemMap:b,collectionRef:N,children:h})};c.displayName=t;const d=e+"CollectionSlot",p=K(d),l=A.forwardRef((x,f)=>{const{scope:h,children:N}=x,b=i(d,h),v=U(f,b.collectionRef);return s.jsx(p,{ref:v,children:N})});l.displayName=d;const u=e+"CollectionItemSlot",m="data-radix-collection-item",g=K(u),T=A.forwardRef((x,f)=>{const{scope:h,children:N,...b}=x,v=A.useRef(null),E=U(f,v),j=i(u,h);return A.useEffect(()=>(j.itemMap.set(v,{ref:v,...b}),()=>void j.itemMap.delete(v))),s.jsx(g,{[m]:"",ref:E,children:N})});T.displayName=u;function S(x){const f=i(e+"CollectionConsumer",x);return A.useCallback(()=>{const N=f.collectionRef.current;if(!N)return[];const b=Array.from(N.querySelectorAll(`[${m}]`));return Array.from(f.itemMap.values()).sort((j,L)=>b.indexOf(j.ref.current)-b.indexOf(L.ref.current))},[f.collectionRef,f.itemMap])}return[{Provider:c,Slot:l,ItemSlot:T},S,n]}var Je=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],_=Je.reduce((e,t)=>{const o=K(`Primitive.${t}`),n=a.forwardRef((r,i)=>{const{asChild:c,...d}=r,p=c?o:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(p,{...d,ref:i})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),$="rovingFocusGroup.onEntryFocus",Qe={bubbles:!1,cancelable:!0},P="RovingFocusGroup",[B,ge,Xe]=Ze(P),[et,ve]=z(P,[Xe]),[tt,nt]=et(P),Te=a.forwardRef((e,t)=>s.jsx(B.Provider,{scope:e.__scopeRovingFocusGroup,children:s.jsx(B.Slot,{scope:e.__scopeRovingFocusGroup,children:s.jsx(ot,{...e,ref:t})})}));Te.displayName=P;var ot=a.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:o,orientation:n,loop:r=!1,dir:i,currentTabStopId:c,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:p,onEntryFocus:l,preventScrollOnEntryFocus:u=!1,...m}=e,g=a.useRef(null),T=U(t,g),S=be(i),[x,f]=fe({prop:c,defaultProp:d??null,onChange:p,caller:P}),[h,N]=a.useState(!1),b=Ke(l),v=ge(o),E=a.useRef(!1),[j,L]=a.useState(0);return a.useEffect(()=>{const C=g.current;if(C)return C.addEventListener($,b),()=>C.removeEventListener($,b)},[b]),s.jsx(tt,{scope:o,orientation:n,dir:S,loop:r,currentTabStopId:x,onItemFocus:a.useCallback(C=>f(C),[f]),onItemShiftTab:a.useCallback(()=>N(!0),[]),onFocusableItemAdd:a.useCallback(()=>L(C=>C+1),[]),onFocusableItemRemove:a.useCallback(()=>L(C=>C-1),[]),children:s.jsx(_.div,{tabIndex:h||j===0?-1:0,"data-orientation":n,...m,ref:T,style:{outline:"none",...e.style},onMouseDown:y(e.onMouseDown,()=>{E.current=!0}),onFocus:y(e.onFocus,C=>{const Ue=!E.current;if(C.target===C.currentTarget&&Ue&&!h){const q=new CustomEvent($,Qe);if(C.currentTarget.dispatchEvent(q),!q.defaultPrevented){const k=v().filter(R=>R.focusable),We=k.find(R=>R.active),Ge=k.find(R=>R.id===x),ke=[We,Ge,...k].filter(Boolean).map(R=>R.ref.current);Ce(ke,u)}}E.current=!1}),onBlur:y(e.onBlur,()=>N(!1))})})}),he="RovingFocusGroupItem",xe=a.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:o,focusable:n=!0,active:r=!1,tabStopId:i,children:c,...d}=e,p=pe(),l=i||p,u=nt(he,o),m=u.currentTabStopId===l,g=ge(o),{onFocusableItemAdd:T,onFocusableItemRemove:S,currentTabStopId:x}=u;return a.useEffect(()=>{if(n)return T(),()=>S()},[n,T,S]),s.jsx(B.ItemSlot,{scope:o,id:l,focusable:n,active:r,children:s.jsx(_.span,{tabIndex:m?0:-1,"data-orientation":u.orientation,...d,ref:t,onMouseDown:y(e.onMouseDown,f=>{n?u.onItemFocus(l):f.preventDefault()}),onFocus:y(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:y(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){u.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const h=at(f,u.orientation,u.dir);if(h!==void 0){if(f.metaKey||f.ctrlKey||f.altKey||f.shiftKey)return;f.preventDefault();let b=g().filter(v=>v.focusable).map(v=>v.ref.current);if(h==="last")b.reverse();else if(h==="prev"||h==="next"){h==="prev"&&b.reverse();const v=b.indexOf(f.currentTarget);b=u.loop?it(b,v+1):b.slice(v+1)}setTimeout(()=>Ce(b))}}),children:typeof c=="function"?c({isCurrentTabStop:m,hasTabStop:x!=null}):c})})});xe.displayName=he;var st={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function rt(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function at(e,t,o){const n=rt(e.key,o);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return st[n]}function Ce(e,t=!1){const o=document.activeElement;for(const n of e)if(n===o||(n.focus({preventScroll:t}),document.activeElement!==o))return}function it(e,t){return e.map((o,n)=>e[(t+n)%e.length])}var ct=Te,lt=xe;function ut(e,t){return a.useReducer((o,n)=>t[o][n]??o,e)}var Ne=e=>{const{present:t,children:o}=e,n=dt(t),r=typeof o=="function"?o({present:n.isPresent}):a.Children.only(o),i=U(n.ref,mt(r));return typeof o=="function"||n.isPresent?a.cloneElement(r,{ref:i}):null};Ne.displayName="Presence";function dt(e){const[t,o]=a.useState(),n=a.useRef(null),r=a.useRef(e),i=a.useRef("none"),c=e?"mounted":"unmounted",[d,p]=ut(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const l=V(n.current);i.current=d==="mounted"?l:"none"},[d]),Z(()=>{const l=n.current,u=r.current;if(u!==e){const g=i.current,T=V(l);e?p("MOUNT"):T==="none"||(l==null?void 0:l.display)==="none"?p("UNMOUNT"):p(u&&g!==T?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,p]),Z(()=>{if(t){let l;const u=t.ownerDocument.defaultView??window,m=T=>{const x=V(n.current).includes(T.animationName);if(T.target===t&&x&&(p("ANIMATION_END"),!r.current)){const f=t.style.animationFillMode;t.style.animationFillMode="forwards",l=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=f)})}},g=T=>{T.target===t&&(i.current=V(n.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{u.clearTimeout(l),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:a.useCallback(l=>{n.current=l?getComputedStyle(l):null,o(l)},[])}}function V(e){return(e==null?void 0:e.animationName)||"none"}function mt(e){var n,r;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var W="Tabs",[ft,_t]=z(W,[ve]),ye=ve(),[pt,Y]=ft(W),we=a.forwardRef((e,t)=>{const{__scopeTabs:o,value:n,onValueChange:r,defaultValue:i,orientation:c="horizontal",dir:d,activationMode:p="automatic",...l}=e,u=be(d),[m,g]=fe({prop:n,onChange:r,defaultProp:i??"",caller:W});return s.jsx(pt,{scope:o,baseId:pe(),value:m,onValueChange:g,orientation:c,dir:u,activationMode:p,children:s.jsx(_.div,{dir:u,"data-orientation":c,...l,ref:t})})});we.displayName=W;var Ie="TabsList",Se=a.forwardRef((e,t)=>{const{__scopeTabs:o,loop:n=!0,...r}=e,i=Y(Ie,o),c=ye(o);return s.jsx(ct,{asChild:!0,...c,orientation:i.orientation,dir:i.dir,loop:n,children:s.jsx(_.div,{role:"tablist","aria-orientation":i.orientation,...r,ref:t})})});Se.displayName=Ie;var Re="TabsTrigger",Ae=a.forwardRef((e,t)=>{const{__scopeTabs:o,value:n,disabled:r=!1,...i}=e,c=Y(Re,o),d=ye(o),p=_e(c.baseId,n),l=Fe(c.baseId,n),u=n===c.value;return s.jsx(lt,{asChild:!0,...d,focusable:!r,active:u,children:s.jsx(_.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":l,"data-state":u?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:p,...i,ref:t,onMouseDown:y(e.onMouseDown,m=>{!r&&m.button===0&&m.ctrlKey===!1?c.onValueChange(n):m.preventDefault()}),onKeyDown:y(e.onKeyDown,m=>{[" ","Enter"].includes(m.key)&&c.onValueChange(n)}),onFocus:y(e.onFocus,()=>{const m=c.activationMode!=="manual";!u&&!r&&m&&c.onValueChange(n)})})})});Ae.displayName=Re;var Ee="TabsContent",je=a.forwardRef((e,t)=>{const{__scopeTabs:o,value:n,forceMount:r,children:i,...c}=e,d=Y(Ee,o),p=_e(d.baseId,n),l=Fe(d.baseId,n),u=n===d.value,m=a.useRef(u);return a.useEffect(()=>{const g=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(g)},[]),s.jsx(Ne,{present:r||u,children:({present:g})=>s.jsx(_.div,{"data-state":u?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":p,hidden:!g,id:l,tabIndex:0,...c,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:g&&i})})});je.displayName=Ee;function _e(e,t){return`${e}-trigger-${t}`}function Fe(e,t){return`${e}-content-${t}`}var bt=we,De=Se,Me=Ae,Pe=je;const G=bt,O=a.forwardRef(({className:e,...t},o)=>s.jsx(De,{ref:o,className:H(`inline-flex items-center justify-center gap-1 rounded border-[1px] border-base-300 bg-white
        p-1 text-muted-foreground`,e),...t}));O.displayName=De.displayName;const w=a.forwardRef(({className:e,...t},o)=>s.jsx(Me,{ref:o,className:H(me.focusRingVisible,`inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm
      font-bold ring-offset-background transition-all hover:bg-primary-200 hover:text-primary
      disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
      aria-disabled:cursor-not-allowed aria-disabled:opacity-50 data-[state=active]:bg-primary
      data-[state=active]:text-white`,e),...t}));w.displayName=Me.displayName;const I=a.forwardRef(({className:e,...t},o)=>s.jsx(Pe,{ref:o,className:H(me.focusRingVisible,`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-ring focus-visible:ring-offset-2`,e),...t}));I.displayName=Pe.displayName;I.__docgenInfo={description:"",methods:[]};O.__docgenInfo={description:"",methods:[]};w.__docgenInfo={description:"",methods:[]};const Oe=()=>s.jsxs(G,{className:"w-md",defaultValue:"tab1",children:[s.jsxs(O,{className:"grid w-full grid-cols-3 border-none bg-base-200 text-black",children:[s.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab1",children:"Favorites"}),s.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab2",children:"Calls"}),s.jsx(w,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab3",children:"Contacts"})]}),s.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab1",children:[s.jsx("h3",{className:"text-lg font-medium",children:"Favorites Tab"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the first tab."})]}),s.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab2",children:[s.jsx("h3",{className:"text-lg font-medium",children:"Calls Tab"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the second tab."})]}),s.jsxs(I,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab3",children:[s.jsx("h3",{className:"text-lg font-medium",children:"Contacts Tab"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the third tab."})]})]});Oe.__docgenInfo={description:"",methods:[],displayName:"TabsCustomStyling"};const gt=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';

export const TabsCustomStyling = () => (
  <Tabs className="w-md" defaultValue="tab1">
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
`,Le=()=>s.jsxs(G,{className:"w-md",defaultValue:"account",children:[s.jsxs(O,{children:[s.jsx(w,{value:"account",children:"Account"}),s.jsx(w,{value:"password",children:"Password"})]}),s.jsxs(I,{value:"account",children:[s.jsx("h3",{className:"text-lg font-medium",children:"Account Settings"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your account preferences and settings."})]}),s.jsxs(I,{value:"password",children:[s.jsx("h3",{className:"text-lg font-medium",children:"Password Settings"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security preferences."})]})]});Le.__docgenInfo={description:"",methods:[],displayName:"TabsDefault"};const vt=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';

export const TabsDefault = () => (
  <Tabs className="w-md" defaultValue="account">
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
`,Ve=()=>s.jsxs(G,{className:"w-md",defaultValue:"active",children:[s.jsxs(O,{children:[s.jsx(w,{value:"active",children:"Active Tab"}),s.jsx(w,{disabled:!0,value:"disabled",children:"Disabled Tab"})]}),s.jsxs(I,{value:"active",children:[s.jsx("h3",{className:"text-lg font-medium",children:"Active Content"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"This tab is currently active."})]}),s.jsxs(I,{value:"disabled",children:[s.jsx("h3",{className:"text-lg font-medium",children:"Disabled Content"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"This content is not accessible."})]})]});Ve.__docgenInfo={description:"",methods:[],displayName:"TabsWithDisabledTab"};const Tt=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';

export const TabsWithDisabledTab = () => (
  <Tabs className="w-md" defaultValue="active">
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
`,Ft={title:"Actions & Navigation/Tabs",component:G,parameters:{},tags:["autodocs"]},F={render:()=>s.jsx(Le,{}),parameters:{docs:{source:{code:vt}}}},D={render:()=>s.jsx(Ve,{}),parameters:{docs:{source:{code:Tt}}}},M={render:()=>s.jsx(Oe,{}),parameters:{docs:{source:{code:gt}}}};var J,Q,X,ee,te;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <TabsDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(X=(Q=F.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`The default state of the Tabs component.
Shows a basic tab interface with multiple panels.`,...(te=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ne,oe,se,re,ae;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <TabsWithDisabledTab />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDisabledTab
      }
    }
  }
}`,...(se=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:se.source},description:{story:`Tabs with disabled state.
Shows how tabs appear when certain options are not available.`,...(ae=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var ie,ce,le,ue,de;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <TabsCustomStyling />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomStyling
      }
    }
  }
}`,...(le=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:le.source},description:{story:`Tabs with custom styling.
Demonstrates how to customize the appearance of tabs.`,...(de=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:de.description}}};const Dt=["Default","WithDisabledTab","CustomStyling"];export{M as CustomStyling,F as Default,D as WithDisabledTab,Dt as __namedExportsOrder,Ft as default};
