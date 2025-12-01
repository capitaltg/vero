import { Button } from '../src/Button';

export const ButtonLoadingComparison = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">Normal state:</p>
      <Button variant="primary">Take this action</Button>
    </div>
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">Loading state (width preserved):</p>
      <Button isLoading variant="primary">
        Take this action
      </Button>
    </div>
  </div>
);
