'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GraficosModule = () => {
  const [periodoSelecionado, setPeriodoSelecionado] = useState('1m');
  
  const periodos = [
    { valor: '1d', label: '1 dia' },
    { valor: '1s', label: '1 semana' },
    { valor: '1m', label: '1 mês' },
    { valor: '3m', label: '3 meses' },
    { valor: '6m', label: '6 meses' },
    { valor: '1a', label: 'Anual' },
    { valor: 'max', label: 'Máximo' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Gráficos e Análises</h1>
        
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {periodos.map((periodo) => (
            <button
              key={periodo.valor}
              onClick={() => setPeriodoSelecionado(periodo.valor)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                periodoSelecionado === periodo.valor
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {periodo.label}
            </button>
          ))}
        </div>
      </div>
      
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <span>IBOVESPA</span>
            <div className="text-green-500">
              <span className="text-xl font-bold">128.734</span>
              <span className="ml-2">+1,87%</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-center justify-center bg-gray-50 rounded-md">
            <p className="text-gray-500">Gráfico de linha do IBOVESPA será renderizado aqui</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Abertura</p>
              <p className="font-medium">126.345</p>
            </div>
            <div>
              <p className="text-gray-500">Máxima</p>
              <p className="font-medium">129.102</p>
            </div>
            <div>
              <p className="text-gray-500">Mínima</p>
              <p className="font-medium">126.012</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Comparativo de Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
              <p className="text-gray-500">Gráfico comparativo será renderizado aqui</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                <span className="text-sm">PETR4</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                <span className="text-sm">VALE3</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                <span className="text-sm">ITUB4</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Análise de Tendências</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
              <p className="text-gray-500">Gráfico de tendências será renderizado aqui</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Tendência de curto prazo</p>
                <p className="font-medium text-green-500">Alta</p>
              </div>
              <div>
                <p className="text-gray-500">Tendência de longo prazo</p>
                <p className="font-medium text-green-500">Alta</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Indicadores Técnicos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Médias Móveis</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">MM 20</span>
                  <span className="text-sm font-medium text-green-500">Compra</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">MM 50</span>
                  <span className="text-sm font-medium text-green-500">Compra</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">MM 200</span>
                  <span className="text-sm font-medium text-green-500">Compra</span>
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
              <h3 className="font-medium text-gray-900">Resumo</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Curto prazo</span>
                  <span className="text-sm font-medium text-green-500">Compra</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Médio prazo</span>
                  <span className="text-sm font-medium text-green-500">Compra</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Longo prazo</span>
                  <span className="text-sm font-medium text-green-500">Compra</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GraficosModule;
