var app = new Vue({
  el:".vue",
    data: {
      mensaje: "Aprende Vue.js Fácilmente",
      src: "https://vuejs.org/images/logo.png"
      },
    methods: {
      showingMessage: function () {
        return this.mensaje;
      }
    }
})