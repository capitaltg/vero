import { useState, type ChangeEvent } from 'react';
import { Input } from '../src/Input';

export const InputWithMask = () => {
  const [phone, setPhone] = useState('');
  const [ssn, setSsn] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [date, setDate] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [time, setTime] = useState('');
  const [postalCa, setPostalCa] = useState('');
  const [custom, setCustom] = useState('');

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="phone-input">
          Phone Number (mask="phone")
        </label>
        <Input
          id="phone-input"
          mask="phone"
          placeholder="(555) 123-4567"
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
        />
        <p className="mt-1 text-xs text-muted-foreground">Value: {phone || '(empty)'}</p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="ssn-input">
          Social Security Number (mask="ssn")
        </label>
        <Input
          id="ssn-input"
          mask="ssn"
          placeholder="123-45-6789"
          value={ssn}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSsn(e.target.value)}
        />
        <p className="mt-1 text-xs text-muted-foreground">Value: {ssn || '(empty)'}</p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="credit-card-input">
          Credit Card (mask="credit-card")
        </label>
        <Input
          id="credit-card-input"
          mask="credit-card"
          placeholder="1234 5678 9012 3456"
          value={creditCard}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCreditCard(e.target.value)}
        />
        <p className="mt-1 text-xs text-muted-foreground">Value: {creditCard || '(empty)'}</p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="date-input">
          Date (mask="date-us")
        </label>
        <Input
          id="date-input"
          mask="date-us"
          placeholder="MM/DD/YYYY"
          value={date}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
        />
        <p className="mt-1 text-xs text-muted-foreground">Value: {date || '(empty)'}</p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="zip-input">
          ZIP Code (mask="zip-code-us")
        </label>
        <Input
          id="zip-input"
          mask="zip-code-us"
          placeholder="12345-6789"
          value={zipCode}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setZipCode(e.target.value)}
        />
        <p className="mt-1 text-xs text-muted-foreground">Value: {zipCode || '(empty)'}</p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="time-input">
          Time (mask="time-24")
        </label>
        <Input
          id="time-input"
          mask="time-24"
          placeholder="23:59"
          value={time}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTime(e.target.value)}
        />
        <p className="mt-1 text-xs text-muted-foreground">Value: {time || '(empty)'}</p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="postal-ca-input">
          Canadian Postal Code (mask="postal-ca")
        </label>
        <Input
          id="postal-ca-input"
          mask="postal-ca"
          placeholder="A1A 1A1"
          value={postalCa}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPostalCa(e.target.value)}
        />
        <p className="mt-1 text-xs text-muted-foreground">Value: {postalCa || '(empty)'}</p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="custom-input">
          Custom Mask (mask="(999) aaa-****")
        </label>
        <Input
          id="custom-input"
          mask="(999) aaa-****"
          placeholder="(123) abc-1234"
          value={custom}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCustom(e.target.value)}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Value: {custom || '(empty)'} (9=digit, a=letter, *=alphanumeric)
        </p>
      </div>
    </div>
  );
};
