namespace magicPortals {

    let portalA: Sprite = null
    let portalB: Sprite = null

    /**
     * Create Portal A
     */
    //% block="create portal A at x %x y %y"
export function createPortalA(x: number, y: number) {
    portalA = sprites.create(img`
        . . 5 5 5 . .
        . 5 5 5 5 5 .
        5 5 1 1 1 5 5
        5 1 5 5 5 1 5
        5 1 5 5 5 1 5
        5 5 1 1 1 5 5
        . 5 5 5 5 5 .
        . . 5 5 5 . .
    `, SpriteKind.Food)

    portalA.left = x
    portalA.top = y
}

export function createPortalB(x: number, y: number) {
    portalB = sprites.create(img`
        . . 9 9 9 . .
        . 9 9 9 9 9 .
        9 9 1 1 1 9 9
        9 1 9 9 9 1 9
        9 1 9 9 9 1 9
        9 9 1 1 1 9 9
        . 9 9 9 9 9 .
        . . 9 9 9 . .
    `, SpriteKind.Food)

    portalB.left = x
    portalB.top = y
}

    /**
     * Enable teleporting
     */
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
