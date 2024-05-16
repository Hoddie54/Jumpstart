import { Candidate } from "@/types/student"
import { createContext, ReactNode, useState } from "react"

interface CartContextType {
  candidates: Candidate[]
  setCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>
}

export const CartContext = createContext<CartContextType>({
  candidates: [],
  setCandidates: () => {},
})

type ContextProviderProps = {
  children?: ReactNode
}

export const CartContextProvider = ({ children }: ContextProviderProps) => {
  const [candidates, setCandidates] = useState<Candidate[]>([])

  // const [data, setData] = useState<CartContextType>({
  //   candidates: students,
  //   setCandidates: setStudents,
  // })

  return (
    <CartContext.Provider
      value={{ candidates: candidates, setCandidates: setCandidates }}
    >
      {children}
    </CartContext.Provider>
  )
}
