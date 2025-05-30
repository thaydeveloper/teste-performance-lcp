export const REFUND_POLICY_TITLE = 'Política de Reembolso - eSIMFácil';

export const REFUND_POLICY_SUBTITLE =
  'Na eSimFacil, levamos a sério a satisfação de nossos clientes. Devido à natureza do nosso produto, que é digital e personalizado, nossa política de reembolso reflete a necessidade de proteger os interesses tanto da empresa quanto dos consumidores. Abaixo, detalhamos as regras aplicáveis aos reembolsos e cancelamentos dos nossos serviços.';

export const REFUND_POLICY_QUESTIONS = [
  {
    question: 'Produtos Digitais e Unipessoais',
    answer:
      'O eSIM é um produto digital e unipessoal, vinculado diretamente às informações fornecidas pelo cliente no momento da compra. Após o envio do código de ativação, o eSIM não pode ser reutilizado por outra pessoa ou dispositivo\n\n**Por esse motivo, não oferecemos reembolsos após o envio do código QR de ativação do eSIM, salvo exceções descritas nesta política.**',
  },
  {
    question: 'Solicitações de Reembolso',
    answer:
      'O reembolso só será **aprovado se o cliente não responder o e-mail de ativação do QR Code**. Caso o cliente responda o e-mail com as informações solicitadas para cadastro, o pedido será processado pela operadora Claro e não poderá mais ser reembolsado.\n\n**Reembolsos somente serão aceitos nas seguintes condições:**\n- O cliente não respondeu ao e-mail de ativação com as informações para cadastro.\n- O eSIM ainda não foi processado e os dados do cliente não foram enviados para ativação.\n- Caso o cliente tenha respondido ao e-mail de ativação, a solicitação será analisada pela equipe de prevenção de fraudes, podendo haver um reembolso parcial de até **50% do valor**, dependendo da avaliação.',
  },
  {
    question: 'Processo de Reembolso',
    answer:
      'Se o cliente atender aos critérios acima, o processo de reembolso será iniciado **dentro de 7 dias úteis** após a solicitação formal. O valor será devolvido pelo mesmo método de pagamento utilizado na compra.\n\nPara pagamentos com cartão de crédito, o estorno pode levar **até duas faturas** para ser processado, conforme a política da operadora do cartão.',
  },
  {
    question: 'Casos em que o Reembolso Não se Aplica',
    answer:
      'De acordo com as normas do Código de Defesa do Consumidor e considerando a natureza do eSIM, os reembolsos **não serão aplicáveis** nas seguintes situações:\n- Após o envio do código de ativação do eSIM para o e-mail cadastrado.\n- Quando o cliente fornecer dados incorretos ou incompletos, impossibilitando a ativação correta do eSIM.\n- Quando o cliente não possuir um dispositivo compatível com a tecnologia eSIM.\n- Cancelamento por arrependimento após responder ao e-mail de ativação.\n- Caso o cliente tenha respondido ao e-mail de ativação e os dados tenham sido enviados para a Claro, impossibilitando o cancelamento.\n- Situações excepcionais poderão ser analisadas individualmente pela equipe de prevenção, podendo resultar em um reembolso parcial de até **50%**, a critério da empresa.',
  },
  {
    question: 'Garantia de Funcionamento',
    answer:
      'A eSimFacil garante que os códigos de ativação são gerados e enviados corretamente aos nossos clientes. Caso o cliente enfrente algum problema técnico, como falha no escaneamento do QR code ou dificuldades de ativação no dispositivo compatível, nossa equipe de suporte está à disposição para ajudar a resolver o problema.\n\n**Importante: A responsabilidade pela compatibilidade do dispositivo é exclusivamente do cliente. Recomendamos que o cliente verifique a compatibilidade do aparelho antes de realizar a compra.**',
    highlightText: 'Analisar aparelhos compatíveis!',
    highlightLink: 'https://www.esimfacil.com.br/dispositivos-compativeis',
  },
  {
    question: 'Procedimentos de Suporte Técnico',
    answer:
      'Se houver dificuldades técnicas durante o processo de ativação, o cliente deve seguir os seguintes passos antes de solicitar qualquer tipo de reembolso:\n\n- Verificar se o dispositivo é compatível com a tecnologia eSIM. A lista de dispositivos compatíveis está disponível em nosso site.\n- Certificar-se de que o QR code foi escaneado corretamente.\n- Entrar em contato com o suporte técnico da eSimFacil para receber assistência na ativação.',
  },
  {
    question: 'Cancelamento e Reembolso de Transações Fraudulentas',
    answer:
      'Se houver suspeita de fraude na compra ou uso indevido dos dados de pagamento, a eSimFacil se reserva o direito de cancelar a transação e reembolsar o valor pago ao verdadeiro titular do cartão, mediante investigação.\n\nNos casos em que o cliente acreditar que sua compra foi realizada de forma fraudulenta ou sem sua autorização, deve entrar em contato imediatamente com o nosso suporte e com a operadora do cartão de crédito utilizado.',
  },
  {
    question: 'Responsabilidade do Cliente',
    answer:
      'É responsabilidade do cliente fornecer informações corretas e completas durante o processo de compra. Qualquer erro de digitação no e-mail ou nos dados de cadastro pode impedir a entrega correta do eSIM.\n\nAlém disso, o cliente deve garantir que seu dispositivo seja compatível com a tecnologia eSIM antes de efetuar a compra. A eSimFacil não se responsabiliza por compras feitas por clientes com dispositivos incompatíveis, e nestes casos, o reembolso não será aplicável.',
  },
  {
    question: 'Alterações na Política de Reembolso',
    answer:
      'A eSimFacil se reserva o direito de modificar esta política a qualquer momento. As mudanças serão publicadas em nosso site e passarão a vigorar imediatamente após a atualização. Recomendamos que os clientes revisem nossa política de tempos em tempos para se manterem informados sobre eventuais alterações.',
  },
  {
    question: 'Contato e Suporte',
    answer:
      'Para mais informações sobre nossa política de reembolso ou para solicitar assistência técnica, entre em contato com nosso suporte:\n\n**Email: Suporte@esimfacil.com**\n**WhatsApp: [Clique aqui para falar conosco](https://wa.me/5511993034618)**\n**Telefone: (11) 99303-4618**',
    highlightText: 'Nosso horário de atendimento: segunda a sexta, das 9h às 18h.',
    highlightLink: undefined,
  },
];

export const refundPolicyData = {
  title: REFUND_POLICY_TITLE,
  subtitle: REFUND_POLICY_SUBTITLE,
  questions: REFUND_POLICY_QUESTIONS,
};
