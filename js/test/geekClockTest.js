$(document).ready(function(){

	var testdiv = $('#test');

	QUnit.testDone = function (name, failures, total) {
		testdiv.empty();
	}
    
	module("Geek Clock");
	test("hour", function() {
	  var currentTime = new Date();
      var h = currentTime.getHours();
	  
	  testdiv.geekClock('hours',{'hours':h});

	  equal($('span.geekClock-hours').html(), h, "Hour is not consistent");
	  
	});
	
	test("minutes", function() {
	  var currentTime = new Date();
	  var m = currentTime.getMinutes();
	  
	  testdiv.geekClock('minutes');
	  
	  equal($('span.geekClock-minutes').html(), m, "Minutes are not consistent");
	});
	
	test("seconde", function() {
	  var currentTime = new Date();
	  var s = currentTime.getSeconds();
	  
	  testdiv.geekClock('seconds');
	  
	  equal($('span.geekClock-seconds').html(), s, "Seconds are not consistent");
	});
	
	
	test("Display Time", function() {
	  var currentTime = new Date();
	  var h = currentTime.getHours();
	  var s = currentTime.getSeconds();
	  var m = currentTime.getMinutes();
	  
	  testdiv.geekClock('display');
	  
	  equals(testdiv.text(), h+":"+m+":"+s, "Global Clock");
	});
	
	test("Update Time", function() {
	  var currentTime = new Date();
	  var h = currentTime.getHours();
	  var s = currentTime.getSeconds();
	  var m = currentTime.getMinutes();
	  
	  testdiv.geekClock();
	  stop();
	  setTimeout(
			function (){
					start();
				  equals(testdiv.text(), h+":"+m+":"+s, "Global Clock");
			}
			,
			1000
		);
	});
});
