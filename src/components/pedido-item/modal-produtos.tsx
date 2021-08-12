import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import ReactModal from 'react-modal';
import { usePedidoContext } from './pedido-context';

interface ModalProdutosProps {
  isOpen: boolean
  closeModal: () => void
}

function ModalProdutos({ isOpen, closeModal }: ModalProdutosProps) {

  const { produtos } = usePedidoContext()

  const modalStyles: ReactModal.Styles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'none',
      border: 'none',
      zIndex: 99
    },
    overlay: {
      background: 'none',
    }
  };

  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => setIsVisible(isOpen), [isOpen])

  const handleModalClose = useCallback(() => {
    if (closeModal) {
      closeModal()
    }

    setIsVisible(false)
  }, [closeModal])

  return (
    <ReactModal
      isOpen={isVisible}
      contentLabel="onRequestClose Example"
      onRequestClose={handleModalClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick={true}
      style={modalStyles}
    > {

        <div
          className="
            flex 
            flex-col 
            px-3 pt-2 pb-5  
            bg-white 
            border
            shadow-lg
            rounded-lg
            min-w-98
            min-h-100"
        >
          <h2 className="text-2xl font-semibold text-gray-600 px-1 py-2">
            Itens Solicitados
          </h2>
          <ul className="
            flex
            flex-col    
            flex-1
            p-4
            rounded-md
            ring-1
            ring-gray-200
            bg-gray-100
            text-gray-600
            font-medium
            max-h-72
            overflow-y-scroll
          ">
            {
              produtos?.map((produto, index) => (
                <li
                  key={`${produto.nome}-${index}`}
                  className="flex items-baseline mb-2"
                >
                  {produto.nome}(
                  <span className="text-xs" >x</span>
                  {produto.quantidade}
                  )
                  <div className="flex-1 border-b border-gray-600 border-dotted" />
                  R$ {
                    (produto.preço || 0)
                      .toLocaleString('br', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })
                  }
                </li>
              ))
            }
            <span className="text-lg font-bold flex flex-1 items-end" >
              Total:
              <div className="flex-1 w-10 border-b border-gray-600 border-dotted" />
              {' R$'}
              <span className="text-3xl font-medium">
                {
                  produtos?.map(produto => produto.preço)
                    .reduce((prev, curr) => prev + curr || 0, 0)
                    .toLocaleString('br', {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2
                    })
                }
              </span>
            </span>
          </ul>
          <button
            onClick={handleModalClose}
            className="
            mt-6 py-3 px-6 
            bg-red-500 
            hover:bg-red-600 
            rounded
            font-bold
            text-white
            "
          >
            Voltar
          </button>
        </div>

      }
    </ReactModal>
  );
}

export default ModalProdutos;
