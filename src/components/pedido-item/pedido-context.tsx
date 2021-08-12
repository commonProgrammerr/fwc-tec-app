import { ReactNode, createContext, useContext } from "react";
import { PedidoStatus } from ".";

interface PedidoContextProps {
  clientInfos: {
    nome: string
    endereço: string
    telefone: string
  }
  numero: number
  status: keyof typeof PedidoStatus
  horaDoPedido: string
  produtos?: Array<{
    nome: string
    quantidade: number
    preço: number
  }>
  children: ReactNode
}

export type ContextData = Omit<PedidoContextProps, 'children'>

const pedidoContext = createContext<ContextData | null>(null)

export function PedidoProvider({ children, produtos = [], ...props }: PedidoContextProps) {
  return (
    <pedidoContext.Provider
      value={{ produtos, ...props }}
    >
      {children}
    </pedidoContext.Provider>
  );
}


export function usePedidoContext(): ContextData {
  const context = useContext(pedidoContext)

  if (!context) {
    console.error('load')
    throw new Error("This hook, should be called inside of 'PedidoProvide'!")
  }

  return context
}
