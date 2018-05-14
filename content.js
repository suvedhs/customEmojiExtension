//content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.messagey === "clicked_browser_action" ) {
      if(1 === 0) {
        var messageSending = $(".4rv3 div._5irm._1_73 div._kmc._2swd.navigationFocus div._3-8x._3oh- div div._5rp7._5rp8 div._5rpb div.notranslate._5rpu div div div._1mf._1mj span span").attr("innerHTML");
        console.log("welp the if statement works");
      }
      console.log("howddy");
      var messageSpan = $("div._1mf._1mj span span").eq(0);
      console.log(messageSpan.text());

      alert("Howdy!\n" + messageSpan.text());
      //messageSpan.text("hi");
//      console.log(messageSending);

    }
  }
);
