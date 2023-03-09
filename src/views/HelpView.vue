<template>
   <navBar>
    <LoremImp />
   </navBar>
   <FooterPie />
</template>

<script>

  
  // Components
  import navBar from '@/components/navBar.vue';
  import LoremImp from '@/components/LoremImp.vue';
  import  FooterPie from '@/components/FooterPie.vue';
  
  export default ({
    components: {
    navBar,
    LoremImp,
    FooterPie
},
});
  </script>