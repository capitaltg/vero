import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{s as m}from"./styles-BasBkTzl.js";import{a as i}from"./utils-CU3My8Oi.js";import{r as k}from"./index-D4H_InIO.js";import{C as E}from"./chevron-right-BRUXFm_s.js";import{c as M}from"./createLucideIcon-CRH11QI6.js";import{U as R,S as A}from"./user-CaWSvlEs.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],q=M("house",U),n=k.forwardRef(({items:l,separator:P=e.jsx(E,{className:"h-4 w-4"}),className:I,...W},_)=>e.jsx("nav",{ref:_,"aria-label":"Breadcrumb",className:i("flex",I),...W,children:e.jsx("ol",{className:"flex flex-wrap items-center gap-1 pl-0",children:l.map((o,c)=>e.jsxs("li",{className:"flex items-center gap-1",children:[o.href?e.jsx("a",{className:i(m.link,m.linkNoUnderline),href:o.href,children:o.label}):e.jsx("span",{className:"font-medium text-foreground",children:o.label}),c<l.length-1?e.jsx("span",{className:"text-muted-foreground",children:P}):null]},c))})}));n.displayName="Breadcrumbs";n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'<ChevronRight className="h-4 w-4" />',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const Q={title:"Actions & Navigation/Breadcrumbs",component:n,parameters:{},tags:["autodocs"]},a={args:{items:[{label:"Home",href:"/"},{label:"Documents",href:"/documents"},{label:"Current Page"}]}},s={args:{items:[{label:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(q,{className:"h-4 w-4"}),"Home"]}),href:"/"},{label:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(R,{className:"h-4 w-4"}),"Profile"]}),href:"/profile"},{label:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(A,{className:"h-4 w-4"}),"Settings"]})}]}},r={args:{items:[{label:"Home",href:"/"},{label:"Categories",href:"/categories"},{label:"Products"}],separator:"/"}},t={args:{items:[{label:"Home",href:"/"},{label:"Very Long Category Name That Might Wrap",href:"/category"},{label:"Even Longer Product Name That Definitely Should Wrap"}]}};var p,d,h,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Documents',
      href: '/documents'
    }, {
      label: 'Current Page'
    }]
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source},description:{story:`The default state of the Breadcrumbs component.
Shows a basic navigation path with text-only items.`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var f,b,x,N,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      label: <span className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            Home
          </span>,
      href: '/'
    }, {
      label: <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            Profile
          </span>,
      href: '/profile'
    }, {
      label: <span className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            Settings
          </span>
    }]
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:`Breadcrumbs with icons in the labels.
Demonstrates how to enhance navigation items with visual indicators.`,...(w=(N=s.parameters)==null?void 0:N.docs)==null?void 0:w.description}}};var y,j,S,v,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Categories',
      href: '/categories'
    }, {
      label: 'Products'
    }],
    separator: '/'
  }
}`,...(S=(j=r.parameters)==null?void 0:j.docs)==null?void 0:S.source},description:{story:`Breadcrumbs with a custom separator.
Shows how to customize the separator between navigation items.`,...(C=(v=r.parameters)==null?void 0:v.docs)==null?void 0:C.description}}};var H,B,T,D,L;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Very Long Category Name That Might Wrap',
      href: '/category'
    }, {
      label: 'Even Longer Product Name That Definitely Should Wrap'
    }]
  }
}`,...(T=(B=t.parameters)==null?void 0:B.docs)==null?void 0:T.source},description:{story:`Breadcrumbs with long text content.
Demonstrates how the component handles longer labels and wrapping.`,...(L=(D=t.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};const X=["Default","WithIcons","CustomSeparator","LongContent"];export{r as CustomSeparator,a as Default,t as LongContent,s as WithIcons,X as __namedExportsOrder,Q as default};
