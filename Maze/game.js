import { draw as drawWall, wallPlacement as wall, endPoint, drawEndPoint} from './maze.js'
import {playerSpeed, draw as drawPlayer} from './player.js'
import {updatePlayer, playerBody, onPlayerBody, onEndPoint} from './player.js'
import {outsideGrid} from './maze.js'


let lastRenderTime = 0
let gameOver = false 
let winner = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
if (gameOver) {
    if (confirm('You lost. Press ok to restart')) {
        location.href = 'https://dmoore50.github.io/maze.io/'
    }
    return 
}
if (winner) {
    if (confirm('Damn, you did it.  Play again?')) {
        location.href = 'https://dmoore50.github.io/maze.io/'
    }
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
    checkWin()
    }


function draw() {
 gameBoard.innerHTML = ''
 drawPlayer(gameBoard)
 drawWall(gameBoard)
 drawEndPoint(gameBoard)
}

function checkDeath () {
    gameOver = outsideGrid(playerBody[0]) || onPlayerBody(playerBody[0])
}

function checkWin() {
    winner = onEndPoint(playerBody[0])
}
