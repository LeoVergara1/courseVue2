var data = {
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
}
 Vue.component('titulo', {
   template: '<h2>{{titulo}}</h2>',
   data: function(){
     return { titulo: 'Lista de Tareas'}
   }
 })

 Vue.component('nueva-tarea',{
   template: `
   <div class="input-group">
   <input type="text" @keyup.enter="agregarTarea" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" class="form-control">
   <span class="input-group-btn">
   <button type="button" v-on:click="agregarTarea" class="btn btn-primary">Agregar</button>
   </span>
   </div>
   `,
   data: function() {
    return data;
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
 const app = new Vue({
   el:"#app",
   data: data,
   methods: {
    borrar: function(indice){
      this.tareas.splice(indice,1)
    }
   }

 })