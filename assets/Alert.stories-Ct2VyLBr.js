import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{c as y}from"./utils-CytzSlOG.js";import{r as Le}from"./index-D4H_InIO.js";import{c as Te}from"./index-BwobEAja.js";import{c as m}from"./createLucideIcon-B89bYmoG.js";/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=m("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=m("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=m("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=m("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Ee=Te("relative w-full border-l-8 text-gray-900 dark:text-gray-100 flex items-start",{variants:{variant:{success:"bg-success-100 border-success-400 [&>svg]:text-success-400 dark:bg-success-700",warning:"bg-warning-100 border-warning-400 [&>svg]:text-warning-400 dark:bg-warning-700",danger:"bg-danger-100 border-danger-400 [&>svg]:text-danger-400 dark:bg-danger-700",info:"bg-info-100 border-info-400 [&>svg]:text-info-400 dark:bg-info-700"},size:{sm:"py-2 px-3 text-sm [&>svg]:h-5 [&>svg]:w-5 [&>svg]:mr-2",default:"p-4 text-base [&>svg]:h-8 [&>svg]:w-8 [&>svg]:mr-3"}},defaultVariants:{size:"default"}}),Me=Te("font-bold mb-1 text-base-700 dark:text-base-100",{variants:{variant:{success:"",warning:"",danger:"",info:""},size:{sm:"text-base",default:"text-lg"}},defaultVariants:{size:"default"}}),p=Le.forwardRef(({className:ze,variant:u,size:v="default",heading:f,headingLevel:ke="h2",children:Ie,...He},Ye)=>{const je=ke,Ce={success:e.jsx(qe,{}),warning:e.jsx(We,{}),danger:e.jsx(De,{}),info:e.jsx(Ve,{})};return e.jsxs("div",{ref:Ye,className:y(Ee({variant:u,size:v}),ze),...He,children:[Ce[u],e.jsxs("div",{className:"flex-1",children:[f?e.jsx(je,{className:y(Me({variant:u,size:v})),children:f}):null,Ie]})]})});p.displayName="Alert";p.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},heading:{required:!1,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const Pe={title:"Components/Alert",component:p,parameters:{},tags:["autodocs"],args:{size:"default",headingLevel:"h2"},argTypes:{variant:{control:"select",options:["success","warning","danger","info"],description:"The visual style variant of the alert",table:{type:{summary:"success | warning | danger | info"}}},size:{control:"select",options:["sm","default"],description:"The size of the alert",table:{type:{summary:"sm | default"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The HTML heading level for the alert heading",table:{type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}},heading:{control:"text",description:"The heading text for the alert",table:{type:{summary:"string"}}},children:{control:"text",description:"The content of the alert",table:{type:{summary:"ReactNode"}}}}},a={args:{variant:"success",heading:"Success",children:"Your changes have been saved successfully."}},s={args:{variant:"warning",heading:"Warning",children:"Warning: Your subscription will expire soon."}},n={args:{variant:"danger",heading:"Danger",children:"Error: Failed to save changes. Please try again."}},r={args:{variant:"info",heading:"Information",children:"Update available: A new version has been released."}},t={args:{variant:"success",size:"sm",heading:"Success",children:"Your changes have been saved successfully."}},i={args:{variant:"success",size:"sm",heading:"Success",children:"Your changes have been saved successfully.",className:"[&>svg]:hidden"}},o={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully."}},c={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully.",className:"[&>svg]:hidden"}},d={args:{variant:"info",heading:"H3 Heading",headingLevel:"h3",children:"This alert uses an h3 heading level."}},l={args:{variant:"info",children:"This is an alert without a heading."}},h={args:{variant:"info",children:"This is an alert without a heading.",className:"[&>svg]:hidden"}},g={args:{variant:"info",heading:"Detailed Information",children:"This is an alert with a longer message that might wrap to multiple lines. It demonstrates how the alert component handles larger content while maintaining proper spacing and alignment."}};var w,b,x,S,N;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:`A successs alert with standard sizing.
Demonstrates a typical success message with both heading and description.`,...(N=(S=a.parameters)==null?void 0:S.docs)==null?void 0:N.description}}};var A,T,z,k,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    heading: 'Warning',
    children: 'Warning: Your subscription will expire soon.'
  }
}`,...(z=(T=s.parameters)==null?void 0:T.docs)==null?void 0:z.source},description:{story:`A warning alert with standard sizing.
Shows how to display cautionary messages that require attention.`,...(I=(k=s.parameters)==null?void 0:k.docs)==null?void 0:I.description}}};var H,Y,j,C,L;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    heading: 'Danger',
    children: 'Error: Failed to save changes. Please try again.'
  }
}`,...(j=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:j.source},description:{story:`An error alert with standard sizing.
Used to communicate critical errors or failures that need immediate attention.`,...(L=(C=n.parameters)==null?void 0:C.docs)==null?void 0:L.description}}};var D,q,V,W,E;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Information',
    children: 'Update available: A new version has been released.'
  }
}`,...(V=(q=r.parameters)==null?void 0:q.docs)==null?void 0:V.source},description:{story:`An information alert with standard sizing.
Used for general announcements or updates that aren't critical.`,...(E=(W=r.parameters)==null?void 0:W.docs)==null?void 0:E.description}}};var M,R,U,_,F;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(U=(R=t.parameters)==null?void 0:R.docs)==null?void 0:U.source},description:{story:`A compact success alert.
Shows how the alert appears with reduced padding and font sizes.`,...(F=(_=t.parameters)==null?void 0:_.docs)==null?void 0:F.description}}};var O,P,$,B,G;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
    className: '[&>svg]:hidden'
  }
}`,...($=(P=i.parameters)==null?void 0:P.docs)==null?void 0:$.source},description:{story:`A compact success alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var J,K,Q,X,Z;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.'
  }
}`,...(Q=(K=o.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:`A compact success alert without a heading.
Shows the alert's appearance when only displaying the message content.`,...(Z=(X=o.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,ae,se,ne,re;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
    className: '[&>svg]:hidden'
  }
}`,...(se=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:`A compact success alert with an icon but no heading.
Demonstrates the layout when combining the icon with message content only.`,...(re=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};var te,ie,oe,ce,de;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'H3 Heading',
    headingLevel: 'h3',
    children: 'This alert uses an h3 heading level.'
  }
}`,...(oe=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:`An alert with a custom heading level.
Demonstrates how to adjust the semantic heading level for accessibility.`,...(de=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var le,he,ge,me,ue;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without a heading.'
  }
}`,...(ge=(he=l.parameters)==null?void 0:he.docs)==null?void 0:ge.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(ue=(me=l.parameters)==null?void 0:me.docs)==null?void 0:ue.description}}};var pe,ve,fe,ye,we;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without a heading.',
    className: '[&>svg]:hidden'
  }
}`,...(fe=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(we=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:we.description}}};var be,xe,Se,Ne,Ae;g.parameters={...g.parameters,docs:{...(be=g.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Detailed Information',
    children: 'This is an alert with a longer message that might wrap to multiple lines. It demonstrates how the alert component handles larger content while maintaining proper spacing and alignment.'
  }
}`,...(Se=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:Se.source},description:{story:`An alert with extended content.
Shows how the alert handles longer messages while maintaining proper layout.`,...(Ae=(Ne=g.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.description}}};const $e=["Success","Warning","Danger","Info","Small","SmallNoIcon","SmallNoHeading","SmallNoIconNoHeading","CustomHeadingLevel","NoHeading","NoIconNoHeading","LongContent"];export{d as CustomHeadingLevel,n as Danger,r as Info,g as LongContent,l as NoHeading,h as NoIconNoHeading,t as Small,o as SmallNoHeading,i as SmallNoIcon,c as SmallNoIconNoHeading,a as Success,s as Warning,$e as __namedExportsOrder,Pe as default};
