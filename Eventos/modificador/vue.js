new Vue({
  el:"#vm",
    data: {
      x: 0,
      y: 0,
      contador: 0
    },
    methods: {
      mostrarUbicacion: function(evento) {
        this.x = evento.clientX;
        this.y = evento.clientY;
      },
      suma: function (cantidad) {
        this.contador += cantidad;
      }
    }
})