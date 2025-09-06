import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as n}from"./Button-YgMv2nag.js";import{O as k,C as B,a as z,R as O,T as E,P as S,D as F,b as R}from"./index-D9Bpvn5I.js";import{s as x}from"./styles-hHSuIYOZ.js";import{c as s}from"./utils-l21BANrb.js";import{r as l}from"./index-D4H_InIO.js";import{g as A}from"./z-index-CmEG1ohp.js";import{X as W}from"./x-B9-lGSIk.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-BFjZK9t2.js";import"./index-DKzzznqW.js";import"./index-DwviEg3j.js";import"./index-DsCZslo7.js";import"./index-DXGtwV5R.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-CIFsUU6l.js";import"./createLucideIcon-CRH11QI6.js";const f=l.forwardRef(({className:a,zIndex:t,...o},d)=>{const h=A("overlay",t);return e.jsx(k,{ref:d,className:s("fixed inset-0 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),style:{zIndex:h,...o.style},...o})});f.displayName=k.displayName;f.__docgenInfo={description:"",methods:[],props:{zIndex:{required:!1,tsType:{name:"number"},description:""}},composes:["ComponentPropsWithoutRef"]};const c=l.forwardRef(({className:a,children:t,zIndex:o,...d},h)=>{const P=A("dialog",o);return e.jsxs(Z,{children:[e.jsx(f,{}),e.jsxs(B,{ref:h,className:s("fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background px-6 py-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),style:{zIndex:P,...d.style},...d,children:[t,e.jsxs(z,{className:s(x.focusRing,"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"),children:[e.jsx(W,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})});c.displayName=B.displayName;c.__docgenInfo={description:"",methods:[],props:{zIndex:{required:!1,tsType:{name:"number"},description:""}},composes:["ComponentPropsWithoutRef"]};const D=O,H=E,Z=S,m=l.forwardRef(({className:a,...t},o)=>e.jsx(F,{ref:o,className:s(x.text.hint,a),...t}));m.displayName=F.displayName;m.__docgenInfo={description:"",methods:[]};const p=({className:a,...t})=>e.jsx("div",{className:s("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t});p.displayName="DialogFooter";p.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};const g=({className:a,...t})=>e.jsx("div",{className:s("flex flex-col space-y-1.5 text-center sm:text-left",a),...t});g.displayName="DialogHeader";g.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};const u=l.forwardRef(({className:a,...t},o)=>e.jsx(R,{ref:o,className:s(x.text.title,"leading-none tracking-tight",a),...t}));u.displayName=R.displayName;u.__docgenInfo={description:"",methods:[]};const me={title:"Components/Dialog",component:D,parameters:{},tags:["autodocs"]},r={render:()=>e.jsxs(D,{children:[e.jsx(H,{asChild:!0,children:e.jsx(n,{variant:"primary",children:"Open Dialog"})}),e.jsxs(c,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Edit Profile"}),e.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx("input",{id:"name",className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx("input",{id:"username",className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3"})]})]}),e.jsx(p,{children:e.jsx(n,{type:"submit",variant:"primary",children:"Save changes"})})]})]})},i={render:()=>e.jsxs(D,{children:[e.jsx(H,{asChild:!0,children:e.jsx(n,{variant:"danger",children:"Delete Account"})}),e.jsxs(c,{children:[e.jsxs(g,{children:[e.jsx(u,{children:"Are you sure?"}),e.jsx(m,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(p,{children:[e.jsx(n,{children:"Cancel"}),e.jsx(n,{variant:"danger",children:"Delete Account"})]})]})]})};var y,j,b,v,N;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Dialog>
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
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input id="name" className="col-span-3 h-10 rounded-sm border border-input bg-background px-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input id="username" className="col-span-3 h-10 rounded-sm border border-input bg-background px-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant="primary">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.source},description:{story:`The default dialog with a form layout.
Demonstrates a typical dialog with header, content, and footer sections.`,...(N=(v=r.parameters)==null?void 0:v.docs)==null?void 0:N.description}}};var C,T,w,_,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Dialog>
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
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:`A dialog with destructive action.
Shows a confirmation dialog with both cancel and destructive actions.`,...(I=(_=i.parameters)==null?void 0:_.docs)==null?void 0:I.description}}};const pe=["Default","WithDestructiveAction"];export{r as Default,i as WithDestructiveAction,pe as __namedExportsOrder,me as default};
