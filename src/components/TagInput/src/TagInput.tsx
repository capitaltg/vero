import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Tag, TagInputProps } from '../types';

const TagInput = React.forwardRef<HTMLDivElement, TagInputProps>(
  (
    {
      value,
      className,
      placeholder = 'Type and press Enter...',
      maxTags,
      delimiterChars,
      isDisabled = false,
      onChange,
      name,
      required,
      autoFocus,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState('');
    const [focusedTagIndex, setFocusedTagIndex] = useState<number>(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const delimiters = useMemo(() => {
      if (!delimiterChars) return [];
      return Array.isArray(delimiterChars) ? delimiterChars : [delimiterChars];
    }, [delimiterChars]);

    const addTag = (text: string) => {
      if (maxTags && value.length >= maxTags) return;
      if (!text.trim()) return;

      const newTag: Tag = {
        id: crypto.randomUUID(),
        text: text.trim(),
      };

      onChange([...value, newTag]);
      setInputValue('');
    };

    const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
      if (evt.key === 'Enter' && inputValue.trim()) {
        evt.preventDefault();
        addTag(inputValue);
      } else if (evt.key === 'Backspace' && !inputValue && value.length > 0) {
        evt.preventDefault();
        setFocusedTagIndex(value.length - 1);
        tagsRef.current[value.length - 1]?.focus();
      } else if (
        evt.key === 'ArrowLeft' &&
        !inputValue &&
        focusedTagIndex === -1 &&
        value.length > 0
      ) {
        evt.preventDefault();
        setFocusedTagIndex(value.length - 1);
        tagsRef.current[value.length - 1]?.focus();
      }
    };

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = evt.target.value;

      if (delimiters.length > 0) {
        const lastChar = newValue.slice(-1);

        if (delimiters.includes(lastChar)) {
          const tagText = newValue.slice(0, -1);
          addTag(tagText);
          return;
        }

        // Split on any delimiter
        const pattern = new RegExp(`[${delimiters.map(d => `\\${d}`).join('')}]`);
        if (pattern.test(newValue)) {
          const tags = newValue.split(pattern);
          const lastTag = tags.pop() || '';

          tags.forEach(tag => addTag(tag));
          setInputValue(lastTag);
          return;
        }
      }

      setInputValue(newValue);
    };

    const handleTagKeyDown = (evt: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (evt.key === 'Backspace' || evt.key === 'Delete') {
        evt.preventDefault();
        removeTag(value[index].id);
        if (index > 0) {
          setFocusedTagIndex(index - 1);
          tagsRef.current[index - 1]?.focus();
        } else {
          inputRef.current?.focus();
          setFocusedTagIndex(-1);
        }
      } else if (evt.key === 'ArrowLeft' && index > 0) {
        evt.preventDefault();
        setFocusedTagIndex(index - 1);
        tagsRef.current[index - 1]?.focus();
      } else if (evt.key === 'ArrowRight') {
        evt.preventDefault();
        if (index < value.length - 1) {
          setFocusedTagIndex(index + 1);
          tagsRef.current[index + 1]?.focus();
        } else {
          inputRef.current?.focus();
          setFocusedTagIndex(-1);
        }
      }
    };

    const removeTag = (tagId: string) => {
      onChange(value.filter(tag => tag.id !== tagId));
    };

    const handleContainerClick = (evt: React.MouseEvent) => {
      if (evt.target === evt.currentTarget) {
        inputRef.current?.focus();
        setFocusedTagIndex(-1);
      }
    };

    // Reset refs array when tags change
    useEffect(() => {
      tagsRef.current = tagsRef.current.slice(0, value.length);
    }, [value.length]);

    // Handle autoFocus
    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus]);

    const placeholderText = useMemo(() => {
      if (!delimiterChars?.length) return placeholder;
      const delims = Array.isArray(delimiterChars) ? delimiterChars : [delimiterChars];
      return `Type and press Enter or use ${delims.map(d => `"${d}"`).join(' or ')} to add tags...`;
    }, [delimiterChars, placeholder]);

    return (
      <div
        ref={ref}
        className={cn(
          styles.input,
          styles.focusRingWithin,
          'flex h-auto min-h-[2.5rem] w-full cursor-text flex-wrap gap-1.5 py-1.5',
          isDisabled && 'cursor-not-allowed',
          className,
        )}
        {...props}
        onClick={handleContainerClick}
      >
        {value.map((tag, index) => (
          <button
            key={tag.id}
            ref={el => (tagsRef.current[index] = el)}
            className={cn(
              `flex items-center gap-1 rounded-sm bg-secondary px-2 py-0.5 text-sm
              text-secondary-foreground transition-colors`,
              'hover:bg-secondary/80',
              isDisabled && 'cursor-not-allowed opacity-50',
              styles.focusRing,
              'focus:ring-2 focus:ring-offset-0',
            )}
            disabled={isDisabled}
            type="button"
            onClick={evt => evt.stopPropagation()}
            onKeyDown={evt => handleTagKeyDown(evt, index)}
          >
            {tag.text}
            {!isDisabled ? (
              <X
                aria-label={`Remove ${tag.text}`}
                className="h-3 w-3 opacity-50 transition-opacity hover:opacity-100"
                role="button"
                strokeWidth={3}
                onClick={evt => {
                  evt.stopPropagation();
                  removeTag(tag.id);
                }}
              />
            ) : null}
          </button>
        ))}
        <input
          ref={inputRef}
          className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground
            disabled:cursor-not-allowed"
          disabled={isDisabled || (maxTags !== undefined && value.length >= maxTags)}
          name={name}
          placeholder={value.length === 0 ? placeholderText : ''}
          required={required}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setFocusedTagIndex(-1)}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  },
);
TagInput.displayName = 'TagInput';

export { TagInput };
