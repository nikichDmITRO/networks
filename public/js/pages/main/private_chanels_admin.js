$(function() {
    $.ajax({
        type: "GET",
        url: "chanels/getPrivateChanelsRequests"

    })
        .done(function( data ) {
            $("#private_chanels_admin").html(data);
            $("#accordion_admin").accordion();
        });

});