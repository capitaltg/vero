import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{P as s,a as i,b as n}from"./Popover-DBV-TgdM.js";import{B as a}from"./Button-Dp8g_T52.js";import"./index-D4H_InIO.js";import"./styles-BasBkTzl.js";import"./utils-CU3My8Oi.js";import"./z-index-CmEG1ohp.js";import"./index-DB-GfMvg.js";import"./index-D8GmRN1t.js";import"./index-CWZjxdH8.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./index-BnJEnLsy.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";import"./useAriaDisabled-DHTVgRPt.js";import"./constants-CVEkm9yF.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";const f=()=>o.jsxs(s,{children:[o.jsx(i,{asChild:!0,children:o.jsx(a,{variant:"input",children:"Open Popover"})}),o.jsx(n,{hasArrow:!0,align:"start",className:"w-80",children:o.jsx("p",{className:"text-sm",children:"This popover is aligned to the start."})})]});f.__docgenInfo={description:"",methods:[],displayName:"PopoverCustomPosition"};const W=`import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';

export const PopoverCustomPosition = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent hasArrow align="start" className="w-80">
      <p className="text-sm">This popover is aligned to the start.</p>
    </PopoverContent>
  </Popover>
);
`,A=()=>o.jsxs(s,{children:[o.jsx(i,{asChild:!0,children:o.jsx(a,{variant:"input",children:"Open Popover"})}),o.jsx(n,{hasArrow:!0,className:"w-80",children:o.jsxs("div",{className:"grid gap-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),o.jsxs("div",{className:"grid gap-2",children:[o.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[o.jsx("label",{className:"text-sm",htmlFor:"width",children:"Width"}),o.jsx("input",{className:"col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm",defaultValue:"100%",id:"width"})]}),o.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[o.jsx("label",{className:"text-sm",htmlFor:"height",children:"Height"}),o.jsx("input",{className:"col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm",defaultValue:"25px",id:"height"})]})]})]})})]});A.__docgenInfo={description:"",methods:[],displayName:"PopoverWithArrow"};const T=`import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';

export const PopoverWithArrow = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent hasArrow className="w-80">
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="text-sm" htmlFor="width">
              Width
            </label>
            <input
              className="col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm"
              defaultValue="100%"
              id="width"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="text-sm" htmlFor="height">
              Height
            </label>
            <input
              className="col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm"
              defaultValue="25px"
              id="height"
            />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);
`,b=()=>o.jsxs(s,{children:[o.jsx(i,{asChild:!0,children:o.jsx(a,{variant:"input",children:"Open Popover"})}),o.jsx(n,{className:"w-80",children:o.jsx("p",{className:"text-sm",children:"This is a simple popover without an arrow."})})]});b.__docgenInfo={description:"",methods:[],displayName:"PopoverWithoutArrow"};const B=`import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';

export const PopoverWithoutArrow = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <p className="text-sm">This is a simple popover without an arrow.</p>
    </PopoverContent>
  </Popover>
);
`,oo={title:"Overlays & Feedback/Popover",component:s,parameters:{},tags:["autodocs"]},e={render:()=>o.jsx(A,{}),parameters:{docs:{source:{code:T}}}},r={render:()=>o.jsx(b,{}),parameters:{docs:{source:{code:B}}}},t={render:()=>o.jsx(f,{}),parameters:{docs:{source:{code:W}}}};var p,d,m,c,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <PopoverWithArrow />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithArrow
      }
    }
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:`A popover with an arrow pointer.
Demonstrates the default popover with a visual indicator pointing to its trigger element.
This example includes form elements to show how the popover can contain complex content.`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};var h,u,v,g,P;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <PopoverWithoutArrow />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithoutArrow
      }
    }
  }
}`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:`A basic popover without an arrow pointer.
Shows a simpler version of the popover for when a visual indicator isn't needed.`,...(P=(g=r.parameters)==null?void 0:g.docs)==null?void 0:P.description}}};var x,w,N,j,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <PopoverCustomPosition />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPosition
      }
    }
  }
}`,...(N=(w=t.parameters)==null?void 0:w.docs)==null?void 0:N.source},description:{story:`A popover with custom positioning.
Demonstrates how to control the alignment of the popover relative to its trigger.`,...(C=(j=t.parameters)==null?void 0:j.docs)==null?void 0:C.description}}};const eo=["WithArrow","WithoutArrow","CustomPosition"];export{t as CustomPosition,e as WithArrow,r as WithoutArrow,eo as __namedExportsOrder,oo as default};
