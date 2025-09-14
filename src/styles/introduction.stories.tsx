import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';

const meta: Meta = {
  title: 'Introduction',
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
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://github.com/capitaltg/vero" target="_blank" rel="noopener noreferrer">
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
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border-2 border-base-200 bg-card p-6">
              <div className="mb-4">
                <h4 className="font-semibold">Form Components</h4>
              </div>
              <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                <div>• Button, Input, Checkbox</div>
                <div>• Radio, Select, Switch</div>
                <div>• Form validation & accessibility</div>
              </div>
              <div className="mt-auto">
                <Button variant="link" size="sm">
                  View Components →
                </Button>
              </div>
            </div>
            <div className="rounded-lg border-2 border-base-200 bg-card p-6">
              <div className="mb-4">
                <h4 className="font-semibold">Layout Components</h4>
              </div>
              <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                <div>• Accordion, Tabs</div>
                <div>• Dialog, Popover, Tooltip</div>
                <div>• Responsive grid system</div>
              </div>
              <div className="mt-auto">
                <Button variant="link" size="sm">
                  View Components →
                </Button>
              </div>
            </div>
            <div className="rounded-lg border-2 border-base-200 bg-card p-6">
              <div className="mb-4">
                <h4 className="font-semibold">Data Components</h4>
              </div>
              <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                <div>• DatePicker, Calendar</div>
                <div>• Combobox, Autocomplete</div>
                <div>• Badge, StepIndicator</div>
              </div>
              <div className="mt-auto">
                <Button variant="link" size="sm">
                  View Components →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className="rounded-lg border-2 border-base-200 bg-card p-6">
          <h2 className="mb-4 text-2xl font-bold">Design Principles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-primary-400">Accessibility First</h3>
              <p className="text-sm text-muted-foreground">
                Every component is built with accessibility in mind, following WCAG 2.1 AA
                guidelines.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-primary-400">Government Ready</h3>
              <p className="text-sm text-muted-foreground">
                Inspired by USWDS, designed for government and enterprise applications.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-primary-400">Developer Experience</h3>
              <p className="text-sm text-muted-foreground">
                TypeScript-first with excellent IDE support and comprehensive documentation.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-primary-400">Customizable</h3>
              <p className="text-sm text-muted-foreground">
                Built with Tailwind CSS and CVA for easy theming and customization.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-base-200 pt-6 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ by Capital Technology Group</p>
          <p className="mt-2">Licensed under MIT • Version 1.4.2</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
