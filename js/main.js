// tariffa base km
  const x = 0.21
// costante percentuali
  const percentualeVenti = 20
  const percentualeQuaranta = 40
//  chiedo la distanza
 let km = prompt("Inserire la distanza in km");
 console.log(km)
//  chiedo età passeggero
 let anno = prompt("inserire età del passeggero");
 console.log(anno)

 let tariffa = (km * x);
 console.log(tariffa)
// se il passeggero è minorenne
 if(anno <18){
 let sconto = (km * x) * (percentualeVenti) / 100;
 
 alert( tariffa - sconto);
 console.log(sconto);

 } 
 // se il passeggero è senior
 else if(anno >65) {
    let sconto = (km * x) * (percentualeQuaranta) / 100;
 
    alert( tariffa - sconto)
    console.log(sconto);

 }
//  casi restanti
else if (anno>18&&anno<65)  {
    let tariffa = (km * x);
    alert(tariffa);
    console.log(tariffa);
}

 

 








