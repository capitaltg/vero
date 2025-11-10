import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{B as c}from"./Button-YgMv2nag.js";import{T as p,a as E}from"./Tooltip-Dssk17hS.js";import"./index-D4H_InIO.js";import"./useAriaDisabled-DHTVgRPt.js";import"./utils-l21BANrb.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-BFjZK9t2.js";import"./styles-hHSuIYOZ.js";import"./index-DKzzznqW.js";import"./z-index-CmEG1ohp.js";import"./index-DwviEg3j.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DsCZslo7.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";const Z={title:"Overlays & Feedback/Tooltip",component:p,parameters:{},tags:["autodocs"],decorators:[o=>t.jsx(E,{delayDuration:0,children:t.jsx(o,{})})]},i={args:{content:"This is a tooltip",children:t.jsx(c,{variant:"primary",children:"Hover me"})},render:({content:o,children:r})=>t.jsx(p,{content:o,children:r})},n={args:{content:"This tooltip appears on the right",side:"right",offset:8,children:t.jsx(c,{variant:"primary",children:"Hover me"})},render:({content:o,side:r,offset:e,children:k})=>t.jsx(p,{content:o,side:r,offset:e,children:k})},s={args:{content:"This tooltip is start-aligned",align:"start",children:t.jsx(c,{variant:"primary",children:"Hover me"})},render:({content:o,align:r,children:e})=>t.jsx(p,{content:o,align:r,children:e})},a={args:{content:"This tooltip has no arrow",hasArrow:!1,children:t.jsx(c,{variant:"primary",children:"Hover me"})},render:({content:o,hasArrow:r,children:e})=>t.jsx(p,{content:o,hasArrow:r,children:e})};var l,m,d,h,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <Button variant="primary">Hover me</Button>
  },
  render: ({
    content,
    children
  }) => <Tooltip content={content}>{children}</Tooltip>
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source},description:{story:`The default state of the Tooltip component.
Shows a basic tooltip with text content.`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};var g,T,f,w,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip appears on the right',
    side: 'right',
    offset: 8,
    children: <Button variant="primary">Hover me</Button>
  },
  render: ({
    content,
    side,
    offset,
    children
  }) => <Tooltip content={content} side={side} offset={offset}>
      {children}
    </Tooltip>
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source},description:{story:`Tooltip with a custom position.
Demonstrates how to position the tooltip relative to its trigger element.`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.description}}};var x,y,j,B,A;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip is start-aligned',
    align: 'start',
    children: <Button variant="primary">Hover me</Button>
  },
  render: ({
    content,
    align,
    children
  }) => <Tooltip content={content} align={align}>
      {children}
    </Tooltip>
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:`Tooltip with custom alignment.
Demonstrates how to align the tooltip content differently.`,...(A=(B=s.parameters)==null?void 0:B.docs)==null?void 0:A.description}}};var H,D,S,b,P;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip has no arrow',
    hasArrow: false,
    children: <Button variant="primary">Hover me</Button>
  },
  render: ({
    content,
    hasArrow,
    children
  }) => <Tooltip content={content} hasArrow={hasArrow}>
      {children}
    </Tooltip>
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source},description:{story:`Tooltip without an arrow.
Demonstrates how to disable the arrow pointer on the tooltip.
This can be useful for a cleaner look or when the arrow is not needed.`,...(P=(b=a.parameters)==null?void 0:b.docs)==null?void 0:P.description}}};const $=["Default","Position","Alignment","WithoutArrow"];export{s as Alignment,i as Default,n as Position,a as WithoutArrow,$ as __namedExportsOrder,Z as default};
