// declarando variables
const pantallaCanvas = document.getElementById('pantalla_canvas')
let lienzo = pantallaCanvas.getContext('2d')
const colorUsuario = document.getElementById('color-usuario')
colorUsuario.value = '#008000'
let colorPincel = colorUsuario.value
let movimeintoPX = 10
let x = 199, y = 199
let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

// funcion que cambia el color del pincel
function cambioColorPincel(){
  colorPincel = colorUsuario.value
}
colorUsuario.addEventListener('change', cambioColorPincel)

// funcion que dibuja una linea
let dibujarLinea = function(color, xinicial, yinicial, xfinal, yfinal, lienzo){

  lienzo.beginPath()
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal)
  
  lienzo.lineWidth = 10
  lienzo.strokeStyle = color
  lienzo.stroke()

}


let dibujarEnCanvas = function (e) {

  dibujarLinea(colorPincel, e.pageX, e.pageY, e.pageX, (e.pageY - movimeintoPX), lienzo)
  
/*
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorPincel, x, y, x, (y - movimeintoPX), lienzo)
      y -= movimeintoPX
      break;

    case teclas.DOWN:
      dibujarLinea(colorPincel, x, y, x, (y + movimeintoPX), lienzo)
      y += movimeintoPX
      break;

    case teclas.LEFT:
      dibujarLinea(colorPincel, x, y, (x - movimeintoPX), y, lienzo)
      x -= movimeintoPX
      break;

    case teclas.RIGHT:
      dibujarLinea(colorPincel, x, y, (x + movimeintoPX), y, lienzo)
      x += movimeintoPX
      break;

    default:
      console.log("Otra tecla")
  }*/
}


// document.addEventListener("keyup", dibujarEnCanvas)
pantallaCanvas.addEventListener('mousedown', function () {
  pantallaCanvas.addEventListener('mousemove', dibujarEnCanvas)
})
pantallaCanvas.addEventListener('mouseup', function(){
  pantallaCanvas.removeEventListener('mousemove', dibujarEnCanvas)
})
