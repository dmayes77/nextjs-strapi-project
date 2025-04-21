'use client';

import Link from 'next/link';

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  isExternal = false,
  ...props
}) {
  const base = 'inline-block px-6 py-3 text-sm font-medium rounded-lg transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (isExternal || href.startsWith('http')) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
