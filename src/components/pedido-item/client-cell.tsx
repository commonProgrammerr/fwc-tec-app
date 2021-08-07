import React from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md'
import { useToasts } from 'react-toast-notifications';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface ClientCellProps {
  nome: string
  adress: string
  telefone: string
}

function ClientCell({ telefone, adress, nome }: ClientCellProps) {

  const { addToast } = useToasts()

  const handleCopyTelefone = () => {
    addToast(
      'Telefone copiado!',
      {
        appearance: 'info',
        autoDismiss: true
      }
    )
  }

  const handleCopyAdress = () => {
    addToast(
      'Endereço copiado!',
      {
        appearance: 'info',
        autoDismiss: true
      }
    )
  }

  return (
    <td className="text-indigo-200 tabela-pedidos-name-col">
      <span className="flex-1 flex items-center">
        <span className="text-gray-700 px-3">
          {nome}
        </span>
        <CopyToClipboard
          text={telefone}
          onCopy={handleCopyTelefone}
        >
          <MdPhone
            size={21}
            title="Telefone para contato"
            className="mr-1 cursor-pointer hover:text-indigo-300"
          />
        </CopyToClipboard>
        <CopyToClipboard
          text={adress}
          onCopy={handleCopyAdress}
        >
          <MdLocationOn
            size={21}
            title="Endereço do cliente"
            className="cursor-pointer hover:text-indigo-300"
          />
        </CopyToClipboard>
      </span>
    </td>
  );
}

export default ClientCell;
