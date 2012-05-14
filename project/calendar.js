Array.prototype.map.call(document.getElementsByClassName('date'), genDate)
function genDate(dateElem) {
  var num = Math.floor(Math.random() * 10000)
    , yearId = 'date-year-' + num
    , monthId = 'date-month-' + num
    , dayId = 'date-day-' + num

  dateElem.innerHTML += '<select id="' + monthId + '"></select>'
    + '<select id="' + dayId + '"></select>' + '<select id="' + yearId + '"></select>'

  selday(dayId)
  selmon(monthId)
  selyear(yearId)
  var month = document.getElementById(monthId)
  month.onchange = function() {
    selday(dayId, month.value)
  }
}

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

//selyear('yeartest')
//selyear('yeartest1', { range: [1900, 2000] })
//selmon('selectmonth')
  
function selmon(selmonth) {
  var mon = ["", "January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var choice = document.getElementById(selmonth)
  var popmon = "" 

  for (var i = 0; i<13; i++){
   popmon += "<option value='"  + i + "'>"  + mon[i] +'</option>'
  }

  choice.innerHTML = popmon
}

function selday(daychoice, month) {
  console.log(daychoice)
 
  var daybymonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  
  , days = document.getElementById(daychoice)
  , daytext = ""
  , numdays = daybymonth[month - 1] 
  

  if (daychoice != null) {
   for (var i = 1; i<numdays +1; i++) {
     daytext += "<option value='" + i + "'>" + i + "</option>"
    }
    days.innerHTML = daytext
  }

} 







