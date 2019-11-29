//15. Logic Challenge - Mengelompokkan Hewan
//===========================================

function groupAnimals(animals) {
    // you can only write your code here!
    var indexHuruf = "abcdefghijklmnopqrstupwxyz"
    var arrKelompok = []
    var tmp = []

    for ( var i = 0; i < indexHuruf.length; i++) {
        for ( var j = 0; j < animals.length; j++) {
            if ( animals[j][0] === indexHuruf[i]) {
                tmp.push(animals[j])
            }
        }
        if ( tmp.length > 0) {
            arrKelompok.push(tmp)
        }
        tmp = []
    }

    return arrKelompok

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
