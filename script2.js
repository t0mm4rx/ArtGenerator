var C = 2, P = 50, R = 100, V = .1, N= 1000, A = 100, M_A = 200, L = 100

var pts = []
var dx = 0
var dy = 0
var vx = 0
var vy = 0

var bg = [0, 0, 0]

function setup()
{
  createCanvas(window.innerWidth, window.innerHeight)

  fill(255)
  noStroke()
  rect(0, 0, width, height)

  init()

}

function init()
{
  C = parseInt(o_color.value)
  P = parseInt(o_position.value)
  R = parseInt(o_radius.value)
  V = parseInt(o_speed.value)
  N = parseInt(o_n.value)
  A = parseInt(o_alpha.value)
  M_A = parseInt(o_min_alpha.value)
  L = parseInt(o_light.value)
  pts = []
  var color = [Math.random() * 255, Math.random() * 255, Math.random() * 255]
  pos = [Math.random() * width, Math.random() * height]

  ellipseMode(CENTER)

  for (var i = 0; i < N; i++)
  {
      /*fill(color)
      ellipse(pos[0], pos[1], Math.random() * R + 10)*/
      var c_a = Array.from(color)
      c_a.push(M_A + Math.random() * A)
      pts.push({'pos': pos, 'color': c_a, 'radius': Math.random() * R + 10})

      pos = randomize(pos, P)
      color = randomize(color, C)
      for (var x = 0; x < color.length; x++)
      {
        if (color[x] < 0)
        {
          color[x] = 0
        }
        if (color[x] > 255)
        {
          color[x] = 255
        }
      }

  }

  bg = light(get_bg(), L)
  vx = (Math.random() - .5) * V * .1
  vy = (Math.random() - .5) * V * .1
  dx = 0
  dy = 0

  /*pts.push({
    'radius': 100,
    'color': [255, 200, 150, 255],
    'pos': [100, 1000]
  })*/
}

function randomize(arr, a)
{

  new_arr = []
  for (var i = 0; i < arr.length; i++)
  {
    new_arr.push(arr[i] + (Math.random() - .5) * 2 * a)
  }
  return new_arr

}

function draw()
{

  fill(bg)
  rect(0, 0, width, height)

  dx += vx
  dy += vy

  vx += (Math.random() - .5) * V * .01
  vy += (Math.random() - .5) * V * .01

  if (vx > V)
  {
    vx = V
  }
  if (vx < -V)
  {
    vx = -V
  }
  if (vy > V)
  {
    vy = V
  }
  if (vy < -V)
  {
    vy = -V
  }


  for (var i = 0; i < pts.length; i++)
  {
    var pt = pts[i]
    fill(pt.color)

    var n_pos = Array.from(pt.pos)
    n_pos[0] = (n_pos[0] + dx * (i / pts.length))
    n_pos[1] = (n_pos[1] + dy * (i / pts.length))

    if (n_pos[0] > width)
    {
      n_pos[0] = n_pos[0] % width
    }
    if (n_pos[0] < 0)
    {
      n_pos[0] = width + n_pos[0] % width
    }
    if (n_pos[1] > height)
    {
      n_pos[1] = n_pos[1] % height
    }
    if (n_pos[1] < 0)
    {
      n_pos[1] = height + n_pos[1] % height
    }

    ellipse(n_pos[0], n_pos[1], pt.radius)
  }

}


function get_bg()
{

  var r = 0, g = 0, b = 0
  for (var pt of pts)
  {
    r += pt.color[0]
    g += pt.color[1]
    b += pt.color[2]
  }
  return [r / pts.length, g / pts.length, b / pts.length]

}

function light(c, b)
{
  a = []
  a.push(c[0] + b)
  a.push(c[1] + b)
  a.push(c[2] + b)
  return a
}

function inv(c)
{
  a = []
  a.push(255 - c[0])
  a.push(255 - c[1])
  a.push(255 - c[2])
  return a
}
