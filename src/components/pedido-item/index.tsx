import '../../styles/components/pedido-item.css'
import ClientCell from './client-cell';
import StateCell from './status-cell';

export enum PedidoStatus {
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
  statusPedido: keyof typeof PedidoStatus
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
        <ul className="px-3 pb-1">
          <li>X-Burgue da Casa (1)</li>
          <li>Batata Frita (1)</li>
          <li>Suco de fruta (2)</li>
        </ul>
      </td>
      
      {/* Status do pedido */}
      <StateCell statusPedido={PedidoStatus[statusPedido]} />
    </tr>
  );
}


export default PedidoItem;
