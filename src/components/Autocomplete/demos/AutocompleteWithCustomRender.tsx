import { cn } from '@/lib/utils';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';
import { Autocomplete } from '../src/Autocomplete';
import { AutocompleteProps } from '../types';

interface AutocompleteOption {
  value: string;
  label: string;
  description?: string;
  featured?: boolean;
}

export const AutocompleteWithCustomRender = ({
  value: initialValue = '',
  ...args
}: AutocompleteProps<AutocompleteOption, 'value', 'label'>) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <div className="space-y-4">
      <Autocomplete<AutocompleteOption, 'value', 'label'>
        {...args}
        labelKey="label"
        options={[
          {
            value: 'react',
            label: 'React',
            description: 'A JavaScript library for building user interfaces',
            featured: true,
          },
          {
            value: 'vue',
            label: 'Vue.js',
            description: 'The Progressive JavaScript Framework',
            featured: true,
          },
          {
            value: 'angular',
            label: 'Angular',
            description: 'A platform for building mobile and desktop web applications',
          },
          {
            value: 'svelte',
            label: 'Svelte',
            description: 'Cybernetically enhanced web apps',
            featured: true,
          },
          { value: 'next', label: 'Next.js', description: 'The React Framework for Production' },
        ]}
        placeholder="Select a framework..."
        renderOption={(option, isSelected) => {
          return (
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-1 items-start gap-1">
                <Check
                  className={cn(
                    'mt-[0.1875rem] h-4 w-4 text-primary-400',
                    isSelected ? 'opacity-100' : 'opacity-0',
                  )}
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{option.label}</span>
                    {option.featured ? (
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    ) : null}
                  </div>
                  {option.description ? (
                    <span className="text-xs text-muted-foreground">{option.description}</span>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
        value={value}
        valueKey="value"
        onChange={setValue}
      />
      <p className="text-sm text-muted-foreground">Selected value: {value || 'none'}</p>
    </div>
  );
};
