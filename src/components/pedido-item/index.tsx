import '../../styles/components/pedido-item.css'
import ClientCell from './client-cell';
import ProdutosCell from './produtos-cell';
import StatusCell from './status-cell';
import {
  ContextData as PedidoContextDataType,
  PedidoProvider
} from './pedido-context';

export enum PedidoStatus {
  AGUARDADANDO,
  EN_ANDAMENTO,
  PRONTO,
  ENTREGUE,
}

export interface PedidoItemProps extends PedidoContextDataType {
  className?: string
}

function PedidoItem({ className, ...props }: PedidoItemProps) {

  return (
    <PedidoProvider {...props}>
      <tr className={`w-full tabela-pedidos-itens ${className}`} >

        {/* Hora do pedido */}
        <td className="text-center tabela-pedidos-time-col">
          <span className="w-full">
            {props.horaDoPedido}
          </span>
        </td>

        {/* Numero do pedido */}
        <td className="text-center tabela-pedidos-num-col">
          <span className="w-full text-center">
            {props.numero.toString().padStart(4, '0')}
          </span>
        </td>

        {/* Dados do cliente */}
        <ClientCell />

        {/*  Items pedidos */}
        <ProdutosCell />

        {/* Status do pedido */}
        <StatusCell />
      </tr>
    </PedidoProvider>
  );
}


export default PedidoItem;
