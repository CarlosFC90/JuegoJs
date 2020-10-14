const HEIGHT = 400;
const WIDTH = 400;

let target = {
    x: getRamdomNumber(WIDTH),
    y: getRamdomNumber(HEIGHT)
}

//El $ es para saber que se hace referencia a un elemento HTML
let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function(e) {
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`; 
    
    if (distance < 20) {
        alert('GANASTEEEE!! Encontraste el tesoro luego de ' + clicks + ' clickeos!! ');
        //Para recargar la pagina
        location.reload();
    }
});