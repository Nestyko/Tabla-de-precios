
var precios = [700000, 500000, 1000000],
		quantity = $('.quantity'),
		sub_total = $('.sub-total'),
		checkboxes = $('input[type="checkbox"]'); //Añadimos los checkboxes tranquilamente

//Esta version es mas sencilla porque practicamente todo lo que hay que hacer es añadir un listener a cualquier input que este activo

quantity.on('input', function(){
	getSubtotal(this, $(this).data("index")); //aqui aprovechamos que HTML5 permite crear atributos personalizados para tomar el indice con JQUery y pasarlo a la funcion getSubtotal
});

function getSubtotal(element, output){
	//console.log('caller is: ' + element + 'index is:' + output); //test para debuggear
	sub_total[output].innerHTML = element.value * precios[output];
}

//Codigo de Nestor

//Bueno, tenemos que aclarar ciertas cosas:

//La palabra this no funciona en javascript como en otros lenguajes, ese suele ser el primer pelon que tiene la gente que viene de lenguajes con  orientacion a objetos clasica.

//this se refiere al objeto que lo este llamando en ese momento, no al entorno/objeto/funcion donde se definió el metodo que la utiliza.

checkboxes.change(function(){
	//console.log('this data index is ' + $(this).data('index')); // debug console log
	//quantity.eq($(this).data('index')).toggleClass('nigro');//class para testing
	var price_area = quantity.eq($(this).data('index'));
	if ($(this).is(':checked')) {
			//console.log('price area is checked');//debug test
			price_area.prop('disabled', true);
	}
	else {
			price_area.prop('disabled', false);
	}
	//Al resolver esto di con mil y un formas de lograr esta igualdad entre elementos
	//Me di cuenta que puedo reestructurar todo el codigo para que sea aun mas minimalista
	//pero bueno, eso sera ya para otro dia.
});
