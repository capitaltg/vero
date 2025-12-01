import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';

const meta: Meta = {
  title: 'Getting Started/Introduction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">Vero</h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Accessible, modern, open source React component library inspired by USWDS built with
            Radix UI
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="primary">
              <a href="/?path=/docs/overlays-feedback-alert--docs">Get Started</a>
            </Button>
            <Button asChild size="lg">
              <a href="https://github.com/capitaltg/vero" rel="noopener noreferrer" target="_blank">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border-2 border-base-200 bg-card p-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold">🎯 Accessible</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Built with accessibility in mind, following WCAG guidelines and using semantic HTML
              elements.
            </p>
            <div className="mt-auto">
              <Badge variant="success">WCAG 2.1 AA</Badge>
            </div>
          </div>
          <div className="rounded-lg border-2 border-base-200 bg-card p-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold">⚡ Modern</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Built with modern React patterns, TypeScript support, and the latest web standards.
            </p>
            <div className="mt-auto">
              <Badge variant="primary">TypeScript</Badge>
            </div>
          </div>
          <div className="rounded-lg border-2 border-base-200 bg-card p-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold">🏛️ USWDS Inspired</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Follows U.S. Web Design System principles for consistent, government-grade design.
            </p>
            <div className="mt-auto">
              <Badge variant="warning">Design System</Badge>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="rounded-lg border-2 border-base-200 bg-card p-6">
          <h2 className="mb-4 text-2xl font-bold">Quick Start</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Installation</h3>
              <div className="rounded bg-muted p-3 font-mono text-sm">
                npm install @capitaltg/vero
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Usage</h3>
              <div className="rounded bg-muted p-3 font-mono text-sm">
                {`import { Button, Badge } from '@capitaltg/vero';`}
              </div>
            </div>
          </div>
        </div>

        {/* Component Overview */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Component Library</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-lg border-2 border-base-200 bg-card p-6">
              <div className="mb-4">
                <h4 className="font-semibold">Inputs & Forms</h4>
              </div>
              <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                <div>• Input, Textarea, TagInput</div>
                <div>• Checkbox, Radio, Switch</div>
                <div>• Select, Combobox, MultiSelect</div>
                <div>• FormItem, Label</div>
              </div>
              <div className="mt-auto">
                <Button asChild className="px-0" size="sm" variant="link">
                  <a
                    aria-label="View Inputs and Forms Components"
                    href="/?path=/story/inputs-forms"
                  >
                    View Components →
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border-2 border-base-200 bg-card p-6">
              <div className="mb-4">
                <h4 className="font-semibold">Actions & Navigation</h4>
              </div>
              <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                <div>• Button, DropdownButton</div>
                <div>• Breadcrumbs, Tabs</div>
                <div>• StepIndicator</div>
              </div>
              <div className="mt-auto">
                <Button asChild className="px-0" size="sm" variant="link">
                  <a
                    aria-label="View Actions and Navigation Components"
                    href="/?path=/story/actions-navigation"
                  >
                    View Components →
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border-2 border-base-200 bg-card p-6">
              <div className="mb-4">
                <h4 className="font-semibold">Overlays & Feedback</h4>
              </div>
              <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                <div>• Dialog, Popover</div>
                <div>• Tooltip, Alert</div>
                <div>• Command</div>
              </div>
              <div className="mt-auto">
                <Button asChild className="px-0" size="sm" variant="link">
                  <a
                    aria-label="View Overlays and Feedback Components"
                    href="/?path=/story/overlays-feedback"
                  >
                    View Components →
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border-2 border-base-200 bg-card p-6">
              <div className="mb-4">
                <h4 className="font-semibold">Data & Display</h4>
              </div>
              <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                <div>• DatePicker, DateRangePicker</div>
                <div>• Autocomplete, Badge</div>
                <div>• Image, Accordion</div>
              </div>
              <div className="mt-auto">
                <Button asChild className="px-0" size="sm" variant="link">
                  <a
                    aria-label="View Data and Display Components"
                    href="/?path=/story/data-display"
                  >
                    View Components →
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className="rounded-lg border-2 border-base-200 bg-card p-6">
          <h2 className="mb-4 text-2xl font-bold">🎨 Design Principles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Accessibility First</h3>
              <p className="text-sm text-muted-foreground">
                Every component is built with accessibility in mind, following WCAG 2.1 AA
                guidelines.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Government Ready</h3>
              <p className="text-sm text-muted-foreground">
                Inspired by USWDS, designed for government and enterprise applications.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Developer Experience</h3>
              <p className="text-sm text-muted-foreground">
                TypeScript-first with excellent IDE support and comprehensive documentation.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Customizable</h3>
              <p className="text-sm text-muted-foreground">
                Built with Tailwind CSS and CVA for easy theming and customization.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-base-200 pt-6 text-center text-sm text-muted-foreground">
          <p>
            Built with ❤️ by{' '}
            <a
              className="font-bold"
              href="https://github.com/dzwillia"
              rel="noopener noreferrer"
              target="_blank"
            >
              @dzwillia
            </a>{' '}
            and the Vero team
          </p>
          <p className="mt-2">Licensed under MIT • Version 1.4.2</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
