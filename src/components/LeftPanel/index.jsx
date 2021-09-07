import { MatchHistory } from "./MatchHistory"
import { MatchPlayers } from "./MatchPlayers"
import { MatchType } from "./MatchType"
import { ResetButton } from "./ResetButton"
import * as S from "./style"

export const LeftPanel = ({
  isBot,
  setIsBot,
  setSceneryWinner,
  sceneryWinner,
  scenery,
  firstPlayer,
  setFirstPlayer,
  secondPlayer,
  setSecondPlayer,
  gameStart,
  setGameStart,
  setScenery,
  setFirstPlayerPoints,
  firstPlayerPoints,
  setSecondPlayerPoints,
  secondPlayerPoints,
  setPlays,
  setBestOfFive,
  bestOfFive
}) => {
  return (
    <S.Container>
      <MatchPlayers
        firstPlayer={firstPlayer}
        setFirstPlayer={setFirstPlayer}
        secondPlayer={secondPlayer}
        setSecondPlayer={setSecondPlayer}
        isBot={isBot}
        setIsBot={setIsBot}
        gameStart={gameStart}
      />
      <MatchType
        setBestOfFive={setBestOfFive}
        bestOfFive={bestOfFive}
        gameStart={gameStart}
        setGameStart={setGameStart}
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
      />
      <MatchHistory
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
        scenery={scenery}
        setSceneryWinner={setSceneryWinner}
        sceneryWinner={sceneryWinner}
      />
      <ResetButton
        setSceneryWinner={setSceneryWinner}
        setScenery={setScenery}
        setFirstPlayerPoints={setFirstPlayerPoints}
        setSecondPlayerPoints={setSecondPlayerPoints}
        setPlays={setPlays}
        setGameStart={setGameStart}
        firstPlayerPoints={firstPlayerPoints}
        secondPlayerPoints={secondPlayerPoints}
        bestOfFive={bestOfFive}
      />
    </S.Container>
  )
}
