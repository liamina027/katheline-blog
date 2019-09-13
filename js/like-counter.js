$(".modal .heart-not").click(function(){
    $(".modal .heart-not").hide();
    $(".modal .heart-yes").fadeIn();
});
$(".modal .heart-yes").click(function(){
    $(".modal .heart-yes").hide();
    $(".modal .heart-not").fadeIn();
});

$(".grid-posts-item").click(function(){
    $(".modal").show();
});
$(".page-posts").click(function(){
    $(".modal").hide();
});