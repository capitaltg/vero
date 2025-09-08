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
import { SingleSelect } from '@/components/Select';
import { SwitchGroup } from '@/components/SwitchGroup';
import { Tag, TagInput } from '@/components/TagInput';
import { Textarea } from '@/components/Textarea';
import {
  clouds,
  databases,
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

  // Theme
  const [currentTheme, setCurrentTheme] = useState<string>('theme-uswds');

  // Tags
  const [tags, setTags] = useState<Tag[]>([
    { id: '1', text: 'React' },
    { id: '2', text: 'TypeScript' },
  ]);

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
            <SingleSelect
              options={themeSelectOptions}
              value={currentTheme}
              onChange={setCurrentTheme}
              placeholder="Select theme..."
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
              label="Uppercase Text"
              elementId="uppercase-input-id"
              hintText="This text will always be uppercase"
            >
              <Input
                transform="uppercase"
                placeholder="Type something..."
                value={uppercaseText}
                onChange={evt => setUppercaseText(evt.target.value)}
              />
            </FormItem>

            <FormItem
              label="Lowercase Text"
              elementId="lowercase-input-id"
              hintText="This text will always be lowercase"
            >
              <Input
                transform="lowercase"
                placeholder="Type something..."
                value={lowercaseText}
                onChange={evt => setLowercaseText(evt.target.value)}
              />
            </FormItem>

            <FormItem
              label="Trimmed Text"
              elementId="trimmed-input-id"
              hintText="This text will always be trimmed"
            >
              <Input
                transform="trim"
                placeholder="Type something..."
                value={trimmedText}
                onChange={evt => setTrimmedText(evt.target.value)}
              />
            </FormItem>

            <FormItem
              label="Trimmed & Uppercase Text"
              elementId="trimmed-uppercase-input-id"
              hintText="This text will be trimmed and converted to uppercase"
            >
              <Input
                transform={['trim', 'uppercase']}
                placeholder="Type something..."
                value={trimmedUpperText}
                onChange={evt => setTrimmedUpperText(evt.target.value)}
              />
            </FormItem>

            <FormItem
              label="Name"
              elementId="name-input-id"
              hintText="Your full name as it will appear in the project"
            >
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={evt => setName(evt.target.value)}
              />
            </FormItem>

            <FormItem
              label="Email"
              elementId="email-input-id"
              hintText="Your work email address for project communications"
            >
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={evt => setEmail(evt.target.value)}
              />
            </FormItem>

            <FormItem
              label="Company"
              elementId="company-input-id"
              hintText="The organization you represent"
            >
              <Input
                id="company"
                placeholder="Enter your company"
                value={company}
                onChange={evt => setCompany(evt.target.value)}
              />
            </FormItem>

            <FormItem
              label="Project Description"
              elementId="project-description-textarea-id"
              hintText="A brief overview of your project's goals and requirements"
              errorText={
                description.length > 20
                  ? 'Project description must be 20 characters or less'
                  : undefined
              }
            >
              <Textarea
                id="description"
                placeholder="Describe your project in 20 characters or less..."
                value={description}
                onChange={evt => setDescription(evt.target.value)}
              />
            </FormItem>

            <FormItem
              label="Tags"
              elementId="tags-tag-input-id"
              hintText="Add tags to your project"
            >
              <TagInput value={tags} onChange={setTags} placeholder="Add a tag..." />
            </FormItem>
          </div>

          {/* Theme Select */}
          <FormItem
            label="Theme"
            elementId="theme-single-select-id"
            hintText="Select your preferred theme"
          >
            <SingleSelect
              options={themeOptions}
              value={theme}
              onChange={setTheme}
              placeholder="Select theme..."
            />
          </FormItem>

          {/* Library Combobox */}
          <FormItem
            label="Library"
            elementId="library-combobox-id"
            hintText="Search and select from over 140 React libraries"
          >
            <Combobox
              options={libraries}
              value={library}
              onChange={setLibrary}
              placeholder="Select library..."
              searchPlaceholder="Search libraries..."
            />
          </FormItem>

          {/* Async Search with Autocomplete */}
          <FormItem
            label="React Library Search"
            elementId="react-library-search-autocomplete-id"
            hintText="Search through 140+ React libraries with async loading"
          >
            <Autocomplete
              loadOptions={mockSearchLibraries}
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search libraries..."
              debounceMs={500}
              minSearch={1}
            />
          </FormItem>

          {/* Switches */}
          <FormItem
            label="Project Settings"
            elementId="project-settings-switch-group-id"
            hintText="Configure your project's visibility and licensing"
          >
            <SwitchGroup
              options={settingsOptions}
              value={settings}
              onChange={setSettings}
              columns={1}
            />
          </FormItem>

          {/* Radio Buttons */}
          <FormItem
            label="Project Type"
            elementId="project-type-radio-group-id"
            hintText="Select the primary type of application you're building"
          >
            <RadioGroup options={projectTypes} value={projectType} onChange={setProjectType} />
          </FormItem>

          {/* Checkbox Group */}
          <FormItem
            label="Features"
            elementId="features-checkbox-group-id"
            hintText="Select all the features you need in your project"
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
              label="Framework"
              elementId="framework-combobox-id"
              hintText="Choose the primary framework for your project"
            >
              <Combobox
                options={frameworks}
                value={framework}
                onChange={setFramework}
                placeholder="Select framework..."
                searchPlaceholder="Search framework..."
              />
            </FormItem>

            <FormItem
              label="Database"
              elementId="database-combobox-id"
              hintText="Select the main database for your application"
            >
              <Combobox
                options={databases}
                value={database}
                onChange={setDatabase}
                placeholder="Select database..."
                searchPlaceholder="Search database..."
              />
            </FormItem>

            <FormItem
              label="Primary Language"
              elementId="primary-language-combobox-id"
              hintText="Choose the main programming language for development"
            >
              <Combobox
                options={languages}
                value={language}
                onChange={setLanguage}
                placeholder="Select language..."
                searchPlaceholder="Search language..."
              />
            </FormItem>
          </div>

          {/* Date Inputs */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormItem
                label="Project Start"
                elementId="project-start-datepicker-id"
                hintText="When development begins"
              >
                <DatePicker value={startDate1} onChange={setStartDate1} placeholder="Pick a date" />
              </FormItem>

              <FormItem
                label="Project End"
                elementId="project-end-datepicker-id"
                hintText="Expected completion date"
              >
                <DatePicker value={endDate1} onChange={setEndDate1} placeholder="Pick a date" />
              </FormItem>
            </div>

            <FormItem
              label="Project Duration"
              elementId="project-duration-daterangepicker-id"
              hintText="Select the start and end dates"
            >
              <DateRangePicker
                value={dateRange1}
                onChange={setDateRange1}
                placeholder={{
                  from: 'Start date',
                  to: 'End date',
                }}
              />
            </FormItem>

            <div className="grid grid-cols-2 gap-4">
              <FormItem
                label="Maintenance Start"
                elementId="maintenance-start-datepicker-id"
                hintText="When support period begins"
              >
                <DatePicker value={startDate2} onChange={setStartDate2} placeholder="Pick a date" />
              </FormItem>

              <FormItem
                label="Maintenance End"
                elementId="maintenance-end-datepicker-id"
                hintText="Support period end date"
              >
                <DatePicker value={endDate2} onChange={setEndDate2} placeholder="Pick a date" />
              </FormItem>
            </div>

            <FormItem
              label="Maintenance Period"
              elementId="maintenance-period-daterangepicker-id"
              hintText="Select the maintenance start and end dates"
            >
              <DateRangePicker
                value={dateRange2}
                onChange={setDateRange2}
                placeholder={{
                  from: 'Start date',
                  to: 'End date',
                }}
              />
            </FormItem>
          </div>

          {/* Multi Selects */}
          <div className="space-y-4">
            <FormItem
              label="Cloud Providers"
              elementId="cloud-providers-multiselect-id"
              hintText="Select all cloud platforms you plan to use"
            >
              <MultiSelect
                options={clouds}
                value={selectedClouds}
                onChange={setSelectedClouds}
                placeholder="Select cloud providers..."
                searchPlaceholder="Search cloud providers..."
              />
            </FormItem>

            <FormItem
              label="Development Tools"
              elementId="development-tools-multiselect-id"
              hintText="Choose the development tools for your team"
            >
              <MultiSelect
                options={tools}
                value={selectedTools}
                onChange={setSelectedTools}
                placeholder="Select development tools..."
                searchPlaceholder="Search tools..."
              />
            </FormItem>

            <FormItem
              label="Additional Languages"
              elementId="additional-languages-multiselect-id"
              hintText="Other programming languages used in the project"
            >
              <MultiSelect
                options={languages}
                value={selectedLanguages}
                onChange={setSelectedLanguages}
                placeholder="Select languages..."
                searchPlaceholder="Search languages..."
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
