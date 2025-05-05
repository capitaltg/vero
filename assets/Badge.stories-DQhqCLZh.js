import{j as M}from"./jsx-runtime-BO8uF4Og.js";import{c as Q}from"./utils-CytzSlOG.js";import{r as U}from"./index-D4H_InIO.js";import{c as X}from"./index-BwobEAja.js";const Y=X("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-base-200 text-black",primary:"border-transparent bg-primary-400 text-white",success:"border-transparent bg-success-400 text-white",danger:"border-transparent bg-danger-400 text-white",warning:"border-transparent bg-warning-300 text-black",outline:"text-foreground"}},defaultVariants:{variant:"default"}}),o=U.forwardRef(({className:H,variant:J,...K},L)=>M.jsx("div",{ref:L,className:Q(Y({variant:J,className:H})),...K}));o.displayName="Badge";o.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["VariantProps"]};const sr={title:"Components/Badge",component:o,parameters:{},tags:["autodocs"]},r={args:{children:"Badge"}},e={args:{variant:"primary",children:"Primary"}},s={args:{variant:"success",children:"Success"}},a={args:{variant:"warning",children:"Success"}},t={args:{variant:"danger",children:"Danger"}},n={args:{variant:"outline",children:"Outline"}},i={args:{children:"Custom",className:"bg-purple-700 text-white"}};var c,d,p,u,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:`The default state of the Badge component.
This shows the basic appearance with default styling.`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var l,m,h,y,b;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:`A badge with primary styling.
This variant is typically used for highlighting important information.`,...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var f,w,v,x,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:`A badge with success styling.
This variant is typically used to indicate successful actions or statuses.`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.description}}};var T,B,C,A,D;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Success'
  }
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source},description:{story:`A badge with warning styling.
This variant is typically used to indicate caution or warnings.`,...(D=(A=a.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var N,O,P,j,W;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}`,...(P=(O=t.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:`A badge with danger styling.
This variant is typically used to indicate errors or critical issues.`,...(W=(j=t.parameters)==null?void 0:j.docs)==null?void 0:W.description}}};var _,E,V,k,R;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(V=(E=n.parameters)==null?void 0:E.docs)==null?void 0:V.source},description:{story:`A badge with outline styling.
This variant provides a more subtle appearance with just a border.`,...(R=(k=n.parameters)==null?void 0:k.docs)==null?void 0:R.description}}};var z,I,q,F,G;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Custom',
    className: 'bg-purple-700 text-white'
  }
}`,...(q=(I=i.parameters)==null?void 0:I.docs)==null?void 0:q.source},description:{story:`A badge with custom styling applied through className.
This demonstrates how the badge can be customized using Tailwind classes.`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};const ar=["Default","Primary","Success","Warning","Danger","Outline","WithCustomClass"];export{t as Danger,r as Default,n as Outline,e as Primary,s as Success,a as Warning,i as WithCustomClass,ar as __namedExportsOrder,sr as default};
