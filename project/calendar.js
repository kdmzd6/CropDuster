
function selyear(selid, options) {
  options = options || {}
  var elem = document.getElementById(selid)
  var yearopt = ""

  if (!options.range) {
    var curdate = new Date()
    var curyear = curdate.getFullYear()
    options.range = [curyear - 10, curyear + 4]
  }

  for (var i = options.range[0]; i< options.range[1]; i++){
    yearopt += "<option value='" + i + "' >" + i + "</option>"
  }
  elem.innerHTML = yearopt
}

selyear('yeartest')
selyear('yeartest1', { range: [1900, 2000] })
  
function selmon() {
  var mon = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"]               
}
  



