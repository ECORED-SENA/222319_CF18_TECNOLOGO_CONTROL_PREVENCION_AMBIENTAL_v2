<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Trámite de tasa retributiva 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p Es un cobro reglamentado por el Ministerio Ambiente, Vivienda y Desarrollo Territorial desde 1997 e implementado por la autoridad ambiental con el propósito de reducir la contaminación hídrica, al mínimo costo económico posible.
          br
          br
          |Estos son algunos aspectos que, sobre el trámite de tasa retributiva, usted debe tener presente: 
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/1.png', alt='')
    AcordionA.acordion-icon.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      div(titulo="Problemática de contaminación")
        p La inadecuada recolección, tratamiento y disposición de las aguas residuales, han generado una creciente problemática de contaminación ambiental y sanitaria principalmente en las fuentes abastecedoras de agua, limitando así la disponibilidad del recurso hídrico y restringiendo su uso en el país. Con las tasas retributivas por vertimientos puntuales, junto a los demás instrumentos y políticas conducentes a la descontaminación hídrica, se contribuye en la solución de esta problemática. 
      div(titulo="Tasa retributiva ")
        p La tasa retributiva es un instrumento económico diseñado para incentivar el cambio de comportamiento en los agentes económicos internalizando en sus decisiones de producción el costo del daño ambiental que ocasiona su contaminación, de forma tal que se alcance el punto en que sea más racional económicamente no contaminar que pagar la tasa; lo que se convierte así en la decisión más costo-eficiente para el individuo y para la sociedad en su conjunto.  
      div(titulo="¿Quién debe pagar? ")
        p Todas las personas, industrias y empresas de servicios públicos que utilizan el Recurso Hídrico como fuente receptora de vertimiento están en la obligación de pagar tasa retributiva. 
      div(titulo="¿Quién cobra y recauda la Tasa retributiva? ")
        p • Las Corporaciones Autónomas Regionales. 
          br
          br
          |• Las Corporaciones para el Desarrollo Sostenible. 
          br
          br
          |• Los grandes centros urbanos. 
          br
          br
          |• Los establecimientos públicos ambientales. 
          br
          br
          |• Parques nacionales naturales.  

  
      div(titulo=" ¿Cuál es la destinación de los recursos? ")
        p Los recursos provenientes del recaudo de la tasa retributiva por vertimientos al recurso hídrico, se destinarán principalmente a proyectos de inversión en descontaminación hídrica y en monitoreo de la calidad del agua. 
      div(titulo="Proyectos de inversión")
        p En los proyectos de inversión se contempla: mejoramiento, monitoreo y evaluación de la calidad del recurso hídrico; elaboración y ejecución de Planes de Ordenamiento del Recurso Hídrico e inversiones en sistemas de tratamiento (incluido interceptores y emisarios finales). Hasta el 10% del recaudo se podrá utilizar el en la cofinanciación de estudios y diseños asociados a estos sistemas (MADS, 2020).
      div(titulo="¿Y cuál norma rige? ")
        p El decreto 2667 de 2012 reglamenta la tasa retributiva por la utilización directa e indirecta del agua como receptor de los vertimientos puntuales, y se toman otras determinaciones. 

</template>

<script>
export default {
  name: 'Tema4',
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
