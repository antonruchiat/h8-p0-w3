//14. Logic Challenge - Mengelompokkan Angka
//==========================================

function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var tmpBulat = []
    var tmpGanjil = []
    var tmpKelipatanTiga = []
    var kelompokAngka = []
    
    for ( var i = 0; i < arr.length; i++) {
        if ( arr[i] % 3 === 0 ) {
            tmpKelipatanTiga.push(arr[i])
        } 
        else if ( arr[i] % 2 === 0) {
            tmpBulat.push(arr[i])
        } else if ( arr[i] % 2 !== 0) {
            tmpGanjil.push(arr[i])
        } 
    }
    kelompokAngka.push(tmpBulat)
    kelompokAngka.push(tmpGanjil)
    kelompokAngka.push(tmpKelipatanTiga)
    return kelompokAngka
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
