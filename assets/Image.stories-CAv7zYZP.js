import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{a as g}from"./utils-CU3My8Oi.js";import{R as te,r as l}from"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";const p=te.forwardRef(({src:c,alt:K,fallback:d,isLazy:M=!0,shape:P="square",className:Q,onError:i,...X},Y)=>{const[Z,m]=l.useState(!1),[u,h]=l.useState(!0);l.useEffect(()=>{m(!1),h(!0)},[c]);const $=se=>{m(!0),i==null||i(se)},ee=()=>{h(!1)},ae={square:"",rounded:"rounded-lg",circle:"rounded-full"};return n.jsxs("div",{className:g("vero-image","relative overflow-hidden",ae[P],Q),children:[u?n.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 animate-pulse bg-muted",role:"presentation"}):null,n.jsx("img",{ref:Y,alt:K,className:g("h-full w-full object-cover",u&&"invisible"),loading:M?"lazy":"eager",src:Z&&d?d:c,onError:$,onLoad:ee,...X})]})});p.displayName="Image";p.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},fallback:{required:!1,tsType:{name:"string"},description:""},isLazy:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const le={title:"Data & Display/Image",component:p,parameters:{},tags:["autodocs"],argTypes:{src:{control:"text",description:"The source URL of the image",table:{type:{summary:"string"}}},alt:{control:"text",description:"Alternative text for the image",table:{type:{summary:"string"}}},fallback:{control:"text",description:"Fallback image URL to display if the main image fails to load",table:{type:{summary:"string"}}},isLazy:{control:"boolean",description:"Whether to enable lazy loading (defaults to true)",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},shape:{control:"select",options:["square","rounded","circle"],description:"The shape of the image",table:{type:{summary:"square | rounded | circle"}}},width:{control:"number",description:"Width of the image in pixels",table:{type:{summary:"number"}}},height:{control:"number",description:"Height of the image in pixels",table:{type:{summary:"number"}}},className:{type:"string",description:"Additional class names to apply to the image"}}},e={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:800,height:400}},a={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",isLazy:!1,width:800,height:400}},s={args:{src:"invalid-url.jpg",fallback:"https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg",alt:"Image with fallback",width:800,height:400}},t={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:400,shape:"rounded"}},r={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:400,shape:"circle"}},o={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:300,className:"rounded-lg shadow-lg"}};var f,y,b,x,w;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 800,
    height: 400
  }
}`,...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:`The default state of the Image component.
Shows a basic image with lazy loading enabled.`,...(w=(x=e.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};var j,v,S,q,I;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    isLazy: false,
    width: 800,
    height: 400
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:`Image with eager loading.
Demonstrates immediate loading without lazy loading behavior.`,...(I=(q=a.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};var k,A,L,T,z;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    src: 'invalid-url.jpg',
    fallback: 'https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg',
    alt: 'Image with fallback',
    width: 800,
    height: 400
  }
}`,...(L=(A=s.parameters)==null?void 0:A.docs)==null?void 0:L.source},description:{story:`Image with fallback.
Shows how the component handles loading errors by displaying a fallback image.`,...(z=(T=s.parameters)==null?void 0:T.docs)==null?void 0:z.description}}};var N,R,D,E,C;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'rounded'
  }
}`,...(D=(R=t.parameters)==null?void 0:R.docs)==null?void 0:D.source},description:{story:`Image with rounded corners.
Shows the image with rounded corners using the shape prop.`,...(C=(E=t.parameters)==null?void 0:E.docs)==null?void 0:C.description}}};var W,_,F,V,H;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'circle'
  }
}`,...(F=(_=r.parameters)==null?void 0:_.docs)==null?void 0:F.source},description:{story:`Circular image.
Shows the image in a circular shape.`,...(H=(V=r.parameters)==null?void 0:V.docs)==null?void 0:H.description}}};var O,U,B,G,J;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 300,
    className: 'rounded-lg shadow-lg'
  }
}`,...(B=(U=o.parameters)==null?void 0:U.docs)==null?void 0:B.source},description:{story:`Image with custom dimensions and styling.
Demonstrates how to customize the image appearance.`,...(J=(G=o.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};const pe=["Default","EagerLoading","WithFallback","Rounded","Circle","CustomStyle"];export{r as Circle,o as CustomStyle,e as Default,a as EagerLoading,t as Rounded,s as WithFallback,pe as __namedExportsOrder,le as default};
