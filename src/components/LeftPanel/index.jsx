import { MatchHistory } from "./MatchHistory"
import { MatchPlayers } from "./MatchPlayers"
import { MatchType } from "./MatchType"
import { ResetButton } from "./ResetButton"
import * as S from "./style"

export const LeftPanel = () => {
  return (
    <S.Container>
      <MatchPlayers />
      <MatchType />
      <MatchHistory />
      <ResetButton />
    </S.Container>
  )
}
