$(document).ready(function () {

    $("#send").on("click", function () {
        var result;

        let jsonL_Value = $("#jsonL").val();

        try {
            result = JSON.parse(jsonL_Value);
        }
        catch (err) {
            $("#jsonR").val(err);
        }

       
        if (result != undefined) {
            $("#jsonR").val(JSON.stringify(result, null, "\t"));  
        }
         

    });
});