
(function(window) {
    var byeSpeaker = {};
    peakWord = "Good Bye";

    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
})(window);