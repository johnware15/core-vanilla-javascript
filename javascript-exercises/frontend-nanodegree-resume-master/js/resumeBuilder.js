/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $("#main").append("John Ware");

 var awesomeThoughts = "I am John and I am AWESOME!";
 console.log(awesomeThoughts);

 var formattedName = HTMLheaderName.replace("John Ware", %data%);
 var formattedRole = HTMLheaderRole.replace("Web Developer", %data%);
$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
    "name" : "John",
    "age" : 33,
    "contact info" : "contact@johndware.com",
    "welcome message" : "WELCOME",

}
//Split name function
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}
$('#main').append(internationalizeButton);



$("#main").append(bio.name);

var education = {
    "schools": [
    {
      "name": "Academy of Art University",
      "location": "San Francisco, CA",
      "degree": "Master's",
      "major": "Communications & Media Technologies",
      "dates": 2013
    }
    {
      "name": "Tennessee State University",
      "location": "Nashville, TN",
      "degree": "Bachelor's",
      "major": "Graphic Design",
      "dates": 2008
    }
    ]
}
var projects = {
    "websites": [
        {
          "Copy Portfolio": "www.johndware.com",
          "Blog Site": "www.johnwarejunior.com",
        }
    ]
}

//Display work

displayWork();

var displayProjects = function() {

}

//Projects display

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $("project-entry:last").append(formattedDates);

    var formatted

  }
}

var workExperience = {
  "Relevant Experience": [
      {
      "Position" = "Course Developer",
      "Employer" = "Udacity",
      "Years" = 0.3
    }
    {
      "Position" = "Producer/Writer",
      "Employer" = "John Ware Junior",
      "Years" = 5
    }
    {
      "Position" = "Freelance Writer",
      "Employer" = "The Write Touch, LLC",
      "Years" = 1
    }
    $(document).click(function(loc) {

    });
  ]
}

// returns an array of location strings from locations in resumeBuilder

function locationFinder() {
  var locations = [];

  locations.push(bio.contacts.locations);

  for (var school in education.schools) {
    locations.push(education.schools[school].location);
  }

  for (var job in work.jobs) {
    locations.push(work.jobs[job].location);
  }
  return locations;
}

//location Array function
function location(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
      var newLocation = work_obj.jobs[job].location;
      locationArray.push(newLocation);

  }
  return locationArray;
}

console.log(locationizer(work));

//Skills in bio
if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1])

  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2])

  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3])

  $("#skills").append(formattedSkill);


}




$("#main").append(work["position"]);
$("#main").append(education.name);
