<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Informes de seguimiento y monitoreo de vertimientos  
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p El monitoreo ambiental se hace después de que se establecen las medidas de manejo ambiental para el proyecto minero. Es un procedimiento válido para verificar la eficacia de la ejecución de dichas medidas. Para realizar el monitoreo se seleccionan indicadores específicos, por medio de los cuales se pueden identificar los cambios que está generando el proyecto. Los datos obtenidos en el monitoreo permiten reevaluar acciones con el fin de corregir, minimizar o mitigar las posibles afectaciones (Guía minero ambiental de explotación, s.f). 
          br
          br
          |Sobre los informes de seguimiento y monitoreo de vertimiento, tenga presente: 
      .col-lg-5.col-8: img(src='@/assets/curso/temas/tema7/1.png', alt='')
    AcordionA.mb-5.acordion-icon(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      div(titulo="¿Con qué fin?")
        p Realizar mediciones sistemáticas y hacerle seguimiento a cada uno de los componentes, en los cuales, sus actividades produzcan impactos y frente a los que se implementan medidas de manejo. También con el objetivo de confrontar los resultados del monitoreo con los criterios de calidad establecidos por la normatividad ambiental vigente, o por los estándares de calidad que hayan sido adoptados por cada proyecto minero, con el fin de establecer la eficiencia y eficacia de las medidas de control y de manejo implementados. Esta evaluación deberá consignarse en informes que se rendirán periódicamente tanto a nivel interno como externo. 
      div(titulo="Monitoreo y control ")
        p Se debe dejar registro de todas las reuniones sostenidas tanto con las entidades como con las comunidades involucradas. Así mismo, se debe mantener en el sitio de la obra, fotocopia de las licencias, permisos y autorizaciones correspondientes. De deben llevar registros, al menos semanales, de las principales variables del proceso y material reciclado.  
      div(titulo="Acuerdos interinstitucionales ")
        p Para evitar situaciones de dualidad es indispensable el establecimiento de acuerdos interinstitucionales entre las corporaciones y las ESP para que los controles de vertimientos sean realizados por una sola institución; o en caso de que no sea factible, para que los requerimientos sean unificados e incluyan tanto los aspectos ambientales como de protección de la red de alcantarillado. Las autoridades ambientales pueden celebrar convenios con las ESP que eviten duplicidades en el monitoreo a los industriales y que permitan compartir información entre las dos entidades. 
      div(titulo="Programas de monitoreo ")
        p Para asegurar el cumplimiento de las normas, es necesario disponer de un programa de control, basado en la toma y análisis de muestras aleatorias. Se considera apropiado establecer una frecuencia diferencial de las visitas de control, por parte de la autoridad ambiental, y una exigencia a las industrias de reportes de la calidad de los vertimientos, de acuerdo con la carga contaminante. Los muestreos se hacen con mayor frecuencia en las industrias prioritarias y al azar en las de poco interés. De este modo se optimiza el uso de los recursos técnicos y humanos disponibles para el control.  
      div(titulo="Procedimientos establecidos ")
        p En cualquier caso, para la realización de caracterizaciones industriales se deben seguir los procedimientos establecidos por el IDEAM para identificación, manejo de muestras y realización de muestreos. Es importante verificar que los laboratorios que realizan las caracterizaciones estén debidamente acreditados ante esa institución. 
      div(titulo="Monitoreo fisicoquímico del suelo receptor ")
        p Hacer toma de muestras puntuales y análisis de los siguientes parámetros fisicoquímicos en cada área de disposición: RAS, conductividad eléctrica, infiltración, pH, CIC, textura, estructura, densidad aparente, nitratos, sulfatos, indicadores de óxido-reducción por color, porcentaje de sodio intercambiable y contenido de humedad. Para disposición de aguas residuales industriales se deberán medir adicionalmente grasas y aceites, hidrocarburos totales y bario. Las muestras se deberán tomar siguiendo los protocolos vigentes por el IDEAM. Los análisis se deberán efectuar por laboratorios que cuenten con la respectiva acreditación por parte del IDEAM para los métodos analíticos requeridos en cada uno de los parámetros mencionados. La frecuencia será semestral. 
        

</template>

<script>
export default {
  name: 'Tema7',
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
