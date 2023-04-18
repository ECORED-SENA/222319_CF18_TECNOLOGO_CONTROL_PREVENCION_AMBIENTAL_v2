export default {
  global: {
    componenteFormativo:
      'Monitoreo de los vertimientos según normatividad ambiental',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves del manejo de vertimientos, según lineamientos técnicos y legales a nivel nacional. Así mismo, afianza al aprendiz en lo relacionado con necesidades de los sectores económicos, el desarrollo tecnológico y la innovación, monitoreo y seguimiento al tratamiento de las aguas residuales, según el control de variables de los sistemas de tratamiento. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    // imagenesDecorativasBanner: [
    //   {
    //     clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //   },
    //   {
    //     clases: ['banner-principal-decorativo-2'],
    //     imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //   },
    // ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bases conceptuales ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Registro y permiso de vertimientos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia del permiso de vertimientos ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Prohibiciones ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sanciones ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Documentos ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Informes de caracterización interpretación de resultados de análisis de aguas residuales y lodos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características del muestreo ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Informe de caracterización ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Trámite de tasa retributiva  ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Construcción de un sistema de tratamiento de agua residual según requerimientos técnicos modelo 3D ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Indicadores de desempeño de los sistemas de tratamiento ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Informes de seguimiento y monitoreo de vertimientos ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Seguridad de la información ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Registro y permiso de vertimientos',
      referencia:
        'Alcaldía mayor de Bogotá (2014). Registro de vertimientos no domésticos.',
      tipo: 'Lista de chequeo ',
      link:
        'https://docs.google.com/spreadsheets/d/1eaavKQaMpgMaTao2IjEve2A9JjkiMGiJ/edit#gid=299790998  ',
    },
    {
      tema: 'Registro y permiso de vertimientos',
      referencia:
        'Alcaldía Mayor de Bogotá (2014). Lista de chequeo para permiso de vertimientos generados al suelo o cuerpos de agua.',
      tipo: 'Lista de chequeo ',
      link:
        'https://docs.google.com/spreadsheets/d/1q97UKpuKoleoPMdfJeEQXe1ERVQVSfgM/edit#gid=91130174 ',
    },
    {
      tema: 'Registro y permiso de vertimientos',
      referencia:
        'Alcaldía Mayor de Bogotá. (2014). Lista de chequeo para permiso de vertimientos alcantarillado.',
      tipo: 'Lista de chequeo  ',
      link:
        'https://docs.google.com/spreadsheets/d/1o8RMM-KMek7kiwNAFkyXC7g_iXS-qa50/edit#gid=348122990 ',
    },
    {
      tema: 'Registro y permiso de vertimientos',
      referencia: 'Alcaldía Mayor de Bogotá. (2014). Permiso de vertimientos.',
      tipo: 'Formato ',
      link:
        'https://docs.google.com/document/d/1UHGBcdVNZHT2FITJQhQF2hcjjiTD7QnP/edit ',
    },
    {
      tema: 'Construcción de un sistema de tratamiento de agua residual',
      referencia: 'Google SketchUp. (s.f).  Paso a paso con Google SketchUp.',
      tipo: 'Manual ',
      link:
        'https://drive.google.com/drive/folders/1IkFSFs2v2Jxwk3YehP4AXJG4f5CLAa4i  ',
    },
    {
      tema: 'Construcción de un sistema de tratamiento de agua residual',
      referencia: 'Google SketchUp.  (s.f). Manual de SketchUp.',
      tipo: 'Manual  ',
      link:
        'https://drive.google.com/drive/folders/1BbDe3suOPp4GHyIx3dEH2qtK27ahOZio ',
    },
    {
      tema: 'Construcción de un sistema de tratamiento de agua residual',
      referencia:
        'Sketchup. (2016). Getting Started with SketchUp [Video]. Youtube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=pv7TrGnZ17w ',
    },
  ],
  glosario: [
    {
      termino: 'Aguas Residuales Domésticas, (ARD) ',
      significado:
        'Son las procedentes de los hogares, así como las de las instalaciones en las cuales se desarrollan actividades industriales, comerciales o de servicios y que correspondan a: descargas de los retretes y servicios sanitarios. Descargas de los sistemas de aseo personal (duchas y lavamanos), de las áreas de cocinas y cocinetas, de las pocetas de lavado de elementos de aseo y lavado de paredes y pisos y del lavado de ropa (No se incluyen las de los servicios de lavandería industrial). Ministerio de Ambiente y Desarrollo Sostenible. (marzo 17 de 2015) Resolución No 0631. Pág. 2. ',
    },
    {
      termino: 'Aguas Residuales no Domésticas, (ARnD) ',
      significado:
        'Son las procedentes de las actividades industriales, comerciales o de servicios distintas a las que constituyen aguas residuales domésticas, (ARD) (Ministerio de Ambiente y Desarrollo Sostenible,2015).  ',
    },
    {
      termino: 'Carga contaminante ',
      significado:
        'Es el producto de la concentración másica promedio de una sustancia por el caudal volumétrico promedio del líquido que la contiene determinado en el mismo sitio; en un vertimiento se expresa en kilogramos por día (Kg/d) (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011). ',
    },
    {
      termino: 'Caudal ambiental ',
      significado:
        'Volumen de agua necesario en términos de calidad, cantidad, duración y estacionalidad para el sostenimiento de los ecosistemas acuáticos y para el desarrollo de las actividades socioeconómicas de los usuarios aguas abajo de la fuente de la cual dependen tales ecosistemas (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011). ',
    },
    {
      termino: 'Límites permisibles de vertimiento ',
      significado:
        'Es el contenido permitido de una sustancia, elemento o parámetro contaminante, en forma individual, mezclado o en combinación, o sus productos de metabolismo establecidos en los permisos de vertimiento y/o en los Planes de Saneamiento y Manejo de Vertimientos - PSMV. (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011)..  ',
    },
    {
      termino: 'Tarifa de la tasa retributiva ',
      significado:
        'Es el valor que se cobra por unidad de carga contaminante vertida al recurso hídrico (Ministerio de ambiente y desarrollo sostenible, 2012).  ',
    },
    {
      termino: 'Vertimiento ',
      significado:
        'Descarga final a un cuerpo de agua, a un alcantarillado o al suelo, de elementos, sustancias o compuestos contenidos en un medio líquido. (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011). ',
    },
    {
      termino: 'Vertimiento puntual ',
      significado:
        'El que se realiza a partir de un medio de conducción, del cual se puede precisar el punto exacto de descarga al cuerpo de agua, al alcantarillado o al suelo. (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011). ',
    },
    {
      termino: 'Vertimiento no puntual ',
      significado:
        'Aquel en el cual no se puede precisar el punto exacto de descarga al cuerpo de agua o al suelo, tal es el caso de vertimientos provenientes de escorrentía, aplicación de agroquímicos u otros similares (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2011) Decreto No 3930. Pág. 3 a 6. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Corporación Autónoma Regional de Cundinamarca (s.f.).  Permiso de vertimientos. CAR.',
      link: 'https://www.car.gov.co/vercontenido/1168',
    },
    {
      referencia:
        'Corporación Autónoma Regional de las Cuencas de los Ríos Negro y Nare (2018). Términos de referencia para la presentación del informe de caracterización de vertimientos líquidos. CORNARE.',
      link:
        'https://www.cornare.gov.co/Tramites-Ambientales/TR/ter_ref_manejo_vertimientos.pdf',
    },
    {
      referencia: 'Google inc. (2007). Herramientas de SketchUp.',
      link: 'https://tutorialesenpdf.com/sketchup/',
    },
    {
      referencia: 'Google inc. (2007). Diseño de SketchUp.',
      link: 'https://tutorialesenpdf.com/sketchup/',
    },
    {
      referencia:
        'Ministerio de Minas y Energía (s.f.). Guía minero ambiental de explotación.  Seguimiento, Monitoreo y Evaluación. ',
      link:
        'http://repositorio.ucm.edu.co:8080/jspui/bitstream/handle/10839/1305/Laura%20Lizeth%20Gomez%20Molina.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Decreto 1287 de 2014. [Ministerio de Vivienda, Ciudad y Territorio]. Por el cual se establecen criterios para el uso de los biosólidos generados en plantas de tratamiento de aguas residuales municipales. Julio 10 de 2014. ',
      link: '',
    },
    {
      referencia:
        'Resolución 0631 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones. Marzo 17 de 2015 ',
      link: '',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente (2002). Guía ambiental para la formulación de planes de pretratamiento de efluentes industriales.',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/18912/43962_55724.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Laura Lizeth Gómez Molina - Angela María Merchán Bermúdez (2016) Caracterización fisicoquímica de los lodos provenientes de una planta de tratamiento de agua residual industrial de una empresa de café del departamento de Caldas. Pag 10. ',
      link:
        'http://repositorio.ucm.edu.co:8080/jspui/bitstream/handle/10839/1305/Laura%20Lizeth%20Gomez%20Molina.pdf?sequence=1&isAllowed=y   ',
    },
    {
      referencia:
        'Decreto 2667 de 2012. [Ministerio de ambiente y desarrollo sostenible]. Por el cual se reglamenta la tasa retributiva por la utilización directa e indirecta del agua como receptor de los vertimientos puntuales, y se toman otras determinaciones. Diciembre 21 de 2012. ',
      link: '',
    },
    {
      referencia:
        'Ministro del Medio Ambiente (2002). Relaciones esp - autoridad ambiental para control de vertimientos industriales.',
      link: '',
    },
    {
      referencia: 'Normas ISO (s.f.). Implantando la Norma ISO 27001.',
      link: 'https://www.normas-iso.com/iso-27001/',
    },
    {
      referencia:
        'Red Internacional de Seguridad y Salud Ocupacional. (2008). Guía práctica para la Gestión Ambiental Empresarial. RIDSSO.',
      link:
        'http://www.ridsso.com/documentos/muro/207_1499511211_5960b9ab82262.pdf',
    },
    {
      referencia:
        'Secretaría Distrital Del Ambiente. (2015). Solicitud de registro de vertimientos en el Distrito Capital. SDA.',
      link: 'http://ambientebogota.gov.co/vertimientos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: '',
          cargo: '',
          centro: '',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Camilo Andres Bolaño',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
