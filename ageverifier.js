var ageVerifier =  function (ages) {
  for (var i = 0; i < ages.length; i++) {
    var age = ages[i];
     if (age < 21) {

       return ("Too young!");

     } else if (age >= 21) {

       return ("Proceed");
     }
   }
}

console.log(ageVerifier[18,20,21,25]);
