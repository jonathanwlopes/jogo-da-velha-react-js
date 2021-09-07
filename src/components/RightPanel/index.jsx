import { PlaysHistory } from "./PlaysHistory"
import * as S from "./style"

export const RightPanel = ({ isBot, setScenery, plays, firstPlayer, secondPlayer }) => {
  return (
    <S.Container>
      <PlaysHistory isBot={isBot} setScenery={setScenery} plays={plays} firstPlayer={firstPlayer} secondPlayer={secondPlayer} />
    </S.Container>
  )
}
