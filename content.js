//content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.messagey === "clicked_browser_action" ) {

      //verifies that the website is messenger.com
      if(window.location.href.indexOf("messenger.com") > -1) {

        //gets number of loaded text-based messages
        var a = $("div.clearfix div._3058 div._aok span._3oh-").length;

        //outputs each message to the console
        for(i = 1; i < a + 1; i++) {
          console.log($("div.clearfix div._3058 div._aok span._3oh-").eq(-i).text() + "\n");
        }
      }
      else {
        console.log("oops");
      }

      //messageSpan.text("hi");
//      console.log(messageSending);

    }
  }
);
