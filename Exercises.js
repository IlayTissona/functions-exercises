//Question 1
function myReverse(str) {
	let out = "";
	str = str.toString(10);
	for (let i = str.length - 1; i >= 0; i--) {
		out += str[i];
	}
	return out;
}

//Question 2
function allCombinations(str) {
	let combinations = [];
	let temp = "";
	for (let i = 0; i < str.length; i++) {
		temp = "";
		for (let j = i; j < str.length; j++) {
			temp += str[j];
			combinations.push(temp);
		}
	}
	return combinations;
}

//Question 3
function allCaps(str) {
	// your code here

	let out = str[0].toUpperCase();
	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === " ") {
			out += str[i].toUpperCase();
		} else {
			out += str[i];
		}
	}
	return out;
}

//Question 4
function myPower(x, n) {
	// your code here
	return "";
}

//Question 5
function getFirstNotRepeating(str) {
	// your code here
	return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
	// your code here
	return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
console.log(allCombinations("ilay"));

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
