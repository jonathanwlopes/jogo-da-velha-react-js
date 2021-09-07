import { createContext, useContext, useState } from "react"

const PlayerContext = createContext({})

export const PlayerProvider = ({ children }) => {
  const [firstPlayer, setFirstPlayer] = useState("Jonathan")
  const [secondPlayer, setSecondPlayer] = useState("Raul")

  return <PlayerContext.Provider value={{ firstPlayer, setFirstPlayer, secondPlayer, setSecondPlayer }}>{children}</PlayerContext.Provider>
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)
  return context
}
