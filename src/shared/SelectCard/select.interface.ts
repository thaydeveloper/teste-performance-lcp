export interface SelectOption {
  id: string | number;
  value: string;
  label: string;
  [key: string]: any;
}

export interface SelectProps {
  options?: SelectOption[];
  value?: SelectOption;
  onChange?: (option: SelectOption) => void;
  onBackClick?: () => void;
  onVerifyClick?: () => void;
  onSelectClick?: (option: SelectOption) => void;
  isOpen?: boolean;
  disabled?: boolean;
  placeholder?: string;
  verifyButtonLabel?: string;
  label?: string;
  isSearchable?: boolean;
  searchPlaceholder?: string;
  onFocus?: () => void;
}
