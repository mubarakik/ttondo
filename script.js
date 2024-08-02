$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $(".nav-links").toggleClass("active");
    $(".nav-links").fadeIn();

});