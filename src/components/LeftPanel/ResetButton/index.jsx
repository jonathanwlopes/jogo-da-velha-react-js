import * as S from "./style"
import { useGameContext } from "../../../context/GameContext"

export const ResetButton = () => {
  const { resetGame } = useGameContext()

  return <S.ResetButton onClick={resetGame}>Reiniciar</S.ResetButton>
}
