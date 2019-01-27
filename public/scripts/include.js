$(document).ready(() => {
    $('.include-header').append(`
        <div class="container-fluid">
            <!------------------------- Navigation ---------------------------->
            <div class="navigation-overlay">
                <nav role="navigation">
                    <ul>
                        <li><a href="index.html" data-content="The Beginning">Home</a></li>
                        <li><a href="about.html" data-content="Curious much?">About</a></li>
                        <li><a href="resume.html" data-content="Professionalism Galore">Resume</a></li>
                        <li><a href="contact.html" data-content="Say Hi">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        
            <div class="row align-items-center py-3 mx-4">
                <!------------------------- Nav Button ---------------------------->
                <div class="col-2" id="nav-button">
                    <span class="bar-top"></span>
                    <span class="bar-middle"></span>
                    <span class="bar-bottom"></span>
                </div>
        
                <!------------------------- NavBar Brand ---------------------------->
                <div class="col">
                    <div class="mx-auto" id="brand">NB</div>
                </div>
            </div>
        </div>
        
        <script rel="script" type="text/javascript">
            $('#nav-button').click(() => {
                let navButton = $('#nav-button'),
                    overlay = $('.navigation-overlay'),
                    nav_item_1 = $('nav li:nth-of-type(1)'),
                    nav_item_2 = $('nav li:nth-of-type(2)'),
                    nav_item_3 = $('nav li:nth-of-type(3)'),
                    nav_item_4 = $('nav li:nth-of-type(4)');
        
                navButton.toggleClass('nav-active');
                if (navButton.hasClass('nav-active')) {
                    overlay.removeClass('overlay-slide-in').addClass('overlay-slide-out');
        
                    nav_item_1.removeClass('slide-nav-item-in').addClass('slide-nav-item-out');
                    nav_item_2.removeClass('slide-nav-item-in-delay-1').addClass('slide-nav-item-out-delay-1');
                    nav_item_3.removeClass('slide-nav-item-in-delay-2').addClass('slide-nav-item-out-delay-2');
                    nav_item_4.removeClass('slide-nav-item-in-delay-3').addClass('slide-nav-item-out-delay-3');
                } else {
                    overlay.removeClass('overlay-slide-out').addClass('overlay-slide-in');
        
                    nav_item_1.removeClass('slide-nav-item-out').addClass('slide-nav-item-in');
                    nav_item_2.removeClass('slide-nav-item-out-delay-1').addClass('slide-nav-item-in-delay-1');
                    nav_item_3.removeClass('slide-nav-item-out-delay-2').addClass('slide-nav-item-in-delay-2');
                    nav_item_4.removeClass('slide-nav-item-out-delay-3').addClass('slide-nav-item-in-delay-3');
                }
            });
        </script>
    `);

        $('.include-footer').append(`
        <div class="footer">
            <div class="container py-3">
                <div class="row my-3">
                    <div class="footer-main mx-auto">
                        <span>How can I help ?</span>
        
                        <a href="contact.html">
                            <span class="text">Contact me</span>
                            <span class="line -right"></span>
                            <span class="line -top"></span>
                            <span class="line -left"></span>
                            <span class="line -bottom"></span>
                        </a>
                    </div>
                </div>
        
                <div class="row">
                    <div class="mx-auto">
                        <h5>Find me on</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="mx-auto">
                        <a class="social-btn facebook mx-3" target="_blank" href="https://facebook.com/nihit.bansal">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="social-btn github mx-3" target="_blank" href="https://github.com/nihitb06">
                            <i class="fab fa-github"></i>
                        </a>
                        <a class="social-btn linkedin mx-3" target="_blank" href="https://www.linkedin.com/in/nihitb06">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `);
});