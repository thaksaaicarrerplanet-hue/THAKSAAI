import React from 'react';
import { Link } from 'react-router-dom';

export function DepthButton({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const variants = {
    primary:
      'bg-[#101828] text-white border border-white/10 shadow-[0_1px_2px_rgba(16,24,40,0.12),inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-[#1A2335] hover:shadow-[0_8px_24px_-12px_rgba(16,24,40,0.35)]',
    precision:
      'bg-[#3659D9] text-white border border-[#2948B8] shadow-[0_2px_8px_rgba(54,89,217,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] hover:bg-[#2B4BC0] hover:shadow-[0_8px_20px_rgba(54,89,217,0.36)]',
    electric:
      'bg-[#C7F36B] text-[#101828] border border-[#B3E352] shadow-[0_2px_10px_rgba(199,243,107,0.25),inset_0_1px_0_rgba(255,255,255,0.45)] hover:bg-[#D3F884] hover:shadow-[0_8px_24px_rgba(199,243,107,0.35)]',
    dark:
      'bg-[#101828] text-white border border-[#101828] shadow-[0_1px_2px_rgba(16,24,40,0.12)] hover:bg-[#1A2335]',
    secondary:
      'bg-white text-[#101828] border border-[#E3E5DE] shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:border-[#101828]/40 hover:bg-[#F7F8F4]',
    ghostDark:
      'bg-white/[0.06] text-white border border-white/15 hover:bg-white/12 hover:border-white/30',
  };

  const sizes = {
    sm: 'min-h-[44px] px-4 py-2 text-xs',
    md: 'min-h-[44px] px-5 py-2.5 text-sm',
    lg: 'min-h-[48px] px-6 py-3 text-sm sm:text-base',
  };

  const baseClass = `inline-flex items-center justify-center gap-2.5 rounded-xl font-sans font-semibold tracking-[-0.01em] transition-all duration-150 hover:-translate-y-0.5 active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-[#3659D9] focus-visible:outline-offset-3 cursor-pointer select-none ${
    variants[variant] || variants.primary
  } ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClass} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClass} {...rest}>
        {children}
      </a>
    );
  }

  const Component = as || 'button';
  return (
    <Component
      type={Component === 'button' ? rest.type || 'button' : undefined}
      className={baseClass}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default DepthButton;
