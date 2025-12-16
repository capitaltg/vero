import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{R as qe,r as i}from"./index-D4H_InIO.js";import{s as R}from"./styles-Bqt2ynIu.js";import{a as _}from"./utils-CU3My8Oi.js";import{X as Ee}from"./x-B9-lGSIk.js";import"./createLucideIcon-CRH11QI6.js";const u=qe.forwardRef(({value:e,className:o,placeholder:n="Type and press Enter...",maxTags:j,delimiterChars:c,isDisabled:l=!1,onChange:W,name:q,required:E,autoFocus:je,...ve},De)=>{const[m,A]=i.useState(""),[Ce,d]=i.useState(-1),v=i.useRef(null),g=i.useRef([]),w=i.useMemo(()=>c?Array.isArray(c)?c:[c]:[],[c]),N=t=>{if(j&&e.length>=j||!t.trim())return;const a={id:crypto.randomUUID(),text:t.trim()};W([...e,a]),A("")},Ae=t=>{var a,r;t.key==="Enter"&&m.trim()?(t.preventDefault(),N(m)):t.key==="Backspace"&&!m&&e.length>0?(t.preventDefault(),d(e.length-1),(a=g.current[e.length-1])==null||a.focus()):t.key==="ArrowLeft"&&!m&&Ce===-1&&e.length>0&&(t.preventDefault(),d(e.length-1),(r=g.current[e.length-1])==null||r.focus())},we=t=>{const a=t.target.value;if(w.length>0){const r=a.slice(-1);if(w.includes(r)){const p=a.slice(0,-1);N(p);return}const h=new RegExp(`[${w.map(p=>`\\${p}`).join("")}]`);if(h.test(a)){const p=a.split(h),D=p.pop()||"";p.forEach(C=>N(C)),A(D);return}}A(a)},Ne=(t,a)=>{var r,h,p,D,C;t.key==="Backspace"||t.key==="Delete"?(t.preventDefault(),M(e[a].id),a>0?(d(a-1),(r=g.current[a-1])==null||r.focus()):((h=v.current)==null||h.focus(),d(-1))):t.key==="ArrowLeft"&&a>0?(t.preventDefault(),d(a-1),(p=g.current[a-1])==null||p.focus()):t.key==="ArrowRight"&&(t.preventDefault(),a<e.length-1?(d(a+1),(D=g.current[a+1])==null||D.focus()):((C=v.current)==null||C.focus(),d(-1)))},M=t=>{W(e.filter(a=>a.id!==t))},Re=t=>{var a;t.target===t.currentTarget&&((a=v.current)==null||a.focus(),d(-1))};i.useEffect(()=>{g.current=g.current.slice(0,e.length)},[e.length]);const We=i.useMemo(()=>c!=null&&c.length?`Type and press Enter or use ${(Array.isArray(c)?c:[c]).map(a=>`"${a}"`).join(" or ")} to add tags...`:n,[c,n]);return s.jsxs(s.Fragment,{children:[q||E?s.jsx("input",{name:q,required:E,type:"hidden",value:e.map(t=>t.text).join(",")}):null,s.jsxs("div",{ref:De,className:_(R.input,R.focusRingWithin,"flex h-auto min-h-[2.5rem] w-full cursor-text flex-wrap gap-1.5 py-1.5",l&&"cursor-not-allowed",o),...ve,onClick:Re,children:[e.map((t,a)=>s.jsxs("button",{ref:r=>g.current[a]=r,className:_(`flex items-center gap-1 rounded-sm bg-secondary px-2 py-0.5 text-sm
                text-secondary-foreground transition-colors`,"hover:bg-secondary/80",l&&"cursor-not-allowed opacity-50",R.focusRing,"focus:ring-2 focus:ring-offset-0"),disabled:l,type:"button",onClick:r=>r.stopPropagation(),onKeyDown:r=>Ne(r,a),children:[t.text,l?null:s.jsx(Ee,{"aria-label":`Remove ${t.text}`,className:"h-3 w-3 opacity-50 transition-opacity hover:opacity-100",role:"button",strokeWidth:3,onClick:r=>{r.stopPropagation(),M(t.id)}})]},t.id)),s.jsx("input",{ref:v,autoFocus:je,className:`flex-1 bg-transparent outline-none placeholder:text-muted-foreground
              disabled:cursor-not-allowed`,disabled:l||j!==void 0&&e.length>=j,placeholder:e.length===0?We:"",type:"text",value:m,onChange:we,onFocus:()=>d(-1),onKeyDown:Ae})]})]})});u.displayName="TagInput";u.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{value:{required:!0,tsType:{name:"Array",elements:[{name:"Tag"}],raw:"Tag[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type and press Enter...'",computed:!1}},maxTags:{required:!1,tsType:{name:"number"},description:""},delimiterChars:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tags: Tag[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Tag"}],raw:"Tag[]"},name:"tags"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:`The name attribute for form submission.
This is required for the tag input value to be included in form data.`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the tag input is required for form validation.
When true, the form cannot be submitted without at least one tag.`},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Automatically focuses the tag input when the page loads."}},composes:["Omit","TagInputFormAttributes"]};const Te=()=>{const[e,o]=i.useState([{id:"1",text:"React"},{id:"2",text:"TypeScript"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(u,{placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};Te.__docgenInfo={description:"",methods:[],displayName:"TagInputDefault"};const Me=`import { useState } from 'react';
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
`,xe=()=>{const[e,o]=i.useState([{id:"1",text:"React"},{id:"2",text:"TypeScript"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(u,{isDisabled:!0,placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};xe.__docgenInfo={description:"",methods:[],displayName:"TagInputDisabled"};const _e=`import { useState } from 'react';
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
`,ye=()=>{const[e,o]=i.useState([]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(u,{placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};ye.__docgenInfo={description:"",methods:[],displayName:"TagInputEmpty"};const ke=`import { useState } from 'react';
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
`,Ie=()=>{const[e,o]=i.useState([{id:"1",text:"React"},{id:"2",text:"TypeScript"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(u,{maxTags:3,placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};Ie.__docgenInfo={description:"",methods:[],displayName:"TagInputWithMaxTags"};const Fe=`import { useState } from 'react';
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
`,be=()=>{const[e,o]=i.useState([{id:"1",text:"React"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(u,{delimiterChars:[","," ","|"],placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};be.__docgenInfo={description:"",methods:[],displayName:"TagInputWithMultipleDelimiters"};const Ve=`import { useState } from 'react';
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
`,Se=()=>{const[e,o]=i.useState([{id:"1",text:"React"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(u,{delimiterChars:",",placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};Se.__docgenInfo={description:"",methods:[],displayName:"TagInputWithSingleDelimiter"};const $e=`import { useState } from 'react';
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
`,Xe={title:"Inputs & Forms/TagInput",component:u,parameters:{},argTypes:{value:{control:"object",description:"Array of id/string pairs representing tags",type:{name:"array",value:{name:"object",value:{}},required:!0}},delimiterChars:{control:"object",description:"Array delimiter characters to split tags",type:{name:"array",value:{name:"object",value:{}},required:!1}},isDisabled:{control:"boolean"},name:{control:"text",description:"The name attribute for form submission. This is required for the tag input value to be included in form data.",type:{name:"string",required:!1},table:{type:{summary:"string"}}},required:{control:"boolean",description:"Whether the tag input is required for form validation. When true, the form cannot be submitted without at least one tag.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}},autoFocus:{control:"boolean",description:"Automatically focuses the tag input when the page loads.",type:{name:"boolean",required:!1},table:{type:{summary:"boolean"}}}},tags:["!dev"]},f={args:{value:[],delimiterChars:[],onChange:()=>{},placeholder:"Add tags..."},tags:["!autodocs"]},T={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags..."},render:()=>s.jsx(Te,{}),parameters:{docs:{source:{code:Me,language:"tsx"}}}},x={args:{value:[],onChange:()=>{},placeholder:"Add tags..."},render:()=>s.jsx(ye,{}),parameters:{docs:{source:{code:ke,language:"tsx"}}}},y={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags...",isDisabled:!0},render:()=>s.jsx(xe,{}),parameters:{docs:{source:{code:_e,language:"tsx"}}}},I={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags...",maxTags:3},render:()=>s.jsx(Ie,{}),parameters:{docs:{source:{code:Fe,language:"tsx"}}}},b={args:{value:[{id:"1",text:"React"}],onChange:()=>{},placeholder:"Add tags...",delimiterChars:","},render:()=>s.jsx(Se,{}),parameters:{docs:{source:{code:$e,language:"tsx"}}}},S={args:{value:[{id:"1",text:"React"}],onChange:()=>{},placeholder:"Add tags...",delimiterChars:[","," ","|"]},render:()=>s.jsx(be,{}),parameters:{docs:{source:{code:Ve,language:"tsx"}}}};var k,F,V,$,K;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: [],
    delimiterChars: [],
    onChange: () => {},
    placeholder: 'Add tags...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(V=(F=f.parameters)==null?void 0:F.docs)==null?void 0:V.source},description:{story:`Interactive playground for the TagInput component.
Use the controls to experiment with different props and states.`,...(K=($=f.parameters)==null?void 0:$.docs)==null?void 0:K.description}}};var P,U,B,L,O;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(U=T.parameters)==null?void 0:U.docs)==null?void 0:B.source},description:{story:`The default state of the TagInput component.
Shows a tag input with some pre-existing tags for React and TypeScript.`,...(O=(L=T.parameters)==null?void 0:L.docs)==null?void 0:O.description}}};var X,z,G,H,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
Demonstrates how the component behaves when it reaches its tag limit.`,...(oe=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var ie,ce,de,pe,ue;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:`TagInput with a single delimiter character.
Shows how tags can be created using a comma as a separator.`,...(ue=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var ge,le,me,he,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
Demonstrates using multiple characters (comma, space, and pipe) to create tags.`,...(fe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};const ze=["Playground","Default","Empty","Disabled","WithMaxTags","WithSingleDelimiter","WithMultipleDelimiters"];export{T as Default,y as Disabled,x as Empty,f as Playground,I as WithMaxTags,S as WithMultipleDelimiters,b as WithSingleDelimiter,ze as __namedExportsOrder,Xe as default};
