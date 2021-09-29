function Calcular()
{   
    var grades =  parseFloat((document.getElementById("grade1")).value);
    grades += parseFloat((document.getElementById("grade2")).value);
    grades += parseFloat((document.getElementById("grade3")).value);
    grades += parseFloat((document.getElementById("grade4")).value);
    grades = grades/4
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = "<h2>"+grades+"</h2>";
    console.log(resultado);
//     console.log(document.getElementById("grade2").value);
//     console.log(document.getElementById("grade3").value);
//     console.log(document.getElementById("grade4").value);
//     console.log(document.getElementById("grade4").value);
// }
}