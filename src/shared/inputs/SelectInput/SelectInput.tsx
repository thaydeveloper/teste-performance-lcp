import { RefObject } from 'react';
import { Option } from './SelectInput.interfaces';

interface SelectInputPresentationProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  options: Option[];
  searchTerm: string;
  isOpen: boolean;
  filteredOptions: Option[];
  selectedValue?: string | number | null;
  placeholder?: string;
  noOptionsMessage?: string;
  disabled?: boolean;
  className?: string;
  inputRef?: RefObject<HTMLInputElement>;
  wrapperRef?: RefObject<HTMLDivElement>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOptionClick: (option: Option) => void;
  onInputFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onInputBlur: () => void;
  onChevronClick: () => void;
}

const SelectInput: React.FC<SelectInputPresentationProps> = ({
  label,
  id,
  options,
  searchTerm,
  isOpen,
  filteredOptions,
  selectedValue,
  placeholder = 'Selecione ou digite para buscar...',
  noOptionsMessage = 'Nenhuma opção encontrada',
  disabled = false,
  className,
  inputRef,
  wrapperRef,
  onInputChange,
  onOptionClick,
  onInputFocus,
  onInputBlur,
  onChevronClick,
  ...rest
}) => (
  <div ref={wrapperRef} className="relative">
    <label
      htmlFor={id}
      className="block text-[var(--color-white)] text-sm sm:text-lg font-medium mb-1"
    >
      {label}
    </label>
    <div className="relative">
      <input
        type="text"
        id={id}
        ref={inputRef}
        value={searchTerm}
        onChange={onInputChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
        className={`
          w-full h-[60px] p-3 rounded-md
          bg-[var(--color-white)]
          text-[var(--color-gray)]
          focus:outline-none
          focus:ring-[var(--color-white-dark)] focus:ring-[var(--color-white-dark)]
          ${disabled ? 'cursor-not-allowed opacity-70' : ''}
          ${className || ''}
        `}
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
        onClick={onChevronClick}
      >
        <img
          src={'/assets/icons/chevron-down.webp'}
          alt="Toggle Dropdown"
          width={20}
          height={20}
          className={`transition-transform duration-200 ${isOpen ? '0' : '-rotate-180'}`}
        />
      </div>
    </div>

    {isOpen && !disabled && (
      <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, idx) => (
            <li
              key={option.value}
              onClick={() => onOptionClick(option)}
              className={`
                p-3 cursor-pointer
                text-gray-700
                hover:bg-[var(--color-white-dark)] hover:text-[var(--color-black)]
                ${option.value === selectedValue ? 'bg-red-200 font-semibold' : ''}
                ${option.disabled ? 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-gray-700' : ''}
                ${idx !== filteredOptions.length - 1 ? 'border-b border-gray-200' : ''}
              `}
            >
              {option.label}
            </li>
          ))
        ) : (
          <li className="p-3 text-gray-500 text-center">{noOptionsMessage}</li>
        )}
      </ul>
    )}
  </div>
);

export default SelectInput;
