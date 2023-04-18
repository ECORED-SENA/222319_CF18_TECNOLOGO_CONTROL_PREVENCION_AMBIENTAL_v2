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
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            .tarjeta.w-100(style="background-color: #dee9f0")
              .text-center.p-4
                h4 Sustancia de interés ambiental:
                p Son los compuestos, elementos, sustancias y parámetros indicadores de contaminación fisicoquímica y biológica, que permiten evaluar la calidad del vertimiento y su efecto sobre el recurso hídrico Secretaría Distrital Del Ambiente (2015).
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            .tarjeta.w-100(style="background-color: #dee9f0")
              .text-center.p-4
                h4 Sustancia de interés sanitario: 
                p Sustancias químicas, elementos o compuestos que pueden causar daños o son tóxicos para la salud humana o cualquier forma de vida acuática. Se consideran sustancias de interés sanitario las sustancias contenidas en el Decreto 1076 de 2015 Sección 4. Vertimientos, artículo. 2.2.3.3.4.1. Secretaría Distrital Del Ambiente (2015).
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            .tarjeta.w-100(style="background-color: #dee9f0")
              .text-center.p-4
                h4 Permiso de vertimiento: 
                p Es aquel que autoriza la autoridad ambiental a toda persona natural o jurídica para que realice las descargas de aguas residuales generadas de sus actividades domésticas y/o productivas, a un cuerpo de agua, al suelo u otro medio, previo tratamiento de estas. Área metropolitana del Valle de Aburrá. (2019). 
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            .tarjeta.w-100(style="background-color: #dee9f0")
              .text-center.p-4
                h4 Parámetros y valores límites:
                p El 17 de marzo de 2015, el Ministerio de Ambiente y Desarrollo Sostenible, expidió la Resolución 0631 de 2015, mediante la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            .tarjeta.w-100(style="background-color: #dee9f0")
              .text-center.p-4
                h4 Exigibilidad de los permisos:
                p El Plan Nacional de Desarrollo 2018-2022 “Pacto Por Colombia, Pacto Por La Equidad” (Ley 1955 del 02/06/2019), estableció en el artículo 13, que sólo se exige Permiso de Vertimientos para descargas a las aguas superficiales, a las aguas marinas o al suelo; por lo tanto, deja de ser exigible el permiso que conforme a la Resolución Ministerial 0631 de 2015, se establecía para la descarga de aguas residuales no domésticas al alcantarillado público. Área metropolitana del Valle de Aburrá. (2019). 
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Importancia del permiso de vertimientos 
    p.mb-5(data-aos='fade-right') Contar con el permiso de vertimiento garantiza que el usuario está entregando sus aguas residuales en unas condiciones que sean aceptadas por el recurso natural. 
    .bloque-derecha(data-aos="zoom-in")
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/3.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Por ejemplo, cuando hay derrames o vertimientos sin ser tratados adecuadamente, estos pueden llegar a fuentes hídricas que son consumidas por personas o animales. Cuando se disminuye el grado de afectación del agua o el suelo como consecuencia de los vertimientos, se están protegiendo los recursos naturales, la vida de seres humanos, los animales y las plantas. 
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Prohibiciones
    p.mb-5(data-aos='fade-right') Estas son las prohibiciones que se deben tener en cuenta, para efectos de permisos de los vertimientos: 
    .bg-1.p-4.mb-5
      ul.lista-ul--color
        li
          i.fas.fa-check
          | En las cabeceras de las fuentes de agua. 
        li
          i.fas.fa-check
          | En acuíferos. 
        li
          i.fas.fa-check
          | En los cuerpos de aguas o aguas costeras destinadas para recreación y usos afines que impliquen contacto primario, que no permita el cumplimiento del criterio de calidad para este uso. 
        li
          i.fas.fa-check
          | En un sector aguas arriba de las bocatomas para agua potable, en extensión que determinará en cada caso, la autoridad ambiental competente. 

        li
          i.fas.fa-check
          | En cuerpos de agua que la autoridad ambiental competente declare total o parcialmente protegidos, de acuerdo con los artículos 70 y 137 del Decreto-ley 2811 de 1974. 
        li
          i.fas.fa-check
          | En calles, calzadas y canales o sistemas de alcantarillados para aguas lluvias, cuando quiera que existan en forma separada o tengan esta única destinación.  

        li
          i.fas.fa-check
          | No tratados provenientes de embarcaciones, buques, naves u otros medios de transporte marítimo, fluvial o lacustre, en aguas superficiales dulces, y marinas. 

        li
          i.fas.fa-check
          | Sin tratar, provenientes del lavado de vehículos aéreos y terrestres, del lavado de aplicadores manuales y aéreos, de recipientes, empaques y envases que contengan o hayan contenido agroquímicos u otras sustancias tóxicas. 

        li
          i.fas.fa-check
          | Que alteren las características existentes en un cuerpo de agua que lo hacen apto para todos los usos determinados en el artículo 9° del presente decreto. 

        li
          i.fas.fa-check
          | Que ocasionen altos riesgos para la salud o para los recursos hidrobiológicos. CAR. (s,f). 
    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Sanciones 
    p.mb-5(data-aos='fade-right') Así mismo, se presentarán algunas sanciones desde la normativa y los criterios de permisos para vertimientos, en los casos en que se tenga: 
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/4.png', alt='')
      .col-lg-8 
        div(style="background-color: #f3f9ff").p-2.h-100
          p • Amonestación escrita. 
            br
            |• Decomiso preventivo de productos, elementos, medios o implementos utilizados para cometer la infracción. 
            br
            |• Suspensión de obra o actividad cuando pueda derivarse daño o peligro para el medio ambiente, los recursos naturales, el paisaje o la salud humana o cuando el proyecto, obra o actividad se haya iniciado sin permiso, concesión, autorización o licencia ambiental o ejecutado incumpliendo los términos de los mismos.  
            br
            |• Así mismo, será sujeto del inicio de un procedimiento sancionatorio ambiental, según sea el caso, y consecuentemente la imposición de las otras sanciones establecidas en la Ley 1333 de 2009. 
            br
            |• Multas diarias hasta por cinco mil (5.000) salarios mínimos mensuales legales vigentes.
            br
            |• Revocatoria o caducidad de licencia ambiental, autorización, concesión, permiso o registro. 
            br
            |• Demolición de obra a costa del infractor. 
            br
            |• Trabajo comunitario según condiciones establecidas por la autoridad ambiental. Nota. CAR. (s,f).  
    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Documentos  
    p.mb-5(data-aos='fade-right') Se presenta el listado de los documentos para completar requisitos, en el trámite de registro y permiso de vertimientos; es de aclarar que se tramitan a nivel municipal. Entonces debe tenerse en cuenta los formatos de la autoridad ambiental competente en donde se genera el vertimiento. 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #fdf8e4").h-100
          img(src='@/assets/curso/temas/tema2/5.png', alt='' style="width: 170px").m-auto.mb-3
          .d-flex.justify-content-center.mb-3
            .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-4
              h4.mb-0 Para el registro de vertimientos: 
          ul.lista-ul--color
            li
              i.fas.fa-check
              | Lista de chequeo con los documentos para la tramitología del registro de vertimientos
            li
              i.fas.fa-check
              | Formulario de solicitud registro de vertimientos
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-left")
        .tarjeta.p-4(style="background-color: #fdf8e4").h-100
          img(src='@/assets/curso/temas/tema2/6.png', alt='' style="width: 170px").m-auto.mb-3
          .d-flex.justify-content-center.mb-3
            .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-4
              h4.mb-0 Para el permiso de vertimientos:
          ul.lista-ul--color
            li
              i.fas.fa-check
              |

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
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            .tarjeta.w-100(style="background-color: #dee9f0")
              .text-center.p-4
                h4 Sustancia de interés ambiental:
                p Son los compuestos, elementos, sustancias y parámetros indicadores de contaminación fisicoquímica y biológica, que permiten evaluar la calidad del vertimiento y su efecto sobre el recurso hídrico Secretaría Distrital Del Ambiente (2015).
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            .tarjeta.w-100(style="background-color: #dee9f0")
              .text-center.p-4
                h4 Sustancia de interés sanitario: 
                p Sustancias químicas, elementos o compuestos que pueden causar daños o son tóxicos para la salud humana o cualquier forma de vida acuática. Se consideran sustancias de interés sanitario las sustancias contenidas en el Decreto 1076 de 2015 Sección 4. Vertimientos, artículo. 2.2.3.3.4.1. Secretaría Distrital Del Ambiente (2015).
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            .tarjeta.w-100(style="background-color: #dee9f0")
              .text-center.p-4
                h4 Permiso de vertimiento: 
                p Es aquel que autoriza la autoridad ambiental a toda persona natural o jurídica para que realice las descargas de aguas residuales generadas de sus actividades domésticas y/o productivas, a un cuerpo de agua, al suelo u otro medio, previo tratamiento de estas. Área metropolitana del Valle de Aburrá. (2019). 
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            .tarjeta.w-100(style="background-color: #dee9f0")
              .text-center.p-4
                h4 Parámetros y valores límites:
                p El 17 de marzo de 2015, el Ministerio de Ambiente y Desarrollo Sostenible, expidió la Resolución 0631 de 2015, mediante la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.
        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
            .tarjeta.w-100(style="background-color: #dee9f0")
              .text-center.p-4
                h4 Exigibilidad de los permisos:
                p El Plan Nacional de Desarrollo 2018-2022 “Pacto Por Colombia, Pacto Por La Equidad” (Ley 1955 del 02/06/2019), estableció en el artículo 13, que sólo se exige Permiso de Vertimientos para descargas a las aguas superficiales, a las aguas marinas o al suelo; por lo tanto, deja de ser exigible el permiso que conforme a la Resolución Ministerial 0631 de 2015, se establecía para la descarga de aguas residuales no domésticas al alcantarillado público. Área metropolitana del Valle de Aburrá. (2019). 
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Importancia del permiso de vertimientos 
    p.mb-5(data-aos='fade-right') Contar con el permiso de vertimiento garantiza que el usuario está entregando sus aguas residuales en unas condiciones que sean aceptadas por el recurso natural. 
    .bloque-derecha(data-aos="zoom-in")
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/3.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Por ejemplo, cuando hay derrames o vertimientos sin ser tratados adecuadamente, estos pueden llegar a fuentes hídricas que son consumidas por personas o animales. Cuando se disminuye el grado de afectación del agua o el suelo como consecuencia de los vertimientos, se están protegiendo los recursos naturales, la vida de seres humanos, los animales y las plantas. 
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Prohibiciones
    p.mb-5(data-aos='fade-right') Estas son las prohibiciones que se deben tener en cuenta, para efectos de permisos de los vertimientos: 
    .bg-1.p-4.mb-5
      ul.lista-ul--color
        li
          i.fas.fa-check
          | En las cabeceras de las fuentes de agua. 
        li
          i.fas.fa-check
          | En acuíferos. 
        li
          i.fas.fa-check
          | En los cuerpos de aguas o aguas costeras destinadas para recreación y usos afines que impliquen contacto primario, que no permita el cumplimiento del criterio de calidad para este uso. 
        li
          i.fas.fa-check
          | En un sector aguas arriba de las bocatomas para agua potable, en extensión que determinará en cada caso, la autoridad ambiental competente. 

        li
          i.fas.fa-check
          | En cuerpos de agua que la autoridad ambiental competente declare total o parcialmente protegidos, de acuerdo con los artículos 70 y 137 del Decreto-ley 2811 de 1974. 
        li
          i.fas.fa-check
          | En calles, calzadas y canales o sistemas de alcantarillados para aguas lluvias, cuando quiera que existan en forma separada o tengan esta única destinación.  

        li
          i.fas.fa-check
          | No tratados provenientes de embarcaciones, buques, naves u otros medios de transporte marítimo, fluvial o lacustre, en aguas superficiales dulces, y marinas. 

        li
          i.fas.fa-check
          | Sin tratar, provenientes del lavado de vehículos aéreos y terrestres, del lavado de aplicadores manuales y aéreos, de recipientes, empaques y envases que contengan o hayan contenido agroquímicos u otras sustancias tóxicas. 

        li
          i.fas.fa-check
          | Que alteren las características existentes en un cuerpo de agua que lo hacen apto para todos los usos determinados en el artículo 9° del presente decreto. 

        li
          i.fas.fa-check
          | Que ocasionen altos riesgos para la salud o para los recursos hidrobiológicos. CAR. (s,f). 
    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Sanciones 
    p.mb-5(data-aos='fade-right') Así mismo, se presentarán algunas sanciones desde la normativa y los criterios de permisos para vertimientos, en los casos en que se tenga: 
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/4.png', alt='')
      .col-lg-8 
        div(style="background-color: #f3f9ff").p-2.h-100
          p • Amonestación escrita. 
            br
            |• Decomiso preventivo de productos, elementos, medios o implementos utilizados para cometer la infracción. 
            br
            |• Suspensión de obra o actividad cuando pueda derivarse daño o peligro para el medio ambiente, los recursos naturales, el paisaje o la salud humana o cuando el proyecto, obra o actividad se haya iniciado sin permiso, concesión, autorización o licencia ambiental o ejecutado incumpliendo los términos de los mismos.  
            br
            |• Así mismo, será sujeto del inicio de un procedimiento sancionatorio ambiental, según sea el caso, y consecuentemente la imposición de las otras sanciones establecidas en la Ley 1333 de 2009. 
            br
            |• Multas diarias hasta por cinco mil (5.000) salarios mínimos mensuales legales vigentes.
            br
            |• Revocatoria o caducidad de licencia ambiental, autorización, concesión, permiso o registro. 
            br
            |• Demolición de obra a costa del infractor. 
            br
            |• Trabajo comunitario según condiciones establecidas por la autoridad ambiental. Nota. CAR. (s,f).  
    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Documentos  
    p.mb-5(data-aos='fade-right') Se presenta el listado de los documentos para completar requisitos, en el trámite de registro y permiso de vertimientos; es de aclarar que se tramitan a nivel municipal. Entonces debe tenerse en cuenta los formatos de la autoridad ambiental competente en donde se genera el vertimiento. 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #fdf8e4").h-100
          img(src='@/assets/curso/temas/tema2/5.png', alt='' style="width: 170px").m-auto.mb-3
          .d-flex.justify-content-center.mb-3
            .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3
              h4.mb-0 Para el registro de vertimientos: 
          ul.lista-ul--color
            li
              i.fas.fa-check
              | Lista de chequeo con los documentos para la tramitología del registro de vertimientos
            li
              i.fas.fa-check
              | Formulario de solicitud registro de vertimientos
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-left")
        .tarjeta.p-4(style="background-color: #fdf8e4").h-100
          img(src='@/assets/curso/temas/tema2/6.png', alt='' style="width: 170px").m-auto.mb-3
          .d-flex.justify-content-center.mb-3
            .tarjeta.color-primario.rounded-pill.d-inline-block.m-auto.p-3
              h4.mb-0 Para el permiso de vertimientos:
          ul.lista-ul--color
            li
              i.fas.fa-check
              | Lista de chequeo para permiso de vertimientos generados al suelo o cuerpo de agua. 
            li
              i.fas.fa-check
              | Lista de chequeo para permiso de vertimientos al alcantarillado. 
            li
              i.fas.fa-check
              | Formulario de solicitud permiso de vertimientos. 

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
