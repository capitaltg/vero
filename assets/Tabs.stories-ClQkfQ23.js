import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{u as se}from"./useAriaDisabled-BVkOu7OW.js";import{s as B}from"./styles-DnVuGKPq.js";import{a as w}from"./utils-DrFeXHBK.js";import{r as l}from"./index-B0WjJBI_.js";import{c as _,a as re,b as oe}from"./index-BKPsKW-F.js";import{a as ne,R as ie,c as H}from"./index-Bm9-4BKu.js";import{P as ce}from"./index-CzzBuDdg.js";import{P as j}from"./index-Cf-CwZ9y.js";import{u as de}from"./index-B5VgmDqq.js";import{u as le}from"./index-lUtbbSKC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cg8zIP29.js";import"./index-V0BpeevJ.js";import"./index-B6qhCouN.js";import"./index-Dif16jpf.js";var ue=Object.defineProperty,f=(a,t)=>ue(a,"name",{value:t,configurable:!0}),J={Automatic:"automatic",Manual:"manual"},D="Tabs",[me,Me]=re(D,[H]),Q=H(),[be,V]=me(D),U=l.forwardRef(f(function(t,s){const{__scopeTabs:c,value:r,onValueChange:i,defaultValue:u,orientation:n="horizontal",dir:p,activationMode:h=J.Automatic,...v}=t,d=de(p),[o,g]=oe({prop:r,onChange:i,defaultProp:u??"",caller:D});return e.jsx(be,{scope:c,baseId:le(),value:o,onValueChange:g,orientation:n,dir:d,activationMode:h,children:e.jsx(j.div,{dir:d,"data-orientation":n,...v,ref:s})})},"Tabs")),pe="TabsList",X=l.forwardRef(f(function(t,s){const{__scopeTabs:c,loop:r=!0,...i}=t,u=V(pe,c),n=Q(c);return e.jsx(ne,{asChild:!0,...n,orientation:u.orientation,dir:u.dir,loop:r,children:e.jsx(j.div,{role:"tablist","aria-orientation":u.orientation,...i,ref:s})})},"TabsList")),ge="TabsTrigger",Y=l.forwardRef(f(function(t,s){const{__scopeTabs:c,value:r,disabled:i=!1,...u}=t,n=V(ge,c),p=Q(c),h=P(n.baseId,r),v=S(n.baseId,r),d=r===n.value;return e.jsx(ie,{asChild:!0,...p,focusable:!i,active:d,children:e.jsx(j.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":v,"data-state":d?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:h,...u,ref:s,onMouseDown:_(t.onMouseDown,o=>{!i&&o.button===0&&o.ctrlKey===!1?(o.currentTarget.focus(),n.onValueChange(r)):o.preventDefault()}),onKeyDown:_(t.onKeyDown,o=>{i||o.target!==o.currentTarget||[" ","Enter"].includes(o.key)&&n.onValueChange(r)}),onFocus:_(t.onFocus,()=>{const o=n.activationMode!==J.Manual;!d&&!i&&o&&n.onValueChange(r)})})})},"TabsTrigger")),fe="TabsContent",Z=l.forwardRef(f(function(t,s){const{__scopeTabs:c,value:r,forceMount:i,children:u,...n}=t,p=V(fe,c),h=P(p.baseId,r),v=S(p.baseId,r),d=r===p.value,o=l.useRef(d);return l.useEffect(()=>{const g=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(g)},[]),e.jsx(ce,{present:i||d,children:({present:g})=>e.jsx(j.div,{"data-state":d?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":h,hidden:!g,id:v,tabIndex:0,...n,ref:s,style:{...t.style,animationDuration:o.current?"0s":void 0},children:g&&u})})},"TabsContent"));function P(a,t){return`${a}-trigger-${t}`}f(P,"makeTriggerId");function S(a,t){return`${a}-content-${t}`}f(S,"makeContentId");const T=l.forwardRef(({...a},t)=>e.jsx(U,{ref:t,activationMode:"manual",...a,className:w("vero-tabs",a.className)}));T.displayName=U.displayName;const N=l.forwardRef(({className:a,...t},s)=>e.jsx(X,{ref:s,className:w(`inline-flex items-center justify-center gap-1 rounded border-[1px] border-base-300 bg-white
        p-1 text-muted-foreground`,a),...t}));N.displayName=X.displayName;const m=l.forwardRef(({className:a,isDisabled:t,...s},c)=>{const r=se({isDisabled:t});return e.jsx(Y,{ref:c,className:w(B.focusRing,`inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm
        font-bold ring-offset-background transition-all hover:bg-primary-200 hover:text-primary
        aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50
        data-[state=active]:bg-primary data-[state=active]:text-white`,a),...s,...r})});m.displayName=Y.displayName;const b=l.forwardRef(({className:a,...t},s)=>e.jsx(Z,{ref:s,className:w(B.focusRingVisible,"mt-2",a),...t}));b.displayName=Z.displayName;T.__docgenInfo={description:"",methods:[],props:{value:{required:!1,tsType:{name:"string"},description:"The controlled value of the active tab. When provided, the component becomes a controlled component."},defaultValue:{required:!1,tsType:{name:"string"},description:"The default value of the active tab when the component is uncontrolled."}},composes:["ComponentPropsWithoutRef"]};b.__docgenInfo={description:"",methods:[]};N.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[],props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const ee=({defaultValue:a="tab1",value:t,...s})=>e.jsxs(T,{className:"w-md",defaultValue:a,value:t,...s,children:[e.jsxs(N,{className:"grid w-full grid-cols-3 border-none bg-base-200 text-black",children:[e.jsx(m,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab1",children:"Favorites"}),e.jsx(m,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab2",children:"Calls"}),e.jsx(m,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab3",children:"Contacts"})]}),e.jsxs(b,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab1",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Favorites Tab"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the first tab."})]}),e.jsxs(b,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab2",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Calls Tab"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the second tab."})]}),e.jsxs(b,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab3",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Contacts Tab"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the third tab."})]})]});ee.__docgenInfo={description:"",methods:[],displayName:"TabsCustomStyling",props:{defaultValue:{defaultValue:{value:"'tab1'",computed:!1},required:!1}}};const Te=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
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
`,te=({defaultValue:a="account",value:t,...s})=>e.jsxs(T,{className:"w-md",defaultValue:a,value:t,...s,children:[e.jsxs(N,{children:[e.jsx(m,{value:"account",children:"Account"}),e.jsx(m,{value:"password",children:"Password"})]}),e.jsxs(b,{value:"account",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Account Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your account preferences and settings."})]}),e.jsxs(b,{value:"password",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Password Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security preferences."})]})]});te.__docgenInfo={description:"",methods:[],displayName:"TabsDefault",props:{defaultValue:{defaultValue:{value:"'account'",computed:!1},required:!1}}};const he=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
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
`,ae=({defaultValue:a="active",value:t,...s})=>e.jsxs(T,{className:"w-md",defaultValue:a,value:t,...s,children:[e.jsxs(N,{children:[e.jsx(m,{value:"active",children:"Active Tab"}),e.jsx(m,{isDisabled:!0,value:"disabled",children:"Disabled Tab"})]}),e.jsxs(b,{value:"active",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Active Content"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This tab is currently active."})]}),e.jsxs(b,{value:"disabled",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Disabled Content"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This content is not accessible."})]})]});ae.__docgenInfo={description:"",methods:[],displayName:"TabsWithDisabledTab",props:{defaultValue:{defaultValue:{value:"'active'",computed:!1},required:!1}}};const ve=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
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
`,Ee={title:"Actions & Navigation/Tabs",component:T,parameters:{},tags:["autodocs"],argTypes:{value:{control:"text",description:"The controlled value of the active tab. When provided, the component becomes a controlled component.",table:{type:{summary:"string"}}},defaultValue:{control:"text",description:"The default value of the active tab when the component is uncontrolled.",table:{type:{summary:"string"}}}}},x={args:{defaultValue:"account"},render:a=>e.jsx(te,{...a}),parameters:{docs:{source:{code:he}}}},C={args:{defaultValue:"active"},render:a=>e.jsx(ae,{...a}),parameters:{docs:{source:{code:ve}}}},y={args:{defaultValue:"tab1"},render:a=>e.jsx(ee,{...a}),parameters:{docs:{source:{code:Te}}}};var A,I,R,F,L;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(I=x.parameters)==null?void 0:I.docs)==null?void 0:R.source},description:{story:`The default state of the Tabs component.
Shows a basic tab interface with multiple panels.`,...(L=(F=x.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};var M,E,W,k,G;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(E=C.parameters)==null?void 0:E.docs)==null?void 0:W.source},description:{story:`Tabs with disabled state.
Shows how tabs appear when certain options are not available.`,...(G=(k=C.parameters)==null?void 0:k.docs)==null?void 0:G.description}}};var $,q,O,K,z;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(O=(q=y.parameters)==null?void 0:q.docs)==null?void 0:O.source},description:{story:`Tabs with custom styling.
Demonstrates how to customize the appearance of tabs.`,...(z=(K=y.parameters)==null?void 0:K.docs)==null?void 0:z.description}}};const We=["Default","WithDisabledTab","CustomStyling"];export{y as CustomStyling,x as Default,C as WithDisabledTab,We as __namedExportsOrder,Ee as default};
