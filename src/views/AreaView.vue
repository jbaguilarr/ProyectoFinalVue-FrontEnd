<template>
  
  <div class="container-fluid">
   
    <h2>{{titulo}}</h2>
    <hr>
    <form @submit.prevent="accion()">
      <!-- <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label" style="font-weight: bold;">ID</label>
        <div class="col-sm-10">
          <input type="text" disabled class="form-control" v-model="obArea.id" placeholder="ID">
        </div>
      </div> -->
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label" style="font-weight: bold;">AREA</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="obArea.NombreArea" placeholder="NUEVA AREA">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label" style="font-weight: bold;">ENCARGADO</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="obArea.NombreEncargado" placeholder="NUEVO ENCARGADO">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label" style="font-weight: bold;">NRO FUNCIONARIO</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="obArea.NroFuncionario" placeholder="CANTIDAD FUNCIONARIO">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">{{etiquetaGuardar}}</button>
    </form>
  </div>
</template>

<script>
export default {
     name: 'AreaView',
     data(){
         return {
             codigo : null,
             titulo : '',
             etiquetaGuardar : '',
             obArea : {
                        id : null,
                        NombreArea: null,
                        NombreEncargado: null,
                        NroFuncionario : null
                      }
         }
     },
     created(){
          this.codigo = 'nuevo';
          this.titulo = 'Nueva Area' ;
          this.etiquetaGuardar = 'Guardar' ;
            this.generarCodigo();
         
          console.log(this.$route.params.id,' entro aqui')
     },
     methods: {
          accion (){
               
                  axios({
                          method: "post",
                          url: `${process.env.VUE_APP_RUTA_API}/area`,
                          data: this.obArea
                      })
                      .then(response => {
                          console.log(response);
                          this.$router.push({ name: 'areas' });
                      })
                      .catch(e => console.log(e));
               
          },
       generarCodigo(){
             //area?_sort=id&_order=desc&_limit=1
            
          axios({
                method: "get",
                url: process.env.VUE_APP_RUTA_API+"/area?_sort=id&_order=desc&_limit=1"
            })
            .then(response => {
                let dato = response.data;               
                let uuid =dato ? dato[0].id + 1  : 1;

                this.obArea.id = uuid;
                console.log(uuid);
            })
            .catch(e => console.log(e));
        }
     }
}
</script>

<style>

</style>