var arrayTasks = {

	concat: function (arr1, arr2) {
		let newArray = arr1.concat(arr2);
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},



	square: function (arr) {
		newArray = [];
		for(let element of arr){
			result = element * element;
			newArray.push(result);
		}
		return newArray;
	},

	sum: function (arr) {
		total = 0;
		for(let element of arr){
			total += element
		}
		return total;
	},

	// findDuplicates: function (arr) {
	// 	newArray = [];
	// 	for(let element of arr){
	// 		if
	// 	}
	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	findIndexesOf: function (arr, itemToFind) {
		// for(let element of arr){
		// 	if(element === itemToFind){
		// 		return arr.indexOf(element);
		// 	}
		// }
			newArray =[];
		// const found = arr.filter(function(element){
		for(let element of arr){
			if(element === itemToFind){
			newArray.push(arr.indexOf(element));
			}
		}
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		total = 0;
		newArray = []
		for(let element of arr){
			if(element % 2 === 0){
				newArray.push(element);
			}
		}
		for(let element of newArray){
			sum = element * element
			total += sum;
		}
		return total;
	}

}

module.exports = arrayTasks
