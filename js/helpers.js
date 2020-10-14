//Esta funcion lo que hace es multiplicar el size por un numero ramdom del 0 al 1 y luego
//lo redondea hacia abajo con la funcion floor.  
let getRamdomNumber = size => {
    return Math.floor( Math.random() * size );
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;

    return Math.sqrt( (diffX * diffX) + (diffY * diffY) );
}

let getDistanceHint = distance => {
    if( distance < 30 ) {
        return 'HIRVIENDO!!';
    } else if ( distance < 40 ) {
        return 'Muy caliente!! ';
    } else if ( distance < 60 ) {
        return 'Calientee!! '
    } else if ( distance < 100) {
        return 'Ni caliente ni frio :/ ';
    } else if ( distance < 180 ) {
        return 'Friooo!! ';
    } else if ( distance < 360 ) {
        return 'Muy frioo!! ';
    } else {
        return 'HELADOOO!! :( ';
    }
}