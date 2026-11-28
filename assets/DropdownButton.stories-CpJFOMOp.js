import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{a as ie}from"./utils-DrFeXHBK.js";import{g as ge}from"./index-Cu56kmkr.js";import{D as he,a as be,b as ke,c as fe,d as we,e as Ce}from"./index-fFdRnNGy.js";import{r as k}from"./index-B0WjJBI_.js";import{B as ye}from"./Button-DJBoR_IJ.js";import{C as De}from"./chevron-down-CLkoBCE4.js";import{U as ae,S as re}from"./user-mYAjcJ3w.js";import{c as ve}from"./createLucideIcon-BeEkWZrd.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ce=ve("mail",Se),f=k.memo(({item:u})=>{const{isDisabled:o,onClick:n,icon:m,label:g}=u,h=k.useCallback(p=>{o?(p.preventDefault(),p.stopPropagation()):n==null||n()},[o,n]);return e.jsxs(he,{"aria-disabled":o,className:ie(`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm
        outline-none transition-colors focus:bg-accent focus:text-accent-foreground`,n&&!o&&"cursor-pointer",o&&"cursor-not-allowed opacity-50"),onClick:h,children:[m?e.jsx("span",{className:"mr-2",children:m}):null,g]})});f.displayName="DropdownMenuItem";f.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem",props:{item:{required:!0,tsType:{name:"DropdownItem"},description:""}}};const w=k.forwardRef(({className:u,children:o,items:n,align:m="start",variant:g="default",isDisabled:h=!1,zIndex:p,...de},me)=>{const pe=ge("dropdown",p);return e.jsxs(be,{children:[e.jsx(ke,{asChild:!0,children:e.jsxs(ye,{ref:me,className:ie("vero-dropdown-button","flex items-center gap-1",u),isDisabled:h,variant:g,...de,children:[o,e.jsx(De,{className:"h-4 w-4"})]})}),e.jsx(fe,{children:e.jsx(we,{align:m,className:`min-w-[8rem] overflow-hidden rounded-md border bg-popover px-1 py-1
              text-popover-foreground shadow-md data-[state=open]:animate-in
              data-[state=closed]:animate-out data-[state=closed]:fade-out-0
              data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95
              data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2
              data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
              data-[side=top]:slide-in-from-bottom-2`,sideOffset:4,style:{zIndex:pe},children:n.map((b,ue)=>b==="separator"?e.jsx(Ce,{className:"my-1 h-px bg-muted"},`separator-${ue}`):e.jsx(f,{item:b},b.label))})})]})});w.displayName="DropdownButton";w.__docgenInfo={description:`A button that opens a menu of actions, such as "Edit" or "Delete". The menu is an ARIA
menu (Radix DropdownMenu), navigated with the arrow keys.`,methods:[],displayName:"DropdownButton",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"DropdownItem | 'separator'",elements:[{name:"DropdownItem"},{name:"literal",value:"'separator'"}]}],raw:"DropdownItemType[]"},description:"The menu's items, in order. Pass `'separator'` for a line between groups of items."},children:{required:!0,tsType:{name:"ReactNode"},description:"The button's label. A chevron is added after it."},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'danger' | 'link' | 'input' | 'ghost' | null",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'link'"},{name:"literal",value:"'input'"},{name:"literal",value:"'ghost'"},{name:"null"}]},description:"The button's visual style, as on `Button`: `default`, `primary`, `danger`, `link`,\n`input` or `ghost`. Defaults to `default`.",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'default' | 'sm' | 'lg' | null",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"null"}]},description:"The button's height and padding, as on `Button`: `default`, `sm` or `lg`."},className:{required:!1,tsType:{name:"string"},description:"Classes for the button, merged after the defaults."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disables the button. It stays focusable and is marked `aria-disabled`.",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"The menu's alignment with the button. Defaults to `start`.",defaultValue:{value:"'start'",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"Overrides the configured dropdown z-index for the menu."}},composes:["Omit","VariantProps"]};const xe={title:"Actions & Navigation/DropdownButton",component:w,parameters:{},argTypes:{variant:{control:"select",options:["default","primary","danger","link","input","ghost"]},size:{options:["default","sm","lg"],control:"radio"},items:{control:"object"},className:{type:"string"}}},t={args:{children:"Actions",items:[{label:"Profile",onClick:()=>console.log("Profile clicked")},{label:"Settings",onClick:()=>console.log("Settings clicked")},"separator",{label:"Sign out",onClick:()=>console.log("Sign out clicked")}]}},l={args:{children:"Actions",items:[{label:"Profile",onClick:()=>console.log("Profile clicked")},{label:"Settings",onClick:()=>console.log("Settings clicked")},{label:"Logout",onClick:()=>console.log("Logout clicked")}]}},s={args:{children:"Disabled Dropdown Button",isDisabled:!0,items:[{label:"Profile",onClick:()=>console.log("Profile clicked")},{label:"Settings",onClick:()=>console.log("Settings clicked")},{label:"Logout",onClick:()=>console.log("Logout clicked")}]}},i={args:{children:"Menu",items:[{label:"Profile",icon:e.jsx(ae,{className:"h-4 w-4"}),onClick:()=>console.log("Profile clicked")},{label:"Settings",icon:e.jsx(re,{className:"h-4 w-4"}),onClick:()=>console.log("Settings clicked")},{label:"Messages",icon:e.jsx(ce,{className:"h-4 w-4"}),onClick:()=>console.log("Messages clicked")}]}},a={args:{children:"Options",items:[{label:"View profile",onClick:()=>console.log("View profile clicked")},{label:"Settings",onClick:()=>console.log("Settings clicked")},"separator",{label:"Help",onClick:()=>console.log("Help clicked")},{label:"Feedback",onClick:()=>console.log("Feedback clicked")},"separator",{label:"Logout",onClick:()=>console.log("Logout clicked")}]}},r={args:{children:"Options",items:[{label:"Active Option",icon:e.jsx(ae,{className:"h-4 w-4"}),onClick:()=>console.log("Active clicked")},{label:"Disabled Option (no onClick)",icon:e.jsx(re,{className:"h-4 w-4"}),isDisabled:!0},{label:"Disabled Option (with onClick - won't fire)",icon:e.jsx(ce,{className:"h-4 w-4"}),isDisabled:!0,onClick:()=>console.log("This will never fire")},"separator",{label:"Another Active",onClick:()=>console.log("Another clicked")},{label:"Disabled Text Only",isDisabled:!0}]}},c={args:{children:"Settings",variant:"link",items:[{label:"Account",onClick:()=>console.log("Account clicked")},{label:"Security",onClick:()=>console.log("Security clicked")},"separator",{label:"Notifications",onClick:()=>console.log("Notifications clicked")}]}},d={args:{children:"Aligned Menu",align:"end",items:[{label:"Right-aligned item 1",onClick:()=>console.log("Item 1 clicked")},{label:"Right-aligned item 2",onClick:()=>console.log("Item 2 clicked")}]}};var C,y,D,v,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Actions',
    items: [{
      label: 'Profile',
      onClick: () => console.log('Profile clicked')
    }, {
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    }, 'separator', {
      label: 'Sign out',
      onClick: () => console.log('Sign out clicked')
    }]
  }
}`,...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var x,A,N,I,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(A=l.parameters)==null?void 0:A.docs)==null?void 0:N.source},description:{story:`The default state of the DropdownButton component.
Shows a basic dropdown menu with simple text items.`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var P,M,j,O,L;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(M=s.parameters)==null?void 0:M.docs)==null?void 0:j.source},description:{story:`A disabled dropdown button.
Demonstrates how the component appears when it's not interactive.`,...(L=(O=s.parameters)==null?void 0:O.docs)==null?void 0:L.description}}};var B,_,q,R,z;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(_=i.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:`A dropdown menu with icons next to each item.
Shows how to enhance menu items with visual indicators.`,...(z=(R=i.parameters)==null?void 0:R.docs)==null?void 0:z.description}}};var V,W,E,U,F;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(W=a.parameters)==null?void 0:W.docs)==null?void 0:E.source},description:{story:`A dropdown menu with separators between groups of items.
Demonstrates how to organize menu items into logical sections.`,...(F=(U=a.parameters)==null?void 0:U.docs)==null?void 0:F.description}}};var H,Z,$,G,J;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...($=(Z=r.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:`A dropdown menu with some disabled items.
Shows how to indicate that certain options are not currently available.

Disabled items:
- Remain focusable for keyboard navigation (ARIA compliant)
- Are announced as disabled by screen readers via \`aria-disabled\`
- Prevent all interactions (mouse, touch, keyboard activation)
- Display with reduced opacity and a not-allowed cursor
- Even if they have an \`onClick\` handler, it will not fire when disabled`,...(J=(G=r.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var K,Q,X,Y,ee;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:`A dropdown button with a different visual style.
Demonstrates how to change the button's appearance using variants.`,...(ee=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:ee.description}}};var oe,ne,te,le,se;d.parameters={...d.parameters,docs:{...(oe=d.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(te=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:te.source},description:{story:`A dropdown menu with custom alignment.
Shows how to control the positioning of the dropdown menu.`,...(se=(le=d.parameters)==null?void 0:le.docs)==null?void 0:se.description}}};const Ae=["Playground","Default","Disabled","WithIcons","WithSeparators","WithDisabledItems","WithVariant","WithAlignment"],_e=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Disabled:s,Playground:t,WithAlignment:d,WithDisabledItems:r,WithIcons:i,WithSeparators:a,WithVariant:c,__namedExportsOrder:Ae,default:xe},Symbol.toStringTag,{value:"Module"}));export{_e as D,t as P,w as a};
