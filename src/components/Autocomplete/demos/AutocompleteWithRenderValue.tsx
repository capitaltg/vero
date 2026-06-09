import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';

interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  avatarColor: string;
}

const members: TeamMember[] = [
  {
    id: 'am',
    firstName: 'Alice',
    lastName: 'Martin',
    department: 'Engineering',
    avatarColor: 'bg-blue-500',
  },
  {
    id: 'bk',
    firstName: 'Bob',
    lastName: 'Kim',
    department: 'Design',
    avatarColor: 'bg-purple-500',
  },
  {
    id: 'cp',
    firstName: 'Clara',
    lastName: 'Patel',
    department: 'Product',
    avatarColor: 'bg-green-500',
  },
  {
    id: 'dw',
    firstName: 'David',
    lastName: 'Wu',
    department: 'Engineering',
    avatarColor: 'bg-orange-500',
  },
  {
    id: 'en',
    firstName: 'Eva',
    lastName: 'Novak',
    department: 'Design',
    avatarColor: 'bg-pink-500',
  },
];

function Avatar({ member, size = 'md' }: { member: TeamMember; size?: 'sm' | 'md' }) {
  const initials = `${member.firstName[0]}${member.lastName[0]}`;
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-medium text-white',
        member.avatarColor,
        size === 'sm' ? 'h-5 w-5 text-[0.625rem]' : 'h-7 w-7 text-xs',
      )}
    >
      {initials}
    </span>
  );
}

export const AutocompleteWithRenderValue = () => {
  const [value, setValue] = useState('');
  return (
    <div className="space-y-4">
      <Autocomplete<TeamMember>
        getOptionValue={m => m.id}
        options={members}
        placeholder="Select a team member..."
        renderOption={(member, isSelected) => (
          <div className="flex w-full items-center gap-3">
            <Check className={cn('h-4 w-4 shrink-0', isSelected ? 'opacity-100' : 'opacity-0')} />
            <Avatar member={member} />
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {member.firstName} {member.lastName}
              </span>
              <span className="text-xs text-muted-foreground">{member.department}</span>
            </div>
          </div>
        )}
        renderValue={member => (
          <div className="flex items-center gap-2">
            <Avatar member={member} size="sm" />
            <span>
              {member.firstName} {member.lastName}
            </span>
          </div>
        )}
        value={value}
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected ID: {value || 'none'}</p>
    </div>
  );
};
