//content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.messagey === "clicked_browser_action" ) {
      console.log("howddy");
      var messageSpan = $("div.clearfix div._3058 div._aok span._3oh-").eq(0);
      console.log(messageSpan.text());

      alert("Howdy!\n" + messageSpan.text());
      //messageSpan.text("hi");
//      console.log(messageSending);

    }
  }
);
