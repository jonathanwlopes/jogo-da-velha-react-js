import { useGameContext } from "../../../context/GameContext"
import { usePlayer } from "../../../context/PlayerContext"
import { Input } from "../../shared/Input"
import { ToggleOption } from "../../shared/ToggleOption"
import * as S from "./style"

export const MatchPlayers = () => {
  const { isBot, setIsBot, gameStart } = useGameContext()
  const { firstPlayer, secondPlayer, setFirstPlayer, setSecondPlayer } = usePlayer()
  
  const handleToggleBot = () => {
    setIsBot(!isBot)
    !isBot && setSecondPlayer("Computador")
    isBot && setSecondPlayer("")
  }

  return (
    <S.Container>
      <Input disabled={gameStart} value={firstPlayer} onChange={(e) => setFirstPlayer(e.target.value)} mb="10" placeholder="Jogador 1" />
      <Input disabled={isBot || gameStart} value={secondPlayer} onChange={(e) => setSecondPlayer(e.target.value)} placeholder="Jogador 2">
        <ToggleOption disabled={gameStart} isActive={isBot} onClick={handleToggleBot} mr={"10"} />
      </Input>
    </S.Container>
  )
}
