// 2. Exercises-2 Mengakses Nilai Dalam Array
//===============================================
function balikString(str) {
  var arr = str.split()
  var tmp = ""
  for ( var i = arr[0].length-1; i >= 0; i--) {
      tmp = tmp + arr[0][i]
  }

  return tmp
}

console.log(balikString("Anton Ruchiat"))