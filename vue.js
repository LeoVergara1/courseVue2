var app = new Vue({
  el:".vue",
    data: {
      mensaje: "Aprende Vue.js Fácilmente"
      },
    methods: {
      showingMessage: function () {
        return this.mensaje;
      }
    }
})