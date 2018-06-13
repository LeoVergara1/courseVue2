var app = new Vue({
  el:"#vm",
    data: {
      paises: ["México", "España", "Estados Unidos"],
      paises2: [{nombre: "Mésxico"}, {nombre: "España"}, {nombre: "Estados Unidos"}],
      empleado: {
        nombre: "Brandon",
        edad: 13,
        nacionalidad: "México",
        profesion: "Desarrollador"
      }
    }
})