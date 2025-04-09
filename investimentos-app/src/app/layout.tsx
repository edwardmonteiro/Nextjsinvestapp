'use client';

import React from 'react';
import { Providers } from '@/modules/shell/providers';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>InvestPro - Cockpit de Investimentos</title>
        <meta name="description" content="Plataforma de investimentos com dashboard, gráficos, tendências e assistente IA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
