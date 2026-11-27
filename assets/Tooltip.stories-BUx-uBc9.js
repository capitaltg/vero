import{j as o}from"./jsx-runtime-DSvmvvsx.js";import{B as n}from"./Button-DJBoR_IJ.js";import{T as l,a as p}from"./Tooltip-Cj8dK7Rm.js";const E=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipAlignment = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip align="start" content="This tooltip is start-aligned">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,z=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipDefault = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This is a tooltip">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,N=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipPosition = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This tooltip appears on the right" offset={8} side="right">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,R=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipWithoutArrow = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This tooltip has no arrow" hasArrow={false}>
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,V={title:"Overlays & Feedback/Tooltip",component:l,parameters:{},decorators:[t=>o.jsx(p,{delayDuration:0,children:o.jsx(t,{})})],argTypes:{children:{control:!1},content:{control:"text",table:{type:{summary:"ReactNode"}}},side:{control:"select",options:["top","bottom","left","right"],table:{type:{summary:"top | bottom | left | right"}}},align:{control:"select",options:["start","center","end"],table:{type:{summary:"start | center | end"}}},offset:{control:"number",table:{type:{summary:"number"}}},hasArrow:{control:"boolean",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},open:{control:"boolean",table:{type:{summary:"boolean"}}},defaultOpen:{control:"boolean",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},onOpenChange:{table:{type:{summary:"(open: boolean) => void"}}},zIndex:{control:"number",table:{type:{summary:"number"}}},className:{type:"string"}}},r={args:{content:"This is a tooltip",side:"top",align:"center",offset:2,hasArrow:!0,children:o.jsx(n,{variant:"primary",children:"Hover me"})}},e={args:{content:"This is a tooltip",children:o.jsx(n,{variant:"primary",children:"Hover me"})},render:t=>o.jsx(p,{delayDuration:0,children:o.jsx(l,{...t})}),parameters:{docs:{source:{code:z}}}},i={args:{content:"This tooltip appears on the right",side:"right",offset:8,children:o.jsx(n,{variant:"primary",children:"Hover me"})},render:t=>o.jsx(p,{delayDuration:0,children:o.jsx(l,{...t})}),parameters:{docs:{source:{code:N}}}},s={args:{content:"This tooltip is start-aligned",align:"start",children:o.jsx(n,{variant:"primary",children:"Hover me"})},render:t=>o.jsx(p,{delayDuration:0,children:o.jsx(l,{...t})}),parameters:{docs:{source:{code:E}}}},a={args:{content:"This tooltip has no arrow",hasArrow:!1,children:o.jsx(n,{variant:"primary",children:"Hover me"})},render:t=>o.jsx(p,{delayDuration:0,children:o.jsx(l,{...t})}),parameters:{docs:{source:{code:R}}}};var c,d,m,u,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    side: 'top',
    align: 'center',
    offset: 2,
    hasArrow: true,
    children: <Button variant="primary">Hover me</Button>
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var T,y,g,v,f;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source},description:{story:`The default state of the Tooltip component.
Shows a basic tooltip with text content.`,...(f=(v=e.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var P,b,B,w,x;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source},description:{story:`Tooltip with a custom position.
Demonstrates how to position the tooltip relative to its trigger element.`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var D,j,A,H,C;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(j=s.parameters)==null?void 0:j.docs)==null?void 0:A.source},description:{story:`Tooltip with custom alignment.
Demonstrates how to align the tooltip content differently.`,...(C=(H=s.parameters)==null?void 0:H.docs)==null?void 0:C.description}}};var S,O,_,W,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(O=a.parameters)==null?void 0:O.docs)==null?void 0:_.source},description:{story:`Tooltip without an arrow.
Demonstrates how to disable the arrow pointer on the tooltip.
This can be useful for a cleaner look or when the arrow is not needed.`,...(k=(W=a.parameters)==null?void 0:W.docs)==null?void 0:k.description}}};const F=["Playground","Default","Position","Alignment","WithoutArrow"],q=Object.freeze(Object.defineProperty({__proto__:null,Alignment:s,Default:e,Playground:r,Position:i,WithoutArrow:a,__namedExportsOrder:F,default:V},Symbol.toStringTag,{value:"Module"}));export{r as P,q as T};
