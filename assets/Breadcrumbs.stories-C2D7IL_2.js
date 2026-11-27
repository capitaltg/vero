import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{s as m}from"./styles-DnVuGKPq.js";import{a as p}from"./utils-DrFeXHBK.js";import{r as q}from"./index-B0WjJBI_.js";import{C as z}from"./chevron-right-Dw3Smd9x.js";import{c as O}from"./createLucideIcon-BeEkWZrd.js";import{U as V,S as F}from"./user-mYAjcJ3w.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],J=O("house",G),l=q.forwardRef(({items:c,separator:R=e.jsx(z,{className:"h-4 w-4"}),className:W,...A},U)=>e.jsx("nav",{ref:U,"aria-label":"Breadcrumb",className:p("vero-breadcrumbs","flex",W),...A,children:e.jsx("ol",{className:"flex flex-wrap items-center gap-1 pl-0",children:c.map((o,i)=>e.jsxs("li",{className:"flex items-center gap-1",children:[o.href?e.jsx("a",{className:p(m.link,m.linkNoUnderline),href:o.href,children:o.label}):e.jsx("span",{"aria-current":"page",className:"font-medium text-foreground",children:o.label}),i<c.length-1?e.jsx("span",{className:"text-muted-foreground",children:R}):null]},i))})}));l.displayName="Breadcrumbs";l.__docgenInfo={description:'A trail of links showing where the current page sits in the site\'s hierarchy. It renders\na `<nav>` landmark named "Breadcrumb" holding an ordered list.',methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:'The trail, from the top level down to the current page. Items with an `href` render as\nlinks; an item without one is the current page and is marked `aria-current="page"`.'},separator:{required:!1,tsType:{name:"ReactNode"},description:"Shown between items, hidden from screen readers. Defaults to a chevron icon.",defaultValue:{value:'<ChevronRight className="h-4 w-4" />',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classes for the `<nav>`, merged after the defaults."}},composes:["HTMLAttributes"]};const K={title:"Actions & Navigation/Breadcrumbs",component:l,parameters:{},argTypes:{items:{control:"object",table:{type:{summary:"BreadcrumbItem[]"}}},separator:{control:"text",table:{type:{summary:"ReactNode"}}},className:{type:"string"}}},a={args:{items:[{label:"Home",href:"/"},{label:"Documents",href:"/documents"},{label:"Current Page"}]}},r={args:{items:[{label:"Home",href:"/"},{label:"Documents",href:"/documents"},{label:"Current Page"}]}},s={args:{items:[{label:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(J,{className:"h-4 w-4"}),"Home"]}),href:"/"},{label:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(V,{className:"h-4 w-4"}),"Profile"]}),href:"/profile"},{label:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(F,{className:"h-4 w-4"}),"Settings"]})}]}},t={args:{items:[{label:"Home",href:"/"},{label:"Categories",href:"/categories"},{label:"Products"}],separator:"/"}},n={args:{items:[{label:"Home",href:"/"},{label:"Very Long Category Name That Might Wrap",href:"/category"},{label:"Even Longer Product Name That Definitely Should Wrap"}]}};var d,h,u,g,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var b,y,w,x,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:`The default state of the Breadcrumbs component.
Shows a basic navigation path with text-only items.`,...(N=(x=r.parameters)==null?void 0:x.docs)==null?void 0:N.description}}};var v,S,j,C,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:`Breadcrumbs with icons in the labels.
Demonstrates how to enhance navigation items with visual indicators.`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.description}}};var H,P,T,k,D;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(T=(P=t.parameters)==null?void 0:P.docs)==null?void 0:T.source},description:{story:`Breadcrumbs with a custom separator.
Shows how to customize the separator between navigation items.`,...(D=(k=t.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};var _,I,L,E,M;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:`Breadcrumbs with long text content.
Demonstrates how the component handles longer labels and wrapping.`,...(M=(E=n.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};const Q=["Playground","Default","WithIcons","CustomSeparator","LongContent"],se=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:t,Default:r,LongContent:n,Playground:a,WithIcons:s,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{se as B,a as P,l as a};
