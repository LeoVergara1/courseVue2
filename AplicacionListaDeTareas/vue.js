 const app = new Vue({
   el:"#app",
   data: {
      titulo: "Lista de tareas",
      tareas:[
        {
          texto: "Aprender Vue js",
          terminada: false
        },
        {
          texto: "Aprender ANgular js",
          terminada: false
        },
        {
          texto: "Aprender Ionic 2",
          terminada: false
        }
      ],
      nuevaTarea: ""
   },
   methods: {
      agregarTarea: function () {
        let texto = this.nuevaTarea.trim();
        if(texto){
          this.tareas.push({
            texto: texto,
            terminada: false
          })
        }
        this.nuevaTarea = ""
      }
   }
 })