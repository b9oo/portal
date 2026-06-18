namespace magicPortals {

    let portalA: Sprite = null
    let portalB: Sprite = null

    //% block="create portal A at x %x y %y"
    export function createPortalA(x: number, y: number) {
        portalA = sprites.create(img`
            . . 5 5 5 . . .
            . 5 5 5 5 5 . .
            5 5 1 1 1 5 5 .
            5 1 5 5 5 1 5 .
            5 1 5 5 5 1 5 .
            5 5 1 1 1 5 5 .
            . 5 5 5 5 5 . .
            . . 5 5 5 . . .
        `, SpriteKind.Food)

        portalA.x = x
        portalA.y = y
    }

    //% block="create portal B at x %x y %y"
    export function createPortalB(x: number, y: number) {
        portalB = sprites.create(img`
            . . 9 9 9 . . .
            . 9 9 9 9 9 . .
            9 9 1 1 1 9 9 .
            9 1 9 9 9 1 9 .
            9 1 9 9 9 1 9 .
            9 9 1 1 1 9 9 .
            . 9 9 9 9 9 . .
            . . 9 9 9 . . .
        `, SpriteKind.Food)

        portalB.x = x
        portalB.y = y
    }

    //% block="enable portal teleporting for %player"
    export function enableTeleporting(player: Sprite) {
        game.onUpdate(function () {
            if (portalA && portalB) {
                if (player.overlapsWith(portalA)) {
                    player.setPosition(portalB.x, portalB.y)
                } else if (player.overlapsWith(portalB)) {
                    player.setPosition(portalA.x, portalA.y)
                }
            }
        })
    }
}
