$(document).ready(function() {
    $('#showRegister').click(function(){
        $('.login').removeClass("active").addClass("disabled");
        $('.register').addClass("active").removeClass("disabled");
    });

    $('#showLogin').click(function(){
        $('.register').removeClass("active").addClass("disabled");
        $('.login').addClass("active").removeClass("disabled");
        $('.password').addClass("disabled").removeClass("active");
    });

    $('#showpassword').click(function(){
        $('.login').addClass("disabled").removeClass("active");
        $('.password').addClass("active").removeClass("disabled");
    });

    $('#showLoginpassword').click(function(){
        $('.login').addClass("active").removeClass("disabled");
        $('.password').addClass("disabled").removeClass("active");
    });
    

});