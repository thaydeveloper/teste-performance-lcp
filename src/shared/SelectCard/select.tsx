'use client';

import { useIsMobile } from '@/hooks/useMobile';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { icons } from '../assets'; // Certifique-se que icons.chevronDown existe
import Image from 'next/image';
import { SelectOption, SelectProps } from './select.interface';

const Select: React.FC<SelectProps> = ({
  options = [],
  value: propValue,
  onChange,
  isOpen: initialIsOpen = false,
  disabled = false,
  placeholder = 'Selecione uma opção',
  label,
  isSearchable = false,
  searchPlaceholder,
  onFocus,
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(propValue);
  const [searchTerm, setSearchTerm] = useState<string>(propValue?.label || '');

  const isMobile = useIsMobile();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sincroniza o estado interno quando a prop 'value' muda
  useEffect(() => {
    setSelectedOption(propValue);
    setSearchTerm(propValue?.label || '');
  }, [propValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isOpen && selectedOption && searchTerm !== selectedOption.label) {
      setSearchTerm(selectedOption.label);
    }
  }, [isOpen, selectedOption, searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    if (!isOpen) {
      setIsOpen(true);
    }

    const currentOption = options.find(
      (opt) => opt.label.toLowerCase() === newSearchTerm.toLowerCase(),
    );
    if (currentOption) {
      setSelectedOption(currentOption);
      onChange?.(currentOption);
    } else {
      setSelectedOption(undefined);
      onChange?.({ id: newSearchTerm, value: newSearchTerm, label: newSearchTerm });
    }
  };

  const handleOptionSelect = (option: SelectOption) => {
    setSelectedOption(option);
    setSearchTerm(option.label);
    setIsOpen(false);
    onChange?.(option);
  };

  const filteredOptions = useMemo(() => {
    if (!isSearchable || !searchTerm) {
      return options;
    }
    return options.filter((opt) => opt.label.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [options, searchTerm, isSearchable]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const effectivePlaceholder = searchPlaceholder || placeholder;

  // Comportamento de Select tradicional se isSearchable for false
  if (!isSearchable) {
    return (
      <div ref={wrapperRef} className="relative w-full">
        {label && <label className="block text-white mb-2 text-sm sm:text-base">{label}</label>}
        <button
          onClick={toggleDropdown}
          onFocus={onFocus}
          disabled={disabled}
          className={`w-full ${
            isMobile
              ? 'h-[35px] text-[14px] px-2 py-1'
              : 'h-[40px] sm:h-[50px] text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 sm:py-4'
          } bg-[#FFFFFF] rounded-[10px] text-[#0A1D4D] text-left border-none outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-between relative ${
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          }`}
          style={{ paddingLeft: '0.75rem', paddingRight: '2.5rem' }}
        >
          <span className="block truncate">{selectedOption?.label || placeholder}</span>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
            <Image
              src={icons.chevronDown}
              alt="Expandir opções"
              width={14}
              height={14}
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain transition-transform duration-200 ${
                !isOpen ? 'rotate-180' : '' // CONDIÇÃO INVERTIDA AQUI
              }`}
              loading="lazy"
            />
          </div>
        </button>
        {isOpen && (
          <div
            className={`absolute z-[9999] w-full mt-1 bg-[#D9D9D9] rounded-[10px] shadow-lg flex flex-col overflow-hidden ${
              isMobile ? 'max-h-[220px]' : 'max-h-[260px]'
            }`}
            style={{ zIndex: 9999, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }}
          >
            <div className="overflow-y-auto flex-grow">
              {options.length > 0 ? (
                options.map((option, index) => (
                  <React.Fragment key={option.id}>
                    <button
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full ${
                        isMobile
                          ? 'px-2 py-2 text-[14px]'
                          : 'sm:px-2 sm:py-2 text-xs sm:text-xs md:text-sm'
                      } text-[#0A1D4D] text-left hover:bg-[#C9C9C9] transition-colors whitespace-nowrap overflow-x-auto ${selectedOption?.id === option.id ? 'bg-[#C0C0C0]' : ''}`}
                    >
                      {option.label}
                    </button>
                    {index < options.length - 1 && (
                      <div className="w-full border-b border-white opacity-60" />
                    )}
                  </React.Fragment>
                ))
              ) : (
                <div
                  className={`px-3 py-2 text-center text-gray-500 ${isMobile ? 'text-[14px]' : 'text-xs sm:text-sm'}`}
                >
                  Nenhuma opção disponível.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Comportamento de ComboBox (input pesquisável) se isSearchable for true
  return (
    <div ref={wrapperRef} className="relative w-full">
      {label && <label className="block text-white mb-2 text-sm sm:text-base">{label}</label>}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={(e) => {
            if (!disabled) setIsOpen(true);
            onFocus && onFocus();
          }}
          placeholder={effectivePlaceholder}
          disabled={disabled}
          className={`w-full ${
            isMobile
              ? 'h-[35px] text-[14px] px-2 py-1'
              : 'h-[40px] sm:h-[50px] text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 sm:py-4'
          } bg-[#FFFFFF] rounded-[10px] text-[#0A1D4D] text-left border-none outline-none focus:ring-2 focus:ring-blue-300 ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          style={{ paddingRight: '2.5rem' }} // Espaço para o ícone
        />
        <div
          className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
          onClick={toggleDropdown} // Permite clicar no ícone para abrir/fechar
        >
          <Image
            src={icons.chevronDown}
            alt="Expandir opções"
            width={14}
            height={14}
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain transition-transform duration-200 ${
              !isOpen ? 'rotate-180' : ''
            }`}
            loading="lazy"
          />
        </div>
      </div>

      {isOpen && (
        <div
          className={`absolute z-[9999] w-full mt-1 bg-[#D9D9D9] rounded-[10px] shadow-lg flex flex-col overflow-hidden ${
            isMobile ? 'max-h-[220px]' : 'max-h-[260px]'
          }`}
          style={{ zIndex: 9999, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }}
        >
          <div className="overflow-y-auto flex-grow">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <React.Fragment key={option.id}>
                  <button
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full ${
                      isMobile
                        ? 'px-2 py-2 text-[14px]'
                        : 'sm:px-2 sm:py-2 text-xs sm:text-xs md:text-sm'
                    } text-[#0A1D4D] text-left hover:bg-[#C9C9C9] transition-colors whitespace-nowrap overflow-x-auto ${selectedOption?.id === option.id ? 'bg-[#C0C0C0]' : ''}`}
                  >
                    {option.label}
                  </button>
                  {index < filteredOptions.length - 1 && (
                    <div className="w-full border-b border-white opacity-60" />
                  )}
                </React.Fragment>
              ))
            ) : (
              <div
                className={`px-3 py-2 text-center text-gray-500 ${isMobile ? 'text-[14px]' : 'text-xs sm:text-sm'}`}
              >
                Nenhuma opção encontrada.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
