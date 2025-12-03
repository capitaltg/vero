import{j as m}from"./jsx-runtime-BO8uF4Og.js";import{C as a,a as I,b as f,c as t,d as o}from"./CommandItem-CiFaxsn-.js";import"./index-D4H_InIO.js";import"./utils-CU3My8Oi.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./createLucideIcon-CRH11QI6.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";const g=()=>m.jsxs(a,{className:"rounded-lg border shadow-md",children:[m.jsx(I,{placeholder:"Type a command or search..."}),m.jsx(f,{children:"No results found."}),m.jsxs(t,{heading:"Suggestions",children:[m.jsx(o,{children:"Calendar"}),m.jsx(o,{children:"Search"}),m.jsx(o,{children:"Settings"})]}),m.jsxs(t,{heading:"Recent",children:[m.jsx(o,{children:"Documents"}),m.jsx(o,{children:"Projects"}),m.jsx(o,{children:"Tasks"})]})]});g.__docgenInfo={description:"",methods:[],displayName:"CommandDefault"};const j=`import { Command } from '../src/Command';
import { CommandEmpty } from '../src/CommandEmpty';
import { CommandGroup } from '../src/CommandGroup';
import { CommandInput } from '../src/CommandInput';
import { CommandItem } from '../src/CommandItem';

export const CommandDefault = () => (
  <Command className="rounded-lg border shadow-md">
    <CommandInput placeholder="Type a command or search..." />
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
    <CommandGroup heading="Recent">
      <CommandItem>Documents</CommandItem>
      <CommandItem>Projects</CommandItem>
      <CommandItem>Tasks</CommandItem>
    </CommandGroup>
  </Command>
);
`,x=()=>m.jsxs(a,{className:"rounded-lg border shadow-md",children:[m.jsx(I,{placeholder:"Search..."}),m.jsx(f,{children:"No results found."}),m.jsx(o,{children:"Item 1"}),m.jsx(o,{children:"Item 2"}),m.jsx(o,{children:"Item 3"})]});x.__docgenInfo={description:"",methods:[],displayName:"CommandWithoutGroups"};const y=`import { Command } from '../src/Command';
import { CommandEmpty } from '../src/CommandEmpty';
import { CommandInput } from '../src/CommandInput';
import { CommandItem } from '../src/CommandItem';

export const CommandWithoutGroups = () => (
  <Command className="rounded-lg border shadow-md">
    <CommandInput placeholder="Search..." />
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandItem>Item 1</CommandItem>
    <CommandItem>Item 2</CommandItem>
    <CommandItem>Item 3</CommandItem>
  </Command>
);
`,F={title:"Overlays & Feedback/Command",component:a,parameters:{},tags:["!dev"]},e={render:()=>m.jsx(g,{}),parameters:{docs:{source:{code:j}}}},r={render:()=>m.jsx(x,{}),parameters:{docs:{source:{code:y}}}};var n,d,s,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <CommandDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(s=(d=e.parameters)==null?void 0:d.docs)==null?void 0:s.source},description:{story:`The default command menu with groups and suggestions.
Shows a fully featured command palette with search, groups, and items.`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.description}}};var i,u,C,l,h;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <CommandWithoutGroups />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithoutGroups
      }
    }
  }
}`,...(C=(u=r.parameters)==null?void 0:u.docs)==null?void 0:C.source},description:{story:`A simplified command menu without groups.
Shows a basic list of commands without categorization.`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.description}}};const q=["Default","WithoutGroups"];export{e as Default,r as WithoutGroups,q as __namedExportsOrder,F as default};
