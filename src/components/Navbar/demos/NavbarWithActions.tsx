import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { cn } from '@/lib/utils';
import {
  Bell,
  CheckCheck,
  FileDown,
  LogOut,
  MessageSquare,
  Receipt,
  Settings,
  UserPlus,
} from 'lucide-react';
import { useId, useRef, useState, type ReactNode } from 'react';
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

type Kind = 'comment' | 'export' | 'invite' | 'invoice';

type Notification = {
  id: number;
  kind: Kind;
  title: ReactNode;
  preview?: string;
  context: string;
  time: string;
  unread: boolean;
};

/** A tinted icon tile per kind of notification, so the list scans at a glance. */
const kindStyles: Record<Kind, { icon: ReactNode; className: string }> = {
  comment: { icon: <MessageSquare />, className: 'bg-primary-100 text-primary-400' },
  export: { icon: <FileDown />, className: 'bg-success-100 text-success-600' },
  invite: { icon: <UserPlus />, className: 'bg-info-100 text-info-700' },
  invoice: { icon: <Receipt />, className: 'bg-warning-100 text-warning-700' },
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    kind: 'comment',
    title: (
      <>
        <strong>Maria Lopez</strong> commented on <strong>Q3 roadmap</strong>
      </>
    ),
    preview: '“Can we move the beta launch up a week? Design is ready to hand off.”',
    context: 'Planning',
    time: '5 min ago',
    unread: true,
  },
  {
    id: 2,
    kind: 'export',
    title: (
      <>
        Your <strong>usage report</strong> export is ready
      </>
    ),
    context: 'Reports',
    time: '1 hr ago',
    unread: true,
  },
  {
    id: 3,
    kind: 'invite',
    title: (
      <>
        <strong>Dev Patel</strong> added you to <strong>Website redesign</strong>
      </>
    ),
    context: 'Projects',
    time: 'Yesterday',
    unread: true,
  },
  {
    id: 4,
    kind: 'invoice',
    title: (
      <>
        The <strong>October invoice</strong> is available
      </>
    ),
    context: 'Billing',
    time: '3 days ago',
    unread: false,
  },
  {
    id: 5,
    kind: 'comment',
    title: (
      <>
        <strong>Sam Chen</strong> replied to you on <strong>Budget review</strong>
      </>
    ),
    preview: '“Agreed. Let’s keep travel flat and move the savings to tooling.”',
    context: 'Finance',
    time: '4 days ago',
    unread: false,
  },
  {
    id: 6,
    kind: 'invite',
    title: (
      <>
        <strong>Alex Kim</strong> shared <strong>Brand guidelines</strong> with you
      </>
    ),
    context: 'Documents',
    time: 'Last week',
    unread: false,
  },
  {
    id: 7,
    kind: 'export',
    title: (
      <>
        Your <strong>audit log</strong> export is ready
      </>
    ),
    context: 'Reports',
    time: 'Last week',
    unread: false,
  },
];

const NotificationRow = ({
  notification,
  onSelect,
}: {
  notification: Notification;
  onSelect: () => void;
}) => {
  const { icon, className } = kindStyles[notification.kind];

  return (
    <li>
      <a
        className={cn(
          `relative flex gap-2.5 rounded-md px-3 py-2 text-sm text-inherit no-underline
          hover:bg-base-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset
          focus-visible:ring-ring`,
          notification.unread && 'bg-primary-100 hover:bg-primary-200',
        )}
        href="#"
        onClick={onSelect}
      >
        <span
          aria-hidden="true"
          className={cn(
            `mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full ring-2
            ring-background [&>svg]:size-4`,
            className,
          )}
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          {notification.unread ? <span className="sr-only">Unread: </span> : null}
          <span className="block leading-snug text-foreground [&_strong]:font-bold">
            {notification.title}
          </span>
          {notification.preview ? (
            <span className="mt-0.5 line-clamp-1 text-base-500">{notification.preview}</span>
          ) : null}
          <span className="mt-0.5 block text-xs text-base-400">
            {notification.context}
            <span aria-hidden="true"> · </span>
            <span className="sr-only">, </span>
            {notification.time}
          </span>
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'mt-1 size-2 shrink-0 rounded-full',
            notification.unread ? 'bg-primary-400' : 'bg-transparent',
          )}
        />
      </a>
    </li>
  );
};

const NotificationGroup = ({
  label,
  notifications,
  onSelect,
}: {
  label: string;
  notifications: Notification[];
  onSelect: (id: number) => void;
}) => {
  const labelId = useId();
  if (notifications.length === 0) return null;

  return (
    <section aria-labelledby={labelId} className="px-1 pb-1">
      <h3
        className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-base-400"
        id={labelId}
      >
        {label}
      </h3>
      <ul className="m-0 list-none space-y-px p-0">
        {notifications.map(notification => (
          <NotificationRow
            key={notification.id}
            notification={notification}
            onSelect={() => onSelect(notification.id)}
          />
        ))}
      </ul>
    </section>
  );
};

/**
 * Actions beside the profile menu. The bell is a `NavbarAction` used as a Popover trigger
 * (`PopoverTrigger asChild`), opening a list of notifications; its badge counts the unread
 * ones. The panel groups new and earlier notifications, gives each kind its own icon, and
 * ends with a link to the full list. Choosing a notification marks it read.
 */
export const NavbarWithActions = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const headingId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const unread = notifications.filter(notification => notification.unread);
  const earlier = notifications.filter(notification => !notification.unread);

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
              badge={unread.length}
              badgeLabel={`${unread.length} unread`}
              icon={<Bell />}
              label="Notifications"
            />
          </PopoverTrigger>
          <PopoverContent
            ref={panelRef}
            align="end"
            aria-labelledby={headingId}
            className="w-[min(24rem,calc(100vw-2rem))] overflow-hidden p-0 focus:outline-none"
            // Focus the panel rather than its first button, so a mouse click doesn't
            // light up "Mark all as read"; Tab still moves straight into the panel.
            onOpenAutoFocus={event => {
              event.preventDefault();
              panelRef.current?.focus();
            }}
          >
            <div className="flex items-center gap-2 border-b border-muted px-4 py-3">
              <h2 className="text-base font-bold" id={headingId}>
                Notifications
              </h2>
              {unread.length > 0 ? (
                <Badge tone="light" variant="primary">
                  {unread.length} new
                </Badge>
              ) : null}
              <Button
                className="ml-auto gap-1.5 px-0"
                isDisabled={unread.length === 0}
                size="sm"
                variant="link"
                onClick={() => markRead()}
              >
                <CheckCheck aria-hidden="true" className="size-4" />
                Mark all as read
              </Button>
            </div>
            <div className="max-h-[22rem] overflow-y-auto">
              {unread.length === 0 ? (
                <p
                  className="flex flex-col items-center gap-2 px-4 pb-2 pt-6 text-center text-sm
                    text-base-500"
                >
                  <CheckCheck aria-hidden="true" className="size-6 text-success-500" />
                  You’re all caught up.
                </p>
              ) : null}
              <NotificationGroup label="New" notifications={unread} onSelect={markRead} />
              <NotificationGroup label="Earlier" notifications={earlier} onSelect={markRead} />
            </div>
            <div className="border-t border-muted p-1">
              <a
                className="block rounded-md px-3 py-2.5 text-center text-sm font-semibold
                  text-primary-400 no-underline hover:bg-base-100 focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                href="#"
              >
                View all notifications
              </a>
            </div>
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
