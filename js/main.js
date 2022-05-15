// declarando variables
let pantallaCanvas = document.getElementById('pantalla_canvas')
let lienzo = pantallaCanvas.getContext('2d')
let color = 'green'
let movimeintoPX = 10
let x = 199, y = 199

let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

let dibujarLinea = function(color, xinicial, yinicial, xfinal, yfinal, lienzo){

  lienzo.beginPath()
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal)
  
  lienzo.lineWidth = 15
  lienzo.strokeStyle = color
  lienzo.stroke()

}

let dibujarEnCanvas = function (evento) {


  switch (evento.keyCode) {
    case teclas.UP:
      console.log("ARRIBA")
      dibujarLinea(color, x, y, x, (y - movimeintoPX), lienzo)
      y -= movimeintoPX
      break;

    case teclas.DOWN:
      console.log("ABAJO")
      dibujarLinea(color, x, y, x, (y + movimeintoPX), lienzo)
      y += movimeintoPX
      break;

    case teclas.LEFT:
      console.log("IZQUIERDA")
      dibujarLinea(color, x, y, (x - movimeintoPX), y, lienzo)
      x -= movimeintoPX
      break;

    case teclas.RIGHT:
      console.log("DERECHA")
      dibujarLinea(color, x, y, (x + movimeintoPX), y, lienzo)
      x += movimeintoPX
      break;

    default:
      console.log("Otra tecla")
  }
}

document.addEventListener("keyup", dibujarEnCanvas)
