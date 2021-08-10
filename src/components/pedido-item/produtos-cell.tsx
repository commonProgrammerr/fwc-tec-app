
interface ProdutosCellProps {
  produtos?: Array<{
    nome: string
    quantidade: number
  }>
}



function ProdutosCell({ produtos }: ProdutosCellProps) {
  const cellClassNames = `
  text-gray-600 
  tabela-pedidos-itens-col
  hover:bg-indigo-100
  hover:text-black
  rounded-md
  cursor-pointer
  `
  const listClassNames = "flex min-w-60 gap-1 text-xs"

  if (produtos && produtos.length > 3) {
    return (
      <td className={cellClassNames}>
        <ul className={listClassNames}>
          {
            produtos
              .slice(0, 3)
              ?.map(produto => (
                <li>{produto.nome} ({produto.quantidade}){'; '}</li>
              ))
          }
          <span className="leading-3 w-min text-2xl">...</span>
        </ul>
      </td>
    )
  } else {
    return (
      <td className={cellClassNames}>
        <ul className={listClassNames}>
          {
            produtos
              ?.map(produto => (
                <li>
                  {produto.nome}
                  ({produto.quantidade})
                  {'; '}
                </li>
              ))
          }
        </ul>
      </td>
    );
  }

}

export default ProdutosCell;
