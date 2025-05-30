import { NextResponse } from 'next/server';
import { ERROR_CODES, ERROR_MESSAGES } from '@/constants/api.constants';

export function successResponseFactory(data: unknown, status: number = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

export function errorResponseFactory(
  error: string | ERROR_MESSAGES,
  status: number = ERROR_CODES.INTERNAL_SERVER_ERROR,
) {
  return NextResponse.json({ success: false, error }, { status });
}
