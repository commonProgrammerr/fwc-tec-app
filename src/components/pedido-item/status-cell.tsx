import React from 'react';
import { RiAlertFill } from 'react-icons/ri';
import { PedidoStatus } from "./index";
import { usePedidoContext } from './pedido-context';


function StateCell() {
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
  const { status } = usePedidoContext()

  switch (PedidoStatus[status]) {
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
      return (
        <td className="tabela-pedidos-status-col">
          <span className={defaulClasses + 'bg-pink-800 text-lg'}>
            Error <RiAlertFill size={20} />
          </span>
        </td>
      )
  }
}

export default StateCell;
