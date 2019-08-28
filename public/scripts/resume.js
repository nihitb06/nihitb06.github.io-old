const education = [
    {
        "name": "Bachelor's in Technology",
        "institute": "Guru Gobind Singh Indraprastha University",
        "timeline": "August, 2016 - Present",
        "content": "Aggregate GPA: 8.44",
        "subjects": ["Information Technology"]
    },
    {
        "name": "Class 12th",
        "institute": "Ryan International School",
        "timeline": "May, 2016",
        "content": "Percentage: 92.4%",
        "subjects": ["Mathematics", "Physics", "Chemistry", "English", "Physical Education"]
    },
    {
        "name": "Class 10th",
        "institute": "Ryan International School",
        "timeline": "May, 2014",
        "content": "GPA: 10.0",
        "subjects": ["Mathematics", "Science", "Hindi", "English", "Social Science", "Information Technology"]
    }
];
const work = [
    {
        "date": "JUNE, 2019 – JULY, 2019",
        "organisation": "Tata Power DDL",
        "position": "Business Analytics Intern",
        "text": "Worked as a Summer Intern in the Data Analytics wing of Tata Power DDL. " +
            "Built and deployed an application for implementing fuzzy searching of consumers on a database of over 2000 existing " +
            "records. Also completed a Natural Language Processing project on Social Media Data for the company.",
        "tech": ["HTML", "CSS", "Javascript", "Node JS", "Elasticsearch",
            "Python", "Support Vector Machines", "Natural Language Processing"]
    },
    {
        "date": "SEPTEMBER, 2018 – OCTOBER, 2018",
        "organisation": "InitQube",
        "position": "Android Developer",
        "text": "Completed a month-long internship for Jaipur based Startup InitQube as an android developer." +
            "Developed an Amortization Calculator android app" +
            "which also supported a server-side database for users and their previous data.",
        "tech": ["Kotlin", "Java", "XML", "Android SDK"]
    },
    {
        "date": "JUNE, 2018 – JULY, 2018",
        "organisation": "Defense Research and Development Organisation",
        "position": "Web Developer",
        "text": "Did a summer internship at DRDO, Civil Lines, New Delhi for SAG Department. Duties involved building a Web Server using " +
            "Asp.NET, C# and Elasticsearch DB as base. Also involved writing Python scripts for integrating with other parts of the existing" +
            " internal framework.",
        "tech": ["HTML", "CSS", "Javascript", "C#", "Asp.NET", "Elasticsearch", "Python"]
    }
];

$(document).ready(() => {
    /****************** Education Section *******************/
    education.forEach((education) => {
        let skillsId = education['name'] + "-content-skills";
        skillsId = skillsId.replace('\'', '');
        skillsId = skillsId.replace(/\s/g, '-');
        skillsId = skillsId.toLowerCase();

        $("#education-timeline").append(`
            <div class="timeline-block">
                <div class="timeline-circle"></div>
                
                <div class="timeline-content">
                    <h3>${education['name']}</h3>
                    <div class="timeline-content-info">
                        <span class="timeline-content-info-title">
                            <i class="fas fa-certificate" aria-hidden="true"></i>
                            ${education['institute']}
                        </span>
                        
                        <span class="timeline-content-info-date">
                            <i class="fas fa-calendar" aria-hidden="true"></i>
                            ${education['timeline']}
                        </span>
                    </div>
    
                    <p>${education['content']}</p>
                    
                    <ul class="content-skills" id="${skillsId}"></ul>
                </div>
            </div>
        `);

        education['subjects'].forEach((subject) => {
            $("#" + skillsId).append(`<li>${subject}</li>`);
        });
    });

    /****************** Work Section ********************/
    work.forEach((work) => {
        let skillsId = work['organisation'] + "-content-skills";
        skillsId = skillsId.replace('\'', '');
        skillsId = skillsId.replace(/\s/g, '-');
        skillsId = skillsId.toLowerCase();

        $("#work-timeline").append(`
            <div class="timeline-block">
                <div class="timeline-circle"></div>
                
                <div class="timeline-content">
                    <h3>${work['organisation']}</h3>
                    <div class="timeline-content-info">
                        <span class="timeline-content-info-title">
                            <i class="fas fa-certificate" aria-hidden="true"></i>
                            ${work['position']}
                        </span>
                        
                        <span class="timeline-content-info-date">
                            <i class="fas fa-calendar" aria-hidden="true"></i>
                            ${work['date']}
                        </span>
                    </div>
    
                    <p>${work['text']}</p>
                    
                    <ul class="content-skills" id="${skillsId}"></ul>
                </div>
            </div>
        `);

        work['tech'].forEach((tech) => {
            $("#" + skillsId).append(`<li>${tech}</li>`);
        });
    });
});