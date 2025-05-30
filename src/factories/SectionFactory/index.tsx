import { HTMLAttributes } from 'react';

interface SectionFactoryProps extends HTMLAttributes<HTMLElement> {}

const SectionFactory = ({ children, ...props }: SectionFactoryProps) => {
  return <section {...props}>{children}</section>;
};

export default SectionFactory;
