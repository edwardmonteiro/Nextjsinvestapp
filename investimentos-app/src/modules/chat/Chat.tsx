'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChatModule = () => {
  const [mensagem, setMensagem] = useState('');
  const [conversas, setConversas] = useState([
    {
      id: 1,
      mensagens: [
        { 
          id: 1, 
          remetente: 'ia', 
          texto: 'Olá! Sou seu assistente de investimentos. Como posso ajudar você hoje?',
          horario: '09:32'
        },
        { 
          id: 2, 
          remetente: 'usuario', 
          texto: 'Quais são as melhores oportunidades de investimento para este mês?',
          horario: '09:33'
        },
        { 
          id: 3, 
          remetente: 'ia', 
          texto: 'Com base na análise de mercado atual, recomendo considerar: 1) Ações do setor bancário, que estão mostrando bons indicadores após os últimos resultados trimestrais; 2) FIIs de logística, que continuam com bom desempenho; 3) Títulos do Tesouro IPCA+ para proteção contra inflação. Gostaria de mais detalhes sobre alguma dessas opções?',
          horario: '09:33'
        },
      ]
    }
  ]);
  
  const conversaAtual = conversas[0];

  const enviarMensagem = () => {
    if (!mensagem.trim()) return;
    
    // Adiciona mensagem do usuário
    const novaMensagemUsuario = {
      id: conversaAtual.mensagens.length + 1,
      remetente: 'usuario',
      texto: mensagem,
      horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    
    // Simula resposta da IA
    const respostaIA = {
      id: conversaAtual.mensagens.length + 2,
      remetente: 'ia',
      texto: 'Estou analisando sua solicitação sobre "' + mensagem + '". Com base nos dados de mercado atuais, posso oferecer algumas recomendações personalizadas para seu perfil de investidor.',
      horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    
    // Atualiza a conversa
    const novasMensagens = [...conversaAtual.mensagens, novaMensagemUsuario, respostaIA];
    const novasConversas = [...conversas];
    novasConversas[0] = { ...conversaAtual, mensagens: novasMensagens };
    
    setConversas(novasConversas);
    setMensagem('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Assistente de Investimentos</h1>
      </div>
      
      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardHeader className="border-b bg-gray-50 py-3">
          <CardTitle className="text-lg">Chat com IA</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-0">
          <div className="flex flex-col p-4 space-y-4">
            {conversaAtual.mensagens.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.remetente === 'usuario' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    msg.remetente === 'usuario' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p>{msg.texto}</p>
                  <p className={`text-xs mt-1 ${
                    msg.remetente === 'usuario' ? 'text-blue-100' : 'text-gray-500'
                  }`}>{msg.horario}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && enviarMensagem()}
              placeholder="Digite sua pergunta sobre investimentos..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={enviarMensagem}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enviar
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            <p>Sugestões: "Análise de PETR4", "Recomendações para renda fixa", "Como diversificar minha carteira?"</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatModule;
