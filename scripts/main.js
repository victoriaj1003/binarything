// place to enter a number (give a range up to 256 maybe?)
// to find binary...
// take number, find the next smaller expoonent of 2 and place a 1, if number is not smaller, place a 0, then subtract the next smallest number from it, then take the difference and and compare.  then continue until you reach zero.

// to find numbers use Math.pow(2, 2) which will return 4.  since binary, use 2 to the power of something.


// hard code the array of exponents of 2
	var powerOf = [512, 256, 128, 64, 32, 16, 8, 4, 2, 1];


// run through the array and compare the input number to the array contents
 	// function checkInput(x) {

 		// var subtractThing = (powerOf - x);

 	// 	var x = prompt("please enter a number between 0 and 500");
		// 	if (x > 500 || x < 0) {
		// 		console.log("we need to reprompt the user for input");
		// 	} else {
		function checkInput() {
		    var x = document.getElementById('inputspace').value
				console.log(typeof x);
				console.log(x);
				var reg = new RegExp('[^0-9]+');
		    if (reg.test(x) || x < 0 || x > 500) {
		        console.log("NOT VALID");
						// checkInput();
						for (i=0; i<powerOf.length; i++)

						document.getElementById("place-" + i).innerHTML = "0";
						document.getElementById("alert").innerHTML = "Please enter a number between 0 and 500";
						document.getElementById("inputspace").value = ""


		    } else {
					console.log("value is between 0 and 500");
					document.getElementById("inputspace").value = ""

						document.getElementById("alert").innerHTML = " ";

					// function mutateToBinary(i) {
					for (i=0; i<powerOf.length; i++) {

						document.getElementById("place-" + i).innerHTML = "0";
						if (x >= powerOf[i]) {
						console.log("if is working");
						x = x - powerOf[i];
						console.log("subtract is working");
						console.log("1");
						console.log(x);

							document.getElementById("place-" + i).innerHTML = "1";
						// }
					// return
					// 	console.log("return is working");
					// console.log("1");
						} else {
							console.log("wat- 0");
						}
					}

 	// 	for (i=0; i<powerOf.length; i++) {
		// 	mutateToBinary(i);
		// }
	}
}
// };
