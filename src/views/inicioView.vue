<template>
    <navBar> 
      <HelloWorld/>
    </navBar>
    <FooterPie />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import navBar from '../components/navBar.vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  import  FooterPie from '@/components/FooterPie.vue';
  
  
  export default defineComponent({
    name: 'inicioView',
  
    components: {
    navBar,
    HelloWorld,
    FooterPie,
   
},
  });
  </script>