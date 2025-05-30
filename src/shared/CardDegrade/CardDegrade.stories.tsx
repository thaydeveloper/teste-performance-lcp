import type { StoryDefault, Story } from '@ladle/react';
import CardDegrade from '.';
import { CardDegradeProps } from './CardDegrade.interface';
import '@/globals.css';
import { cardDegradeMocks } from './CardDegrade.mock';

export default {
  title: 'Shared/CardDegrade',
} satisfies StoryDefault<typeof CardDegrade>;

const Template: Story<CardDegradeProps> = (args) => <CardDegrade {...args} />;

export const Padrao: Story<CardDegradeProps> = Template.bind({});
Padrao.args = cardDegradeMocks.padrao;

export const GradienteInverso: Story<CardDegradeProps> = Template.bind({});
GradienteInverso.args = cardDegradeMocks.gradienteInverso;

export const SemTituloOuSubtitulo: Story<CardDegradeProps> = Template.bind({});
SemTituloOuSubtitulo.args = cardDegradeMocks.semTituloOuSubtitulo;

export const ComFormularioInterno: Story<CardDegradeProps> = Template.bind({});
ComFormularioInterno.args = cardDegradeMocks.comFormulario;
