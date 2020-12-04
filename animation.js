      var pageName;

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

      function switchMain(id) {
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
            document.getElementById("email").hidden = true;
            document.getElementById("discord").hidden = true;
            pageName = "about";
            document.getElementById("storm").src = "https://user-images.githubusercontent.com/57303754/100564842-f9002c80-3276-11eb-8d62-041320521884.png";
            document.getElementById("storm").alt = "hello! I'm Gray, a high school student with a passion for drawing & coding ^__^";
          break;

          case "links":
            buttonHideButton();
            document.getElementById("back").hidden = true;
            document.getElementById("email").hidden = true;
            document.getElementById("discord").hidden = true;
            pageName = "links";
            document.getElementById("storm").src = "https://user-images.githubusercontent.com/57303754/100564216-3f548c00-3275-11eb-976b-fca49ff1f360.png";
            document.getElementById("storm").alt = "storm pagedoll";
          break;

          case "works":
            buttonHideButton();
            document.getElementById("back").hidden = false;
            document.getElementById("email").hidden = true;
            document.getElementById("discord").hidden = true;
            pageName = "works";
            document.getElementById("storm").src = "https://user-images.githubusercontent.com/57303754/100564945-36fd5080-3277-11eb-9a64-c2092a0e8d97.png";
            document.getElementById("storm").alt = "coming soon :)";
          break;
                
          case "contact":
            buttonHideButton();
            document.getElementById("back").hidden = false;
            document.getElementById("email").hidden = false;
            document.getElementById("discord").hidden = false;
            pageName = "contact";
            document.getElementById("storm").src = "https://user-images.githubusercontent.com/57303754/101214005-23b00380-3630-11eb-9fe3-a191e733acd1.png";
            document.getElementById("storm").alt = "my email is c190draws@gmail.com and my discord tag is 小王子#0164";
          break;
        }
      };

      function returnMain() {
        document.getElementById("storm").src = "https://user-images.githubusercontent.com/57303754/100564216-3f548c00-3275-11eb-976b-fca49ff1f360.png";
        document.getElementById("storm").alt = "storm pagedoll";
        document.getElementById(pageName).style.filter = "brightness(100%)";
        document.getElementById("back").hidden = true;
        document.getElementById("email").hidden = true;
        document.getElementById("discord").hidden = true;
        pageName = "index";
      };
