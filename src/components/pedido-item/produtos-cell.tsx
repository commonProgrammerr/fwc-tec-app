import { useState } from "react"
import ModalProdutos from "./modal-produtos"
import { usePedidoContext } from "./pedido-context"




function ProdutosCell() {
  const cellClassNames = `
  text-gray-600 
  tabela-pedidos-itens-col
  rounded-md
  hover:bg-indigo-100
  hover:text-black
  cursor-pointer
  `
  const listClassNames = "flex min-w-60 gap-1 text-xs overflow-visible"


  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => setShowModal(() => {
      showModal && setShowModal(false)
      return true
    })

  const handleCloseModal = () => setShowModal(false)

  const { produtos } = usePedidoContext()
  const size = produtos?.length || 0

  return (
    <td className={cellClassNames} title="Detalhes" onClick={handleOpenModal}>
      <ul className={listClassNames}>
        {
          produtos
            ?.slice(0, 4)
            .map((produto, index) => {
              const sufixo = (index < size - 1) ? ('; ') : (size > 4 && '...')
              return (
                <li key={`${produto.nome}-${index}`}>
                  {produto.nome}
                  ({produto.quantidade})
                  {sufixo}
                </li>
              )
            })
        }
      </ul>
      <ModalProdutos isOpen={showModal} closeModal={handleCloseModal} />
    </td>
  )
}

export default ProdutosCell;
