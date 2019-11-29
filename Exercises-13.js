// 13. Logic Challenge - Target Terdekat
//======================================

function targetTerdekat(arr) {
    // you can only write your code here!
    var tmp 
    var tmpX = -1
    var tmpO = -1

    for ( var i = 0; i < arr.length; i++) {
        if ( arr[i] === "x") {
            tmpX =  i
        }

        if ( arr[i] === "o") {
            tmpO =  i
        }


        if ( tmpO !== -1 && tmpX !== -1) {
            tmp = tmpO - tmpX
            break
        } else {
            tmp = 0
        }
    }

    return Math.abs(tmp)

}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

