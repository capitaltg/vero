import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{a as d}from"./utils-CU3My8Oi.js";import{R as te,r as m}from"./index-D4H_InIO.js";const l=te.forwardRef(({src:B,alt:G,fallback:p,isLazy:J=!0,shape:K="square",className:M,onError:i,...P},Q)=>{const[X,Y]=m.useState(!1),[c,Z]=m.useState(!0),$=se=>{Y(!0),i==null||i(se)},ee=()=>{Z(!1)},ae={square:"",rounded:"rounded-lg",circle:"rounded-full"};return n.jsxs("div",{className:d("relative overflow-hidden",ae[K],M),children:[c?n.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 animate-pulse bg-muted",role:"presentation"}):null,n.jsx("img",{ref:Q,alt:G,className:d("h-full w-full object-cover",c&&"invisible"),loading:J?"lazy":"eager",src:X&&p?p:B,onError:$,onLoad:ee,...P})]})});l.displayName="Image";l.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},fallback:{required:!1,tsType:{name:"string"},description:""},isLazy:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const ne={title:"Data & Display/Image",component:l,parameters:{},tags:["autodocs"],argTypes:{src:{control:"text",description:"The source URL of the image",table:{type:{summary:"string"}}},alt:{control:"text",description:"Alternative text for the image",table:{type:{summary:"string"}}},fallback:{control:"text",description:"Fallback image URL to display if the main image fails to load",table:{type:{summary:"string"}}},isLazy:{control:"boolean",description:"Whether to enable lazy loading (defaults to true)",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},shape:{control:"select",options:["square","rounded","circle"],description:"The shape of the image",table:{type:{summary:"square | rounded | circle"}}},width:{control:"number",description:"Width of the image in pixels",table:{type:{summary:"number"}}},height:{control:"number",description:"Height of the image in pixels",table:{type:{summary:"number"}}},className:{type:"string",description:"Additional class names to apply to the image"}}},e={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:800,height:400}},a={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",isLazy:!1,width:800,height:400}},s={args:{src:"invalid-url.jpg",fallback:"https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg",alt:"Image with fallback",width:800,height:400}},t={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:400,shape:"rounded"}},r={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:400,shape:"circle"}},o={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:300,className:"rounded-lg shadow-lg"}};var u,h,g,f,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 800,
    height: 400
  }
}`,...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:`The default state of the Image component.
Shows a basic image with lazy loading enabled.`,...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var b,x,w,j,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    isLazy: false,
    width: 800,
    height: 400
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source},description:{story:`Image with eager loading.
Demonstrates immediate loading without lazy loading behavior.`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.description}}};var S,q,I,k,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    src: 'invalid-url.jpg',
    fallback: 'https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg',
    alt: 'Image with fallback',
    width: 800,
    height: 400
  }
}`,...(I=(q=s.parameters)==null?void 0:q.docs)==null?void 0:I.source},description:{story:`Image with fallback.
Shows how the component handles loading errors by displaying a fallback image.`,...(A=(k=s.parameters)==null?void 0:k.docs)==null?void 0:A.description}}};var L,T,z,N,R;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'rounded'
  }
}`,...(z=(T=t.parameters)==null?void 0:T.docs)==null?void 0:z.source},description:{story:`Image with rounded corners.
Shows the image with rounded corners using the shape prop.`,...(R=(N=t.parameters)==null?void 0:N.docs)==null?void 0:R.description}}};var D,C,E,W,_;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'circle'
  }
}`,...(E=(C=r.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:`Circular image.
Shows the image in a circular shape.`,...(_=(W=r.parameters)==null?void 0:W.docs)==null?void 0:_.description}}};var F,V,H,O,U;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 300,
    className: 'rounded-lg shadow-lg'
  }
}`,...(H=(V=o.parameters)==null?void 0:V.docs)==null?void 0:H.source},description:{story:`Image with custom dimensions and styling.
Demonstrates how to customize the image appearance.`,...(U=(O=o.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};const le=["Default","EagerLoading","WithFallback","Rounded","Circle","CustomStyle"];export{r as Circle,o as CustomStyle,e as Default,a as EagerLoading,t as Rounded,s as WithFallback,le as __namedExportsOrder,ne as default};
