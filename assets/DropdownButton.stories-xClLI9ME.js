import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{a as ee}from"./utils-DrFeXHBK.js";import{g as re}from"./index-BA9XdM4e.js";import{D as ce,a as de,b as pe,c as me,d as ue,e as ge}from"./index-BVmE4sX0.js";import{r as b}from"./index-B0WjJBI_.js";import{B as he}from"./Button-DP2wrfBF.js";import{C as be}from"./chevron-down-CLkoBCE4.js";import{U as oe,S as ne}from"./user-mYAjcJ3w.js";import{c as ke}from"./createLucideIcon-BeEkWZrd.js";import"./index-B6qhCouN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dif16jpf.js";import"./index-Cf-CwZ9y.js";import"./index-Cg8zIP29.js";import"./index-BKPsKW-F.js";import"./index-V0BpeevJ.js";import"./index-BPj7F_2H.js";import"./index-B5VgmDqq.js";import"./index-DFajAlJc.js";import"./index-sukfHunG.js";import"./index-CzzBuDdg.js";import"./index-Bm9-4BKu.js";import"./index-lUtbbSKC.js";import"./useAriaDisabled-BVkOu7OW.js";import"./constants-jTWlLmnl.js";import"./styles-DnVuGKPq.js";import"./index-CBgW3S2s.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],te=ke("mail",we),k=b.memo(({item:m})=>{const{isDisabled:o,onClick:n,icon:d,label:u}=m,g=b.useCallback(p=>{o?(p.preventDefault(),p.stopPropagation()):n==null||n()},[o,n]);return e.jsxs(ce,{"aria-disabled":o,className:ee(`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm
        outline-none transition-colors focus:bg-accent focus:text-accent-foreground`,n&&!o&&"cursor-pointer",o&&"cursor-not-allowed opacity-50"),onClick:g,children:[d?e.jsx("span",{className:"mr-2",children:d}):null,u]})});k.displayName="DropdownMenuItem";k.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem",props:{item:{required:!0,tsType:{name:"DropdownItem"},description:""}}};const w=b.forwardRef(({className:m,children:o,items:n,align:d="start",variant:u="default",isDisabled:g=!1,zIndex:p,...ie},se)=>{const le=re("dropdown",p);return e.jsxs(de,{children:[e.jsx(pe,{asChild:!0,children:e.jsxs(he,{ref:se,className:ee("vero-dropdown-button","flex items-center gap-1",m),isDisabled:g,variant:u,...ie,children:[o,e.jsx(be,{className:"h-4 w-4"})]})}),e.jsx(me,{children:e.jsx(ue,{align:d,className:`min-w-[8rem] overflow-hidden rounded-md border bg-popover px-1 py-1
              text-popover-foreground shadow-md data-[state=open]:animate-in
              data-[state=closed]:animate-out data-[state=closed]:fade-out-0
              data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
              data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2
              data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
              data-[side=top]:slide-in-from-bottom-2`,sideOffset:4,style:{zIndex:le},children:n.map((h,ae)=>h==="separator"?e.jsx(ge,{className:"my-1 h-px bg-muted"},`separator-${ae}`):e.jsx(k,{item:h},h.label))})})]})});w.displayName="DropdownButton";w.__docgenInfo={description:"",methods:[],displayName:"DropdownButton",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"DropdownItem | 'separator'",elements:[{name:"DropdownItem"},{name:"literal",value:"'separator'"}]}],raw:"DropdownItemType[]"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:""},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};const Ze={title:"Actions & Navigation/DropdownButton",component:w,parameters:{},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","danger","link","input","ghost"],description:"The visual style variant of the dropdown button"},size:{options:["default","sm","lg"],control:"radio",description:"The size of the dropdown button"},items:{control:"object",description:"The items to be displayed in the dropdown button"},className:{type:"string",description:"Additional class names to apply to the dropdown button"}}},t={args:{children:"Actions",items:[{label:"Profile",onClick:()=>console.log("Profile clicked")},{label:"Settings",onClick:()=>console.log("Settings clicked")},{label:"Logout",onClick:()=>console.log("Logout clicked")}]}},i={args:{children:"Disabled Dropdown Button",isDisabled:!0,items:[{label:"Profile",onClick:()=>console.log("Profile clicked")},{label:"Settings",onClick:()=>console.log("Settings clicked")},{label:"Logout",onClick:()=>console.log("Logout clicked")}]}},s={args:{children:"Menu",items:[{label:"Profile",icon:e.jsx(oe,{className:"h-4 w-4"}),onClick:()=>console.log("Profile clicked")},{label:"Settings",icon:e.jsx(ne,{className:"h-4 w-4"}),onClick:()=>console.log("Settings clicked")},{label:"Messages",icon:e.jsx(te,{className:"h-4 w-4"}),onClick:()=>console.log("Messages clicked")}]}},l={args:{children:"Options",items:[{label:"View profile",onClick:()=>console.log("View profile clicked")},{label:"Settings",onClick:()=>console.log("Settings clicked")},"separator",{label:"Help",onClick:()=>console.log("Help clicked")},{label:"Feedback",onClick:()=>console.log("Feedback clicked")},"separator",{label:"Logout",onClick:()=>console.log("Logout clicked")}]}},a={args:{children:"Options",items:[{label:"Active Option",icon:e.jsx(oe,{className:"h-4 w-4"}),onClick:()=>console.log("Active clicked")},{label:"Disabled Option (no onClick)",icon:e.jsx(ne,{className:"h-4 w-4"}),isDisabled:!0},{label:"Disabled Option (with onClick - won't fire)",icon:e.jsx(te,{className:"h-4 w-4"}),isDisabled:!0,onClick:()=>console.log("This will never fire")},"separator",{label:"Another Active",onClick:()=>console.log("Another clicked")},{label:"Disabled Text Only",isDisabled:!0}]}},r={args:{children:"Settings",variant:"link",items:[{label:"Account",onClick:()=>console.log("Account clicked")},{label:"Security",onClick:()=>console.log("Security clicked")},"separator",{label:"Notifications",onClick:()=>console.log("Notifications clicked")}]}},c={args:{children:"Aligned Menu",align:"end",items:[{label:"Right-aligned item 1",onClick:()=>console.log("Item 1 clicked")},{label:"Right-aligned item 2",onClick:()=>console.log("Item 2 clicked")}]}};var f,C,D,y,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Actions',
    items: [{
      label: 'Profile',
      onClick: () => console.log('Profile clicked')
    }, {
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    }, {
      label: 'Logout',
      onClick: () => console.log('Logout clicked')
    }]
  }
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:`The default state of the DropdownButton component.
Shows a basic dropdown menu with simple text items.`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var x,S,A,N,I;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Dropdown Button',
    isDisabled: true,
    items: [{
      label: 'Profile',
      onClick: () => console.log('Profile clicked')
    }, {
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    }, {
      label: 'Logout',
      onClick: () => console.log('Logout clicked')
    }]
  }
}`,...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.source},description:{story:`A disabled dropdown button.
Demonstrates how the component appears when it's not interactive.`,...(I=(N=i.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};var M,j,T,P,O;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'Menu',
    items: [{
      label: 'Profile',
      icon: <User className="h-4 w-4" />,
      onClick: () => console.log('Profile clicked')
    }, {
      label: 'Settings',
      icon: <Settings className="h-4 w-4" />,
      onClick: () => console.log('Settings clicked')
    }, {
      label: 'Messages',
      icon: <Mail className="h-4 w-4" />,
      onClick: () => console.log('Messages clicked')
    }]
  }
}`,...(T=(j=s.parameters)==null?void 0:j.docs)==null?void 0:T.source},description:{story:`A dropdown menu with icons next to each item.
Shows how to enhance menu items with visual indicators.`,...(O=(P=s.parameters)==null?void 0:P.docs)==null?void 0:O.description}}};var L,q,V,W,B;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Options',
    items: [{
      label: 'View profile',
      onClick: () => console.log('View profile clicked')
    }, {
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    }, 'separator', {
      label: 'Help',
      onClick: () => console.log('Help clicked')
    }, {
      label: 'Feedback',
      onClick: () => console.log('Feedback clicked')
    }, 'separator', {
      label: 'Logout',
      onClick: () => console.log('Logout clicked')
    }]
  }
}`,...(V=(q=l.parameters)==null?void 0:q.docs)==null?void 0:V.source},description:{story:`A dropdown menu with separators between groups of items.
Demonstrates how to organize menu items into logical sections.`,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var R,z,_,E,F;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Options',
    items: [{
      label: 'Active Option',
      icon: <User className="h-4 w-4" />,
      onClick: () => console.log('Active clicked')
    }, {
      label: 'Disabled Option (no onClick)',
      icon: <Settings className="h-4 w-4" />,
      isDisabled: true
    }, {
      label: "Disabled Option (with onClick - won't fire)",
      icon: <Mail className="h-4 w-4" />,
      isDisabled: true,
      onClick: () => console.log('This will never fire')
    }, 'separator', {
      label: 'Another Active',
      onClick: () => console.log('Another clicked')
    }, {
      label: 'Disabled Text Only',
      isDisabled: true
    }]
  }
}`,...(_=(z=a.parameters)==null?void 0:z.docs)==null?void 0:_.source},description:{story:`A dropdown menu with some disabled items.
Shows how to indicate that certain options are not currently available.

Disabled items:
- Remain focusable for keyboard navigation (ARIA compliant)
- Are announced as disabled by screen readers via \`aria-disabled\`
- Prevent all interactions (mouse, touch, keyboard activation)
- Display with reduced opacity and a not-allowed cursor
- Even if they have an \`onClick\` handler, it will not fire when disabled`,...(F=(E=a.parameters)==null?void 0:E.docs)==null?void 0:F.description}}};var H,U,Z,$,G;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Settings',
    variant: 'link',
    items: [{
      label: 'Account',
      onClick: () => console.log('Account clicked')
    }, {
      label: 'Security',
      onClick: () => console.log('Security clicked')
    }, 'separator', {
      label: 'Notifications',
      onClick: () => console.log('Notifications clicked')
    }]
  }
}`,...(Z=(U=r.parameters)==null?void 0:U.docs)==null?void 0:Z.source},description:{story:`A dropdown button with a different visual style.
Demonstrates how to change the button's appearance using variants.`,...(G=($=r.parameters)==null?void 0:$.docs)==null?void 0:G.description}}};var J,K,Q,X,Y;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: 'Aligned Menu',
    align: 'end',
    items: [{
      label: 'Right-aligned item 1',
      onClick: () => console.log('Item 1 clicked')
    }, {
      label: 'Right-aligned item 2',
      onClick: () => console.log('Item 2 clicked')
    }]
  }
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:`A dropdown menu with custom alignment.
Shows how to control the positioning of the dropdown menu.`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const $e=["Default","Disabled","WithIcons","WithSeparators","WithDisabledItems","WithVariant","WithAlignment"];export{t as Default,i as Disabled,c as WithAlignment,a as WithDisabledItems,s as WithIcons,l as WithSeparators,r as WithVariant,$e as __namedExportsOrder,Ze as default};
