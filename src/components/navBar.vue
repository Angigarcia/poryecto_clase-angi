<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-btn
      block 
      v-for="(item,index) in rutas" :key="index"
      color="primary ma-auto pa-auto my-2 px-6" 
      variant="tonal"
      class="d-block"
      @click="url(item.ruta)">
      <span>{{ item.nombre }}</span>
      </v-btn>
     
   
    </v-navigation-drawer>

    <v-app-bar class="bg-pink-lighten-4 text-pink">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    <router-link to="/Acceder" style="text-decoration: none;">
      <v-btn variant="outliend"
      class="bg-pink">
      <span>Acceder</span> 
      </v-btn>
    </router-link>
    </v-app-bar>

    <v-main>
    <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'navBar',
    data: () => ({
    drawer: false,
    rutas: [
      {nombre: 'home', ruta: '/'},
      {nombre: 'about', ruta: '/about'},
      {nombre: 'help', ruta: '/help'},
      {nombre: 'info', ruta: '/help'},
      {nombre: 'Quienes somos', ruta: '/help'},
      {nombre: 'contactenos', ruta: '/help'}
    ]
   }),
   methods: {
    url(ruta){
      this.$router.push(ruta)
    }
   },
  }
</script>