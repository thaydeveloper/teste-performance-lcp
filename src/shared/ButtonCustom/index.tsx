interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'disabled' | 'tertiary';
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  children,
  disabled,
  variant = 'primary',
  className = '',
  ...props
}) => {
  let variantClass = '';

  if (disabled || variant === 'disabled') {
    variantClass = 'bg-[var(--color-white)] text-[var(--color-gray)] cursor-not-allowed';
  } else if (variant === 'primary') {
    variantClass =
      'bg-[var(--color-white)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] cursor-pointer';
  } else if (variant === 'secondary') {
    variantClass =
      'bg-[var(--color-white)] text-[var(--color-gray)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] cursor-pointer';
  } else if (variant === 'tertiary') {
    variantClass =
      'bg-[var(--color-primary)] text-[var(--color-white)] border-2 border-transparent hover:bg-[var(--color-white)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] cursor-pointer';
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        
        max-w-[350px]
        h-[60px]
        rounded-xl
        text-center
        font-semibold
        text-lg
        transition
        duration-150
        ease-in-out
        shadow-md
        ${variantClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
