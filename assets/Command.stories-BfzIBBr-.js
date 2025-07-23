import{j as m}from"./jsx-runtime-BO8uF4Og.js";import{C as a,a as I,b as g,c as r,d as e}from"./CommandItem-BJODaxkT.js";import"./index-D4H_InIO.js";import"./utils-CytzSlOG.js";import"./index-C1hSi-0V.js";import"./index-bUn38NNn.js";import"./index-vYCkCKEW.js";import"./index-CZyo9ktw.js";import"./index-D8GmRN1t.js";import"./createLucideIcon-CRH11QI6.js";import"./index-D9Bpvn5I.js";import"./index-DwviEg3j.js";import"./index-DsCZslo7.js";import"./index-DXGtwV5R.js";import"./index-DAnQV6hb.js";import"./index-Dg2NYmXS.js";import"./index-CIFsUU6l.js";const z={title:"Components/Command",component:a,parameters:{},tags:["autodocs"]},o={render:()=>m.jsxs(a,{className:"rounded-lg border shadow-md",children:[m.jsx(I,{placeholder:"Type a command or search..."}),m.jsx(g,{children:"No results found."}),m.jsxs(r,{heading:"Suggestions",children:[m.jsx(e,{children:"Calendar"}),m.jsx(e,{children:"Search"}),m.jsx(e,{children:"Settings"})]}),m.jsxs(r,{heading:"Recent",children:[m.jsx(e,{children:"Documents"}),m.jsx(e,{children:"Projects"}),m.jsx(e,{children:"Tasks"})]})]})},n={render:()=>m.jsxs(a,{className:"rounded-lg border shadow-md",children:[m.jsx(I,{placeholder:"Search..."}),m.jsx(g,{children:"No results found."}),m.jsx(e,{children:"Item 1"}),m.jsx(e,{children:"Item 2"}),m.jsx(e,{children:"Item 3"})]})};var t,d,s,c,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
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
}`,...(s=(d=o.parameters)==null?void 0:d.docs)==null?void 0:s.source},description:{story:`The default command menu with groups and suggestions.
Shows a fully featured command palette with search, groups, and items.`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.description}}};var p,u,l,h,C;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search..." />
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandItem>Item 1</CommandItem>
      <CommandItem>Item 2</CommandItem>
      <CommandItem>Item 3</CommandItem>
    </Command>
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source},description:{story:`A simplified command menu without groups.
Shows a basic list of commands without categorization.`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.description}}};const A=["Default","WithoutGroups"];export{o as Default,n as WithoutGroups,A as __namedExportsOrder,z as default};
