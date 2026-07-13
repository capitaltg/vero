import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{O as R,C as W,a as G,R as J,T as K,P as Q,D as P,b as z}from"./index-CoMQ7c9D.js";import{B as s}from"./Button-BinwIYAK.js";import{s as h}from"./styles-CafxXXJc.js";import{a as r}from"./utils-CU3My8Oi.js";import{r as c}from"./index-B0WjJBI_.js";import{g as M}from"./z-index-CmEG1ohp.js";import{X as Y}from"./x-DEnjg7Le.js";import"./index-B5oA2Zbg.js";import"./index-EiwPuDyL.js";import"./index-Cdcq5Wwr.js";import"./index-DKzZmXCh.js";import"./index-CoRj-x2w.js";import"./index-KklXjS-Z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";import"./index-BOrrHd12.js";import"./index-OiR64VEf.js";import"./index-BllD4pgw.js";import"./index-BHtEszHx.js";import"./useAriaDisabled-BVkOu7OW.js";import"./constants-D9UEAID0.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-BeEkWZrd.js";const $=["a[href]","area[href]","button:not(:disabled)",'input:not(:disabled):not([type="hidden"])',"select:not(:disabled)","textarea:not(:disabled)","summary",'[tabindex]:not([tabindex="-1"])'].join(",");function ee(o,t){if(o.hidden||getComputedStyle(o).visibility==="hidden")return!1;let a=o;for(;a;){if(a===t)return!0;if(getComputedStyle(a).display==="none")return!1;a=a.parentElement}return!1}function oe(o,t){return o.getAttribute("aria-disabled")==="true"||o.tabIndex<0?!1:ee(o,t)}function te(o){return Array.from(o.querySelectorAll($)).filter(t=>oe(t,o))}function ae(o){const[t]=te(o);return t?(t.focus({preventScroll:!0}),!0):o.tabIndex>=0||o.hasAttribute("tabindex")?(o.focus({preventScroll:!0}),!0):!1}const b=c.forwardRef(({className:o,zIndex:t,...a},i)=>{const f=M("overlay",t);return e.jsx(R,{ref:i,className:r(`fixed inset-0 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,o),style:{zIndex:f,...a.style},...a})});b.displayName=R.displayName;b.__docgenInfo={description:"",methods:[],props:{zIndex:{required:!1,tsType:{name:"number"},description:""}},composes:["ComponentPropsWithoutRef"]};const m=c.forwardRef(({className:o,children:t,zIndex:a,onOpenAutoFocus:i,...f},L)=>{const U=M("dialog",a),X=c.useCallback(D=>{i==null||i(D),!D.defaultPrevented&&(D.preventDefault(),ae(D.currentTarget))},[i]);return e.jsxs(re,{children:[e.jsx(b,{}),e.jsxs(W,{ref:L,className:r("vero-dialog",`fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]
          gap-4 border bg-background px-6 py-6 shadow-lg duration-200 data-[state=open]:animate-in
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
          data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
          data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]
          sm:rounded-lg`,o),style:{zIndex:U,...f.style},onOpenAutoFocus:X,...f,children:[t,e.jsxs(G,{className:r(h.focusRing,h.focusRingSm,`absolute right-4 top-4 shrink-0 rounded-full bg-transparent px-1.5 py-1.5 opacity-70
            transition hover:bg-black/10 hover:opacity-100 focus:bg-black/10 focus:opacity-100`),children:[e.jsx(Y,{className:"h-5 w-5",strokeWidth:3}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=W.displayName;m.__docgenInfo={description:"",methods:[],props:{zIndex:{required:!1,tsType:{name:"number"},description:""}},composes:["ComponentPropsWithoutRef"]};const x=J,v=K,re=Q,g=c.forwardRef(({className:o,...t},a)=>e.jsx(P,{ref:a,className:r(h.text.hint,"mr-8",o),...t}));g.displayName=P.displayName;g.__docgenInfo={description:"",methods:[]};const y=({className:o,...t})=>e.jsx("div",{className:r("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",o),...t});y.displayName="DialogFooter";y.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};const p=({className:o,...t})=>e.jsx("div",{className:r("flex flex-col space-y-1.5 text-center sm:text-left",o),...t});p.displayName="DialogHeader";p.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};const u=c.forwardRef(({className:o,...t},a)=>e.jsx(z,{ref:a,className:r(h.text.title,"mr-8 text-lg font-bold leading-none tracking-tight text-base-700 dark:text-base-100",o),...t}));u.displayName=z.displayName;u.__docgenInfo={description:"",methods:[]};const q=()=>e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(s,{variant:"primary",children:"Open Dialog"})}),e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Edit Profile"}),e.jsx(g,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right",htmlFor:"name",children:"Name"}),e.jsx("input",{className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3",id:"name"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right",htmlFor:"username",children:"Username"}),e.jsx("input",{className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3",id:"username"})]})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",variant:"primary",children:"Save changes"})})]})]});q.__docgenInfo={description:"",methods:[],displayName:"DialogDefault"};const ie=`import { Button } from '@/components/Button';
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
`,V=()=>e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(s,{variant:"primary",children:"View notice"})}),e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Scheduled maintenance"}),e.jsx(g,{children:"Our services will be unavailable on Sunday from 2:00 AM to 4:00 AM ET."})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"During this window, you may be unable to sign in or submit forms. No action is required on your part. Close this dialog when you are finished reading."})]})]});V.__docgenInfo={description:"",methods:[],displayName:"DialogInformationalOnly"};const se=`import { Button } from '@/components/Button';
import { Dialog, DialogContent, DialogTrigger } from '../src/Dialog';
import { DialogDescription } from '../src/DialogDescription';
import { DialogHeader } from '../src/DialogHeader';
import { DialogTitle } from '../src/DialogTitle';

export const DialogInformationalOnly = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary">View notice</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Scheduled maintenance</DialogTitle>
        <DialogDescription>
          Our services will be unavailable on Sunday from 2:00 AM to 4:00 AM ET.
        </DialogDescription>
      </DialogHeader>
      <p className="text-sm text-muted-foreground">
        During this window, you may be unable to sign in or submit forms. No action is required on
        your part. Close this dialog when you are finished reading.
      </p>
    </DialogContent>
  </Dialog>
);
`,Z=()=>e.jsxs(x,{children:[e.jsx(v,{asChild:!0,children:e.jsx(s,{variant:"danger",children:"Delete Account"})}),e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Are you sure?"}),e.jsx(g,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(y,{children:[e.jsx(s,{children:"Cancel"}),e.jsx(s,{variant:"danger",children:"Delete Account"})]})]})]});Z.__docgenInfo={description:"",methods:[],displayName:"DialogWithDestructiveAction"};const ne=`import { Button } from '@/components/Button';
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
`,Se={title:"Overlays & Feedback/Dialog",component:x,parameters:{},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"The controlled open state of the dialog",table:{type:{summary:"boolean"}}},defaultOpen:{control:"boolean",description:"The default open state of the dialog",table:{type:{summary:"boolean"}}},modal:{control:"boolean",description:"Whether the dialog is modal (blocks interaction with other elements)",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}}}},n={render:()=>e.jsx(q,{}),parameters:{docs:{source:{code:ie}}}},l={render:()=>e.jsx(Z,{}),parameters:{docs:{source:{code:ne}}}},d={render:()=>e.jsx(V,{}),parameters:{docs:{source:{code:se}}}};var j,N,T,C,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <DialogDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:`The default dialog with a form layout.
Demonstrates a typical dialog with header, content, and footer sections.`,...(w=(C=n.parameters)==null?void 0:C.docs)==null?void 0:w.description}}};var I,A,B,_,k;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DialogWithDestructiveAction />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDestructiveAction
      }
    }
  }
}`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:`A dialog with destructive action.
Shows a confirmation dialog with both cancel and destructive actions.`,...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.description}}};var S,O,H,F,E;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <DialogInformationalOnly />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeInformationalOnly
      }
    }
  }
}`,...(H=(O=d.parameters)==null?void 0:O.docs)==null?void 0:H.source},description:{story:`An informational dialog with no focusable content other than the close button.
When opened, focus moves to the close button since it is the only interactable element.`,...(E=(F=d.parameters)==null?void 0:F.docs)==null?void 0:E.description}}};const Oe=["Default","WithDestructiveAction","InformationalOnly"];export{n as Default,d as InformationalOnly,l as WithDestructiveAction,Oe as __namedExportsOrder,Se as default};
