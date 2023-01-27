// get the background page of the extension
chrome.runtime.getBackgroundPage(function(backgroundPage){
    document.getElementById("checkAppointment").addEventListener("click", function(){
        // call the checkAppointment function from the background page
        backgroundPage.checkAppointment();
    });
});
