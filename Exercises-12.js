//12. Logic Challenge - Tentukan Deret Geometri
//=============================================

function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var arrke1 =  arr[0]*arr[i+1]
    for ( var i = 0; i < arr.length; i++) {
        var harusTrue = false
        if ( (arr[0]*arr[i+1]) === arr[i+1]/arr[0]) {
            harusTrue = true
        } else if ( (arr[i+1] / arr[i-1]) === (arr[i+2]/arr[i+1])) {
            harusTrue = true
        } else if ( (arr[arr.length-1] / arr[arr.length-2]) === (arr[arr.length-2] / arr[arr.length-3]) ) {
            harusTrue = true
        } else {
            harusTrue = false
        }
    }

    return harusTrue
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false