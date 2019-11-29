//6. Logic Challenge - Number Palindrome
//=======================================


function angkaPalindrome(num) {
    var find = true
    while (find) {
        num++
        var strNum = num.toString()
        var hasilBalik = ""
        
        for (var i = strNum.length-1; i >= 0; i--) {
            hasilBalik = hasilBalik + strNum[i]
        }

        if ( hasilBalik === strNum) {
            return hasilBalik
        } 
    }
}



console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001s