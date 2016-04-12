var ageVerifier =  function (age){

   if (age < 21) {
   return ("Too young!");

 } else if (age > 21) {
   return ("Proceed");
 }
};

console.log(ageVerifier(19));
