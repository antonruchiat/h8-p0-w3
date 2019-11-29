//8. Logic Challenge - Pasangan Angka Terbesar
//=============================================

function pasanganTerbesar(num) {
    
    var strAngka = num.toString()
    
    var tmp = 0
    var bigest = tmp
    for ( var i = 0; i < strAngka.length; i++) {
        if ( parseInt(strAngka[i]+strAngka[i+1]) > parseInt(strAngka[i+1]+strAngka[i+2]) ) {
            tmp = parseInt(strAngka[i]+strAngka[i+1]) 
            if (bigest < tmp) {
                bigest = tmp
            }
        }
    }

    return bigest

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99