//3. Melakukan Looping Data Array
//===============================


function dataHandling(params) {

  for (var i=0; i<params.length; i++) {
    console.log(`Nomor ID            : ${params[i][0]}`)
    console.log(`Nama Lengkap        : ${params[i][1]}`)
    console.log(`Tempat Tanggal Lahir: ${params[i][2]}`)
    console.log(`Hobi                : ${params[i][3]}`)
    console.log()
  }  
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input)
