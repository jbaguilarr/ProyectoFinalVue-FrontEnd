<template>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">F&F</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ">
                <!-- <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/areas">Area</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/activos">Activos</router-link>
                </li> -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Area
                    </a>
                    <ul class="dropdown-menu">
                        <li><router-link class="dropdown-item" to="/areas">Lista areas</router-link>  </li>
                        <li><router-link class="dropdown-item" to="/areas/nuevo">Nueva area</router-link> </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Activos
                    </a>
                    <ul class="dropdown-menu">
                        <li><router-link class="dropdown-item" to="/activos">Lista activos</router-link></li>
                        <li><router-link class="dropdown-item" :to="{ name:'activosNuevo',force:true}" >Nuevo activo</router-link></li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>