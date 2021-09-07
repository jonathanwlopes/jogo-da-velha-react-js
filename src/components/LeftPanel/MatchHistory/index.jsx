import { useGameContext } from "../../../context/GameContext"
import * as S from "./style"

export const MatchHistory = () => {
  const { firstPlayer, secondPlayer, sceneryWinner } = useGameContext()

  return (
    <S.Container>
      <span>Histórico de Partidas</span>

      <S.Wrapper>
        {sceneryWinner.map((scenery, index) => {
          return (
            <S.ContentBox key={`winner-${index}`}>
              <S.WinnerPanel>
                <span>Vencedor</span>
                <span>{scenery.winner === "X" ? firstPlayer : secondPlayer}</span>
              </S.WinnerPanel>
              <span>Cenário</span>
              <S.SceneryPanel>
                {scenery.scenery.map((field, index) => (
                  <div key={`field-${index}`}>{field}</div>
                ))}
              </S.SceneryPanel>
            </S.ContentBox>
          )
        })}
      </S.Wrapper>
    </S.Container>
  )
}
