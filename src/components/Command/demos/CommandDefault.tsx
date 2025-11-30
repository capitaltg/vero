import { Command } from '../src/Command';
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
