//Toma en cuenta una caracteristica de javascript que se llama HOISTING
//esto significa que las declaraciones de variables toman precedencia por encima de las asignaciones a las variables y las funciones

//por ende todas tus variables deberian ser declaradas antes de cualquier accion dentro del scope en el que trabajes.


//Es buena costumbre mantener el global namespace limpio, este es, el espacio que esta fuera de una funcion en el caso de javascript, pero como aqui no tienes colision entre nombres de variable, deberias entonces limitar tus funciones solamente a las acciones que describen

//Acostumbrate a hacer caching de los elementos que vayas a utilizar, no quieres crear un elemento ni poner a tu javascript a buscar en el html al elemento que necesitas cada vez que hagas click en algo.

//Nota: puedes declarar variables en multiples lineas usando una trailing comma
//esto ocurre porque javascript no le para bolas al fin de una linea hasta que encuentra un ; una asignacion (=) o una declaracion de funcion.

var precios = [700000, 500000, 1000000],
		button_one = $("[name = 'btn-one']"),
		button_two = $("[name = 'btn-two']"),
		quantity = $('.quantity'),
		sub_total = $('.sub-total');


button_one.click(function(){
	console.log('clicked 1'); //funcion para checkear que button_one funciona
	//console.log('valor del elemento seleccionado ' + quantity_amount[0].value);
	getSubtotal(quantity[0], 0);
	//Aqui referenciamos el precio del item que queremos calcular como un arreglo porque el selector $() de jquery retorna es un arreglo de los elementos que encontro

	//El segundo argumento de la funcion es para identificar donde va a mostrar el precio calculado, en este caso el primer elemento del arreglo sub_total
});

//Todo lo que dije para button_one aplica aqui, seria ideal que abstrayeras la necesidad de utilizar varios botones mediante classes y otras vainas, pero para efectos del caso esto funciona bien
button_two.click(function(){
	console.log('clicked two');//ditto para button_two
	getSubtotal(quantity[1], 1);
});


function getSubtotal(element, output){

	sub_total[output].innerHTML = element.value * precios[output];

}


function activateCheck(elem){

}
