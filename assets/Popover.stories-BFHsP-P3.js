import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as n}from"./Button-DyzmSwPh.js";import{P as s,a as i,b as a}from"./Popover-Dw8x3uOg.js";import"./index-D4H_InIO.js";import"./utils-l21BANrb.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-CYoSQ_7E.js";import"./styles-6b-8-onS.js";import"./index-DKzzznqW.js";import"./index-DwviEg3j.js";import"./index-DXGtwV5R.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DsCZslo7.js";import"./index-CHmAJ0Sv.js";import"./floating-ui.react-dom-Cto5zZXc.js";import"./index-C6Lf2F3X.js";import"./index-CIFsUU6l.js";const K={title:"Components/Popover",component:s,parameters:{},tags:["autodocs"]},r={render:()=>e.jsxs(s,{children:[e.jsx(i,{asChild:!0,children:e.jsx(n,{variant:"input",children:"Open Popover"})}),e.jsx(a,{className:"w-80",hasArrow:!0,children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"width",className:"text-sm",children:"Width"}),e.jsx("input",{id:"width",defaultValue:"100%",className:"col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"height",className:"text-sm",children:"Height"}),e.jsx("input",{id:"height",defaultValue:"25px",className:"col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm"})]})]})]})})]})},t={render:()=>e.jsxs(s,{children:[e.jsx(i,{asChild:!0,children:e.jsx(n,{variant:"input",children:"Open Popover"})}),e.jsx(a,{className:"w-80",children:e.jsx("p",{className:"text-sm",children:"This is a simple popover without an arrow."})})]})},o={render:()=>e.jsxs(s,{children:[e.jsx(i,{asChild:!0,children:e.jsx(n,{variant:"input",children:"Open Popover"})}),e.jsx(a,{className:"w-80",align:"start",hasArrow:!0,children:e.jsx("p",{className:"text-sm",children:"This popover is aligned to the start."})})]})};var p,d,m,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="input">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" hasArrow>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width" className="text-sm">
                Width
              </label>
              <input id="width" defaultValue="100%" className="col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height" className="text-sm">
                Height
              </label>
              <input id="height" defaultValue="25px" className="col-span-2 h-8 rounded-sm border border-input bg-transparent px-3 text-sm" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:`A popover with an arrow pointer.
Demonstrates the default popover with a visual indicator pointing to its trigger element.
This example includes form elements to show how the popover can contain complex content.`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};var h,u,v,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="input">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <p className="text-sm">This is a simple popover without an arrow.</p>
      </PopoverContent>
    </Popover>
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:`A basic popover without an arrow pointer.
Shows a simpler version of the popover for when a visual indicator isn't needed.`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var w,N,P,j,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="input">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start" hasArrow>
        <p className="text-sm">This popover is aligned to the start.</p>
      </PopoverContent>
    </Popover>
}`,...(P=(N=o.parameters)==null?void 0:N.docs)==null?void 0:P.source},description:{story:`A popover with custom positioning.
Demonstrates how to control the alignment of the popover relative to its trigger.`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.description}}};const L=["WithArrow","WithoutArrow","CustomPosition"];export{o as CustomPosition,r as WithArrow,t as WithoutArrow,L as __namedExportsOrder,K as default};
