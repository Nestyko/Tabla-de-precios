function main(){

    $("#tabla-factura").hide();

    $(".checkbox :input").on("change",function (eventObject){
        var checkbox = $(this);
        var id = checkbox.prop("id");
        id = id.substring(id.length-1,id.length);
        var subtotal = $("#subtotal-item-" + id);
        if(checkbox.is(":checked")){
            var cantidad_id = "#cantidad-item-" + id;

            $(cantidad_id).attr("disabled", false);
            if($(cantidad_id).val() < 1){
                $(cantidad_id).val(1);
            }
            subtotal.removeClass("tachado");
        }else{
            subtotal.addClass("tachado");
        }
    });

}


$(document).ready(main());
