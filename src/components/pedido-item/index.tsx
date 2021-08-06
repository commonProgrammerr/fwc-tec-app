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

interface PedidoItemProps {
  nomeCliente: string
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
  nomeCliente,
  numeroPedido,
  statusPedido,
  horaDoPedido,
  produtos,
  className
}: PedidoItemProps) {

  // const [isOpen, setIsOpen] = useState(true)
  
  
  
  
  return (
    <tr className={`w-full tabela-pedidos-itens ${className}`} >
      <td className="text-center tabela-pedidos-time-col">
        <span className="w-full">
          {horaDoPedido}
        </span>
      </td>
      <td className="text-center tabela-pedidos-num-col">
        <span className="w-full text-center">
          {numeroPedido}
        </span>
      </td>

      <ClientCell nomeCliente={nomeCliente} />
      <td className="text-gray-600 tabela-pedidos-itens-col">
        <div>
          <small className="mr-2">1. X-Burgue da Casa (1)</small>
          <small className="mr-2">2. Batata Frita (1)</small>
          <small>3. Suco de fruta (2)</small>
        </div>
      </td>
      <StateCell statusPedido={PedidoStates[statusPedido]}/>
    </tr>
  );
}


export default PedidoItem;
