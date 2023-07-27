<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Construcción de un sistema de tratamiento de agua residual según requerimientos técnicos modelo 3D 
    p.mb-5(data-aos='fade-right')  Actualmente existen muchos modelos 3D para el desarrollo de planos y estructuras de ingeniería adecuados a las necesidades del diseñador. Uno de los más utilizados por sus prestaciones y practicidad es SKETCHUP. Para utilizar este programa basta con abrirlo y comenzar a dibujar, con las herramientas, la figura que se desee. Este programa es descargable o también se encuentra en versión online.
      br
      br
      |A continuación, se muestra un instructivo sencillo para trazar un cubo con el cual podrá practicar y afianzar sus habilidades con el programa.  
    .bg-slyde.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Importe de archivos y sistema de coordenadas 
            p Los archivos de SketchUp se pueden importar en distintas aplicaciones de CAD para procesarlos allí y también se pueden importar en SketchUp archivos de CAD para crear modelos 3D con gran rapidez. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/7.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Coordenadas
            p SketchUP utiliza un sistema de coordenadas 3D en el que los puntos se identifican en el espacio mediante su posición en tres ejes de dibujo: valores X, Y y Z positivos o negativos (por encima o por debajo del suelo). En SketchUp, el valor X positivo o negativo se representa mediante líneas rojas continuas o punteadas, respectivamente; Y positivo o negativo se representa respectivamente mediante líneas de eje verdes continuas o punteadas; y Z positivo o negativo (por encima o por debajo del suelo) se representa mediante líneas azules continuas o punteadas. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/8.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Plano de suelo 
            p El plano en el que descansan las líneas de eje rojas y verdes se denomina plano de suelo. Por último, el término origen se emplea para definir el lugar donde se inician todas las líneas de eje. La imagen siguiente muestra los ejes de dibujo en SketchUp (las líneas se muestran más gruesas de lo normal para facilitar la lectura de los ejes). El círculo negro representa el origen.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/9.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Creación
            p Los modelos de SketchUp se crean básicamente uniendo líneas para formar aristas. Las caras se crean automáticamente cuando tres o más líneas o aristas están en el mismo plano (un espacio plano infinito 2D) o son coplanarias y forman un bucle cerrado. Las aristas y las caras se combinan de este modo para crear modelos 3D. En la imagen siguiente se muestran tres líneas coplanarias no conectadas. Estas líneas se han dibujado con la herramienta "Línea" (la herramienta con forma de lápiz).  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/1.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Conexión de líneas 
            p En la imagen siguiente se muestran cuatro líneas conectadas coplanarias y la cara plana de 2 dimensiones que se crea. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/2.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Modelos en 3D 
            p Para crear un modelo en 3D, sólo se debe dibujar hacia arriba o hacia abajo siguiendo la dirección azul (en paralelo a los ejes azules). En la imagen siguiente se muestra la primera línea creada en el espacio 3D. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/3.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Creación de caras
            p A medida que se dibujan otras líneas, siguiendo los ejes de colores, se van creando caras. En la imagen siguiente se muestran tres caras creadas dibujando líneas paralelas a las tres direcciones de los ejes (rojo, verde y azul).  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/4.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Caja tridimensional 
            p En este punto, sólo falta por dibujar una línea para completar una caja tridimensional, cuando se dibuja esta línea, se crean dos caras (la superior y la frontal). 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/5.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Múltiples Opciones 
            p Se puede hacer muchas cosas distintas en SketchUp, simplemente dibujando líneas para crear caras con la herramienta "Línea". Además, se puede dibujar líneas partiendo desde cualquier posición (otra línea, una cara, un punto, etc.). ¿Se puede reconocer la caja 3D anterior, en el modelo de esta casa?  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/6.png', alt='')
        

</template>

<script>
export default {
  name: 'Tema5',
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
