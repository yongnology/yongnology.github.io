$(function() {
    let num = 0;

    $('.short_p').click(function() {
        num++;
        if(num < 5) {
            $(this).animate({
                left:-(num*600)
            },500)
        } else {
            $(this).animate({
                left:0
            },200);
            num = 0;
        }
    })
});
function popupOpen() {
    $('.popup_readying').show();
}

function popupClose() {
    $('.popup_readying').hide(500, 'linear');
}

function poplogOpen() {
    $('.popup_login').show();
}

function poplogClose() {
    $('.popup_login').hide(500, 'linear');
}