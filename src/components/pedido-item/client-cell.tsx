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
      <div className="flex">

        <span className="flex-1 text-base text-gray-700 px-3">
          {nome}
        </span>
        <div className="flex items-center">
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
        </div>
      </div>
    </td>
  );
}

export default ClientCell;
