<template>
    <h2>Busqueda :</h2>
    <form class="row g-3">
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Criterio</label>
        <select class="form-select" id="validationCustom04" v-model="criterio">
          <option selected disabled value="">Choose...</option>
          <option value="id">Id</option>
          <option value="TipoActivo">Tipo Activo</option>
          <option value="Marca">Marca</option>
          <option value="Modelo">Modelo</option>
          <option value="Estado">Estado</option>
          <option value="AreaId">AreaID</option>
        </select>
      </div>
      <div class="col-md-3">
        <label for="validationCustom03" class="form-label">Valor</label>
        <input type="text" class="form-control" id="validationCustom03" v-model="valor">
        <div class="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      
      <div class="col-12">
        <button class="btn btn-primary"  @click.prevent="buscar()">Buscar</button>
      </div>
    </form>
    <br/>
    <hr/>
    <h2>Lista de areas</h2>
    <div class="container-sm">
        <table class="table">
          <thead class="table-dark">
              <tr>
                  <th>Codigo</th>
                  <th>Activo</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Estado</th>
                  <th>Area</th>
                  <th>Acciones</th>                
              </tr>
          </thead>
          <tbody>
              <tr v-for="(activo,index) in ListaActivo" :key="index">
                  <td>{{activo.id}}</td>
                  <td>{{activo.TipoActivo}}</td>
                  <td>{{activo.Marca}}</td>
                  <td>{{activo.Modelo}}</td>
                  <td>{{activo.Estado}}</td>
                  <td>{{activo.AreaId}}</td>
                  <td>
                      <button class="btn btn-primary m-2" @click="Accion('editar',activo.id)">Editar</button>
                      <button class="btn btn-danger m-2" @click="Accion('eliminar',activo.id)">Eliminar</button>
                  </td>
              </tr>
          </tbody>
         </table>
  
    </div>
  </template>
  
  <script>
  export default {
      name: 'ActivoListView',
      data(){
               return {
                  ListaActivo : [],
                  ListaActivoTemp : [],
                  criterio : null,
                  valor : null
               }
      },
      mounted() {
             this.getListActivos();
      },
      methods: {
        buscar(){
                console.log(this.ListaActivoTemp ,' - bruno');

                if(this.criterio === 'id'){
                    this.ListaActivo = this.ListaActivoTemp.filter(item => item.id.toString().toLowerCase().indexOf(this.valor) > -1)      
                }
                if(this.criterio === 'TipoActivo'){
                    this.ListaActivo = this.ListaActivoTemp.filter(item => item.TipoActivo.toLowerCase().indexOf(this.valor) > -1)      
                }
                if(this.criterio === 'Marca'){
                    this.ListaActivo = this.ListaActivoTemp.filter(item => item.Marca.toLowerCase().indexOf(this.valor) > -1)      
                }
                if(this.criterio === 'Modelo'){
                    this.ListaActivo = this.ListaActivoTemp.filter(item => item.Modelo.toLowerCase().indexOf(this.valor) > -1)      
                }
                if(this.criterio === 'Estado'){
                    this.ListaActivo = this.ListaActivoTemp.filter(item => item.Estado.toLowerCase().indexOf(this.valor) > -1)      
                }
                if(this.criterio === 'AreaId'){
                    this.ListaActivo = this.ListaActivoTemp.filter(item => item.AreaId.toString().toLowerCase().indexOf(this.valor) > -1)      
                }
        },
         getListActivos () {
                  // console.log(process.env);
                axios({
                      method: "get",
                      url: process.env.VUE_APP_RUTA_API+"/activos"
                  })
                    .then(response => {
                        this.ListaActivo = response.data;
                        this.ListaActivoTemp = response.data;
                        console.log(response);
                    })
                    .catch(e => console.log(e));
          },
          Accion (opcion, id)  {
              if (opcion === 'editar') {
                  this.$router.push({ name: 'activosModificar', params: { id } });
              } else {
                  if (confirm("Esta seguro de eliminar el activo")) {
                      axios({
                          method: "delete",
                          url: process.env.VUE_APP_RUTA_API+"/activos/" + id
                      })
                          .then(response => {
                              this.getListActivos();
                              console.log(response);
                          })
                          .catch(e => console.log(e));
                  }
              }
          },
        async  getNombreArea(codigo){
               let dato = await this.getArea(codigo);
            //    console.log(dato.NombreArea);
               
               return dato.NombreArea;
          },
          getArea(codigo){
          
            return axios({
                    method: "get",
                    url: process.env.VUE_APP_RUTA_API+"/area/"+codigo
                })
                .then(response =>response.data)
                .catch(e => console.log(e));
                // return valor;
            },
      }
  }
  </script>
  
  <style>
  
  </style>