import { useState } from 'react';
import { CheckboxGroup } from '../src/CheckboxGroup';

const tileOptions = [
  {
    id: 'startup',
    label: 'Startup',
    description: 'Perfect for new businesses and small teams',
  },
  {
    id: 'business',
    label: 'Business',
    description: 'For medium-sized businesses and growing teams',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    description: 'For large organizations and enterprise teams',
  },
];

export const CheckboxGroupTile = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-4">
      <CheckboxGroup options={tileOptions} value={value} variant="tile" onChange={setValue} />
      <p className="text-sm text-muted-foreground">
        Selected values: {value.length > 0 ? value.join(', ') : 'none'}
      </p>
    </div>
  );
};
