<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Indicadores de desempeño de los sistemas de tratamiento
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p Los indicadores son el instrumento concreto que se aplica para cuantificar o para hacer el análisis cualitativo de los aspectos relevantes en cada uno de los procesos, resultados, impactos o efectos objeto de un plan. Los indicadores cuantifican la evolución de la empresa en la protección ambiental y la hace comparable año tras año.  
          br
          br
          |Si se determinan de forma periódica, los indicadores ambientales permiten detectar rápidamente tendencias negativas de la gestión y en consecuencia se consolidan en sí mismos como un sistema de alerta temprana  (Ridsso,2008). En el ámbito empresarial, los indicadores permiten evaluar y hacer seguimiento al desempeño, a la situación o la gestión ambiental de la organización. Los indicadores de desempeño ambiental proveen información específica de los resultados de la gestión ambiental de una organización (Ridsso, 2008). 
      .col-lg-5.col-8: img(src='@/assets/curso/temas/tema6/1.png', alt='')
    p.mb-5(data-aos='fade-right') En concordancia con lo mencionado, la primera clasificación que puede encontrase de los indicadores, es por la manera como se plantean, por ejemplo, la NTC ISO 14031 los presenta de la siguiente forma: 
    .bg-1.p-5.mb-5
      ul.lista-ul--color
        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Medidas o cálculos directos:] datos básicos o información, tales como toneladas de contaminantes emitidas. 

        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Medidas o cálculos relativos:] datos o información comparados con o en relación con otro parámetro (por ejemplo: nivel de producción, tiempo, ubicación o condiciones de base), tales como toneladas de contaminante emitidas por tonelada de producto fabricado o toneladas de contaminante emitidas por unidad de volumen de ventas.  
        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Indexados:] datos descriptivos o información convertida en unidades o en una forma que relacione la información con un patrón seleccionado o con una línea base, tales como emisiones contaminantes en el año en curso expresados como un porcentaje de estas emisiones en un año base. 
        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Agregados:] datos descriptivos o información del mismo tipo, pero de diferentes fuentes, compilada y expresada en un valor combinado, como las toneladas totales de un contaminante dado, emitidas por la producción de un producto en un año dado, determinado por la suma de las emisiones de múltiples instalaciones que fabrican el mismo producto.  
        li.d-flex
          i.fas.fa-check
          p.mb-0 #[b Ponderados:] datos descriptivos o información modificada aplicando un factor relacionado con su importancia.
    p.mb-5(data-aos='fade-right') Hay que mencionar, además, con referencia a los Indicadores de desempeño de los sistemas de tratamiento, que una organización que descarga agua residual tratada a un lago puede seleccionar los siguientes indicadores para la EDA: 
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema6/2.svg' alt='AvatarTop')
            .tarjeta.w-100.h-100(style="background-color: #f8faf2 ")
              .text-center.p-4
                p Cantidad total de un contaminante específico descargado por año (público a quien posiblemente va dirigido: comunidades locales) 
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema6/2.svg' alt='AvatarTop')
            .tarjeta.w-100.h-100(style="background-color: #f8faf2 ")
              .text-center.p-4
                p Concentración de contaminantes en agua residual (público a quien posiblemente va dirigido: autoridades legales y reguladoras) 
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema6/2.svg' alt='AvatarTop')
            .tarjeta.w-100.h-100(style="background-color: #f8faf2 ")
              .text-center.p-4
                p Cantidad de contaminante descargado por producto fabricado (público a quien posiblemente va dirigido: dirección y consumidores) 
      .col-lg-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema6/2.svg' alt='AvatarTop')
            .tarjeta.w-100.h-100(style="background-color: #f8faf2 ")
              .text-center.p-4
                p Cambio en la cantidad de contaminantes descargados por año en relación a la inversión en tecnologías más limpias o mejoras de proceso (público a quien posiblemente va dirigido: dirección e inversionistas). 
    p.mb-5(data-aos='fade-right') De acuerdo con lo anterior, los tipos de indicadores ambientales podrían clasificarse como se mostrará a continuación: 
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema6/3.svg', alt='')
      .tarjeta.p-3(x="15%" y="35.5%" numero="+" style="background-color: #dee9f0 ")
        h4 Indicadores ambientales de la empresa
        p Pueden ser de desempeño ambiental, de situación ambiental o de gestión ambiental. 
      .tarjeta.p-3(x="29%" y="65%" numero="+" style="background-color: #dee9f0 ")
        h4 ¿Cómo pueden presentarse?
        p Se pueden presentar con el proceso o área en donde se desean aplicar. 
      .tarjeta.p-3(x="43%" y="35.5%" numero="+" style="background-color: #dee9f0 ")
        h4 Se expresan en unidades cuantificables
        p Estos indicadores se expresan en unidades cuantificables para su mejor comprensión y aplicación. 
      .tarjeta.p-3(x="57%" y="65%" numero="+" style="background-color: #dee9f0 ")
        h4 Sistema de indicadores
        p Es el conjunto de instrumentos y recursos tecnológicos para la operación, generación, almacenamiento, análisis de la información. La organización debe definir los métodos, técnicas, frecuencias y responsables de la información y del sostenimiento del sistema de indicadores. 
      .tarjeta.p-3(x="71.1%" y="35.5%" numero="+" style="background-color: #dee9f0 ")
        h4 Seguimiento y monitoreo
        p El seguimiento y monitoreo es un proceso sistemático empleado para comprobar la eficiencia y efectividad del proceso de implementación del plan, determinar los logros y debilidades y recomendar medidas correctivas para optimizar los resultados. 
      .tarjeta.p-3(x="84.9%" y="65%" numero="+" style="background-color: #dee9f0 ")
        h4 Evaluación
        p La evaluación se realiza a partir del análisis de la información reportada en el sistema de indicadores de la organización. 

</template>

<script>
export default {
  name: 'Tema6',
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
