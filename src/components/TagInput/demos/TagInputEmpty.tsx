import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag } from '../types';

export const TagInputEmpty = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <div className="space-y-4">
      <TagInput value={tags} onChange={setTags} placeholder="Add tags..." />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};
