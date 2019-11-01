$(document).on('click','.navShop',function() {
    $('navShop').removeClass('navShopSubINActive '),
    $('navShop').addClass('navShopSubActive ')
    console.log('asdf')
}
);


$( 'navShopSubINActive').mouseenter(function() {
    $('navShopSubINActive').css("display", "flex"),
    console.log('butt');
    
});

