import { Button } from '../src/Button';

export const ButtonLoadingSizes = () => (
  <div className="flex items-center gap-4">
    <Button isLoading size="sm">
      Small Loading
    </Button>
    <Button isLoading size="default">
      Default Loading
    </Button>
    <Button isLoading size="lg">
      Large Loading
    </Button>
  </div>
);
