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

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <FormItem isRequired elementId="first-name" label="First Name">
              <Input
                required
                id="first-name"
                placeholder="John"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </FormItem>

            <FormItem isRequired elementId="last-name" label="Last Name">
              <Input
                required
                id="last-name"
                placeholder="Doe"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </FormItem>
          </div>

          <FormItem
            isRequired
            elementId="email"
            hintText="We'll never share your email with anyone else"
            label="Email Address"
          >
            <Input
              required
              id="email"
              placeholder="john.doe@example.com"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormItem>

          <FormItem
            isRequired
            elementId="password"
            hintText="Must be at least 8 characters"
            label="Password"
          >
            <Input
              required
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormItem>

          <FormItem
            isRequired
            elementId="confirm-password"
            errorText={confirmPassword && !passwordsMatch ? 'Passwords do not match' : undefined}
            label="Confirm Password"
          >
            <Input
              required
              id="confirm-password"
              placeholder="••••••••"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </FormItem>

          <FormItem isRequired elementId="country" label="Country">
            <Select
              options={countryOptions}
              placeholder="Select your country..."
              value={country}
              onChange={setCountry}
            />
          </FormItem>

          <div className="space-y-3">
            <Checkbox
              id="terms"
              isChecked={agreeToTerms}
              label={
                <span>
                  I agree to the{' '}
                  <a className="font-medium text-primary-400 hover:underline" href="#">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a className="font-medium text-primary-400 hover:underline" href="#">
                    Privacy Policy
                  </a>
                </span>
              }
              onChange={setAgreeToTerms}
            />

            <Checkbox
              id="newsletter"
              isChecked={subscribeNewsletter}
              label="Send me product updates and newsletters"
              onChange={setSubscribeNewsletter}
            />
          </div>

          <Button
            className="w-full"
            isDisabled={!isFormValid}
            size="lg"
            type="submit"
            variant="primary"
          >
            Create Account
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <a className="font-medium text-primary-400 hover:underline" href="#">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
