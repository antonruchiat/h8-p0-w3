//4. Menggunakan Built-in Function pada Array
//===========================================


function dataHandling2(params) {
    params.splice(1, 1, "Roman Alamsyah Elsharawy")
    params.splice(2, 1, "Provinsi Bandar Lampung")
    params.splice(4, 1, "Pria")
    params.splice(5, 0, "SMA Internasional Metro")
    console.log(params)

    var bulan = input[3]

    var array = bulan.split("/")
    var array2 = bulan.split("/")

    var angkaBulan = array[1]
    switch (angkaBulan) {
        case "01":
            console.log(`Januari`)
            break
        
        case "02":
            console.log(`Pebruari`)
            break
        
        case "03":
            console.log(`Maret`)
            break

        case "04":
            console.log(`April`)
            break

        case "05":
            console.log(`Mei`)
            break

        case "06":
            console.log(`Juni`)
            break

        case "07":
            console.log(`Jully`)
            break

        case "08":
            console.log(`Agustus`)
            break

        case "09":
            console.log(`September`)
            break

        case "10":
            console.log(`Oktober`)
            break

        case "11":
            console.log(`November`)
            break

        case "12":
            console.log(`Desember`)
            break
        
        default:
            console.log("Bulan Tidak Valid!")
    }

    var descending = array.sort(function (value1, value2) {
        return value2 - value1
    })
    console.log(descending)

    var gabungBulan = array2.join("-")
    console.log(gabungBulan)

    var nama = input.join(" ")
    var stringNama = nama.slice(5, 20)

    console.log(stringNama)
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
dataHandling2(input);
