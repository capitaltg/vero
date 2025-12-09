import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{B as t}from"./Button-BwlrdoZf.js";import{T as n,a}from"./Tooltip-DxcvpkUa.js";import"./index-D4H_InIO.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-CU3My8Oi.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";import"./styles-Bqt2ynIu.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";import"./z-index-CmEG1ohp.js";import"./index-DB-GfMvg.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-Ak5Mws-w.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-DDORxvzF.js";const _=()=>o.jsx(n,{delayDuration:0,children:o.jsx(a,{align:"start",content:"This tooltip is start-aligned",children:o.jsx(t,{variant:"primary",children:"Hover me"})})});_.__docgenInfo={description:"",methods:[],displayName:"TooltipAlignment"};const I=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipAlignment = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip align="start" content="This tooltip is start-aligned">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,C=()=>o.jsx(n,{delayDuration:0,children:o.jsx(a,{content:"This is a tooltip",children:o.jsx(t,{variant:"primary",children:"Hover me"})})});C.__docgenInfo={description:"",methods:[],displayName:"TooltipDefault"};const N=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipDefault = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This is a tooltip">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,W=()=>o.jsx(n,{delayDuration:0,children:o.jsx(a,{content:"This tooltip appears on the right",offset:8,side:"right",children:o.jsx(t,{variant:"primary",children:"Hover me"})})});W.__docgenInfo={description:"",methods:[],displayName:"TooltipPosition"};const k=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipPosition = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This tooltip appears on the right" offset={8} side="right">
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,S=()=>o.jsx(n,{delayDuration:0,children:o.jsx(a,{content:"This tooltip has no arrow",hasArrow:!1,children:o.jsx(t,{variant:"primary",children:"Hover me"})})});S.__docgenInfo={description:"",methods:[],displayName:"TooltipWithoutArrow"};const E=`import { Button } from '@/components/Button';
import { Tooltip, TooltipProvider } from '../src/Tooltip';

export const TooltipWithoutArrow = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip content="This tooltip has no arrow" hasArrow={false}>
      <Button variant="primary">Hover me</Button>
    </Tooltip>
  </TooltipProvider>
);
`,io={title:"Overlays & Feedback/Tooltip",component:a,parameters:{},tags:["autodocs"],decorators:[b=>o.jsx(n,{delayDuration:0,children:o.jsx(b,{})})]},r={args:{content:"This is a tooltip",children:o.jsx(t,{variant:"primary",children:"Hover me"})},render:()=>o.jsx(C,{}),parameters:{docs:{source:{code:N}}}},e={args:{content:"This tooltip appears on the right",side:"right",offset:8,children:o.jsx(t,{variant:"primary",children:"Hover me"})},render:()=>o.jsx(W,{}),parameters:{docs:{source:{code:k}}}},i={args:{content:"This tooltip is start-aligned",align:"start",children:o.jsx(t,{variant:"primary",children:"Hover me"})},render:()=>o.jsx(_,{}),parameters:{docs:{source:{code:I}}}},s={args:{content:"This tooltip has no arrow",hasArrow:!1,children:o.jsx(t,{variant:"primary",children:"Hover me"})},render:()=>o.jsx(S,{}),parameters:{docs:{source:{code:E}}}};var p,c,l,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <Button variant="primary">Hover me</Button>
  },
  render: () => <TooltipDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:`The default state of the Tooltip component.
Shows a basic tooltip with text content.`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var h,u,T,v,g;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip appears on the right',
    side: 'right',
    offset: 8,
    children: <Button variant="primary">Hover me</Button>
  },
  render: () => <TooltipPosition />,
  parameters: {
    docs: {
      source: {
        code: sourceCodePosition
      }
    }
  }
}`,...(T=(u=e.parameters)==null?void 0:u.docs)==null?void 0:T.source},description:{story:`Tooltip with a custom position.
Demonstrates how to position the tooltip relative to its trigger element.`,...(g=(v=e.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var f,y,x,w,B;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip is start-aligned',
    align: 'start',
    children: <Button variant="primary">Hover me</Button>
  },
  render: () => <TooltipAlignment />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeAlignment
      }
    }
  }
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:`Tooltip with custom alignment.
Demonstrates how to align the tooltip content differently.`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};var j,P,A,D,H;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip has no arrow',
    hasArrow: false,
    children: <Button variant="primary">Hover me</Button>
  },
  render: () => <TooltipWithoutArrow />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithoutArrow
      }
    }
  }
}`,...(A=(P=s.parameters)==null?void 0:P.docs)==null?void 0:A.source},description:{story:`Tooltip without an arrow.
Demonstrates how to disable the arrow pointer on the tooltip.
This can be useful for a cleaner look or when the arrow is not needed.`,...(H=(D=s.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};const so=["Default","Position","Alignment","WithoutArrow"];export{i as Alignment,r as Default,e as Position,s as WithoutArrow,so as __namedExportsOrder,io as default};
