// wrap the speak method in helloSpeaker namespace object
// hoist function to global spoke visibility
(function(window) {

    var helloSpeaker = {};

    speakWord = "Hello";

    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }

    window.helloSpeaker = helloSpeaker;
})(window);