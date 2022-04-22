$(function () {
    $('.carousel').carousel({
        interval: 2000
    })
    // 添加类
    // 在原先类的基础上增加一个类名，不影响之前的类名
    // $('p').click(function () {
    //     $(this).addClass('current');
    //     console.log('点击了p');
    // });
    // 删除类
    // $('p').mouseenter(function () {
    //     $(this).removeClass('current');
    // })
    // 切换类 toggleClass() 有就去除这个类 没有就加上这个类
    $("li img").on("mouseenter", function () {
        $(this).parents('li').css({ boxShadow: "10px 4px 5px #d4d4d4" }).stop().animate({ marginTop: "-10px" }, 200)
    }).on("mouseleave", function () {
        $(this).parents('li').css({ boxShadow: "none" }).stop().animate({ marginTop: "0px" }, 100)
    })

    $("img").addClass("lazy-load");
    console.log('ss');
})

