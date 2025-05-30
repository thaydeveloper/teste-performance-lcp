import RefundPolicyCard from './RefundPolicyCard';
import type { StoryDefault, Story } from '@ladle/react';
import { refundPolicyCardMocks } from './RefundPolicyCard.mock';
import '@/globals.css';
import type { RefundPolicyCardProps } from '../../RefundPolicy.interface';

// Configuração principal do story para o Ladle
// 'title' define o agrupamento/rota do componente na interface do Ladle
export default {
  title: 'RefundPolicy/RefundPolicyCard',
} satisfies StoryDefault<typeof RefundPolicyCard>;

// Story "Padrao": Exibe o componente com um exemplo de reembolso completo
// Usa o mock 'padrao' definido no arquivo .mock
export const Padrao: Story<RefundPolicyCardProps> = (args: RefundPolicyCardProps) => (
  <RefundPolicyCard {...args} />
);
Padrao.args = refundPolicyCardMocks.padrao;

// Story "SemLinkDeDestaque": Exibe o componente sem link de destaque
// Usa o mock 'semLinkDeDestaque' definido no arquivo .mock
export const SemLinkDeDestaque: Story<RefundPolicyCardProps> = (args: RefundPolicyCardProps) => (
  <RefundPolicyCard {...args} />
);
SemLinkDeDestaque.args = refundPolicyCardMocks.semLinkDeDestaque;
