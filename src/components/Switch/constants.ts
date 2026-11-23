import { tw } from '@/lib/utils';

export const switchClasses = tw`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center
rounded-full border-2 border-transparent transition-colors disabled:cursor-not-allowed
disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50
data-[state=checked]:bg-primary-400 data-[state=unchecked]:bg-muted`;

export const switchThumbClasses = tw`pointer-events-none block size-5 rounded-full bg-background
shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5
data-[state=unchecked]:translate-x-0 motion-reduce:transition-none`;
