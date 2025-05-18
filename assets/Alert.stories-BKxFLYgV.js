import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as v}from"./Badge-DwSpdCto.js";import{c as b}from"./utils-CytzSlOG.js";import{r as _e}from"./index-D4H_InIO.js";import{c as Re}from"./index-BwobEAja.js";import{c as u}from"./createLucideIcon-B89bYmoG.js";/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=u("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=u("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=u("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=u("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Pe=Re("relative flex w-full items-start border-l-8 text-gray-900 dark:text-gray-100",{variants:{variant:{success:"border-success-400 bg-success-100 dark:bg-success-700 [&>svg]:text-success-400",warning:"border-warning-400 bg-warning-100 dark:bg-warning-700 [&>svg]:text-warning-400",danger:"border-danger-400 bg-danger-100 dark:bg-danger-700 [&>svg]:text-danger-400",info:"border-info-400 bg-info-100 dark:bg-info-700 [&>svg]:text-info-400"},size:{sm:"px-3 py-2 text-sm [&>svg]:mr-2 [&>svg]:h-5 [&>svg]:w-5",default:"px-4 py-4 text-base [&>svg]:mr-3 [&>svg]:h-8 [&>svg]:w-8"}},defaultVariants:{size:"default"}}),$e=Re("mb-1 font-bold text-base-700 dark:text-base-100",{variants:{variant:{success:"",warning:"",danger:"",info:""},size:{sm:"text-base",default:"text-lg"}},defaultVariants:{size:"default"}}),f=_e.forwardRef(({className:De,variant:p,size:y="default",heading:w,headingLevel:Ye="h2",hasIcon:qe=!0,children:Le,...Be},Ee)=>{const Ve=Ye,We={success:e.jsx(Ue,{}),warning:e.jsx(Oe,{}),danger:e.jsx(Me,{}),info:e.jsx(Fe,{})};return e.jsxs("div",{ref:Ee,className:b(Pe({variant:p,size:y}),De),...Be,children:[qe?We[p]:null,e.jsxs("div",{className:"flex-1",children:[w?e.jsx(Ve,{className:b($e({variant:p,size:y})),children:w}):null,Le]})]})});f.displayName="Alert";f.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},heading:{required:!1,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},hasIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const ea={title:"Components/Alert",component:f,parameters:{},tags:["autodocs"],args:{size:"default",headingLevel:"h2",hasIcon:!0},argTypes:{variant:{control:"select",options:["success","warning","danger","info"],description:"The visual style variant of the alert",table:{type:{summary:"success | warning | danger | info"}}},size:{control:"select",options:["sm","default"],description:"The size of the alert",table:{type:{summary:"sm | default"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The HTML heading level for the alert heading",table:{type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}},heading:{control:"text",description:"The heading text for the alert",table:{type:{summary:"string"}}},hasIcon:{control:"boolean",description:"Whether to show the status icon",table:{type:{summary:"boolean"}}},children:{control:"text",description:"The content of the alert",table:{type:{summary:"ReactNode"}}}}},a={args:{variant:"success",heading:"Success",children:"Your changes have been saved successfully."}},s={args:{variant:"warning",heading:"Warning",children:"Warning: Your subscription will expire soon."}},n={args:{variant:"danger",heading:"Danger",children:"Error: Failed to save changes. Please try again."}},r={args:{variant:"info",heading:"Information",children:"Update available: A new version has been released."}},t={args:{variant:"info",heading:"No Icon",children:"This is an alert without an icon.",hasIcon:!1}},i={args:{variant:"info",children:"This is an alert without a heading."}},o={args:{variant:"info",children:"This is an alert without an icon or heading.",hasIcon:!1}},c={args:{variant:"success",size:"sm",heading:"Success",children:"Your changes have been saved successfully."}},l={args:{variant:"success",size:"sm",heading:"Success",children:"Your changes have been saved successfully.",hasIcon:!1}},d={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully."}},h={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully.",hasIcon:!1}},g={args:{variant:"info",heading:"H3 Heading",headingLevel:"h3",children:"This alert uses an h3 heading level."}},m={args:{variant:"info",heading:"Detailed Information",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"This is an alert with a longer message that might wrap to multiple lines. It demonstrates how the alert component handles larger content while maintaining proper spacing and alignment."}),e.jsxs("p",{children:["This alert also contains ",e.jsx("strong",{children:"rich content"})," including"," ",e.jsx("a",{href:"https://storybook.js.org/docs/react/writing-stories/introduction",target:"_blank",rel:"noopener noreferrer",className:"text-link hover:underline",children:"links to documentation"})," ","and demonstrates support for React components."]}),e.jsxs("p",{children:[e.jsx(v,{variant:"primary",children:"React"})," ",e.jsx(v,{variant:"primary",children:"Extensible"})," ",e.jsx(v,{variant:"primary",children:"Rich Content"})]})]})}};var x,S,I,N,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(I=(S=a.parameters)==null?void 0:S.docs)==null?void 0:I.source},description:{story:`A successs alert with standard sizing.
Demonstrates a typical success message with both heading and description.`,...(k=(N=a.parameters)==null?void 0:N.docs)==null?void 0:k.description}}};var T,A,j,z,H;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    heading: 'Warning',
    children: 'Warning: Your subscription will expire soon.'
  }
}`,...(j=(A=s.parameters)==null?void 0:A.docs)==null?void 0:j.source},description:{story:`A warning alert with standard sizing.
Shows how to display cautionary messages that require attention.`,...(H=(z=s.parameters)==null?void 0:z.docs)==null?void 0:H.description}}};var C,R,D,Y,q;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    heading: 'Danger',
    children: 'Error: Failed to save changes. Please try again.'
  }
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source},description:{story:`An error alert with standard sizing.
Used to communicate critical errors or failures that need immediate attention.`,...(q=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};var L,B,E,V,W;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Information',
    children: 'Update available: A new version has been released.'
  }
}`,...(E=(B=r.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:`An information alert with standard sizing.
Used for general announcements or updates that aren't critical.`,...(W=(V=r.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var _,M,U,F,O;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'No Icon',
    children: 'This is an alert without an icon.',
    hasIcon: false
  }
}`,...(U=(M=t.parameters)==null?void 0:M.docs)==null?void 0:U.source},description:{story:`An alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(O=(F=t.parameters)==null?void 0:F.docs)==null?void 0:O.description}}};var P,$,G,J,K;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without a heading.'
  }
}`,...(G=($=i.parameters)==null?void 0:$.docs)==null?void 0:G.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Z,ee,ae;o.parameters={...o.parameters,docs:{...(Q=o.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without an icon or heading.',
    hasIcon: false
  }
}`,...(Z=(X=o.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(ae=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var se,ne,re,te,ie;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(re=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:`A compact success alert.
Shows how the alert appears with reduced padding and font sizes.`,...(ie=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ie.description}}};var oe,ce,le,de,he;l.parameters={...l.parameters,docs:{...(oe=l.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(le=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:le.source},description:{story:`A success alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(he=(de=l.parameters)==null?void 0:de.docs)==null?void 0:he.description}}};var ge,me,ue,pe,ve;d.parameters={...d.parameters,docs:{...(ge=d.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.'
  }
}`,...(ue=(me=d.parameters)==null?void 0:me.docs)==null?void 0:ue.source},description:{story:`A compact success alert without a heading.
Shows the alert's appearance when only displaying the message content.`,...(ve=(pe=d.parameters)==null?void 0:pe.docs)==null?void 0:ve.description}}};var fe,ye,we,be,xe;h.parameters={...h.parameters,docs:{...(fe=h.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(we=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:we.source},description:{story:`A compact success alert with an icon but no heading.
Demonstrates the layout when combining the icon with message content only.`,...(xe=(be=h.parameters)==null?void 0:be.docs)==null?void 0:xe.description}}};var Se,Ie,Ne,ke,Te;g.parameters={...g.parameters,docs:{...(Se=g.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'H3 Heading',
    headingLevel: 'h3',
    children: 'This alert uses an h3 heading level.'
  }
}`,...(Ne=(Ie=g.parameters)==null?void 0:Ie.docs)==null?void 0:Ne.source},description:{story:`An alert with a custom heading level.
Demonstrates how to adjust the semantic heading level for accessibility.`,...(Te=(ke=g.parameters)==null?void 0:ke.docs)==null?void 0:Te.description}}};var Ae,je,ze,He,Ce;m.parameters={...m.parameters,docs:{...(Ae=m.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
        <p>
          <Badge variant="primary">React</Badge> <Badge variant="primary">Extensible</Badge>{' '}
          <Badge variant="primary">Rich Content</Badge>
        </p>
      </div>
  }
}`,...(ze=(je=m.parameters)==null?void 0:je.docs)==null?void 0:ze.source},description:{story:`An alert with rich, extended content.
Demonstrates how the alert handles longer messages and React components while maintaining proper layout.`,...(Ce=(He=m.parameters)==null?void 0:He.docs)==null?void 0:Ce.description}}};const aa=["Success","Warning","Danger","Info","NoIcon","NoHeading","NoIconNoHeading","Small","SmallNoIcon","SmallNoHeading","SmallNoIconNoHeading","CustomHeadingLevel","RichContent"];export{g as CustomHeadingLevel,n as Danger,r as Info,i as NoHeading,t as NoIcon,o as NoIconNoHeading,m as RichContent,c as Small,d as SmallNoHeading,l as SmallNoIcon,h as SmallNoIconNoHeading,a as Success,s as Warning,aa as __namedExportsOrder,ea as default};
