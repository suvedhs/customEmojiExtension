//content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.messagey === "clicked_browser_action" ) {

      //verifies that the website is messenger.com
      if(window.location.href.indexOf("messenger.com") > -1) {

        //gets number of loaded text-based messages
        var a = $("div.clearfix div._3058 div._aok span._3oh-").length;
        var msg;
        //outputs each message to the console
        for(i = 1; i < a + 1; i++) {
          msg = $("div.clearfix div._3058 div._aok span._3oh-").eq(-i);
          console.log(msg.text() + "\n");

          var strArray = msg.text().split(" ");
          var joinString = "";
          for(j = 0; j < strArray.length; j++) {

            if(strArray[j] === ":monkaS:") {
              strArray[j] = "<img alt=\"monkaS\" height=\"16px\" width=\"16px\" src=\"http://i0.kym-cdn.com/entries/icons/square/000/022/713/4.png\">";
            }

            joinString += strArray[j] + " ";
          }
          msg.html(joinString);

        }
      }
      //if the website isn't messenger.com
      else {
        console.log("oops");
      }

      //messageSpan.text("hi");
//      console.log(messageSending);

    }
  }
);
