

$(document).ready(function () {

    $( "#a_btn" ).button();
    $("#gag_Div").draggable();

    $("#gop_div").droppable();
    
    $("#gop_div").on("drop",function (event,ui) {
        $(this).text("drop");

        $("#size_div").resizable();

    });

    $("#ac").accordion();

    var auto=["abc","dce","java","javascript"];
    $("#tags").autocomplete({
        source:auto
    });

    $("#The_date").datepicker();

    $("#btn_2").button().on("click",function () {
        $("#da").dialog();
    })

});