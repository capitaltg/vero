import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{B as n}from"./Button-BinwIYAK.js";import{P as d,a as u,b as c}from"./Popover-CVpwtGnK.js";import{D as z,a as Z,b as J,c as K,d as M,e as Q,f as U}from"./DialogTitle-D6b3OGep.js";import{F as g}from"./FormItem-5sMtFHLA.js";import{r as v}from"./index-B0WjJBI_.js";import{I as X}from"./Input-ij4_0GDl.js";import{C as Y}from"./chevron-down-CLkoBCE4.js";import{C as $}from"./check-C42IfL-F.js";import"./useAriaDisabled-BVkOu7OW.js";import"./utils-CU3My8Oi.js";import"./index-BOrrHd12.js";import"./index-EiwPuDyL.js";import"./constants-D9UEAID0.js";import"./styles-CafxXXJc.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-BeEkWZrd.js";import"./floating-ui.react-dom-qHB9r-5Q.js";import"./index-KklXjS-Z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";import"./index-B5oA2Zbg.js";import"./index-DKzZmXCh.js";import"./index-CoRj-x2w.js";import"./index-OiR64VEf.js";import"./index-BllD4pgw.js";import"./index-Cdcq5Wwr.js";import"./index-DAhqxkbx.js";import"./index-DBA0bpW4.js";import"./index-BHtEszHx.js";import"./index-CoMQ7c9D.js";import"./x-DEnjg7Le.js";import"./Label-BalUMPW8.js";const q=({hasArrow:o=!0,align:r="start",className:t="w-80",...a})=>e.jsxs(d,{children:[e.jsx(u,{asChild:!0,children:e.jsx(n,{variant:"input",children:"Open Popover"})}),e.jsx(c,{align:r,className:t,hasArrow:o,...a,children:e.jsx("p",{className:"text-sm",children:"This popover is aligned to the start."})})]});q.__docgenInfo={description:"",methods:[],displayName:"PopoverCustomPosition",props:{hasArrow:{defaultValue:{value:"true",computed:!1},required:!1},align:{defaultValue:{value:"'start'",computed:!1},required:!1},className:{defaultValue:{value:"'w-80'",computed:!1},required:!1}}};const ee=`import { Button } from '@/components/Button';
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
`,f=[{name:"Gray",hex:"#6b7280"},{name:"Red",hex:"#dc2626"},{name:"Orange",hex:"#ea580c"},{name:"Green",hex:"#16a34a"},{name:"Blue",hex:"#2563eb"},{name:"Purple",hex:"#9333ea"}],L=({align:o="start",className:r="w-auto",...t})=>{const[a,E]=v.useState(f[4]),[R,h]=v.useState(!1);return e.jsxs(z,{children:[e.jsx(Z,{asChild:!0,children:e.jsx(n,{variant:"primary",children:"New Label"})}),e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(M,{children:"Create Label"}),e.jsx(Q,{children:"Labels help you group and filter related issues."})]}),e.jsx(g,{label:"Name",children:e.jsx(X,{id:"label-name",placeholder:"e.g. Needs review"})}),e.jsxs(d,{open:R,onOpenChange:h,children:[e.jsx(g,{label:"Color",children:e.jsx(u,{asChild:!0,id:"label-color",children:e.jsxs(n,{className:"w-fit gap-2",variant:"input",children:[e.jsx("span",{className:"h-4 w-4 rounded-full",style:{backgroundColor:a.hex}}),a.name,e.jsx(Y,{className:"h-4 w-4 opacity-50"})]})})}),e.jsx(c,{align:o,className:r,...t,children:e.jsx("div",{className:"grid grid-cols-6 gap-2",children:f.map(s=>e.jsx("button",{"aria-label":s.name,"aria-pressed":s.name===a.name,className:"flex h-7 w-7 items-center justify-center rounded-full text-white",style:{backgroundColor:s.hex},type:"button",onClick:()=>{E(s),h(!1)},children:s.name===a.name?e.jsx($,{className:"h-4 w-4"}):null},s.name))})})]}),e.jsx(U,{children:e.jsx(n,{type:"submit",variant:"primary",children:"Create Label"})})]})]})};L.__docgenInfo={description:"",methods:[],displayName:"PopoverInDialog",props:{align:{defaultValue:{value:"'start'",computed:!1},required:!1},className:{defaultValue:{value:"'w-auto'",computed:!1},required:!1}}};const oe=`import { Button } from '@/components/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/Dialog';
import { FormItem } from '@/components/FormItem';
import { Input } from '@/components/Input';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../src/Popover';
import { PopoverContentProps } from '../types';

const colors = [
  { name: 'Gray', hex: '#6b7280' },
  { name: 'Red', hex: '#dc2626' },
  { name: 'Orange', hex: '#ea580c' },
  { name: 'Green', hex: '#16a34a' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Purple', hex: '#9333ea' },
];

export const PopoverInDialog = ({
  align = 'start',
  className = 'w-auto',
  ...args
}: Partial<PopoverContentProps>) => {
  const [color, setColor] = useState(colors[4]);
  const [colorOpen, setColorOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">New Label</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Label</DialogTitle>
          <DialogDescription>Labels help you group and filter related issues.</DialogDescription>
        </DialogHeader>
        <FormItem label="Name">
          <Input id="label-name" placeholder="e.g. Needs review" />
        </FormItem>
        <Popover open={colorOpen} onOpenChange={setColorOpen}>
          <FormItem label="Color">
            <PopoverTrigger asChild id="label-color">
              <Button className="w-fit gap-2" variant="input">
                <span className="h-4 w-4 rounded-full" style={{ backgroundColor: color.hex }} />
                {color.name}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
          </FormItem>
          <PopoverContent align={align} className={className} {...args}>
            <div className="grid grid-cols-6 gap-2">
              {colors.map(option => (
                <button
                  key={option.name}
                  aria-label={option.name}
                  aria-pressed={option.name === color.name}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: option.hex }}
                  type="button"
                  onClick={() => {
                    setColor(option);
                    setColorOpen(false);
                  }}
                >
                  {option.name === color.name ? <Check className="h-4 w-4" /> : null}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <DialogFooter>
          <Button type="submit" variant="primary">
            Create Label
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
`,H=({hasArrow:o=!0,className:r="w-80",...t})=>e.jsxs(d,{children:[e.jsx(u,{asChild:!0,children:e.jsx(n,{variant:"input",children:"Open Popover"})}),e.jsx(c,{className:r,hasArrow:o,...t,children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"mb-0 mt-0 font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{className:"text-sm",htmlFor:"width",children:"Width"}),e.jsx("input",{className:"col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm",defaultValue:"100%",id:"width"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{className:"text-sm",htmlFor:"height",children:"Height"}),e.jsx("input",{className:"col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm",defaultValue:"25px",id:"height"})]})]})]})})]});H.__docgenInfo={description:"",methods:[],displayName:"PopoverWithArrow",props:{hasArrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:"'w-80'",computed:!1},required:!1}}};const re=`import { Button } from '@/components/Button';
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
          <h4 className="mb-0 mt-0 font-medium leading-none">Dimensions</h4>
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
`,G=({hasArrow:o=!1,className:r="w-80",...t})=>e.jsxs(d,{children:[e.jsx(u,{asChild:!0,children:e.jsx(n,{variant:"input",children:"Open Popover"})}),e.jsx(c,{className:r,hasArrow:o,...t,children:e.jsx("p",{className:"text-sm",children:"This is a simple popover without an arrow."})})]});G.__docgenInfo={description:"",methods:[],displayName:"PopoverWithoutArrow",props:{hasArrow:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"'w-80'",computed:!1},required:!1}}};const te=`import { Button } from '@/components/Button';
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
`,_e={title:"Overlays & Feedback/Popover",component:c,parameters:{},tags:["autodocs"],argTypes:{hasArrow:{control:"boolean",description:"Whether to show an arrow pointing to the trigger",table:{type:{summary:"boolean"}}},side:{control:"select",options:["top","bottom","left","right"],description:"The side of the trigger element where the popover appears",table:{defaultValue:{summary:"bottom"},type:{summary:"top | bottom | left | right"}}},align:{control:"select",options:["start","center","end"],description:"The alignment of the popover relative to the trigger",table:{defaultValue:{summary:"center"},type:{summary:"start | center | end"}}},sideOffset:{control:"number",description:"The distance in pixels between the popover and the trigger",table:{defaultValue:{summary:"4"},type:{summary:"number"}}},zIndex:{control:"number",description:"Z-index for the popover",table:{type:{summary:"number"}}},className:{type:"string",description:"Additional class names to apply to the popover content"}}},i={args:{hasArrow:!0},render:o=>e.jsx(H,{...o}),parameters:{docs:{source:{code:re}}}},l={args:{hasArrow:!1},render:o=>e.jsx(G,{...o}),parameters:{docs:{source:{code:te}}}},p={args:{hasArrow:!0,align:"start"},render:o=>e.jsx(q,{...o}),parameters:{docs:{source:{code:ee}}}},m={render:o=>e.jsx(L,{...o}),parameters:{docs:{source:{code:oe}}}};var x,P,w,C,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source},description:{story:`A popover with an arrow pointer.
Demonstrates the default popover with a visual indicator pointing to its trigger element.
This example includes form elements to show how the popover can contain complex content.`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.description}}};var N,y,j,D,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:`A basic popover without an arrow pointer.
Shows a simpler version of the popover for when a visual indicator isn't needed.`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.description}}};var T,I,B,O,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(I=p.parameters)==null?void 0:I.docs)==null?void 0:B.source},description:{story:`A popover with custom positioning.
Demonstrates how to control the alignment of the popover relative to its trigger.`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.description}}};var F,V,k,S,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <PopoverInDialog {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeInDialog
      }
    }
  }
}`,...(k=(V=m.parameters)==null?void 0:V.docs)==null?void 0:k.source},description:{story:`A popover inside a modal Dialog, used as a color picker in a "Create Label" form.
The popover renders outside the dialog, yet its swatches stay clickable even though the dialog
disables pointer events on the rest of the page.`,...(_=(S=m.parameters)==null?void 0:S.docs)==null?void 0:_.description}}};const qe=["WithArrow","WithoutArrow","CustomPosition","InDialog"];export{p as CustomPosition,m as InDialog,i as WithArrow,l as WithoutArrow,qe as __namedExportsOrder,_e as default};
