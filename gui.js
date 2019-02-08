var open = true
var obj = document.getElementById('config')

var o_color = document.getElementById('color')
var o_position = document.getElementById('position')
var o_radius = document.getElementById('radius')
var o_speed = document.getElementById('speed')
var o_n = document.getElementById('n')
var o_min_alpha = document.getElementById('min_alpha')
var o_alpha = document.getElementById('alpha')
var o_light = document.getElementById('light')

document.addEventListener("keypress", function (e) {keypressed(e.key)});


function keypressed(k)
{
  if (k == "c")
  {
    open = !open
    if (open)
    {
      obj.style.display = "block"
    } else
    {
      obj.style.display = "none"
    }
  }

  if (k=="r")
  {
    init()
  }
}

function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46 && charCode != 45)
      return false
   return true
}
