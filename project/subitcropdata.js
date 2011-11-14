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
    

function example(a, b, c, d, e) {
  return a + b + c + d + e
}

function example1(obj) {
  return obj.a + obj.b + obj.c + obj.d + obj.e
}


example(1,2,3,4,5)
example1({a: 1, b: 2, c: 3, d: 4, e: 5 })
