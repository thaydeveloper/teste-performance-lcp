import { SelectProps } from '../SelectCard/select.interface';

export interface CardDegradeProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showSelect?: boolean;
  showSecondSelect?: boolean;
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  selectProps?: SelectProps;
  secondSelectProps?: SelectProps;
  inputProps?: {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
  };
  checkboxProps?: {
    label: React.ReactNode;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
  };
  linkProps?: {
    text: string;
    href: string;
    icon?: boolean;
    className?: string;
  };
  children?: React.ReactNode;
  isEsimCard?: boolean;
  analyzeRulesLink?: {
    text: string;
    href: string;
    icon?: boolean;
  };
  inverseGradient?: boolean;
  buttonDisabled?: boolean;
}

export interface CardDegradeMocks {
  padrao: CardDegradeProps;
  gradienteInverso: CardDegradeProps;
  semTituloOuSubtitulo: CardDegradeProps;
  comFormulario: CardDegradeProps;
}
