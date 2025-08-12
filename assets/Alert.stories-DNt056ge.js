import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as k}from"./Button-DyzmSwPh.js";import{r as Xe}from"./index-D4H_InIO.js";import{s as I}from"./styles-6b-8-onS.js";import{c as r}from"./utils-l21BANrb.js";import{c as x}from"./index-DKzzznqW.js";import{X as na}from"./x-B9-lGSIk.js";import{c as N}from"./createLucideIcon-CRH11QI6.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./constants-CYoSQ_7E.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ta=N("circle-alert",ra);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ia=N("circle-check",oa);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],la=N("info",ca);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ha=N("triangle-alert",da),ua=x("relative flex w-full items-start border-l-8 text-gray-900 dark:text-gray-100",{variants:{variant:{success:"border-success-400 bg-success-100 dark:bg-success-700",warning:"border-warning-400 bg-warning-100 dark:bg-warning-700",danger:"border-danger-400 bg-danger-100 dark:bg-danger-700",info:"border-info-400 bg-info-100 dark:bg-info-700"},size:{sm:"px-3 py-2 text-sm",default:"px-4 py-4 text-base"}},defaultVariants:{size:"default"}}),ma=x("",{variants:{size:{sm:"mr-2 [&>svg]:h-5 [&>svg]:w-5",default:"mr-3 [&>svg]:h-8 [&>svg]:w-8"},variant:{success:"text-success-400",warning:"text-warning-400",danger:"text-danger-400",info:"text-info-400"},hasHeading:{true:"",false:""}},compoundVariants:[{size:"sm",hasHeading:!0,class:"mt-0.5"},{size:"default",hasHeading:!0,class:"-mt-0.5"}],defaultVariants:{size:"default"}}),pa=x("flex-1",{variants:{size:{sm:"",default:""},hasIcon:{true:"",false:""},hasHeading:{true:"",false:""}},compoundVariants:[{size:"default",hasIcon:!0,hasHeading:!1,class:"pt-1"}]}),ga=x("mb-1 font-bold text-base-700 dark:text-base-100",{variants:{size:{sm:"text-base",default:"text-lg"}},defaultVariants:{size:"default"}}),S=Xe.forwardRef(({className:s,variant:n,size:a="default",heading:w,headingLevel:Ge="h2",hasIcon:A=!0,isClosable:Je=!1,onClose:Ke,children:Qe,...Ze},ea)=>{const aa=Ge,sa={success:e.jsx(ia,{}),warning:e.jsx(ha,{}),danger:e.jsx(ta,{}),info:e.jsx(la,{})};return e.jsxs("div",{ref:ea,className:r(ua({variant:n,size:a}),s),...Ze,children:[A?e.jsx("span",{className:r(ma({variant:n,size:a,hasHeading:!!w})),children:sa[n]}):null,e.jsxs("div",{className:r(pa({size:a,hasIcon:A,hasHeading:!!w})),children:[w?e.jsx(aa,{className:r(ga({size:a})),children:w}):null,Qe]}),Je?e.jsxs("button",{type:"button",onClick:Ke,className:r(I.focusRing,I.focusRingSm,"-mt-0.5 shrink-0 rounded-full bg-transparent px-1.5 py-1.5 opacity-70 transition hover:bg-black/10 hover:opacity-100 focus:bg-black/10 focus:opacity-100"),children:[e.jsx(na,{className:"h-5 w-5",strokeWidth:3}),e.jsx("span",{className:"sr-only",children:"Close"})]}):null]})});S.displayName="Alert";S.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},heading:{required:!1,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},hasIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isClosable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const Ta={title:"Components/Alert",component:S,parameters:{},tags:["autodocs"],args:{size:"default",headingLevel:"h2",hasIcon:!0,isClosable:!1},argTypes:{variant:{control:"select",options:["success","warning","danger","info"],description:"The visual style variant of the alert",table:{type:{summary:"success | warning | danger | info"}}},size:{control:"select",options:["sm","default"],description:"The size of the alert",table:{type:{summary:"sm | default"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The HTML heading level for the alert heading",table:{type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}},heading:{control:"text",description:"The heading text for the alert",table:{type:{summary:"string"}}},hasIcon:{control:"boolean",description:"Whether to show the status icon",table:{type:{summary:"boolean"}}},isClosable:{control:"boolean",description:"Whether the alert can be dismissed",table:{type:{summary:"boolean"}}},children:{control:"text",description:"The content of the alert",table:{type:{summary:"ReactNode"}}}}},fa=({...s})=>{const[n,a]=Xe.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(k,{onClick:()=>a(!0),children:"Show Alert"}),n?e.jsx(S,{...s,onClose:()=>a(!1)}):null]})},t={args:{variant:"success",heading:"Success",children:"Your changes have been saved successfully."}},o={args:{variant:"warning",heading:"Warning",children:"Warning: Your subscription will expire soon."}},i={args:{variant:"danger",heading:"Danger",children:"Error: Failed to save changes. Please try again."}},c={args:{variant:"info",heading:"Information",children:"Update available: A new version has been released."}},l={args:{variant:"info",heading:"No Icon",children:"This is an alert without an icon.",hasIcon:!1}},d={args:{variant:"info",children:"This is an alert without a heading."}},h={args:{variant:"info",children:"This is an alert without an icon or heading.",hasIcon:!1}},u={args:{variant:"success",size:"sm",heading:"Success",children:"Your changes have been saved successfully."}},m={args:{variant:"success",size:"sm",heading:"Success",children:"Your changes have been saved successfully.",hasIcon:!1}},p={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully."}},g={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully.",hasIcon:!1}},f={render:s=>e.jsx(fa,{...s}),args:{variant:"info",heading:"Closable Alert",children:"This alert can be dismissed by clicking the close button.",isClosable:!0}},v={args:{variant:"info",heading:"H3 Heading",headingLevel:"h3",children:"This alert uses an h3 heading level."}},y={args:{variant:"info",heading:"Detailed Information",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"This is an alert with a longer message that might wrap to multiple lines. It demonstrates how the alert component handles larger content while maintaining proper spacing and alignment."}),e.jsxs("p",{children:["This alert also contains ",e.jsx("strong",{children:"rich content"})," including"," ",e.jsx("a",{href:"https://storybook.js.org/docs/react/writing-stories/introduction",target:"_blank",rel:"noopener noreferrer",className:"text-link hover:underline",children:"links to documentation"})," ","and demonstrates support for React components."]})]})}},b={args:{variant:"danger",heading:"Delete Account?",children:e.jsxs("div",{children:[e.jsx("p",{children:"Are you sure you permanently want to delete your account? This action cannot be undone."}),e.jsxs("div",{className:"mt-8 flex justify-end gap-3",children:[e.jsx(k,{variant:"ghost",children:"Cancel"}),e.jsx(k,{variant:"danger",children:"Delete account"})]})]})}};var j,T,C,z,H;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.source},description:{story:`A successs alert with standard sizing.
Demonstrates a typical success message with both heading and description.`,...(H=(z=t.parameters)==null?void 0:z.docs)==null?void 0:H.description}}};var D,_,V,Y,q;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    heading: 'Warning',
    children: 'Warning: Your subscription will expire soon.'
  }
}`,...(V=(_=o.parameters)==null?void 0:_.docs)==null?void 0:V.source},description:{story:`A warning alert with standard sizing.
Shows how to display cautionary messages that require attention.`,...(q=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};var R,L,W,B,E;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    heading: 'Danger',
    children: 'Error: Failed to save changes. Please try again.'
  }
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:`An error alert with standard sizing.
Used to communicate critical errors or failures that need immediate attention.`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.description}}};var M,U,O,$,F;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Information',
    children: 'Update available: A new version has been released.'
  }
}`,...(O=(U=c.parameters)==null?void 0:U.docs)==null?void 0:O.source},description:{story:`An information alert with standard sizing.
Used for general announcements or updates that aren't critical.`,...(F=($=c.parameters)==null?void 0:$.docs)==null?void 0:F.description}}};var P,X,G,J,K;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'No Icon',
    children: 'This is an alert without an icon.',
    hasIcon: false
  }
}`,...(G=(X=l.parameters)==null?void 0:X.docs)==null?void 0:G.source},description:{story:`An alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,Z,ee,ae,se;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without a heading.'
  }
}`,...(ee=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(se=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};var ne,re,te,oe,ie;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without an icon or heading.',
    hasIcon: false
  }
}`,...(te=(re=h.parameters)==null?void 0:re.docs)==null?void 0:te.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(ie=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ie.description}}};var ce,le,de,he,ue;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(de=(le=u.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:`A compact success alert.
Shows how the alert appears with reduced padding and font sizes.`,...(ue=(he=u.parameters)==null?void 0:he.docs)==null?void 0:ue.description}}};var me,pe,ge,fe,ve;m.parameters={...m.parameters,docs:{...(me=m.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(ge=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:ge.source},description:{story:`A success alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(ve=(fe=m.parameters)==null?void 0:fe.docs)==null?void 0:ve.description}}};var ye,be,we,xe,Ne;p.parameters={...p.parameters,docs:{...(ye=p.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.'
  }
}`,...(we=(be=p.parameters)==null?void 0:be.docs)==null?void 0:we.source},description:{story:`A compact success alert without a heading.
Shows the alert's appearance when only displaying the message content.`,...(Ne=(xe=p.parameters)==null?void 0:xe.docs)==null?void 0:Ne.description}}};var Se,ke,Ae,Ie,je;g.parameters={...g.parameters,docs:{...(Se=g.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(Ae=(ke=g.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source},description:{story:`A compact success alert with an icon but no heading.
Demonstrates the layout when combining the icon with message content only.`,...(je=(Ie=g.parameters)==null?void 0:Ie.docs)==null?void 0:je.description}}};var Te,Ce,ze,He,De;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: args => <AlertDemo {...args} />,
  args: {
    variant: 'info',
    heading: 'Closable Alert',
    children: 'This alert can be dismissed by clicking the close button.',
    isClosable: true
  }
}`,...(ze=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source},description:{story:`A closable alert.
Shows how to add a close button to dismiss the alert.`,...(De=(He=f.parameters)==null?void 0:He.docs)==null?void 0:De.description}}};var _e,Ve,Ye,qe,Re;v.parameters={...v.parameters,docs:{...(_e=v.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'H3 Heading',
    headingLevel: 'h3',
    children: 'This alert uses an h3 heading level.'
  }
}`,...(Ye=(Ve=v.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source},description:{story:`An alert with a custom heading level.
Demonstrates how to adjust the semantic heading level for accessibility.`,...(Re=(qe=v.parameters)==null?void 0:qe.docs)==null?void 0:Re.description}}};var Le,We,Be,Ee,Me;y.parameters={...y.parameters,docs:{...(Le=y.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
          <a href="https://storybook.js.org/docs/react/writing-stories/introduction" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">
            links to documentation
          </a>{' '}
          and demonstrates support for React components.
        </p>
      </div>
  }
}`,...(Be=(We=y.parameters)==null?void 0:We.docs)==null?void 0:Be.source},description:{story:`An alert with rich, extended content.
Demonstrates how the alert handles longer messages and React components while maintaining proper layout.`,...(Me=(Ee=y.parameters)==null?void 0:Ee.docs)==null?void 0:Me.description}}};var Ue,Oe,$e,Fe,Pe;b.parameters={...b.parameters,docs:{...(Ue=b.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...($e=(Oe=b.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source},description:{story:`A confirmation action alert.
Used to confirm critical actions like deletions or irreversible changes.`,...(Pe=(Fe=b.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.description}}};const Ca=["Success","Warning","Danger","Info","NoIcon","NoHeading","NoIconNoHeading","Small","SmallNoIcon","SmallNoHeading","SmallNoIconNoHeading","Closable","CustomHeadingLevel","RichContent","ConfirmationAction"];export{f as Closable,b as ConfirmationAction,v as CustomHeadingLevel,i as Danger,c as Info,d as NoHeading,l as NoIcon,h as NoIconNoHeading,y as RichContent,u as Small,p as SmallNoHeading,m as SmallNoIcon,g as SmallNoIconNoHeading,t as Success,o as Warning,Ca as __namedExportsOrder,Ta as default};
