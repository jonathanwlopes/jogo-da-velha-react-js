import { useGameContext } from "../../../context/GameContext"
import * as S from "./style"

export const ScorePanel = () => {
  const { firstPlayer, secondPlayer, secondPlayerPoints, firstPlayerPoints, move } = useGameContext()

  return (
    <S.Container>
      <S.Points>{firstPlayerPoints}</S.Points>
      <S.BoxColumn>
        <S.Text>Placar</S.Text>
        <S.NamePlayer>{move === "X" ? firstPlayer : secondPlayer}</S.NamePlayer>
      </S.BoxColumn>
      <S.Points>{secondPlayerPoints}</S.Points>
    </S.Container>
  )
}
