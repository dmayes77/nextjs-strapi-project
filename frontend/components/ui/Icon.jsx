'use client';

export default function Icon({
  icon: IconComponent,
  className = '',
  ...props
}) {
  if (!IconComponent) {
    console.warn('⚠️ Icon component is not provided.');
    return null;
  }

  return (
    <IconComponent
      className={className}
      {...props}
    />
  );
}
