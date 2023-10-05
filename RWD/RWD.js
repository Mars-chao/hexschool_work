$(document).ready(function(){
    $('.icon i').click(function(e){
        e.preventDefault();
        $('.menu').toggleClass('toggle');
    });
});