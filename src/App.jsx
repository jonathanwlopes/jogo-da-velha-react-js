import { LeftPanel } from "./components/LeftPanel"
import { CenterPanel } from "./components/CenterPanel"

import * as S from "./style"
import { GlobalStyles } from "./styles/global"
import { RightPanel } from "./components/RightPanel"
import { GameProvider } from "./context/GameContext"

function App() {
  return (
    <GameProvider>
      <S.Container>
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </S.Container>
      <GlobalStyles />
    </GameProvider>
  )
}

export default App
