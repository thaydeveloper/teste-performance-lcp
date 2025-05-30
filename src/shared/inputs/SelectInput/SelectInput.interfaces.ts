export interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  label: string;
  id: string;
  options: Option[];
  value?: string | number | null;
  onChange?: (value: string | number | null) => void;
  placeholder?: string;
  noOptionsMessage?: string;
  disabled?: boolean;
  className?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
