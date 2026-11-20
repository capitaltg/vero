import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { Bell, LogOut, Settings } from 'lucide-react';
import { useId, useState } from 'react';
import {
  Navbar,
  NavbarAction,
  NavbarActions,
  NavbarBrand,
  NavbarItem,
  NavbarNav,
} from '../src/Navbar';
import { NavbarProfile, NavbarProfileItem, NavbarProfileSeparator } from '../src/NavbarProfile';
import { Wordmark } from './Wordmark';

const initialNotifications = [
  { id: 1, text: 'Maria Lopez commented on Q3 roadmap', time: '5 minutes ago', unread: true },
  { id: 2, text: 'Your usage report export is ready', time: '1 hour ago', unread: true },
  { id: 3, text: 'Dev Patel added you to Website redesign', time: 'Yesterday', unread: true },
  { id: 4, text: 'The October invoice is available', time: '3 days ago', unread: false },
];

/**
 * Actions beside the profile menu. The bell is a `NavbarAction` used as a Popover trigger
 * (`PopoverTrigger asChild`), opening a list of notifications; its badge counts the unread
 * ones. Choosing a notification marks it read.
 */
export const NavbarWithActions = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const headingId = useId();
  const unread = notifications.filter(notification => notification.unread).length;

  const markRead = (id?: number) =>
    setNotifications(current =>
      current.map(notification =>
        id === undefined || notification.id === id
          ? { ...notification, unread: false }
          : notification,
      ),
    );

  return (
    <Navbar>
      <NavbarBrand href="#">
        <Wordmark name="Vero" />
      </NavbarBrand>
      <NavbarNav>
        <NavbarItem active href="#">
          Dashboard
        </NavbarItem>
        <NavbarItem href="#">Projects</NavbarItem>
        <NavbarItem href="#">Team</NavbarItem>
      </NavbarNav>
      <NavbarActions>
        <Popover>
          <PopoverTrigger asChild>
            <NavbarAction
              badge={unread}
              badgeLabel={`${unread} unread`}
              icon={<Bell />}
              label="Notifications"
            />
          </PopoverTrigger>
          <PopoverContent
            align="end"
            aria-labelledby={headingId}
            className="w-[min(22rem,calc(100vw-2rem))] p-0"
          >
            <div className="flex items-center justify-between border-b border-muted px-4 py-2">
              <h2 className="text-sm font-bold" id={headingId}>
                Notifications
              </h2>
              <Button isDisabled={unread === 0} size="sm" variant="link" onClick={() => markRead()}>
                Mark all as read
              </Button>
            </div>
            <ul className="m-0 max-h-80 list-none overflow-y-auto p-1">
              {notifications.map(notification => (
                <li key={notification.id}>
                  <a
                    className="flex gap-3 rounded-sm px-3 py-2.5 text-sm text-inherit no-underline
                      hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent
                      focus-visible:outline-none"
                    href="#"
                    onClick={() => markRead(notification.id)}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 size-2 shrink-0 rounded-full ${
                        notification.unread ? 'bg-primary-400' : 'bg-transparent'
                      }`}
                    />
                    <span className="min-w-0">
                      {notification.unread ? <span className="sr-only">Unread: </span> : null}
                      <span className={notification.unread ? 'font-bold' : undefined}>
                        {notification.text}
                      </span>
                      <span className="block text-xs text-base-400">{notification.time}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
        <NavbarProfile email="jane.doe@example.com" name="Jane Doe">
          <NavbarProfileItem icon={<Settings />}>Settings</NavbarProfileItem>
          <NavbarProfileSeparator />
          <NavbarProfileItem icon={<LogOut />}>Sign out</NavbarProfileItem>
        </NavbarProfile>
      </NavbarActions>
    </Navbar>
  );
};
