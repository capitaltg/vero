import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/Tabs';

const meta = {
  title: 'Layout Components/Tabs',
  component: Tabs,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Tabs component.
 * Shows a basic tab interface with multiple panels.
 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-md">
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
  ),
};

/**
 * Tabs with disabled state.
 * Shows how tabs appear when certain options are not available.
 */
export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-md">
      <TabsList>
        <TabsTrigger value="active">Active Tab</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled Tab
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <h3 className="text-lg font-medium">Active Content</h3>
        <p className="text-sm text-muted-foreground">This tab is currently active.</p>
      </TabsContent>
      <TabsContent value="disabled">
        <h3 className="text-lg font-medium">Disabled Content</h3>
        <p className="text-sm text-muted-foreground">This content is not accessible.</p>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with custom styling.
 * Demonstrates how to customize the appearance of tabs.
 */
export const CustomStyling: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-md">
      <TabsList className="grid w-full grid-cols-3 bg-primary-400 text-white">
        <TabsTrigger
          value="tab1"
          className="data-[state=active]:font-bold data-[state=active]:text-primary-400"
        >
          Tab 1
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          className="data-[state=active]:font-bold data-[state=active]:text-primary-400"
        >
          Tab 2
        </TabsTrigger>
        <TabsTrigger
          value="tab3"
          className="data-[state=active]:font-bold data-[state=active]:text-primary-400"
        >
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-2 rounded-lg bg-base-100 p-4">
        <h3 className="text-lg font-medium">First Tab</h3>
        <p className="text-sm text-muted-foreground">Content for the first tab.</p>
      </TabsContent>
      <TabsContent value="tab2" className="mt-2 rounded-lg bg-base-100 p-4">
        <h3 className="text-lg font-medium">Second Tab</h3>
        <p className="text-sm text-muted-foreground">Content for the second tab.</p>
      </TabsContent>
      <TabsContent value="tab3" className="mt-2 rounded-lg bg-base-100 p-4">
        <h3 className="text-lg font-medium">Third Tab</h3>
        <p className="text-sm text-muted-foreground">Content for the third tab.</p>
      </TabsContent>
    </Tabs>
  ),
};
