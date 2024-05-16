import { Student } from "@/types/student"
import { createContext, ReactNode, useEffect, useState } from "react"

interface CartContextType {
  candidates: Student[]
  setCandidates: React.Dispatch<React.SetStateAction<Student[]>>
}

export const CartContext = createContext<CartContextType>({
  candidates: [],
  setCandidates: () => {},
})

type ContextProviderProps = {
  children?: ReactNode
}

export const CartContextProvider = ({ children }: ContextProviderProps) => {
  const [students, setStudents] = useState<Student[]>([])

  // const [data, setData] = useState<CartContextType>({
  //   candidates: students,
  //   setCandidates: setStudents,
  // })

  return (
    <CartContext.Provider
      value={{ candidates: students, setCandidates: setStudents }}
    >
      {children}
    </CartContext.Provider>
  )
}
