import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{P as u,a as h,b as d}from"./Popover-BuTVlq4x.js";import{B as m}from"./Button-DJBoR_IJ.js";import{D as X,a as Y,b as Z,e as $,f as ee,g as oe,h as re}from"./DialogTitle-D9qJLO0z.js";import{r as f}from"./index-B0WjJBI_.js";import{F as x}from"./FormItem-w-KWj7d7.js";import{I as te}from"./Input-BjeEkKn3.js";import{C as se}from"./chevron-down-CLkoBCE4.js";import{C as ae}from"./check-C42IfL-F.js";const M=({hasArrow:o=!0,align:r="start",className:t="w-80",...s})=>e.jsxs(u,{children:[e.jsx(h,{asChild:!0,children:e.jsx(m,{variant:"input",children:"Open Popover"})}),e.jsx(d,{align:r,className:t,hasArrow:o,...s,children:e.jsx("p",{className:"text-sm",children:"This popover is aligned to the start."})})]});M.__docgenInfo={description:"",methods:[],displayName:"PopoverCustomPosition",props:{hasArrow:{defaultValue:{value:"true",computed:!1},required:!1},align:{defaultValue:{value:"'start'",computed:!1},required:!1},className:{defaultValue:{value:"'w-80'",computed:!1},required:!1}}};const ne=`import { Button } from '@/components/Button';
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
`,P=[{name:"Gray",hex:"#6b7280"},{name:"Red",hex:"#dc2626"},{name:"Orange",hex:"#ea580c"},{name:"Green",hex:"#16a34a"},{name:"Blue",hex:"#2563eb"},{name:"Purple",hex:"#9333ea"}],U=({align:o="start",className:r="w-auto",...t})=>{const[s,K]=f.useState(P[4]),[Q,v]=f.useState(!1);return e.jsxs(X,{children:[e.jsx(Y,{asChild:!0,children:e.jsx(m,{variant:"primary",children:"New Label"})}),e.jsxs(Z,{children:[e.jsxs($,{children:[e.jsx(ee,{children:"Create Label"}),e.jsx(oe,{children:"Labels help you group and filter related issues."})]}),e.jsx(x,{label:"Name",children:e.jsx(te,{id:"label-name",placeholder:"e.g. Needs review"})}),e.jsxs(u,{open:Q,onOpenChange:v,children:[e.jsx(x,{label:"Color",children:e.jsx(h,{asChild:!0,id:"label-color",children:e.jsxs(m,{className:"w-fit gap-2",variant:"input",children:[e.jsx("span",{className:"h-4 w-4 rounded-full",style:{backgroundColor:s.hex}}),s.name,e.jsx(se,{className:"h-4 w-4 opacity-50"})]})})}),e.jsx(d,{align:o,className:r,...t,children:e.jsx("div",{className:"grid grid-cols-6 gap-2",children:P.map(a=>e.jsx("button",{"aria-label":a.name,"aria-pressed":a.name===s.name,className:"flex h-7 w-7 items-center justify-center rounded-full text-white",style:{backgroundColor:a.hex},type:"button",onClick:()=>{K(a),v(!1)},children:a.name===s.name?e.jsx(ae,{className:"h-4 w-4"}):null},a.name))})})]}),e.jsx(re,{children:e.jsx(m,{type:"submit",variant:"primary",children:"Create Label"})})]})]})};U.__docgenInfo={description:"",methods:[],displayName:"PopoverInDialog",props:{align:{defaultValue:{value:"'start'",computed:!1},required:!1},className:{defaultValue:{value:"'w-auto'",computed:!1},required:!1}}};const ie=`import { Button } from '@/components/Button';
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
`,g=({hasArrow:o=!0,className:r="w-80",...t})=>e.jsxs(u,{children:[e.jsx(h,{asChild:!0,children:e.jsx(m,{variant:"input",children:"Open Popover"})}),e.jsx(d,{className:r,hasArrow:o,...t,children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"mb-0 mt-0 font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{className:"text-sm",htmlFor:"width",children:"Width"}),e.jsx("input",{className:"col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm",defaultValue:"100%",id:"width"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{className:"text-sm",htmlFor:"height",children:"Height"}),e.jsx("input",{className:"col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm",defaultValue:"25px",id:"height"})]})]})]})})]});g.__docgenInfo={description:"",methods:[],displayName:"PopoverWithArrow",props:{hasArrow:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:"'w-80'",computed:!1},required:!1}}};const le=`import { Button } from '@/components/Button';
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
`,J=({hasArrow:o=!1,className:r="w-80",...t})=>e.jsxs(u,{children:[e.jsx(h,{asChild:!0,children:e.jsx(m,{variant:"input",children:"Open Popover"})}),e.jsx(d,{className:r,hasArrow:o,...t,children:e.jsx("p",{className:"text-sm",children:"This is a simple popover without an arrow."})})]});J.__docgenInfo={description:"",methods:[],displayName:"PopoverWithoutArrow",props:{hasArrow:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"'w-80'",computed:!1},required:!1}}};const pe=`import { Button } from '@/components/Button';
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
`,ce={title:"Overlays & Feedback/Popover",component:d,parameters:{},argTypes:{hasArrow:{control:"boolean",table:{type:{summary:"boolean"}}},side:{control:"select",options:["top","bottom","left","right"],table:{defaultValue:{summary:"bottom"},type:{summary:"top | bottom | left | right"}}},align:{control:"select",options:["start","center","end"],table:{defaultValue:{summary:"center"},type:{summary:"start | center | end"}}},sideOffset:{control:"number",table:{defaultValue:{summary:"4"},type:{summary:"number"}}},zIndex:{control:"number",table:{type:{summary:"number"}}},className:{type:"string",description:"Additional class names to apply to the popover content"}}},n={args:{hasArrow:!0,side:"bottom",align:"center",sideOffset:4},render:o=>e.jsx(g,{...o})},i={args:{hasArrow:!0},render:o=>e.jsx(g,{...o}),parameters:{docs:{source:{code:le}}}},l={args:{hasArrow:!1},render:o=>e.jsx(J,{...o}),parameters:{docs:{source:{code:pe}}}},p={args:{hasArrow:!0,align:"start"},render:o=>e.jsx(M,{...o}),parameters:{docs:{source:{code:ne}}}},c={render:o=>e.jsx(U,{...o}),parameters:{docs:{source:{code:ie}}}};var w,C,b,N,y;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    hasArrow: true,
    side: 'bottom',
    align: 'center',
    sideOffset: 4
  },
  render: args => <PopoverWithArrow {...args} />
}`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(y=(N=n.parameters)==null?void 0:N.docs)==null?void 0:y.description}}};var j,D,A,T,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source},description:{story:`A popover with an arrow pointer.
Demonstrates the default popover with a visual indicator pointing to its trigger element.
This example includes form elements to show how the popover can contain complex content.`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};var B,O,W,F,S;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(O=l.parameters)==null?void 0:O.docs)==null?void 0:W.source},description:{story:`A basic popover without an arrow pointer.
Shows a simpler version of the popover for when a visual indicator isn't needed.`,...(S=(F=l.parameters)==null?void 0:F.docs)==null?void 0:S.description}}};var V,k,_,q,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(k=p.parameters)==null?void 0:k.docs)==null?void 0:_.source},description:{story:`A popover with custom positioning.
Demonstrates how to control the alignment of the popover relative to its trigger.`,...(L=(q=p.parameters)==null?void 0:q.docs)==null?void 0:L.description}}};var H,E,G,R,z;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <PopoverInDialog {...args} />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeInDialog
      }
    }
  }
}`,...(G=(E=c.parameters)==null?void 0:E.docs)==null?void 0:G.source},description:{story:`A popover inside a modal Dialog, used as a color picker in a "Create Label" form.
The popover renders outside the dialog, yet its swatches stay clickable even though the dialog
disables pointer events on the rest of the page.`,...(z=(R=c.parameters)==null?void 0:R.docs)==null?void 0:z.description}}};const me=["Playground","WithArrow","WithoutArrow","CustomPosition","InDialog"],Ce=Object.freeze(Object.defineProperty({__proto__:null,CustomPosition:p,InDialog:c,Playground:n,WithArrow:i,WithoutArrow:l,__namedExportsOrder:me,default:ce},Symbol.toStringTag,{value:"Module"}));export{Ce as P,n as a};
