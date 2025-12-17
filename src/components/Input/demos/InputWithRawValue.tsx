import { useState } from 'react';
import { Input } from '../src/Input';
import type { InputChangeEvent } from '../types';

export const InputWithRawValue = () => {
  const [phone, setPhone] = useState('');
  const [phoneRaw, setPhoneRaw] = useState('');
  const [ssn, setSsn] = useState('');
  const [ssnRaw, setSsnRaw] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [creditCardRaw, setCreditCardRaw] = useState('');

  return (
    <div className="space-y-6">
      <div className="border-border rounded-lg border bg-card p-4">
        <p className="mb-4 text-sm text-muted-foreground">
          The Input component's{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">onChange</code> event includes a{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">rawValue</code> property that
          contains the input value with mask literals stripped out. This is useful when you need to
          store or process the raw data without formatting characters.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="phone-raw-demo">
            Phone Number
          </label>
          <Input
            id="phone-raw-demo"
            mask="phone"
            placeholder="(555) 123-4567"
            value={phone}
            onChange={(e: InputChangeEvent) => {
              setPhone(e.target.value);
              setPhoneRaw(e.rawValue);
            }}
          />
          <div className="mt-2 space-y-1">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Masked value:</span>{' '}
              <code className="rounded bg-muted px-1 py-0.5">{phone || '(empty)'}</code>
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Raw value:</span>{' '}
              <code className="rounded bg-muted px-1 py-0.5">{phoneRaw || '(empty)'}</code>
            </p>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="ssn-raw-demo">
            Social Security Number
          </label>
          <Input
            id="ssn-raw-demo"
            mask="ssn"
            placeholder="123-45-6789"
            value={ssn}
            onChange={(e: InputChangeEvent) => {
              setSsn(e.target.value);
              setSsnRaw(e.rawValue);
            }}
          />
          <div className="mt-2 space-y-1">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Masked value:</span>{' '}
              <code className="rounded bg-muted px-1 py-0.5">{ssn || '(empty)'}</code>
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Raw value:</span>{' '}
              <code className="rounded bg-muted px-1 py-0.5">{ssnRaw || '(empty)'}</code>
            </p>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="credit-card-raw-demo">
            Credit Card
          </label>
          <Input
            id="credit-card-raw-demo"
            mask="credit-card"
            placeholder="1234 5678 9012 3456"
            value={creditCard}
            onChange={(e: InputChangeEvent) => {
              setCreditCard(e.target.value);
              setCreditCardRaw(e.rawValue);
            }}
          />
          <div className="mt-2 space-y-1">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Masked value:</span>{' '}
              <code className="rounded bg-muted px-1 py-0.5">{creditCard || '(empty)'}</code>
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Raw value:</span>{' '}
              <code className="rounded bg-muted px-1 py-0.5">{creditCardRaw || '(empty)'}</code>
            </p>
          </div>
        </div>
      </div>

      <div className="border-border bg-muted/50 rounded-lg border p-4">
        <h3 className="mb-2 text-sm font-semibold">Usage Example</h3>
        <pre className="overflow-x-auto rounded bg-background p-3 text-xs">
          <code>{`<Input
  mask="phone"
  onChange={(e: InputChangeEvent) => {
    const maskedValue = e.target.value;  // "(555) 123-4567"
    const rawValue = e.rawValue;         // "5551234567"
    
    // Store raw value in database
    saveToDatabase(rawValue);
    
    // Display masked value to user
    setDisplayValue(maskedValue);
  }}
/>`}</code>
        </pre>
      </div>
    </div>
  );
};
