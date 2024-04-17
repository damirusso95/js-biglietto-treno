// tariffa base km
 x = 0.21
 percentualeVenti = 20
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
 
 alert( tariffa - sconto)
 console.log(sconto);

 } else if{
    
 }

 

 








