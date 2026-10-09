import{j as o}from"./jsx-runtime-DSvmvvsx.js";import{D as n,a as s,b as l,c,d,e as m,f as g}from"./DialogTitle-D6b3OGep.js";import{B as e}from"./Button-BinwIYAK.js";import{r as V}from"./index-B0WjJBI_.js";import{C as P}from"./Combobox-CRHDjW3G.js";import"./styles-CafxXXJc.js";import"./utils-CU3My8Oi.js";import"./floating-ui.react-dom-qHB9r-5Q.js";import"./index-KklXjS-Z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CwPCC0ZT.js";import"./index-CoMQ7c9D.js";import"./index-B5oA2Zbg.js";import"./index-EiwPuDyL.js";import"./index-Cdcq5Wwr.js";import"./index-DKzZmXCh.js";import"./index-CoRj-x2w.js";import"./index-BOrrHd12.js";import"./index-OiR64VEf.js";import"./index-BllD4pgw.js";import"./index-BHtEszHx.js";import"./x-DEnjg7Le.js";import"./createLucideIcon-BeEkWZrd.js";import"./useAriaDisabled-BVkOu7OW.js";import"./constants-D9UEAID0.js";import"./index-NE6MC3wq.js";import"./CommandItem-C4rLDUnH.js";import"./CommandGroup-Xi_G_xj6.js";import"./CommandList-DEuvlimI.js";import"./Popover-CVpwtGnK.js";import"./index-DAhqxkbx.js";import"./index-DBA0bpW4.js";import"./chevrons-up-down-CPJXHd7n.js";import"./check-C42IfL-F.js";const O=()=>o.jsxs(n,{children:[o.jsx(s,{asChild:!0,children:o.jsx(e,{variant:"primary",children:"Open Dialog"})}),o.jsxs(l,{children:[o.jsxs(c,{children:[o.jsx(d,{children:"Edit Profile"}),o.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),o.jsxs("div",{className:"grid gap-4 py-4",children:[o.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[o.jsx("label",{className:"text-right",htmlFor:"name",children:"Name"}),o.jsx("input",{className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3",id:"name"})]}),o.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[o.jsx("label",{className:"text-right",htmlFor:"username",children:"Username"}),o.jsx("input",{className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3",id:"username"})]})]}),o.jsx(g,{children:o.jsx(e,{type:"submit",variant:"primary",children:"Save changes"})})]})]});O.__docgenInfo={description:"",methods:[],displayName:"DialogDefault"};const q=`import { Button } from '@/components/Button';
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
`,k=()=>o.jsxs(n,{children:[o.jsx(s,{asChild:!0,children:o.jsx(e,{variant:"primary",children:"View notice"})}),o.jsxs(l,{children:[o.jsxs(c,{children:[o.jsx(d,{children:"Scheduled maintenance"}),o.jsx(m,{children:"Our services will be unavailable on Sunday from 2:00 AM to 4:00 AM ET."})]}),o.jsx("p",{className:"text-sm text-muted-foreground",children:"During this window, you may be unable to sign in or submit forms. No action is required on your part. Close this dialog when you are finished reading."})]})]});k.__docgenInfo={description:"",methods:[],displayName:"DialogInformationalOnly"};const G=`import { Button } from '@/components/Button';
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
`,U=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"}],I=()=>{const[E,M]=V.useState("");return o.jsxs(n,{children:[o.jsx(s,{asChild:!0,children:o.jsx(e,{variant:"primary",children:"Open Dialog"})}),o.jsxs(l,{children:[o.jsxs(c,{children:[o.jsx(d,{children:"Choose a Fruit"}),o.jsx(m,{children:"Pick a fruit from the list, then save."})]}),o.jsx(P,{options:U,placeholder:"Select a fruit...",value:E,onChange:M}),o.jsx(g,{children:o.jsx(e,{type:"submit",variant:"primary",children:"Save"})})]})]})};I.__docgenInfo={description:"",methods:[],displayName:"DialogWithCombobox"};const R=`import { Button } from '@/components/Button';
import { Combobox } from '@/components/Combobox';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../src/Dialog';
import { DialogDescription } from '../src/DialogDescription';
import { DialogFooter } from '../src/DialogFooter';
import { DialogHeader } from '../src/DialogHeader';
import { DialogTitle } from '../src/DialogTitle';

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Grape', value: 'grape' },
];

export const DialogWithCombobox = () => {
  const [value, setValue] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose a Fruit</DialogTitle>
          <DialogDescription>Pick a fruit from the list, then save.</DialogDescription>
        </DialogHeader>
        <Combobox
          options={fruits}
          placeholder="Select a fruit..."
          value={value}
          onChange={setValue}
        />
        <DialogFooter>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
`,_=()=>o.jsxs(n,{children:[o.jsx(s,{asChild:!0,children:o.jsx(e,{variant:"danger",children:"Delete Account"})}),o.jsxs(l,{children:[o.jsxs(c,{children:[o.jsx(d,{children:"Are you sure?"}),o.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),o.jsxs(g,{children:[o.jsx(e,{children:"Cancel"}),o.jsx(e,{variant:"danger",children:"Delete Account"})]})]})]});_.__docgenInfo={description:"",methods:[],displayName:"DialogWithDestructiveAction"};const z=`import { Button } from '@/components/Button';
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
`,Ao={title:"Overlays & Feedback/Dialog",component:n,parameters:{},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"The controlled open state of the dialog",table:{type:{summary:"boolean"}}},defaultOpen:{control:"boolean",description:"The default open state of the dialog",table:{type:{summary:"boolean"}}},modal:{control:"boolean",description:"Whether the dialog is modal (blocks interaction with other elements)",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}}}},r={render:()=>o.jsx(O,{}),parameters:{docs:{source:{code:q}}}},i={render:()=>o.jsx(_,{}),parameters:{docs:{source:{code:z}}}},t={render:()=>o.jsx(k,{}),parameters:{docs:{source:{code:G}}}},a={render:()=>o.jsx(I,{}),parameters:{docs:{source:{code:R}}}};var p,u,D,h,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DialogDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(D=(u=r.parameters)==null?void 0:u.docs)==null?void 0:D.source},description:{story:`The default dialog with a form layout.
Demonstrates a typical dialog with header, content, and footer sections.`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var f,x,y,v,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <DialogWithDestructiveAction />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDestructiveAction
      }
    }
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`A dialog with destructive action.
Shows a confirmation dialog with both cancel and destructive actions.`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.description}}};var j,T,B,N,A;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <DialogInformationalOnly />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeInformationalOnly
      }
    }
  }
}`,...(B=(T=t.parameters)==null?void 0:T.docs)==null?void 0:B.source},description:{story:`An informational dialog with no focusable content other than the close button.
When opened, focus moves to the close button since it is the only interactable element.`,...(A=(N=t.parameters)==null?void 0:N.docs)==null?void 0:A.description}}};var w,F,S,W,H;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <DialogWithCombobox />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithCombobox
      }
    }
  }
}`,...(S=(F=a.parameters)==null?void 0:F.docs)==null?void 0:S.source},description:{story:`A dialog containing a Combobox.
The Combobox dropdown renders outside the dialog, yet its options stay clickable even though
a modal dialog disables pointer events on the rest of the page.`,...(H=(W=a.parameters)==null?void 0:W.docs)==null?void 0:H.description}}};const wo=["Default","WithDestructiveAction","InformationalOnly","WithCombobox"];export{r as Default,t as InformationalOnly,a as WithCombobox,i as WithDestructiveAction,wo as __namedExportsOrder,Ao as default};
