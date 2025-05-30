import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{O as _,C as k,a as H,R as I,T as O,P as E,D as B,b as F}from"./index-D9Bpvn5I.js";import{s as u}from"./styles-DfGEMFtJ.js";import{c as s}from"./utils-CytzSlOG.js";import{r as l}from"./index-D4H_InIO.js";import{B as n}from"./Button-BOJzQBVT.js";import{X as P}from"./x-BfDvlftu.js";import"./index-DwviEg3j.js";import"./index-D8GmRN1t.js";import"./index-DsCZslo7.js";import"./index-DXGtwV5R.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-CIFsUU6l.js";import"./index-BwobEAja.js";import"./createLucideIcon-B89bYmoG.js";const h=l.forwardRef(({className:a,...t},o)=>e.jsx(_,{ref:o,className:s("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...t}));h.displayName=_.displayName;h.__docgenInfo={description:"",methods:[]};const d=l.forwardRef(({className:a,children:t,...o},R)=>e.jsxs(S,{children:[e.jsx(h,{}),e.jsxs(k,{ref:R,className:s("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background px-6 py-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...o,children:[t,e.jsxs(H,{className:s(u.focusRing,"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"),children:[e.jsx(P,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));d.displayName=k.displayName;d.__docgenInfo={description:"",methods:[]};const x=I,A=O,S=E,c=l.forwardRef(({className:a,...t},o)=>e.jsx(B,{ref:o,className:s(u.text.hint,a),...t}));c.displayName=B.displayName;c.__docgenInfo={description:"",methods:[]};const m=({className:a,...t})=>e.jsx("div",{className:s("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t});m.displayName="DialogFooter";m.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};const p=({className:a,...t})=>e.jsx("div",{className:s("flex flex-col space-y-1.5 text-center sm:text-left",a),...t});p.displayName="DialogHeader";p.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};const g=l.forwardRef(({className:a,...t},o)=>e.jsx(F,{ref:o,className:s(u.text.title,"leading-none tracking-tight",a),...t}));g.displayName=F.displayName;g.__docgenInfo={description:"",methods:[]};const re={title:"Components/Dialog",component:x,parameters:{},tags:["autodocs"]},r={render:()=>e.jsxs(x,{children:[e.jsx(A,{asChild:!0,children:e.jsx(n,{variant:"primary",children:"Open Dialog"})}),e.jsxs(d,{children:[e.jsxs(p,{children:[e.jsx(g,{children:"Edit Profile"}),e.jsx(c,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx("input",{id:"name",className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx("input",{id:"username",className:"col-span-3 h-10 rounded-sm border border-input bg-background px-3"})]})]}),e.jsx(m,{children:e.jsx(n,{type:"submit",variant:"primary",children:"Save changes"})})]})]})},i={render:()=>e.jsxs(x,{children:[e.jsx(A,{asChild:!0,children:e.jsx(n,{variant:"danger",children:"Delete Account"})}),e.jsxs(d,{children:[e.jsxs(p,{children:[e.jsx(g,{children:"Are you sure?"}),e.jsx(c,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(m,{children:[e.jsx(n,{children:"Cancel"}),e.jsx(n,{variant:"danger",children:"Delete Account"})]})]})]})};var D,f,y,j,b;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:`The default dialog with a form layout.
Demonstrates a typical dialog with header, content, and footer sections.`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.description}}};var N,v,w,C,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:`A dialog with destructive action.
Shows a confirmation dialog with both cancel and destructive actions.`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};const ie=["Default","WithDestructiveAction"];export{r as Default,i as WithDestructiveAction,ie as __namedExportsOrder,re as default};
