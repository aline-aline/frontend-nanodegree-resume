var DATA = '%data%';

var bio = {
    "name": "Aline Cristina do Carmo",
    "role": "Web Developer",
    "contacts": {
        "mobile": "11-99010-8893",
        "email": "alinecris@gmail.com",
        "github": "aline-aline",
        "twitter": "@aline-pixel",
        "location": "São Paulo, Brazil"
    },
    "skills": [
        "Javascript", "AngularJS", "jQuery", "Responsive Web Design"
    ],
    "picture": "images/aline.jpg"
}

var education = {
    "schools": [{
            "name": "ESAB",
            "location": "Vila Velha, ES",
            "degree": "B.Sc. Information System",
            "major": "Computer Science",
            "datesAttended": "2015 - 2018",
            "url": "http://www.esab.edu.br/"
        },
        {
            "name": "UFLA",
            "location": "Lavras, MG",
            "degree": "B.Sc. Forest Engineering",
            "major": "Forest Science",
            "datesAttended": "2004 - 2010",
            "url": "http://www.ufla.br/"
        }
    ],

    "onlineCourses": [{
            "title": "Front-end programming nanodegree",
            "school": "Udacity",
            "completed": "Ongoing",
            "url": "http://www.udacity.com"
        },
        {
            "title": "Build Complete Web Solutions",
            "school": "Coursera",
            "completed": "February 2016",
            "url": "https://www.coursera.org"
        },
        {
            "title": "Responsive Website Development and Design",
            "school": "Coursera",
            "completed": "December 2015",
            "url": "https://www.coursera.org"
        }
    ]
}

var work = {
    "jobs": [{
        "employer": "Rico Corretora",
        "title": "Internship",
        "location": "São Paulo, SP",
        "datesWorked": "January 2016 - January 2017",
        "description": "Developing and maintaining websites front end functionality " +
            "using Javascript, AngularJS and jQuery."
    }]
}

var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "datesWorked": "December 2016",
        "description": "Created an online portfolio of work as part of Udacity's " +
            "Front-End Web Developer Nanodegree.",
        "images": ["images/thumbnail-portfolio.jpg"],
        "url": "https://aline-aline.github.io/portfolio/"
    }]
}

bio.display = function() {

    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
    var formattedBioPic = HTMLbioPic.replace(DATA, bio.picture);

    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedBioPic);

    $("#topContacts, #footerContacts").append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);

    $("#header").append(HTMLskillsStart);
    for (var i in bio.skills) {
        if (bio.skills.hasOwnProperty(i)) {
            var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }

};

bio.display();

work.display = function() {

    $("#workExperience").append(HTMLworkStart);

    for (var i in work.jobs) {
        if (work.jobs.hasOwnProperty(i)) {
            var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace(DATA, work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};

work.display();

projects.display = function() {
    for (var i in projects.projects) {
        if (projects.projects.hasOwnProperty(i)) {

            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace(DATA, projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (image in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }

        }
    }
};

projects.display();

education.display = function() {

    for (i in education.schools) {
        if (education.schools.hasOwnProperty(i)) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace(DATA, education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchollDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace(DATA, education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchollDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        $("#education").append(HTMLonlineClasses);
        for (i in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(i)) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace(DATA, education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
    }
};

education.display();

$("#mapDiv").append(googleMap);