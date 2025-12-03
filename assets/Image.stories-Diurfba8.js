import{j as n}from"./jsx-runtime-BO8uF4Og.js";import{a as d}from"./utils-CU3My8Oi.js";import{R as te,r as m}from"./index-D4H_InIO.js";const l=te.forwardRef(({src:G,alt:J,fallback:p,isLazy:K=!0,shape:M="square",className:P,onError:i,...Q},U)=>{const[X,Y]=m.useState(!1),[c,Z]=m.useState(!0),$=se=>{Y(!0),i==null||i(se)},ee=()=>{Z(!1)},ae={square:"",rounded:"rounded-lg",circle:"rounded-full"};return n.jsxs("div",{className:d("relative overflow-hidden",ae[M],P),children:[c?n.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 animate-pulse bg-muted",role:"presentation"}):null,n.jsx("img",{ref:U,alt:J,className:d("h-full w-full object-cover",c&&"invisible"),loading:K?"lazy":"eager",src:X&&p?p:G,onError:$,onLoad:ee,...Q})]})});l.displayName="Image";l.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},fallback:{required:!1,tsType:{name:"string"},description:""},isLazy:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const ne={title:"Data & Display/Image",component:l,parameters:{},tags:["autodocs"]},e={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:800,height:400}},a={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",isLazy:!1,width:800,height:400}},s={args:{src:"invalid-url.jpg",fallback:"https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg",alt:"Image with fallback",width:800,height:400}},t={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:400,shape:"rounded"}},r={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:400,shape:"circle"}},o={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:300,className:"rounded-lg shadow-lg"}};var h,u,g,f,w;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 800,
    height: 400
  }
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:`The default state of the Image component.
Shows a basic image with lazy loading enabled.`,...(w=(f=e.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var b,x,y,j,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    isLazy: false,
    width: 800,
    height: 400
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`Image with eager loading.
Demonstrates immediate loading without lazy loading behavior.`,...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.description}}};var v,I,q,k,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    src: 'invalid-url.jpg',
    fallback: 'https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg',
    alt: 'Image with fallback',
    width: 800,
    height: 400
  }
}`,...(q=(I=s.parameters)==null?void 0:I.docs)==null?void 0:q.source},description:{story:`Image with fallback.
Shows how the component handles loading errors by displaying a fallback image.`,...(A=(k=s.parameters)==null?void 0:k.docs)==null?void 0:A.description}}};var L,N,z,T,D;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'rounded'
  }
}`,...(z=(N=t.parameters)==null?void 0:N.docs)==null?void 0:z.source},description:{story:`Image with rounded corners.
Shows the image with rounded corners using the shape prop.`,...(D=(T=t.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var R,C,E,_,F;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'circle'
  }
}`,...(E=(C=r.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:`Circular image.
Shows the image in a circular shape.`,...(F=(_=r.parameters)==null?void 0:_.docs)==null?void 0:F.description}}};var O,V,W,H,B;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 300,
    className: 'rounded-lg shadow-lg'
  }
}`,...(W=(V=o.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:`Image with custom dimensions and styling.
Demonstrates how to customize the image appearance.`,...(B=(H=o.parameters)==null?void 0:H.docs)==null?void 0:B.description}}};const le=["Default","EagerLoading","WithFallback","Rounded","Circle","CustomStyle"];export{r as Circle,o as CustomStyle,e as Default,a as EagerLoading,t as Rounded,s as WithFallback,le as __namedExportsOrder,ne as default};
