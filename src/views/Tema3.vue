<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white;") 3
      h1 Personal information

    p.mb-5 A continuación, puede reconocer algunas preguntas y respuestas útiles para intercambiar información personal de acuerdo con su entorno laboral, académico y personal:

    .conatiner-slider.mb-5
      SlyderF.slider-content-cf-v4.align-items-center
        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/temas/tema3/img-1.svg" style="max-width: 262px").mx-auto
          .col-12.col-lg-8.py-4
            .tarjeta-content-t2
              .container-card
                h4 Name / Nombre
                p.mb-4 Generalmente, se hace la pregunta:
                .d-flex.flex-wrap
                  .col-lg-10.col-xl-6.pe-xl-3
                    .audio
                      span Aqui va el audio
                    p.ps-3 ¿Cuál es su nombre?
                  .col-lg-10.col-xl-6.ps-xl-3
                    .audio-2
                      span Aqui va el audio
                    p.ps-3 Mi nombre es Cindy Pérez.
                p Y aunque es menos común o educado, también se puede preguntar:
                .d-flex.flex-wrap
                  .col-lg-10.col-xl-5.pe-xl-3
                    .audio
                      span Aqui va el audio
                    p.ps-3 ¿Quién es usted?
                  .col-lg-10.col-xl-7.ps-xl-3
                    .audio-2
                      span Aqui va el audio
                    p.ps-3 Soy Héctor Sánchez, el nuevo profesor.
          .tarjeta.color-acento-contenido.p-3.mb-3.w-100(style="border-radius: 0")
            .row.justify-content-around.align-items-center
              .col-4.col-lg-1
                img(src="@/assets/curso/temas/tema3/img-2.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-white Puede consultar más información a través de Internet. <br>
                      |Recomendamos el siguiente enlace: <br>
                      | <b>Celeberrima. Cómo preguntar y responder nombre y apellido en inglés y español. (2021, October 29).<br></b>
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      span(style="color: black !important") Enlace web
                      img(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 24px").ms-2

        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto.h-100
            img(src="@/assets/curso/temas/tema3/img-4.svg" style="max-width: 325px").mx-auto.mb-5
            .indicador__container
              .indicador--click(v-if="mostrarIndicador")
              img(src="@/assets/curso/temas/tema3/vocabulary.svg" style="max-width: 209px; cursor: pointer;" @click="modal1 = true; mostrarIndicador = false;").mx-auto
          .col-12.col-lg-8.py-4
            .tarjeta-content-t2
              .container-card
                h4 Nationality / Nacionalidad
                p.mb-4 La palabra <em style="color: #FF5F65 !important; font-weight: bold">“nationality”</em> es poco usada a la hora de hablar inglés, pero comúnmente se puede encontrar en documentación y en temas relacionados con inmigración o la industria hotelera. Casi nunca se dice: <em style="color: #FF5F65 !important; font-weight: bold">What is your nationality?</em> → ¿Cuál es su nacionalidad?
                .d-flex.flex-wrap
                  .col-lg-10.col-xl-6.pe-xl-3
                    .audio
                      span Aqui va el audio
                    p.ps-3 ¿De dónde es usted?
                  .col-lg-10.col-xl-6.ps-xl-3
                    .audio
                      span Aqui va el audio
                    p.ps-3 ¿De dónde viene usted?
                p.col-xl-10 Para hablar sobre la nacionalidad de uno mismo, NO se dice: <br>
                  | <em style="color: #FF5F65 !important; font-weight: bold">My nationality is Colombian.</em> → Mi nacionalidad es colombiana.
                .col-lg-10.col-xl-6.pe-xl-3
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-3 Soy colombiano / colombiana.
                .d-flex.align-items-center.ms-5.mt-5(style="background-color: #3C3FA7; max-height: 65px;")
                  img(src="@/assets/curso/temas/tema1/alerta.svg" style="min-height: 85px; max-width: 85px; margin-top: -20px; margin-left: -43px")
                  p.mb-0.text-white.py-3.px-4.fw-bold En inglés las nacionalidades siempre se escriben con la primera letra <br>en mayúscula.
        
        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/temas/tema3/img-5.svg" style="max-width: 325px").mx-auto.mb-5
            .indicador__container
              .indicador--click(v-if="mostrarIndicador2")
              img(src="@/assets/curso/temas/tema3/vocabulary.svg" style="max-width: 209px; cursor: pointer;" @click="modal2 = true; mostrarIndicador2 = false;").mx-auto
          .col-12.col-lg-8.py-4
            .tarjeta-content-t2
              .container-card
                h4 Occupation / Ocupación
                p.mb-4 En inglés, casi nunca se dice:
                .d-flex.flex-wrap
                  .col-lg-10.col-xl-6.pe-xl-3
                    .audio
                      span Aqui va el audio
                    p.ps-3 ¿Cuál es su profesión?
                  .col-lg-10.col-xl-6.ps-xl-3
                    .audio
                      span Aqui va el audio
                    p.ps-3 ¿Cuál es su ocupación?
                p.col-xl-10 Usualmente, se dice:
                .col-lg-10.col-xl-6.pe-xl-3
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-3 ¿A qué se dedica?
                img(src="@/assets/curso/temas/tema3/img-6.jpg")

        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/temas/tema3/img-7.svg" style="max-width: 310px").mx-auto.mb-5
            .indicador__container
              .indicador--click(v-if="mostrarIndicador3")
              img(src="@/assets/curso/temas/tema3/vocabulary.svg" style="max-width: 209px; cursor: pointer;" @click="modal3 = true; mostrarIndicador3 = false;").mx-auto
          .col-12.col-lg-8.py-4
            .tarjeta-content-t2
              .container-card
                h4 Address / Dirección
                p.mb-4 Las direcciones de los países angloparlantes suelen ser muy diferentes a las de otros países, como, por ejemplo, Colombia.
                  br
                  br
                  |Una dirección comúnmente está compuesta por:
                  br
                  |Número + Nombre de la vía + Tipo de vía
                .d-flex.flex-wrap
                  .col-lg-10.col-xl-6.pe-xl-3
                    .audio
                      span Aqui va el audio
                    p.ps-3 ¿Cuál es su profesión?
                  .col-lg-10.col-xl-6.ps-xl-3
                    p.mb-0 Nunca se dice:
                    p.fw-bold(style="color: #3C3FA7") <em>126 Main Avenue → One hundred twenty-six Main Avenue. <span style="color: #FF5F65">(Es incorrecto)</span></em>
                p.col-xl-10 Se dice:
                .col-lg-10.col-xl-6.pe-xl-3
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-3 #126 de la Avenida Main.
                .d-flex.align-items-center.ms-5.mt-5(style="background-color: #3C3FA7; max-height: 65px;")
                  img(src="@/assets/curso/temas/tema1/alerta.svg" style="min-height: 85px; max-width: 85px; margin-top: -20px; margin-left: -43px")
                  p.mb-0.text-white.py-3.px-4 En inglés, los números de las direcciones <b>se dicen dígito por dígito</b>, no el número completo.

        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/temas/tema3/img-8.svg" style="max-width: 310px").mx-auto.mb-5
            .indicador__container
              .indicador--click(v-if="mostrarIndicador4")
              img(src="@/assets/curso/temas/tema3/recordar.svg" style="max-width: 209px; cursor: pointer;" @click="modal4 = true; mostrarIndicador4 = false;").mx-auto
          .col-12.col-lg-8.py-4
            .tarjeta-content-t2
              .container-card
                h4 Phone number / Número telefónico
                p.mb-4 En inglés, a la hora de hablar, es más común decir <em style="color: #FF5F65 !important; font-weight: bold">phone number</em> en vez de <em style="color: #FF5F65 !important; font-weight: bold">telephone number</em>.
                .d-flex.flex-wrap
                  .col-lg-10.col-xl-6.pe-xl-3
                    .audio
                      span Aqui va el audio
                    p.ps-3 ¿Cuál es su número de teléfono?
                  .col-lg-10.col-xl-6.pe-xl-3
                    .audio-2
                      span Aqui va el audio
                    p.ps-3 Mi número de teléfono es 5702-3460.
                p.col-xl-10 Al igual que pasa con las direcciones, en inglés los números de teléfono se dicen dígito por dígito, no el número completo:
                .col-lg-10.col-xl-10.pe-xl-3
                  p.ps-3.mb-1.fw-bold(style="color: #3C3FA7") <em>The phone number is 918-2435.</em>
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-3 El número telefónico es nueve, uno, ocho, dos, cuatro, tres, cinco.
                .d-flex.align-items-center.ms-5.mt-5(style="background-color: #3C3FA7; max-height: 65px;")
                  img(src="@/assets/curso/temas/tema1/alerta.svg" style="min-height: 85px; max-width: 85px; margin-top: -20px; margin-left: -43px")
                  p.mb-0.text-white.py-3.px-4 En inglés, los números de teléfono <b>se dicen dígito por dígito</b>, no el número completo.

        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/temas/tema3/img-9.svg" style="max-width: 310px").mx-auto.mb-5
            .indicador__container
              .indicador--click(v-if="mostrarIndicador5")
              img(src="@/assets/curso/temas/tema3/vocabulary.svg" style="max-width: 209px; cursor: pointer;" @click="modal5 = true; mostrarIndicador5 = false;").mx-auto
          .col-12.col-lg-8.py-4
            .tarjeta-content-t2
              .container-card
                h4 Age / Edad
                p.mb-4 A diferencia del idioma español, en el inglés no se utiliza el verbo <b>“tener”</b> <em style="color: #FF5F65 !important; font-weight: bold">(to have)</em> para indicar la edad, en cambio, se utiliza el verbo <b>“ser / estar”</b> <em style="color: #FF5F65 !important; font-weight: bold">(to be)</em>, por lo que la interpretación de esta expresión no se traduce textualmente:
                .d-flex.flex-wrap
                  .col-lg-10.col-xl-6.pe-xl-3
                    .audio
                      span Aqui va el audio
                    p.ps-3.fw-bold(style="color: #3C3FA7") I have 30 years. ( Incorrecto )
                  .col-lg-10.col-xl-6.pe-xl-3
                    .audio
                      span Aqui va el audio
                    p.ps-3.fw-bold(style="color: #3C3FA7") You have 16 years.
                
                .d-flex.align-items-center.ms-5.mt-5(style="background-color: #3C3FA7; max-height: 65px;")
                  img(src="@/assets/curso/temas/tema1/alerta.svg" style="min-height: 85px; max-width: 85px; margin-top: -20px; margin-left: -43px")
                  p.mb-0.text-white.py-3.px-4 En inglés, los números de teléfono <b>se dicen dígito por dígito</b>, no el número completo.
    
    h4.mb-5 Family / Familia
    p.mb-5 Para cerrar el componente y la información personal, es necesario apropiar el vocabulario de términos familiares:

    TabsC.color-acento-botones.tabs-c-t3
      .py-3.py-md-4(titulo='<b><em style="color: #FF5F65 !important;">Immediate Family</em> <br> Familia inmediata</b>')
        .d-flex.flex-wrap.col-lg-10.mx-auto
          p.w-100 <b><em style="color: #FF5F65 !important;">Immediate Family</em> / Familia inmediata</b>
          p.w-100(style="margin-bottom: 80px") Términos para designar a los miembros de la familia nuclear:

          .col-lg-6.pe-lg-2
            .card-t3-pestanas-1
              img(src="@/assets/curso/temas/tema3/img-card-1.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #3C3FA7 !important">Feminine</span> / Femenino</em>
              .d-flex.flex-wrap
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Madre
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Hija
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Hermana
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Esposa
                
          .col-lg-6.ps-lg-2.mt-5.mt-lg-0.pt-5.pt-lg-0
            .card-t3-pestanas-2
              img(src="@/assets/curso/temas/tema3/img-card-2.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #FFD947 !important">Masculine</span> / Masculino</em>
              .d-flex.flex-wrap
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Padre
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Hijo
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Hermano
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Esposo

          p.mt-5.fw-bold También se usan los términos:

          p.mb-0.w-100 <em style="color: #FF5F65 !important; font-weight: bold">Parent</em> → Padre de familia (sin importar el género, no importa si es hombre o mujer)
          p.w-100 <em style="color: #FF5F65 !important; font-weight: bold">Parents</em> → Padres de familia (sin importar el género, no importa si son hombres o mujeres)

          p.mb-0.w-100 <em style="color: #FF5F65 !important; font-weight: bold">Child</em> → Hijo o niño (sin importar el género, no importa si es hombre o mujer)
          p.w-100 <em style="color: #FF5F65 !important; font-weight: bold">Children</em> → Hijos o niños (sin importar el género, no importa si son hombres o mujeres)

          p.mb-0.w-100 <em style="color: #FF5F65 !important; font-weight: bold">Sibling</em> → Hermano (sin importar el género, no importa si es hombre o mujer)
          p.w-100 <em style="color: #FF5F65 !important; font-weight: bold">Siblings</em> → Hermanos (sin importar el género, no importa si son hombres o mujeres)

      .py-3.py-md-4(titulo='<b><em style="color: #FF5F65 !important;">Different Generations</em> <br> Diferentes generaciones</b>')
        .d-flex.flex-wrap.col-lg-10.mx-auto
          p.w-100 <b><em style="color: #FF5F65 !important;">Different Generations</em> / Diferentes generaciones</b>
          p.w-100(style="margin-bottom: 80px") Habla de los <em style="color: #FF5F65 !important; font-weight: bold;">ancestors</em> (antepasados) y los <em style="color: #FF5F65 !important; font-weight: bold;">decendents</em> (descendientes). Se caracteriza por el uso de prefijos como <em style="color: #FF5F65 !important; font-weight: bold;">grand- y great-</em>:

          .col-lg-6.pe-lg-2
            .card-t3-pestanas-1
              img(src="@/assets/curso/temas/tema3/img-card-1.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #3C3FA7 !important">Feminine</span> / Femenino</em>
              .d-flex.flex-wrap
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Tatarabuela
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Bisabuela
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Abuela
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Madre
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Hija
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Nieta
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Bisnieta
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Tataranieta
                
          .col-lg-6.ps-lg-2.mt-5.mt-lg-0.pt-5.pt-lg-0
            .card-t3-pestanas-2
              img(src="@/assets/curso/temas/tema3/img-card-2.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #FFD947 !important">Masculine</span> / Masculino</em>
              .d-flex.flex-wrap
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Tatarabuelo
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Bisabuelo
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Abuelo
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Padre
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Hijo
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Nieto
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Bisnieto
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Tataranieto 

      .py-3.py-md-4(titulo='<b><em style="color: #FF5F65 !important;">Extended Family</em> <br> Familia extendida</b>')
        .d-flex.flex-wrap.col-lg-10.mx-auto
          p.w-100 <b><em style="color: #FF5F65 !important;">Extended Family</em> / Familia extendida</b>
          p.w-100(style="margin-bottom: 80px") Términos para designar a los miembros de la familia nuclear:

          .col-12.col-lg-6.pe-lg-2.mx-auto
            .card-t3-pestanas-1
              img(src="@/assets/curso/temas/tema3/img-card-1.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #3C3FA7 !important">Feminine</span> / Femenino</em>
              .d-flex.flex-wrap
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Madre
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Hija
                
          .col-12.col-lg-6.ps-lg-2.mt-5.mt-lg-0.pt-5.pt-lg-0.mx-auto
            .card-t3-pestanas-2
              img(src="@/assets/curso/temas/tema3/img-card-2.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #FFD947 !important">Masculine</span> / Masculino</em>
              .d-flex.flex-wrap
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Padre
                .col-12.col-xl-6.px-1
                  .audio.mb-2
                    span Aqui va el audio
                  p.ps-4.text-start Hijo
          .tarjeta.py-3.px-4.d-flex.flex-wrap.align-items-center.justify-content-center.w-100.mt-4.mt-lg-3(style="background-color: #FFD947")
            .col-12.col-md-5.col-lg-4
              .audio.mb-1
                span Aqui va el audio
              p.mb-0.ps-4.text-start Padre
            .col-12.col-md-5.col-lg-6.ps-4
              p.mb-0 (sin importar el género, no importa si es hombre o mujer)
      
      .py-3.py-md-4(titulo='<b><em style="color: #FF5F65 !important;">The In-Laws</em> <br> La familia “política”</b>')
        .d-flex.flex-wrap.col-lg-10.mx-auto
          p.w-100 <b><em style="color: #FF5F65 !important;">The In-Laws</em> / La familia “política”</b>
          p.w-100(style="margin-bottom: 80px") Términos para designar a los miembros de la familia de la pareja o que no poseen un vínculo de sangre sino por uniones matrimoniales:

          .col-lg-6.pe-lg-2
            .card-t3-pestanas-1
              img(src="@/assets/curso/temas/tema3/img-card-1.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #3C3FA7 !important">Feminine</span> / Femenino</em>
              .d-flex.flex-wrap
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Suegra
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Nuera
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Cuñada
                
          .col-lg-6.ps-lg-2.mt-5.mt-lg-0.pt-5.pt-lg-0
            .card-t3-pestanas-2
              img(src="@/assets/curso/temas/tema3/img-card-2.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #FFD947 !important">Masculine</span> / Masculino</em>
              .d-flex.flex-wrap
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Suegro
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Yerno
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.ps-4.text-start Cuñado

      .py-3.py-md-4(titulo='<b><em style="color: #FF5F65 !important;">Relatives and Extended Family</em> <br> Demás parientes y familia extendida</b>')
        .d-flex.flex-wrap.col-lg-10.mx-auto
          p.w-100 <b><em style="color: #FF5F65 !important;">Relatives and Extended Family</em> / Demás parientes y familia extendida</b>
          p.w-100(style="margin-bottom: 80px") Términos para designar otros miembros de la familia que no hacen parte de la familia nuclear o inmediata:

          .col-lg-6.pe-lg-2
            .card-t3-pestanas-1
              img(src="@/assets/curso/temas/tema3/img-card-1.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #3C3FA7 !important">Feminine</span> / Femenino</em>
              .d-flex.flex-wrap
                .col-12.col-xl-6.pe-2
                  .audio.mb-2.w-100
                    span Aqui va el audio
                  p.ps-4.text-start Madrastra
                .col-12.col-xl-6.ps-2
                  .audio.mb-2.w-100
                    span Aqui va el audio
                  p.ps-4.text-start Hijastra
                .col-12.col-xl-6.pe-2
                  .audio.mb-2.w-100
                    span Aqui va el audio
                  p.ps-4.text-start Hermanastra
                .col-12.col-xl-6.ps-2
                  .audio.mb-2.w-100
                    span Aqui va el audio
                  p.ps-4.text-start Medio hermana
                
          .col-lg-6.ps-lg-2.mt-5.mt-lg-0.pt-5.pt-lg-0
            .card-t3-pestanas-2
              img(src="@/assets/curso/temas/tema3/img-card-2.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #FFD947 !important">Masculine</span> / Masculino</em>
              .d-flex.flex-wrap
                .col-12.col-xl-6.pe-2
                  .audio.mb-2.w-100
                    span Aqui va el audio
                  p.ps-4.text-start Padrastro
                .col-12.col-xl-6.ps-2
                  .audio.mb-2.w-100
                    span Aqui va el audio
                  p.ps-4.text-start Hijastro
                .col-12.col-xl-6.pe-2
                  .audio.mb-2.w-100
                    span Aqui va el audio
                  p.ps-4.text-start Hermanastro
                .col-12.col-xl-6.ps-2
                  .audio.mb-2.w-100
                    span Aqui va el audio
                  p.ps-4.text-start Medio hermano
          .w-100.d-flex.flex-wrap.mt-5
            .col-12.col-xl-1.mx-auto.mb-4.mb-xl-0
              img(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 104px").mx-auto
            .col-12.col-md-6.col-xl-4.px-2.mb-4.mb-xl-0
              .audio.mb-2.w-100
                span Aqui va el audio
              p.mb-0.ps-4.text-start Hermanastro
            .col-12.col-md-6.col-xl-4.px-2.mb-4.mb-xl-0
              .audio-2.mb-2.w-100
                span Aqui va el audio
              p.mb-0.ps-4.text-start Hermanastro
            .col-12.col-xl-3.px-2
              a.btn-openmodal.boton.color-acento-contenido.indicador__container.w-100(@click="modal1 = true")
                span.text-white.fw-bold.mx-auto Estructura de la familia
                .indicador--click(v-if="mostrarIndicador")

    ModalA.modal-vocabulary(:abrir-modal.sync="modal1")
      .d-flex.flex-wrap
        .col-lg-6.col-xl-3.mx-auto
          img(src="@/assets/curso/temas/tema3/img-vocabulary.svg" style="max-width: 126px").mx-auto
        .col-lg-6.col-xl-3.px-2.mx-auto
          .audio.mb-2.w-100
            span Aqui va el audio
          p.mb-0.ps-4.text-start (estadounidense)
          .audio.mb-2.w-100
            span Aqui va el audio
          p.mb-0.ps-4.text-start (canadiense)
        .col-lg-6.col-xl-3.px-2.mx-auto
          .audio.mb-2.w-100
            span Aqui va el audio
          p.mb-0.ps-4.text-start (australiano)
          .audio.mb-2.w-100
            span Aqui va el audio
          p.mb-0.ps-4.text-start (japonés)
        .col-lg-6.col-xl-3.px-2.mx-auto
          .audio.mb-2.w-100
            span Aqui va el audio
          p.mb-0.ps-4.text-start (brasileño)
          .audio.mb-2.w-100
            span Aqui va el audio
          p.mb-0.ps-4.text-start (venezolano)
        .col-12.col-lg-9.ms-auto.mb-4
          .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFF7DA")
            .col-12.col-lg-6.px-2
              .audio.mb-2.w-100
                span Aqui va el audio
              p.mb-0.ps-4.text-start ¿De dónde es usted?
            .col-12.col-lg-6.px-2
              .audio-2.mb-2.w-100
                span Aqui va el audio
              p.mb-0.ps-4.text-start Yo soy colombiana. Soy de Cúcuta.
        .tarjeta.color-acento-contenido.p-3.mb-3.w-100(style="border-radius: 0")
          .row.justify-content-around.align-items-center
            .col-4.col-lg-1
              img(src="@/assets/curso/temas/tema3/img-2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white Puede consultar más vocabulario a través de Internet. 
                    | Recomendamos el siguiente enlace: 
                    | <b>Material UP. (2020, September 07). Países y nacionalidades en inglés.</b>
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span(style="color: black !important") Enlace web
                    img(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 24px").ms-2

    ModalA.modal-vocabulary(:abrir-modal.sync="modal2")
      .d-flex.flex-wrap
        .col-lg-6.col-xl-3.mx-auto
          img(src="@/assets/curso/temas/tema3/img-vocabulary.svg" style="max-width: 126px").mx-auto
        .col-lg-6.col-xl-3.px-2.mx-auto
          img(src="@/assets/curso/temas/tema3/1.svg" style="max-width: 107px").mx-auto.mb-3
          .audio.w-100
            span Aqui va el audio
          p.ps-4.text-start (contador)
          img(src="@/assets/curso/temas/tema3/4.svg" style="max-width: 107px").mx-auto.mb-3
          .audio.w-100
            span Aqui va el audio
          p.ps-4.text-start (carpintero)
        .col-lg-6.col-xl-3.px-2.mx-auto
          img(src="@/assets/curso/temas/tema3/2.svg" style="max-width: 107px").mx-auto.mb-3
          .audio.w-100
            span Aqui va el audio
          p.ps-4.text-start (panadero)
          img(src="@/assets/curso/temas/tema3/5.svg" style="max-width: 107px").mx-auto.mb-3
          .audio.w-100
            span Aqui va el audio
          p.ps-4.text-start (periodista)
        .col-lg-6.col-xl-3.px-2.mx-auto
          img(src="@/assets/curso/temas/tema3/3.svg" style="max-width: 107px").mx-auto.mb-3
          .audio.w-100
            span Aqui va el audio
          p.ps-4.text-start (carnicero)
          img(src="@/assets/curso/temas/tema3/6.svg" style="max-width: 107px").mx-auto.mb-3
          .audio.w-100
            span Aqui va el audio
          p.ps-4.text-start (secretaria)
        .col-12.col-lg-9.ms-auto.mb-4
          .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFF7DA")
            .col-12.col-lg-6.px-2
              .audio.mb-2.w-100
                span Aqui va el audio
              p.mb-0.ps-4.text-start ¿A qué se dedica?
            .col-12.col-lg-6.px-2
              .audio-2.mb-2.w-100
                span Aqui va el audio
              p.mb-0.ps-4.text-start Soy cantante.
        .tarjeta.color-acento-contenido.p-3.mb-3.w-100(style="border-radius: 0")
          .row.justify-content-around.align-items-center
            .col-4.col-lg-1
              img(src="@/assets/curso/temas/tema3/img-2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white Puede consultar más vocabulario a través de Internet. 
                    | Recomendamos el siguiente enlace: <b><em>letsgo!</em> (2016, June 14). Vocabulario inglés-español "PROFESIONES".</b>
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span(style="color: black !important") Enlace web
                    img(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 24px").ms-2


    ModalA.modal-vocabulary(:abrir-modal.sync="modal3")
      .d-flex.flex-wrap
        .col-lg-6.col-xl-3.mx-auto
          img(src="@/assets/curso/temas/tema3/img-vocabulary.svg" style="max-width: 126px").mx-auto
        .col-lg-6.col-xl-9.d-flex.flex-wrap.mb-4
          p.w-100.ps-4 Otros términos útiles para dar direcciones:
          .col-lg-6.col-xl-4.px-2.mx-auto
            .audio.mb-2.w-100
              span Aqui va el audio
            p.mb-0.ps-4.text-start (calle)
            .audio.mb-2.w-100
              span Aqui va el audio
            p.mb-0.ps-4.text-start (barrio / vecindario)
          .col-lg-6.col-xl-4.px-2.mx-auto
            .audio.mb-2.w-100
              span Aqui va el audio
            p.mb-0.ps-4.text-start (avenida)
            .audio.mb-2.w-100
              span Aqui va el audio
            p.mb-0.ps-4.text-start (esquina)
          .col-lg-6.col-xl-4.px-2.mx-auto
            .audio.mb-2.w-100
              span Aqui va el audio
            p.mb-0.ps-4.text-start (camino / vía)
            .audio.mb-2.w-100
              span Aqui va el audio
            p.mb-0.ps-4.text-start (ciudad)
        .col-12.col-lg-9.ms-auto.mb-4
          .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFF7DA")
            .col-12.col-lg-5.px-2
              .audio.mb-2.w-100
                span Aqui va el audio
              p.mb-0.ps-4.text-start ¿Cuál es su dirección?
            .col-12.col-lg-7.px-2
              .audio-2.mb-2.w-100
                span Aqui va el audio
              p.mb-0.ps-4.text-start Mi dirección es la calle 15 #4-23. Centro.
        .tarjeta.color-acento-contenido.p-3.mb-3.w-100(style="border-radius: 0")
          .row.justify-content-around.align-items-center
            .col-4.col-lg-1
              img(src="@/assets/curso/temas/tema3/img-2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white Puede consultar más vocabulario a través de Internet. 
                    | Recomendamos el siguiente enlace: 
                    | <b>Material UP. (2020, September 07). Países y nacionalidades en inglés.</b>
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span(style="color: black !important") Enlace web
                    img(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 24px").ms-2


    ModalA.modal-recordar(:abrir-modal.sync="modal4")
      .d-flex.flex-wrap
        .col-12.col-lg-3.mx-auto
          img(src="@/assets/curso/temas/tema3/img-recordar.svg" style="max-width: 126px")
        .col-12.col-lg-9
          .tarjeta.p-3.py-4.d-flex.align-items-start.mb-4(style="background-color: white")
            img(src="@/assets/curso/temas/tema3/num-1.svg" style="max-width: 59px; margin-left: -40px")
            .d-flex.flex-wrap.px-4
              p.ps-0.ps-md-4 Usualmente, cuando hay un número <b>cero (0)</b> en el número telefónico, no se pronuncia <em style="color: #FF5F65 !important; font-weight: bold">zero</em> (el nombre del número), sino que se dice <em style="color: #FF5F65 !important; font-weight: bold">“oh”</em>, como el nombre de la letra <b>O:</b>
              p.ps-0.ps-md-4.mb-0.fw-bold(style="color: #3C3FA7") My phone number is 573-806.
              .audio.mb-2.w-100
                span Aqui va el audio
              p.mb-0.ps-0.ps-md-4.text-start Mi número telefónico es cinco, siete, tres, ocho, cero, seis.
          
          .tarjeta.p-3.py-4.d-flex.align-items-start(style="background-color: white")
            img(src="@/assets/curso/temas/tema3/num-2.svg" style="max-width: 59px; margin-left: -40px")
            .d-flex.flex-wrap.px-4
              p.ps-0.ps-md-4 Usualmente, cuando hay un número <b>cero (0)</b> en el número telefónico, no se pronuncia <em style="color: #FF5F65 !important; font-weight: bold">zero</em> (el nombre del número), sino que se dice <em style="color: #FF5F65 !important; font-weight: bold">“oh”</em>, como el nombre de la letra <b>O:</b>
              p.ps-0.ps-md-4.mb-0.fw-bold(style="color: #3C3FA7") My phone number is 573-806.
              .audio.mb-2.w-100
                span Aqui va el audio
              p.mb-0.ps-0.ps-md-4.text-start Mi número telefónico es cinco, siete, tres, ocho, cero, seis.


    ModalA.modal-recordar(:abrir-modal.sync="modal5")
      .d-flex.flex-wrap
        .col-12.col-lg-3.mx-auto
          img(src="@/assets/curso/temas/tema3/img-recordar.svg" style="max-width: 126px")
        .col-12.col-lg-9
          .tarjeta.p-3.py-4.d-flex.align-items-start.mb-4(style="background-color: white")
            img(src="@/assets/curso/temas/tema3/num-1.svg" style="max-width: 59px; margin-left: -40px")
            .d-flex.flex-wrap.w-100.px-4
              p.w-100 Es posible omitir <em style="color: #FF5F65 !important; font-weight: bold">“years old”.</em>
              .col-12.col-xl-6.px-2
                p.mb-0.w-100.ps-4 Sandra tiene 24 años.
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.mb-0.ps-0.ps-md-4.text-start.fw-bold(style="color: #3C3FA7") Sandra is 24 years. ( Incorrecto )
              .col-12.col-xl-6.px-2
                .audio.mb-2.w-100.mt-4
                  span Aqui va el audio
              .col-12.col-xl-6.px-2.mt-4
                p.mb-0.w-100.ps-4 Él tiene 55 años.
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.mb-0.ps-0.ps-md-4.text-start.fw-bold(style="color: #3C3FA7") Sandra is 24 years. ( Incorrecto )
              .col-12.col-xl-6.px-2.mt-4
                .audio.mb-2.w-100.mt-4
                  span He is 55 years. ( Incorrecto )

          .tarjeta.p-3.py-4.d-flex.align-items-start.mb-4(style="background-color: white")
            img(src="@/assets/curso/temas/tema3/num-2.svg" style="max-width: 59px; margin-left: -40px")
            .d-flex.flex-wrap.w-100.px-4
              p.w-100 Para hablar de la edad de los bebés, se puede usar <em style="color: #FF5F65 !important; font-weight: bold">months</em> (meses) en vez de <em style="color: #FF5F65 !important; font-weight: bold">years</em> (años):
              .col-12.col-xl-6.px-2
                p.mb-0.w-100.ps-4 Sandra tiene 24 años.
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.mb-0.ps-0.ps-md-4.text-start.fw-bold(style="color: #3C3FA7") Sandra is 24 years. ( Incorrecto )
              .col-12.col-xl-6.px-2
                .audio.mb-2.w-100.mt-4
                  span Aqui va el audio

          .tarjeta.p-3.py-4.d-flex.align-items-start.mb-4(style="background-color: white")
            img(src="@/assets/curso/temas/tema3/num-2.svg" style="max-width: 59px; margin-left: -40px")
            .d-flex.flex-wrap.w-100.px-4
              .col-12.col-xl-6.px-2
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.mb-0.ps-0.ps-md-4.text-start ¿Cuántos años tienes?
              .col-12.col-xl-6.px-2
                .audio-2.mb-2.w-100
                  span Aqui va el audio
                p.mb-0.ps-0.ps-md-4.text-start Tengo veintiocho años.
              .col-12.col-xl-6.px-2.mt-4
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.mb-0.ps-0.ps-md-4.text-start ¿Cuántos años tiene Claudia?
              .col-12.col-xl-6.px-2.mt-4
                .audio-2.mb-2.w-100
                  span Aqui va el audio
                p.mb-0.ps-0.ps-md-4.text-start Ella tiene 40.
              .col-12.col-xl-6.px-2.mt-4
                .audio.mb-2.w-100
                  span Aqui va el audio
                p.mb-0.ps-0.ps-md-4.text-start ¿Cuántos años tiene tu bebé?
              .col-12.col-xl-6.px-2.mt-4
                .audio-2.mb-2.w-100
                  span Aqui va el audio
                p.mb-0.ps-0.ps-md-4.text-start Él tiene tres meses.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    mostrarIndicador: true,
    mostrarIndicador2: true,
    mostrarIndicador3: true,
    mostrarIndicador4: true,
    mostrarIndicador5: true,
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
.conatiner-slider
  background-color: #6B8DFF
.tarjeta-content-t2
  background-color: white
  border-radius: 10px
  width: 100%
  padding: 1rem
  padding-top: 2rem
.tabs-c-t3
  .card-t3-pestanas-1
    background-color: #FF5F65
    padding: 1rem
    border-radius: 20px
    text-align: center
    .img-card
      margin-bottom: 1rem
      margin-top: -76px
  .card-t3-pestanas-2
    background-color: #6B8DFF
    padding: 1rem
    border-radius: 20px
    text-align: center
    .img-card
      margin-bottom: 1rem
      margin-top: -76px
  .tabs-c__header
    margin-bottom: 0
  .tabs-c__content-item
    padding: .5rem
    border-right: 1px solid #afafaf
    border-left: 1px solid #afafaf
.btn-openmodal
  border-radius: 50px
  min-height: 50px
  box-shadow: 0 3px 3px 5px #0000000F
.modal-vocabulary
  .modal-a__content
    background-color: #C4D1FF !important
.modal-recordar
  .modal-a__content
    background-color: #FFF0B5 !important
</style>
