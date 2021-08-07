import React from "react"
import TabelaDePedidos from "../components/tabela-pedidos"

import { IoIosListBox } from 'react-icons/io'
import { MdError } from 'react-icons/md'

import Layout from "../components/layout"
import { PedidoItemProps } from "../components/pedido-item";
import { useAsync } from "react-use";


function PedidoPage() {
  const pedidos = useAsync(getPedidos)

  const warnsClassNames = `
  flex
  items-center
  justify-center
  w-full h-60
  text-gray-500
  text-3xl
  font-medium
  `
  return (
    <Layout>
      <h1 className="
        flex
        items-center
        
        ml-4 
        text-3xl 
        font-medium 
        text-gray-600"
      >
        <IoIosListBox className="mr-2 mt-1" /> Pedidos
      </h1>
      {
        pedidos.loading
          ? <p className={warnsClassNames} > Carregando...</p>
          : true
            ? <p className={warnsClassNames} >
                Algo deu errado <MdError className="ml-2 mt-1" />
              </p >
            : <TabelaDePedidos className="text-sm mt-10" itens={pedidos.value} />
      }


    </Layout>
  );
}


async function getPedidos(): Promise<PedidoItemProps[]> {
  // pseudo informações para teste
  const pedidos: PedidoItemProps[] = [
    {
      clientInfos: {
        nome: 'Iago Thales Ferreira',
        adress: 'Rua Palmeirais, 479, Campo Grande - 79034-500',
        telefone: '(67) 98197-5298'
      },
      horaDoPedido: '12:13',
      numeroPedido: 61,
      statusPedido: 'AGUARDADANDO'
    },
    {
      clientInfos: {
        nome: 'Alessandra Maria Nina Viana',
        adress: 'Rua Alberto Stein, s\/n, 908, Blumenau - 89036-900',
        telefone: '(47) 98137-1127'
      },
      horaDoPedido: '12:13',
      numeroPedido: 67,
      statusPedido: 'ENTREGUE'
    },
    {
      clientInfos: {
        nome: 'Vicente Daniel Carlos Eduardo Aparício',
        adress: 'Rua C, 151, Porto Alegre - 91150-135',
        telefone: '(51) 98593-0667'
      },
      horaDoPedido: '12:13',
      numeroPedido: 96,
      statusPedido: 'EN_ANDAMENTO'
    },
    {
      clientInfos: {
        nome: 'Renan Cláudio Mendes',
        adress: 'Rua Paratinga, 720, Natal - 59120-140',
        telefone: '(84) 98185-0855'
      },
      horaDoPedido: '12:13',
      numeroPedido: 50,
      statusPedido: 'PRONTO'
    }
  ]

  return new Promise<PedidoItemProps[]>((resolve, reject) => {
    const delay = Math.round(90 + Math.random() * 1200)
    setTimeout(resolve, delay, pedidos)
  })
}

export default PedidoPage;
