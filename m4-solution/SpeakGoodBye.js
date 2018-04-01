// wrap the speak method in byeSpeaker namespace object
// hoist function to global spoke visibility
(function(window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";

    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
})(window);