import * as S from "./style"
import { useEffect } from "react"
import { INITIAL_SCENERY, useGameContext } from "../../../context/GameContext"

export const ResetButton = () => {
  const {
    bestOfFive,
    secondPlayerPoints,
    setSecondPlayerPoints,
    firstPlayerPoints,
    setFirstPlayerPoints,
    setSceneryWinner,
    setScenery,
    setGameStart,
    setPlays,
    setMove
  } = useGameContext()

  useEffect(() => {
    checkScore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstPlayerPoints, secondPlayerPoints])

  const handleReset = () => {
    setFirstPlayerPoints(0)
    setSecondPlayerPoints(0)
    setScenery(INITIAL_SCENERY)
    setPlays([])
    setSceneryWinner([])
    setGameStart(false)
    setMove('X')
  }

  const checkScore = () => {
    if (!bestOfFive && (firstPlayerPoints === 3 || secondPlayerPoints === 3)) {
      setTimeout(handleReset, 500)
    }

    if (bestOfFive && (firstPlayerPoints === 5 || secondPlayerPoints === 5)) {
      setTimeout(handleReset, 500)
    }
  }

  return <S.ResetButton onClick={handleReset}>Reiniciar</S.ResetButton>
}
