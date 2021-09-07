import * as S from "./style"

export const ScorePanel = ({ isBot, firstPlayerPoints, secondPlayerPoints, secondPlayer, firstPlayer, move }) => {
  return (
    <S.Container>
      <S.Points>{firstPlayerPoints}</S.Points>
      <S.BoxColumn>
        <S.Text>Placar</S.Text>
        <S.NamePlayer>{move === "X" ? firstPlayer : !isBot ? secondPlayer : "Computador"}</S.NamePlayer>
      </S.BoxColumn>
      <S.Points>{secondPlayerPoints}</S.Points>
    </S.Container>
  )
}
