      var pageName;
      var aboutNumber;

      var sketchNames = ["wolfStudy", "horseStudy", "orchid"];
      var minorNames = ["flower", "rhino", "succulent", "wipFlower", "quote", "kitteysocks", "crayonFlower", "tuershen", "polarbear", "blm", "haring", "kimpa"];
      var majorNames = ["majorFlower", "banff"];

      var darkenButton = function(id) {
        document.getElementById(id).style.filter = "brightness(82%)";
      };

      var returnButton = function(id) {
          if (id != pageName) {
            document.getElementById(id).style.filter = "brightness(100%)";
          } else {
            document.getElementById(id).style.filter = "brightness(82%)";
          }
      };
      
      function refreshButton(id) {
        darkenButton(id);
        returnButton(id);
      };

      function switchMain(id) {
        aboutNumber = 0;
        var buttonNames = ["about", "links", "works", "contact"];
        buttonNames = buttonNames.filter(e => e !== id);
        function buttonHideButton() {
          var i = 2;
          while (i > -1) {
            document.getElementById(buttonNames[i]).style.filter = "brightness(100%)";
            i--;
          }
        }
        switch(id) {
          case "about":
            buttonHideButton();
            document.getElementById("back").hidden = false;
            document.getElementById("forward").hidden = false;
            document.getElementById("email").hidden = true;
            document.getElementById("discord").hidden = true;
            pageName = "about";
            document.getElementById("storm").src = "https://user-images.githubusercontent.com/57303754/100564842-f9002c80-3276-11eb-8d62-041320521884.png";
            document.getElementById("storm").alt = "hello! I'm Gray, a high school student with a passion for drawing & coding ^__^";
             document.getElementById("myName").src = "https://user-images.githubusercontent.com/57303754/102863112-f9f42c00-43e6-11eb-8b9b-423d3f3df709.png";
          break;

          case "links":
            buttonHideButton();
            document.getElementById("back").hidden = false;
            document.getElementById("forward").hidden = true;
            document.getElementById("email").hidden = true;
            document.getElementById("discord").hidden = true;
            pageName = "links";
            document.getElementById("storm").src = "https://user-images.githubusercontent.com/57303754/100564216-3f548c00-3275-11eb-976b-fca49ff1f360.png";
            document.getElementById("storm").alt = "storm pagedoll";
             document.getElementById("myName").src = "https://user-images.githubusercontent.com/57303754/102863112-f9f42c00-43e6-11eb-8b9b-423d3f3df709.png";
          break;

          case "works":
            buttonHideButton();
            selectedGallery = 0;
            var hideForWorks = ["about", "links", "works", "contact", "storm", "forward", "email", "discord"];
            var i = 0;
            while (i < hideForWorks.length) {
              document.getElementById(hideForWorks[i]).hidden = true;
              i++;
            }
            document.getElementById("back").hidden = false;
            document.getElementById("play").hidden = false;
            document.getElementById("sketchIcon").hidden = false;
            document.getElementById("minorIcon").hidden = false;
            document.getElementById("majorIcon").hidden = false;
            pageName = "works";
            document.getElementById("myName").src = "https://user-images.githubusercontent.com/57303754/102863115-fcef1c80-43e6-11eb-9b0d-56bab6fefc96.png";
          break;
                
          case "contact":
            buttonHideButton();
            document.getElementById("back").hidden = false;
            document.getElementById("forward").hidden = true;
            document.getElementById("email").hidden = false;
            document.getElementById("discord").hidden = false;
            pageName = "contact";
            document.getElementById("storm").src = "https://user-images.githubusercontent.com/57303754/101214005-23b00380-3630-11eb-9fe3-a191e733acd1.png";
            document.getElementById("storm").alt = "my email is c190draws@gmail.com and my discord tag is 小王子#0164";
            document.getElementById("myName").src = "https://user-images.githubusercontent.com/57303754/102863112-f9f42c00-43e6-11eb-8b9b-423d3f3df709.png";
          break;
        }
      };

      function returnMain(id) {
        document.getElementById("sketchIcon").style.filter = "brightness(100%)";
        document.getElementById("minorIcon").style.filter = "brightness(100%)";
        document.getElementById("majorIcon").style.filter = "brightness(100%)";
        if (aboutNumber == 0) {
          document.getElementById("storm").src = "https://user-images.githubusercontent.com/57303754/100564216-3f548c00-3275-11eb-976b-fca49ff1f360.png";
          document.getElementById("storm").alt = "storm pagedoll";
          document.getElementById("myName").src = "https://user-images.githubusercontent.com/57303754/102863112-f9f42c00-43e6-11eb-8b9b-423d3f3df709.png";
          document.getElementById(pageName).style.filter = "brightness(100%)";
          document.getElementById("back").hidden = true;
          document.getElementById("forward").hidden = true;
          document.getElementById("email").hidden = true;
          document.getElementById("discord").hidden = true;
          document.getElementById("sketchIcon").hidden = true;
          document.getElementById("minorIcon").hidden = true;
          document.getElementById("majorIcon").hidden = true;
          document.getElementById("play").hidden = true;
          var showAgain = ["about", "links", "works", "contact", "storm"];
          var i = 0;
          while (i < showAgain.length) {
            document.getElementById(showAgain[i]).hidden = false;
            i++;
          }
          pageName = "index";
        } else if (pageName == "works") {
            var returnElements = ["about", "links", "works", "contact", "storm"];
            var i = 4;
            while (i > -1) {
              document.getElementById(returnElements[i]).hidden = false;
              i--;
            }
            document.getElementById("storm").src = "https://user-images.githubusercontent.com/57303754/100564216-3f548c00-3275-11eb-976b-fca49ff1f360.png";
            document.getElementById("storm").alt = "storm pagedoll";
            document.getElementById("myName").src = "https://user-images.githubusercontent.com/57303754/102863112-f9f42c00-43e6-11eb-8b9b-423d3f3df709.png";
            document.getElementById("works").style.filter = "brightness(100%)";
            pageName = "index";
        } else {
          slideNumbers(id);
        }
      };

      function slideNumbers(id) {
        if (id == "back") {
          aboutNumber--;
          //slideChange();
        } else if (id == "forward") {
          if (aboutNumber != 2 /*<-- change accordingly*/) {
            aboutNumber++;
            //slideChange();
          } else {
              aboutNumber = 0;
              returnMain();
          }
        }
      };

      function slideChange() {
    /*  if (aboutNumber == 0) { 
          document.getElementById("storm").src = "";
        } else if (aboutNumber == 1) {
          document.getElementById("storm").src = "";
        } else if (aboutNumber == 2) {
          document.getElementById("storm").src = "";
        } */
      };

/*********************************************************/
//gallery stuff
var selectedGallery = 0;

function gallerySelection(id) {
  selectedGallery = id;
  var galleryOptions = ["sketchIcon", "minorIcon", "majorIcon"];
  galleryOptions = galleryOptions.filter(e => e !== id);
  var i = 1;
  while (i > -1) {
    document.getElementById(galleryOptions[i]).style.filter = "brightness(100%)";
    i--;
  }
  document.getElementById(id).style.filter = "brightness(72%)";
};

function hideGallerySelect() {
  var takeElements = ["about", "links", "works", "contact", "storm", "back", "forward", "email", "discord", "sketchIcon", "minorIcon", "majorIcon", "play"];
  var i = 12;
  while (i > -1) {
    document.getElementById(takeElements[i]).hidden = true;
    i--;
  }
  document.getElementById("galleryBack").hidden = false;
}

function openGallery() {
  document.getElementById("sketchIcon").style.filter = "brightness(100%)";
  document.getElementById("minorIcon").style.filter = "brightness(100%)";
  document.getElementById("majorIcon").style.filter = "brightness(100%)";

    if (selectedGallery != 0) {
    document.getElementById("myName").src = "https://user-images.githubusercontent.com/57303754/102863121-feb8e000-43e6-11eb-8fad-87aa1bb07cc0.png";

    switch(selectedGallery) {
      case "sketchIcon":
      hideGallerySelect();
        var i = sketchNames.length - 1;
        while (i > -1) {
          document.getElementById(sketchNames[i]).hidden = false;
          i--;
        }
      break;

      case "minorIcon":
      hideGallerySelect();
        var i = minorNames.length - 1;
        while (i > -1) {
          document.getElementById(minorNames[i]).hidden = false;
          i--;
        }
      break;

      case "majorIcon":
      hideGallerySelect();
        var i = majorNames.length - 1;
        while (i > -1) {
          document.getElementById(majorNames[i]).hidden = false;
          i--;
        }
      break;
    }
  }
};

function returnGallery() {
  var i = sketchNames.length - 1;
  while (i > -1) {
  document.getElementById(sketchNames[i]).hidden = true;
  i--;}
  i = minorNames.length - 1;
  while (i > -1) {
  document.getElementById(minorNames[i]).hidden = true;
  i--;}
  i = majorNames.length - 1;
  while (i > -1) {
  document.getElementById(majorNames[i]).hidden = true;
  i--;}
  
  var hideForWorks = ["about", "links", "works", "contact", "storm", "forward", "email", "discord"];
  i = 0;
  while (i < hideForWorks.length) {
    document.getElementById(hideForWorks[i]).hidden = true;
      i++;
  }
  document.getElementById("back").hidden = false;
  document.getElementById("play").hidden = false;
  document.getElementById("sketchIcon").hidden = false;
  document.getElementById("minorIcon").hidden = false;
  document.getElementById("majorIcon").hidden = false;
  document.getElementById("galleryBack").hidden = true;
  pageName = "works";
  document.getElementById("myName").src = "https://user-images.githubusercontent.com/57303754/102863115-fcef1c80-43e6-11eb-9b0d-56bab6fefc96.png";
  selectedGallery = 0;
};
