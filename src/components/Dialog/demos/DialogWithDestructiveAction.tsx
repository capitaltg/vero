import { Button } from '@/components/Button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../src/Dialog';
import { DialogDescription } from '../src/DialogDescription';
import { DialogFooter } from '../src/DialogFooter';
import { DialogHeader } from '../src/DialogHeader';
import { DialogTitle } from '../src/DialogTitle';

export const DialogWithDestructiveAction = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="danger">Delete Account</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button>Cancel</Button>
        </DialogClose>
        <Button variant="danger">Delete Account</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
