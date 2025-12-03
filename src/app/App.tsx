import { Autocomplete } from '@/components/Autocomplete';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { CheckboxGroup } from '@/components/CheckboxGroup';
import { Combobox } from '@/components/Combobox';
import { DatePicker } from '@/components/DatePicker';
import { DateRange, DateRangePicker } from '@/components/DateRangePicker';
import { FormItem } from '@/components/FormItem';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { MultiSelect } from '@/components/MultiSelect';
import { RadioGroup } from '@/components/RadioGroup';
import { Select } from '@/components/Select';
import { SwitchGroup } from '@/components/SwitchGroup';
import { Textarea } from '@/components/Textarea';
import {
  clouds,
  databases,
  deploymentPlans,
  features,
  frameworks,
  languages,
  libraries,
  projectTypes,
  settingsOptions,
  themeOptions,
  tools,
} from '@/constants';
import { mockSearchLibraries } from '@/mocks';
import { useEffect, useState } from 'react';
import './styles.css';

export const App: React.FC = () => {
  // Text inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [uppercaseText, setUppercaseText] = useState('');
  const [lowercaseText, setLowercaseText] = useState('');
  const [trimmedText, setTrimmedText] = useState('');
  const [trimmedUpperText, setTrimmedUpperText] = useState('');

  // Single selects
  const [framework, setFramework] = useState('');
  const [database, setDatabase] = useState('');
  const [language, setLanguage] = useState('');
  const [theme, setTheme] = useState('');
  const [library, setLibrary] = useState('');

  // Date inputs
  const [startDate1, setStartDate1] = useState<Date>();
  const [endDate1, setEndDate1] = useState<Date>();
  const [startDate2, setStartDate2] = useState<Date>();
  const [endDate2, setEndDate2] = useState<Date>();
  const [dateRange1, setDateRange1] = useState<DateRange>({});
  const [dateRange2, setDateRange2] = useState<DateRange>({});

  // Multi selects
  const [selectedClouds, setSelectedClouds] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Switches
  const [settings, setSettings] = useState<string[]>([]);

  // Checkboxes
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Radio
  const [projectType, setProjectType] = useState('web');
  const [deploymentPlan, setDeploymentPlan] = useState('starter');

  // Theme
  const [currentTheme, setCurrentTheme] = useState<string>('theme-uswds');

  // // Tags
  // const [tags, setTags] = useState<Tag[]>([
  //   { id: '1', text: 'React' },
  //   { id: '2', text: 'TypeScript' },
  // ]);

  useEffect(() => {
    const classList = document.documentElement.classList;

    classList.remove('light', 'dark', 'theme-uswds');
    classList.add(currentTheme);
  }, [currentTheme]);

  const themeSelectOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'theme-uswds', label: 'USWDS' },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">Vero</h1>
            <p className="mt-2 text-muted-foreground">Configure your development environment</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Radix UI</Badge>
              <Badge>cmdk</Badge>
              <Badge>React Day Picker</Badge>
            </div>
          </div>
          <div className="w-[16rem]">
            <Select
              options={themeSelectOptions}
              placeholder="Select theme..."
              value={currentTheme}
              onChange={setCurrentTheme}
            />
          </div>
        </div>

        <div>
          <div className="space-y-1">
            <Label className="font-bold">Badges</Label>
          </div>
          <div className="mt-2 flex gap-2">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge className="bg-purple-700 text-white">Custom</Badge>
          </div>
        </div>

        <div className="space-y-6">
          {/* Text Inputs with Transformations */}
          <div className="space-y-4">
            <FormItem
              elementId="uppercase-input-id"
              hintText="This text will always be uppercase"
              label="Uppercase Text"
            >
              <Input
                placeholder="Type something..."
                transform="uppercase"
                value={uppercaseText}
                onChange={evt => setUppercaseText(evt.target.value)}
              />
            </FormItem>

            <FormItem
              elementId="lowercase-input-id"
              hintText="This text will always be lowercase"
              label="Lowercase Text"
            >
              <Input
                placeholder="Type something..."
                transform="lowercase"
                value={lowercaseText}
                onChange={evt => setLowercaseText(evt.target.value)}
              />
            </FormItem>

            <FormItem
              elementId="trimmed-input-id"
              hintText="This text will always be trimmed"
              label="Trimmed Text"
            >
              <Input
                placeholder="Type something..."
                transform="trim"
                value={trimmedText}
                onChange={evt => setTrimmedText(evt.target.value)}
              />
            </FormItem>

            <FormItem
              elementId="trimmed-uppercase-input-id"
              hintText="This text will be trimmed and converted to uppercase"
              label="Trimmed & Uppercase Text"
            >
              <Input
                placeholder="Type something..."
                transform={['trim', 'uppercase']}
                value={trimmedUpperText}
                onChange={evt => setTrimmedUpperText(evt.target.value)}
              />
            </FormItem>

            <FormItem
              elementId="name-input-id"
              hintText="Your full name as it will appear in the project"
              label="Name"
            >
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={evt => setName(evt.target.value)}
              />
            </FormItem>

            <FormItem
              elementId="email-input-id"
              hintText="Your work email address for project communications"
              label="Email"
            >
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={evt => setEmail(evt.target.value)}
              />
            </FormItem>

            <FormItem
              elementId="company-input-id"
              hintText="The organization you represent"
              label="Company"
            >
              <Input
                id="company"
                placeholder="Enter your company"
                value={company}
                onChange={evt => setCompany(evt.target.value)}
              />
            </FormItem>

            <FormItem
              elementId="project-description-textarea-id"
              errorText={
                description.length > 20
                  ? 'Project description must be 20 characters or less'
                  : undefined
              }
              hintText="A brief overview of your project's goals and requirements"
              label="Project Description"
            >
              <Textarea
                id="description"
                placeholder="Describe your project in 20 characters or less..."
                value={description}
                onChange={evt => setDescription(evt.target.value)}
              />
            </FormItem>

            {/* <FormItem
              elementId="tags-tag-input-id"
              hintText="Add tags to your project"
              label="Tags"
            >
              <TagInput placeholder="Add a tag..." value={tags} onChange={setTags} />
            </FormItem> */}
          </div>

          {/* Theme Select */}
          <FormItem
            elementId="theme-single-select-id"
            hintText="Select your preferred theme"
            label="Theme"
          >
            <Select
              options={themeOptions}
              placeholder="Select theme..."
              value={theme}
              onChange={setTheme}
            />
          </FormItem>

          {/* Library Combobox */}
          <FormItem
            elementId="library-combobox-id"
            hintText="Search and select from over 140 React libraries"
            label="Library"
          >
            <Combobox
              options={libraries}
              placeholder="Select library..."
              searchPlaceholder="Search libraries..."
              value={library}
              onChange={setLibrary}
            />
          </FormItem>

          {/* Async Search with Autocomplete */}
          <FormItem
            elementId="react-library-search-autocomplete-id"
            hintText="Search through 140+ React libraries with async loading"
            label="React Library Search"
          >
            <Autocomplete
              debounceMs={500}
              loadOptions={mockSearchLibraries}
              minSearch={1}
              placeholder="Search libraries..."
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </FormItem>

          {/* Switches */}
          <FormItem
            elementId="project-settings-switch-group-id"
            hintText="Configure your project's visibility and licensing"
            label="Project Settings"
          >
            <SwitchGroup
              columns={1}
              options={settingsOptions}
              value={settings}
              onChange={setSettings}
            />
          </FormItem>

          {/* Radio Buttons */}
          <FormItem
            elementId="project-type-radio-group-id"
            hintText="Select the primary type of application you're building"
            label="Project Type"
          >
            <RadioGroup options={projectTypes} value={projectType} onChange={setProjectType} />
          </FormItem>

          {/* Tile Radio Group */}
          <FormItem
            elementId="deployment-plan-radio-group-id"
            hintText="Choose the plan that best fits your project needs"
            label="Deployment Plan"
          >
            <RadioGroup
              options={deploymentPlans}
              value={deploymentPlan}
              variant="tile"
              onChange={setDeploymentPlan}
            />
          </FormItem>

          {/* Checkbox Group */}
          <FormItem
            elementId="features-checkbox-group-id"
            hintText="Select all the features you need in your project"
            label="Features"
          >
            <CheckboxGroup
              options={features}
              value={selectedFeatures}
              onChange={setSelectedFeatures}
            />
          </FormItem>

          {/* Single Selects */}
          <div className="space-y-4">
            <FormItem
              elementId="framework-combobox-id"
              hintText="Choose the primary framework for your project"
              label="Framework"
            >
              <Combobox
                options={frameworks}
                placeholder="Select framework..."
                searchPlaceholder="Search framework..."
                value={framework}
                onChange={setFramework}
              />
            </FormItem>

            <FormItem
              elementId="database-combobox-id"
              hintText="Select the main database for your application"
              label="Database"
            >
              <Combobox
                options={databases}
                placeholder="Select database..."
                searchPlaceholder="Search database..."
                value={database}
                onChange={setDatabase}
              />
            </FormItem>

            <FormItem
              elementId="primary-language-combobox-id"
              hintText="Choose the main programming language for development"
              label="Primary Language"
            >
              <Combobox
                options={languages}
                placeholder="Select language..."
                searchPlaceholder="Search language..."
                value={language}
                onChange={setLanguage}
              />
            </FormItem>
          </div>

          {/* Date Inputs */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormItem
                elementId="project-start-datepicker-id"
                hintText="When development begins"
                label="Project Start"
              >
                <DatePicker placeholder="Pick a date" value={startDate1} onChange={setStartDate1} />
              </FormItem>

              <FormItem
                elementId="project-end-datepicker-id"
                hintText="Expected completion date"
                label="Project End"
              >
                <DatePicker placeholder="Pick a date" value={endDate1} onChange={setEndDate1} />
              </FormItem>
            </div>

            <FormItem
              elementId="project-duration-daterangepicker-id"
              hintText="Select the start and end dates"
              label="Project Duration"
            >
              <DateRangePicker
                placeholder={{
                  from: 'Start date',
                  to: 'End date',
                }}
                value={dateRange1}
                onChange={setDateRange1}
              />
            </FormItem>

            <div className="grid grid-cols-2 gap-4">
              <FormItem
                elementId="maintenance-start-datepicker-id"
                hintText="When support period begins"
                label="Maintenance Start"
              >
                <DatePicker placeholder="Pick a date" value={startDate2} onChange={setStartDate2} />
              </FormItem>

              <FormItem
                elementId="maintenance-end-datepicker-id"
                hintText="Support period end date"
                label="Maintenance End"
              >
                <DatePicker placeholder="Pick a date" value={endDate2} onChange={setEndDate2} />
              </FormItem>
            </div>

            <FormItem
              elementId="maintenance-period-daterangepicker-id"
              hintText="Select the maintenance start and end dates"
              label="Maintenance Period"
            >
              <DateRangePicker
                placeholder={{
                  from: 'Start date',
                  to: 'End date',
                }}
                value={dateRange2}
                onChange={setDateRange2}
              />
            </FormItem>
          </div>

          {/* Multi Selects */}
          <div className="space-y-4">
            <FormItem
              elementId="cloud-providers-multiselect-id"
              hintText="Select all cloud platforms you plan to use"
              label="Cloud Providers"
            >
              <MultiSelect
                options={clouds}
                placeholder="Select cloud providers..."
                searchPlaceholder="Search cloud providers..."
                value={selectedClouds}
                onChange={setSelectedClouds}
              />
            </FormItem>

            <FormItem
              elementId="development-tools-multiselect-id"
              hintText="Choose the development tools for your team"
              label="Development Tools"
            >
              <MultiSelect
                options={tools}
                placeholder="Select development tools..."
                searchPlaceholder="Search tools..."
                value={selectedTools}
                onChange={setSelectedTools}
              />
            </FormItem>

            <FormItem
              elementId="additional-languages-multiselect-id"
              hintText="Other programming languages used in the project"
              label="Additional Languages"
            >
              <MultiSelect
                options={languages}
                placeholder="Select languages..."
                searchPlaceholder="Search languages..."
                value={selectedLanguages}
                onChange={setSelectedLanguages}
              />
            </FormItem>
          </div>

          <Button className="w-full" size="lg">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
