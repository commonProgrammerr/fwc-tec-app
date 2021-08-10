import React from 'react';
import { PedidoStatus } from "./index";

interface StateTagProps {
  statusPedido: PedidoStatus
}

function StateCell({ statusPedido }: StateTagProps) {
  const defaulClasses = `
    flex 
    flex-1
    text-white
    font-medium
    justify-center
    items-center
    px-2 py-1 
    min-w-32
    w-full
    h-full
    rounded
  `

  switch (statusPedido) {
    case PedidoStatus.PRONTO:
      return (
        <td className="tabela-pedidos-status-col">
          <span className={'bg-yellow-400 ' + defaulClasses}>
            Pronto
          </span>
        </td>
      )

    case PedidoStatus.AGUARDADANDO:
      return (
        <td className="tabela-pedidos-status-col">
          <span className={'bg-gray-500 ' + defaulClasses}>
            Aguardando
          </span>
        </td>
      )

    case PedidoStatus.ENTREGUE:
      return (
        <td className="tabela-pedidos-status-col">
          <span className={'bg-green-400 ' + defaulClasses}>
            Entregue
          </span>
        </td>
      )

    case PedidoStatus.EN_ANDAMENTO:
      return (
        <td className="tabela-pedidos-status-col">
          <span className={'bg-red-500 ' + defaulClasses}>
            Em andamento
          </span>
        </td>
      )

    default:
      return null
  }
}

export default StateCell;
