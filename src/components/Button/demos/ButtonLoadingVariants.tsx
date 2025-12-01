import { Button } from '../src/Button';

export const ButtonLoadingVariants = () => (
  <div className="flex flex-wrap gap-4">
    <Button isLoading variant="default">
      Default Loading
    </Button>
    <Button isLoading variant="primary">
      Primary Loading
    </Button>
    <Button isLoading variant="danger">
      Danger Loading
    </Button>
    <Button isLoading variant="link">
      Link Loading
    </Button>
    <Button isLoading variant="input">
      Input Loading
    </Button>
    <Button isLoading variant="ghost">
      Ghost Loading
    </Button>
  </div>
);
