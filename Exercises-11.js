//11. Logic Challenge - Tentukan Deret Aritmatika
//===============================================

function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    for ( var i = 0; i < arr.length; i++) {
        var harusTrue = false
        if ( arr[i] - arr[i-1] === arr[1]-arr[0]) {
            harusTrue = true
        } else if (i === 0) {
            harusTrue = true
        }  else {
            harusTrue = false
        }
    }
    return harusTrue 
  }
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
