import * as S from "./style"
import { INITIAL_SCENERY } from "../../../App"
import { useEffect } from "react"

export const ResetButton = ({
  secondPlayerPoints,
  firstPlayerPoints,
  setGameStart,
  setSceneryWinner,
  setPlays,
  setSecondPlayerPoints,
  setFirstPlayerPoints,
  setScenery,
  bestOfFive,
}) => {
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
