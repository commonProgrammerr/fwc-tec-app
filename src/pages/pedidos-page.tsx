import React from "react"
import TabelaDePedidos from "../components/tabela-pedidos"

import { IoIosListBox } from 'react-icons/io'
import { PedidoItemProps } from "../components/pedido-item";

import Layout from "../components/layout"
import Loader from "../components/loader"
import { MdError } from "react-icons/md";
import { api } from "../services/api";


function PedidoPage() {

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

      <Loader
        asyncFn={getPedidos}
        loading={<p className={warnsClassNames}>Carregando...</p>}
        error={() => <p className={warnsClassNames}> Algo deu errado <MdError className="ml-2 mt-1" /> </p >}
      >
        {pedidos => <TabelaDePedidos itens={pedidos!} />}
      </Loader>

    </Layout>
  );
}


async function getPedidos(): Promise<PedidoItemProps[]> {
  // pseudo informações para teste
  const pedidos = (await api.get<PedidoItemProps[]>('/pedido')).data

  return new Promise<PedidoItemProps[]>((resolve, reject) => {
    const delay = Math.round(90 + Math.random() * 1200)
    setTimeout(resolve, delay, pedidos)
  })
}

export default PedidoPage;
