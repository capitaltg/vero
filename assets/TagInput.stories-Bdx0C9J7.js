import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{R as Re,r as c}from"./index-D4H_InIO.js";import{s as b}from"./styles-Bqt2ynIu.js";import{a as M}from"./utils-CU3My8Oi.js";import{X as be}from"./x-B9-lGSIk.js";import"./createLucideIcon-CRH11QI6.js";const g=Re.forwardRef(({value:e,className:o,placeholder:n="Type and press Enter...",maxTags:D,delimiterChars:i,isDisabled:l=!1,onChange:W,...Se},je)=>{const[m,N]=c.useState(""),[De,d]=c.useState(-1),v=c.useRef(null),u=c.useRef([]),w=c.useMemo(()=>i?Array.isArray(i)?i:[i]:[],[i]),R=a=>{if(D&&e.length>=D||!a.trim())return;const t={id:crypto.randomUUID(),text:a.trim()};W([...e,t]),N("")},ve=a=>{var t,r;a.key==="Enter"&&m.trim()?(a.preventDefault(),R(m)):a.key==="Backspace"&&!m&&e.length>0?(a.preventDefault(),d(e.length-1),(t=u.current[e.length-1])==null||t.focus()):a.key==="ArrowLeft"&&!m&&De===-1&&e.length>0&&(a.preventDefault(),d(e.length-1),(r=u.current[e.length-1])==null||r.focus())},Ce=a=>{const t=a.target.value;if(w.length>0){const r=t.slice(-1);if(w.includes(r)){const p=t.slice(0,-1);R(p);return}const h=new RegExp(`[${w.map(p=>`\\${p}`).join("")}]`);if(h.test(t)){const p=t.split(h),C=p.pop()||"";p.forEach(A=>R(A)),N(C);return}}N(t)},Ae=(a,t)=>{var r,h,p,C,A;a.key==="Backspace"||a.key==="Delete"?(a.preventDefault(),E(e[t].id),t>0?(d(t-1),(r=u.current[t-1])==null||r.focus()):((h=v.current)==null||h.focus(),d(-1))):a.key==="ArrowLeft"&&t>0?(a.preventDefault(),d(t-1),(p=u.current[t-1])==null||p.focus()):a.key==="ArrowRight"&&(a.preventDefault(),t<e.length-1?(d(t+1),(C=u.current[t+1])==null||C.focus()):((A=v.current)==null||A.focus(),d(-1)))},E=a=>{W(e.filter(t=>t.id!==a))},Ne=a=>{var t;a.target===a.currentTarget&&((t=v.current)==null||t.focus(),d(-1))};c.useEffect(()=>{u.current=u.current.slice(0,e.length)},[e.length]);const we=c.useMemo(()=>i!=null&&i.length?`Type and press Enter or use ${(Array.isArray(i)?i:[i]).map(t=>`"${t}"`).join(" or ")} to add tags...`:n,[i,n]);return s.jsxs("div",{ref:je,className:M(b.input,b.focusRingWithin,"flex h-auto min-h-[2.5rem] w-full cursor-text flex-wrap gap-1.5 py-1.5",l&&"cursor-not-allowed",o),...Se,onClick:Ne,children:[e.map((a,t)=>s.jsxs("button",{ref:r=>u.current[t]=r,className:M(`flex items-center gap-1 rounded-sm bg-secondary px-2 py-0.5 text-sm
              text-secondary-foreground transition-colors`,"hover:bg-secondary/80",l&&"cursor-not-allowed opacity-50",b.focusRing,"focus:ring-2 focus:ring-offset-0"),disabled:l,type:"button",onClick:r=>r.stopPropagation(),onKeyDown:r=>Ae(r,t),children:[a.text,l?null:s.jsx(be,{"aria-label":`Remove ${a.text}`,className:"h-3 w-3 opacity-50 transition-opacity hover:opacity-100",role:"button",strokeWidth:3,onClick:r=>{r.stopPropagation(),E(a.id)}})]},a.id)),s.jsx("input",{ref:v,className:`flex-1 bg-transparent outline-none placeholder:text-muted-foreground
            disabled:cursor-not-allowed`,disabled:l||D!==void 0&&e.length>=D,placeholder:e.length===0?we:"",type:"text",value:m,onChange:Ce,onFocus:()=>d(-1),onKeyDown:ve})]})});g.displayName="TagInput";g.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{value:{required:!0,tsType:{name:"Array",elements:[{name:"Tag"}],raw:"Tag[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type and press Enter...'",computed:!1}},maxTags:{required:!1,tsType:{name:"number"},description:""},delimiterChars:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tags: Tag[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Tag"}],raw:"Tag[]"},name:"tags"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const he=()=>{const[e,o]=c.useState([{id:"1",text:"React"},{id:"2",text:"TypeScript"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};he.__docgenInfo={description:"",methods:[],displayName:"TagInputDefault"};const We=`import { useState } from 'react';
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
`,Te=()=>{const[e,o]=c.useState([{id:"1",text:"React"},{id:"2",text:"TypeScript"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{isDisabled:!0,placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};Te.__docgenInfo={description:"",methods:[],displayName:"TagInputDisabled"};const Ee=`import { useState } from 'react';
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
`,xe=()=>{const[e,o]=c.useState([]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};xe.__docgenInfo={description:"",methods:[],displayName:"TagInputEmpty"};const Me=`import { useState } from 'react';
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
`,fe=()=>{const[e,o]=c.useState([{id:"1",text:"React"},{id:"2",text:"TypeScript"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{maxTags:3,placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};fe.__docgenInfo={description:"",methods:[],displayName:"TagInputWithMaxTags"};const _e=`import { useState } from 'react';
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
`,ye=()=>{const[e,o]=c.useState([{id:"1",text:"React"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{delimiterChars:[","," ","|"],placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};ye.__docgenInfo={description:"",methods:[],displayName:"TagInputWithMultipleDelimiters"};const ke=`import { useState } from 'react';
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
`,Ie=()=>{const[e,o]=c.useState([{id:"1",text:"React"}]);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(g,{delimiterChars:",",placeholder:"Add tags...",value:e,onChange:o}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",e.map(n=>n.text).join(", ")]})]})};Ie.__docgenInfo={description:"",methods:[],displayName:"TagInputWithSingleDelimiter"};const qe=`import { useState } from 'react';
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
`,Be={title:"Inputs & Forms/TagInput",component:g,parameters:{},argTypes:{value:{control:"object",description:"Array of id/string pairs representing tags",type:{name:"array",value:{name:"object",value:{}},required:!0}},delimiterChars:{control:"object",description:"Array delimiter characters to split tags",type:{name:"array",value:{name:"object",value:{}},required:!1}},isDisabled:{control:"boolean"}},tags:["!dev"]},T={args:{value:[],delimiterChars:[],onChange:()=>{},placeholder:"Add tags..."},tags:["!autodocs"]},x={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags..."},render:()=>s.jsx(he,{}),parameters:{docs:{source:{code:We,language:"tsx"}}}},f={args:{value:[],onChange:()=>{},placeholder:"Add tags..."},render:()=>s.jsx(xe,{}),parameters:{docs:{source:{code:Me,language:"tsx"}}}},y={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags...",isDisabled:!0},render:()=>s.jsx(Te,{}),parameters:{docs:{source:{code:Ee,language:"tsx"}}}},I={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags...",maxTags:3},render:()=>s.jsx(fe,{}),parameters:{docs:{source:{code:_e,language:"tsx"}}}},S={args:{value:[{id:"1",text:"React"}],onChange:()=>{},placeholder:"Add tags...",delimiterChars:","},render:()=>s.jsx(Ie,{}),parameters:{docs:{source:{code:qe,language:"tsx"}}}},j={args:{value:[{id:"1",text:"React"}],onChange:()=>{},placeholder:"Add tags...",delimiterChars:[","," ","|"]},render:()=>s.jsx(ye,{}),parameters:{docs:{source:{code:ke,language:"tsx"}}}};var _,k,q,V,$;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: [],
    delimiterChars: [],
    onChange: () => {},
    placeholder: 'Add tags...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...(q=(k=T.parameters)==null?void 0:k.docs)==null?void 0:q.source},description:{story:`Interactive playground for the TagInput component.
Use the controls to experiment with different props and states.`,...($=(V=T.parameters)==null?void 0:V.docs)==null?void 0:$.description}}};var K,P,F,U,B;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(F=(P=x.parameters)==null?void 0:P.docs)==null?void 0:F.source},description:{story:`The default state of the TagInput component.
Shows a tag input with some pre-existing tags for React and TypeScript.`,...(B=(U=x.parameters)==null?void 0:U.docs)==null?void 0:B.description}}};var L,O,X,z,G;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(X=(O=f.parameters)==null?void 0:O.docs)==null?void 0:X.source},description:{story:`An empty TagInput.
Shows the initial state before any tags are added.`,...(G=(z=f.parameters)==null?void 0:z.docs)==null?void 0:G.description}}};var H,J,Q,Y,Z;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:`A disabled TagInput.
Shows how the component appears when it's not interactive.`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,te,ae,se,re;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:`TagInput with a maximum number of tags.
Demonstrates how the component behaves when it reaches its tag limit.`,...(re=(se=I.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var ne,oe,ce,ie,de;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ce=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ce.source},description:{story:`TagInput with a single delimiter character.
Shows how tags can be created using a comma as a separator.`,...(de=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:de.description}}};var pe,ge,ue,le,me;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:ue.source},description:{story:`TagInput with multiple delimiter characters.
Demonstrates using multiple characters (comma, space, and pipe) to create tags.`,...(me=(le=j.parameters)==null?void 0:le.docs)==null?void 0:me.description}}};const Le=["Playground","Default","Empty","Disabled","WithMaxTags","WithSingleDelimiter","WithMultipleDelimiters"];export{x as Default,y as Disabled,f as Empty,T as Playground,I as WithMaxTags,j as WithMultipleDelimiters,S as WithSingleDelimiter,Le as __namedExportsOrder,Be as default};
