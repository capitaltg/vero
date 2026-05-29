import { Button } from '@/components/Button';
import { Dialog, DialogContent, DialogTrigger } from '../src/Dialog';
import { DialogDescription } from '../src/DialogDescription';
import { DialogHeader } from '../src/DialogHeader';
import { DialogTitle } from '../src/DialogTitle';

export const DialogInformationalOnly = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="primary">View notice</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Scheduled maintenance</DialogTitle>
        <DialogDescription>
          Our services will be unavailable on Sunday from 2:00 AM to 4:00 AM ET.
        </DialogDescription>
      </DialogHeader>
      <p className="text-sm text-muted-foreground">
        During this window, you may be unable to sign in or submit forms. No action is required on
        your part. Close this dialog when you are finished reading.
      </p>
    </DialogContent>
  </Dialog>
);
