<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Seguridad de la información 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p Para preservar y asegurar la información, no es suficiente la implantación de controles y procedimientos de seguridad realizados frecuentemente sin un criterio común establecido, es por esto que la Norma ISO 27001, avala la adecuada implantación, gestión y operación de todo lo relacionado con la implantación de un SGSI, siendo la norma más completa que existe en la implantación de controles, métricas e indicadores que permiten establecer un marco adecuado de gestión de la seguridad de la información para las organizaciones. 
      .col-lg-5.col-8: img(src='@/assets/curso/temas/tema8/1.png', alt='') 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #fdf8e4").h-100
          img(src='@/assets/curso/temas/tema8/2.png', alt='' style="width: 170px").m-auto.mb-3
          .d-flex.justify-content-center.mb-3
            .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3
              h4.mb-0 La Norma ISO 27001 define la información como:  
          p La información es un activo que, como otros activos importantes del negocio, tiene valor para la organización y requiere en consecuencia una protección adecuada. 
            br
            br
            |La información adopta diversas formas: Puede estar impresa o escrita en papel, almacenada electrónicamente, transmitida por correo o por medios electrónicos, mostrada en video o hablada en conversación. Debería protegerse adecuadamente cualquiera que sea la forma que tome o los medios por los que se comparta o almacene (Normas ISO, s,f). 
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #fdf8e4").h-100
          img(src='@/assets/curso/temas/tema8/3.png', alt='' style="width: 170px").m-auto.mb-3
          .d-flex.justify-content-center.mb-3
            .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3
              h4.mb-0 Seguridad de la información:
          p En este mismo sentido, los objetivos del Sistema de Gestión de Seguridad de la Información (SGSI) preservan la confidencialidad, es decir el acceso a la información por parte únicamente de quienes estén autorizados. De la misma manera cuida la disponibilidad, en otras palabras, defiende el acceso a la información y los sistemas de tratamiento de esta por parte de los usuarios autorizados cuando lo requieran. Finalmente, resguarda la integridad, entendida como mantenimiento de la exactitud y completitud de la información y sus métodos de proceso. 
    p.mb-5(data-aos='fade-right') Para un mayor entendimiento de la Norma ISO 27001, se debe tener en cuenta los siguientes conceptos: 
    .bg-1.p-5.mb-5
      ul.lista-ul--color
        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Activo:] se refiere a cualquier información o sistema relacionado con el tratamiento de la misma que tenga valor para la organización. 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Autenticidad:] es la garantía de la identidad del usuario que origina una información. Permite conocer con certeza quién envía o genera una información específica 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Trazabilidad:] es la garantía de que en todo momento se podrá determinar quién hizo qué y en qué momento lo hizo 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Análisis de riesgos:] es un proceso que permite comprender la naturaleza del riesgo, determinando su nivel, que proporciona las bases para la evaluación del riesgo y para tomar las decisiones relativas a su tratamiento. 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Gestión de riesgos:] es el proceso por el cual se evalúan los riesgos y se seleccionan y aplican los controles necesarios para mantener el nivel de riesgos a los niveles aceptados por la Dirección. 

        li.d-flex
          i.fas.fa-check
          p.mb-0 Implantación de un sistema de gestión de seguridad de la información según ISO 27001. (2005). http://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/37729 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Análisis cualitativo:] los métodos de análisis cualitativo de riesgo usan categorizaciones descriptivas para describir los impactos o la probabilidad. Son los más sencillos y los que más se usan. Generalmente utilizan listas de verificación de clasificaciones subjetivas del riesgo, como muy alto, alto, medio, bajo y muy bajo. 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Análisis cuantitativo:]  los métodos de análisis cuantitativo utilizan valores numéricos para describir la probabilidad y los impactos de los riesgos, usando datos provenientes de varios tipos de fuentes, como registros históricos, experiencias pasadas, teorías estadísticas, simulaciones y pruebas. 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Análisis semicuantitativo o mixto:] en el análisis semicuantitativo, las clasificaciones descriptivas están asociadas con una escala numérica. Estos métodos se suelen emplear cuando no es posible utilizar un método cuantitativo o cuando se necesita para reducir la subjetividad de los métodos cualitativos. 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Amenaza:] cualquier circunstancia o evento que pueda explotar, intencionadamente o no, una vulnerabilidad específica de un sistema de información y comunicaciones, resultando en una pérdida de confidencialidad, integridad, disponibilidad, autenticidad o trazabilidad de la información manejada o de la integridad o disponibilidad del propio sistema. 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Vulnerabilidad:] cualquier debilidad o falta de control que aumente la probabilidad de que se materialice una de las amenazas a las que están expuestos los activos o los elementos del sistema de información y comunicaciones. 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Impacto:] es la consecuencia que tiene la materialización de una amenaza sobre un activo, sobre un sistema de información y comunicaciones o sobre una organización. 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Riesgo:] es la estimación del grado de exposición a que una amenazase materialice sobre uno o más activos causando daños o perjuicios a la organización. 
    p.mb-5(data-aos='fade-right') A continuación, se presentan las fases del Sistema de Gestión de la Seguridad de la Información, propuesto en la Norma ISO 27001: 
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="Activos de información y responsables ")
        .row.justify-content-center
          .col-1: img(src='@/assets/curso/temas/tema8/4.svg', alt='')
          .col-11
            h4 Activos de información y responsables 
            p Identificar los activos de información y sus responsables, entendiendo por activo todo aquello que tiene valor para la organización, incluyendo soportes físicos (edificios o equipamientos), intelectuales o informativas (ideas, aplicaciones, proyectos) así como la marca, la reputación, etc. 
      .tarjeta.color-acento-contenido.p-4(titulo="Vulnerabilidades de los activos")
        .row.justify-content-center
          .col-1: img(src='@/assets/curso/temas/tema8/5.svg', alt='')
          .col-11
            h4 Vulnerabilidades de los activos
            p Identificar las vulnerabilidades de cada activo: aquellas debilidades propias del activo que lo hacen susceptible de sufrir ataques o daños.
      .tarjeta.color-acento-contenido.p-4(titulo=" Amenazas ")
        .row.justify-content-center
          .col-1: img(src='@/assets/curso/temas/tema8/6.svg', alt='')
          .col-11
            h4 Amenazas 
            p Identificar las amenazas: aquellas cosas que puedan suceder y dañar el activo de la información, tales como desastres naturales, incendios o ataques de virus, espionaje, etc.
      .tarjeta.color-acento-contenido.p-4(titulo=" Requisitos legales y contractuales")
        .row.justify-content-center
          .col-1: img(src='@/assets/curso/temas/tema8/7.svg', alt='')
          .col-11
            h4 Requisitos legales y contractuales
            p Identificar los requisitos legales y contractuales que la organización está obligada a cumplir con sus clientes, socios o proveedores.
      .tarjeta.color-acento-contenido.p-4(titulo=" Riesgos")
        .row.justify-content-center
          .col-1: img(src='@/assets/curso/temas/tema8/8.svg', alt='')
          .col-11
            h4 Riesgos
            p Identificar los riesgos: definir para cada activo, la probabilidad de que las amenazas o las vulnerabilidades propias del activo puedan causar un daño total o parcial al activo de la información, en relación a su disponibilidad, confidencialidad e integridad del mismo.
      .tarjeta.color-acento-contenido.p-4(titulo=" Cálculo del riesgo")
        .row.justify-content-center
          .col-1: img(src='@/assets/curso/temas/tema8/9.svg', alt='')
          .col-11
            h4 Cálculo del riesgo
            p Este se realiza a partir de la probabilidad de ocurrencia del riesgo y el impacto que este tiene sobre la organización (Riesgo = impacto x probabilidad de la amenaza). Con este procedimiento determinamos los riesgos que deben ser controlados con prioridad.
      .tarjeta.color-acento-contenido.p-4(titulo=" Plan de tratamiento de riesgo ")
        .row.justify-content-center
          .col-1: img(src='@/assets/curso/temas/tema8/10.svg', alt='')
          .col-11
            h4 Plan de tratamiento de riesgo 
            p En este punto estamos preparados para definir la política de tratamiento de los riesgos en función de los puntos anteriores y de la política definida por la dirección. 
</template>

<script>
export default {
  name: 'Tema8',
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

<style lang="sass">
.tabs-a__tab
  background-color: #e8e8e8
</style>
