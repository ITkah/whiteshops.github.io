$(".menu").on("click", function() {
    $("nav").addClass("nav_active");
    $(".bg").addClass("bg_active");
});

$(".like_wrpa a").on("click", function(e){
    e.preventDefault();
    $(".like_wrpa a").removeClass("active");
    $(this).toggleClass("active");
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$(".add_other_wrap a").on("click", function(e){
    e.preventDefault();
    $(this).addClass("hide");
    $(".progress").show();
});

$(".close_icon").on("click", function() {
    $("nav").removeClass("nav_active");
    $(".bg").removeClass("bg_active");
});

$(".bg").on("click", function() {
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

$(".choice_color_2 span").on("click", function(){
    $(this).toggleClass("color_active");
});

$(".catalog_metka a").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("active_metka");
});

$(".catalog_btn_wrap a").on("click", function(e){
    e.preventDefault();
    $(".filter").addClass("filter_active");
});

$(".filter_close").on("click", function(e){
    e.preventDefault();
    $(".filter").removeClass("filter_active");
});

$(".area_item").on("click", function(){
    $(this).toggleClass("area_item_active");
});

$(document).ready(function() {
	$('.accordeon .acc-head').on('click', f_acc);
});
 
function f_acc(){
    $('.accordeon .acc-body').not($(this).next()).slideUp(200).parent().children(".acc-head").removeClass('active_acc');
    $(this).toggleClass("active_acc").next().slideToggle(200);
}

var swiper = new Swiper(".clint_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
});

$(".newsletter_form").submit(function(e) {
    e.preventDefault();
    let form_data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: "../../mail-2.php",
        data: form_data,
        success: function(response) {
            console.log(response);
            $(".thank_click").click();
        },
        error: function(error) {
            $(".thank_click").click();
        }
    });
    return false;
});

$(".size_item").on("click", function(){
    $(".size_item").removeClass("active");
    $(this).addClass("active");
});

$(".size_item_2").on("click", function(){
    $(this).toggleClass("active");
});

$(".item_btn .popup-with-zoom-anim").on("click", function(){
    const swiper2 = new Swiper('.item_slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        },
    });
});



