function calculations (info) {
  info = info || {}
  var crop = info.crop 
    , numbush = info.numbush 
    , priceper = info.priceper 
    , property = info.property 
    , base = info.base 
    , acres = info.acres 

  if (!crop) crop = "corn"
  if (!numbush) numbush = 133.7
  if (!priceper) priceper  = 5.78
  if (!property) property = "Laddonia"
  if (!base) base = 128.88
  if (!acres) acres = 232.6

  var resultElem = document.getElementById('result')
    ,  onethird = (numbush / 3).toFixed(2)
    ,  incomeacre = (Number(onethird) * priceper).toFixed(2)
    ,  temp = (Number(incomeacre)-Number(base)).toFixed(2)
    ,  bonacre = (Number(temp) * .5).toFixed(2)
    ,  totalbase = (Number(base) * Number(acres)).toFixed(2)
    ,  Bonus = (bonacre * acres).toFixed(2)
    ,  totalrent = (Number(Bonus) + Number(totalbase)).toFixed(2)

    Bonus2 = (((((numbush / 3) * priceper) - base)*.5)*acres).toFixed(2)

     console.log("Bonus per Acre: "  + bonacre)
   console.log("One Third of yield: " + onethird)
   console.log("Income per aCRE: "  + incomeacre)
   console.log("income - base to be halved: " + temp)
   console.log(64.36*232.6)

   resultElem.innerHTML = "Results: <br />"
   + "  Crop: " + crop + "<br />"
   + "  NumBush: " + numbush + "<br />"
   + "  Price: " + priceper + "<br />"
   + "  property: " + property + "<br />"
   + "  Base: " + base + "<br />"
   + "  Acres: " + acres + "<br />"
   + "  Bonus: " + Bonus + "<br />"
   + "Total Base " + (base * acres).toFixed(2) + "<br />"
   + "Total Rent " + property + ": " + totalrent + " <br />"
   + "Bonus float:" + Bonus2 + "<br />"

}
//calculations()
//calculations("food", 133.7, 5.78, "Laddonia")
