export enum PAYMENT_METHODS {
  PIX = 'PIX',
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
}

export type PaymentMethod = `${PAYMENT_METHODS}`;

export enum ERROR_MESSAGES {
  PAYMENT_METHOD_REQUIRED = 'paymentMethod é obrigatório.',
  PAYMENT_ID_REQUIRED = 'paymentId é obrigatório para Pix.',
  INVALID_PAYMENT_METHOD = 'paymentMethod inválido.',
  INTERNAL_SERVER_ERROR = 'Erro interno do servidor.',
  ASAAS_TOKEN_NOT_CONFIGURED = 'Token do Asaas não configurado.',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export enum ERROR_CODES {
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
}

export const ASAAS_ENDPOINTS = {
  PAYMENTS: '/payments',
  PIX_QRCODE: (paymentId: string) => `/payments/${paymentId}/pixQrCode`,
};

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
