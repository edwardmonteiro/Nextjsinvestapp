'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard de Investimentos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Patrimônio Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 156.789,42</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <span>+2,3% (30d)</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Rentabilidade Anual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,7%</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <span>+3,2% vs IBOV</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Ações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 87.432,18</div>
            <p className="text-xs text-gray-500 flex items-center mt-1">
              <span>56% da carteira</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Renda Fixa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 69.357,24</div>
            <p className="text-xs text-gray-500 flex items-center mt-1">
              <span>44% da carteira</span>
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Composição da Carteira</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
              <p className="text-gray-500">Gráfico de composição será carregado aqui</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Evolução Patrimonial</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
              <p className="text-gray-500">Gráfico de evolução será carregado aqui</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Ativos em Destaque</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Ativo</th>
                  <th className="text-right py-3 px-4">Preço</th>
                  <th className="text-right py-3 px-4">Variação</th>
                  <th className="text-right py-3 px-4">Quantidade</th>
                  <th className="text-right py-3 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">PETR4</td>
                  <td className="text-right py-3 px-4">R$ 36,75</td>
                  <td className="text-right text-green-500 py-3 px-4">+1,2%</td>
                  <td className="text-right py-3 px-4">500</td>
                  <td className="text-right py-3 px-4">R$ 18.375,00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">VALE3</td>
                  <td className="text-right py-3 px-4">R$ 68,42</td>
                  <td className="text-right text-red-500 py-3 px-4">-0,8%</td>
                  <td className="text-right py-3 px-4">300</td>
                  <td className="text-right py-3 px-4">R$ 20.526,00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">ITUB4</td>
                  <td className="text-right py-3 px-4">R$ 32,18</td>
                  <td className="text-right text-green-500 py-3 px-4">+0,5%</td>
                  <td className="text-right py-3 px-4">400</td>
                  <td className="text-right py-3 px-4">R$ 12.872,00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">BBDC4</td>
                  <td className="text-right py-3 px-4">R$ 22,56</td>
                  <td className="text-right text-green-500 py-3 px-4">+1,7%</td>
                  <td className="text-right py-3 px-4">600</td>
                  <td className="text-right py-3 px-4">R$ 13.536,00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">WEGE3</td>
                  <td className="text-right py-3 px-4">R$ 41,23</td>
                  <td className="text-right text-red-500 py-3 px-4">-0,3%</td>
                  <td className="text-right py-3 px-4">250</td>
                  <td className="text-right py-3 px-4">R$ 10.307,50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
