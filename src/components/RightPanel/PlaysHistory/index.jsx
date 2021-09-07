import { useGameContext } from "../../../context/GameContext"
import * as S from "./style"

const square = ["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto", "Sexto", "Setimo", "Oitavo", "Nono"]

export const PlaysHistory = () => {
  const { firstPlayer, secondPlayer, isBot, setScenery, plays } = useGameContext()
  return (
    <S.Container>
      <span>Histórico de Jogadas</span>
      <S.Wrapper>
        {plays.map((play, index) => (
          <S.ContentBox onClick={() => setScenery(play.scenery)} key={`play-${play.position}${index}`}>
            <S.Play>{play.move}</S.Play>
            <S.WrapperText>
              <S.PlayerName>{play.move === "X" ? firstPlayer : !isBot ? secondPlayer : "Computador"}</S.PlayerName>
              <S.DidPlay>{`${square[play.position]} quadrado`}</S.DidPlay>
            </S.WrapperText>
          </S.ContentBox>
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
