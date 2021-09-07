import { Battlefield } from "./Battlefield"
import { ScorePanel } from "./ScorePanel"
import * as S from "./style"

export const CenterPanel = ({
  isBot,
  setSceneryWinner,
  sceneryWinner,
  scenery,
  setScenery,
  plays,
  setPlays,
  secondPlayer,
  firstPlayer,
  setMove,
  move,
  gameStart,
  firstPlayerPoints,
  secondPlayerPoints,
  setFirstPlayerPoints,
  setSecondPlayerPoints,
}) => {

  return (
    <S.Container>
      <ScorePanel
        firstPlayerPoints={firstPlayerPoints}
        secondPlayerPoints={secondPlayerPoints}
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
        move={move}
        setMove={setMove}
        isBot={isBot}
      />
      <Battlefield
        scenery={scenery}
        setScenery={setScenery}
        plays={plays}
        setPlays={setPlays}
        firstPlayerPoints={firstPlayerPoints}
        secondPlayerPoints={secondPlayerPoints}
        setFirstPlayerPoints={setFirstPlayerPoints}
        setSecondPlayerPoints={setSecondPlayerPoints}
        move={move}
        setMove={setMove}
        setSceneryWinner={setSceneryWinner}
        sceneryWinner={sceneryWinner}
        isBot={isBot}
        gameStart={gameStart}
      />
    </S.Container>
  )
}
