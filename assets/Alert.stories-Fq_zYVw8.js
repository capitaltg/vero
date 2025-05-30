import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{B as b}from"./Badge-DwSpdCto.js";import{c as f}from"./utils-CytzSlOG.js";import{r as _e}from"./index-D4H_InIO.js";import{c as v}from"./index-BwobEAja.js";import{c as y}from"./createLucideIcon-B89bYmoG.js";/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=y("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=y("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=y("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=y("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Pe=v("relative flex w-full items-start border-l-8 text-gray-900 dark:text-gray-100",{variants:{variant:{success:"border-success-400 bg-success-100 dark:bg-success-700",warning:"border-warning-400 bg-warning-100 dark:bg-warning-700",danger:"border-danger-400 bg-danger-100 dark:bg-danger-700",info:"border-info-400 bg-info-100 dark:bg-info-700"},size:{sm:"px-3 py-2 text-sm",default:"px-4 py-4 text-base"}},defaultVariants:{size:"default"}}),$e=v("",{variants:{size:{sm:"mr-2 [&>svg]:h-5 [&>svg]:w-5",default:"mr-3 [&>svg]:h-8 [&>svg]:w-8"},variant:{success:"text-success-400",warning:"text-warning-400",danger:"text-danger-400",info:"text-info-400"},hasHeading:{true:"",false:""}},compoundVariants:[{size:"sm",hasHeading:!0,class:"mt-0.5"},{size:"default",hasHeading:!0,class:"-mt-0.5"}],defaultVariants:{size:"default"}}),Ge=v("flex-1",{variants:{size:{sm:"",default:""},hasIcon:{true:"",false:""},hasHeading:{true:"",false:""}},compoundVariants:[{size:"default",hasIcon:!0,hasHeading:!1,class:"pt-1"}]}),Je=v("mb-1 font-bold text-base-700 dark:text-base-100",{variants:{size:{sm:"text-base",default:"text-lg"}},defaultVariants:{size:"default"}}),x=_e.forwardRef(({className:Ve,variant:w,size:g="default",heading:p,headingLevel:Ye="h2",hasIcon:I=!0,children:qe,...Le},Be)=>{const Ee=Ye,We={success:e.jsx(Ue,{}),warning:e.jsx(Oe,{}),danger:e.jsx(Me,{}),info:e.jsx(Fe,{})};return e.jsxs("div",{ref:Be,className:f(Pe({variant:w,size:g}),Ve),...Le,children:[I?e.jsx("span",{className:f($e({variant:w,size:g,hasHeading:!!p})),children:We[w]}):null,e.jsxs("div",{className:f(Ge({size:g,hasIcon:I,hasHeading:!!p})),children:[p?e.jsx(Ee,{className:f(Je({size:g})),children:p}):null,qe]})]})});x.displayName="Alert";x.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},heading:{required:!1,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},hasIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const sa={title:"Components/Alert",component:x,parameters:{},tags:["autodocs"],args:{size:"default",headingLevel:"h2",hasIcon:!0},argTypes:{variant:{control:"select",options:["success","warning","danger","info"],description:"The visual style variant of the alert",table:{type:{summary:"success | warning | danger | info"}}},size:{control:"select",options:["sm","default"],description:"The size of the alert",table:{type:{summary:"sm | default"}}},headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"The HTML heading level for the alert heading",table:{type:{summary:"h1 | h2 | h3 | h4 | h5 | h6"}}},heading:{control:"text",description:"The heading text for the alert",table:{type:{summary:"string"}}},hasIcon:{control:"boolean",description:"Whether to show the status icon",table:{type:{summary:"boolean"}}},children:{control:"text",description:"The content of the alert",table:{type:{summary:"ReactNode"}}}}},a={args:{variant:"success",heading:"Success",children:"Your changes have been saved successfully."}},s={args:{variant:"warning",heading:"Warning",children:"Warning: Your subscription will expire soon."}},n={args:{variant:"danger",heading:"Danger",children:"Error: Failed to save changes. Please try again."}},r={args:{variant:"info",heading:"Information",children:"Update available: A new version has been released."}},t={args:{variant:"info",heading:"No Icon",children:"This is an alert without an icon.",hasIcon:!1}},i={args:{variant:"info",children:"This is an alert without a heading."}},o={args:{variant:"info",children:"This is an alert without an icon or heading.",hasIcon:!1}},c={args:{variant:"success",size:"sm",heading:"Success",children:"Your changes have been saved successfully."}},l={args:{variant:"success",size:"sm",heading:"Success",children:"Your changes have been saved successfully.",hasIcon:!1}},d={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully."}},h={args:{variant:"success",size:"sm",children:"Your changes have been saved successfully.",hasIcon:!1}},u={args:{variant:"info",heading:"H3 Heading",headingLevel:"h3",children:"This alert uses an h3 heading level."}},m={args:{variant:"info",heading:"Detailed Information",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{children:"This is an alert with a longer message that might wrap to multiple lines. It demonstrates how the alert component handles larger content while maintaining proper spacing and alignment."}),e.jsxs("p",{children:["This alert also contains ",e.jsx("strong",{children:"rich content"})," including"," ",e.jsx("a",{href:"https://storybook.js.org/docs/react/writing-stories/introduction",target:"_blank",rel:"noopener noreferrer",className:"text-link hover:underline",children:"links to documentation"})," ","and demonstrates support for React components."]}),e.jsxs("p",{children:[e.jsx(b,{variant:"primary",children:"React"})," ",e.jsx(b,{variant:"primary",children:"Extensible"})," ",e.jsx(b,{variant:"primary",children:"Rich Content"})]})]})}};var S,N,k,T,z;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(k=(N=a.parameters)==null?void 0:N.docs)==null?void 0:k.source},description:{story:`A successs alert with standard sizing.
Demonstrates a typical success message with both heading and description.`,...(z=(T=a.parameters)==null?void 0:T.docs)==null?void 0:z.description}}};var A,H,j,C,R;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    heading: 'Warning',
    children: 'Warning: Your subscription will expire soon.'
  }
}`,...(j=(H=s.parameters)==null?void 0:H.docs)==null?void 0:j.source},description:{story:`A warning alert with standard sizing.
Shows how to display cautionary messages that require attention.`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.description}}};var D,V,Y,q,L;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    heading: 'Danger',
    children: 'Error: Failed to save changes. Please try again.'
  }
}`,...(Y=(V=n.parameters)==null?void 0:V.docs)==null?void 0:Y.source},description:{story:`An error alert with standard sizing.
Used to communicate critical errors or failures that need immediate attention.`,...(L=(q=n.parameters)==null?void 0:q.docs)==null?void 0:L.description}}};var B,E,W,_,M;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'Information',
    children: 'Update available: A new version has been released.'
  }
}`,...(W=(E=r.parameters)==null?void 0:E.docs)==null?void 0:W.source},description:{story:`An information alert with standard sizing.
Used for general announcements or updates that aren't critical.`,...(M=(_=r.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};var U,F,O,P,$;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'No Icon',
    children: 'This is an alert without an icon.',
    hasIcon: false
  }
}`,...(O=(F=t.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:`An alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...($=(P=t.parameters)==null?void 0:P.docs)==null?void 0:$.description}}};var G,J,K,Q,X;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without a heading.'
  }
}`,...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(X=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,ae,se,ne;o.parameters={...o.parameters,docs:{...(Z=o.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This is an alert without an icon or heading.',
    hasIcon: false
  }
}`,...(ae=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:`An alert without a heading.
Shows how to create a simpler alert when a heading isn't needed.`,...(ne=(se=o.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var re,te,ie,oe,ce;c.parameters={...c.parameters,docs:{...(re=c.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...(ie=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ie.source},description:{story:`A compact success alert.
Shows how the alert appears with reduced padding and font sizes.`,...(ce=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:ce.description}}};var le,de,he,ue,me;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(he=(de=l.parameters)==null?void 0:de.docs)==null?void 0:he.source},description:{story:`A success alert without an icon.
Demonstrates how to hide the status icon while maintaining the alert's structure.`,...(me=(ue=l.parameters)==null?void 0:ue.docs)==null?void 0:me.description}}};var ge,pe,fe,ve,ye;d.parameters={...d.parameters,docs:{...(ge=d.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.'
  }
}`,...(fe=(pe=d.parameters)==null?void 0:pe.docs)==null?void 0:fe.source},description:{story:`A compact success alert without a heading.
Shows the alert's appearance when only displaying the message content.`,...(ye=(ve=d.parameters)==null?void 0:ve.docs)==null?void 0:ye.description}}};var we,be,xe,Ie,Se;h.parameters={...h.parameters,docs:{...(we=h.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    size: 'sm',
    children: 'Your changes have been saved successfully.',
    hasIcon: false
  }
}`,...(xe=(be=h.parameters)==null?void 0:be.docs)==null?void 0:xe.source},description:{story:`A compact success alert with an icon but no heading.
Demonstrates the layout when combining the icon with message content only.`,...(Se=(Ie=h.parameters)==null?void 0:Ie.docs)==null?void 0:Se.description}}};var Ne,ke,Te,ze,Ae;u.parameters={...u.parameters,docs:{...(Ne=u.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    heading: 'H3 Heading',
    headingLevel: 'h3',
    children: 'This alert uses an h3 heading level.'
  }
}`,...(Te=(ke=u.parameters)==null?void 0:ke.docs)==null?void 0:Te.source},description:{story:`An alert with a custom heading level.
Demonstrates how to adjust the semantic heading level for accessibility.`,...(Ae=(ze=u.parameters)==null?void 0:ze.docs)==null?void 0:Ae.description}}};var He,je,Ce,Re,De;m.parameters={...m.parameters,docs:{...(He=m.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ce=(je=m.parameters)==null?void 0:je.docs)==null?void 0:Ce.source},description:{story:`An alert with rich, extended content.
Demonstrates how the alert handles longer messages and React components while maintaining proper layout.`,...(De=(Re=m.parameters)==null?void 0:Re.docs)==null?void 0:De.description}}};const na=["Success","Warning","Danger","Info","NoIcon","NoHeading","NoIconNoHeading","Small","SmallNoIcon","SmallNoHeading","SmallNoIconNoHeading","CustomHeadingLevel","RichContent"];export{u as CustomHeadingLevel,n as Danger,r as Info,i as NoHeading,t as NoIcon,o as NoIconNoHeading,m as RichContent,c as Small,d as SmallNoHeading,l as SmallNoIcon,h as SmallNoIconNoHeading,a as Success,s as Warning,na as __namedExportsOrder,sa as default};
