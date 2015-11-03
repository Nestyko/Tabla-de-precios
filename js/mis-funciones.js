
var totales = document.getElementsByClassName("sub-total");
var checkboxes = document.getElementsByClassName("check-item");

function actualizar_factura(){
    var subtotal = 0;
    for(var i = 0; i < totales.length;i++){
        if(checkboxes[i].checked){
            subtotal += parseInt(totales[i].innerHTML);
        }
    }
    console.log(subtotal);
    document.getElementById("sub-total-factura").innerHTML = subtotal;
}

function main(){

    //Funcion para cuando cambie cualquier fila
    $("tr").change(function (event){
        var row = $(this);
        var checkbox = row.find("input:checkbox");
        var quant = row.find(".quantity");
        var sub_tot = row.find(".sub-total");
        var price = (row.find(".price").html());
        if(checkbox.is(":checked")){
            quant.prop("disabled", false);
            if(quant.val() < 1){
                quant.val(1);
            }
            sub_tot.removeClass("tachado");
        }else{
            quant.prop("disabled", true);
            sub_tot.addClass("tachado");
        }
        sub_tot.html(quant.val()*price);
        actualizar_factura();
    });

    //Forzar a llamar la funcion de cambio de filas, para inicializar
    $("tr").trigger("change");




}

$(document).ready(main());
