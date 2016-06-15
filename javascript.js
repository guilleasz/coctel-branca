
$(".dropdown-toggle").hover(function(){
    $(".dropdown-toggle").css("color", "#e9daa3")
})
$(".navbar-toggle").hover(function(){
    $(".navbar-toggle").css("background-color", "transparent")
})
$(".grey-content").mouseover(function(){
    $(this).animate({
        opacity: 0
    }, 600, function(){})
})
$(".grey-content").mouseleave(function(){
    $(this).stop()
    $(this).animate({
        opacity: 0.6
    }, 600, function(){})
})

$("#play").click(function(){
    $(".video_portada").hide()
    $(".info").hide()
    $(".video").show()
})
