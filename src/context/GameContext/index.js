import { createContext, useContext, useEffect, useState } from "react"

const GameContext = createContext({})

export const INITIAL_SCENERY = ["", "", "", "", "", "", "", "", ""]

export const GameProvider = ({ children }) => {
  const [bestOfFive, setBestOfFive] = useState(false)
  const [firstPlayerPoints, setFirstPlayerPoints] = useState(0)
  const [secondPlayerPoints, setSecondPlayerPoints] = useState(0)
  const [sceneryWinner, setSceneryWinner] = useState([])
  const [move, setMove] = useState("X")
  const [isBot, setIsBot] = useState(false)
  const [scenery, setScenery] = useState(INITIAL_SCENERY)
  const [gameStart, setGameStart] = useState(false)
  const [plays, setPlays] = useState([])

  useEffect(() => {
    checkScore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstPlayerPoints, secondPlayerPoints])

  const checkScore = () => {
    if (!bestOfFive && (firstPlayerPoints === 3 || secondPlayerPoints === 3)) {
      setTimeout(resetGame, 500)
    }

    if (bestOfFive && (firstPlayerPoints === 5 || secondPlayerPoints === 5)) {
      setTimeout(resetGame, 500)
    }
  }

  const resetScenery = () => {
    setScenery(INITIAL_SCENERY)
  }

  const resetBattlefield = () => {
    resetScenery()
    setMove("X")
    setPlays([])
  }

  const resetGame = () => {
    setFirstPlayerPoints(0)
    setSecondPlayerPoints(0)
    setSceneryWinner([])
    setGameStart(false)
    resetBattlefield()
  }

  return (
    <GameContext.Provider
      value={{
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
        resetScenery,
        resetGame,
        resetBattlefield
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
