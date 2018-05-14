//content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.messagey === "clicked_browser_action" ) {

      //verifies that the website is messenger.com
      if(window.location.href.indexOf("messenger.com") > -1) {

        //gets number of loaded text-based messages
        var a = $("div.clearfix div._3058 div._aok span._3oh-").length;
        var msg;

        //for loop, parses through each message
        for(i = 1; i < a + 1; i++) {
          //generic variable msg representing each message loaded
          msg = $("div.clearfix div._3058 div._aok span._3oh-").eq(-i);
          console.log(msg.text() + "\n");

          //splits each message into an array of words to parse
          var strArray = msg.text().split(" ");

          //joinString is used to combine the array back into a complete string
          var joinString = "";

          //parses through the array to search for buzzwords
          for(j = 0; j < strArray.length; j++) {

            //searches for a buzzword
            if(strArray[j] === ":monkaS:") {
              //replaces the buzzword with the HTML for an image corresponding. Must be reduced to 16 by 16.
              strArray[j] = "<img alt=\"monkaS\" height=\"16px\" width=\"16px\" src=\"http://i0.kym-cdn.com/entries/icons/square/000/022/713/4.png\">";
            }
            //since we had split the string by spaces, we combine the array back while adding the spaces back
            joinString += strArray[j] + " ";
          }
          joinString = joinString.substr(0, joinString.length-1);
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
