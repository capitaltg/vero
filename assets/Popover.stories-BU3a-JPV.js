import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as p}from"./Button-BwlrdoZf.js";import{P as m,a as l,b as n}from"./Popover-OaSsjRLr.js";import"./index-D4H_InIO.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./z-index-CmEG1ohp.js";import"./index-DB-GfMvg.js";import"./index-CWZjxdH8.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./index-DonjGF9j.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";import"./index-DLaBReRc.js";const y=({hasArrow:r=!0,align:o="start",className:t="w-80",...B})=>e.jsxs(m,{children:[e.jsx(l,{asChild:!0,children:e.jsx(p,{variant:"input",children:"Open Popover"})}),e.jsx(n,{align:o,className:t,hasArrow:r,...B,children:e.jsx("p",{className:"text-sm",children:"This popover is aligned to the start."})})]});y.__docgenInfo={description:"",methods:[],displayName:"PopoverCustomPosition",props:{hasArrow:{defaultValue:{value:"true",computed:!1},required:!1},align:{defaultValue:{value:"'start'",computed:!1},required:!1},className:{defaultValue:{value:"'w-80'",computed:!1},required:!1}}};const V=`import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';
import { PopoverContentProps } from '../types';

export const PopoverCustomPosition = ({
  hasArrow = true,
  align = 'start',
  className = 'w-80',
  ...args
}: Partial<PopoverContentProps>) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent align={align} className={className} hasArrow={hasArrow} {...args}>
      <p className="text-sm">This popover is aligned to the start.</p>
    </PopoverContent>
  </Popover>
);
`,T=({hasArrow:r=!0,className:o="w-80",...t})=>e.jsxs(m,{children:[e.jsx(l,{asChild:!0,children:e.jsx(p,{variant:"input",children:"Open Popover"})}),e.jsx(n,{className:o,hasArrow:r,...t,children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{className:"text-sm",htmlFor:"width",children:"Width"}),e.jsx("input",{className:"col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm",defaultValue:"100%",id:"width"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{className:"text-sm",htmlFor:"height",children:"Height"}),e.jsx("input",{className:"col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm",defaultValue:"25px",id:"height"})]})]})]})})]});T.__docgenInfo={description:"",methods:[],displayName:"PopoverWithArrow",props:{hasArrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:"'w-80'",computed:!1},required:!1}}};const O=`import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';
import { PopoverContentProps } from '../types';

export const PopoverWithArrow = ({
  hasArrow = true,
  className = 'w-80',
  ...args
}: Partial<PopoverContentProps>) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent className={className} hasArrow={hasArrow} {...args}>
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
`,W=({hasArrow:r=!1,className:o="w-80",...t})=>e.jsxs(m,{children:[e.jsx(l,{asChild:!0,children:e.jsx(p,{variant:"input",children:"Open Popover"})}),e.jsx(n,{className:o,hasArrow:r,...t,children:e.jsx("p",{className:"text-sm",children:"This is a simple popover without an arrow."})})]});W.__docgenInfo={description:"",methods:[],displayName:"PopoverWithoutArrow",props:{hasArrow:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"'w-80'",computed:!1},required:!1}}};const _=`import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';
import { PopoverContentProps } from '../types';

export const PopoverWithoutArrow = ({
  hasArrow = false,
  className = 'w-80',
  ...args
}: Partial<PopoverContentProps>) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="input">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent className={className} hasArrow={hasArrow} {...args}>
      <p className="text-sm">This is a simple popover without an arrow.</p>
    </PopoverContent>
  </Popover>
);
`,se={title:"Overlays & Feedback/Popover",component:n,parameters:{},tags:["autodocs"],argTypes:{hasArrow:{control:"boolean",description:"Whether to show an arrow pointing to the trigger",table:{type:{summary:"boolean"}}},side:{control:"select",options:["top","bottom","left","right"],description:"The side of the trigger element where the popover appears",table:{defaultValue:{summary:"bottom"},type:{summary:"top | bottom | left | right"}}},align:{control:"select",options:["start","center","end"],description:"The alignment of the popover relative to the trigger",table:{defaultValue:{summary:"center"},type:{summary:"start | center | end"}}},sideOffset:{control:"number",description:"The distance in pixels between the popover and the trigger",table:{defaultValue:{summary:"4"},type:{summary:"number"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},className:{type:"string",description:"Additional class names to apply to the popover content"}}},s={args:{hasArrow:!0},render:r=>e.jsx(T,{...r}),parameters:{docs:{source:{code:O}}}},a={args:{hasArrow:!1},render:r=>e.jsx(W,{...r}),parameters:{docs:{source:{code:_}}}},i={args:{hasArrow:!0,align:"start"},render:r=>e.jsx(y,{...r}),parameters:{docs:{source:{code:V}}}};var d,c,u,h,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    hasArrow: true
  },
  render: args => <PopoverWithArrow {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithArrow
      }
    }
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source},description:{story:`A popover with an arrow pointer.
Demonstrates the default popover with a visual indicator pointing to its trigger element.
This example includes form elements to show how the popover can contain complex content.`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var v,P,f,w,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    hasArrow: false
  },
  render: args => <PopoverWithoutArrow {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithoutArrow
      }
    }
  }
}`,...(f=(P=a.parameters)==null?void 0:P.docs)==null?void 0:f.source},description:{story:`A basic popover without an arrow pointer.
Shows a simpler version of the popover for when a visual indicator isn't needed.`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var N,A,b,C,j;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    hasArrow: true,
    align: 'start'
  },
  render: args => <PopoverCustomPosition {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeCustomPosition
      }
    }
  }
}`,...(b=(A=i.parameters)==null?void 0:A.docs)==null?void 0:b.source},description:{story:`A popover with custom positioning.
Demonstrates how to control the alignment of the popover relative to its trigger.`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};const ae=["WithArrow","WithoutArrow","CustomPosition"];export{i as CustomPosition,s as WithArrow,a as WithoutArrow,ae as __namedExportsOrder,se as default};
