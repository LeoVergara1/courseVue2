 Vue.component('titulo', {
   template: '<h2>{{titulo}}</h2>',
   data: function(){
     return { titulo: 'Lista de Tareas'}
   }
 })

 const app = new Vue({
   el:"#app",
   data: {
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
      },
      borrar: function(indice){
        this.tareas.splice(indice,1)
      }
   }
 })