import { useState } from 'react';
import { TagInput } from '../src/TagInput';
import { Tag } from '../types';

export const TagInputWithSingleDelimiter = () => {
  const [tags, setTags] = useState<Tag[]>([{ id: '1', text: 'React' }]);

  return (
    <div className="space-y-4">
      <TagInput delimiterChars="," placeholder="Add tags..." value={tags} onChange={setTags} />
      <p className="text-sm text-muted-foreground">Tags: {tags.map(tag => tag.text).join(', ')}</p>
    </div>
  );
};
