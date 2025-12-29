import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const AutocompleteWithItemCallback = ({
  value: initialValue = '',
  ...args
}: AutocompleteProps<User, 'id', 'name'>) => {
  const [value, setValue] = useState<number | ''>(initialValue);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Developer' },
    { id: 5, name: 'Eve Wilson', email: 'eve@example.com', role: 'Designer' },
  ];

  return (
    <div className="space-y-4">
      <Autocomplete<User, 'id', 'name'>
        {...args}
        labelKey="name"
        options={users}
        placeholder="Select a user..."
        value={value}
        valueKey="id"
        onChange={(newValue, item) => {
          setValue(newValue);
          setSelectedUser(item || null);
        }}
      />
      {selectedUser ? (
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <h3 className="mb-2 text-sm font-semibold">Selected User Details</h3>
          <div className="space-y-1 text-sm">
            <p>
              <span className="font-medium">Name:</span> {selectedUser.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {selectedUser.email}
            </p>
            <p>
              <span className="font-medium">Role:</span> {selectedUser.role}
            </p>
            <p>
              <span className="font-medium">ID:</span> {selectedUser.id}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No user selected</p>
      )}
    </div>
  );
};
