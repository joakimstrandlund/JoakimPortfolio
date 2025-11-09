import { ReactNode } from 'react';

type Align = 'left' | 'center';

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: ReactNode;
  align?: Align;
  mobileAlign?: Align;
  accentColor?: string;
  headingColor?: string;
  bodyColor?: string;
  className?: string;
  descriptionWidthClassName?: string;
  descriptionClassName?: string;
  titleClassName?: string;
  mobileSpacingClassName?: string;
  desktopSpacingClassName?: string;
};

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  mobileAlign = 'left',
  accentColor = '#C84F1A',
  headingColor = '#000000',
  bodyColor = '#6b6b6b',
  className,
  descriptionWidthClassName = 'max-w-2xl',
  descriptionClassName = 'text-lg leading-relaxed',
  titleClassName = 'font-grotesk font-semibold text-4xl md:text-5xl leading-tight',
  mobileSpacingClassName = 'mb-6',
  desktopSpacingClassName = 'md:mb-12',
}: SectionHeaderProps) {
  const isDesktopCenter = align === 'center';
  const isMobileCenter = mobileAlign === 'center';

  return (
    <div className={cn('mb-12 md:mb-16', isMobileCenter ? 'text-center' : 'text-left', isDesktopCenter ? 'md:text-center' : 'md:text-left', className)}>
      {label ? (
        <span className="text-xs uppercase tracking-wider mb-2 block font-semibold" style={{ color: accentColor }}>
          {label}
        </span>
      ) : null}

      <h2
        className={cn(titleClassName, isMobileCenter ? 'mx-auto' : '', isMobileCenter ? '' : 'mx-0', isDesktopCenter ? 'md:mx-auto' : 'md:mx-0')}
        style={{ color: headingColor }}
      >
        {title}
      </h2>

      {description ? (
        <div
          className={cn(
            'mt-6',
            mobileSpacingClassName,
            desktopSpacingClassName,
            descriptionClassName,
            descriptionWidthClassName,
            isMobileCenter ? 'mx-auto' : 'mx-0',
            isDesktopCenter ? 'md:mx-auto' : 'md:mx-0'
          )}
          style={{ color: bodyColor }}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
