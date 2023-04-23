var btn = document.querySelector("#calcButton");

btn.addEventListener("click", function(e) {

   e.preventDefault();

   const gasolineValue = document.querySelector("#gasolineValue");
   var gValue = gasolineValue.value;
   console.log(gValue);

   const ethanolValue = document.querySelector("#ethanolValue");
   var eValue = ethanolValue.value;
   console.log(eValue);

   var calcResult = eValue / gValue;
   console.log(calcResult);

   var modalGas = document.getElementById("modalGas");
   var modalEth = document.getElementById("modalEth");
   var modalBoth = document.getElementById("modalBoth");

   if (calcResult > 0.7){
      modalGas.style.display = "flex";
   }
   else if (calcResult < 0.7){
      modalEth.style.display = "flex";
   }
   else if (calcResult == 0.7) {
      modalBoth.style.display = "flex";
   }
   
   function clean(){
      document.getElementById("gasolineValue").value="";
      document.getElementById("ethanolValue").value="";
   }

   var btnModal = document.querySelector("#btnModal");

   btnModal.addEventListener("click" , function(){
      modalEth.style.display = "none";
      modalGas.style.display = "none";
      modalBoth.style.display = "none";
      clean();
   })
   modalGas.addEventListener("click" , function(){
      modalGas.style.display = "none";
      clean();
   })
   modalEth.addEventListener("click" , function(){
      modalEth.style.display = "none";
      clean();
   })
   modalBoth.addEventListener("click" , function(){
      modalBoth.style.display = "none";
      clean();
   })

})
