(function(){
"use strict";
console.log("SEAF fired");
/*declare variables*/

		var theCanvas = document.querySelector("#canvasShapes");// global variable linked to canvas in Html file
		var context = theCanvas.getContext("2d");
		var rect = theCanvas.getBoundingClientRect();// to get the boundaries of canvas
 		var a = Math.random()*0.8+0.2;// starting from 0.2 so that it does not get transparent
 		var colorfill = "rgba(0,0,128,"+a+")";//default values of color and opacity
/*create functions*/

	
		
	function changeColor (e) // this function generates random values for Color and opacity and set the value of global variable 
	{	var r = Math.ceil(Math.random()*255);
		var g = Math.ceil(Math.random()*255);
	 	var b = Math.ceil(Math.random()*255);
		a = Math.random()*0.8+0.2;
		colorfill = "rgba("+r+","+g+","+b+","+a+")";
	}

	
	
	function getXY(event)// this function generates the art during mouse movement in the canvas  
	{	var x = event.clientX - rect.left;
    	var y = event.clientY - rect.top;
		var rad = Math.floor(Math.random()*90+10);// random values for radius of circle
		
		//Draw calls for circle
		context.beginPath();
		context.arc(x,y,rad,0,2*Math.PI);
		context.fillStyle = colorfill;
		context.fill();
		// Draw calls for stroke effect or outline effect
		context.strokeStyle = "rgba(0,0,0,"+a+")"; // Setting black as default color for stroke with variable opacity
		context.lineWidth = 5;// Setting the default line width of stroke
		context.stroke();
			
	}

	/*event listeners on mouse movement and mouse click*/
	theCanvas.addEventListener("mousemove", getXY, false); // event to genrate art of mouse movement inside the canvas
	theCanvas.addEventListener("click", changeColor, false);// event to change color and opacity attributes of art

})();