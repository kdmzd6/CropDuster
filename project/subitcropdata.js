  document.getElementById("Submit").onclick=function() {
    var crop = document.getElementById("crop").textContent
      numbush = document.getElementById("numbush").value
      priceper = document.getElementByID("priceper").value
      property = document.getElementByID("property").textContent
      base = document.getElementByID("base").value
      acres = document.getElementByID("acres").value
       
    alert (numbush)
    calculations(numbush, priceper, base, acres)
  }
    

