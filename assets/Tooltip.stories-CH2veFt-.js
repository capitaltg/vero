import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{B as p}from"./Button-BwlrdoZf.js";import{T as s,a as n}from"./Tooltip-BIL7UzQi.js";import"./index-D4H_InIO.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./z-index-CmEG1ohp.js";import"./index-DB-GfMvg.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";const C=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipAlignment = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip align="start" content="This tooltip is start-aligned">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,W=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipDefault = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This is a tooltip">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,S=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipPosition = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This tooltip appears on the right" offset={8} side="right">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,O=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipWithoutArrow = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This tooltip has no arrow" hasArrow={false}>
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,oo={title:"Overlays & Feedback/Tooltip",component:s,parameters:{},tags:["autodocs"],decorators:[t=>o.jsx(n,{delayDuration:0,children:o.jsx(t,{})})],argTypes:{content:{control:"text",description:"The tooltip content",table:{type:{summary:"ReactNode"}}},side:{control:"select",options:["top","bottom","left","right"],description:"The side of the trigger element where the tooltip appears",table:{type:{summary:"top | bottom | left | right"}}},align:{control:"select",options:["start","center","end"],description:"The alignment of the tooltip relative to the trigger",table:{type:{summary:"start | center | end"}}},offset:{control:"number",description:"The distance in pixels between the tooltip and the trigger",table:{type:{summary:"number"}}},hasArrow:{control:"boolean",description:"Whether to show an arrow pointing to the trigger",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},open:{control:"boolean",description:"Controlled open state of the tooltip",table:{type:{summary:"boolean"}}},defaultOpen:{control:"boolean",description:"The initial open state when uncontrolled",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onOpenChange:{description:"Callback fired when the open state changes",table:{type:{summary:"(open: boolean) => void"}}},zIndex:{control:"number",description:"Z-index for the tooltip",table:{type:{summary:"number"}}},className:{type:"string",description:"Additional class names to apply to the tooltip"}}},r={args:{content:"This is a tooltip",children:o.jsx(p,{variant:"primary",children:"Hover me"})},render:t=>o.jsx(n,{delayDuration:0,children:o.jsx(s,{...t})}),parameters:{docs:{source:{code:W}}}},e={args:{content:"This tooltip appears on the right",side:"right",offset:8,children:o.jsx(p,{variant:"primary",children:"Hover me"})},render:t=>o.jsx(n,{delayDuration:0,children:o.jsx(s,{...t})}),parameters:{docs:{source:{code:S}}}},i={args:{content:"This tooltip is start-aligned",align:"start",children:o.jsx(p,{variant:"primary",children:"Hover me"})},render:t=>o.jsx(n,{delayDuration:0,children:o.jsx(s,{...t})}),parameters:{docs:{source:{code:C}}}},a={args:{content:"This tooltip has no arrow",hasArrow:!1,children:o.jsx(p,{variant:"primary",children:"Hover me"})},render:t=>o.jsx(n,{delayDuration:0,children:o.jsx(s,{...t})}),parameters:{docs:{source:{code:O}}}};var l,c,d,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <Button variant="primary">Hover me</Button>
  },
  render: args => <TooltipProvider delayDuration={0}>
      <Tooltip {...args} />
    </TooltipProvider>,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:`The default state of the Tooltip component.
Shows a basic tooltip with text content.`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var h,T,g,y,v;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip appears on the right',
    side: 'right',
    offset: 8,
    children: <Button variant="primary">Hover me</Button>
  },
  render: args => <TooltipProvider delayDuration={0}>
      <Tooltip {...args} />
    </TooltipProvider>,
  parameters: {
    docs: {
      source: {
        code: sourceCodePosition
      }
    }
  }
}`,...(g=(T=e.parameters)==null?void 0:T.docs)==null?void 0:g.source},description:{story:`Tooltip with a custom position.
Demonstrates how to position the tooltip relative to its trigger element.`,...(v=(y=e.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var f,w,b,x,B;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip is start-aligned',
    align: 'start',
    children: <Button variant="primary">Hover me</Button>
  },
  render: args => <TooltipProvider delayDuration={0}>
      <Tooltip {...args} />
    </TooltipProvider>,
  parameters: {
    docs: {
      source: {
        code: sourceCodeAlignment
      }
    }
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source},description:{story:`Tooltip with custom alignment.
Demonstrates how to align the tooltip content differently.`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.description}}};var P,D,j,A,H;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip has no arrow',
    hasArrow: false,
    children: <Button variant="primary">Hover me</Button>
  },
  render: args => <TooltipProvider delayDuration={0}>
      <Tooltip {...args} />
    </TooltipProvider>,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithoutArrow
      }
    }
  }
}`,...(j=(D=a.parameters)==null?void 0:D.docs)==null?void 0:j.source},description:{story:`Tooltip without an arrow.
Demonstrates how to disable the arrow pointer on the tooltip.
This can be useful for a cleaner look or when the arrow is not needed.`,...(H=(A=a.parameters)==null?void 0:A.docs)==null?void 0:H.description}}};const to=["Default","Position","Alignment","WithoutArrow"];export{i as Alignment,r as Default,e as Position,a as WithoutArrow,to as __namedExportsOrder,oo as default};
