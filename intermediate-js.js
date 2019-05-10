// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]
rev = (arr) => arr.reverse()
console.log(rev(originalArray));
console.log("");
// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

let {type, gear, wheels} = bicycle
// Log the type of bicycle:
console.log(bicycle.type)
console.log("");

// Log the bell:
function gearcheck(gear){
	for (i = 0; i < bicycle.gear.length; i++){
		if (bicycle.gear[i].includes(gear)){
			return bicycle.gear[i]
		}
	}
}
console.log(gearcheck("bell"));
console.log("");


// Log the PSI:
function wheelscheck(wheel){
	for (i = 0; i < bicycle.wheels.specs.length; i++){
		if (bicycle.wheels.specs[i].includes(wheel)){
			return bicycle.wheels.specs[i]
		}
	}
}
console.log(wheelscheck("PSI"));
console.log("");

// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
var lString = "llllLLLlLlLLllll"

function letterCounter(str){
	let count = 0
	let newarr = str.split("")
	for(i = 0; i < newarr.length; i++){
		if(newarr[i]=== "l" || newarr[i]=== "L"){
			count = count + 1
		}
	}
	return `There are ${count} l's in this string` ;
}
console.log(letterCounter(ourString));
console.log(letterCounter(lString));
console.log("");
// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
function gitFib(){
	fibArr = []
	for(i = 0; i < 10; i++){
		if(i == 0 || i == 1){
			fibArr.push(1)
		}else{
			let sums = fibArr[i-2] + fibArr[i-1]
			fibArr.push(sums)
		}
	}return fibArr
}
console.log(gitFib());
console.log("");
//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

function oddChecker(arr){
	let blankArr = []
	let delArr = []
	for(i = 0; i<arr.length; i++){
		if(typeof arr[i] !== "number"){
			delArr.push(arr[i])
		}else if(arr[i] % 2 !== 0 ){
			blankArr.push(arr[i])
		}
	}return blankArr
}
console.log(oddChecker(fullArr));
console.log("");

oddChecker2 = (arr) => {
	newarr = arr.filter(x => x % 2 !== 0)
	return newarr.filter(x => typeof x === "number")
}
console.log(oddChecker2(fullArr));
