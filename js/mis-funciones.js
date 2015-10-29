
var precios = [700000, 500000, 1000000],
		button_one = $("[name = 'btn-one']"),
		button_two = $("[name = 'btn-two']"),
		quantity = $('.quantity'),
		sub_total = $('.sub-total');

//Esta version es mas sencilla porque practicamente todo lo que hay que hacer es añadir un listener a cualquier input que este activo

quantity.on('input', function(){
	console.log(this);
	getSubtotal(this, $(this).data("index")); //aqui aprovechamos que HTML5 permite crear atributos personalizados para tomar el indice con JQUery y pasarlo a la funcion getSubtotal
});

function getSubtotal(element, output){
	//console.log('caller is: ' + element + 'index is:' + output); //test para debuggear
	sub_total[output].innerHTML = element.value * precios[output];
}


function activateCheck(elem){

}
