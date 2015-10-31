

function init(){
    var rows = $("tr").find(".quantity");
    rows.prop("disabled", true);
}

function main(){
    init();
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
    });


}

$(document).ready(main());
