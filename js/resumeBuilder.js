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
    "picture": "images/kitten.jpg"
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
        "description": "Developing and maintaining websites front end functionality using Javascript, AngularJS and jQuery."
    }]
}

var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "datesWorked": "December 2016",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
        "images": ["images/thumbnail-portfolio.jpg"],
        "url": "https://aline-aline.github.io/portfolio/"
    }]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for (i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
}

displayWork();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (image in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }

        }
    }
}

projects.display();

education.display = function() {
    if (education.schools.length > 0 || eduction.onlineCourses.lenght > 0) {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchollDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchollDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();

$("#mapDiv").append(googleMap);