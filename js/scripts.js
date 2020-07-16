$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $("#mycarousel").carousel({
        interval: 2000,
        pause: false 
    });            
    /*$("#carousel_pause").click(function(){
        $("#mycarousel").carousel('pause');
        //alert("funciona evento click pause");
    });
    $("#carousel_play").click(function(){
        $("#mycarousel").carousel('cycle');
        //alert("funciona evento click start");
    });*/
    $("#carouselButton").click(function(){  
        //alert("funciona evento click entro");              
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
            //alert("funciona evento click pause");
        } 
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
            //alert("funciona evento click start");                    
        }
    });             
});