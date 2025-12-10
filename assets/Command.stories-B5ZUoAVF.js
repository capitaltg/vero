import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{C as t,a as I,b as f,c as a,d as m}from"./CommandItem-CiFaxsn-.js";import"./index-D4H_InIO.js";import"./utils-CU3My8Oi.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./createLucideIcon-CRH11QI6.js";import"./index-CQ-IqFoI.js";import"./index-DB-GfMvg.js";import"./index-Ak5Mws-w.js";import"./index-CWZjxdH8.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-DLaBReRc.js";const g=()=>o.jsxs(t,{className:"rounded-lg border shadow-md",children:[o.jsx(I,{placeholder:"Type a command or search..."}),o.jsx(f,{children:"No results found."}),o.jsxs(a,{heading:"Suggestions",children:[o.jsx(m,{children:"Calendar"}),o.jsx(m,{children:"Search"}),o.jsx(m,{children:"Settings"})]}),o.jsxs(a,{heading:"Recent",children:[o.jsx(m,{children:"Documents"}),o.jsx(m,{children:"Projects"}),o.jsx(m,{children:"Tasks"})]})]});g.__docgenInfo={description:"",methods:[],displayName:"CommandDefault"};const y=`import { Command } from '../src/Command';
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
`,x=()=>o.jsxs(t,{className:"rounded-lg border shadow-md",children:[o.jsx(I,{placeholder:"Search..."}),o.jsx(f,{children:"No results found."}),o.jsx(m,{children:"Item 1"}),o.jsx(m,{children:"Item 2"}),o.jsx(m,{children:"Item 3"})]});x.__docgenInfo={description:"",methods:[],displayName:"CommandWithoutGroups"};const j=`import { Command } from '../src/Command';
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
`,z={title:"Overlays & Feedback/Command",component:t,parameters:{},tags:["!dev"],argTypes:{label:{control:"text",description:"The label of the command menu",table:{type:{summary:"string"}}},shouldFilter:{control:"boolean",description:"Whether to filter results based on search",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},loop:{control:"boolean",description:"Whether to loop through items when navigating",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}}}},e={render:()=>o.jsx(g,{}),parameters:{docs:{source:{code:y}}}},r={render:()=>o.jsx(x,{}),parameters:{docs:{source:{code:j}}}};var n,s,d,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <CommandDefault />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeDefault
      }
    }
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source},description:{story:`The default command menu with groups and suggestions.
Shows a fully featured command palette with search, groups, and items.`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.description}}};var i,u,l,C,h;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <CommandWithoutGroups />,
  parameters: {
    docs: {
      source: {
        code: sourceCodeWithoutGroups
      }
    }
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source},description:{story:`A simplified command menu without groups.
Shows a basic list of commands without categorization.`,...(h=(C=r.parameters)==null?void 0:C.docs)==null?void 0:h.description}}};const A=["Default","WithoutGroups"];export{e as Default,r as WithoutGroups,A as __namedExportsOrder,z as default};
