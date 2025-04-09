'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  GraficoLinha, 
  GraficoArea, 
  GraficoComparativo, 
  GraficoBarras,
  dadosHistoricos,
  dadosComparativo,
  dadosComposicao
} from '@/components/graficos/GraficosComponents';

const TendenciasModule = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Análise de Tendências</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Tendências de Mercado</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-green-800">Tendência de Alta</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">WEGE3</span>
                    <span className="text-sm font-medium text-green-600">+2.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">BBDC4</span>
                    <span className="text-sm font-medium text-green-600">+1.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">PETR4</span>
                    <span className="text-sm font-medium text-green-600">+1.2%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-red-800">Tendência de Baixa</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">MGLU3</span>
                    <span className="text-sm font-medium text-red-600">-3.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">VALE3</span>
                    <span className="text-sm font-medium text-red-600">-0.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">WEGE3</span>
                    <span className="text-sm font-medium text-red-600">-0.3%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800">Oportunidades</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">BBAS3</span>
                    <span className="text-sm font-medium text-blue-600">Compra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">ITUB4</span>
                    <span className="text-sm font-medium text-blue-600">Compra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">PETR4</span>
                    <span className="text-sm font-medium text-blue-600">Manter</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <GraficoComparativo
                dados={dadosComparativo}
                chaveX="data"
                series={[
                  { chave: 'PETR4', cor: '#3b82f6' },
                  { chave: 'VALE3', cor: '#10b981' },
                  { chave: 'ITUB4', cor: '#8b5cf6' }
                ]}
                titulo="Comparativo de Ativos"
                altura={350}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Evolução Patrimonial</CardTitle>
          </CardHeader>
          <CardContent>
            <GraficoArea
              dados={dadosHistoricos}
              chaveX="data"
              chaveY="valor"
              cor="#3b82f6"
              altura={300}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Composição da Carteira</CardTitle>
          </CardHeader>
          <CardContent>
            <GraficoBarras
              dados={dadosComposicao}
              chaveX="nome"
              chaveY="valor"
              cor="#8b5cf6"
              altura={300}
              formatadorY={(valor) => `${valor}%`}
            />
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Análise Técnica</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Médias Móveis</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">MM 20</span>
                  <span className="text-sm font-medium text-green-500">Acima</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">MM 50</span>
                  <span className="text-sm font-medium text-green-500">Acima</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">MM 200</span>
                  <span className="text-sm font-medium text-green-500">Acima</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Osciladores</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">RSI (14)</span>
                  <span className="text-sm font-medium">58.24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">MACD</span>
                  <span className="text-sm font-medium text-green-500">Positivo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Estocástico</span>
                  <span className="text-sm font-medium text-yellow-500">Neutro</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Suporte/Resistência</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Suporte 1</span>
                  <span className="text-sm font-medium">126.500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Suporte 2</span>
                  <span className="text-sm font-medium">124.200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Resistência 1</span>
                  <span className="text-sm font-medium">130.100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Resistência 2</span>
                  <span className="text-sm font-medium">132.500</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TendenciasModule;
