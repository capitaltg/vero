import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{R as ge,r as d}from"./index-B0WjJBI_.js";import{B as u}from"./Button-BinwIYAK.js";import{a as x}from"./utils-CU3My8Oi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAriaDisabled-BVkOu7OW.js";import"./index-BOrrHd12.js";import"./index-EiwPuDyL.js";import"./constants-D9UEAID0.js";import"./styles-CafxXXJc.js";import"./index-NE6MC3wq.js";import"./createLucideIcon-BeEkWZrd.js";const m=ge.forwardRef(({src:t,alt:p,fallback:a,isLazy:g=!0,shape:ae="square",className:se,onError:h,...re},oe)=>{const[ne,f]=d.useState(!1),[y,b]=d.useState(!0),[ie,ce]=d.useState(t);t!==ie&&(ce(t),f(!1),b(!0));const le=me=>{f(!0),h==null||h(me)},pe=()=>{b(!1)},de={square:"",rounded:"rounded-lg",circle:"rounded-full"};return e.jsxs("div",{className:x("vero-image","relative overflow-hidden",de[ae],se),children:[y?e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 animate-pulse bg-muted",role:"presentation"}):null,e.jsx("img",{ref:oe,alt:p,className:x("h-full w-full object-cover",y&&"invisible"),loading:g?"lazy":"eager",src:ne&&a?a:t,onError:le,onLoad:pe,...re})]})});m.displayName="Image";m.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},fallback:{required:!1,tsType:{name:"string"},description:""},isLazy:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const he="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",ue="https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg",te=()=>{const[t,p]=d.useState(""),a=g=>p(`${g}?v=${Date.now()}`);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{alt:"Runtime src change demo",height:400,src:t,width:800}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(u,{variant:"ghost",onClick:()=>p(""),children:"Set empty src"}),e.jsx(u,{onClick:()=>a(he),children:"Load landscape"}),e.jsx(u,{onClick:()=>a(ue),children:"Load gradient"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Current src: ",t?t.split("?")[0]:"(empty)"]})]})};te.__docgenInfo={description:`Demonstrates changing the \`src\` at runtime. The image starts with an empty src and can
be swapped between two URLs; the loading skeleton clears once the new image loads
instead of getting stuck. A cache-busting query param is appended so the skeleton is
visible on each change.`,methods:[],displayName:"ImageChangingSrc"};const fe=`import { useState } from 'react';
import { Button } from '../../Button';
import { Image } from '../src/Image';

const landscapeSrc = 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg';
const gradientSrc = 'https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg';

/**
 * Demonstrates changing the \`src\` at runtime. The image starts with an empty src and can
 * be swapped between two URLs; the loading skeleton clears once the new image loads
 * instead of getting stuck. A cache-busting query param is appended so the skeleton is
 * visible on each change.
 */
export const ImageChangingSrc = () => {
  const [src, setSrc] = useState('');
  const load = (url: string) => setSrc(\`\${url}?v=\${Date.now()}\`);

  return (
    <div className="space-y-4">
      <Image alt="Runtime src change demo" height={400} src={src} width={800} />
      <div className="flex flex-wrap gap-2">
        <Button variant="ghost" onClick={() => setSrc('')}>
          Set empty src
        </Button>
        <Button onClick={() => load(landscapeSrc)}>Load landscape</Button>
        <Button onClick={() => load(gradientSrc)}>Load gradient</Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Current src: {src ? src.split('?')[0] : '(empty)'}
      </p>
    </div>
  );
};
`,qe={title:"Data & Display/Image",component:m,parameters:{},tags:["autodocs"],argTypes:{src:{control:"text",description:"The source URL of the image",table:{type:{summary:"string"}}},alt:{control:"text",description:"Alternative text for the image",table:{type:{summary:"string"}}},fallback:{control:"text",description:"Fallback image URL to display if the main image fails to load",table:{type:{summary:"string"}}},isLazy:{control:"boolean",description:"Whether to enable lazy loading (defaults to true)",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},shape:{control:"select",options:["square","rounded","circle"],description:"The shape of the image",table:{type:{summary:"square | rounded | circle"}}},width:{control:"number",description:"Width of the image in pixels",table:{type:{summary:"number"}}},height:{control:"number",description:"Height of the image in pixels",table:{type:{summary:"number"}}},className:{type:"string",description:"Additional class names to apply to the image"}}},s={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:800,height:400}},r={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",isLazy:!1,width:800,height:400}},o={args:{src:"invalid-url.jpg",fallback:"https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg",alt:"Image with fallback",width:800,height:400}},n={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:400,shape:"rounded"}},i={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:400,shape:"circle"}},c={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:300,className:"rounded-lg shadow-lg"}},l={render:()=>e.jsx(te,{}),args:{src:"",alt:"Runtime src change demo"},parameters:{docs:{source:{code:fe,language:"tsx"}}}};var w,S,j,k,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 800,
    height: 400
  }
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:`The default state of the Image component.
Shows a basic image with lazy loading enabled.`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};var C,I,L,N,q;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    isLazy: false,
    width: 800,
    height: 400
  }
}`,...(L=(I=r.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:`Image with eager loading.
Demonstrates immediate loading without lazy loading behavior.`,...(q=(N=r.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};var R,A,T,B,D;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    src: 'invalid-url.jpg',
    fallback: 'https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg',
    alt: 'Image with fallback',
    width: 800,
    height: 400
  }
}`,...(T=(A=o.parameters)==null?void 0:A.docs)==null?void 0:T.source},description:{story:`Image with fallback.
Shows how the component handles loading errors by displaying a fallback image.`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var z,U,_,E,W;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'rounded'
  }
}`,...(_=(U=n.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:`Image with rounded corners.
Shows the image with rounded corners using the shape prop.`,...(W=(E=n.parameters)==null?void 0:E.docs)==null?void 0:W.description}}};var $,F,V,H,O;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'circle'
  }
}`,...(V=(F=i.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:`Circular image.
Shows the image in a circular shape.`,...(O=(H=i.parameters)==null?void 0:H.docs)==null?void 0:O.description}}};var G,J,K,M,P;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 300,
    className: 'rounded-lg shadow-lg'
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:`Image with custom dimensions and styling.
Demonstrates how to customize the image appearance.`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.description}}};var Q,X,Y,Z,ee;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <ImageChangingSrc />,
  args: {
    src: '',
    alt: 'Runtime src change demo'
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeChangingSrc,
        language: 'tsx'
      }
    }
  }
}`,...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Changing the \`src\` at runtime resets the loading state and shows the new image.

This covers the case where \`src\` starts empty (or is swapped for another URL) and is
then set to a valid image: the loading skeleton clears once the new image loads instead
of getting stuck. Use the buttons to set an empty src, load an image, or swap between
two images.`,...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};const Re=["Default","EagerLoading","WithFallback","Rounded","Circle","CustomStyle","ChangingSrc"];export{l as ChangingSrc,i as Circle,c as CustomStyle,s as Default,r as EagerLoading,n as Rounded,o as WithFallback,Re as __namedExportsOrder,qe as default};
