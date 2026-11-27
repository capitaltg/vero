import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{B as o}from"./Button-DJBoR_IJ.js";import{D as s,a as l,b as c,e as d,f as g,g as m,h as u,c as D}from"./DialogTitle-D9qJLO0z.js";import{r as R}from"./index-B0WjJBI_.js";import{C as J}from"./Combobox-CsSUFco9.js";const U=()=>e.jsxs(s,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{variant:"primary",children:"Open Dialog"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Edit Profile"}),e.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right",htmlFor:"name",children:"Name"}),e.jsx("input",{className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3",id:"name"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{className:"text-right",htmlFor:"username",children:"Username"}),e.jsx("input",{className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3",id:"username"})]})]}),e.jsx(u,{children:e.jsx(o,{type:"submit",variant:"primary",children:"Save changes"})})]})]});U.__docgenInfo={description:"",methods:[],displayName:"DialogDefault"};const K=`import { Button } from '@/components/Button';
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
`,q=()=>e.jsxs(s,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{variant:"primary",children:"View notice"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Scheduled maintenance"}),e.jsx(m,{children:"Our services will be unavailable on Sunday from 2:00 AM to 4:00 AM ET."})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"During this window, you may be unable to sign in or submit forms. No action is required on your part. Close this dialog when you are finished reading."})]})]});q.__docgenInfo={description:"",methods:[],displayName:"DialogInformationalOnly"};const L=`import { Button } from '@/components/Button';
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
`,Q=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"}],G=()=>{const[p,z]=R.useState("");return e.jsxs(s,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{variant:"primary",children:"Open Dialog"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Choose a Fruit"}),e.jsx(m,{children:"Pick a fruit from the list, then save."})]}),e.jsx(J,{options:Q,placeholder:"Select a fruit...",value:p,onChange:z}),e.jsx(u,{children:e.jsx(o,{type:"submit",variant:"primary",children:"Save"})})]})]})};G.__docgenInfo={description:"",methods:[],displayName:"DialogWithCombobox"};const X=`import { Button } from '@/components/Button';
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
`,Y=()=>e.jsxs(s,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{variant:"danger",children:"Delete Account"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Are you sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(u,{children:[e.jsx(D,{asChild:!0,children:e.jsx(o,{children:"Cancel"})}),e.jsx(o,{variant:"danger",children:"Delete Account"})]})]})]});Y.__docgenInfo={description:"",methods:[],displayName:"DialogWithDestructiveAction"};const Z=`import { Button } from '@/components/Button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../src/Dialog';
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
        <DialogClose asChild>
          <Button>Cancel</Button>
        </DialogClose>
        <Button variant="danger">Delete Account</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
`,$={title:"Overlays & Feedback/Dialog",component:s,parameters:{},argTypes:{open:{control:!1},defaultOpen:{control:!1},modal:{control:"boolean"}}},r={args:{modal:!0},render:p=>e.jsxs(s,{...p,children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{variant:"primary",children:"Open Dialog"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Publish changes"}),e.jsx(m,{children:"Your changes will be visible to everyone."})]}),e.jsxs(u,{children:[e.jsx(D,{asChild:!0,children:e.jsx(o,{children:"Cancel"})}),e.jsx(D,{asChild:!0,children:e.jsx(o,{variant:"primary",children:"Publish"})})]})]})]})},i={render:()=>e.jsx(U,{}),parameters:{docs:{source:{code:K}}}},a={render:()=>e.jsx(Y,{}),parameters:{docs:{source:{code:Z}}}},t={render:()=>e.jsx(q,{}),parameters:{docs:{source:{code:L}}}},n={render:()=>e.jsx(G,{}),parameters:{docs:{source:{code:X}}}};var h,b,x,f,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    modal: true
  },
  render: args => <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Publish changes</DialogTitle>
          <DialogDescription>Your changes will be visible to everyone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary">Publish</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var C,v,j,T,B;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <DialogDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source},description:{story:`The default dialog with a form layout.
Demonstrates a typical dialog with header, content, and footer sections.`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};var w,N,A,F,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <DialogWithDestructiveAction />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithDestructiveAction
      }
    }
  }
}`,...(A=(N=a.parameters)==null?void 0:N.docs)==null?void 0:A.source},description:{story:`A dialog with destructive action.
Shows a confirmation dialog with both cancel and destructive actions.`,...(S=(F=a.parameters)==null?void 0:F.docs)==null?void 0:S.description}}};var O,H,W,k,_;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <DialogInformationalOnly />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeInformationalOnly
      }
    }
  }
}`,...(W=(H=t.parameters)==null?void 0:H.docs)==null?void 0:W.source},description:{story:`An informational dialog with no focusable content other than the close button.
When opened, focus moves to the close button since it is the only interactable element.`,...(_=(k=t.parameters)==null?void 0:k.docs)==null?void 0:_.description}}};var I,P,E,M,V;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DialogWithCombobox />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithCombobox
      }
    }
  }
}`,...(E=(P=n.parameters)==null?void 0:P.docs)==null?void 0:E.source},description:{story:`A dialog containing a Combobox.
The Combobox dropdown renders outside the dialog, yet its options stay clickable even though
a modal dialog disables pointer events on the rest of the page.`,...(V=(M=n.parameters)==null?void 0:M.docs)==null?void 0:V.description}}};const ee=["Playground","Default","WithDestructiveAction","InformationalOnly","WithCombobox"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InformationalOnly:t,Playground:r,WithCombobox:n,WithDestructiveAction:a,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{ne as D,r as P};
