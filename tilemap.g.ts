// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000303020102020202020301030202020202020202020204040402020102020102040404020202020202020404040201020202030303020202020201020303030202010202020203030302020202020202`, img`
. . . 2 . . . . . . 
2 . . . . . . . . . 
. . . . . . . 2 . . 
2 . . . . . . . . . 
. . . . . . 2 . . . 
. . . . . . . . 2 . 
. . . . . 2 . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
