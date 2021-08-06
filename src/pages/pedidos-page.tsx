import React from "react"
import TabelaDePedidos from "../components/tabela-pedidos"

import { IoIosListBox } from 'react-icons/io'

import Layout from "../components/layout"


function PedidoPage() {
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
      
      <TabelaDePedidos className="text-sm mt-10" />
      
    </Layout>
  );
}


export default PedidoPage;
