import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{O as B,C as F,a as z,R as S,T as E,P as Z,D as A,b as I}from"./index-CQ-IqFoI.js";import{B as n}from"./Button-BwlrdoZf.js";import{s as d}from"./styles-Bqt2ynIu.js";import{a as r}from"./utils-CU3My8Oi.js";import{r as c}from"./index-D4H_InIO.js";import{g as W}from"./z-index-CmEG1ohp.js";import{X as q}from"./x-B9-lGSIk.js";import"./index-DB-GfMvg.js";import"./index-D8GmRN1t.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./useAriaDisabled-DHTVgRPt.js";import"./constants-C4w3S9le.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";const f=c.forwardRef(({className:o,zIndex:t,...a},l)=>{const h=W("overlay",t);return e.jsx(B,{ref:l,className:r(`fixed inset-0 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,o),style:{zIndex:h,...a.style},...a})});f.displayName=B.displayName;f.__docgenInfo={description:"",methods:[],props:{zIndex:{required:!1,tsType:{name:"number"},description:""}},composes:["ComponentPropsWithoutRef"]};const m=c.forwardRef(({className:o,children:t,zIndex:a,...l},h)=>{const P=W("dialog",a);return e.jsxs(M,{children:[e.jsx(f,{}),e.jsxs(F,{ref:h,className:r(`fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]
          gap-4 border bg-background px-6 py-6 shadow-lg duration-200 data-[state=open]:animate-in
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
          data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
          data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]
          sm:rounded-lg`,o),style:{zIndex:P,...l.style},...l,children:[t,e.jsxs(z,{className:r(d.focusRing,d.focusRingSm,`absolute right-4 top-4 shrink-0 rounded-full bg-transparent px-1.5 py-1.5 opacity-70
            transition hover:bg-black/10 hover:opacity-100 focus:bg-black/10 focus:opacity-100`),children:[e.jsx(q,{className:"h-5 w-5",strokeWidth:3}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=F.displayName;m.__docgenInfo={description:"",methods:[],props:{zIndex:{required:!1,tsType:{name:"number"},description:""}},composes:["ComponentPropsWithoutRef"]};const x=S,H=E,M=Z,p=c.forwardRef(({className:o,...t},a)=>e.jsx(A,{ref:a,className:r(d.text.hint,o),...t}));p.displayName=A.displayName;p.__docgenInfo={description:"",methods:[]};const g=({className:o,...t})=>e.jsx("div",{className:r("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",o),...t});g.displayName="DialogFooter";g.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};const u=({className:o,...t})=>e.jsx("div",{className:r("flex flex-col space-y-1.5 text-center sm:text-left",o),...t});u.displayName="DialogHeader";u.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};const D=c.forwardRef(({className:o,...t},a)=>e.jsx(I,{ref:a,className:r(d.text.title,"mr-8 leading-none tracking-tight",o),...t}));D.displayName=I.displayName;D.__docgenInfo={description:"",methods:[]};const R=()=>e.jsxs(x,{children:[e.jsx(H,{asChild:!0,children:e.jsx(n,{variant:"primary",children:"Open Dialog"})}),e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsx(D,{children:"Edit Profile"}),e.jsx(p,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right",htmlFor:"name",children:"Name"}),e.jsx("input",{className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3",id:"name"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right",htmlFor:"username",children:"Username"}),e.jsx("input",{className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3",id:"username"})]})]}),e.jsx(g,{children:e.jsx(n,{type:"submit",variant:"primary",children:"Save changes"})})]})]});R.__docgenInfo={description:"",methods:[],displayName:"DialogDefault"};const U=`import { Button } from '@/components/Button';
import { Dialog, DialogContent, DialogTrigger } from '../src/Dialog';
import { DialogDescription } from '../src/DialogDescription';
import { DialogFooter } from '../src/DialogFooter';
import { DialogHeader } from '../src/DialogHeader';
import { DialogTitle } from '../src/DialogTitle';

export const DialogDefault = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary">Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label className="text-right" htmlFor="name">
            Name
          </label>
          <input
            className="col-span-3 h-10 rounded-sm border border-input bg-background px-3"
            id="name"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label className="text-right" htmlFor="username">
            Username
          </label>
          <input
            className="col-span-3 h-10 rounded-sm border border-input bg-background px-3"
            id="username"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" variant="primary">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
`,O=()=>e.jsxs(x,{children:[e.jsx(H,{asChild:!0,children:e.jsx(n,{variant:"danger",children:"Delete Account"})}),e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsx(D,{children:"Are you sure?"}),e.jsx(p,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(g,{children:[e.jsx(n,{children:"Cancel"}),e.jsx(n,{variant:"danger",children:"Delete Account"})]})]})]});O.__docgenInfo={description:"",methods:[],displayName:"DialogWithDestructiveAction"};const V=`import { Button } from '@/components/Button';
import { Dialog, DialogContent, DialogTrigger } from '../src/Dialog';
import { DialogDescription } from '../src/DialogDescription';
import { DialogFooter } from '../src/DialogFooter';
import { DialogHeader } from '../src/DialogHeader';
import { DialogTitle } from '../src/DialogTitle';

export const DialogWithDestructiveAction = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="danger">Delete Account</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button>Cancel</Button>
        <Button variant="danger">Delete Account</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
`,De={title:"Overlays & Feedback/Dialog",component:x,parameters:{},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"The controlled open state of the dialog",table:{type:{summary:"boolean"}}},defaultOpen:{control:"boolean",description:"The default open state of the dialog",table:{type:{summary:"boolean"}}},modal:{control:"boolean",description:"Whether the dialog is modal (blocks interaction with other elements)",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}}}},i={render:()=>e.jsx(R,{}),parameters:{docs:{source:{code:U}}}},s={render:()=>e.jsx(O,{}),parameters:{docs:{source:{code:V}}}};var y,b,v,j,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <DialogDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:`The default dialog with a form layout.
Demonstrates a typical dialog with header, content, and footer sections.`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var T,C,w,_,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <DialogWithDestructiveAction />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDestructiveAction
      }
    }
  }
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:`A dialog with destructive action.
Shows a confirmation dialog with both cancel and destructive actions.`,...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.description}}};const he=["Default","WithDestructiveAction"];export{i as Default,s as WithDestructiveAction,he as __namedExportsOrder,De as default};
