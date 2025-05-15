import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{c as w}from"./utils-CytzSlOG.js";import{r as Re}from"./index-D4H_InIO.js";import{c as je}from"./index-BwobEAja.js";import{c as m}from"./createLucideIcon-B89bYmoG.js";/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=m("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=m("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=m("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=m("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Pe=je("relative flex w-full items-start border-l-8 text-gray-900 dark:text-gray-100",{variants:{variant:{success:"border-success-400 bg-success-100 dark:bg-success-700 [&>svg]:text-success-400",warning:"border-warning-400 bg-warning-100 dark:bg-warning-700 [&>svg]:text-warning-400",danger:"border-danger-400 bg-danger-100 dark:bg-danger-700 [&>svg]:text-danger-400",info:"border-info-400 bg-info-100 dark:bg-info-700 [&>svg]:text-info-400"},size:{sm:"px-3 py-2 text-sm [&>svg]:mr-2 [&>svg]:h-5 [&>svg]:w-5",default:"p-4 text-base [&>svg]:mr-3 [&>svg]:h-8 [&>svg]:w-8"}},defaultVariants:{size:"default"}}),$e=je("mb-1 font-bold text-base-700 dark:text-base-100",{variants:{variant:{success:"",warning:"",danger:"",info:""},size:{sm:"text-base",default:"text-lg"}},defaultVariants:{size:"default"}}),v=Re.forwardRef(({className:Ce,variant:p,size:f="default",heading:y,headingLevel:De="h2",hasIcon:Le=!0,children:qe,...Ve},We)=>{const Ee=De,Me={success:e.jsx(_e,{}),warning:e.jsx(Oe,{}),danger:e.jsx(Ue,{}),info:e.jsx(Fe,{})};return e.jsxs("div",{ref:We,className:w(Pe({variant:p,size:f}),Ce),...Ve,children:[Le?Me[p]:null,e.jsxs("div",{className:"flex-1",children:[y?e.jsx(Ee,{className:w($e({variant:p,size:f})),children:y}):null,qe]})]})});v.displayName="Alert";v.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},heading:{required:!1,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},hasIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const Xe={title:"Components/Alert",component:v,parameters:{},tags:["autodocs"],args:{size:"default",headingLevel:"h2",hasIcon:!0},argTypes:{variant:{control:"select",options:["success","warning","danger","info"],description:"The visual style variant of the alert",table:{type:{summary:"success | warning | danger | info"}}},size:{control:"select",options:["sm","default"],description:"The size of the alert",table:{type:{summary:"sm | default"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The HTML heading level for the alert heading",table:{type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}},heading:{control:"text",description:"The heading text for the alert",table:{type:{summary:"string"}}},hasIcon:{control:"boolean",description:"Whether to show the status icon",table:{type:{summary:"boolean"}}},children:{control:"text",description:"The content of the alert",table:{type:{summary:"ReactNode"}}}}},a={args:{variant:"success",heading:"Success",children:"Your changes have been saved successfully."}},s={args:{variant:"warning",heading:"Warning",children:"Warning: Your subscription will expire soon."}},n={args:{variant:"danger",heading:"Danger",children:"Error: Failed to save changes. Please try again."}},r={args:{variant:"info",heading:"Information",children:"Update available: A new version has been released."}},t={args:{variant:"success",size:"sm",heading:"Success",children:"Your changes have been saved successfully."}},i={args:{variant:"success",size:"sm",heading:"Success",children:"Your changes have been saved successfully.",hasIcon:!1}},o={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully."}},c={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully.",hasIcon:!1}},l={args:{variant:"info",heading:"No Icon",children:"This is an alert without an icon.",hasIcon:!1}},d={args:{variant:"info",children:"This is an alert without a heading."}},h={args:{variant:"info",children:"This is an alert without an icon or heading.",hasIcon:!1}},u={args:{variant:"info",heading:"H3 Heading",headingLevel:"h3",children:"This alert uses an h3 heading level."}},g={args:{variant:"info",heading:"Detailed Information",children:"This is an alert with a longer message that might wrap to multiple lines. It demonstrates how the alert component handles larger content while maintaining proper spacing and alignment."}};var b,x,S,I,T;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:`A successs alert with standard sizing.
Demonstrates a typical success message with both heading and description.`,...(T=(I=a.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var N,A,z,k,H;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    heading: 'Warning',
    children: 'Warning: Your subscription will expire soon.'
  }
}`,...(z=(A=s.parameters)==null?void 0:A.docs)==null?void 0:z.source},description:{story:`A warning alert with standard sizing.
Shows how to display cautionary messages that require attention.`,...(H=(k=s.parameters)==null?void 0:k.docs)==null?void 0:H.description}}};var Y,j,C,D,L;n.parameters={...n.parameters,docs:{...(Y=n.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    heading: 'Danger',
    children: 'Error: Failed to save changes. Please try again.'
  }
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source},description:{story:`An error alert with standard sizing.
Used to communicate critical errors or failures that need immediate attention.`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var q,V,W,E,M;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Information',
    children: 'Update available: A new version has been released.'
  }
}`,...(W=(V=r.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:`An information alert with standard sizing.
Used for general announcements or updates that aren't critical.`,...(M=(E=r.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};var R,U,_,F,O;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(_=(U=t.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:`A compact success alert.
Shows how the alert appears with reduced padding and font sizes.`,...(O=(F=t.parameters)==null?void 0:F.docs)==null?void 0:O.description}}};var P,$,B,G,J;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(B=($=i.parameters)==null?void 0:$.docs)==null?void 0:B.source},description:{story:`A success alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(J=(G=i.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var K,Q,X,Z,ee;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.'
  }
}`,...(X=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`A compact success alert without a heading.
Shows the alert's appearance when only displaying the message content.`,...(ee=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,se,ne,re,te;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(ne=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ne.source},description:{story:`A compact success alert with an icon but no heading.
Demonstrates the layout when combining the icon with message content only.`,...(te=(re=c.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var ie,oe,ce,le,de;l.parameters={...l.parameters,docs:{...(ie=l.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'No Icon',
    children: 'This is an alert without an icon.',
    hasIcon: false
  }
}`,...(ce=(oe=l.parameters)==null?void 0:oe.docs)==null?void 0:ce.source},description:{story:`An alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(de=(le=l.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var he,ue,ge,me,pe;d.parameters={...d.parameters,docs:{...(he=d.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without a heading.'
  }
}`,...(ge=(ue=d.parameters)==null?void 0:ue.docs)==null?void 0:ge.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(pe=(me=d.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var ve,fe,ye,we,be;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without an icon or heading.',
    hasIcon: false
  }
}`,...(ye=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:ye.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(be=(we=h.parameters)==null?void 0:we.docs)==null?void 0:be.description}}};var xe,Se,Ie,Te,Ne;u.parameters={...u.parameters,docs:{...(xe=u.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'H3 Heading',
    headingLevel: 'h3',
    children: 'This alert uses an h3 heading level.'
  }
}`,...(Ie=(Se=u.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source},description:{story:`An alert with a custom heading level.
Demonstrates how to adjust the semantic heading level for accessibility.`,...(Ne=(Te=u.parameters)==null?void 0:Te.docs)==null?void 0:Ne.description}}};var Ae,ze,ke,He,Ye;g.parameters={...g.parameters,docs:{...(Ae=g.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Detailed Information',
    children: 'This is an alert with a longer message that might wrap to multiple lines. It demonstrates how the alert component handles larger content while maintaining proper spacing and alignment.'
  }
}`,...(ke=(ze=g.parameters)==null?void 0:ze.docs)==null?void 0:ke.source},description:{story:`An alert with extended content.
Shows how the alert handles longer messages while maintaining proper layout.`,...(Ye=(He=g.parameters)==null?void 0:He.docs)==null?void 0:Ye.description}}};const Ze=["Success","Warning","Danger","Info","Small","SmallNoIcon","SmallNoHeading","SmallNoIconNoHeading","NoIcon","NoHeading","NoIconNoHeading","CustomHeadingLevel","LongContent"];export{u as CustomHeadingLevel,n as Danger,r as Info,g as LongContent,d as NoHeading,l as NoIcon,h as NoIconNoHeading,t as Small,o as SmallNoHeading,i as SmallNoIcon,c as SmallNoIconNoHeading,a as Success,s as Warning,Ze as __namedExportsOrder,Xe as default};
