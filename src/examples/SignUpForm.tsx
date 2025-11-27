import { useState } from 'react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { FormItem } from '../components/FormItem';
import { Input } from '../components/Input';
import { Select } from '../components/Select';

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'other', label: 'Other' },
  ];

  const passwordsMatch = password === confirmPassword;
  const isFormValid =
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    passwordsMatch &&
    country &&
    agreeToTerms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Sign up successful! (This is a demo)');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create your account</h1>
          <p className="mt-2 text-muted-foreground">Join us today and start your journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <FormItem label="First Name" elementId="first-name" isRequired>
              <Input
                id="first-name"
                placeholder="John"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
            </FormItem>

            <FormItem label="Last Name" elementId="last-name" isRequired>
              <Input
                id="last-name"
                placeholder="Doe"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
              />
            </FormItem>
          </div>

          <FormItem
            label="Email Address"
            elementId="email"
            hintText="We'll never share your email with anyone else"
            isRequired
          >
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </FormItem>

          <FormItem
            label="Password"
            elementId="password"
            hintText="Must be at least 8 characters"
            isRequired
          >
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </FormItem>

          <FormItem
            label="Confirm Password"
            elementId="confirm-password"
            errorText={confirmPassword && !passwordsMatch ? 'Passwords do not match' : undefined}
            isRequired
          >
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </FormItem>

          <FormItem label="Country" elementId="country" isRequired>
            <Select
              options={countryOptions}
              value={country}
              onChange={setCountry}
              placeholder="Select your country..."
            />
          </FormItem>

          <div className="space-y-3">
            <Checkbox
              id="terms"
              label={
                <span>
                  I agree to the{' '}
                  <a href="#" className="font-medium text-primary-400 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="font-medium text-primary-400 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              }
              isChecked={agreeToTerms}
              onChange={setAgreeToTerms}
            />

            <Checkbox
              id="newsletter"
              label="Send me product updates and newsletters"
              isChecked={subscribeNewsletter}
              onChange={setSubscribeNewsletter}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            isDisabled={!isFormValid}
          >
            Create Account
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <a href="#" className="font-medium text-primary-400 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
