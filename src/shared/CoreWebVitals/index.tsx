'use client';

import { useReportWebVitals } from 'next/web-vitals';

const isDevelopment = process.env.NODE_ENV === 'development';

// Objeto para armazenar os resultados
const metricsOutput: { [key: string]: number } = {};

export default function CoreWebVitals() {
  if (isDevelopment) {
    useReportWebVitals((metric) => {
      const { name, value } = metric;
      const metricName = name.toUpperCase();

      let status = '✅ BOM';
      if (name === 'LCP' && value > 2500) status = '⚠️ Precisa melhorar!';
      if (name === 'FID' && value > 100) status = '⚠️ Precisa melhorar!';
      if (name === 'CLS' && value > 0.1) status = '⚠️ Precisa melhorar!';
      if (name === 'FCP' && value > 1800) status = '⚠️ Precisa melhorar!';
      if (name === 'INP' && value > 200) status = '⚠️ Precisa melhorar!';
      if (name === 'TTFB' && value > 600) status = '⚠️ Precisa melhorar!';

      // Salvar no objeto final
      metricsOutput[metricName] = Number(value.toFixed(2));

      // Log mais legível no console
      console.log(
        `%c[Web Vital] ${metricName}: ${value.toFixed(2)}ms | ${status}`,
        'color: #16a34a; font-weight: bold;',
      );

      // Quando todas as métricas principais já foram medidas
      const metricsList = ['LCP', 'FID', 'CLS', 'FCP', 'INP', 'TTFB'];
      const haveAllMetrics = metricsList.every((m) => metricsOutput[m] !== undefined);

      if (haveAllMetrics) {
        console.log('📦 Output final JSON:', JSON.stringify(metricsOutput, null, 2));
      }
    });
  }

  return null;
}
