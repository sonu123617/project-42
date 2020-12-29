class umbrella{
    constructor(){
        var umbrellaVertices = [
            {x : 209 , y : 652},
            {x : 219 , y : 612},
            {x : 243 , y : 571},
            {x : 305 , y : 517},
            {x : 336 , y : 501},
            {x : 346, y : 498},
            {x : 383, y : 489},
            {x : 435, y : 486},
            {x : 453, y : 488},
            {x : 477, y : 495},
            {x : 494, y : 501},
            {x : 505, y : 497},
            {x : 554, y : 557}
        ];
        this.body = Bodies.fromVertices(375,565, umbrellaVertices , {isStatic : true} );
        World.add(world, this.body);
    }
}