var pageName;

var darkenButton = function(id) {
  var darkenSource = "https://c190stash.imfast.io/" + id + "1.png";
        document.getElementById(id).src = darkenSource;
};

var returnButton = function(id) {
  if (id != pageName) {
    var returnSource = "https://c190stash.imfast.io/" + id + ".png";
    document.getElementById(id).src = returnSource;
  } else {
    var darkenSource = "https://c190stash.imfast.io/" + id + "1.png";
    document.getElementById(id).src = darkenSource;
  }
};

var darkenView = function(id) {
  var darkenSource = "https://c190stash.imfast.io/" + document.getElementById(id).className + "1.png";
  document.getElementById(id).src = darkenSource;
}
var returnView = function(id) {
  var returnSource = "https://c190stash.imfast.io/" + document.getElementById(id).className + ".png";
  document.getElementById(id).src = returnSource;
}

function switchMain(id) {
  var buttonNames = ["about", "links", "works", "contact"];
  buttonNames = buttonNames.filter(e => e !== id);
  function buttonHideButton() {
    var i = 2;
    while (i > -1) {
      document.getElementById(buttonNames[i]).src = "https://c190stash.imfast.io/" + buttonNames[i] + ".png";
      i--;
    }
  }
  switch(id) {
    case "about":
      buttonHideButton();
      document.getElementById("back").hidden = false;
      pageName = "about";
      document.getElementById("storm").src = "https://c190stash.imfast.io/hello.png";
      document.getElementById("storm").alt = "hello! I'm Gray, a high school student with a passion for drawing & coding ^__^";
    break;

    case "links":
      buttonHideButton();
      document.getElementById("back").hidden = true;
      pageName = "links";
      document.getElementById("storm").src = "https://c190draws.imfast.io/storm_pagedoll.png";
      document.getElementById("storm").alt = "storm pagedoll";
    break;

    case "works":
      buttonHideButton();
      document.getElementById("back").hidden = false;
      pageName = "works";
      document.getElementById("storm").src = "https://c190stash.imfast.io/coming_soon.png";
      document.getElementById("storm").alt = "coming soon :)";
    break;
          
    case "contact":
      buttonHideButton();
      document.getElementById("back").hidden = false;
      pageName = "contact";
      document.getElementById("storm").src = "https://c190stash.imfast.io/contact_icons.png";
      document.getElementById("storm").alt = "my email is c190draws@gmail.com and my discord tag is 小王子#0164";
    break;
  }
};

function returnMain() {
  document.getElementById("storm").src = "https://c190draws.imfast.io/storm_pagedoll.png";
  document.getElementById("storm").alt = "storm pagedoll";
  document.getElementById(pageName).src = "https://c190stash.imfast.io/" + pageName + ".png";
  document.getElementById("back").hidden = true;
  pageName = "index";
};

function mobileView(x) {
  var pageElements = ["about", "links", "works", "contact", "storm", "myName", "back"];
  var elementSizes = ["75", "75", "70", "75", "300", "300", "45"];
  if (x.matches) {
    var i = 6;
    while (i > -1) {
      document.getElementById(pageElements[i]).width = document.getElementById(pageElements[i]).width * 0.75;
      i--;
    }
  } else {
    var i = 6;
    while (i > -1) {
    document.getElementById(pageElements[i]).width = elementSizes[i];
    i--;
    }
  }
}
var x = window.matchMedia("(max-width: 700px)")
mobileView(x)
x.addListener(mobileView)
