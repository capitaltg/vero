import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{R as be,r as d}from"./index-D4H_InIO.js";import{s as q}from"./styles-hHSuIYOZ.js";import{c as W}from"./utils-l21BANrb.js";import{X as Ie}from"./x-B9-lGSIk.js";import"./createLucideIcon-CRH11QI6.js";const j=be.forwardRef(({value:a,className:v,placeholder:A="Type and press Enter...",maxTags:l,delimiterChars:r,isDisabled:p=!1,onChange:S,...ye},Te)=>{const[m,k]=d.useState(""),[xe,o]=d.useState(-1),b=d.useRef(null),c=d.useRef([]),E=d.useMemo(()=>r?Array.isArray(r)?r:[r]:[],[r]),P=t=>{if(l&&a.length>=l||!t.trim())return;const e={id:crypto.randomUUID(),text:t.trim()};S([...a,e]),k("")},we=t=>{var e,n;t.key==="Enter"&&m.trim()?(t.preventDefault(),P(m)):t.key==="Backspace"&&!m&&a.length>0?(t.preventDefault(),o(a.length-1),(e=c.current[a.length-1])==null||e.focus()):t.key==="ArrowLeft"&&!m&&xe===-1&&a.length>0&&(t.preventDefault(),o(a.length-1),(n=c.current[a.length-1])==null||n.focus())},Re=t=>{const e=t.target.value;if(E.length>0){const n=e.slice(-1);if(E.includes(n)){const i=e.slice(0,-1);P(i);return}const h=new RegExp(`[${E.map(i=>`\\${i}`).join("")}]`);if(h.test(e)){const i=e.split(h),I=i.pop()||"";i.forEach(C=>P(C)),k(I);return}}k(e)},De=(t,e)=>{var n,h,i,I,C;t.key==="Backspace"||t.key==="Delete"?(t.preventDefault(),N(a[e].id),e>0?(o(e-1),(n=c.current[e-1])==null||n.focus()):((h=b.current)==null||h.focus(),o(-1))):t.key==="ArrowLeft"&&e>0?(t.preventDefault(),o(e-1),(i=c.current[e-1])==null||i.focus()):t.key==="ArrowRight"&&(t.preventDefault(),e<a.length-1?(o(e+1),(I=c.current[e+1])==null||I.focus()):((C=b.current)==null||C.focus(),o(-1)))},N=t=>{S(a.filter(e=>e.id!==t))},Ae=t=>{var e;t.target===t.currentTarget&&((e=b.current)==null||e.focus(),o(-1))};d.useEffect(()=>{c.current=c.current.slice(0,a.length)},[a.length]);const Se=d.useMemo(()=>r!=null&&r.length?`Type and press Enter or use ${(Array.isArray(r)?r:[r]).map(e=>`"${e}"`).join(" or ")} to add tags...`:A,[r,A]);return s.jsxs("div",{ref:Te,className:W(q.input,q.focusRingWithin,"flex h-auto min-h-[2.5rem] w-full cursor-text flex-wrap gap-1.5 py-1.5",p&&"cursor-not-allowed",v),...ye,onClick:Ae,children:[a.map((t,e)=>s.jsxs("button",{ref:n=>c.current[e]=n,type:"button",disabled:p,onClick:n=>n.stopPropagation(),onKeyDown:n=>De(n,e),className:W("flex items-center gap-1 rounded-sm bg-secondary px-2 py-0.5 text-sm text-secondary-foreground transition-colors","hover:bg-secondary/80",p&&"cursor-not-allowed opacity-50",q.focusRing,"focus:ring-2 focus:ring-offset-0"),children:[t.text,p?null:s.jsx(Ie,{role:"button","aria-label":`Remove ${t.text}`,className:"h-3 w-3 opacity-50 transition-opacity hover:opacity-100",strokeWidth:3,onClick:n=>{n.stopPropagation(),N(t.id)}})]},t.id)),s.jsx("input",{ref:b,type:"text",value:m,onChange:Re,onKeyDown:we,onFocus:()=>o(-1),placeholder:a.length===0?Se:"",className:"flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",disabled:p||l!==void 0&&a.length>=l})]})});j.displayName="TagInput";j.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{value:{required:!0,tsType:{name:"Array",elements:[{name:"Tag"}],raw:"Tag[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type and press Enter...'",computed:!1}},maxTags:{required:!1,tsType:{name:"number"},description:""},delimiterChars:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tags: Tag[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Tag"}],raw:"Tag[]"},name:"tags"}],return:{name:"void"}}},description:""}}};const qe={title:"Inputs & Forms/TagInput",component:j,parameters:{},argTypes:{value:{control:"object",description:"Array of id/string pairs representing tags",type:{name:"array",value:{name:"object",value:{}},required:!0}},delimiterChars:{control:"object",description:"Array delimiter characters to split tags",type:{name:"array",value:{name:"object",value:{}},required:!1}},isDisabled:{control:"boolean"}},tags:["autodocs"]},u={value:[],onChange:()=>{},placeholder:"Add tags..."},g=({initialTags:a=[],maxTags:v,isDisabled:A,delimiterChars:l})=>{const[r,p]=d.useState(a);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(j,{value:r,onChange:p,maxTags:v,isDisabled:A,delimiterChars:l}),s.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tags: ",r.map(S=>S.text).join(", ")]})]})},f={args:{value:[],delimiterChars:[],onChange:()=>{},placeholder:"Add tags..."},tags:["!autodocs"]},y={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags..."},render:()=>s.jsx(g,{...u,initialTags:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}]})},T={args:{value:[],onChange:()=>{},placeholder:"Add tags..."},render:()=>s.jsx(g,{...u})},x={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags...",isDisabled:!0},render:()=>s.jsx(g,{...u,initialTags:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],isDisabled:!0})},w={args:{value:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],onChange:()=>{},placeholder:"Add tags...",maxTags:3},render:()=>s.jsx(g,{...u,initialTags:[{id:"1",text:"React"},{id:"2",text:"TypeScript"}],maxTags:3})},R={args:{value:[{id:"1",text:"React"}],onChange:()=>{},placeholder:"Add tags...",delimiterChars:","},render:()=>s.jsx(g,{...u,initialTags:[{id:"1",text:"React"}],delimiterChars:","})},D={args:{value:[{id:"1",text:"React"}],onChange:()=>{},placeholder:"Add tags...",delimiterChars:[","," ","|"]},render:()=>s.jsx(g,{...u,initialTags:[{id:"1",text:"React"}],delimiterChars:[","," ","|"]})};var M,V,$,K,_;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: [],
    delimiterChars: [],
    onChange: () => {},
    placeholder: 'Add tags...'
  },
  // Removes this story from auto-generated documentation
  tags: ['!autodocs']
}`,...($=(V=f.parameters)==null?void 0:V.docs)==null?void 0:$.source},description:{story:`Interactive playground for the TagInput component.
Use the controls to experiment with different props and states.`,...(_=(K=f.parameters)==null?void 0:K.docs)==null?void 0:_.description}}};var F,U,B,L,O;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  render: () => <TagInputDemo {...defaultProps} initialTags={[{
    id: '1',
    text: 'React'
  }, {
    id: '2',
    text: 'TypeScript'
  }]} />
}`,...(B=(U=y.parameters)==null?void 0:U.docs)==null?void 0:B.source},description:{story:`The default state of the TagInput component.
Shows a tag input with some pre-existing tags for React and TypeScript.`,...(O=(L=y.parameters)==null?void 0:L.docs)==null?void 0:O.description}}};var X,z,G,H,J;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    value: [],
    onChange: () => {},
    placeholder: 'Add tags...'
  },
  render: () => <TagInputDemo {...defaultProps} />
}`,...(G=(z=T.parameters)==null?void 0:z.docs)==null?void 0:G.source},description:{story:`An empty TagInput.
Shows the initial state before any tags are added.`,...(J=(H=T.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var Q,Y,Z,ee,te;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
  render: () => <TagInputDemo {...defaultProps} initialTags={[{
    id: '1',
    text: 'React'
  }, {
    id: '2',
    text: 'TypeScript'
  }]} isDisabled={true} />
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`A disabled TagInput.
Shows how the component appears when it's not interactive.`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,re,ne,se,oe;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
  render: () => <TagInputDemo {...defaultProps} initialTags={[{
    id: '1',
    text: 'React'
  }, {
    id: '2',
    text: 'TypeScript'
  }]} maxTags={3} />
}`,...(ne=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:`TagInput with a maximum number of tags.
Demonstrates how the component behaves when it reaches its tag limit.`,...(oe=(se=w.parameters)==null?void 0:se.docs)==null?void 0:oe.description}}};var ie,ce,de,pe,le;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    value: [{
      id: '1',
      text: 'React'
    }],
    onChange: () => {},
    placeholder: 'Add tags...',
    delimiterChars: ','
  },
  render: () => <TagInputDemo {...defaultProps} initialTags={[{
    id: '1',
    text: 'React'
  }]} delimiterChars="," />
}`,...(de=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:`TagInput with a single delimiter character.
Shows how tags can be created using a comma as a separator.`,...(le=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:le.description}}};var ue,ge,me,he,fe;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    value: [{
      id: '1',
      text: 'React'
    }],
    onChange: () => {},
    placeholder: 'Add tags...',
    delimiterChars: [',', ' ', '|']
  },
  render: () => <TagInputDemo {...defaultProps} initialTags={[{
    id: '1',
    text: 'React'
  }]} delimiterChars={[',', ' ', '|']} />
}`,...(me=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:me.source},description:{story:`TagInput with multiple delimiter characters.
Demonstrates using multiple characters (comma, space, and pipe) to create tags.`,...(fe=(he=D.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};const Ne=["Playground","Default","Empty","Disabled","WithMaxTags","WithSingleDelimiter","WithMultipleDelimiters"];export{y as Default,x as Disabled,T as Empty,f as Playground,w as WithMaxTags,D as WithMultipleDelimiters,R as WithSingleDelimiter,Ne as __namedExportsOrder,qe as default};
