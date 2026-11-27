import{j as g}from"./jsx-runtime-DSvmvvsx.js";import{B as v}from"./Badge-CI8RaF_F.js";const De={title:"Data & Display/Badge",component:v,parameters:{},args:{variant:"default",tone:"dark",size:"default"},argTypes:{variant:{control:"select",options:["default","primary","success","danger","warning","info","outline"],table:{defaultValue:{summary:"default"},type:{summary:"default | primary | success | danger | warning | info | outline"}}},tone:{control:"inline-radio",options:["dark","light"],table:{defaultValue:{summary:"dark"},type:{summary:"dark | light"}}},size:{control:"inline-radio",options:["default","lg"],table:{defaultValue:{summary:"default"},type:{summary:"default | lg"}}},children:{control:"text",description:"The content of the badge",table:{type:{summary:"ReactNode"}}},className:{type:"string"}}},e={args:{children:"Badge"}},r={args:{children:"Badge"}},a={args:{variant:"primary",children:"Primary"}},s={args:{variant:"success",children:"Success"}},t={args:{variant:"warning",children:"Success"}},n={args:{variant:"danger",children:"Danger"}},i={args:{variant:"info",children:"Info"}},o={args:{variant:"outline",children:"Outline"}},c={args:{children:"Custom",className:"bg-purple-700 text-white"}},d={args:{variant:"primary",tone:"light",children:"Primary"}},l={args:{variant:"primary",size:"lg",children:"Primary"}},p={args:{children:"Badge"},render:({children:y,...f})=>g.jsx("div",{className:"flex flex-col gap-3",children:["dark","light"].map(u=>g.jsx("div",{className:"flex flex-wrap items-center gap-2",children:["default","primary","success","danger","warning","info","outline"].map(h=>g.jsx(v,{...f,tone:u,variant:h,children:y},h))},u))})},m={args:{children:"Badge"},render:({children:y,...f})=>g.jsx("div",{className:"flex flex-col gap-3",children:["default","lg"].map(u=>g.jsx("div",{className:"flex flex-wrap items-center gap-2",children:["default","primary","success","danger","warning","info","outline"].map(h=>g.jsx(v,{...f,size:u,variant:h,children:y},h))},u))})};var w,x,b,S,T;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(b=(x=e.parameters)==null?void 0:x.docs)==null?void 0:b.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(T=(S=e.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var B,k,z,N,P;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(z=(k=r.parameters)==null?void 0:k.docs)==null?void 0:z.source},description:{story:`The default state of the Badge component.
This shows the basic appearance with default styling.`,...(P=(N=r.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var j,D,A,O,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...(A=(D=a.parameters)==null?void 0:D.docs)==null?void 0:A.source},description:{story:`A badge with primary styling.
This variant is typically used for highlighting important information.`,...(C=(O=a.parameters)==null?void 0:O.docs)==null?void 0:C.description}}};var _,E,I,L,W;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...(I=(E=s.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:`A badge with success styling.
This variant is typically used to indicate successful actions or statuses.`,...(W=(L=s.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};var V,R,q,M,U;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Success'
  }
}`,...(q=(R=t.parameters)==null?void 0:R.docs)==null?void 0:q.source},description:{story:`A badge with warning styling.
This variant is typically used to indicate caution or warnings.`,...(U=(M=t.parameters)==null?void 0:M.docs)==null?void 0:U.description}}};var F,G,H,J,K;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}`,...(H=(G=n.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:`A badge with danger styling.
This variant is typically used to indicate errors or critical issues.`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,$;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Info'
  }
}`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`A badge with info styling.
This variant is typically used for neutral, informational context.`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,re,ae,se,te;o.parameters={...o.parameters,docs:{...(ee=o.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(ae=(re=o.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:`A badge with outline styling.
This variant provides a more subtle appearance with just a border.`,...(te=(se=o.parameters)==null?void 0:se.docs)==null?void 0:te.description}}};var ne,ie,oe,ce,de;c.parameters={...c.parameters,docs:{...(ne=c.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    children: 'Custom',
    className: 'bg-purple-700 text-white'
  }
}`,...(oe=(ie=c.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:`A badge with custom styling applied through className.
This demonstrates how the badge can be customized using Tailwind classes.`,...(de=(ce=c.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var le,pe,me,ge,ue;d.parameters={...d.parameters,docs:{...(le=d.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    tone: 'light',
    children: 'Primary'
  }
}`,...(me=(pe=d.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:`The light tone renders a tinted background with a 1px border in the same
semantic color, for a quieter badge that still reads as its variant.`,...(ue=(ge=d.parameters)==null?void 0:ge.docs)==null?void 0:ue.description}}};var he,ye,fe,ve,we;l.parameters={...l.parameters,docs:{...(he=l.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Primary'
  }
}`,...(fe=(ye=l.parameters)==null?void 0:ye.docs)==null?void 0:fe.source},description:{story:`The large size, for badges that need to hold their own next to body copy
or headings.`,...(we=(ve=l.parameters)==null?void 0:ve.docs)==null?void 0:we.description}}};var xe,be,Se,Te,Be;p.parameters={...p.parameters,docs:{...(xe=p.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Se=(be=p.parameters)==null?void 0:be.docs)==null?void 0:Se.source},description:{story:"Every variant in both tones. The `outline` variant has no semantic fill to\nlighten, so it renders the same either way.",...(Be=(Te=p.parameters)==null?void 0:Te.docs)==null?void 0:Be.description}}};var ke,ze,Ne,Pe,je;m.parameters={...m.parameters,docs:{...(ke=m.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ne=(ze=m.parameters)==null?void 0:ze.docs)==null?void 0:Ne.source},description:{story:"Both sizes, shown across the variants.",...(je=(Pe=m.parameters)==null?void 0:Pe.docs)==null?void 0:je.description}}};const Ae=["Playground","Default","Primary","Success","Warning","Danger","Info","Outline","WithCustomClass","Light","Large","Tones","Sizes"],_e=Object.freeze(Object.defineProperty({__proto__:null,Danger:n,Default:r,Info:i,Large:l,Light:d,Outline:o,Playground:e,Primary:a,Sizes:m,Success:s,Tones:p,Warning:t,WithCustomClass:c,__namedExportsOrder:Ae,default:De},Symbol.toStringTag,{value:"Module"}));export{_e as B,e as P};
