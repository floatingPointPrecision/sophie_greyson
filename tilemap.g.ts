// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`10001000010c0601010101010101010106010106010c0101010601010101010101010101010c0101010101010601010101010101010c0202020202020202020202020101010c0209090909070b0b0b0b0b080106010c0209090909070b0b0b0b0b020101060c0209090909070b0b0b0b0b020101010c0209090909070b0b0b0b0b020601010c0205050505050507070707020101060c020304030403050a0a0a0a020101010c020403040304050a0a0a0a020106010c020304030403050a0a0a0a020101010c020403040304050a0a0a0a020101010c0202020202020202020202020601060c0d0d0d0d0d0d0d0d0d0d0d0d0d0d010c0106010101010106010101010106`, img`
. . 2 . . . . . . . . . 2 . . 2 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 . . . . 2 . 2 2 2 . . . 2 
. . 2 . . . . . . 2 2 2 . 2 . . 
2 . 2 . . . . 2 . 2 2 2 . 2 . . 
. . 2 . . . . 2 . . . . . 2 2 . 
. . 2 2 2 2 2 . . 2 2 . 2 2 . . 
2 . 2 . . . . . 2 . . . . 2 . . 
. . 2 . . . . . 2 . . . . 2 . 2 
. . 2 . . . . . 2 . . . . 2 . . 
. . 2 . . . . . 2 . . . . 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 . . . . . . . . . . . . . . . 
. . 2 2 . . . . . 2 . . . . . 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.swamp.swampTile1,sprites.castle.rock1,sprites.castle.saplingPine,sprites.castle.rock2,sprites.dungeon.hazardLava1,sprites.dungeon.hazardWater,sprites.skillmap.islandTile4,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
