$(document).ready(function () {
    $('section.openMenu>i').on("click",function () {
        $('section.menu>nav').slideToggle(700).css({
            "display":"flex",
            "flexFlow":"column nowrap",
        })
    })
})