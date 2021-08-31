$(".menu").on("click", function() {
    $("nav").addClass("nav_active");
    $(".bg").addClass("bg_active");
});

$(".bug_call").on("click", function(e){
    e.preventDefault();
    $(".bug_header").slideToggle(200);
});

$(".close_bug").on("click", function(e){
    e.preventDefault();
    $(".bug_header").slideUp(200);
});

$('.file').change(function() {
    $file = $(this).val();
    $file = $file.replace(/.*[\/\\]/, '');
    if ($file == "") {
        $(".file_label").text("Прикрепить файл").removeClass("black");
    } else {
        $('.file_label').addClass("black").html("<p>" + $file + "<span></span></p>");
    }
    $(".file_label span").on("click", function(){
        $(this).parent().remove();
        $(".file_label").text("Прикрепить файл").removeClass("black");
    });
});

$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});


$(".show_mes").on("click", function(e){
    e.preventDefault();
    $(this).toggleText("Читать далее", "Скрыть отзыв").siblings("p").toggleClass("messages_item_active");
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

$(".call_adress_1").on("click", function(e){
    $(".address_show").attr("href", "#adress_1")
});

$(".call_adress_2").on("click", function(e){
    $(".address_show").attr("href", "#adress_2")
});

$(".call_adress_3").on("click", function(e){
    $(".address_show").attr("href", "#adress_3")
});




$(".promo_call").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("active_li");
    $(".promo_form").slideToggle(200);
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
          nextEl: '.item_slider .swiper-button-next',
          prevEl: '.item_slider .swiper-button-prev',
          clickable: true,
        },
    });
});





$(".reviews_img_wrap a").on("click", function(){
    const swiper4 = new Swiper('.item_slider_3', {
        loop: true,
        slidesPerView: 1,
        grabCursor: true,
        pagination: {
          el: '.item_slider_3 .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.item_slider_3 .swiper-button-next',
          prevEl: '.item_slider_3 .swiper-button-prev',
          clickable: true,
        },
    }); 
});

const swiper3 = new Swiper('.item_slider_2', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    pagination: {
      el: '.item_slider_2 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.item_slider_2 .swiper-button-next',
      prevEl: '.item_slider_2 .swiper-button-prev',
      clickable: true,
    },
});

$(".size_big").on("click", function(){
    const swiper3 = new Swiper('.item_slider_2', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        pagination: {
          el: '.item_slider_2 .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.item_slider_2 .swiper-button-next',
          prevEl: '.item_slider_2 .swiper-button-prev',
          clickable: true,
        },
    });
});


const swiper_bug = new Swiper('.swiper_bug', {
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: '.swiper_bug .swiper-pagination',
      clickable: true,
    },
});