import React, { useState } from 'react';

interface CopyableTextProps {
  text: string;
  className?: string;
  label?: string;
}

const CopyableText: React.FC<CopyableTextProps> = ({ text, className = '', label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className={`group relative ${className}`}>
      {label ? <span className="mr-1 text-xs text-muted-foreground">{label}</span> : null}
      <button
        className="cursor-pointer rounded px-1 py-1 font-mono text-xs text-muted-foreground
          transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2
          focus:ring-ring focus:ring-offset-2"
        title="Click to copy"
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : text}
      </button>
    </div>
  );
};

interface ColorCardProps {
  name: string;
  value: string;
  var: string;
  tailwindClass: string;
  description?: string;
}

export const ColorCard: React.FC<ColorCardProps> = ({
  name,
  value,
  var: varName,
  tailwindClass,
  description,
}) => (
  <div className="overflow-hidden rounded-lg border-2 border-base-200 bg-card">
    <div className="h-24 w-full" style={{ backgroundColor: value }} />
    <div className="p-4">
      <div className="!mb-1 !text-xl font-semibold">{name}</div>
      {description ? (
        <div className="!-mt-1 !mb-2 !text-sm text-muted-foreground">{description}</div>
      ) : null}
      <div className="flex items-center justify-between gap-1">
        <span className="!text-sm">Hex:</span> <CopyableText text={value} />
      </div>
      <div className="flex items-center justify-between gap-1">
        <span className="!text-sm">CSS:</span> <CopyableText text={`var(${varName})`} />
      </div>
      <div className="flex items-center justify-between gap-1">
        <span className="!text-sm">Tailwind:</span> <CopyableText text={tailwindClass} />
      </div>
    </div>
  </div>
);

interface ColorGridProps {
  children: React.ReactNode;
}

export const ColorGrid: React.FC<ColorGridProps> = ({ children }) => (
  <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div>
);

interface BorderRadiusCardProps {
  name: string;
  value: string;
  pixels: string;
}

export const BorderRadiusCard: React.FC<BorderRadiusCardProps> = ({ name, value, pixels }) => (
  <div className="overflow-hidden rounded-lg border-2 border-base-200 bg-card">
    <div className="flex h-28 w-full items-center justify-center bg-base-200">
      <div
        className="h-20 w-20 rounded-lg border-4 border-primary bg-primary-100"
        style={{ borderRadius: value }}
      />
    </div>
    <div className="p-4">
      <div className="!mb-1 !text-xl font-semibold">rounded-{name}</div>
      <div className="flex items-center justify-between gap-1">
        <span className="!text-sm">Value:</span>{' '}
        <span className="px-1 py-1 font-mono !text-xs text-muted-foreground">{value}</span>
      </div>
      <div className="flex items-center justify-between gap-1">
        <span className="!text-sm">Pixels:</span>{' '}
        <span className="px-1 py-1 font-mono !text-xs text-muted-foreground">{pixels}</span>
      </div>
      <div className="flex items-center justify-between gap-1">
        <span className="!text-sm">Tailwind:</span> <CopyableText text={`rounded-${name}`} />
      </div>
    </div>
  </div>
);

interface BorderRadiusGridProps {
  children: React.ReactNode;
}

export const BorderRadiusGrid: React.FC<BorderRadiusGridProps> = ({ children }) => (
  <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{children}</div>
);

interface AnimationGridProps {
  children: React.ReactNode;
}

export const AnimationGrid: React.FC<AnimationGridProps> = ({ children }) => (
  <div className="mb-12 grid gap-6 md:grid-cols-2">
    {React.Children.map(children, (child, index) => (
      <div key={index} className="overflow-hidden rounded-lg border-2 border-base-200 bg-card p-4">
        {child}
      </div>
    ))}
  </div>
);
