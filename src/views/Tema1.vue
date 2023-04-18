<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Bases conceptuales
    .bg-1.p-4.mb-4
      .row.justify-content-center.mb-5
        .col-lg-6(data-aos="fade-left")
          p Para adentrarse, con mayor propiedad, en el estudio de este componente, se debe dar un vistazo consciente a los términos y conceptos que favorecerán una mejor comprensión, análisis, síntesis y asimilación de cada contenido. 
        .col-lg-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/1.png', alt='')
      .row.justify-content-center
        .col-lg-10
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/pdf.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col-10.mb-3.mb-sm-0
                    h4.mb-1 Para poder completar y profundizar en el estudio de los factores que influyen en la representatividad, se invita a hacer lectura consciente y atenta.
                    p.text-small Anexo1 _OtrosFactoresInfluyenEnRepresentatividad
                  .col.mb-3.mb-sm-0
                    a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
                      span Descargar 
                      i.fas.fa-file-download
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
