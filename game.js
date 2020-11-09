import { draw as drawWall, wallPlacement as wall } from './maze.js'
import {playerSpeed, draw as drawPlayer} from './player.js'
import {updatePlayer, playerBody, onPlayerBody} from './player.js'
import {outsideGrid} from './maze.js'


let lastRenderTime = 0
let gameOver = false 
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
if (gameOver) {
    if (confirm('You lost. Press ok to restart')) {
       
    }
    return 
}
window.requestAnimationFrame(main)
const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
if (secondsSinceLastRender < 1 / playerSpeed) return

lastRenderTime=currentTime

console.log(secondsSinceLastRender)


update()
draw()
}

window.requestAnimationFrame(main)

function update() {
    updatePlayer()
    checkDeath()
}


function draw() {
 gameBoard.innerHTML = ''
 drawPlayer(gameBoard)
 drawWall(gameBoard)
}

function checkDeath () {
    gameOver = outsideGrid(playerBody[0]) || onPlayerBody(playerBody[0])
}
