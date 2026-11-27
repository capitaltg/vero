import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{B as y}from"./Button-DJBoR_IJ.js";import{r as Qe}from"./index-B0WjJBI_.js";import{A as Ge}from"./Alert-Ce0KNJTj.js";const Je=({...f})=>{const[Ke,w]=Qe.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(y,{onClick:()=>w(!0),children:"Show Alert"}),Ke?e.jsx(Ge,{...f,onClose:()=>w(!1)}):null]})};Je.__docgenInfo={description:"",methods:[],displayName:"AlertClosable",props:{variant:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:"The status the alert shows, which sets its color and icon."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"}]},description:"The padding, text and icon size. `sm` puts the heading and the message on one line.\nDefaults to `default`."},heading:{required:!1,tsType:{name:"string"},description:"A bold heading above the message. When set, it labels the alert."},headingLevel:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"The HTML element for the heading. Defaults to `h2`."},hasIcon:{required:!1,tsType:{name:"boolean"},description:"Shows the variant's status icon. Defaults to `true`."},isClosable:{required:!1,tsType:{name:"boolean"},description:"Shows a close button. The alert doesn't hide itself; remove it in `onClose`. Defaults to\n`false`."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the close button is clicked."},children:{required:!0,tsType:{name:"ReactNode"},description:"The message."}},composes:["Omit"]};const Ve=`import { Button } from '@/components/Button';
import { useState } from 'react';
import { Alert } from '../src/Alert';
import { AlertProps } from '../types';

export const AlertClosable = ({ ...args }: AlertProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="space-y-4">
      <Button onClick={() => setIsOpen(true)}>Show Alert</Button>
      {isOpen ? <Alert {...args} onClose={() => setIsOpen(false)} /> : null}
    </div>
  );
};
`,Xe={title:"Overlays & Feedback/Alert",component:Ge,parameters:{},args:{size:"default",headingLevel:"h2",hasIcon:!0,isClosable:!1},argTypes:{variant:{control:"select",options:["success","warning","danger","info"],table:{type:{summary:"success | warning | danger | info"}}},size:{control:"select",options:["sm","default"],table:{type:{summary:"sm | default"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}},heading:{control:"text",table:{type:{summary:"string"}}},hasIcon:{control:"boolean",table:{type:{summary:"boolean"}}},isClosable:{control:"boolean",table:{type:{summary:"boolean"}}},children:{control:"text",table:{type:{summary:"ReactNode"}}}}},a={args:{variant:"info",heading:"Information",children:"Update available: A new version has been released."}},s={args:{variant:"success",heading:"Success",children:"Your changes have been saved successfully."}},n={args:{variant:"warning",heading:"Warning",children:"Warning: Your subscription will expire soon."}},r={args:{variant:"danger",heading:"Danger",children:"Error: Failed to save changes. Please try again."}},t={args:{variant:"info",heading:"Information",children:"Update available: A new version has been released."}},o={args:{variant:"info",heading:"No Icon",children:"This is an alert without an icon.",hasIcon:!1}},i={args:{variant:"info",children:"This is an alert without a heading."}},c={args:{variant:"info",children:"This is an alert without an icon or heading.",hasIcon:!1}},l={args:{variant:"success",size:"sm",heading:"Success!",children:"Your changes have been saved successfully."}},d={args:{variant:"success",size:"sm",heading:"Success!",children:"Your changes have been saved successfully.",hasIcon:!1}},h={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully."}},u={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully.",hasIcon:!1}},m={render:f=>e.jsx(Je,{...f}),args:{variant:"info",heading:"Closable Alert",children:"This alert can be dismissed by clicking the close button.",isClosable:!0},parameters:{docs:{source:{code:Ve,language:"tsx"}}}},p={args:{variant:"info",heading:"H3 Heading",headingLevel:"h3",children:"This alert uses an h3 heading level."}},g={args:{variant:"info",heading:"Detailed Information",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"This is an alert with a longer message that might wrap to multiple lines. It demonstrates how the alert component handles larger content while maintaining proper spacing and alignment."}),e.jsxs("p",{children:["This alert also contains ",e.jsx("strong",{children:"rich content"})," including"," ",e.jsx("a",{className:"text-link hover:underline",href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"noopener noreferrer",target:"_blank",children:"links to documentation"})," ","and demonstrates support for React components."]})]})}},v={args:{variant:"danger",heading:"Delete Account?",children:e.jsxs("div",{children:[e.jsx("p",{children:"Are you sure you permanently want to delete your account? This action cannot be undone."}),e.jsxs("div",{className:"mt-8 flex justify-end gap-3",children:[e.jsx(y,{variant:"ghost",children:"Cancel"}),e.jsx(y,{variant:"danger",children:"Delete account"})]})]})}};var b,S,A,I,T;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Information',
    children: 'Update available: A new version has been released.'
  }
}`,...(A=(S=a.parameters)==null?void 0:S.docs)==null?void 0:A.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(T=(I=a.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var x,C,N,j,D;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:`A success alert with standard sizing.
Demonstrates a typical success message with both heading and description.`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.description}}};var z,k,H,O,Y;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    heading: 'Warning',
    children: 'Warning: Your subscription will expire soon.'
  }
}`,...(H=(k=n.parameters)==null?void 0:k.docs)==null?void 0:H.source},description:{story:`A warning alert with standard sizing.
Shows how to display cautionary messages that require attention.`,...(Y=(O=n.parameters)==null?void 0:O.docs)==null?void 0:Y.description}}};var B,_,q,L,P;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    heading: 'Danger',
    children: 'Error: Failed to save changes. Please try again.'
  }
}`,...(q=(_=r.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:`An error alert with standard sizing.
Used to communicate critical errors or failures that need immediate attention.`,...(P=(L=r.parameters)==null?void 0:L.docs)==null?void 0:P.description}}};var R,U,W,E,F;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Information',
    children: 'Update available: A new version has been released.'
  }
}`,...(W=(U=t.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:`An information alert with standard sizing.
Used for general announcements or updates that aren't critical.`,...(F=(E=t.parameters)==null?void 0:E.docs)==null?void 0:F.description}}};var M,G,J,K,Q;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'No Icon',
    children: 'This is an alert without an icon.',
    hasIcon: false
  }
}`,...(J=(G=o.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:`An alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(Q=(K=o.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var V,X,Z,$,ee;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without a heading.'
  }
}`,...(Z=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(ee=($=i.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var ae,se,ne,re,te;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without an icon or heading.',
    hasIcon: false
  }
}`,...(ne=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ne.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(te=(re=c.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var oe,ie,ce,le,de;l.parameters={...l.parameters,docs:{...(oe=l.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success!',
    children: 'Your changes have been saved successfully.'
  }
}`,...(ce=(ie=l.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:`A compact success alert.
Shows how the alert appears with reduced padding and font sizes.`,...(de=(le=l.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var he,ue,me,pe,ge;d.parameters={...d.parameters,docs:{...(he=d.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success!',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(me=(ue=d.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:`A success alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(ge=(pe=d.parameters)==null?void 0:pe.docs)==null?void 0:ge.description}}};var ve,fe,ye,we,be;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.'
  }
}`,...(ye=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:ye.source},description:{story:`A compact success alert without a heading.
Shows the alert's appearance when only displaying the message content.`,...(be=(we=h.parameters)==null?void 0:we.docs)==null?void 0:be.description}}};var Se,Ae,Ie,Te,xe;u.parameters={...u.parameters,docs:{...(Se=u.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(Ie=(Ae=u.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source},description:{story:`A compact success alert with an icon but no heading.
Demonstrates the layout when combining the icon with message content only.`,...(xe=(Te=u.parameters)==null?void 0:Te.docs)==null?void 0:xe.description}}};var Ce,Ne,je,De,ze;m.parameters={...m.parameters,docs:{...(Ce=m.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => <AlertClosable {...args} />,
  args: {
    variant: 'info',
    heading: 'Closable Alert',
    children: 'This alert can be dismissed by clicking the close button.',
    isClosable: true
  },
  parameters: {
    docs: {
      source: {
        code: sourceCode,
        language: 'tsx'
      }
    }
  }
}`,...(je=(Ne=m.parameters)==null?void 0:Ne.docs)==null?void 0:je.source},description:{story:`A closable alert.
Shows how to add a close button to dismiss the alert.`,...(ze=(De=m.parameters)==null?void 0:De.docs)==null?void 0:ze.description}}};var ke,He,Oe,Ye,Be;p.parameters={...p.parameters,docs:{...(ke=p.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'H3 Heading',
    headingLevel: 'h3',
    children: 'This alert uses an h3 heading level.'
  }
}`,...(Oe=(He=p.parameters)==null?void 0:He.docs)==null?void 0:Oe.source},description:{story:`An alert with a custom heading level.
Demonstrates how to adjust the semantic heading level for accessibility.`,...(Be=(Ye=p.parameters)==null?void 0:Ye.docs)==null?void 0:Be.description}}};var _e,qe,Le,Pe,Re;g.parameters={...g.parameters,docs:{...(_e=g.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Detailed Information',
    children: <div className="space-y-3">
        <p>
          This is an alert with a longer message that might wrap to multiple lines. It demonstrates
          how the alert component handles larger content while maintaining proper spacing and
          alignment.
        </p>
        <p>
          This alert also contains <strong>rich content</strong> including{' '}
          <a className="text-link hover:underline" href="https://storybook.js.org/docs/react/writing-stories/introduction" rel="noopener noreferrer" target="_blank">
            links to documentation
          </a>{' '}
          and demonstrates support for React components.
        </p>
      </div>
  }
}`,...(Le=(qe=g.parameters)==null?void 0:qe.docs)==null?void 0:Le.source},description:{story:`An alert with rich, extended content.
Demonstrates how the alert handles longer messages and React components while maintaining proper layout.`,...(Re=(Pe=g.parameters)==null?void 0:Pe.docs)==null?void 0:Re.description}}};var Ue,We,Ee,Fe,Me;v.parameters={...v.parameters,docs:{...(Ue=v.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    heading: 'Delete Account?',
    children: <div>
        <p>
          Are you sure you permanently want to delete your account? This action cannot be undone.
        </p>
        <div className="mt-8 flex justify-end gap-3">
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Delete account</Button>
        </div>
      </div>
  }
}`,...(Ee=(We=v.parameters)==null?void 0:We.docs)==null?void 0:Ee.source},description:{story:`A confirmation action alert.
Used to confirm critical actions like deletions or irreversible changes.`,...(Me=(Fe=v.parameters)==null?void 0:Fe.docs)==null?void 0:Me.description}}};const Ze=["Playground","Success","Warning","Danger","Info","NoIcon","NoHeading","NoIconNoHeading","Small","SmallNoIcon","SmallNoHeading","SmallNoIconNoHeading","Closable","CustomHeadingLevel","RichContent","ConfirmationAction"],na=Object.freeze(Object.defineProperty({__proto__:null,Closable:m,ConfirmationAction:v,CustomHeadingLevel:p,Danger:r,Info:t,NoHeading:i,NoIcon:o,NoIconNoHeading:c,Playground:a,RichContent:g,Small:l,SmallNoHeading:h,SmallNoIcon:d,SmallNoIconNoHeading:u,Success:s,Warning:n,__namedExportsOrder:Ze,default:Xe},Symbol.toStringTag,{value:"Module"}));export{na as A,a as P};
