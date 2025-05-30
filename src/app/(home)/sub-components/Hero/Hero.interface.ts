export interface HeroButton {
  text: string;
  href: string;
}

export interface HeroProps {
  description: string;
  buttonText: HeroButton[];
}
