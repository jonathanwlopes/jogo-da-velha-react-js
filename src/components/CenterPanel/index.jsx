import { Battlefield } from "./Battlefield"
import { ScorePanel } from "./ScorePanel"
import * as S from "./style"

export const CenterPanel = () => {
  return (
    <S.Container>
      <ScorePanel />
      <Battlefield />
    </S.Container>
  )
}
