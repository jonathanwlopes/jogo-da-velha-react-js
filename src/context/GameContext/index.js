import { createContext, useContext, useState } from "react"

const GameContext = createContext({})

export const INITIAL_SCENERY = ["", "", "", "", "", "", "", "", ""]

export const GameProvider = ({ children }) => {
  const [firstPlayer, setFirstPlayer] = useState("Jonathan")
  const [secondPlayer, setSecondPlayer] = useState("Raul")
  const [bestOfFive, setBestOfFive] = useState(false)
  const [firstPlayerPoints, setFirstPlayerPoints] = useState(0)
  const [secondPlayerPoints, setSecondPlayerPoints] = useState(0)
  const [sceneryWinner, setSceneryWinner] = useState([])
  const [move, setMove] = useState("X")
  const [isBot, setIsBot] = useState(false)
  const [scenery, setScenery] = useState(INITIAL_SCENERY)
  const [gameStart, setGameStart] = useState(false)
  const [plays, setPlays] = useState([])

  return (
    <GameContext.Provider
      value={{
        firstPlayer,
        setFirstPlayer,
        secondPlayer,
        setSecondPlayer,
        bestOfFive,
        setBestOfFive,
        secondPlayerPoints,
        setSecondPlayerPoints,
        firstPlayerPoints,
        setFirstPlayerPoints,
        sceneryWinner,
        setSceneryWinner,
        move,
        setMove,
        isBot,
        setIsBot,
        scenery,
        setScenery,
        gameStart,
        setGameStart,
        plays,
        setPlays,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => {
  const context = useContext(GameContext)
  return context
}
