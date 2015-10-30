
var precios = [700000, 500000, 1000000],
		quantity = $('.quantity'),
		sub_total = $('.sub-total'),
        //====================================================
        checkboxes = $('input[type="checkbox"]');//Me supongo que esto me debe generar un arreglo como los de arriba
        //====================================================

//Esta version es mas sencilla porque practicamente todo lo que hay que hacer es añadir un listener a cualquier input que este activo

quantity.on('input', function(){
	//console.log(this);
	getSubtotal(this, $(this).data("index")); //aqui aprovechamos que HTML5 permite crear atributos personalizados para tomar el indice con JQUery y pasarlo a la funcion getSubtotal
});

checkboxes.change(function(){
    var checkb = $(this);
    //================================================================================
    var index = $(this).data("index"); //Aqui es donde necesito ayuda
    //================================================================================
    index = 1;
    console.log(this);
    console.log("index: " + index);
    if(checkb.is(":checked")){
       if(quantity.eq(index).val() < 1){
            quantity.eq(index).val(1);
            getSubtotal(quantity.get(index),index);
        }
        sub_total.eq(index).removeClass("tachado");
        quantity.eq(index).prop("disabled", false);
    }else{
        sub_total.eq(index).addClass("tachado");
        quantity.eq(index).prop("disabled", true);
    }

});

function getSubtotal(element, output){
	//console.log('caller is: ' + element + 'index is:' + output); //test para debuggear
	sub_total[output].innerHTML = element.value * precios[output];
}


function activateCheck(elem){

}
