<template>
  <div>
    <iframe :src="calendlyURL" width="100%" height="500" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calendlyURL: 'http://localhost:3005', // Cambia la URL a la de tu servidor local
    };
  },
};
</script>
