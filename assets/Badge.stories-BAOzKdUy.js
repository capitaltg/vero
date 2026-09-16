import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{B as f}from"./Badge-DFS1g-e5.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CU3My8Oi.js";import"./index-NE6MC3wq.js";const De={title:"Data & Display/Badge",component:f,parameters:{},tags:["autodocs"],args:{variant:"default",tone:"dark",size:"default"},argTypes:{variant:{control:"select",options:["default","primary","success","danger","warning","info","outline"],description:"The visual style variant of the badge",table:{defaultValue:{summary:"default"},type:{summary:"default | primary | success | danger | warning | info | outline"}}},tone:{control:"inline-radio",options:["dark","light"],description:"The color weight of the badge. `dark` is a solid semantic fill; `light` is a tinted background with a 1px border in the same semantic color. Has no effect on the `outline` variant.",table:{defaultValue:{summary:"dark"},type:{summary:"dark | light"}}},size:{control:"inline-radio",options:["default","lg"],description:"The size of the badge",table:{defaultValue:{summary:"default"},type:{summary:"default | lg"}}},children:{control:"text",description:"The content of the badge",table:{type:{summary:"ReactNode"}}},className:{type:"string",description:"Additional class names to apply to the badge"}}},s={args:{children:"Badge"}},t={args:{variant:"primary",children:"Primary"}},i={args:{variant:"success",children:"Success"}},n={args:{variant:"warning",children:"Success"}},o={args:{variant:"danger",children:"Danger"}},c={args:{variant:"info",children:"Info"}},d={args:{variant:"outline",children:"Outline"}},l={args:{children:"Custom",className:"bg-purple-700 text-white"}},p={args:{variant:"primary",tone:"light",children:"Primary"}},m={args:{variant:"primary",size:"lg",children:"Primary"}},g={args:{children:"Badge"},render:({children:h,...y})=>e.jsx("div",{className:"flex flex-col gap-3",children:["dark","light"].map(a=>e.jsx("div",{className:"flex flex-wrap items-center gap-2",children:["default","primary","success","danger","warning","info","outline"].map(r=>e.jsx(f,{...y,tone:a,variant:r,children:h},r))},a))})},u={args:{children:"Badge"},render:({children:h,...y})=>e.jsx("div",{className:"flex flex-col gap-3",children:["default","lg"].map(a=>e.jsx("div",{className:"flex flex-wrap items-center gap-2",children:["default","primary","success","danger","warning","info","outline"].map(r=>e.jsx(f,{...y,size:a,variant:r,children:h},r))},a))})};var v,w,x,b,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:`The default state of the Badge component.
This shows the basic appearance with default styling.`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.description}}};var T,B,k,z,N;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...(k=(B=t.parameters)==null?void 0:B.docs)==null?void 0:k.source},description:{story:`A badge with primary styling.
This variant is typically used for highlighting important information.`,...(N=(z=t.parameters)==null?void 0:z.docs)==null?void 0:N.description}}};var j,A,D,P,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:`A badge with success styling.
This variant is typically used to indicate successful actions or statuses.`,...(C=(P=i.parameters)==null?void 0:P.docs)==null?void 0:C.description}}};var O,I,L,W,E;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Success'
  }
}`,...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:`A badge with warning styling.
This variant is typically used to indicate caution or warnings.`,...(E=(W=n.parameters)==null?void 0:W.docs)==null?void 0:E.description}}};var V,R,_,q,H;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}`,...(_=(R=o.parameters)==null?void 0:R.docs)==null?void 0:_.source},description:{story:`A badge with danger styling.
This variant is typically used to indicate errors or critical issues.`,...(H=(q=o.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var F,G,J,K,M;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Info'
  }
}`,...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:`A badge with info styling.
This variant is typically used for neutral, informational context.`,...(M=(K=c.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var Q,U,X,Y,Z;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:`A badge with outline styling.
This variant provides a more subtle appearance with just a border.`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var $,ee,ae,re,se;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: 'Custom',
    className: 'bg-purple-700 text-white'
  }
}`,...(ae=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:`A badge with custom styling applied through className.
This demonstrates how the badge can be customized using Tailwind classes.`,...(se=(re=l.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var te,ie,ne,oe,ce;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    tone: 'light',
    children: 'Primary'
  }
}`,...(ne=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ne.source},description:{story:`The light tone renders a tinted background with a 1px border in the same
semantic color, for a quieter badge that still reads as its variant.`,...(ce=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ce.description}}};var de,le,pe,me,ge;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Primary'
  }
}`,...(pe=(le=m.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:`The large size, for badges that need to hold their own next to body copy
or headings.`,...(ge=(me=m.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};var ue,he,ye,fe,ve;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  },
  render: ({
    children,
    ...args
  }) => <div className="flex flex-col gap-3">
      {(['dark', 'light'] as const).map(tone => <div key={tone} className="flex flex-wrap items-center gap-2">
          {(['default', 'primary', 'success', 'danger', 'warning', 'info', 'outline'] as const).map(variant => <Badge key={variant} {...args} tone={tone} variant={variant}>
                {children}
              </Badge>)}
        </div>)}
    </div>
}`,...(ye=(he=g.parameters)==null?void 0:he.docs)==null?void 0:ye.source},description:{story:"Every variant in both tones. The `outline` variant has no semantic fill to\nlighten, so it renders the same either way.",...(ve=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:ve.description}}};var we,xe,be,Se,Te;u.parameters={...u.parameters,docs:{...(we=u.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  },
  render: ({
    children,
    ...args
  }) => <div className="flex flex-col gap-3">
      {(['default', 'lg'] as const).map(size => <div key={size} className="flex flex-wrap items-center gap-2">
          {(['default', 'primary', 'success', 'danger', 'warning', 'info', 'outline'] as const).map(variant => <Badge key={variant} {...args} size={size} variant={variant}>
                {children}
              </Badge>)}
        </div>)}
    </div>
}`,...(be=(xe=u.parameters)==null?void 0:xe.docs)==null?void 0:be.source},description:{story:"Both sizes, shown across the variants.",...(Te=(Se=u.parameters)==null?void 0:Se.docs)==null?void 0:Te.description}}};const Pe=["Default","Primary","Success","Warning","Danger","Info","Outline","WithCustomClass","Light","Large","Tones","Sizes"];export{o as Danger,s as Default,c as Info,m as Large,p as Light,d as Outline,t as Primary,u as Sizes,i as Success,g as Tones,n as Warning,l as WithCustomClass,Pe as __namedExportsOrder,De as default};
