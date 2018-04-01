// Module 4 assignment - utilize IIFE to execute immediately
// iterate through names array, say Hello to anyone whose
// name does NOT begin with J (case insensitive), say
// Good bye to anyone whose name begins with J or j
(function() {
     var names = new Array("Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim");

    for (var i = 0; i < names.length; i++) {
        if ( names[i].toLowerCase().charAt(0) == "j" ) {
          byeSpeaker.speak(names[i]);
        } else {
          helloSpeaker.speak(names[i]);
        }
    }
})();