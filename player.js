import { getInputDirection } from "./input.js"
import { wallPlacement as wall} from './maze.js'

export const playerSpeed = 10
export const playerBody = [{ x: 1, y: 30 }]


export function updatePlayer() {
 

  const inputDirection = getInputDirection()
  for (let i = playerBody.length; i >= 0; i--) {
    playerBody[i] = { ...playerBody[i] }
  }

  playerBody[0].y += inputDirection.y
  playerBody[0].x += inputDirection.x
}

export function draw(gameBoard) {
  playerBody.forEach(segment => {
    const playerElement = document.createElement('div')
    playerElement.style.gridRowStart = segment.y
    playerElement.style.gridColumnStart = segment.x
    playerElement.classList.add('player')
    gameBoard.appendChild(playerElement)
  })
}


export function onPlayerBody(position) {
    return wall.some((segment, index) => {
        return equalPositions(segment, position)
    })
}
    

export function getplayerHead() {
  return playerBody[0]
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}
