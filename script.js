jQuery(document).ready(function(){
    $(document).on('click', 'button.sign-in', function (){
        $('.login-page').toggleClass('active');
        $('.page-left-sec').toggleClass('active');
        $('.sign-in').toggleClass('active');

        $('.account-title').html('Sign in to Your Account');
        $('.sign-ing-title').html('Hello Friend!');
        $('.sign-in-para').html('Enter Your Personal Details And Start Your Journey With Us!');
        $('.password').hide();
        $('.email').append('<p class="forgot-pass">Forgot Password?</p>');

    });

    $(document).on('click', 'button.sign-in.active', function (){

        $('.account-title').html('Create Account');
        $('.sign-ing-title').html('Welcome Back!');
        $('.sign-in-para').html('To keep connected with us, please login with your personal info!');
        $('.password').show();
        $('.forgot-pass').hide();

    });

});