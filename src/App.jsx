import { LeftPanel } from "./components/LeftPanel"
import { CenterPanel } from "./components/CenterPanel"

import * as S from "./style"
import { GlobalStyles } from "./styles/global"
import { RightPanel } from "./components/RightPanel"
import { useState } from "react"

export const INITIAL_SCENERY = ["", "", "", "", "", "", "", "", ""]

function App() {
  const [gameStart, setGameStart] = useState(false)
  const [scenery, setScenery] = useState(INITIAL_SCENERY)
  const [plays, setPlays] = useState([])
  const [firstPlayer, setFirstPlayer] = useState("Jonathan")
  const [secondPlayer, setSecondPlayer] = useState("Raul")
  const [isBot, setIsBot] = useState(false)
  const [move, setMove] = useState("X")
  const [sceneryWinner, setSceneryWinner] = useState([])
  const [firstPlayerPoints, setFirstPlayerPoints] = useState(0)
  const [secondPlayerPoints, setSecondPlayerPoints] = useState(0)
  const [bestOfFive, setBestOfFive] = useState(false)

  return (
    <>
      <S.Container>
        <LeftPanel
          scenery={scenery}
          setScenery={setScenery}
          firstPlayer={firstPlayer}
          setFirstPlayer={setFirstPlayer}
          secondPlayer={secondPlayer}
          setSecondPlayer={setSecondPlayer}
          setSceneryWinner={setSceneryWinner}
          sceneryWinner={sceneryWinner}
          isBot={isBot}
          setIsBot={setIsBot}
          gameStart={gameStart}
          setGameStart={setGameStart}
          firstPlayerPoints={firstPlayerPoints}
          secondPlayerPoints={secondPlayerPoints}
          setFirstPlayerPoints={setFirstPlayerPoints}
          setSecondPlayerPoints={setSecondPlayerPoints}
          setPlays={setPlays}
          setBestOfFive={setBestOfFive}
          bestOfFive={bestOfFive}
        />
        <CenterPanel
          scenery={scenery}
          setScenery={setScenery}
          plays={plays}
          setPlays={setPlays}
          firstPlayer={firstPlayer}
          secondPlayer={secondPlayer}
          move={move}
          setMove={setMove}
          setSceneryWinner={setSceneryWinner}
          sceneryWinner={sceneryWinner}
          isBot={isBot}
          gameStart={gameStart}
          firstPlayerPoints={firstPlayerPoints}
          secondPlayerPoints={secondPlayerPoints}
          setFirstPlayerPoints={setFirstPlayerPoints}
          setSecondPlayerPoints={setSecondPlayerPoints}
        />
        <RightPanel setScenery={setScenery} plays={plays} setPlays={setPlays} firstPlayer={firstPlayer} secondPlayer={secondPlayer} isBot={isBot} />
      </S.Container>
      <GlobalStyles />
    </>
  )
}

export default App
