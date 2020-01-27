function tugas26() {
    var a = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    
    a.forEach(function (item) {
        if ( isFinite([item]) == true ){
            console.log("angka ", item, "NOT infinity") 
        }else{
            console.log("angka ", item, "infinity");
        }
        
    })
}
tugas26();