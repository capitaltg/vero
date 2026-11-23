/**
 * A placeholder text logo for the demos, in one color: `name` in black weight and, when
 * given, `suffix` straight after it in light weight. The two words touch on screen; a
 * space only screen readers get keeps the brand link's name readable ("Permit Center").
 */
export const Wordmark = ({ name, suffix }: { name: string; suffix?: string }) => (
  <span className="text-2xl leading-none tracking-[-0.04em] text-primary-600">
    <span className="font-black">{name}</span>
    {suffix ? (
      <>
        <span className="sr-only"> </span>
        <span className="font-light">{suffix}</span>
      </>
    ) : null}
  </span>
);
