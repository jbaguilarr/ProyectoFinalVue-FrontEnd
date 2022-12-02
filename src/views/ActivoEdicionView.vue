<template>
    <div class="container-fluid">
      <h2>{{titulo}}</h2>
      <hr>
      <form @submit.prevent="accion()">
        <div class="row mb-3" v-if="!this.nuevo">
          <label for="inputEmail3" class="col-sm-2 col-form-label" style="font-weight: bold;">ID</label>
          <div class="col-sm-10">
            <input type="text" disabled class="form-control" v-model="obActivo.id" placeholder="ID">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label" style="font-weight: bold;">TIPO ACTIVO</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="obActivo.TipoActivo" placeholder="NUEVO TIPO ACTIVO">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label" style="font-weight: bold;">MARCA</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="obActivo.Marca" placeholder="NUEVA MARCA">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label" style="font-weight: bold;">MODELO</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="obActivo.Modelo" placeholder="NUEVO MODELO">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label" style="font-weight: bold;">ESTADO</label>
          <div class="col-sm-10">
            <!-- <input type="text" class="form-control" v-model="obActivo.Estado" placeholder="NUEVO ESTADO"> -->
            <select class="form-select" v-model="obActivo.Estado">
                    <option  v-for="(value,index) in listEstado" :key="index" :value="value">{{value}}</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label" style="font-weight: bold;">AREA</label>
          <div class="col-sm-10">
              <select class="form-select" v-model="obActivo.AreaId">
                <!-- <option selected disabled value="">Choose...</option> -->
                <option v-for="(area,index) in listArea" :key="index" :value="area.id">{{area.NombreArea}}</option>
              </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">{{etiquetaGuardar}}</button>
      </form>
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'ActivoView',
       data(){
           return {
               codigo : null,
               titulo : '',
               etiquetaGuardar : '',
               nuevo : false,
               listArea : [],
               listEstado : ['NUEVO','USADO','DESUSO'],
               obActivo : {
                          id : null,
                          TipoActivo: null,
                          Marca: null,
                          Modelo : null,
                          Estado : null,
                          AreaId : null
                        }
           }
       },
       created(){
            this.codigo = this.$route.params.id;
            this.titulo =  'Edicion Activo';
            this.etiquetaGuardar = 'Modificar';
            this.getArea();
            this.getActivos();
           
            
            console.log(this.$route.params.id,' entro aqui')
       },
       methods: {
            accion (){
                
                    axios({
                            method: "patch",
                            url: `${process.env.VUE_APP_RUTA_API}/activos/${this.obActivo.id}`,
                            data: this.obActivo
                        })
                        .then(response => {
                            console.log(response);
                            this.$router.push({ name: 'activos' });
                        })
                        .catch(e => console.log(e));
                
            },
            getActivos(){
              axios({
                  method: "get",
                  url: process.env.VUE_APP_RUTA_API+"/activos/"+this.codigo
              })
              .then(response => {
                  this.obActivo = response.data;
              console.log(response);
              })
              .catch(e => console.log(e));
          },
          getArea(){
            axios({
                method: "get",
                url: process.env.VUE_APP_RUTA_API+"/area/"
            })
            .then(response => {
                this.listArea = response.data;
            console.log(response);
            })
            .catch(e => console.log(e));
        },
        
       }
  }
  </script>
  
  <style>
  
  </style>