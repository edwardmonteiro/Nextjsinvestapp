'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Layout from '@/modules/shell/Layout';
import DashboardAtualizado from '@/modules/dashboard/DashboardAtualizado';
import GraficosModule from '@/modules/graficos/Graficos';
import TendenciasModule from '@/modules/graficos/Tendencias';
import ChatIAModule from '@/modules/chat/ChatIAModule';

export default function Graficos() {
  return <GraficosModule />;
}
