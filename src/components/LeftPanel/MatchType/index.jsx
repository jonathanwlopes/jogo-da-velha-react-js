import { useGameContext } from "../../../context/GameContext"
import { Button } from "../../shared/Button"
import { ToggleOption } from "../../shared/ToggleOption"
import * as S from "./style"

export const MatchType = () => {
  const { firstPlayer, secondPlayer, bestOfFive, setBestOfFive, gameStart, setGameStart } = useGameContext()

  const handleStart = () => {
    if (!firstPlayer) return
    if (!secondPlayer) return

    setGameStart(!gameStart)
  }

  return (
    <S.Container>
      <span>Tipo de Partida</span>

      <S.BoxFlex>
        <span>Melhor de 3</span>
        <ToggleOption isActive={bestOfFive} onClick={() => setBestOfFive(!bestOfFive)} border={true} />
        <span>Melhor de 5</span>
      </S.BoxFlex>

      <Button isActive={gameStart} onClick={handleStart} disabled={gameStart} title="Jogar" />
    </S.Container>
  )
}
