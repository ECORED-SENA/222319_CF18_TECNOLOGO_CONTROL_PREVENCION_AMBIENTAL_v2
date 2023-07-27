<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Informes de caracterización interpretación de resultados de análisis de aguas residuales y lodos
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        p Los informes de caracterización de aguas residuales son emitidos por lo general por una empresa acreditada a nivel nacional por el IDEAM. Estas empresas cuentan con el respaldo a través de la certificación de esta entidad al haber estandarizado sus ensayos por cada parámetro de análisis y muestreo del agua residual.
          br
          br
          |En relación con los informes de caracterización, interpretación de resultados de análisis de aguas residuales y lodos, tenga presente los siguientes aspectos:
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/1.png', alt='') 
    AcordionA.mb-5.acordion-icon(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Realización ")
        .col-md-8.mb-4.mb-md-0
          p El muestreo puede ser realizado de manera puntual o compuesta, en diferentes periodos de tiempo, a criterio de la entidad controladora. Este muestreo puede ser realizado directamente por la entidad controladora, o por personal externo que ella contrate, para lo cual podrá adoptar las prioridades y frecuencias.  
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/2.png', alt='')
      .row(titulo="Tener en cuenta ")
        .col-md-8.mb-4.mb-md-0
          p En ambos casos, es importante realizar las mediciones de pH, temperatura, caudal y sólidos sedimentables en el campo, registrar esta información y comunicarla inmediatamente al industrial, el cual debe firmar el registro y realizar las observaciones que considere pertinentes. Las muestras que se llevan a los laboratorios para su análisis deben ser debidamente identificadas e incluidas en un protocolo de custodia, de acuerdo con los procedimientos establecidos por el IDEAM (Ministerio del Medio Ambiente, 2002).
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/3.png', alt='')
      .row(titulo="Muestreos y corrientes receptoras ")
        .col-md-8.mb-4.mb-md-0
          p El muestreo de las aguas residuales y las corrientes receptoras de vertimientos líquidos constituye uno de los aspectos fundamentales en todo programa que tenga como objetivo disminuir el grado de contaminación del recurso hídrico. Los resultados de un programa de muestreo son la base del diseño de los sistemas de tratamiento, la verificación del cumplimiento de la normatividad existente, el avance del programa de tasas retributivas y/o la implementación de un sistema de gestión ambiental. (CORNARE, 2018). 
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/4.png', alt='')
      .row(titulo="Aciertos y desaciertos ")
        .col-md-8.mb-4.mb-md-0
          p Muestreos incorrectos producen resultados incoherentes que llevan a diseños o toma de decisiones erradas. El conocimiento y cumplimiento de algunos conceptos básicos permiten evaluar acertadamente el impacto causado por la descarga de aguas residuales, que brindan herramientas para dar solución a esta problemática ambiental.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/5.png', alt='')
      .row(titulo="Sobre la caracterización ")
        .col-md-8.mb-4.mb-md-0
          p La caracterización de vertimientos líquidos tiene como objeto evaluar las sustancias contaminantes que un proyecto o usuario determinado están vertiendo al recurso hídrico. Es importante que esta se realice con personal idóneo, que conoce el objeto, los requerimientos de muestreo, la medición de parámetros de campo y el análisis acertado de la información (CORNARE, 2018).  
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/6.png', alt='')
      .row(titulo="Idoneidad del personal")
        .col-md-8.mb-4.mb-md-0
          p Es recomendable que las personas contratadas para la realización de los muestreos sean idóneas, con perfil y experiencia sanitario o ambiental (Ingeniero (a) o Tecnólogo (a) en Saneamiento u otro perfil con la certificación respectiva (CORNARE, 2018).  
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema3/7.png', alt='')
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Características del muestreo 
    p.mb-5(data-aos='fade-right') La caracterización de vertimientos líquidos consiste en el análisis fisicoquímico a muestras de las aguas residuales vertidas al alcantarillado público.
      br
      br
      |A continuación, detalle algunas generalidades sobre la caracterización del muestreo:
    .bg-slyde.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Aguas de Abasto 
            p Cuando es proveniente de una fuente superficial o subterránea, la caracterización puede ser puntual o compuesta, con las mediciones de campo de pH, temperatura y caudal. Cuando el agua de consumo es proveniente de un acueducto, no es necesario realizar caracterización del abasto.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/8.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Aguas Residuales Industriales 
            p Realizar el muestreo compuesto (tomando las alícuotas en forma proporcional al caudal, tal como se plantea en el manual del CENSA, por lo tanto, se requiere de dispositivo de aforo de caudal) durante toda la jornada laboral. Tomado alícuotas cada 20 o 30 minutos como mínimo. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/9.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Aguas residuales domésticas: 
            p Realizar el muestreo durante un período mínimo de 4 horas que incluya horas pico y tomando alícuotas cada 20 o 30 minutos. Las Plantas de Tratamiento de Aguas Residuales Domésticas (PTARD) municipales deben tener un período de muestreo de mínimo de 18 horas, con excepción de aquellas que reciben los vertimientos de los mataderos, en donde hay que realizar un muestreo en toda la jornada de sacrificio o muestreo de la PTARD municipal durante 24 horas, que incluya los vertimientos del matadero. Tanto en la caracterización de aguas residuales domésticas como industriales, se debe efectuar medición en el campo de pH, temperatura y caudal. Si existe planta de tratamiento de las aguas residuales, realizar caracterización compuesta en la entrada y salida del sistema, con el objetivo de evaluar las eficiencias de remoción, según el Decreto 1594/84 de usos del agua y residuos líquidos.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/10.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Caracterización ajustada a la norma 
            p De acuerdo con el parágrafo 2 del artículo 2.2.3.3.5.2 del Decreto 1076 de 2015, los análisis deben ser realizados por laboratorios ambientales que se encuentren debidamente acreditados por el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM), aplicando para tales efectos lo establecido en el Protocolo para el Monitoreo de Vertimientos (artículo 2.2.3.3.4.13 del Decreto 1076 de 2015, modificado por el núm. 13 del artículo 12 del Decreto 050 de 2018) que es un protocolo que a la fecha no se ha expedido y por lo cual se seguirán los procedimientos establecidos en la Guía para el Monitoreo de Vertimientos, Aguas Superficiales y Subterráneas del IDEAM. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/11.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Requisitos de los laboratorios 
            p Los laboratorios que realizan los análisis deben estar acreditados en la Norma ISO 17025 “Requisitos generales de competencia de laboratorios de ensayo y calibración” por el IDEAM. Así mismo deben anexar los resultados de laboratorio, copias de las cartas de control con los respectivos límites de control, límites de detección, resultados de participación en ejercicios de intercalibración, incertidumbre de los análisis para los parámetros analizados, certificados de calibración de los equipos de medición que así lo requieran. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/12.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Acreditación de los laboratorios 
            p Los laboratorios deben estar acreditados para cada uno de los parámetros para los cuales preste el servicio y en caso de estarlo parcialmente establecer con claridad el convenio subscrito (responsabilidades específicas) con el cual se subcontratan los parámetros faltantes. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/13.png', alt='')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Informe de caracterización 
    p.mb-5(data-aos='fade-right') El informe de caracterización deberá contener como mínimo los siguientes ítems: 
    .bg-1.p-5   
      ol.lista-ol--cuadro
        li.d-flex
          .lista-ol--cuadro__vineta
            span(style="color: #0E494D").fw-bold a
          p.mb-0 Información general de la empresa: razón social, localización, número de empleados (total y por jornada), número de turnos, jornada laboral diaria y mensual. 

        li.d-flex
          .lista-ol--cuadro__vineta
            span(style="color: #0E494D").fw-bold b
          p.mb-0 Descripción del proceso productivo definiendo las principales materias primas utilizadas y las cantidades, al igual que las cantidades de los productos y subproductos terminados. Esta información puede ser detallada mes a mes o realizar un promedio para el año. Para el día de la caracterización se tomará el dato de las materias primas utilizadas y el producto terminado obtenido durante la jornada laboral de la misma fecha. 
        li.d-flex
          .lista-ol--cuadro__vineta
            span(style="color: #0E494D").fw-bold c
          p.mb-0 Sistema de abastecimiento: nombre de la fuente, caudal otorgado, consumo diario en litros, porcentaje utilizado para consumo industrial y doméstico.  

        li.d-flex
          .lista-ol--cuadro__vineta
            span(style="color: #0E494D").fw-bold d
          p.mb-0 Descripción de los sistemas de tratamiento de aguas residuales existentes, determinando cantidades, tipos de sistemas, disposición y localización.  

        li.d-flex
          .lista-ol--cuadro__vineta
            span(style="color: #0E494D").fw-bold e
          p.mb-0 Datos de campo y descripción del proceso de toma de muestras, período del muestreo, método de aforo empleado, frecuencia de la toma de muestras y los datos de campo correspondientes a temperatura, pH y caudal (indicar las alícuotas tomadas a partir de los caudales registrados).  

        li.d-flex
          .lista-ol--cuadro__vineta
            span(style="color: #0E494D").fw-bold f
          p.mb-0 Reporte de los resultados del laboratorio donde se analizaron las muestras. 

        li.d-flex
          .lista-ol--cuadro__vineta
            span(style="color: #0E494D").fw-bold g
          p.mb-0 Análisis e interpretación de resultados.  

        li.d-flex
          .lista-ol--cuadro__vineta
            span(style="color: #0E494D").fw-bold h 
          p.mb-0 Cálculo de las cargas contaminantes (presentar la variación de caudal y carga durante el muestreo).  

        li.d-flex
          .lista-ol--cuadro__vineta
            span(style="color: #0E494D").fw-bold i 
          p.mb-0 Conclusiones y recomendaciones sobre la eficiencia de la PTAR.  

        li.d-flex
          .lista-ol--cuadro__vineta
            span(style="color: #0E494D").fw-bold j
          p.mb-0 Anexo en original de los datos y observaciones obtenidas en el trabajo de campo. (CORNARE, 2018). 
</template>

<script>
export default {
  name: 'Tema3',
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
