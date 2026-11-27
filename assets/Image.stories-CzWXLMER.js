import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{R as be,r as h}from"./index-B0WjJBI_.js";import{B as f}from"./Button-DJBoR_IJ.js";import{a as x}from"./utils-DrFeXHBK.js";const m=be.forwardRef(({src:s,alt:d,fallback:p,isLazy:g=!0,shape:ce="square",className:le,onError:u,...pe},de)=>{const[he,w]=h.useState(!1),[y,b]=h.useState(!0),[me,ge]=h.useState(s);s!==me&&(ge(s),w(!1),b(!0));const ue=ye=>{w(!0),u==null||u(ye)},fe=()=>{b(!1)},we={square:"",rounded:"rounded-lg",circle:"rounded-full"};return e.jsxs("div",{className:x("vero-image","relative overflow-hidden",we[ce],le),children:[y?e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 animate-pulse bg-muted",role:"presentation"}):null,e.jsx("img",{ref:de,alt:d,className:x("h-full w-full object-cover",y&&"invisible"),loading:g?"lazy":"eager",src:he&&p?p:s,onError:ue,onLoad:fe,...pe})]})});m.displayName="Image";m.__docgenInfo={description:"An `<img>` in a wrapper that shows a pulsing placeholder while the image loads. It loads\nlazily by default, can switch to a `fallback` image if the source fails, and can be shaped\nwith rounded corners or as a circle. Other props, such as `width` and `height`, go to the\n`<img>`.",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:"The image URL. Changing it shows the loading placeholder again until the new image loads."},alt:{required:!0,tsType:{name:"string"},description:"Text describing the image for screen readers. Pass `''` for a decorative image."},fallback:{required:!1,tsType:{name:"string"},description:"An image URL to show instead if `src` fails to load."},isLazy:{required:!1,tsType:{name:"boolean"},description:'Loads the image only when it nears the viewport, with `loading="lazy"`. Defaults to `true`.',defaultValue:{value:"true",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"The corner style: `square`, `rounded` or `circle`. Defaults to `square`.",defaultValue:{value:"'square'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Classes for the wrapper `<div>`, merged after the defaults. The `<img>` fills the wrapper\nand is cropped to fit."}},composes:["Omit"]};const xe="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",Se="https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg",ie=()=>{const[s,d]=h.useState(""),p=g=>d(`${g}?v=${Date.now()}`);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{alt:"Runtime src change demo",height:400,src:s,width:800}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(f,{variant:"ghost",onClick:()=>d(""),children:"Set empty src"}),e.jsx(f,{onClick:()=>p(xe),children:"Load landscape"}),e.jsx(f,{onClick:()=>p(Se),children:"Load gradient"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Current src: ",s?s.split("?")[0]:"(empty)"]})]})};ie.__docgenInfo={description:`Demonstrates changing the \`src\` at runtime. The image starts with an empty src and can
be swapped between two URLs; the loading skeleton clears once the new image loads
instead of getting stuck. A cache-busting query param is appended so the skeleton is
visible on each change.`,methods:[],displayName:"ImageChangingSrc"};const je=`import { useState } from 'react';
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
`,ve={title:"Data & Display/Image",component:m,parameters:{},argTypes:{src:{control:"text",table:{type:{summary:"string"}}},alt:{control:"text",table:{type:{summary:"string"}}},fallback:{control:"text",table:{type:{summary:"string"}}},isLazy:{control:"boolean",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},shape:{control:"select",options:["square","rounded","circle"],table:{type:{summary:"square | rounded | circle"}}},width:{control:"number",description:"Width of the image in pixels",table:{type:{summary:"number"}}},height:{control:"number",description:"Height of the image in pixels",table:{type:{summary:"number"}}},className:{type:"string"}}},a={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",shape:"square",isLazy:!0,width:800,height:400}},t={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:800,height:400}},r={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",isLazy:!1,width:800,height:400}},o={args:{src:"invalid-url.jpg",fallback:"https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg",alt:"Image with fallback",width:800,height:400}},n={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:400,shape:"rounded"}},i={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:400,shape:"circle"}},c={args:{src:"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",alt:"A beautiful landscape",width:400,height:300,className:"rounded-lg shadow-lg"}},l={render:()=>e.jsx(ie,{}),args:{src:"",alt:"Runtime src change demo"},parameters:{docs:{source:{code:je,language:"tsx"}}}};var S,j,v,k,C;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    shape: 'square',
    isLazy: true,
    width: 800,
    height: 400
  }
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source},description:{story:`Use the controls to try each option. The docs page shows it under "Try it"; keep it the
first story, since the Examples section skips the first one.`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.description}}};var I,L,q,T,A;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 800,
    height: 400
  }
}`,...(q=(L=t.parameters)==null?void 0:L.docs)==null?void 0:q.source},description:{story:`The default state of the Image component.
Shows a basic image with lazy loading enabled.`,...(A=(T=t.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};var N,R,z,D,B;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    isLazy: false,
    width: 800,
    height: 400
  }
}`,...(z=(R=r.parameters)==null?void 0:R.docs)==null?void 0:z.source},description:{story:`Image with eager loading.
Demonstrates immediate loading without lazy loading behavior.`,...(B=(D=r.parameters)==null?void 0:D.docs)==null?void 0:B.description}}};var _,U,E,O,P;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    src: 'invalid-url.jpg',
    fallback: 'https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg',
    alt: 'Image with fallback',
    width: 800,
    height: 400
  }
}`,...(E=(U=o.parameters)==null?void 0:U.docs)==null?void 0:E.source},description:{story:`Image with fallback.
Shows how the component handles loading errors by displaying a fallback image.`,...(P=(O=o.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};var $,V,W,F,H;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'rounded'
  }
}`,...(W=(V=n.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:`Image with rounded corners.
Shows the image with rounded corners using the shape prop.`,...(H=(F=n.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};var M,G,J,K,Q;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'circle'
  }
}`,...(J=(G=i.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:`Circular image.
Shows the image in a circular shape.`,...(Q=(K=i.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var X,Y,Z,ee,se;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 300,
    className: 'rounded-lg shadow-lg'
  }
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`Image with custom dimensions and styling.
Demonstrates how to customize the image appearance.`,...(se=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:se.description}}};var ae,te,re,oe,ne;l.parameters={...l.parameters,docs:{...(ae=l.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(te=l.parameters)==null?void 0:te.docs)==null?void 0:re.source},description:{story:`Changing the \`src\` at runtime resets the loading state and shows the new image.

This covers the case where \`src\` starts empty (or is swapped for another URL) and is
then set to a valid image: the loading skeleton clears once the new image loads instead
of getting stuck. Use the buttons to set an empty src, load an image, or swap between
two images.`,...(ne=(oe=l.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};const ke=["Playground","Default","EagerLoading","WithFallback","Rounded","Circle","CustomStyle","ChangingSrc"],Te=Object.freeze(Object.defineProperty({__proto__:null,ChangingSrc:l,Circle:i,CustomStyle:c,Default:t,EagerLoading:r,Playground:a,Rounded:n,WithFallback:o,__namedExportsOrder:ke,default:ve},Symbol.toStringTag,{value:"Module"}));export{Te as I,a as P,m as a};
