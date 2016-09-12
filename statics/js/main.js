// Data List
var SKILLS = [
  {name : "Java", level : 4},
  {name : "C", level : 3},
  {name : "C++", level : 4},
  {name : "SQL", level : 3},
  {name : "CSS", level : 3},
  {name : "jQuery", level : 2},
  {name : "PHP", level : 2},
  {name : "BackBone.js", level : 3},
  {name : "Node.js", level : 3},
  {name : "Python", level : 4},
  {name : "HTML", level : 4},
  {name : "XML", level : 3},
  {name : "Bootstrap", level : 4},
  {name : "JavaScript", level : 4},
  {name : "Bash Scripting", level : 4},
];

var TOOLS = [
  {name : "Windows", level : 5},
  {name : "Git", level : 5},
  {name : "Eclipse", level : 4},
  {name : "Linux", level : 5},
  {name : "Vim", level : 4},
];

var LANGUAGE = [
  {name : "English", level : 5},
  {name : "Mandarin", level : 5},
];

var EDUCATION = [
  { title:        "McMaster University", 
    time:         "Sep 2013 ~ present", 
    description1: "", 
    description2: "Hamilton, ON, Canada",
    description3: "Bachelor, Computer Engineering",
    url:          "",
    
  },
  { title:        "Jinling High School", 
    time:         "Sep 2010 ~ May 2013", 
    description1: "", 
    description2: "Nanjing, Jiangsu, China",
    description3: "High School Diploma-Science",
    url:          "",
    
  },
];

var PROJECTS = [
  { title:        "Course Recommendation System", 
    time:         "May 2016 ~ Now", 
    description1: "MongoDB, Flask, Backbone.js and jQuery",
    description2: "",
    description3: "Developed an academic platform with friends which used by 1000+ University of Toronto students to share reviews of courses, professors and exams, and watch video tutorials of some courses.", 
    url:          "",
    
  },
  { title:        "2D Robot User Interface Design", 
    time:         "December 2014", 
    description1: "C++, PlayerStage Platform",
    description2: "",
    description3: "Designed a 2D robot user interface with C++ to let the user easily control the robot to move along the path, avoid obstacles, etc.", 
    url:          "",
    
  },
  { title:        "Image De-compressor", 
    time:         "December 2015", 
    description1: "System Verilog",
    description2: "",
    description3: "Designed a 4-stage robust ‘.mic8’ image de-compressor in System Verilog verified by software model.", 
    url:          "https://github.com/bwwyyy/Digital-Systems-Design--2015/",
    
  },
  { title:        "Sound Analyzer", 
    time:         "April 2015", 
    description1: "Java, XML",
    description2: "",
    description3: "Designed a multi-stage Sound Analyzer which get the real-time sound input from a microphone, amplify the signal with a hard-wired amplifier circuit, perform ADC with a microcontroller, and transfer the digital data to PC using serial communication.", 
    url:          "https://github.com/bwwyyy/ADC_for_MicroController",
  },
];

var WORK_EXPERIENCE = [
  { title:        "Intel", 
    time:         "May, 2016 ~ Now", 
    description1: "PEY Engineer, Intern",
    description2: "San Jose, CA, USA", 
    description3: "Emulated a 100G Ethernet IP design of Intel’s new 14nm FPGA, Stratix 10. Designed a comprehensive multi-mode 100G multilane Ethernet design test platform which be able to generate and analyze millions of packets efficiently in System Verilog. Wrote Tcl and Bash script to automate Synopsys/synthesis flow and used by a team of 10 people.", 
    url:          "",
  },
  { title:        "BlackBerry Inc.", 
    time:         "May-August, 2015", 
    description1: "Software Developer Co-op",
    description2: "Ottawa, ON, Canada",
    description3: "Developed and debugged an Android mobile search application with a team of 10 people which performs fast searches of 12 categories from databases containing over 100k items. Improved the search performance and helped the team to reduce the total search time to 3 seconds.", 
    url:          "",
  },
];

//Main - Entry
var pageWidth = 0;

$(document).ready(function() {
  pageWidth = $(window).width();
  attach_listeners();
  populate_tech_sec();
  populate_expr_sec();
  initScrollReveal();
});



// Attach listeners
var attach_listeners = function() {
  $('.move a').click(function(ev) {
    ev.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 600);
  });

  $(window).on("resize", onPageResize);
};

var initScrollReveal = function() {
    var config = {
      enter: 'bottom',
      reset: false,
      move: '8px',
      vFactor: 0.4,
    };
    window.sr = ScrollReveal(config);
    sr.reveal('.block');
};


var onPageResize = function() {
  pageWidth = $(window).width();
  d3.selectAll(".width-change").style("max-width", getTextWidth() + "px");
};

var getTextWidth = function() {
  if (pageWidth < 1000)
    return pageWidth;
  else
    return pageWidth/2;
};


//Menu driven scroll
$(window).scroll(function() {
   var navHeight = $('#top-nav').height();
   var pos = $(window).scrollTop() + navHeight;
   $('#top-nav-left').find('.active').removeClass('active');

   if($(window).scrollTop() + $(window).height() >= $(document).height()) {

      $('#top-nav-left > div:nth-child(5) > a').parent().addClass('active');
   } else if(pos >= $('#expe').position().top) {
      $('#top-nav-left > div:nth-child(4) > a').parent().addClass('active');
   } else if(pos >= $('#tech').position().top) {
      $('#top-nav-left > div:nth-child(3) > a').parent().addClass('active');
   } else if(pos >= $('#prof').position().top) {
      $('#top-nav-left > div:nth-child(2) > a').parent().addClass('active');
   } else if(pos >= $('#top').position().top) {
      $('#top-nav-left > div:nth-child(1) > a').parent().addClass('active');
   }
})

// Fill technical section
var populate_tech_sec = function() {
  fill_tech_2_col(d3.select(".skill-left-container"), d3.select(".skill-right-container"), SKILLS);
  fill_tech_2_col(d3.select(".tool-left-container"), d3.select(".tool-right-container"), TOOLS);
  fill_tech_2_col(d3.select(".lang-left-container"), d3.select(".lang-right-container"), LANGUAGE);

};


var fill_tech_2_col = function (container_l, container_r, data) {
  var data_len = data.length;
  var left_col_cnt = Math.floor(data_len/2) + data_len%2;

  var left_l = d3.select(".tool-left-container");
  var right_l = d3.select(".tool-right-container");

  gen_col_li_tech(container_l, data.splice(0, left_col_cnt));
  gen_col_li_tech(container_r, data);

};



var gen_col_li_tech = function (li_container, data) {
  var size = data.length;
  for (var i = 0; i < size; i++) {
    var p = li_container.append("li")
                        .append("div").attr("class", "row");
    p.append("div")
     .attr("class","col-md-7")
     .append("h4")
     .style("float", "left")
     .text(data[i]["name"] + ":");
    var s = p.append("div").attr("class", "col-md-3")
                           .style("float", "right")
                           .style("padding-top", "3%");
    var j;
    for (j = 0; j < 5; j++) {
      if (j < data[i]["level"])
        s.append("i").attr("class","fa fa-star");
      else
        s.append("i").attr("class","fa fa-star-o");
    }
  }
};

// Fill experience section
var populate_expr_sec = function () {
  for (var i in EDUCATION)
    fill_expr_1_col(".edu-container", EDUCATION[i]);
  for (var i in PROJECTS)
    fill_expr_1_col(".proj-container", PROJECTS[i]);
  for (var i in WORK_EXPERIENCE)
    fill_expr_1_col(".work-container", WORK_EXPERIENCE[i]);
};

var fill_expr_1_col = function (container_name, data) {
  var container_expr = d3.select(container_name).append("div").attr("class", "block");
  container_expr.append("h4").text(data.title);
  container_expr.append("p").text(data.time);
  container_expr.append("h5").text(data.description1)
                             .style("max-width", getTextWidth() + "px")
                             .attr("class", "width-change");
  container_expr.append("h6").text(data.description2);
  container_expr.append("h5").text(data.description3)
                            .style("max-width", getTextWidth() + "px")
                            .attr("class", "width-change");
  if (data.url !== "") {
    container_expr.append("div").style("max-width", "4px")
                  .append("a")
                  .attr("href", data.url)
                  .attr("target", "_blank")
                  .append("div")
                  .append("i")
                  .attr("class", "fa fa-github-square fa-3x");
  }
};

