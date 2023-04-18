<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-3.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-11
        p.mb-0 Tenga, usted, una jovial bienvenida al estudio del componente formativo “Monitoreo de los vertimientos según normatividad ambiental”. Comience observando con atención el vídeo que se muestra enseguida. ¡Adelante! 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
