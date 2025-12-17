import { useState } from 'react';
import { Input } from '../src/Input';
import type { InputChangeEvent } from '../types';

export const InputWithMask = () => {
  const [phone, setPhone] = useState('');
  const [phoneRaw, setPhoneRaw] = useState('');
  const [ssn, setSsn] = useState('');
  const [ssnRaw, setSsnRaw] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [creditCardRaw, setCreditCardRaw] = useState('');
  const [date, setDate] = useState('');
  const [dateRaw, setDateRaw] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [zipCodeRaw, setZipCodeRaw] = useState('');
  const [time, setTime] = useState('');
  const [timeRaw, setTimeRaw] = useState('');
  const [postalCa, setPostalCa] = useState('');
  const [postalCaRaw, setPostalCaRaw] = useState('');
  const [custom, setCustom] = useState('');
  const [customRaw, setCustomRaw] = useState('');

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
          onChange={(e: InputChangeEvent) => {
            setPhone(e.target.value);
            setPhoneRaw(e.rawValue);
          }}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Value: {phone || '(empty)'} — Raw: {phoneRaw || '(empty)'}
        </p>
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
          onChange={(e: InputChangeEvent) => {
            setSsn(e.target.value);
            setSsnRaw(e.rawValue);
          }}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Value: {ssn || '(empty)'} — Raw: {ssnRaw || '(empty)'}
        </p>
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
          onChange={(e: InputChangeEvent) => {
            setCreditCard(e.target.value);
            setCreditCardRaw(e.rawValue);
          }}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Value: {creditCard || '(empty)'} — Raw: {creditCardRaw || '(empty)'}
        </p>
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
          onChange={(e: InputChangeEvent) => {
            setDate(e.target.value);
            setDateRaw(e.rawValue);
          }}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Value: {date || '(empty)'} — Raw: {dateRaw || '(empty)'}
        </p>
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
          onChange={(e: InputChangeEvent) => {
            setZipCode(e.target.value);
            setZipCodeRaw(e.rawValue);
          }}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Value: {zipCode || '(empty)'} — Raw: {zipCodeRaw || '(empty)'}
        </p>
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
          onChange={(e: InputChangeEvent) => {
            setTime(e.target.value);
            setTimeRaw(e.rawValue);
          }}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Value: {time || '(empty)'} — Raw: {timeRaw || '(empty)'}
        </p>
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
          onChange={(e: InputChangeEvent) => {
            setPostalCa(e.target.value);
            setPostalCaRaw(e.rawValue);
          }}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Value: {postalCa || '(empty)'} — Raw: {postalCaRaw || '(empty)'}
        </p>
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
          onChange={(e: InputChangeEvent) => {
            setCustom(e.target.value);
            setCustomRaw(e.rawValue);
          }}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Value: {custom || '(empty)'} — Raw: {customRaw || '(empty)'} (9=digit, a=letter,
          *=alphanumeric)
        </p>
      </div>
    </div>
  );
};
