$(function(){

    let showPopup = function(){
        $('.popup-container').css('display', 'flex');
    };

    let closePopup = function(){
        $('.popup-container').css('display', 'none');
    };

    $('.order-call').on('click', function(){
        showPopup();
    });

    $('.close').on('click', function(){
        closePopup();
    });
});