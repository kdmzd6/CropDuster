document.getElementById("Submit").onclick=function() {
  var info = {}
  info.crop = document.getElementById("crop").value
  info.numbush = document.getElementById("numbush").value
  info.priceper = document.getElementById("priceper").value
  info.property = document.getElementById("property").value
  info.base = document.getElementById("base").value
  info.acres = document.getElementById("acres").value
  //alert (numbush + " " + crop + " " + property)
  calculations(info)
}
    

