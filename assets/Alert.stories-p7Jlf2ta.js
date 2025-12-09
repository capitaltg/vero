import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as Pe}from"./index-D4H_InIO.js";import{A as _e}from"./Alert-gwnj9tMu.js";import{B as f}from"./Button-BwlrdoZf.js";import"./styles-Bqt2ynIu.js";import"./utils-CU3My8Oi.js";import"./index-NE6MC3wq.js";import"./x-B9-lGSIk.js";import"./createLucideIcon-CRH11QI6.js";import"./useAriaDisabled-DHTVgRPt.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-C4w3S9le.js";const Ee=({...v})=>{const[Ue,y]=Pe.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(f,{onClick:()=>y(!0),children:"Show Alert"}),Ue?e.jsx(_e,{...v,onClose:()=>y(!1)}):null]})};Ee.__docgenInfo={description:"",methods:[],displayName:"AlertClosable",props:{variant:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"}]},description:""},heading:{required:!1,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:""},hasIcon:{required:!1,tsType:{name:"boolean"},description:""},isClosable:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const Fe=`import { Button } from '@/components/Button';
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
`,ra={title:"Overlays & Feedback/Alert",component:_e,parameters:{},tags:["autodocs"],args:{size:"default",headingLevel:"h2",hasIcon:!0,isClosable:!1},argTypes:{variant:{control:"select",options:["success","warning","danger","info"],description:"The visual style variant of the alert",table:{type:{summary:"success | warning | danger | info"}}},size:{control:"select",options:["sm","default"],description:"The size of the alert",table:{type:{summary:"sm | default"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The HTML heading level for the alert heading",table:{type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}},heading:{control:"text",description:"The heading text for the alert",table:{type:{summary:"string"}}},hasIcon:{control:"boolean",description:"Whether to show the status icon",table:{type:{summary:"boolean"}}},isClosable:{control:"boolean",description:"Whether the alert can be dismissed",table:{type:{summary:"boolean"}}},children:{control:"text",description:"The content of the alert",table:{type:{summary:"ReactNode"}}}}},a={args:{variant:"success",heading:"Success",children:"Your changes have been saved successfully."}},s={args:{variant:"warning",heading:"Warning",children:"Warning: Your subscription will expire soon."}},n={args:{variant:"danger",heading:"Danger",children:"Error: Failed to save changes. Please try again."}},r={args:{variant:"info",heading:"Information",children:"Update available: A new version has been released."}},t={args:{variant:"info",heading:"No Icon",children:"This is an alert without an icon.",hasIcon:!1}},o={args:{variant:"info",children:"This is an alert without a heading."}},i={args:{variant:"info",children:"This is an alert without an icon or heading.",hasIcon:!1}},c={args:{variant:"success",size:"sm",heading:"Success!",children:"Your changes have been saved successfully."}},l={args:{variant:"success",size:"sm",heading:"Success!",children:"Your changes have been saved successfully.",hasIcon:!1}},d={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully."}},h={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully.",hasIcon:!1}},u={render:v=>e.jsx(Ee,{...v}),args:{variant:"info",heading:"Closable Alert",children:"This alert can be dismissed by clicking the close button.",isClosable:!0},parameters:{docs:{source:{code:Fe,language:"tsx"}}}},m={args:{variant:"info",heading:"H3 Heading",headingLevel:"h3",children:"This alert uses an h3 heading level."}},p={args:{variant:"info",heading:"Detailed Information",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"This is an alert with a longer message that might wrap to multiple lines. It demonstrates how the alert component handles larger content while maintaining proper spacing and alignment."}),e.jsxs("p",{children:["This alert also contains ",e.jsx("strong",{children:"rich content"})," including"," ",e.jsx("a",{className:"text-link hover:underline",href:"https://storybook.js.org/docs/react/writing-stories/introduction",rel:"noopener noreferrer",target:"_blank",children:"links to documentation"})," ","and demonstrates support for React components."]})]})}},g={args:{variant:"danger",heading:"Delete Account?",children:e.jsxs("div",{children:[e.jsx("p",{children:"Are you sure you permanently want to delete your account? This action cannot be undone."}),e.jsxs("div",{className:"mt-8 flex justify-end gap-3",children:[e.jsx(f,{variant:"ghost",children:"Cancel"}),e.jsx(f,{variant:"danger",children:"Delete account"})]})]})}};var w,b,S,A,I;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source},description:{story:`A success alert with standard sizing.
Demonstrates a typical success message with both heading and description.`,...(I=(A=a.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};var x,T,N,C,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    heading: 'Warning',
    children: 'Warning: Your subscription will expire soon.'
  }
}`,...(N=(T=s.parameters)==null?void 0:T.docs)==null?void 0:N.source},description:{story:`A warning alert with standard sizing.
Shows how to display cautionary messages that require attention.`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var z,D,H,k,Y;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    heading: 'Danger',
    children: 'Error: Failed to save changes. Please try again.'
  }
}`,...(H=(D=n.parameters)==null?void 0:D.docs)==null?void 0:H.source},description:{story:`An error alert with standard sizing.
Used to communicate critical errors or failures that need immediate attention.`,...(Y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:Y.description}}};var B,O,q,L,R;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Information',
    children: 'Update available: A new version has been released.'
  }
}`,...(q=(O=r.parameters)==null?void 0:O.docs)==null?void 0:q.source},description:{story:`An information alert with standard sizing.
Used for general announcements or updates that aren't critical.`,...(R=(L=r.parameters)==null?void 0:L.docs)==null?void 0:R.description}}};var W,_,E,U,P;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'No Icon',
    children: 'This is an alert without an icon.',
    hasIcon: false
  }
}`,...(E=(_=t.parameters)==null?void 0:_.docs)==null?void 0:E.source},description:{story:`An alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(P=(U=t.parameters)==null?void 0:U.docs)==null?void 0:P.description}}};var F,M,G,J,K;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without a heading.'
  }
}`,...(G=(M=o.parameters)==null?void 0:M.docs)==null?void 0:G.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,V,X,Z,$;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without an icon or heading.',
    hasIcon: false
  }
}`,...(X=(V=i.parameters)==null?void 0:V.docs)==null?void 0:X.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,ae,se,ne,re;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success!',
    children: 'Your changes have been saved successfully.'
  }
}`,...(se=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:`A compact success alert.
Shows how the alert appears with reduced padding and font sizes.`,...(re=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};var te,oe,ie,ce,le;l.parameters={...l.parameters,docs:{...(te=l.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success!',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(ie=(oe=l.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:`A success alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(le=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var de,he,ue,me,pe;d.parameters={...d.parameters,docs:{...(de=d.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.'
  }
}`,...(ue=(he=d.parameters)==null?void 0:he.docs)==null?void 0:ue.source},description:{story:`A compact success alert without a heading.
Shows the alert's appearance when only displaying the message content.`,...(pe=(me=d.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var ge,ve,fe,ye,we;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(fe=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:`A compact success alert with an icon but no heading.
Demonstrates the layout when combining the icon with message content only.`,...(we=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:we.description}}};var be,Se,Ae,Ie,xe;u.parameters={...u.parameters,docs:{...(be=u.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ae=(Se=u.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source},description:{story:`A closable alert.
Shows how to add a close button to dismiss the alert.`,...(xe=(Ie=u.parameters)==null?void 0:Ie.docs)==null?void 0:xe.description}}};var Te,Ne,Ce,je,ze;m.parameters={...m.parameters,docs:{...(Te=m.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'H3 Heading',
    headingLevel: 'h3',
    children: 'This alert uses an h3 heading level.'
  }
}`,...(Ce=(Ne=m.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.source},description:{story:`An alert with a custom heading level.
Demonstrates how to adjust the semantic heading level for accessibility.`,...(ze=(je=m.parameters)==null?void 0:je.docs)==null?void 0:ze.description}}};var De,He,ke,Ye,Be;p.parameters={...p.parameters,docs:{...(De=p.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(ke=(He=p.parameters)==null?void 0:He.docs)==null?void 0:ke.source},description:{story:`An alert with rich, extended content.
Demonstrates how the alert handles longer messages and React components while maintaining proper layout.`,...(Be=(Ye=p.parameters)==null?void 0:Ye.docs)==null?void 0:Be.description}}};var Oe,qe,Le,Re,We;g.parameters={...g.parameters,docs:{...(Oe=g.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Le=(qe=g.parameters)==null?void 0:qe.docs)==null?void 0:Le.source},description:{story:`A confirmation action alert.
Used to confirm critical actions like deletions or irreversible changes.`,...(We=(Re=g.parameters)==null?void 0:Re.docs)==null?void 0:We.description}}};const ta=["Success","Warning","Danger","Info","NoIcon","NoHeading","NoIconNoHeading","Small","SmallNoIcon","SmallNoHeading","SmallNoIconNoHeading","Closable","CustomHeadingLevel","RichContent","ConfirmationAction"];export{u as Closable,g as ConfirmationAction,m as CustomHeadingLevel,n as Danger,r as Info,o as NoHeading,t as NoIcon,i as NoIconNoHeading,p as RichContent,c as Small,d as SmallNoHeading,l as SmallNoIcon,h as SmallNoIconNoHeading,a as Success,s as Warning,ta as __namedExportsOrder,ra as default};
