$(".menu").on("click", function() {
    $("nav").addClass("nav_active");
    $(".bg").addClass("bg_active");
});

$(".close_icon").on("click", function() {
    $("nav").removeClass("nav_active");
    $(".bg").removeClass("bg_active");
});

$(".favorite").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("favorite_active");
});

$(".choice_color span").on("click", function(){
    $(".choice_color span").removeClass("color_active");
    $(this).addClass("color_active");
});



$(document).ready(function() {
	$('.accordeon .acc-head').on('click', f_acc);
});
 
function f_acc(){
    $('.accordeon .acc-body').not($(this).next()).slideUp(200).parent().children(".acc-head").removeClass('active_acc');
    $(this).toggleClass("active_acc").next().slideToggle(200);
}