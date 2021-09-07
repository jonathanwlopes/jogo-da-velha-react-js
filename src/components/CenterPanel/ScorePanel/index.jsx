import { useGameContext } from "../../../context/GameContext"
import { usePlayer } from "../../../context/PlayerContext"
import * as S from "./style"

export const ScorePanel = () => {
  const { secondPlayerPoints, firstPlayerPoints, move } = useGameContext()
  const { firstPlayer, secondPlayer } = usePlayer()
  
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
