'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import SelectInput from './SelectInput';
import { Option, SelectInputProps } from './SelectInput.interfaces';

const SelectInputContainer: React.FC<SelectInputProps> = ({
  label,
  id,
  options,
  value: propValue,
  onChange,
  placeholder,
  noOptionsMessage,
  disabled,
  className,
  onFocus,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState<string | number | null | undefined>(propValue);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSelectedValue(propValue);
    const selectedOption = options.find((opt) => opt.value === propValue);
    setSearchTerm(selectedOption ? selectedOption.label : '');
  }, [propValue, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        const currentSelectedOption = options.find((opt) => opt.value === selectedValue);
        if (currentSelectedOption) {
          setSearchTerm(currentSelectedOption.label);
        } else if (!selectedValue) {
          setSearchTerm('');
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedValue, options]);

  const filteredOptions = useMemo(() => {
    if (!searchTerm) {
      return options;
    }
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [options, searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!isOpen && !disabled) {
      setIsOpen(true);
    }
    if (e.target.value === '') {
      setSelectedValue(null);
      if (onChange) {
        onChange(null);
      }
    }
  };

  const handleOptionClick = (option: Option) => {
    if (option.disabled) return;
    setSearchTerm(option.label);
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsOpen(true);
      if (onFocus) {
        onFocus(event);
      }
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      if (!isOpen) {
        const currentSelectedOption = options.find((opt) => opt.value === selectedValue);
        if (currentSelectedOption) {
          setSearchTerm(currentSelectedOption.label);
        } else if (!selectedValue) {
          setSearchTerm('');
        }
      }
    }, 150);
  };

  const handleChevronClick = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  return (
    <SelectInput
      label={label}
      id={id}
      options={options}
      searchTerm={searchTerm}
      isOpen={isOpen}
      filteredOptions={filteredOptions}
      selectedValue={selectedValue}
      placeholder={placeholder}
      noOptionsMessage={noOptionsMessage}
      disabled={disabled}
      className={className}
      onInputChange={handleInputChange}
      onOptionClick={handleOptionClick}
      onInputFocus={handleInputFocus}
      onInputBlur={handleInputBlur}
      onChevronClick={handleChevronClick}
      {...props}
    />
  );
};

export default SelectInputContainer;
