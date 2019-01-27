const projects = [
    {
        "name": "USICT Toolbox",
        "icon": "https://lh3.googleusercontent.com/bSTdSZqm5oDL7_jWhKpb2jupnUMhI5GUkxUVfvrl9MV4VH_xQpBBCkcfZwUEQmYYJl8=h80",
        "cover": "https://lh3.googleusercontent.com/7wM4SSt_lxZY7FxUyGxMjnug0yyVKk9x51m1aP3RUXir0q7R78LGJvykbLdtJboCalRa=h150",
        "type": "Android App",
        "byline": "Turn your exams into a breeze with the help of our app's reference materials.",
        "description": "Presenting USICTToolbox, a one stop shop for all your college problems. Whatever your requirements, be it books, notes or previous year papers to practice we have what you need to ace those bad boys the university throws at you. The user friendly interface ensures you find what you're looking for with a single tap.",
        "rating": "4.74★",
        "githubLink": "",
        "playLink": "https://play.google.com/store/apps/details?id=com.dev.nihitb06.usicttools"
    },
    {
        "name": "Lightning Note",
        "icon": "https://raw.githubusercontent.com/nihitb06/LightningNote/master/app/src/main/ic_launcher_round-web.png",
        "cover": "https://lh3.googleusercontent.com/n8NSRh2KkG0aDLAWJFx_zUZpNnu8uWy7Lt9yPu5OVpG182oRW9XEwH7GXpcnOjEQXW8=h150",
        "type": "Android App",
        "byline": "Make and Share Lightning Fast Notes with our App. Just shake twice to add a note",
        "description": "Gone are the days when you'd look for the app inside your drawer or scroll multiple screens only to find you missed the app. Just Shake the phone twice and <i>Presto!!</i> the App comes to you. If shaking is not your style, then you may choose to have our floating window helper let you note anywhere you want with ease and convenience.",
        "rating": "",
        "githubLink": "https://github.com/nihitb06/LightningNote",
        "playLink": "https://play.google.com/store/apps/details?id=com.dev.nihitb06.newlightningnote"
    },
    {
        "name": "The Update",
        "icon": "https://lh3.googleusercontent.com/78Ur4AO_CPxpNqgeWIY_1M35a__MiBIVR0e_r4Wg3QVxDivSqUaMjFj7MWt0_uhjUi8=h80",
        "cover": "https://lh3.googleusercontent.com/XTtaaumaIsDcGRd_kejQO3rTuNxApSNQds3uTHpBzVwRlUgv59MYJWxQVjiwqiAne3w=h150",
        "type": "Android App",
        "byline": "Read and share News articles from over 30,000 sources.",
        "description": "A new minimalist Android Application for consuming news on all your favourite topics. It curates articles from over 30,000 news sources and shows you the top headlines in each of its six categories",
        "rating": "",
        "githubLink": "https://github.com/nihitb06/TheUpdate",
        "playLink": "https://play.google.com/store/apps/details?id=com.dev.nihitb06.theupdate"
    },
    {
        "name": "Moto Shake Actions",
        "icon": "public/assets/android.png",
        "cover": "public/assets/android_background.jpg",
        "type": "Android App",
        "byline": "Android app to emulate MotoActions for Android",
        "description": "Moto Shake Actions was inspired by the MotoActions app by Motorola for Moto Phones. It uses an accessibility service and emulates the Shake for Camera and Chop for Flashlight Actions of the MotoActions App.",
        "rating": "",
        "githubLink": "https://github.com/nihitb06/MotoShakeActions",
        "playLink": ""
    }
];
const work = [
    {
        "date": "JUNE, 2018 – JULY, 2018",
        "organisation": "Defense Research and Development Organisation",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/DRDO-logo.png/220px-DRDO-logo.png",
        "text": "Did a summer internship at DRDO, Civil Lines, New Delhi for SAG Department. Duties involved building a Web Server using " +
            "Asp.NET, C# and Elasticsearch DB as base. Also involved writing Python scripts for integrating with other parts of the existing" +
            " internal framework.",
        "link": "https://www.drdo.gov.in/drdo/labs1/SAG/English/indexnew.jsp?pg=homepage.jsp"
    },
    {
        "date": "SEPTEMBER, 2018 – OCTOBER, 2018",
        "organisation": "InitQube",
        "image": "data:image/png;base64,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",
        "text": "Completed a month-long internship for Jaipur based Startup InitQube as an android developer." +
            "Developed an Amortization Calculator android app" +
            "which also supported a server-side database for users and their previous data.",
        "link": "https://in.linkedin.com/company/initqube"
    }
];


$(document).ready(() => {
    let projectHolder = $('#projects-holder');

    projects.forEach((project) => {
        projectHolder.append(`
            <div class="col-md-4 col-sm-6 mx-auto">
                <div class="card-container">
                    <div class="card">
                        <div class="front">
                            <div class="cover" style="background-image: url(${project['cover']});">
                            </div>
                            
                            <div class="icon">
                                <img class="img-circle" src="${project['icon']}" alt="Project Icon Image" />    
                            </div>
                            
                            <div class="card-content">
                                <div class="card-main">
                                    <h3 class="name">${project['name']}</h3>
                                    <p class="type">${project['type']}</p>
                                    <p class="text-center">${project['byline']}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="back">
                            <div class="card-content">
                                <div class="card-main col-12">
                                    <h4 class="text-center">Description</h4>
                                    <p class="text-center">${project['description']}</p>
                                    
                                    <div class="rating-container">
                                        <div class="rating">
                                            <h4>${project['rating']}</h4>
                                        </div>
                                    </div>
                                    
                                    <div class="row links text-center">
                                        <a class="btn btn-dark mx-auto" target="_blank" href="${project['githubLink']}" 
                                            style="display: ${project['githubLink'] === '' ? 'none' : 'block'};">
                                            Github <i class="fab fa-github"></i>    
                                        </a>
                                        <a class="mx-auto" target="_blank" href='${project['playLink']}' 
                                            style="display: ${project['playLink'] === '' ? 'none' : 'block'};">
                                            <img 
                                                alt='Get it on Google Play' 
                                                src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'
                                                style="height: 52px;" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });

    work.forEach((work) => {
        $('.blog-slider__wrp').append(`
            <div class="blog-slider__item swiper-slide">
                <div class="blog-slider__img">
                    <img src="${work['image']}" alt="Organisation Logo" />
                </div>
                
                <div class="blog-slider__content">
                    <span class="blog-slider__code">${work['date']}</span>
                    <div class="blog-slider__title">${work['organisation']}</div>
                    <div class="blog-slider__text">${work['text']}</div>
                    <a class="blog-slider__button" target="_blank" href="${work['link']}">View Organisation</a>
                </div>
            </div>
        `);
    });

    new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
            invert: false,
        },
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        }
    });
});