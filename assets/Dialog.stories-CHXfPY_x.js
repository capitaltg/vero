import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{O as F,C as A,a as z,R as E,T as S,P as Z,D as I,b as k}from"./index-CQ-IqFoI.js";import{B as n}from"./Button-Dp8g_T52.js";import{s as h}from"./styles-BasBkTzl.js";import{a as r}from"./utils-CU3My8Oi.js";import{r as d}from"./index-D4H_InIO.js";import{g as H}from"./z-index-CmEG1ohp.js";import{X as q}from"./x-B9-lGSIk.js";import"./index-DB-GfMvg.js";import"./index-D8GmRN1t.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";import"./useAriaDisabled-DHTVgRPt.js";import"./constants-CVEkm9yF.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-CRH11QI6.js";const f=d.forwardRef(({className:o,zIndex:t,...a},l)=>{const D=H("overlay",t);return e.jsx(F,{ref:l,className:r(`fixed inset-0 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,o),style:{zIndex:D,...a.style},...a})});f.displayName=F.displayName;f.__docgenInfo={description:"",methods:[],props:{zIndex:{required:!1,tsType:{name:"number"},description:""}},composes:["ComponentPropsWithoutRef"]};const c=d.forwardRef(({className:o,children:t,zIndex:a,...l},D)=>{const P=H("dialog",a);return e.jsxs(M,{children:[e.jsx(f,{}),e.jsxs(A,{ref:D,className:r(`fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]
          gap-4 border bg-background px-6 py-6 shadow-lg duration-200 data-[state=open]:animate-in
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
          data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
          data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]
          sm:rounded-lg`,o),style:{zIndex:P,...l.style},...l,children:[t,e.jsxs(z,{className:r(h.focusRing,`absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity
            hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent
            data-[state=open]:text-muted-foreground`),children:[e.jsx(q,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})});c.displayName=A.displayName;c.__docgenInfo={description:"",methods:[],props:{zIndex:{required:!1,tsType:{name:"number"},description:""}},composes:["ComponentPropsWithoutRef"]};const x=E,R=S,M=Z,m=d.forwardRef(({className:o,...t},a)=>e.jsx(I,{ref:a,className:r(h.text.hint,o),...t}));m.displayName=I.displayName;m.__docgenInfo={description:"",methods:[]};const p=({className:o,...t})=>e.jsx("div",{className:r("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",o),...t});p.displayName="DialogFooter";p.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};const g=({className:o,...t})=>e.jsx("div",{className:r("flex flex-col space-y-1.5 text-center sm:text-left",o),...t});g.displayName="DialogHeader";g.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};const u=d.forwardRef(({className:o,...t},a)=>e.jsx(k,{ref:a,className:r(h.text.title,"leading-none tracking-tight",o),...t}));u.displayName=k.displayName;u.__docgenInfo={description:"",methods:[]};const W=()=>e.jsxs(x,{children:[e.jsx(R,{asChild:!0,children:e.jsx(n,{variant:"primary",children:"Open Dialog"})}),e.jsxs(c,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Edit Profile"}),e.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right",htmlFor:"name",children:"Name"}),e.jsx("input",{className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3",id:"name"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right",htmlFor:"username",children:"Username"}),e.jsx("input",{className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3",id:"username"})]})]}),e.jsx(p,{children:e.jsx(n,{type:"submit",variant:"primary",children:"Save changes"})})]})]});W.__docgenInfo={description:"",methods:[],displayName:"DialogDefault"};const U=`import { Button } from '@/components/Button';
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
`,O=()=>e.jsxs(x,{children:[e.jsx(R,{asChild:!0,children:e.jsx(n,{variant:"danger",children:"Delete Account"})}),e.jsxs(c,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Are you sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(p,{children:[e.jsx(n,{children:"Cancel"}),e.jsx(n,{variant:"danger",children:"Delete Account"})]})]})]});O.__docgenInfo={description:"",methods:[],displayName:"DialogWithDestructiveAction"};const X=`import { Button } from '@/components/Button';
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
`,De={title:"Overlays & Feedback/Dialog",component:x,parameters:{},tags:["autodocs"]},i={render:()=>e.jsx(W,{}),parameters:{docs:{source:{code:U}}}},s={render:()=>e.jsx(O,{}),parameters:{docs:{source:{code:X}}}};var y,v,j,b,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <DialogDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source},description:{story:`The default dialog with a form layout.
Demonstrates a typical dialog with header, content, and footer sections.`,...(N=(b=i.parameters)==null?void 0:b.docs)==null?void 0:N.description}}};var T,C,w,_,B;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <DialogWithDestructiveAction />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDestructiveAction
      }
    }
  }
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:`A dialog with destructive action.
Shows a confirmation dialog with both cancel and destructive actions.`,...(B=(_=s.parameters)==null?void 0:_.docs)==null?void 0:B.description}}};const he=["Default","WithDestructiveAction"];export{i as Default,s as WithDestructiveAction,he as __namedExportsOrder,De as default};
