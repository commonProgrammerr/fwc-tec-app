// import { useState } from 'react';

import '../../styles/components/pedido-item.css'
import ClientCell from './client-cell';
import StateCell from './state-cell';

export enum PedidoStates {
  AGUARDADANDO,
  EN_ANDAMENTO,
  PRONTO,
  ENTREGUE,
}

export interface PedidoItemProps {
  clientInfos: {
    nome: string
    adress: string
    telefone: string
  }
  numeroPedido: number
  statusPedido: keyof typeof PedidoStates
  horaDoPedido: string
  produtos?: Array<{
    nome: string
    quantidade: number
  }>
  className?: string
}

function PedidoItem({
  clientInfos,
  numeroPedido,
  statusPedido,
  horaDoPedido,
  produtos,
  className
}: PedidoItemProps) {

  // const [isOpen, setIsOpen] = useState(true)




  return (
    <tr className={`w-full tabela-pedidos-itens ${className}`} >
      
      {/* Hora do pedido */}
      <td className="text-center tabela-pedidos-time-col">
        <span className="w-full">
          {horaDoPedido}
        </span>
      </td>

      {/* Numero do peido */}
      <td className="text-center tabela-pedidos-num-col">
        <span className="w-full text-center">
          {numeroPedido}
        </span>
      </td>

      {/* Dados do cliente */}
      <ClientCell
        adress={clientInfos.adress}
        telefone={clientInfos.telefone}
        nome={clientInfos.nome}
      />

      {/*  Items pedidos */}
      <td className="text-gray-600 tabela-pedidos-itens-col">
        <div>
          <small className="mr-2">1. X-Burgue da Casa (1)</small>
          <small className="mr-2">2. Batata Frita (1)</small>
          <small>3. Suco de fruta (2)</small>
        </div>
      </td>
      
      {/* Status do pedido */}
      <StateCell statusPedido={PedidoStates[statusPedido]} />
    </tr>
  );
}


export default PedidoItem;
