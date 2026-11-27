import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{u as oe}from"./useAriaDisabled-BVkOu7OW.js";import{s as Z}from"./styles-DnVuGKPq.js";import{a as j}from"./utils-DrFeXHBK.js";import{r as d}from"./index-B0WjJBI_.js";import{b as _,c as ne,a as ie}from"./index-71yw2hYF.js";import{a as le,R as ce,c as ee}from"./index-BC4UKXW_.js";import{P as de}from"./index-CE4V37Zw.js";import{P as D}from"./index-Cf-CwZ9y.js";import{u as ue}from"./index-C6PL8mjV.js";import{u as me}from"./index-hTbK6lay.js";var be=Object.defineProperty,x=(a,t)=>be(a,"name",{value:t,configurable:!0}),ae={Automatic:"automatic",Manual:"manual"},P="Tabs",[pe,Fe]=ne(P,[ee]),te=ee(),[he,S]=pe(P),ge=d.forwardRef(x(function(t,s){const{__scopeTabs:l,value:r,onValueChange:i,defaultValue:u,orientation:n="horizontal",dir:p,activationMode:w=ae.Automatic,...C}=t,c=ue(p),[o,h]=ie({prop:r,onChange:i,defaultProp:u??"",caller:P});return e.jsx(he,{scope:l,baseId:me(),value:o,onValueChange:h,orientation:n,dir:c,activationMode:w,children:e.jsx(D.div,{dir:c,"data-orientation":n,...C,ref:s})})},"Tabs")),fe="TabsList",Te=d.forwardRef(x(function(t,s){const{__scopeTabs:l,loop:r=!0,...i}=t,u=S(fe,l),n=te(l);return e.jsx(le,{asChild:!0,...n,orientation:u.orientation,dir:u.dir,loop:r,children:e.jsx(D.div,{role:"tablist","aria-orientation":u.orientation,...i,ref:s})})},"TabsList")),ve="TabsTrigger",xe=d.forwardRef(x(function(t,s){const{__scopeTabs:l,value:r,disabled:i=!1,...u}=t,n=S(ve,l),p=te(l),w=V(n.baseId,r),C=A(n.baseId,r),c=r===n.value;return e.jsx(ce,{asChild:!0,...p,focusable:!i,active:c,children:e.jsx(D.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":C,"data-state":c?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:w,...u,ref:s,onMouseDown:_(t.onMouseDown,o=>{!i&&o.button===0&&o.ctrlKey===!1?(o.currentTarget.focus(),n.onValueChange(r)):o.preventDefault()}),onKeyDown:_(t.onKeyDown,o=>{i||o.target!==o.currentTarget||[" ","Enter"].includes(o.key)&&n.onValueChange(r)}),onFocus:_(t.onFocus,()=>{const o=n.activationMode!==ae.Manual;!c&&!i&&o&&n.onValueChange(r)})})})},"TabsTrigger")),ye="TabsContent",we=d.forwardRef(x(function(t,s){const{__scopeTabs:l,value:r,forceMount:i,children:u,...n}=t,p=S(ye,l),w=V(p.baseId,r),C=A(p.baseId,r),c=r===p.value,o=d.useRef(c);return d.useEffect(()=>{const h=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(h)},[]),e.jsx(de,{present:i||c,children:({present:h})=>e.jsx(D.div,{"data-state":c?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":w,hidden:!h,id:C,tabIndex:0,...n,ref:s,style:{...t.style,animationDuration:o.current?"0s":void 0},children:h&&u})})},"TabsContent"));function V(a,t){return`${a}-trigger-${t}`}x(V,"makeTriggerId");function A(a,t){return`${a}-content-${t}`}x(A,"makeContentId");const y=d.forwardRef(({...a},t)=>e.jsx(ge,{ref:t,activationMode:"manual",...a,className:j("vero-tabs",a.className)}));y.displayName="Tabs";const N=d.forwardRef(({className:a,...t},s)=>e.jsx(Te,{ref:s,className:j(`inline-flex items-center justify-center gap-1 rounded border-[1px] border-base-300 bg-white
        p-1 text-muted-foreground`,a),...t}));N.displayName="TabsList";const m=d.forwardRef(({className:a,isDisabled:t,...s},l)=>{const r=oe({isDisabled:t});return e.jsx(xe,{ref:l,className:j(Z.focusRing,`inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm
        font-bold ring-offset-background transition-all hover:bg-primary-200 hover:text-primary
        aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50
        data-[state=active]:bg-primary data-[state=active]:text-white`,a),...s,...r})});m.displayName="TabsTrigger";const b=d.forwardRef(({className:a,...t},s)=>e.jsx(we,{ref:s,className:j(Z.focusRingVisible,"mt-2",a),...t}));b.displayName="TabsContent";y.__docgenInfo={description:"A set of panels shown one at a time, each picked by its tab. Compose `Tabs` from a\n`TabsList` of `TabsTrigger`s and a `TabsContent` for each; a trigger and its panel share a\n`value`. Built on Radix Tabs, which follows the ARIA tabs pattern. Tabs are activated\nmanually by default: the arrow keys move focus and Enter or Space shows the panel.",methods:[],displayName:"Tabs",props:{value:{required:!1,tsType:{name:"string"},description:"The `value` of the active tab, for a controlled component. Use it with `onValueChange`."},defaultValue:{required:!1,tsType:{name:"string"},description:"The `value` of the tab that's active on first render, for an uncontrolled component."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called with the new tab's `value` when the active tab changes."},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"The direction the tabs are laid out in, which sets the arrow keys that move between them:\nLeft and Right for `horizontal`, Up and Down for `vertical`. It doesn't change the\nlayout. Defaults to `horizontal`."},activationMode:{required:!1,tsType:{name:"union",raw:"'automatic' | 'manual'",elements:[{name:"literal",value:"'automatic'"},{name:"literal",value:"'manual'"}]},description:"How a tab is activated from the keyboard. With `manual`, the arrow keys move focus and\nEnter or Space shows the panel. With `automatic`, a tab's panel shows as soon as the tab\ngets focus. Defaults to `manual` (Radix's default is `automatic`)."}},composes:["ComponentPropsWithoutRef"]};b.__docgenInfo={description:"A tab's panel, shown while the `TabsTrigger` with the same `value` is active.",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:"The `value` of the `TabsTrigger` that shows this panel."},forceMount:{required:!1,tsType:{name:"literal",value:"true"},description:"Keeps the panel mounted and visible while another tab is active, so you can animate it\nor keep its state. Hide it yourself, e.g. with a `data-[state=inactive]:hidden` class."}},composes:["ComponentPropsWithoutRef"]};N.__docgenInfo={description:"The row of tabs. Holds the `TabsTrigger`s and handles arrow-key navigation between them.",methods:[],displayName:"TabsList",props:{loop:{required:!1,tsType:{name:"boolean"},description:"When `true`, the arrow keys wrap from the last tab to the first and back. Defaults to\n`true`."}},composes:["ComponentPropsWithoutRef"]};m.__docgenInfo={description:"A tab. Selecting it shows the `TabsContent` with the same `value`.",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:"A unique value for the tab. The `TabsContent` with the same `value` is the tab's panel."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disables the tab. It stays focusable and is marked `aria-disabled`, so screen reader\nusers can still find it, but it can't be selected."}},composes:["Omit"]};const se=({defaultValue:a="tab1",value:t,...s})=>e.jsxs(y,{className:"w-md",defaultValue:a,value:t,...s,children:[e.jsxs(N,{className:"grid w-full grid-cols-3 border-none bg-base-200 text-black",children:[e.jsx(m,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab1",children:"Favorites"}),e.jsx(m,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab2",children:"Calls"}),e.jsx(m,{className:`hover:bg-white hover:text-primary disabled:pointer-events-none
          data-[state=active]:bg-white data-[state=active]:text-primary-400`,value:"tab3",children:"Contacts"})]}),e.jsxs(b,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab1",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Favorites Tab"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the first tab."})]}),e.jsxs(b,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab2",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Calls Tab"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the second tab."})]}),e.jsxs(b,{className:"mt-2 min-h-40 rounded bg-base-200 p-4",value:"tab3",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Contacts Tab"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Content for the third tab."})]})]});se.__docgenInfo={description:"",methods:[],displayName:"TabsCustomStyling",props:{defaultValue:{defaultValue:{value:"'tab1'",computed:!1},required:!1}}};const Ce=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
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
`,I=({defaultValue:a="account",value:t,...s})=>e.jsxs(y,{className:"w-md",defaultValue:a,value:t,...s,children:[e.jsxs(N,{children:[e.jsx(m,{value:"account",children:"Account"}),e.jsx(m,{value:"password",children:"Password"})]}),e.jsxs(b,{value:"account",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Account Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your account preferences and settings."})]}),e.jsxs(b,{value:"password",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Password Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security preferences."})]})]});I.__docgenInfo={description:"",methods:[],displayName:"TabsDefault",props:{defaultValue:{defaultValue:{value:"'account'",computed:!1},required:!1}}};const Ne=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
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
`,re=({defaultValue:a="active",value:t,...s})=>e.jsxs(y,{className:"w-md",defaultValue:a,value:t,...s,children:[e.jsxs(N,{children:[e.jsx(m,{value:"active",children:"Active Tab"}),e.jsx(m,{isDisabled:!0,value:"disabled",children:"Disabled Tab"})]}),e.jsxs(b,{value:"active",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Active Content"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This tab is currently active."})]}),e.jsxs(b,{value:"disabled",children:[e.jsx("h3",{className:"mb-0 mt-0 text-lg font-medium",children:"Disabled Content"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This content is not accessible."})]})]});re.__docgenInfo={description:"",methods:[],displayName:"TabsWithDisabledTab",props:{defaultValue:{defaultValue:{value:"'active'",computed:!1},required:!1}}};const je=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
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
`,De={title:"Actions & Navigation/Tabs",component:y,parameters:{},argTypes:{value:{control:"text",table:{type:{summary:"string"}}},defaultValue:{control:"text",table:{type:{summary:"string"}}},orientation:{control:"radio",options:["horizontal","vertical"]},activationMode:{control:"radio",options:["manual","automatic"]}}},g={args:{defaultValue:"account",orientation:"horizontal",activationMode:"manual"},render:a=>e.jsx(I,{...a})},f={args:{defaultValue:"account"},render:a=>e.jsx(I,{...a}),parameters:{docs:{source:{code:Ne}}}},T={args:{defaultValue:"active"},render:a=>e.jsx(re,{...a}),parameters:{docs:{source:{code:je}}}},v={args:{defaultValue:"tab1"},render:a=>e.jsx(se,{...a}),parameters:{docs:{source:{code:Ce}}}};var R,k,M,L,q;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultValue: 'account',
    orientation: 'horizontal',
    activationMode: 'manual'
  },
  render: args => <TabsDefault {...args} />
}`,...(M=(k=g.parameters)==null?void 0:k.docs)==null?void 0:M.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:q.description}}};var E,F,W,z,G;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(F=f.parameters)==null?void 0:F.docs)==null?void 0:W.source},description:{story:`The default state of the Tabs component.
Shows a basic tab interface with multiple panels.`,...(G=(z=f.parameters)==null?void 0:z.docs)==null?void 0:G.description}}};var $,O,H,K,B;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(O=T.parameters)==null?void 0:O.docs)==null?void 0:H.source},description:{story:`Tabs with disabled state.
Shows how tabs appear when certain options are not available.`,...(B=(K=T.parameters)==null?void 0:K.docs)==null?void 0:B.description}}};var U,J,Q,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:`Tabs with custom styling.
Demonstrates how to customize the appearance of tabs.`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const _e=["Playground","Default","WithDisabledTab","CustomStyling"],We=Object.freeze(Object.defineProperty({__proto__:null,CustomStyling:v,Default:f,Playground:g,WithDisabledTab:T,__namedExportsOrder:_e,default:De},Symbol.toStringTag,{value:"Module"}));export{g as P,We as T,y as a,N as b,m as c,b as d};
