import { Command } from '../src/Command';
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
