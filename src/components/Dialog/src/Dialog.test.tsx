import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Button } from '../../Button';
import { Dialog, DialogContent, DialogTrigger } from './Dialog';
import { DialogDescription } from './DialogDescription';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogTitle } from './DialogTitle';

describe('Dialog', () => {
  describe('Accessibility', () => {
    it('moves focus to the first interactable element when opened', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>Make changes to your profile here.</DialogDescription>
            </DialogHeader>
            <label htmlFor="name">Name</label>
            <input id="name" />
            <DialogFooter>
              <Button type="submit" variant="primary">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>,
      );

      await user.click(screen.getByRole('button', { name: 'Open Dialog' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      const nameInput = screen.getByLabelText('Name');
      expect(nameInput).toHaveFocus();
    });

    it('moves focus to the first footer button when there are no earlier inputs', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="danger">Delete Account</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>This action cannot be undone.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button>Cancel</Button>
              <Button variant="danger">Delete Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>,
      );

      await user.click(screen.getByRole('button', { name: 'Delete Account' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      expect(screen.getByRole('button', { name: 'Cancel' })).toHaveFocus();
    });

    it('moves focus to the first link when navigation is link-only', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Menu</DialogTitle>
            <DialogDescription>Choose a destination.</DialogDescription>
            <nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
            </nav>
          </DialogContent>
        </Dialog>,
      );

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      expect(screen.getByRole('link', { name: 'Home' })).toHaveFocus();
      expect(screen.getByRole('button', { name: 'Close' })).not.toHaveFocus();
    });

    it('skips aria-disabled controls when finding the first interactable element', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>Confirm</DialogTitle>
            <DialogDescription>Choose an action.</DialogDescription>
            <Button isDisabled>Disabled action</Button>
            <Button>Enabled action</Button>
          </DialogContent>
        </Dialog>,
      );

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      expect(screen.getByRole('button', { name: 'Enabled action' })).toHaveFocus();
    });

    it('does not move focus to the close button when other interactables exist', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Actions</DialogTitle>
            <DialogDescription>Select a primary action.</DialogDescription>
            <Button>Primary action</Button>
          </DialogContent>
        </Dialog>,
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      expect(screen.getByRole('button', { name: 'Primary action' })).toHaveFocus();
      expect(screen.getByRole('button', { name: 'Close' })).not.toHaveFocus();
    });
  });

  describe('Namespacing', () => {
    it('applies vero-* namespace classes to sub-parts and preserves custom classNames', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent className="custom-content">
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>,
      );

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      const content = screen.getByRole('dialog');
      expect(content).toHaveClass('vero-dialog-content');
      // Consumer-provided className still applies alongside the namespace class.
      expect(content).toHaveClass('custom-content');
      expect(screen.getByText('Title')).toHaveClass('vero-dialog-title');
      expect(screen.getByText('Description')).toHaveClass('vero-dialog-description');
    });
  });
});
