<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Registro y permiso de vertimientos 
    .bg-2.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-left")
          p.mb-0 Registro de vertimientos: es la facultad que tiene la entidad para llevar y sentar la información de manera ordenada, sucesiva y completa referente a los vertimientos realizados a la red de alcantarillado público, para la administración del recurso hídrico en el Distrito Capital. Todo usuario que genere vertimientos de aguas residuales no domésticas (sustancias de interés ambiental y sustancias de interés sanitario), exceptuando los vertimientos de agua residual doméstica realizados al sistema de alcantarillado público, está obligado a solicitar el registro de sus vertimientos ante la autoridad ambiental Secretaría Distrital Del Ambiente (2015). 
        .col-lg-5(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/1.png', alt='')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
