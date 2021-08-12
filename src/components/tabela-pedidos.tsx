import React from "react"

import { FaClock } from 'react-icons/fa'
import PedidoItem, { PedidoItemProps } from "./pedido-item/index";
import { useScroll } from "react-use";

import '../styles/components/tabela-pedidos.css'

interface TabelaDePedidosProps {
  className?: string
  itens?: PedidoItemProps[]
}

function TabelaDePedidos({ className, itens }: TabelaDePedidosProps) {
  const scrollRef = React.useRef(null);
  const { y: scrollPosition } = useScroll(scrollRef);

  return (
    <div id="main">
      <table className={"flex overflow-scroll flex-col w-full " + className}>
        <thead className="font-bold p-2 w-full text-gray-600" >
          <tr className="bg-white tabela-row" >
            <th className="tabela-pedidos-time-col" >
              <FaClock className="ml-4" size={16} />
            </th>
            <th className="tabela-pedidos-num-col">N° pedido</th>
            <th className="tabela-pedidos-name-col">Cliente</th>
            <th className="tabela-pedidos-itens-col">Itens</th>
            <th className="tabela-pedidos-status-col">Status</th>
          </tr>
        </thead>
        <tbody
          ref={scrollRef}
          className={`
            overflow-y-scroll 
            rounded 
            w-full p-2 
            ${scrollPosition > 2 && 'table-iner-shadow'}`}
        >
          {
            itens?.sort((prev, curr) => curr.numero - prev.numero)
              .map((item, index) => <PedidoItem key={`ti-${item.numero}`} className={`${index % 2 !== 0 && 'bg-gray-100'}`} {...item} />)
          }
        </tbody>
      </table>
    </div>
  );
}

export default TabelaDePedidos;
