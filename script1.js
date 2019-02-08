var C = 3, P = 50, R = 100, N = 1000, M = 200

function setup()
{
  createCanvas(window.innerWidth, window.innerHeight)

  fill(255)
  noStroke()
  rect(0, 0, width, height)

  color = [Math.random() * 255, Math.random() * 255, Math.random() * 255]
  pos = [Math.random() * width, Math.random() * height]

  ellipseMode(CENTER)

  for (var i = 0; i < N; i++)
  {
      fill(color)
      ellipse(pos[0], pos[1], Math.random() * R + 10)

      pos = randomize(pos, P)

      if (pos[0] < 0)
      {
        pos[0] = width
      }
      if (pos[0] > width)
      {
        pos[0] = 0
      }
      if (pos[1] < 0)
      {
        pos[1] = height
      }
      if (pos[1] > height)
      {
        pos[1] = 0
      }


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

}
