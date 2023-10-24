<template>
    <header>
        <HeaderApp />
    </header>

    <nav class="sticky-top">
        <MenuApp />
    </nav>

    <main class="content">
        <router-view />
    </main>


    <footer>
        <FooterApp />
    </footer>
</template>



<script>
import HeaderApp from 'C:/Users/aborkowska/groupo3/src/components/HeaderApp.vue';
import MenuApp from 'C:/Users/aborkowska/groupo3/src/components/MenuApp.vue';
import FooterApp from 'C:/Users/aborkowska/groupo3/src/components/FooterApp.vue';

// comentasmos

export default {
  components: {
      HeaderApp,
      FooterApp,
      MenuApp,
   
  }
}



</script>

<style></style>

