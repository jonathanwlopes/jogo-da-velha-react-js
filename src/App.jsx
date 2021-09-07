import { LeftPanel } from "./components/LeftPanel"
import { CenterPanel } from "./components/CenterPanel"

import * as S from "./style"
import { GlobalStyles } from "./styles/global"
import { RightPanel } from "./components/RightPanel"
import { GameProvider } from "./context/GameContext"
import { PlayerProvider } from "./context/PlayerContext"

function App() {
  return (
    <GameProvider>
      <PlayerProvider>
        <S.Container>
          <LeftPanel />
          <CenterPanel />
          <RightPanel />
        </S.Container>
        <GlobalStyles />
      </PlayerProvider>
    </GameProvider>
  )
}

export default App
