"use strict";


// Vanilla JS
(function() {

	// do something

})();


// jQuery
$(document).ready(function() {

	// do something
	console.log("Hello, is it me you are looking for?");

}); 




// Attach Fastclick
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
