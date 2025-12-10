import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';
import { TabsProps } from '../types';

export const TabsDefault = ({
  defaultValue = 'account',
  value,
  activationMode,
  ...args
}: Partial<TabsProps>) => (
  <Tabs
    activationMode={activationMode}
    className="w-md"
    defaultValue={defaultValue}
    value={value}
    {...args}
  >
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <h3 className="text-lg font-medium">Account Settings</h3>
      <p className="text-sm text-muted-foreground">
        Configure your account preferences and settings.
      </p>
    </TabsContent>
    <TabsContent value="password">
      <h3 className="text-lg font-medium">Password Settings</h3>
      <p className="text-sm text-muted-foreground">
        Change your password and security preferences.
      </p>
    </TabsContent>
  </Tabs>
);
