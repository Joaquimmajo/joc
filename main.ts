input.onButtonPressed(Button.A, function () {
    if (spirite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    }
})
input.onButtonPressed(Button.B, function () {
    game.pause()
    basic.showNumber(game.score())
    basic.pause(1000)
    game.resume()
})
let spirite: game.LedSprite = null
spirite = game.createSprite(2, 2)
basic.forever(function () {
    spirite.move(1)
    basic.pause(100)
    if (spirite.isTouchingEdge()) {
        spirite.ifOnEdgeBounce()
    }
})
