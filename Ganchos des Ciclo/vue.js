var app = new Vue({
  el:"#vm",
    data: {
      mensaje: "Ciclo de vida",
      },
      beforeCreated: function () {
        console.log("Llamando beforeCreated");
      },
      created: function () {
        console.log("Llamando created")
      },
      beforeMount: function () {
        console.log("Llamando beforeMount");
      },
      mount: function () {
        console.log("Llamando Moount")
      },
      beforeUpdated: function () {
        console.log("Llamando beforeUpdated");
      },
      updated: function () {
        console.log("Llamando updated")
      },
      beforeDestroy: function () {
        console.log("Llamando beforeDestroy");
      },
      destroyed: function () {
        console.log("Llamando Destroy¡")
      },
      methods: {
        destrouir: function() {
          this.$destroy()
        }
      }
})