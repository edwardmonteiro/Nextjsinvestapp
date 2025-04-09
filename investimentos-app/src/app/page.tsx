'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Layout from '@/modules/shell/Layout';
import DashboardAtualizado from '@/modules/dashboard/DashboardAtualizado';
import GraficosModule from '@/modules/graficos/Graficos';
import TendenciasModule from '@/modules/graficos/Tendencias';
import ChatIAModule from '@/modules/chat/ChatIAModule';

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  
  const renderContent = () => {
    switch (pathname) {
      case '/':
        return <DashboardAtualizado />;
      case '/graficos':
        return <GraficosModule />;
      case '/tendencias':
        return <TendenciasModule />;
      case '/chat':
        return <ChatIAModule />;
      default:
        return <DashboardAtualizado />;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
}
