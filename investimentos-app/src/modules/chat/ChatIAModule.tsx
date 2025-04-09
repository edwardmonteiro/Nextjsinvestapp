'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Tipos para as mensagens
interface Mensagem {
  id: number;
  remetente: 'usuario' | 'ia';
  texto: string;
  horario: string;
}

interface Conversa {
  id: number;
  titulo: string;
  mensagens: Mensagem[];
}

// Respostas pré-definidas da IA para simulação
const respostasIA = [
  "Com base na análise dos seus investimentos atuais, recomendo aumentar a exposição em ações do setor bancário, que estão mostrando bons indicadores após os últimos resultados trimestrais.",
  "Analisando o mercado atual, observo que os FIIs de logística continuam com bom desempenho. Considerando seu perfil de investidor, seria interessante avaliar a alocação de até 10% do seu portfólio nesse segmento.",
  "Para proteção contra a inflação, os Títulos do Tesouro IPCA+ são uma excelente alternativa. Considerando o cenário macroeconômico atual, recomendo manter cerca de 25% da sua carteira em renda fixa indexada à inflação.",
  "Suas ações de PETR4 tiveram um desempenho positivo de 1,2% hoje. A empresa divulgou recentemente resultados acima das expectativas do mercado, e a maioria dos analistas mantém recomendação de compra para o papel.",
  "Observo que sua carteira está com 56% em ações, o que está adequado para um perfil moderado a arrojado. No entanto, sugiro diversificar mais entre os setores, pois há uma concentração significativa no setor financeiro.",
  "O índice Ibovespa está em tendência de alta, superando os 128 mil pontos. Tecnicamente, o mercado mostra força, com as médias móveis de 20, 50 e 200 dias em configuração positiva.",
  "Para investidores com perfil mais conservador, recomendo avaliar os CDBs de bancos médios, que estão oferecendo taxas atrativas de até 115% do CDI, com a segurança do FGC para valores até R$ 250 mil.",
  "Analisando seu histórico de investimentos, percebo que você tem preferência por empresas de dividendos. Nesse sentido, TAEE11 e TRPL4 são alternativas interessantes no setor elétrico, com dividend yield projetado acima de 7% ao ano."
];

// Função para obter resposta simulada da IA
const obterRespostaIA = (pergunta: string): string => {
  // Lógica simples para selecionar respostas baseadas em palavras-chave
  if (pergunta.toLowerCase().includes('ação') || pergunta.toLowerCase().includes('ações')) {
    return respostasIA[0];
  } else if (pergunta.toLowerCase().includes('fii') || pergunta.toLowerCase().includes('imobiliário')) {
    return respostasIA[1];
  } else if (pergunta.toLowerCase().includes('tesouro') || pergunta.toLowerCase().includes('renda fixa')) {
    return respostasIA[2];
  } else if (pergunta.toLowerCase().includes('petr4') || pergunta.toLowerCase().includes('petrobras')) {
    return respostasIA[3];
  } else if (pergunta.toLowerCase().includes('carteira') || pergunta.toLowerCase().includes('portfólio')) {
    return respostasIA[4];
  } else if (pergunta.toLowerCase().includes('ibovespa') || pergunta.toLowerCase().includes('mercado')) {
    return respostasIA[5];
  } else if (pergunta.toLowerCase().includes('cdb') || pergunta.toLowerCase().includes('conservador')) {
    return respostasIA[6];
  } else if (pergunta.toLowerCase().includes('dividendo') || pergunta.toLowerCase().includes('proventos')) {
    return respostasIA[7];
  } else {
    // Resposta padrão para outras perguntas
    return "Analisei sua pergunta sobre \"" + pergunta + "\". Com base nos dados de mercado atuais e no seu perfil de investidor, posso oferecer algumas recomendações personalizadas. Gostaria de saber mais sobre algum ativo ou setor específico?";
  }
};

const ChatIAModule = () => {
  // Estado para armazenar a mensagem atual sendo digitada
  const [mensagem, setMensagem] = useState('');
  
  // Estado para armazenar as conversas
  const [conversas, setConversas] = useState<Conversa[]>([
    {
      id: 1,
      titulo: 'Nova conversa',
      mensagens: [
        { 
          id: 1, 
          remetente: 'ia', 
          texto: 'Olá! Sou seu assistente de investimentos. Como posso ajudar você hoje?',
          horario: '09:32'
        }
      ]
    }
  ]);
  
  // Estado para armazenar o ID da conversa atual
  const [conversaAtualId, setConversaAtualId] = useState(1);
  
  // Referência para o contêiner de mensagens para rolagem automática
  const mensagensContainerRef = useRef<HTMLDivElement>(null);
  
  // Efeito para rolar para a última mensagem quando novas mensagens são adicionadas
  useEffect(() => {
    if (mensagensContainerRef.current) {
      mensagensContainerRef.current.scrollTop = mensagensContainerRef.current.scrollHeight;
    }
  }, [conversas]);
  
  // Função para obter a conversa atual
  const conversaAtual = conversas.find(c => c.id === conversaAtualId) || conversas[0];
  
  // Função para enviar uma mensagem
  const enviarMensagem = () => {
    if (!mensagem.trim()) return;
    
    // Obter a hora atual formatada
    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    // Adiciona mensagem do usuário
    const novaMensagemUsuario: Mensagem = {
      id: conversaAtual.mensagens.length + 1,
      remetente: 'usuario',
      texto: mensagem,
      horario: horaAtual
    };
    
    // Simula resposta da IA
    const respostaIA: Mensagem = {
      id: conversaAtual.mensagens.length + 2,
      remetente: 'ia',
      texto: obterRespostaIA(mensagem),
      horario: horaAtual
    };
    
    // Atualiza a conversa
    const novasMensagens = [...conversaAtual.mensagens, novaMensagemUsuario, respostaIA];
    const novasConversas = conversas.map(c => 
      c.id === conversaAtualId 
        ? { ...c, mensagens: novasMensagens } 
        : c
    );
    
    setConversas(novasConversas);
    setMensagem('');
  };
  
  // Função para criar uma nova conversa
  const criarNovaConversa = () => {
    const novaConversa: Conversa = {
      id: conversas.length + 1,
      titulo: `Nova conversa ${conversas.length + 1}`,
      mensagens: [
        { 
          id: 1, 
          remetente: 'ia', 
          texto: 'Olá! Sou seu assistente de investimentos. Como posso ajudar você hoje?',
          horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        }
      ]
    };
    
    setConversas([...conversas, novaConversa]);
    setConversaAtualId(novaConversa.id);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Assistente de Investimentos</h1>
        <Button onClick={criarNovaConversa} variant="outline">Nova Conversa</Button>
      </div>
      
      <div className="flex flex-1 gap-4 overflow-hidden">
        {/* Sidebar com histórico de conversas */}
        <div className="hidden md:block w-64 bg-gray-50 rounded-lg overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-700 mb-2">Histórico</h2>
            <div className="space-y-1">
              {conversas.map((conversa) => (
                <div 
                  key={conversa.id}
                  onClick={() => setConversaAtualId(conversa.id)}
                  className={`p-2 rounded-md cursor-pointer ${
                    conversa.id === conversaAtualId 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {conversa.titulo}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Chat principal */}
        <Card className="flex-1 flex flex-col overflow-hidden">
          <CardHeader className="border-b bg-gray-50 py-3">
            <CardTitle className="text-lg">{conversaAtual.titulo}</CardTitle>
          </CardHeader>
          <CardContent 
            ref={mensagensContainerRef}
            className="flex-1 overflow-y-auto p-0"
          >
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
              <Input
                type="text"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && enviarMensagem()}
                placeholder="Digite sua pergunta sobre investimentos..."
                className="flex-1"
              />
              <Button
                onClick={enviarMensagem}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Enviar
              </Button>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <p>Sugestões: "Análise de PETR4", "Recomendações para renda fixa", "Como diversificar minha carteira?"</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChatIAModule;
