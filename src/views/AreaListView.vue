<template>
    <h2>Busqueda :</h2>
    <form class="row g-3">
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Criterio</label>
        <select class="form-select" id="validationCustom04" v-model="criterio">
          <option selected disabled value="">Choose...</option>
          <option value="id">Id</option>
          <option value="NombreArea">Area</option>
          <option value="NombreEncargado">Encargado</option>
          <option value="NroFuncionario">Nro Funcionario</option>
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
                <th>Area</th>
                <th>Encargado</th>
                <th>Nro Funcionario</th>
                <th>Acciones</th>                
            </tr>
        </thead>
        <tbody>
            <tr v-for="(area,index) in ListaArea" :key="index">
                <td>{{area.id}}</td>
                <td>{{area.NombreArea}}</td>
                <td>{{area.NombreEncargado}}</td>
                <td>{{area.NroFuncionario}}</td>
                <td>
                    <button class="btn btn-primary m-2" @click="Accion('editar',area.id)">Editar</button>
                    <button class="btn btn-danger m-2" @click="Accion('eliminar',area.id)">Eliminar</button>
                </td>
            </tr>
        </tbody>
       </table>

  </div>
</template>

<script>
export default {
    name: 'AreaListView',
    data(){
             return {
                ListaArea : [],
                ListaAreaTemp : [],
                criterio : null,
                valor : null
             }
    },
    mounted() {
            this.getListArea();
    },
    methods: {
        buscar(){
                console.log(this.ListaAreaTemp ,' - bruno');

                if(this.criterio === 'id'){
                    this.ListaArea = this.ListaAreaTemp.filter(item => item.id.toString().toLowerCase().indexOf(this.valor) > -1)      
                }
                if(this.criterio === 'NombreArea'){
                    this.ListaArea = this.ListaAreaTemp.filter(item => item.NombreArea.toLowerCase().indexOf(this.valor) > -1)      
                }
                if(this.criterio === 'NombreEncargado'){
                    this.ListaArea = this.ListaAreaTemp.filter(item => item.NombreEncargado.toLowerCase().indexOf(this.valor) > -1)      
                }
                if(this.criterio === 'NroFuncionario'){
                    this.ListaArea = this.ListaAreaTemp.filter(item => item.NroFuncionario.toLowerCase().indexOf(this.valor) > -1)      
                }
        },
        getListArea () {
                // console.log(process.env);
                axios({
                    method: "get",
                    url: process.env.VUE_APP_RUTA_API+"/area"
                })
                    .then(response => {
                        this.ListaArea = response.data;
                        this.ListaAreaTemp = response.data;
                        console.log(response);
                    })
                    .catch(e => console.log(e));
        },
        Accion (opcion, id)  {
            if (opcion === 'editar') {
                this.$router.push({ name: 'areasModificar', params: { id } });
            } else {
                if (confirm("Esta seguro de eliminar el area")) {
                    axios({
                        method: "delete",
                        url: process.env.VUE_APP_RUTA_API+"/area/" + id
                    })
                        .then(response => {
                            this.getListArea();
                            console.log(response);
                        })
                        .catch(e => console.log(e));
                }
            }
        }
    }
}
</script>

<style>

</style>