import{j as s}from"./jsx-runtime-DSvmvvsx.js";import{R as Ee,r as i}from"./index-B0WjJBI_.js";import{s as R}from"./styles-CafxXXJc.js";import{a as W}from"./utils-CU3My8Oi.js";import{u as Me}from"./useAriaDisabled-BVkOu7OW.js";import{X as _e}from"./x-DEnjg7Le.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BeEkWZrd.js";const g=Ee.forwardRef(({value:e,className:n,placeholder:r="Type and press Enter...",maxTags:j,delimiterChars:c,isDisabled:d=!1,onChange:q,name:E,required:M,autoFocus:je,...be},De)=>{const[m,C]=i.useState(""),[Ae,p]=i.useState(-1),b=i.useRef(null),l=i.useRef([]),Ce=Me({isDisabled:d}),w=i.useMemo(()=>c?Array.isArray(c)?c:[c]:[],[c]),N=t=>{if(j&&e.length>=j||!t.trim())return;const a={id:crypto.randomUUID(),text:t.trim()};q([...e,a]),C("")},we=t=>{var a,o;t.key==="Enter"&&m.trim()?(t.preventDefault(),N(m)):t.key==="Backspace"&&!m&&e.length>0?(t.preventDefault(),p(e.length-1),(a=l.current[e.length-1])==null||a.focus()):t.key==="ArrowLeft"&&!m&&Ae===-1&&e.length>0&&(t.preventDefault(),p(e.length-1),(o=l.current[e.length-1])==null||o.focus())},Ne=t=>{const a=t.target.value;if(w.length>0){const o=a.slice(-1);if(w.includes(o)){const u=a.slice(0,-1);N(u);return}const h=new RegExp(`[${w.map(u=>`\\${u}`).join("")}]`);if(h.test(a)){const u=a.split(h),D=u.pop()||"";u.forEach(A=>N(A)),C(D);return}}C(a)},Re=(t,a)=>{var o,h,u,D,A;t.key==="Backspace"||t.key==="Delete"?(t.preventDefault(),_(e[a].id),a>0?(p(a-1),(o=l.current[a-1])==null||o.focus()):((h=b.current)==null||h.focus(),p(-1))):t.key==="ArrowLeft"&&a>0?(t.preventDefault(),p(a-1),(u=l.current[a-1])==null||u.focus()):t.key==="ArrowRight"&&(t.preventDefault(),a<e.length-1?(p(a+1),(D=l.current[a+1])==null||D.focus()):((A=b.current)==null||A.focus(),p(-1)))},_=t=>{q(e.filter(a=>a.id!==t))},We=t=>{var a;d||t.target===t.currentTarget&&((a=b.current)==null||a.focus(),p(-1))};i.useEffect(()=>{l.current=l.current.slice(0,e.length)},[e.length]);const qe=i.useMemo(()=>c!=null&&c.length?`Type and press Enter or use ${(Array.isArray(c)?c:[c]).map(a=>`"${a}"`).join(" or ")} to add tags...`:r,[c,r]);return s.jsxs(s.Fragment,{children:[E||M?s.jsx("input",{name:E,required:M,type:"hidden",value:e.map(t=>t.text).join(",")}):null,s.jsxs("div",{ref:De,"aria-disabled":d||void 0,className:W("vero-tag-input",R.input,R.focusRingWithin,"flex h-auto min-h-[2.5rem] w-full cursor-text flex-wrap gap-1.5 py-1.5",d&&"cursor-not-allowed",n),"data-component":"tag-input",...be,onClick:We,children:[e.map((t,a)=>s.jsxs("button",{ref:o=>l.current[a]=o,"aria-label":`Remove ${t.text}`,className:W(`flex items-center gap-1 rounded-sm bg-secondary px-2 py-0.5 text-sm
                text-secondary-foreground transition-colors`,"hover:bg-secondary/80",d&&"cursor-not-allowed opacity-50",R.focusRing,"focus:ring-2 focus:ring-offset-0"),type:"button",onClick:o=>{o.stopPropagation(),d||_(t.id)},onKeyDown:o=>Re(o,a),...Ce,children:[t.text,s.jsx(_e,{"aria-hidden":"true",className:W("h-3 w-3 opacity-50 transition-opacity",!d&&"hover:opacity-100"),strokeWidth:3})]},t.id)),s.jsx("input",{ref:b,"aria-disabled":d||void 0,autoFocus:je,className:`flex-1 bg-transparent outline-none placeholder:text-muted-foreground
              read-only:cursor-not-allowed`,placeholder:e.length===0?qe:"",readOnly:d||j!==void 0&&e.length>=j,type:"text",value:m,onChange:Ne,onFocus:()=>p(-1),onKeyDown:we})]})]})});g.displayName="TagInput";g.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{value:{required:!0,tsType:{name:"Array",elements:[{name:"Tag"}],raw:"Tag[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type and press Enter...'",computed:!1}},maxTags:{required:!1,tsType:{name:"number"},description:""},delimiterChars:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tags: Tag[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Tag"}],raw:"Tag[]"},name:"tags"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the tag input value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the tag input is required for form validation.
When true, the form cannot be submitted without at least one tag.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the tag input when the page loads."}},composes:["Omit","TagInputFormAttributes"]};const Te=()=>{const[e,n]=i.useState([{id:"1",text:"React"},{id:"2",text:"TypeScript"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{placeholder:"Add tags...",value:e,onChange:n}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(r=>r.text).join(", ")]})]})};Te.__docgenInfo={description:"",methods:[],displayName:"TagInputDefault"};const ke=`import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag } from '../types';

export const TagInputDefault = () => {
  const [tags, setTags] = useState<Tag[]>([
    { id: '1', text: 'React' },
    { id: '2', text: 'TypeScript' },
  ]);

  return (
    <div className="space-y-4">
      <TagInput placeholder="Add tags..." value={tags} onChange={setTags} />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};
`,xe=()=>{const[e,n]=i.useState([{id:"1",text:"React"},{id:"2",text:"TypeScript"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{isDisabled:!0,placeholder:"Add tags...",value:e,onChange:n}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(r=>r.text).join(", ")]})]})};xe.__docgenInfo={description:"",methods:[],displayName:"TagInputDisabled"};const Fe=`import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag } from '../types';

export const TagInputDisabled = () => {
  const [tags, setTags] = useState<Tag[]>([
    { id: '1', text: 'React' },
    { id: '2', text: 'TypeScript' },
  ]);

  return (
    <div className="space-y-4">
      <TagInput isDisabled={true} placeholder="Add tags..." value={tags} onChange={setTags} />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};
`,ye=()=>{const[e,n]=i.useState([]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{placeholder:"Add tags...",value:e,onChange:n}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(r=>r.text).join(", ")]})]})};ye.__docgenInfo={description:"",methods:[],displayName:"TagInputEmpty"};const Ve=`import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag } from '../types';

export const TagInputEmpty = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <div className="space-y-4">
      <TagInput placeholder="Add tags..." value={tags} onChange={setTags} />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};
`,Ie=()=>{const[e,n]=i.useState([{id:"1",text:"React"},{id:"2",text:"TypeScript"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{maxTags:3,placeholder:"Add tags...",value:e,onChange:n}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(r=>r.text).join(", ")]})]})};Ie.__docgenInfo={description:"",methods:[],displayName:"TagInputWithMaxTags"};const $e=`import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag } from '../types';

export const TagInputWithMaxTags = () => {
  const [tags, setTags] = useState<Tag[]>([
    { id: '1', text: 'React' },
    { id: '2', text: 'TypeScript' },
  ]);

  return (
    <div className="space-y-4">
      <TagInput maxTags={3} placeholder="Add tags..." value={tags} onChange={setTags} />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};
`,ve=()=>{const[e,n]=i.useState([{id:"1",text:"React"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{delimiterChars:[","," ","|"],placeholder:"Add tags...",value:e,onChange:n}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(r=>r.text).join(", ")]})]})};ve.__docgenInfo={description:"",methods:[],displayName:"TagInputWithMultipleDelimiters"};const Ke=`import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag } from '../types';

export const TagInputWithMultipleDelimiters = () => {
  const [tags, setTags] = useState<Tag[]>([{ id: '1', text: 'React' }]);

  return (
    <div className="space-y-4">
      <TagInput
        delimiterChars={[',', ' ', '|']}
        placeholder="Add tags..."
        value={tags}
        onChange={setTags}
      />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};
`,Se=()=>{const[e,n]=i.useState([{id:"1",text:"React"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{delimiterChars:",",placeholder:"Add tags...",value:e,onChange:n}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(r=>r.text).join(", ")]})]})};Se.__docgenInfo={description:"",methods:[],displayName:"TagInputWithSingleDelimiter"};const Pe=`import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag } from '../types';

export const TagInputWithSingleDelimiter = () => {
  const [tags, setTags] = useState<Tag[]>([{ id: '1', text: 'React' }]);

  return (
    <div className="space-y-4">
      <TagInput delimiterChars="," placeholder="Add tags..." value={tags} onChange={setTags} />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};
`,Je={title:"Inputs & Forms/TagInput",component:g,parameters:{},argTypes:{value:{control:"object",description:"Array of id/string pairs representing tags",type:{name:"array",value:{name:"object",value:{}},required:!0}},delimiterChars:{control:"object",description:"Array delimiter characters to split tags",type:{name:"array",value:{name:"object",value:{}},required:!1}},isDisabled:{control:"boolean"},name:{control:"text",description:"The name attribute for form submission. This is required for the tag input value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the tag input is required for form validation. When true, the form cannot be submitted without at least one tag.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the tag input when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}},tags:["!dev"]},f={args:{value:[],delimiterChars:[],onChange:()=>{},placeholder:"Add tags..."},tags:["!autodocs"]},T={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags..."},render:()=>s.jsx(Te,{}),parameters:{docs:{source:{code:ke,language:"tsx"}}}},x={args:{value:[],onChange:()=>{},placeholder:"Add tags..."},render:()=>s.jsx(ye,{}),parameters:{docs:{source:{code:Ve,language:"tsx"}}}},y={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags...",isDisabled:!0},render:()=>s.jsx(xe,{}),parameters:{docs:{source:{code:Fe,language:"tsx"}}}},I={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags...",maxTags:3},render:()=>s.jsx(Ie,{}),parameters:{docs:{source:{code:$e,language:"tsx"}}}},v={args:{value:[{id:"1",text:"React"}],onChange:()=>{},placeholder:"Add tags...",delimiterChars:","},render:()=>s.jsx(Se,{}),parameters:{docs:{source:{code:Pe,language:"tsx"}}}},S={args:{value:[{id:"1",text:"React"}],onChange:()=>{},placeholder:"Add tags...",delimiterChars:[","," ","|"]},render:()=>s.jsx(ve,{}),parameters:{docs:{source:{code:Ke,language:"tsx"}}}};var k,F,V,$,K;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: [],
    delimiterChars: [],
    onChange: () => {},
    placeholder: 'Add tags...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(V=(F=f.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:`Interactive playground for the TagInput component.
Use the controls to experiment with different props and states.`,...(K=($=f.parameters)==null?void 0:$.docs)==null?void 0:K.description}}};var P,O,U,B,L;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: [{
      id: '1',
      text: 'React'
    }, {
      id: '2',
      text: 'TypeScript'
    }],
    onChange: () => {},
    placeholder: 'Add tags...'
  },
  render: () => <TagInputDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault,
        language: 'tsx'
      }
    }
  }
}`,...(U=(O=T.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:`The default state of the TagInput component.
Shows a tag input with some pre-existing tags for React and TypeScript.`,...(L=(B=T.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var X,z,G,H,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    value: [],
    onChange: () => {},
    placeholder: 'Add tags...'
  },
  render: () => <TagInputEmpty />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeEmpty,
        language: 'tsx'
      }
    }
  }
}`,...(G=(z=x.parameters)==null?void 0:z.docs)==null?void 0:G.source},description:{story:`An empty TagInput.
Shows the initial state before any tags are added.`,...(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var Q,Y,Z,ee,te;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    value: [{
      id: '1',
      text: 'React'
    }, {
      id: '2',
      text: 'TypeScript'
    }],
    onChange: () => {},
    placeholder: 'Add tags...',
    isDisabled: true
  },
  render: () => <TagInputDisabled />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDisabled,
        language: 'tsx'
      }
    }
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`A disabled TagInput.
Shows how the component appears when it's not interactive.`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,se,re,ne,oe;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    value: [{
      id: '1',
      text: 'React'
    }, {
      id: '2',
      text: 'TypeScript'
    }],
    onChange: () => {},
    placeholder: 'Add tags...',
    maxTags: 3
  },
  render: () => <TagInputWithMaxTags />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithMaxTags,
        language: 'tsx'
      }
    }
  }
}`,...(re=(se=I.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:`TagInput with a maximum number of tags.
Demonstrates how the component behaves when it reaches its tag limit.`,...(oe=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var ie,ce,de,pe,ue;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    value: [{
      id: '1',
      text: 'React'
    }],
    onChange: () => {},
    placeholder: 'Add tags...',
    delimiterChars: ','
  },
  render: () => <TagInputWithSingleDelimiter />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithSingleDelimiter,
        language: 'tsx'
      }
    }
  }
}`,...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:`TagInput with a single delimiter character.
Shows how tags can be created using a comma as a separator.`,...(ue=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var ge,le,me,he,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    value: [{
      id: '1',
      text: 'React'
    }],
    onChange: () => {},
    placeholder: 'Add tags...',
    delimiterChars: [',', ' ', '|']
  },
  render: () => <TagInputWithMultipleDelimiters />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithMultipleDelimiters,
        language: 'tsx'
      }
    }
  }
}`,...(me=(le=S.parameters)==null?void 0:le.docs)==null?void 0:me.source},description:{story:`TagInput with multiple delimiter characters.
Demonstrates using multiple characters (comma, space, and pipe) to create tags.`,...(fe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};const Qe=["Playground","Default","Empty","Disabled","WithMaxTags","WithSingleDelimiter","WithMultipleDelimiters"];export{T as Default,y as Disabled,x as Empty,f as Playground,I as WithMaxTags,S as WithMultipleDelimiters,v as WithSingleDelimiter,Qe as __namedExportsOrder,Je as default};
