// place to enter a number (give a range up to 256 maybe?)
// to find binary...
// take number, find the next smaller expoonent of 2 and place a 1, if number is not smaller, place a 0, then subtract the next smallest number from it, then take the difference and and compare.  then continue until you reach zero.

// to find numbers use Math.pow(2, 2) which will return 4.  since binary, use 2 to the power of something.

// on click, submit input field...

// function submit() {
// 	document.getElementByID("button").submit();
// }

// hard code the array of exponents of 2
	var powerOf = [512, 256, 128, 64, 32, 16, 8, 4, 2, 1];


// run through the array and compare the input number to the array contents
 	// function checkInput(x) {

 		// var subtractThing = (powerOf - x);

 		var x = prompt("pick a number between 0 and 500");

		function checkInput(i) {
			if (x >= powerOf[i]) {
			console.log("if is working");
			x = x - powerOf[i];
			console.log("subtract is working");
			console.log("1");
			console.log(x);
			// console.log(document.getElementById("place-"))
			for (var b = 1; b < 11; b++) {
				document.getElementById("place-" + b).innerHTML = "1";
			}
		// return 
		// 	console.log("return is working");
		// console.log("1");
			} else {
				console.log("wat- 0");
			}
		}




 		for (i=0; i<powerOf.length; i++) {
			checkInput(i);
		} 


