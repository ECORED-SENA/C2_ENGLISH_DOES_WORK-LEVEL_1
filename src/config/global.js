export default {
  global: {
    componenteFormativo: "Let's introduce ourselves!¡Presentémonos!",
    descripcionCurso:
      'Durante el siguiente componente, se explica el tema presente simple, que es un tiempo verbal fundamental; seguidamente, se profundiza en los pronombres de sujeto y objeto, para hablar de quién realiza y a quién afecta la acción en una oración; y por último, se indica vocabulario sobre información personal que, junto al presente simple, es de ayuda para presentarse a sí mismo de manera competente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción al tiempo presente simple',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos gramaticales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tercera persona singular',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estructuras',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pronombres personales en función del sujeto y el objeto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Pronombres de sujeto / <em>Subject pronouns</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Pronombres de objeto / <em>Object pronouns</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Personal information</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      tema: 'Introducción al tiempo presente simple',
      referencia:
        'Equipo académico-Teaching Centre in Colombia. (2021). <em>Estructura, reglas y ejemplos del present simple en inglés</em>. British Council Colombia.',
      tipo: 'Artículo Web',
      link: 'https://www.britishcouncil.co/blog/aprende-ingles/present-simple',
    },
    {
      tema: 'Pronombres personales en función del sujeto y el objeto',
      referencia:
        'Inglés Fácil-ALEMA. (2018). <em>Pronombres Objeto En Inglés Diferencia Entre Object Pronouns y Subject Pronouns | Lección # 29</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ftLQRXDcr40',
    },
    {
      tema: 'Personal information',
      referencia:
        'Do you speak English? (2015). <em>Personal Information / La Información Personal (Repaso)</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IVPE_HydoVA',
    },
  ],
  glosario: [
    {
      termino: '<em>Grammatical structure</em> / Estructura gramatical',
      significado:
        'forma en la que las palabras se unen y configuran para formar oraciones y expresar ideas o enunciados.',
    },
    {
      termino: '<em>Personal information</em> / Información personal',
      significado:
        'datos personales de cada individuo, los cuales lo identifican, lo describen y le dan identidad.',
    },
    {
      termino: '<em>Pronouns</em> / Pronombres',
      significado:
        'conjunto de palabras, como por ejemplo: yo, ella, él, usted, eso, nosotros o ellos, que en un idioma se usan como sustitutos de sustantivos o frases nominales y cuyos referentes se nombran o entienden en el contexto; estos pueden ser pronombres de sujeto o pronombres de objeto, pero también existen otros tipos, como pronombres posesivos, pronombres reflexivos, etc.',
    },
    {
      termino: '<em>Verb tense</em< / Tiempo verbal',
      significado:
        'cada uno de los modelos o grupos en los que generalmente se divide la conjugación verbal de una lengua para expresar diferencias de tiempo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Do you speak English? (2015). Personal Information / La Información Personal (Repaso) [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=IVPE_HydoVA',
    },
    {
      referencia:
        'Equipo académico-Teaching Centre in Colombia. (2021). Estructura, reglas y ejemplos del present simple en inglés. British Council Colombia.',
      link: 'https://www.britishcouncil.co/blog/aprende-ingles/present-simple',
    },
    {
      referencia:
        'Inglés Fácil-ALEMA. (2018). Pronombres Objeto En Inglés Diferencia Entre Object Pronouns y Subject Pronouns | Lección # 29 [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=ftLQRXDcr40',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experta Temática',
        centro:
          'Regional Distrito Capital-CENIGRAF-Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Santander-Centro de la Industria, la Empresa y los Servicios–CIES',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital–Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Regional Distrito Capital–Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Corté',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios-Regional Tolima',
      },
    ],
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
