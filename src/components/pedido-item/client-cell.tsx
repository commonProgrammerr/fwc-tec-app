import React from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md'

interface ClientCellProps {
  nomeCliente: string
}

function ClientCell({ nomeCliente }: ClientCellProps) {
  return (
    <td className="text-indigo-200 tabela-pedidos-name-col">
      <span className="flex-1 flex items-center">
        <span className="text-gray-700 px-3">
          {nomeCliente}
        </span>
        <MdPhone
          size={21}
          title="Telefone para contato"
          className="mr-1 cursor-pointer hover:text-indigo-300"
        />
        <MdLocationOn
          size={21}
          title="Endereço do cliente"
          className="cursor-pointer hover:text-indigo-300"
        />
      </span>
    </td>
  );
}

export default ClientCell;
