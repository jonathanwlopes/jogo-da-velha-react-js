import { useEffect, useState } from "react"
import { useGameContext } from "../../../context/GameContext"
import * as S from "./style"

export const Battlefield = () => {
  const [winner, setWinner] = useState("")
  const {
    secondPlayerPoints,
    setSecondPlayerPoints,
    firstPlayerPoints,
    setFirstPlayerPoints,
    sceneryWinner,
    setSceneryWinner,
    move,
    setMove,
    isBot,
    scenery,
    setScenery,
    gameStart,
    setPlays,
  } = useGameContext()

  useEffect(() => {
    winnerVerify()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scenery])

  const toggleMove = () => {
    if (move === "X") {
      setMove("O")
      return "O"
    } else {
      setMove("X")
      return "X"
    }
  }

  const resetBattlefield = () => {
    setScenery(["", "", "", "", "", "", "", "", ""])
    setWinner("")
    setMove("X")
    setPlays([])
  }

  const isFull = () => {
    const hasEmpty = scenery.some((field) => !field)

    if (hasEmpty) return false
    if (!hasEmpty) return true
  }

  const winnerVerify = () => {
    const listPositionWinner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]

    for (let i = 0; i < listPositionWinner.length; i++) {
      if (scenery[listPositionWinner[i][0]] === "X" && scenery[listPositionWinner[i][1]] === "X" && scenery[listPositionWinner[i][2]] === "X") {
        const userWinner = "X"
        setWinner(userWinner)
        setFirstPlayerPoints(firstPlayerPoints + 1)
        setSceneryWinner([...sceneryWinner, { winner: userWinner, scenery }])
        setTimeout(resetBattlefield, 1000)
      }

      if (scenery[listPositionWinner[i][0]] === "O" && scenery[listPositionWinner[i][1]] === "O" && scenery[listPositionWinner[i][2]] === "O") {
        const userWinner = "O"
        setWinner(userWinner)
        setSecondPlayerPoints(secondPlayerPoints + 1)
        setSceneryWinner([...sceneryWinner, { winner: userWinner, scenery }])
        setTimeout(resetBattlefield, 1000)
      }
    }

    if (!winner && isFull()) {
      setTimeout(resetBattlefield, 1000)
    }
  }

  const handlePlay = (scenery, position, move) => {
    const newScenery = [...scenery]

    newScenery[position] = move

    setScenery(newScenery)

    setPlays((plays) => [...plays, { move, position, scenery: newScenery }])

    if (!isBot) toggleMove()

    return newScenery
  }

  const getRandomField = (max) => {
    return Math.floor(Math.random() * max)
  }

  const botPlay = (newScenery) => {
    if (isFull()) return

    const emptyField = newScenery.map((empty, index) => (empty === "" ? index : undefined)).filter((empty) => empty !== undefined)

    const position = getRandomField(emptyField.length - 1)

    const botMove = emptyField[position]

    handlePlay(newScenery, botMove, move === "X" ? "O" : "X")
  }

  const handleFieldClick = (position) => {
    if (!gameStart) return
    if (winner) return
    if (scenery[position] !== "") return

    const newScenery = handlePlay(scenery, position, move)

    if (isBot) botPlay(newScenery)
  }

  return (
    <S.Container>
      {scenery.map((field, position) => (
        <S.Field key={`field-${position}`} onClick={() => handleFieldClick(position)}>
          {field}
        </S.Field>
      ))}
    </S.Container>
  )
}
