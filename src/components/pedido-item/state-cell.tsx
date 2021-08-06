import React from 'react';
import { PedidoStates } from "./index";

interface StateTagProps {
  statusPedido: PedidoStates
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
    rounded
    tabela-pedidos-status-col
  `

  switch (statusPedido) {
    case PedidoStates.PRONTO:
      return (
        <td>
          <span className={'bg-yellow-400 ' + defaulClasses}>
            Pronto
          </span>
        </td>
      )

    case PedidoStates.AGUARDADANDO:
      return (
        <td>
          <span className={'bg-gray-500 ' + defaulClasses}>
            Aguardando
          </span>
        </td>
      )

    case PedidoStates.ENTREGUE:
      return (
        <td>
          <span className={'bg-green-400 ' + defaulClasses}>
            Entregue
          </span>
        </td>
      )

    case PedidoStates.EN_ANDAMENTO:
      return (
        <td>
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
