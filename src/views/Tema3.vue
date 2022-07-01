<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white;") 3
      h1 Personal information

    p.mb-5(data-aos="fade-right") A continuación, puede reconocer algunas preguntas y respuestas útiles para intercambiar información personal de acuerdo con su entorno laboral, académico y personal:

    .conatiner-slider.mb-5(data-aos="fade-left")
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
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="What's your name?"
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_1 Name  Nombre/3_1-1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 ¿Cuál es su nombre?
                  .col-lg-10.col-xl-6.ps-xl-3
                    TarjetaAudio.audio-green.color-acento-contenido.mb-1(
                      texto="My name is Cindy Perez."
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_1 Name  Nombre/3_1-2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 Mi nombre es Cindy Pérez.
                p Y aunque es menos común o educado, también se puede preguntar:
                .d-flex.flex-wrap
                  .col-lg-10.col-xl-5.pe-xl-3
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="Who are you?"
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_1 Name  Nombre/3_1-3.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 ¿Quién es usted?
                  .col-lg-10.col-xl-7.ps-xl-3
                    TarjetaAudio.audio-green.color-acento-contenido.mb-1(
                      texto="I am Hector Sanchez, the new teacher."
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_1 Name  Nombre/3_1-4.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
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
                    a.boton.color-acento-botones.texto-blanco(:href="'https://ingles.celeberrima.com/como-preguntar-y-responder-nombre-y-apellido-en-ingles-y-espanol'" target="_blank")
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
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="Where are you from?"
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 ¿De dónde es usted?
                  .col-lg-10.col-xl-6.ps-xl-3
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="Where do you come from?"
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 ¿De dónde viene usted?
                p.col-xl-10 Para hablar sobre la nacionalidad de uno mismo, NO se dice: <br>
                  | <em style="color: #FF5F65 !important; font-weight: bold">My nationality is Colombian.</em> → Mi nacionalidad es colombiana.
                .col-lg-10.col-xl-6.pe-xl-3
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="I'm Colombian."
                    :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
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
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="What is your profession?"
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 ¿Cuál es su profesión?
                  .col-lg-10.col-xl-6.ps-xl-3
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="What is your occupation?"
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 ¿Cuál es su ocupación?
                p.col-xl-10 Usualmente, se dice:
                .col-lg-10.col-xl-6.pe-xl-3
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="What do you do for a living?"
                    :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
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
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="126 Main Avenue"
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_4 Address  Dirección/3_4-1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 ¿Cuál es su profesión?
                  .col-lg-10.col-xl-6.ps-xl-3
                    p.mb-0 Nunca se dice:
                    p.fw-bold(style="color: #3C3FA7") <em>126 Main Avenue → One hundred twenty-six Main Avenue. <span style="color: #FF5F65">(Es incorrecto)</span></em>
                p.col-xl-10 Se dice:
                .col-lg-10.col-xl-6.pe-xl-3
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="One two six Main Avenue."
                    :audio="require('@/assets/curso/temas/audios/personal_information/3_4 Address  Dirección/3_4-2.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
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
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="One two six Main Avenue."
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_5 Phone number  Número telefónico/3_5-1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 ¿Cuál es su número de teléfono?
                  .col-lg-10.col-xl-6.pe-xl-3
                    TarjetaAudio.audio-green.color-acento-contenido.mb-1(
                      texto="My phone number is 5702-3460."
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_5 Phone number  Número telefónico/3_5-2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 Mi número de teléfono es 5702-3460.
                p.col-xl-10 Al igual que pasa con las direcciones, en inglés los números de teléfono se dicen dígito por dígito, no el número completo:
                .col-lg-10.col-xl-10.pe-xl-3
                  p.ps-3.mb-1.fw-bold(style="color: #3C3FA7") <em>The phone number is 918-2435.</em>
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="One two six Main Avenue."
                    :audio="require('@/assets/curso/temas/audios/personal_information/3_5 Phone number  Número telefónico/3_5-3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
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
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="I am 30 years old."
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3.fw-bold(style="color: #3C3FA7") I have 30 years. ( Incorrecto )
                  .col-lg-10.col-xl-6.pe-xl-3
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="You are 16 years old."
                      :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3.fw-bold(style="color: #3C3FA7") You have 16 years.
                
                .d-flex.align-items-center.ms-5.mt-5(style="background-color: #3C3FA7; max-height: 65px;")
                  img(src="@/assets/curso/temas/tema1/alerta.svg" style="min-height: 85px; max-width: 85px; margin-top: -20px; margin-left: -43px")
                  p.mb-0.text-white.py-3.px-4 En inglés, los números de teléfono <b>se dicen dígito por dígito</b>, no el número completo.
    
    h4.mb-5(data-aos="fade-right") Family / Familia
    p.mb-5(data-aos="fade-right") Para cerrar el componente y la información personal, es necesario apropiar el vocabulario de términos familiares:

    TabsC.color-acento-botones.tabs-c-t3.mb-5(data-aos="fade-left")
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
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="Mother"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Mother.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Madre
                .col-12.col-xl-6.px-1
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="Daughter"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Daughter.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Hija
                .col-12.col-xl-6.px-1
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="Sister"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Sister.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Hermana
                .col-12.col-xl-6.px-1
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="Wife"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/wife.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Esposa
                
          .col-lg-6.ps-lg-2.mt-5.mt-lg-0.pt-5.pt-lg-0
            .card-t3-pestanas-2
              img(src="@/assets/curso/temas/tema3/img-card-2.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #FFD947 !important">Masculine</span> / Masculino</em>
              .d-flex.flex-wrap
                .col-12.col-xl-6.px-1
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="Father"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Father.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Padre
                .col-12.col-xl-6.px-1
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="Son"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Son.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Hijo
                .col-12.col-xl-6.px-1
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="Brother"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Brother.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Hermano
                .col-12.col-xl-6.px-1
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="Husband"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Husband.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
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
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Great-great grandmother"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Great-great grandmother.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Tatarabuela
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Great grandmother"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Great grandmother.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Bisabuela
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Grandmother"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Grandmother.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Abuela
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Mother"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Mother.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Madre
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Daughter"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Daughter.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Hija
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Granddaughter"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Granddaughter.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Nieta
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Great granddaughter"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Great granddaughter.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Bisnieta
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Great-great granddaughter"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Greatgreat granddaughter.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Tataranieta
                
          .col-lg-6.ps-lg-2.mt-5.mt-lg-0.pt-5.pt-lg-0
            .card-t3-pestanas-2
              img(src="@/assets/curso/temas/tema3/img-card-2.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #FFD947 !important">Masculine</span> / Masculino</em>
              .d-flex.flex-wrap
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Great-great grandfather"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Great-great grandfather.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Tatarabuelo
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Great grandfather"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Great grandfather.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Bisabuelo
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Grandfather"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Grandfather.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Abuelo
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Father"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Father.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Padre
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Son"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Son.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Hijo
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Grandson"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Grandson.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Nieto
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Great grandson"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Great grandson.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Bisnieto
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Great-great grandson"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Greatgreat grandson.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.w-100.ps-4.text-start Tataranieto 

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
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Aunt"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Aunt.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Madre
                .col-12.col-xl-6.px-1
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Niece"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Niece.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Hija
                
          .col-12.col-lg-6.ps-lg-2.mt-5.mt-lg-0.pt-5.pt-lg-0.mx-auto
            .card-t3-pestanas-2
              img(src="@/assets/curso/temas/tema3/img-card-2.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #FFD947 !important">Masculine</span> / Masculino</em>
              .d-flex.flex-wrap
                .col-12.col-xl-6.px-1
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Uncle"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Uncle.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Padre
                .col-12.col-xl-6.px-1
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Nephew"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Nephew.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Hijo
          .tarjeta.py-3.px-4.d-flex.flex-wrap.align-items-center.justify-content-center.w-100.mt-4.mt-lg-3(style="background-color: #FFD947")
            .col-12.col-md-5.col-lg-4
              TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                texto="Cousin"
                :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Cousin.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
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
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Mother-in-law"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Mother-in-law.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-4.text-start Suegra
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Daughter-in-law"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Daughter-in-law.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-4.text-start Nuera
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Sister-in-law"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Sister-in-law.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-4.text-start Cuñada
                
          .col-lg-6.ps-lg-2.mt-5.mt-lg-0.pt-5.pt-lg-0
            .card-t3-pestanas-2
              img(src="@/assets/curso/temas/tema3/img-card-2.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #FFD947 !important">Masculine</span> / Masculino</em>
              .d-flex.flex-wrap
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Father-in-law"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Father-in-law.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-4.text-start Suegro
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Son-in-law"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Son-in-law.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-4.text-start Yerno
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Brother-in-law"
                  :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Brother-in-law.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
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
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Stepmother"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Stepmother.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Madrastra
                .col-12.col-xl-6.ps-2
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Stepdaughter"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Stepdaughter.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Hijastra
                .col-12.col-xl-6.pe-2
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Stepsister"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Stepsister.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Hermanastra
                .col-12.col-xl-6.ps-2
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Half-sister"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Half-sister.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Medio hermana
                
          .col-lg-6.ps-lg-2.mt-5.mt-lg-0.pt-5.pt-lg-0
            .card-t3-pestanas-2
              img(src="@/assets/curso/temas/tema3/img-card-2.svg" style="max-width: 125px").mx-auto.img-card
              p.mb-4.text-white.fw-bold <em><span style="color: #FFD947 !important">Masculine</span> / Masculino</em>
              .d-flex.flex-wrap
                .col-12.col-xl-6.pe-2
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Stepfather"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Stepfather.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Padrastro
                .col-12.col-xl-6.ps-2
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Stepson"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Stepson.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Hijastro
                .col-12.col-xl-6.pe-2
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Stepbrother"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Stepbrother.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Hermanastro
                .col-12.col-xl-6.ps-2
                  TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                    texto="Half-brother"
                    :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Half-brother.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-4.text-start Medio hermano
          .w-100.d-flex.flex-wrap.mt-5
            .col-12.col-xl-1.mx-auto.mb-4.mb-xl-0
              img(src="@/assets/curso/temas/tema3/img-10.svg" style="max-width: 104px").mx-auto
            .col-12.col-md-6.col-xl-4.px-2.mb-4.mb-xl-0
              TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                texto="Who is that person?"
                :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Who is that person.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-0.ps-4.text-start Hermanastro
            .col-12.col-md-6.col-xl-4.px-2.mb-4.mb-xl-0
              TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                texto="She's my mother."
                :audio="require('@/assets/curso/temas/audios/3_7_Family_Familia/Shes my mother.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
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
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="American"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-4.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-0.ps-4.text-start (estadounidense)
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Canadian"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-5.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-0.ps-4.text-start (canadiense)
        .col-lg-6.col-xl-3.px-2.mx-auto
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Australian"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-6.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-0.ps-4.text-start (australiano)
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Japanese"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-7.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-0.ps-4.text-start (japonés)
        .col-lg-6.col-xl-3.px-2.mx-auto
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Brazilian"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-8.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-0.ps-4.text-start (brasileño)
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Venezuelan"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-9.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-0.ps-4.text-start (venezolano)
        .col-12.col-lg-9.ms-auto.mb-4
          .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFF7DA")
            .col-12.col-lg-6.px-2
              TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                texto="Where are you from?"
                :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-0.ps-4.text-start ¿De dónde es usted?
            .col-12.col-lg-6.px-2
              TarjetaAudio.audio-green.w-100.text-start.color-acento-contenido.mb-1(
                texto="I’m Colombian. I’m from Cúcuta."
                :audio="require('@/assets/curso/temas/audios/personal_information/3_2 Nationality  Nacionalidad/3_2-11.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
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
                  a.boton.color-acento-botones.texto-blanco(:href="'https://www.youtube.com/watch?v=FLG0ENBTIiY'" target="_blank")
                    span(style="color: black !important") Enlace web
                    img(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 24px").ms-2

    ModalA.modal-vocabulary(:abrir-modal.sync="modal2")
      .d-flex.flex-wrap
        .col-lg-6.col-xl-3.mx-auto
          img(src="@/assets/curso/temas/tema3/img-vocabulary.svg" style="max-width: 126px").mx-auto
        .col-lg-6.col-xl-3.px-2.mx-auto
          img(src="@/assets/curso/temas/tema3/1.svg" style="max-width: 107px").mx-auto.mb-3
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Accountant"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-4.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-4.text-start (contador)
          img(src="@/assets/curso/temas/tema3/4.svg" style="max-width: 107px").mx-auto.mb-3
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Carpenter"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-5.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-4.text-start (carpintero)
        .col-lg-6.col-xl-3.px-2.mx-auto
          img(src="@/assets/curso/temas/tema3/2.svg" style="max-width: 107px").mx-auto.mb-3
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Baker"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-6.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-4.text-start (panadero)
          img(src="@/assets/curso/temas/tema3/5.svg" style="max-width: 107px").mx-auto.mb-3
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Journalist"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-7.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-4.text-start (periodista)
        .col-lg-6.col-xl-3.px-2.mx-auto
          img(src="@/assets/curso/temas/tema3/3.svg" style="max-width: 107px").mx-auto.mb-3
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Butcher"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-8.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-4.text-start (carnicero)
          img(src="@/assets/curso/temas/tema3/6.svg" style="max-width: 107px").mx-auto.mb-3
          TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
            texto="Secretary"
            :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-9.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-4.text-start (secretaria)
        .col-12.col-lg-9.ms-auto.mb-4
          .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFF7DA")
            .col-12.col-lg-6.px-2
              TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                texto="What do you do for a living?"
                :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-3.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-0.ps-4.text-start ¿A qué se dedica?
            .col-12.col-lg-6.px-2
              TarjetaAudio.audio-green.w-100.text-start.color-acento-contenido.mb-1(
                texto="I am a singer."
                :audio="require('@/assets/curso/temas/audios/personal_information/3_3 Occupation  Ocupación/3_3-11.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
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
                  a.boton.color-acento-botones.texto-blanco(:href="'https://www.youtube.com/watch?v=EcBxsMpyUTE'" target="_blank")
                    span(style="color: black !important") Enlace web
                    img(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 24px").ms-2


    ModalA.modal-vocabulary(:abrir-modal.sync="modal3")
      .d-flex.flex-wrap
        .col-lg-6.col-xl-3.mx-auto
          img(src="@/assets/curso/temas/tema3/img-vocabulary.svg" style="max-width: 126px").mx-auto
        .col-lg-6.col-xl-9.d-flex.flex-wrap.mb-4
          p.w-100.ps-4 Otros términos útiles para dar direcciones:
          .col-lg-6.col-xl-4.px-2.mx-auto
            TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
              texto="Street"
              :audio="require('@/assets/curso/temas/audios/personal_information/3_4 Address  Dirección/3_4-3.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ps-4.text-start (calle)
            TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
              texto="Neighborhood"
              :audio="require('@/assets/curso/temas/audios/personal_information/3_4 Address  Dirección/3_4-4.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ps-4.text-start (barrio / vecindario)
          .col-lg-6.col-xl-4.px-2.mx-auto
            TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
              texto="Avenue"
              :audio="require('@/assets/curso/temas/audios/personal_information/3_4 Address  Dirección/3_4-5.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ps-4.text-start (avenida)
            TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
              texto="Corner"
              :audio="require('@/assets/curso/temas/audios/personal_information/3_4 Address  Dirección/3_4-6.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ps-4.text-start (esquina)
          .col-lg-6.col-xl-4.px-2.mx-auto
            TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
              texto="Road"
              :audio="require('@/assets/curso/temas/audios/personal_information/3_4 Address  Dirección/3_4-7.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ps-4.text-start (camino / vía)
            TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
              texto="City"
              :audio="require('@/assets/curso/temas/audios/personal_information/3_4 Address  Dirección/3_4-8.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ps-4.text-start (ciudad)
        .col-12.col-lg-9.ms-auto.mb-4
          .tarjeta.d-flex.flex-wrap.p-4(style="background-color: #FFF7DA")
            .col-12.col-lg-5.px-2
              TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                texto="What’s your address?"
                :audio="require('@/assets/curso/temas/audios/personal_information/3_4 Address  Dirección/3_4-9.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-0.ps-4.text-start ¿Cuál es su dirección?
            .col-12.col-lg-7.px-2
              TarjetaAudio.audio-green.w-100.text-start.color-acento-contenido.mb-1(
                texto="My address is 15th Street #4-23. Downtown."
                :audio="require('@/assets/curso/temas/audios/personal_information/3_4 Address  Dirección/3_4-10.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
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
                  a.boton.color-acento-botones.texto-blanco(:href="'https://www.britishcouncil.es/blog/como-dar-direcciones-en-ingles'" target="_blank")
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
              TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                texto="My phone number is five, seven, three, eight, oh, six."
                :audio="require('@/assets/curso/temas/audios/personal_information/3_5 Phone number  Número telefónico/chat_1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-0.ps-0.ps-md-4.text-start Mi número telefónico es cinco, siete, tres, ocho, cero, seis.
          
          .tarjeta.p-3.py-4.d-flex.align-items-start(style="background-color: white")
            img(src="@/assets/curso/temas/tema3/num-2.svg" style="max-width: 59px; margin-left: -40px")
            .d-flex.flex-wrap.px-4
              p.ps-0.ps-md-4 Usualmente, cuando hay un número <b>cero (0)</b> en el número telefónico, no se pronuncia <em style="color: #FF5F65 !important; font-weight: bold">zero</em> (el nombre del número), sino que se dice <em style="color: #FF5F65 !important; font-weight: bold">“oh”</em>, como el nombre de la letra <b>O:</b>
              p.ps-0.ps-md-4.mb-0.fw-bold(style="color: #3C3FA7") My phone number is 573-806.
              TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                texto="The phone number is three, double five, two, triple seven, one."
                :audio="require('@/assets/curso/temas/audios/personal_information/3_5 Phone number  Número telefónico/chat_2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
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
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Sandra is 24 years old."
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-3.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ps-0.ps-md-4.text-start.fw-bold(style="color: #3C3FA7") Sandra is 24 years. ( Incorrecto )
              .col-12.col-xl-6.px-2
                TarjetaAudio.mt-4.w-100.text-start.color-acento-contenido.mb-1(
                  texto="Sandra is 24."
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-4.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
              .col-12.col-xl-6.px-2.mt-4
                p.mb-0.w-100.ps-4 Él tiene 55 años.
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="He is 55 years old."
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-5.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ps-0.ps-md-4.text-start.fw-bold(style="color: #3C3FA7") Sandra is 24 years. ( Incorrecto )
              .col-12.col-xl-6.px-2.mt-4
                TarjetaAudio.mt-4.w-100.text-start.color-acento-contenido.mb-1(
                  texto="He is 55."
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-6.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )

          .tarjeta.p-3.py-4.d-flex.align-items-start.mb-4(style="background-color: white")
            img(src="@/assets/curso/temas/tema3/num-2.svg" style="max-width: 59px; margin-left: -40px")
            .d-flex.flex-wrap.w-100.px-4
              p.w-100 Para hablar de la edad de los bebés, se puede usar <em style="color: #FF5F65 !important; font-weight: bold">months</em> (meses) en vez de <em style="color: #FF5F65 !important; font-weight: bold">years</em> (años):
              .col-12.col-xl-6.px-2
                p.mb-0.w-100.ps-4 El bebé tiene 3 meses.
                TarjetaAudio.w-100.text-start.color-acento-contenido.mb-1(
                  texto="The baby is 3 months old."
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-7.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
              .col-12.col-xl-6.px-2
                TarjetaAudio.mt-4.w-100.text-start.color-acento-contenido.mb-1(
                  texto="She is 10 months old."
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-8.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )

          .tarjeta.p-3.py-4.d-flex.align-items-start.mb-4(style="background-color: white")
            img(src="@/assets/curso/temas/tema3/num-2.svg" style="max-width: 59px; margin-left: -40px")
            .d-flex.flex-wrap.w-100.px-4
              .col-12.col-xl-6.px-2
                TarjetaAudio.mt-4.w-100.text-start.color-acento-contenido.mb-1(
                  texto="How old are you"
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-9.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ps-0.ps-md-4.text-start ¿Cuántos años tienes?
              .col-12.col-xl-6.px-2
                TarjetaAudio.audio-green.mt-4.w-100.text-start.color-acento-contenido.mb-1(
                  texto="I'm thirty years old."
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-10.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ps-0.ps-md-4.text-start Tengo treinta años.
              .col-12.col-xl-6.px-2.mt-4
                TarjetaAudio.mt-4.w-100.text-start.color-acento-contenido.mb-1(
                  texto="How old is Claudia?"
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-11.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ps-0.ps-md-4.text-start ¿Cuántos años tiene Claudia?
              .col-12.col-xl-6.px-2.mt-4
                TarjetaAudio.audio-green.mt-4.w-100.text-start.color-acento-contenido.mb-1(
                  texto="She's 40."
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-12.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ps-0.ps-md-4.text-start Ella tiene 40.
              .col-12.col-xl-6.px-2.mt-4
                TarjetaAudio.mt-4.w-100.text-start.color-acento-contenido.mb-1(
                  texto="How old is your baby?"
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-13.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ps-0.ps-md-4.text-start ¿Cuántos años tiene tu bebé?
              .col-12.col-xl-6.px-2.mt-4
                TarjetaAudio.audio-green.mt-4.w-100.text-start.color-acento-contenido.mb-1(
                  texto="He’s three months old."
                  :audio="require('@/assets/curso/temas/audios/personal_information/3_6 age edad/3_6-14.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ps-0.ps-md-4.text-start Él tiene tres meses.
    
    .titulo-segundo.color-acento-contenido.mb-5(data-aos="fade-right")
      h2 Actividad didáctica

    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>At the immigration and citizenship office</em> / En la oficina de inmigración y ciudadanía.
      template(#descripcion-actividad) Escuche los audios y complete los espacios  de cada una de las frases arrastrando el término correcto.
</template>

<script>
import Audio from '@/components/Audio.vue'
import TarjetaAudio from '@/components/TarjetaAudio.vue'
export default {
  name: 'Tema3',
  components: { Audio, TarjetaAudio },
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
    dialogo: {
      personajes: [
        {
          nombre: 'Immigration officer',
          img: require('@/assets/curso/temas/tema3/officer.svg'),
        },
        {
          nombre: 'Sandra',
          img: require('@/assets/curso/temas/tema3/girl.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Immigration officer',
          textoIng: 'Hello. What’s your first name?',
          textoEsp: '¿Cuál es tu primer nombre?',
          audio: require('@/assets/curso/temas/audios/actividad/Immigration_officer/1.mp3'),
        },
        {
          personaje: 'Sandra',
          textoIng: 'My first name *** Sandra. ',
          textoEsp: 'Mi primer nombre es Sandra.',
          audio: require('@/assets/curso/temas/audios/actividad/Sandra/1.wav'),
          palabra: 'Is',
        },
        {
          personaje: 'Immigration officer',
          textoIng: 'What’s your last name?',
          textoEsp: '¿Cual es tu apellido?',
          audio: require('@/assets/curso/temas/audios/actividad/Immigration_officer/2.mp3'),
        },
        {
          personaje: 'Sandra',
          textoIng: '*** last name is Lopez.',
          textoEsp: 'Mi apellido es López.',
          audio: require('@/assets/curso/temas/audios/actividad/Sandra/2.wav'),
          palabra: 'My',
        },
        {
          personaje: 'Immigration officer',
          textoIng: '***  your phone number?',
          textoEsp: '¿Cuál es tu número de teléfono?',
          audio: require('@/assets/curso/temas/audios/actividad/Immigration_officer/3.mp3'),
          palabra: 'What’s',
        },
        {
          personaje: 'Sandra',
          textoIng: 'My phone number is 302-6789.',
          textoEsp: 'Mi número de teléfono es 302-6789.',
          audio: require('@/assets/curso/temas/audios/actividad/Sandra/3.wav'),
        },
        {
          personaje: 'Immigration officer',
          textoIng: 'How old are you?',
          textoEsp: '¿Cuantos años tienes?',
          audio: require('@/assets/curso/temas/audios/actividad/Immigration_officer/4.mp3'),
        },
        {
          personaje: 'Sandra',
          textoIng: 'I ***  32 years old.',
          textoEsp: 'Tengo 32 años.',
          audio: require('@/assets/curso/temas/audios/actividad/Sandra/4.mp3'),
          palabra: 'Am',
        },
        {
          personaje: 'Immigration officer',
          textoIng: 'What’s. *** address?',
          textoEsp: '¿Cual es tu direccion?',
          audio: require('@/assets/curso/temas/audios/actividad/Immigration_officer/5.mp3'),
          palabra: 'Your',
        },
        {
          personaje: 'Sandra',
          textoIng: 'My address is 20th Avenue #11-45.',
          textoEsp: 'Mi dirección es 20th Avenue #11-45.',
          audio: require('@/assets/curso/temas/audios/actividad/Sandra/5.wav'),
        },
        {
          personaje: 'Immigration officer',
          textoIng: 'Where *** you from?',
          textoEsp: '¿De dónde eres?',
          audio: require('@/assets/curso/temas/audios/actividad/Immigration_officer/6.mp3'),
          palabra: 'Are',
        },
        {
          personaje: 'Sandra',
          textoIng: 'I’m Ecuadorian. I’m *** Quito.',
          textoEsp: 'soy ecuatoriana soy de quito',
          audio: require('@/assets/curso/temas/audios/actividad/Sandra/6.wav'),
          palabra: 'From',
        },
        {
          personaje: 'Immigration officer',
          textoIng: 'What do you do for a *** ?',
          textoEsp: '¿A qué te dedicas?',
          audio: require('@/assets/curso/temas/audios/actividad/Immigration_officer/7.mp3'),
          palabra: 'Living',
        },
        {
          personaje: 'Sandra',
          textoIng: 'I’m *** nurse.',
          textoEsp: 'Soy enfermera',
          audio: require('@/assets/curso/temas/audios/actividad/Sandra/7.wav'),
          palabra: 'A',
        },
        {
          personaje: 'Immigration officer',
          textoIng: 'FALTA! <br>Who did you move to the *** with?',
          textoEsp: '¿Con quién te mudaste al país?',
          audio: require('@/assets/curso/temas/audios/actividad/Immigration_officer/8.mp3'),
          palabra: 'Country',
        },
        {
          personaje: 'Sandra',
          textoIng: 'I moved here *** my daughter.',
          textoEsp: 'Me mudé aquí con mi hija.',
          audio: require('@/assets/curso/temas/audios/actividad/Sandra/8.wav'),
          palabra: 'With',
        },
        {
          personaje: 'Immigration officer',
          textoIng:
            'Thank you very much for the information.You can now claim your documents.',
          textoEsp:
            'Muchas gracias por la información. Ya puedes reclamar tus documentos.',
          audio: require('@/assets/curso/temas/audios/actividad/Immigration_officer/8.mp3'),
        },
      ],
    },
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
.dialogo__chat__item__person img
  width: 90px
  height: 90px
</style>
