'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from 'recharts';

// Dados simulados para os gráficos
const dadosHistoricos = [
  { data: '01/01', valor: 120000 },
  { data: '01/02', valor: 118000 },
  { data: '01/03', valor: 125000 },
  { data: '01/04', valor: 130000 },
  { data: '01/05', valor: 128000 },
  { data: '01/06', valor: 135000 },
  { data: '01/07', valor: 140000 },
  { data: '01/08', valor: 145000 },
  { data: '01/09', valor: 150000 },
  { data: '01/10', valor: 148000 },
  { data: '01/11', valor: 152000 },
  { data: '01/12', valor: 156789 },
];

const dadosComparativo = [
  { data: '01/01', PETR4: 28.5, VALE3: 65.2, ITUB4: 30.1 },
  { data: '01/02', PETR4: 29.2, VALE3: 64.8, ITUB4: 30.5 },
  { data: '01/03', PETR4: 30.1, VALE3: 66.5, ITUB4: 31.2 },
  { data: '01/04', PETR4: 31.5, VALE3: 67.2, ITUB4: 31.0 },
  { data: '01/05', PETR4: 32.2, VALE3: 66.8, ITUB4: 30.8 },
  { data: '01/06', PETR4: 33.1, VALE3: 67.5, ITUB4: 31.5 },
  { data: '01/07', PETR4: 34.0, VALE3: 68.0, ITUB4: 31.8 },
  { data: '01/08', PETR4: 35.2, VALE3: 68.5, ITUB4: 32.0 },
  { data: '01/09', PETR4: 35.8, VALE3: 69.0, ITUB4: 32.2 },
  { data: '01/10', PETR4: 36.2, VALE3: 68.8, ITUB4: 32.0 },
  { data: '01/11', PETR4: 36.5, VALE3: 68.5, ITUB4: 32.1 },
  { data: '01/12', PETR4: 36.75, VALE3: 68.42, ITUB4: 32.18 },
];

const dadosComposicao = [
  { nome: 'Ações Nacionais', valor: 45 },
  { nome: 'Ações Internacionais', valor: 11 },
  { nome: 'Renda Fixa', valor: 30 },
  { nome: 'Fundos Imobiliários', valor: 8 },
  { nome: 'Tesouro Direto', valor: 6 },
];

interface GraficoLinhaProps {
  dados: any[];
  chaveX: string;
  chaveY: string;
  titulo?: string;
  cor?: string;
  altura?: number;
  formatadorY?: (valor: number) => string;
}

export const GraficoLinha: React.FC<GraficoLinhaProps> = ({
  dados,
  chaveX,
  chaveY,
  titulo,
  cor = '#3b82f6',
  altura = 300,
  formatadorY = (valor) => `R$ ${valor.toLocaleString('pt-BR')}`,
}) => {
  return (
    <div className="w-full">
      {titulo && <h3 className="text-lg font-medium mb-2">{titulo}</h3>}
      <ResponsiveContainer width="100%" height={altura}>
        <LineChart
          data={dados}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={chaveX} />
          <YAxis tickFormatter={(valor) => formatadorY(valor)} />
          <Tooltip formatter={(valor) => formatadorY(Number(valor))} />
          <Legend />
          <Line
            type="monotone"
            dataKey={chaveY}
            stroke={cor}
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

interface GraficoAreaProps {
  dados: any[];
  chaveX: string;
  chaveY: string;
  titulo?: string;
  cor?: string;
  altura?: number;
  formatadorY?: (valor: number) => string;
}

export const GraficoArea: React.FC<GraficoAreaProps> = ({
  dados,
  chaveX,
  chaveY,
  titulo,
  cor = '#3b82f6',
  altura = 300,
  formatadorY = (valor) => `R$ ${valor.toLocaleString('pt-BR')}`,
}) => {
  return (
    <div className="w-full">
      {titulo && <h3 className="text-lg font-medium mb-2">{titulo}</h3>}
      <ResponsiveContainer width="100%" height={altura}>
        <AreaChart
          data={dados}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={chaveX} />
          <YAxis tickFormatter={(valor) => formatadorY(valor)} />
          <Tooltip formatter={(valor) => formatadorY(Number(valor))} />
          <Area type="monotone" dataKey={chaveY} stroke={cor} fill={cor} fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

interface GraficoComparativoProps {
  dados: any[];
  chaveX: string;
  series: { chave: string; cor: string }[];
  titulo?: string;
  altura?: number;
  formatadorY?: (valor: number) => string;
}

export const GraficoComparativo: React.FC<GraficoComparativoProps> = ({
  dados,
  chaveX,
  series,
  titulo,
  altura = 300,
  formatadorY = (valor) => `R$ ${valor.toFixed(2)}`,
}) => {
  return (
    <div className="w-full">
      {titulo && <h3 className="text-lg font-medium mb-2">{titulo}</h3>}
      <ResponsiveContainer width="100%" height={altura}>
        <LineChart
          data={dados}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={chaveX} />
          <YAxis tickFormatter={(valor) => formatadorY(valor)} />
          <Tooltip formatter={(valor) => formatadorY(Number(valor))} />
          <Legend />
          {series.map((serie) => (
            <Line
              key={serie.chave}
              type="monotone"
              dataKey={serie.chave}
              stroke={serie.cor}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

interface GraficoBarrasProps {
  dados: any[];
  chaveX: string;
  chaveY: string;
  titulo?: string;
  cor?: string;
  altura?: number;
  formatadorY?: (valor: number) => string;
}

export const GraficoBarras: React.FC<GraficoBarrasProps> = ({
  dados,
  chaveX,
  chaveY,
  titulo,
  cor = '#3b82f6',
  altura = 300,
  formatadorY = (valor) => `${valor}%`,
}) => {
  return (
    <div className="w-full">
      {titulo && <h3 className="text-lg font-medium mb-2">{titulo}</h3>}
      <ResponsiveContainer width="100%" height={altura}>
        <BarChart
          data={dados}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={chaveX} />
          <YAxis tickFormatter={(valor) => formatadorY(valor)} />
          <Tooltip formatter={(valor) => formatadorY(Number(valor))} />
          <Legend />
          <Bar dataKey={chaveY} fill={cor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Exportando os dados simulados para uso em outros componentes
export { dadosHistoricos, dadosComparativo, dadosComposicao };
