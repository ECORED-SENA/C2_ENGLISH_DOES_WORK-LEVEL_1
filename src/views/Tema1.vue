<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white;") 1
      h1 Introducción al tiempo presente simple
    p.mb-5(data-aos="fade-right") El primer tiempo verbal para aprender en inglés es el <em style="color: #FF5F65; font-weight: bold;">simple present,</em> o tiempo presente simple, el cual se puede emplear para:

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Tabla 1
      span Condiciones presente simple
    
    .d-flex.flex-wrap.px-2.px-lg-4.pt-4.mb-5(style="background-color: #6B8DFF;")
      .col-lg-4.mb-4.mb-lg-0.mx-auto
        img(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 262px").mx-auto
      SlyderF.slider-content-cf.col-12.col-lg-8.align-items-center
        .tarjeta-content-t1.p-2.px-md-4(data-aos="fade-up")
          .container-card
            p.ps-3.fw-bold Condición
            p.ps-3.mb-4 Comunicar acciones o estados permanentes.
            span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo:
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Colombia has a huge hotel industry."
              :audio="require('@/assets/curso/temas/audios/1_introducción_PS/1-1.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = true"
            )
            p.ps-3 Colombia tiene una enorme industria hotelera.
        
        .tarjeta-content-t1.p-2.px-md-4
          .container-card
            p.ps-3.fw-bold Condición
            p.ps-3.mb-4 Al hablar de estados que tienen regularidad o periodicidad.
            span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo: 
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="I go to the dentist every year."
              :audio="require('@/assets/curso/temas/audios/1_introducción_PS/1-2.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.ps-3 Voy al dentista cada año.
        
        .tarjeta-content-t1.p-2.px-md-4
          .container-card
            p.ps-3.fw-bold Condición
            p.ps-3.mb-4 Cuando se hace referencia a rutinas, hábitos o cosas que se realizan con cierta frecuencia.
            span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo: 
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Ana wakes up every day at 6:00 am."
              :audio="require('@/assets/curso/temas/audios/1_introducción_PS/1-3.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.ps-3 Ana se despierta todos los días a las 6:00 am.
        
        .tarjeta-content-t1.p-2.px-md-4
          .container-card
            p.ps-3.fw-bold Condición
            p.ps-3.mb-4 Al dar instrucciones, indicaciones o señales.
            span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo: 
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="You turn left and then go down Oak Street."
              :audio="require('@/assets/curso/temas/audios/1_introducción_PS/1-4.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.ps-3 Gire a la izquierda y luego baje por la calle Oak.
        
        .tarjeta-content-t1.p-2.px-md-4
          .container-card
            p.ps-3.fw-bold Condición
            p.ps-3.mb-4 Cuando se enuncian hechos, compromisos, citas que se van a llevar a cabo en un momento determinado.
            span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo: 
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Next week is the championship."
              :audio="require('@/assets/curso/temas/audios/1_introducción_PS/1-5.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.ps-3 La próxima semana es el campeonato.

    .titulo-segundo.color-acento-contenido.mb-5(data-aos="fade-right")
      h2#t_1_1 1.1 Conceptos gramaticales
    
    p(data-aos="fade-left") Antes de entrar de lleno a la estructura gramatical de las oraciones en presente simple, se debe entender cómo se conjugan correctamente los verbos en este tiempo.
      br
      br
      | Los verbos más comúnmente usados en el idioma inglés son los siguientes:

    SlyderF(columnas="columnas-5" data-aos="fade-left").slider-content-cf-v2.col-12.align-items-center.mb-5
      .position-relative
        img(src="@/assets/curso/temas/tema1/1.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-1.mp3')"
            @audio-hover="mostrarIndicadorAudio = true"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to be</em>
            br
            | ser/estar
      .position-relative
        img(src="@/assets/curso/temas/tema1/2.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-2.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to do</em>
            br
            | hacer
      .position-relative
        img(src="@/assets/curso/temas/tema1/3.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-3.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to have</em>
            br
            | tener
      .position-relative
        img(src="@/assets/curso/temas/tema1/4.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-4.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to eat</em>
            br
            | comer
      .position-relative
        img(src="@/assets/curso/temas/tema1/5.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-5.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to read</em>
            br
            | Leer
      .position-relative
        img(src="@/assets/curso/temas/tema1/6.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-6.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to call</em>
            br
            | llamar
      .position-relative
        img(src="@/assets/curso/temas/tema1/7.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-7.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center(style="min-width: 100px") <em style="color: #FF5F65 !important; font-weight: bold;">to play</em>
            br
            | jugar / tocar
            br
            |instrumento
            br
            |musical
      .position-relative
        img(src="@/assets/curso/temas/tema1/8.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-8.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to study</em>
            br
            | estudiar
      .position-relative
        img(src="@/assets/curso/temas/tema1/9.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-9.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to drink</em>
            br
            | beber/tomar
      .position-relative
        img(src="@/assets/curso/temas/tema1/10.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-10.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to buy</em>
            br
            | comprar
      .position-relative
        img(src="@/assets/curso/temas/tema1/11.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-11.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to walk</em>
            br
            | caminar
      .position-relative
        img(src="@/assets/curso/temas/tema1/12.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-12.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to watch</em>
            br
            | ver / mirar
      .position-relative
        img(src="@/assets/curso/temas/tema1/13.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-13.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to listen to</em>
            br
            | escuchar
      .position-relative
        img(src="@/assets/curso/temas/tema1/14.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-14.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to write</em>
            br
            | escribir
      .position-relative
        img(src="@/assets/curso/temas/tema1/15.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-15.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to sing</em>
            br
            | cantar
      .position-relative
        img(src="@/assets/curso/temas/tema1/16.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-16.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to sleep</em>
            br
            | dormir
      .position-relative
        img(src="@/assets/curso/temas/tema1/17.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-17.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to fly</em>
            br
            | volar
      .position-relative
        img(src="@/assets/curso/temas/tema1/18.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-18.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to wash</em>
            br
            | lavar
      .position-relative
        img(src="@/assets/curso/temas/tema1/19.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-19.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to work</em>
            br
            | trabajar
      .position-relative
        img(src="@/assets/curso/temas/tema1/20.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-20.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to travel</em>
            br
            | viajar
      .position-relative
        img(src="@/assets/curso/temas/tema1/21.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-21.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center(style="min-width: 150px") <em style="color: #FF5F65 !important; font-weight: bold;">to drive</em>
            br
            | conducir / manejar
      .position-relative
        img(src="@/assets/curso/temas/tema1/22.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-22.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to go</em>
            br
            | ir
      .position-relative
        img(src="@/assets/curso/temas/tema1/23.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-23.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to live</em>
            br
            | vivir
      .position-relative
        img(src="@/assets/curso/temas/tema1/24.jpg")
        .content-audio-carousel
          Audio.color-acento-contenido.mx-3(
            :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-24.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
          p.w-100.mb-0.text-center <em style="color: #FF5F65 !important; font-weight: bold;">to pay</em>
            br
            | pagar

    .bg-content-50.mb-5(data-aos="fade-right")
      .content-banner.col-lg-10.mx-auto
        .col-lg-5.mb-4.mb-lg-0.mx-auto
          img(src="@/assets/curso/temas/tema1/img-2.png" style="max-width: 363px").mx-auto
        .col-lg-7.p-4.p-lg-0
          img(src="@/assets/curso/temas/tema1/alerta.svg" style="max-width: 85px").mt-4.mb-5
          h4.text-white(style="font-size: 22px") ¿Por qué se pone <em style="color: #FFD947 !important">“to”</em> antes del verbo?
          p.text-white La partícula <em style="color: #FFD947 !important">to</em> es usada con la forma base de un verbo para indicar que el verbo está en infinitivo.
    
    p.mb-5(data-aos="fade-left") Ahora, en concordancia gramatical entre el verbo y el sujeto <em style="color: #FF5F65 !important; font-weight: bold;">(subject verb agreement)</em>, se determina que, cuando se conjuga en el tiempo presente simple, se pone, después del sujeto correspondiente, la forma base del verbo (sin la partícula to) y este solo se modifica cuando está conjugado con la tercera persona singular. <b>Se debe tener cuidado porque, según sea el caso el verbo, podría terminar en -s, -es o –ies:</b>

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2
      span Concordancia gramatical presente simple
    .header-table-custom(data-aos="fade-left")
      img(src="@/assets/curso/temas/tema1/tabla-header-1.svg")
    .table-responsive(data-aos="fade-right")
      table.table-custom-1.mb-5
        tr
          td
          td
            p.fw-bold.mb-0 Condición
          td.color-blue-td
            p.fw-bold.mb-0 To work
          td
            p.fw-bold.mb-0 To go
          td
            p.fw-bold.mb-0 To study
        tr
          td(rowspan="3")
            p.fw-bold.mb-0 Singular
          td
            p.fw-bold.mb-0 1.ª persona
          td.color-blue-td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="I work"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-25.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="I go"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-26.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="I study"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-27.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td
            p.fw-bold.mb-0 2.ª persona
          td.color-blue-td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="You work"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-28.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="You go"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-29.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="You study"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-30.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td
            p.fw-bold.mb-0 3.ª persona
          td.color-blue-td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="He works"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-31.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="She works"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-32.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="It works"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-33.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="He goes"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-34.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="She goes"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-35.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="It goes"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-36.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="He studies"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-37.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="She studies"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-38.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="It studies"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-39.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td(rowspan="3")
            p.fw-bold.mb-0 Plural
          td
            p.fw-bold.mb-0 1.ª persona
          td.color-blue-td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="We work"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-40.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="We go"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-41.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="We study"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-42.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td
            p.fw-bold.mb-0 2.ª persona
          td.color-blue-td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="you work"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-28.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="You go"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-29.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="You study"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-30.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td
            p.fw-bold.mb-0 3.ª persona
          td.color-blue-td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="They work"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-43.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="They go"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-44.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="They study"
              :audio="require('@/assets/curso/temas/audios/1_1_conceptos_gramaticales/1_1-45.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

    .titulo-segundo.color-acento-contenido.mb-5(data-aos="fade-right")
      h2#t_1_2 1.2 Tercera persona singular
    
    p.mb-5(data-aos="fade-left") Para la conjugación de verbos en presente simple para la tercera persona singular, existen 6 reglas que se detallan a continuación:

    figure.mb-5.video1(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uUlq-MW18f4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5(data-aos="fade-right") Los verbos irregulares <em style="color: #FF5F65 !important; font-weight: bold;">to be</em> y <em style="color: #FF5F65 !important; font-weight: bold">to have</em>, junto con el verbo <em style="color: #FF5F65 !important; font-weight: bold">to do</em>, son especiales, porque no solo funcionan como verbos, sino que, en algunos casos y en distintos tiempos verbales, también hacen la función de auxiliar:
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Tabla 3
      span Verbos distintivos <em>To be</em>, <em>to have</em> y <em>to do</em>
    .header-table-custom(data-aos="fade-left")
      img(src="@/assets/curso/temas/tema1/tabla-header-2.svg")
    .table-responsive(data-aos="fade-right")
      table.table-custom-1.mb-5
        tr
          td
          td
          td.color-blue-td
            p.fw-bold.mb-0 To be
          td
            p.fw-bold.mb-0 To have
          td
            p.fw-bold.mb-0 To do
        tr
          td(rowspan="5")
            p.fw-bold.mb-0 Singular
          td
            p.fw-bold.mb-0 1.ª persona
          td.color-blue-td
            p.fw-bold.mb-0 I am
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="I have"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-1.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="I do"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-2.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td
            p.fw-bold.mb-0 2.ª persona
          td.color-blue-td
            p.fw-bold.mb-0 You are
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="You have"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-3.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="You do"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-4.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td(rowspan="3")
            p.fw-bold.mb-0 3.ª persona
          td.color-blue-td
            p.fw-bold.mb-0 He is
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="He has"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-5.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="He does"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-6.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td.color-blue-td
            p.fw-bold.mb-0 She is
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="She has"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-7.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="She does"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-8.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td.color-blue-td
            p.fw-bold.mb-0 It is
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="It has"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-9.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="It does"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-10.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td(rowspan="3")
            p.fw-bold.mb-0 Plural
          td
            p.fw-bold.mb-0 1.ª persona
          td.color-blue-td
            p.fw-bold.mb-0 We are
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="We have"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-11.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="We do"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-12.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td
            p.text-center.fw-bold.mb-0 2.ª persona
          td.color-blue-td
            p.fw-bold.mb-0 You are
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="You have"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-13.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="You do"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-14.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
        tr
          td
            p.fw-bold.mb-0 3.ª persona
          td.color-blue-td
            p.fw-bold.mb-0 They are
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="They have"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-15.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          td
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="They do"
              :audio="require('@/assets/curso/temas/audios/1_2_Tercera_persona_singular_en_presente_simple/1_2-16.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

    .titulo-segundo.color-acento-contenido.mb-5(data-aos="fade-left")
      h2#t_1_3 1.3 Estructuras
    
    p.mb-5(data-aos="fade-right") Las siguientes son las formas para estructurar oraciones que afirmen, nieguen o hagan preguntas sobre diferentes enunciados. La configuración de estas oraciones es un poco diferente a la del idioma español, razón por la cual se debe estar atento al orden y uso de las palabras, como se describe a continuación:

    TabsB.color-primario.mb-5.tabs-custom(data-aos="fade-left")
      .py-4.py-md-5(titulo="Frases afirmativas en presente simple/<em>Affirmative phrases in the present simple tense</em>" :icono="require('@/assets/curso/temas/tema1/pestanas-1.svg')")
        .p-4.px-lg-5
          .d-flex.flex-wrap
            h3.text-title-tabs Frases afirmativas en presente simple/<em>Affirmative phrases in the present simple tense</em>
            p.w-100 Para las oraciones afirmativas se debe tener en cuenta la concordancia gramatical entre el verbo y el sujeto, sobre todo cuando se habla en tercera persona singular ya que el verbo se modifica. Su estructura es la siguiente:
            .d-flex.flex-wrap.w-100.p-4.mb-5(style="background-color: white")
              img(src="@/assets/curso/temas/tema1/img-tabs-1.svg" style="max-width: 238px").mx-auto.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema1/img-tabs-1-1.svg" style="max-width: 400px").mx-auto.ms-lg-0.me-lg-auto
            .d-flex.flex-wrap.w-100
              .col-12.col-md-6.col-lg-4.px-xl-3
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="I live in Colombia"
                  :audio="require('@/assets/curso/temas/audios/1_3_1_Frases_afirmativas_en_presente_simple/1_3_1-1.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 Yo vivo en Colombia.
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="You play the piano"
                  :audio="require('@/assets/curso/temas/audios/1_3_1_Frases_afirmativas_en_presente_simple/1_3_1-2.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 Tú tocas el piano.
              .col-12.col-md-6.col-lg-4
                TarjetaAudio.color-acento-contenido.mb-1.me-xl-5(
                  texto="He lives in Colombia"
                  :audio="require('@/assets/curso/temas/audios/1_3_1_Frases_afirmativas_en_presente_simple/1_3_1-3.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 Él vive en Colombia.
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="Sandra and Carla drink too much soda"
                  :audio="require('@/assets/curso/temas/audios/1_3_1_Frases_afirmativas_en_presente_simple/1_3_1-4.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 Sandra y Carla beben demasiada gaseosa.
              .col-12.col-md-6.col-lg-4.px-xl-3
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="The dog sleeps very well"
                  :audio="require('@/assets/curso/temas/audios/1_3_1_Frases_afirmativas_en_presente_simple/1_3_1-5.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 El perro duerme muy bien.

      .py-4.py-md-5(titulo="Frases negativas en presente simple/<em>Negative phrases in the present simple</em>" :icono="require('@/assets/curso/temas/tema1/pestanas-2.svg')")
        .p-4.px-lg-5
          .d-flex.flex-wrap
            h3.text-title-tabs Frases negativas en presente simple/<em>Negative phrases in the present simple</em>
            p.w-100 Para las oraciones negativas, se debe usar el verbo auxiliar <em style="color: #FF5F65 !important; font-weight: bold;">“does”</em> para la tercera persona singular y <em style="color: #FF5F65 !important; font-weight: bold;">“do”</em> para el resto de las personas gramaticales.
            p.w-100 Un verbo auxiliar es un verbo que ayuda a formar ciertas oraciones y a mostrar que están estructuradas en un tiempo verbal en particular. En este caso, <em style="color: #FF5F65 !important; font-weight: bold;">do</em> y <em style="color: #FF5F65 !important; font-weight: bold;">does</em> no hacen referencia a su traducción textual del verbo “hacer”, sino que son un verbo auxiliar que no tiene una traducción exacta al idioma español.
            .d-flex.flex-wrap.w-100.p-4.mb-5(style="background-color: white")
              img(src="@/assets/curso/temas/tema1/img-tabs-1.svg" style="max-width: 238px").mx-auto.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema1/img-tabs-1-2.svg" style="max-width: 505px").mx-auto.ms-lg-0.me-lg-auto
            .d-flex.flex-wrap.w-100
              .col-12.col-md-6.col-lg-4.px-xl-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="I do not live in Colombia"
                  :audio="require('@/assets/curso/temas/audios/1_3_2_Frases_negativas_en_presente_simple/1_3_2-1.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 Yo no vivo en Colombia
              .col-12.col-md-6.col-lg-6.px-xl-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="He does not live in Colombia"
                  :audio="require('@/assets/curso/temas/audios/1_3_2_Frases_negativas_en_presente_simple/1_3_2-2.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 Él no vive en Colombia
            .tarjeta.color-primario.p-3.mb-5.w-100(style="border-radius: 0")
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/tema1/alerta.svg")
                .col
                  p.mb-0 <b>Warning! / ¡Advertencia! </b> <br>
                    | Debido al uso del verbo auxiliar, el verbo principal siempre debe ir en forma base.
      .py-4.py-md-5(titulo="Contracciones/<em>Contractions</em>" :icono="require('@/assets/curso/temas/tema1/pestanas-3.svg')")
        .p-4.px-lg-5
          .d-flex.flex-wrap
            h3.text-title-tabs Contracciones/<em>Contractions</em>
            p.w-100 Una contracción es la forma corta de un grupo de palabras omitiendo ciertas letras y sonidos, generalmente el apóstrofe representa la letra faltante. Una de las formas más comunes de contracciones es la que crean los verbos auxiliares como do o does unidos a la partícula de negación not.
            .d-flex.flex-wrap.w-100.p-4.mb-5(style="background-color: white")
              img(src="@/assets/curso/temas/tema1/img-tabs-1.svg" style="max-width: 238px").col-lg-5.mx-auto.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema1/img-tabs-1-3.svg" style="max-width: 295px").mx-auto.ms-lg-0.me-lg-auto
            .d-flex.flex-wrap.w-100
              .col-12.col-md-6.col-lg-4.px-xl-3
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="Oscar doesn't read books"
                  :audio="require('@/assets/curso/temas/audios/1_3_2_Frases_negativas_en_presente_simple/1_3_2-3.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 Oscar no lee libros.
              .col-12.col-md-6.col-lg-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="Julia and I don't walk home every day"
                  :audio="require('@/assets/curso/temas/audios/1_3_2_Frases_negativas_en_presente_simple/1_3_2-4.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 Julia y yo no caminamos a casa todos los días.
              .col-12.col-md-6.col-lg-4.px-xl-3
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="They don't watch TV at night"
                  :audio="require('@/assets/curso/temas/audios/1_3_2_Frases_negativas_en_presente_simple/1_3_2-5.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 Ellos no ven televisión por la noche.
            .tarjeta.color-primario.p-3.mb-5.w-100(style="border-radius: 0")
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/tema1/alerta.svg")
                .col
                  p.mb-0 <b>Warning! / ¡Advertencia! </b> <br>
                    | Una regla general es la de evitar usar contracciones en contextos formales, como conversaciones, documentos y discursos académicos, oficiales o laborales. Las contracciones son más usadas en contextos informales, como conversaciones con amigos o personas de confianza, en la cotidianidad.
      .py-4.py-md-5(titulo="Frases interrogativas en presente simple/<em>Interrogative phrases in the present simple tense</em>" :icono="require('@/assets/curso/temas/tema1/pestanas-4.svg')")
        .p-4.px-lg-5
          .d-flex.flex-wrap
            h3.text-title-tabs Frases interrogativas en presente simple/<em>Interrogative phrases in the present simple tense</em>
            p.w-100 Para las oraciones interrogativas en inglés también se debe hacer uso de los verbos auxiliares <em style="color: #FF5F65 !important; font-weight: bold;">do / does</em>, y por ende el verbo principal de la pregunta debe ir siempre en forma base.
            .d-flex.flex-wrap.w-100.p-4.mb-5(style="background-color: white")
              img(src="@/assets/curso/temas/tema1/img-tabs-1.svg" style="max-width: 238px").col-lg-5.mx-auto.mb-4.mb-lg-0
              img(src="@/assets/curso/temas/tema1/img-tabs-1-4.svg" style="max-width: 505px").mx-auto.ms-lg-0.me-lg-auto
            .d-flex.flex-wrap.justify-content-center.w-100
              .col-12.col-md-6.col-lg-4.px-xl-3
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="Do I live in Colombia?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-1.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4 ¿Yo vivo en Colombia?
              .col-12.col-md-6.col-lg-4.px-xl-3
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="Does he live in Colombia"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-2.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4.ps-3 ¿Él vive en Colombia?
              
            .tarjeta.color-primario.p-3.mb-5.w-100(style="border-radius: 0")
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/tema1/alerta.svg")
                .col
                  p.mb-0 <b>Warning! / ¡Advertencia! </b> <br>
                    | En las estructuras interrogativas, el auxiliar va al principio de la oración.

      .py-4.py-md-5(titulo="Preguntas de sí o no/<em>Yes or No questions</em>" :icono="require('@/assets/curso/temas/tema1/pestanas-5.svg')")
        .p-4.px-lg-5
          .d-flex.flex-wrap
            h3.text-title-tabs Preguntas de sí o no/<em>Yes or No questions</em>
            p.w-100 También conocidas como <b>“preguntas cerradas”</b>, estas preguntas plantean un escenario al que se puede responder afirmativa o negativamente. Esto se puede hacer con respuestas completas o respuestas cortas.
            .d-flex.flex-wrap.w-100.my-5
              .d-flex.flex-wrap.col-xl-6.p-2.mb-5
                .w-100.p-4.d-flex.flex-wrap(style="background-color: white; border-radius: 5px;")
                  .col-md-5.col-lg-4.mb-4
                    img(src="@/assets/curso/temas/tema1/img-tabs-2.svg" style="max-width: 125px; margin-top: -3rem")
                  .col-md-7.col-lg-8.mb-4
                    span.ps-3.fw-bold For example / Por ejemplo:
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="Do you buy fast food?"
                      :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-3.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ps-3 ¿Tú compras comida rápida?
                  .d-flex.flex-wrap.w-100
                    .col-md-6.pe-3
                      span.ps-3.fw-bold Respuesta completa:
                      TarjetaAudio.audio-green.color-acento-contenido.mb-1(
                        texto="Yes, I buy fast food."
                        :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-4.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ps-3 Sí, yo compro comida rápida.
                    .col-md-6.px-3
                      span.ps-3.fw-bold Respuesta corta:
                      TarjetaAudio.audio-green.color-acento-contenido.mb-1(
                        texto="Yes, I do."
                        :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-5.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ps-3 Sí.
              .d-flex.flex-wrap.col-xl-6.p-2.mb-5
                .w-100.p-4.d-flex.flex-wrap(style="background-color: white; border-radius: 5px;")
                  .col-md-5.col-lg-4.mb-4
                    img(src="@/assets/curso/temas/tema1/img-tabs-2.svg" style="max-width: 125px; margin-top: -3rem")
                  .col-md-7.col-lg-8.mb-4
                    span.ps-3.fw-bold ¿Él maneja un carro deportivo?
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="Does he drive a sports car?"
                      :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-6.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ps-3 ¿Él maneja un carro deportivo?
                  .d-flex.flex-wrap.w-100
                    .col-md-7.pe-lg-2
                      span.ps-3.fw-bold Respuesta completa:
                      TarjetaAudio.audio-green.color-acento-contenido.mb-1(
                        texto="No, he doesn't drive a sports car."
                        :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-7.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ps-3 No, él no maneja un carro deportivo.
                    .col-md-5.px-xl-2
                      span.ps-3.fw-bold Respuesta corta:
                      TarjetaAudio.audio-green.color-acento-contenido.mb-1(
                        texto="No, he doesn’t."
                        :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-8.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ps-3 No.
            .d-flex.flex-wrap.justify-content-center.w-100
              .col-12.col-md-6.col-lg-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="Do I read too slowly?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-9.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4.ps-3 ¿Yo leo muy lento?
                TarjetaAudio.audio-green.color-acento-contenido.mb-1(
                  texto="No, you don’t."
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-10.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4.ps-3 No.

              .col-12.col-md-6.col-lg-4.px-xl-3
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="Does she have a guitar?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-11.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4.ps-3 ¿Ella tiene una guitarra?
                TarjetaAudio.audio-green.color-acento-contenido.mb-1(
                  texto="Yes, she does. "
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-12.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4.ps-3 Sí.

              .col-12.col-md-6.col-lg-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="Do Diana and you wash the dishes?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-13.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4.ps-3 ¿Tú y Diana lavan los platos?
                TarjetaAudio.audio-green.color-acento-contenido.mb-1(
                  texto="Yes, we do."
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-14.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ms-0.ms-md-4.ps-3 Sí.

    h3(data-aos="fade-left") Preguntas informativas / Information questions 
    p.mb-5(data-aos="fade-right") También conocidas como “preguntas abiertas”, son preguntas cuya función es pedir información al interlocutor. A diferencia de las preguntas cerradas, que solo confirman o niegan una afirmación, las preguntas abiertas en inglés tienen un uso específico según el contexto y lugar donde se usen (piden un dato en específico). Las preguntas abiertas en inglés se caracterizan por tener al principio de su estructura una palabra que incluye las letras W y H en ellas:

    .d-flex.flex-wrap.mb-5(data-aos="fade-left")
      .col-lg-3.mb-4.mb-lg-0.mx-auto
        img(src="@/assets/curso/temas/tema1/img-3.jpg")
      .col-lg-9.ps-lg-3
        TabsA.color-acento-contenido
          .tarjeta.color-acento-botones--borde.p-4(titulo="1. What" style="background-color: #FFDFE0; border: none;")
            h4 What
            p Pide información sobre algo, incluyendo acciones, objetos, características o información en general. Corresponde a la pregunta <b>"¿qué?"</b>.
            .col-xl-10
              span(style="font-size: 13px; font-weight: bold;").ps-3 For example / Por ejemplo:
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="What do you do on weekends?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-15.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p ¿Qué haces los fines de semana?
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="What do you eat for breakfast?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-16.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p ¿Qué desayunas?
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="What do you like?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-17.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p ¿Qué te gusta?
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="2. Where" style="background-color: #FFDFE0; border: none;")
            h4 Where
            p Pregunta por un <b>lugar</b> o una <b>ubicación</b> según el contexto de la pregunta.  Corresponde a la pregunta <b>"¿dónde?"</b>.
            .col-xl-10
              span(style="font-size: 13px; font-weight: bold;").ps-3 For example / Por ejemplo:
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="Where do you put your shoes?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-18.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ps-3 ¿Dónde pones tus zapatos?
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="Where do you go on vacation?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-19.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ps-3 ¿Dónde vas de vacaciones?
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="Where do you study?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-20.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ps-3 ¿Dónde estudias?
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="3. When" style="background-color: #FFDFE0; border: none;")
            h4 When
            p Pregunta por el <b>momento</b> en que una acción se realiza o tuvo lugar. Corresponde a la pregunta <b>"¿cuándo?"</b>.
            span(style="font-size: 13px; font-weight: bold;").ps-3 For example / Por ejemplo:
            .d-flex.flex-wrap.w-100
              .col-xl-6.pe-xl-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="When do you eat?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-21.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-3 ¿Cuándo comes?
              .col-xl-6.pe-xl-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="When do you travel?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-22.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-3 ¿Cuándo viajas?
            .col-xl-10
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="When does your sister work?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-23.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ps-3 ¿Cuándo trabaja tu hermana?
            .d-block.p-4.px-5(style="background-color: #A6BBFF; border-radius: 5px")
              p Generalmente, no se utiliza para preguntar la hora, porque en esos casos se usa un complemento de la pregunta <em style="color: #FF5F65; font-weight: bold;">WHAT → What time?</em>
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="What time is it?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-24.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-0.ps-3 ¿Qué hora es?

          .tarjeta.color-acento-botones--borde.p-4(titulo="4. Who" style="background-color: #FFDFE0; border: none;")
            h4 Who
            p Pregunta por <b>alguien</b>, por una <b>persona</b>. Con la pregunta <em style="color: #FF5F65; font-weight: bold;">WHO</em>, se busca obtener un nombre, ya sea propio o común, que indique al sujeto u objeto. Corresponde a las preguntas <b>"¿quién?"</b> o <b>"¿a quién?"</b>.
            span(style="font-size: 13px; font-weight: bold;").ps-3 For example / Por ejemplo:
            .d-flex.flex-wrap.w-100
              .col-xl-6.pe-xl-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="Who do you know?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-25.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-3 ¿A quién conoces?
              .col-xl-6.pe-xl-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="Who do you work for?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-26.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-3 ¿Para quién trabajas?
            .col-xl-10
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="Who lives here? *"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-27.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ps-3 ¿Quién vive aquí?
            .d-block.p-4.px-5(style="background-color: #A6BBFF; border-radius: 5px")
              p.mb-0 <b>Warning! / ¡Advertencia!</b><br>
                |* Cuando se usa <em style="color: #FF5F65; font-weight: bold;">WHO</em> para buscar el sujeto de la oración y no el objeto, la pregunta no tiene ni sujeto ni auxiliar en los tiempos simples; sin embargo, el verbo se conjuga como tercera persona del singular.
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="5. Why" style="background-color: #FFDFE0; border: none;")
            h4 Why
            p Pregunta por un <b>motivo</b> o una <b>razón</b>. Corresponde a la pregunta <b>"¿por qué?"</b>.
            span(style="font-size: 13px; font-weight: bold;").ps-3 For example / Por ejemplo:
            .col-xl-10
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="Why do you do behave like this?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-28.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ps-3 ¿Por qué te comportas así?
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="Why is the sky so gray?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-29.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ps-3 ¿Por qué el cielo está tan gris?
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="Why not?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-30.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ps-3 ¿Por qué no?
      
          .tarjeta.color-acento-botones--borde.p-4(titulo="6. How" style="background-color: #FFDFE0; border: none;")
            h4 How
            p Pregunta por el <b>modo</b> o la <b>forma</b> en que se realiza una acción. Corresponde a la pregunta <b>"¿cómo?"</b>.
            span(style="font-size: 13px; font-weight: bold;").ps-3 For example / Por ejemplo:
            .d-flex.flex-wrap.w-100
              .col-xl-6.pe-xl-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="How do you learn?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-31.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-3 ¿Cómo aprendes?
              .col-xl-6.pe-xl-4
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="How does it work?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-32.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-3 ¿Cómo funciona eso?
            .col-xl-10
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="How do you clean your house?"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-33.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ps-3 ¿Cómo limpias tu casa?
            .d-block.p-4.px-5(style="background-color: #A6BBFF; border-radius: 5px")
              p <b>Warning! / ¡Advertencia!</b> <br>
                |Cuando se usa con complementos, puede cambiar radicalmente su significado según el complemento y el tiempo gramatical en el que aparezca. Puede aparecer en oraciones como:
              .d-flex.flex-wrap.w-100
                .col-xl-6.pe-xl-4
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="How are you?"
                    :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-34.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-3 ¿Cómo estás?
                .col-xl-6.pe-xl-4
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="How old are you?"
                    :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-35.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-3 ¿Cuántos años tienes?
              .col-xl-10
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="How much ice cream do you want?"
                  :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-36.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ps-3 ¿Cuánto helado quieres?

    p.mb-5(data-aos="fade-left") En general, la estructura de las preguntas informativas es la siguiente:
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Tabla 4
      span Estructura preguntas informativas

    .table-responsive.mb-5(data-aos="fade-right")
      .table-custom-2
        table
          tr
            td(style="border-right: 2px solid #6B8DFF; border-bottom: 2px solid #6B8DFF; background-color: #E1E8FF; border-top-left-radius: 20px")
              p.fw-bold.mb-0 WH Word
            td(style="border-right: 2px solid #6B8DFF; border-bottom: 2px solid #6B8DFF; background-color: #E1E8FF;")
              p.fw-bold.mb-0 Auxiliar
            td(style="border-right: 2px solid #6B8DFF; border-bottom: 2px solid #6B8DFF; background-color: #E1E8FF;")
              p.fw-bold.mb-0 Sujeto
            td(style="border-right: 2px solid #6B8DFF; border-bottom: 2px solid #6B8DFF; background-color: #E1E8FF;")
              p.fw-bold.mb-0 Verbo
            td(style="border-right: 2px solid #6B8DFF; border-bottom: 2px solid #6B8DFF; background-color: #E1E8FF;")
              p.fw-bold.mb-0 Complemento
            td(style="border-bottom: 2px solid #6B8DFF; background-color: #E1E8FF; border-top-right-radius: 20px; width: 25%")
              p.fw-bold.mb-0.text-center ?
          tr
            td(style="border-right: 2px solid #6B8DFF; border-bottom: 2px solid #6B8DFF;")
              p.fw-bold.mb-0.text-center(style="color: #FF5F65;") <em>What</em>
            td(style="border-right: 2px solid #6B8DFF; border-bottom: 2px solid #6B8DFF;")
              p.fw-bold.mb-0.text-center(style="color: #FF5F65;") <em>do</em>
            td(style="border-right: 2px solid #6B8DFF; border-bottom: 2px solid #6B8DFF;")
              p.fw-bold.mb-0.text-center(style="color: #FF5F65;") <em>you</em>
            td(style="border-right: 2px solid #6B8DFF; border-bottom: 2px solid #6B8DFF;")
              p.fw-bold.mb-0.text-center(style="color: #FF5F65;") <em>buy</em>
            td(style="border-right: 2px solid #6B8DFF; border-bottom: 2px solid #6B8DFF;")
              p.fw-bold.mb-0.text-center(style="color: #FF5F65;") <em>in the mall</em>
            td(style="border-bottom: 2px solid #6B8DFF; width: 25%")
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="What do you buy In the mall"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-37.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
          tr
            td(style="border-right: 2px solid #6B8DFF;")
              p.fw-bold.mb-0.text-center(style="color: #FF5F65;") <em>Where</em>
            td(style="border-right: 2px solid #6B8DFF;")
              p.fw-bold.mb-0.text-center(style="color: #FF5F65;") <em>does</em>
            td(style="border-right: 2px solid #6B8DFF;")
              p.fw-bold.mb-0.text-center(style="color: #FF5F65;") <em>she</em>
            td(style="border-right: 2px solid #6B8DFF;")
              p.fw-bold.mb-0.text-center(style="color: #FF5F65;") <em>go</em>
            td(style="border-right: 2px solid #6B8DFF;")
              p.fw-bold.mb-0.text-center(style="color: #FF5F65;") <em>on weekends</em>
            td(style="width: 25%")
              TarjetaAudio.color-acento-contenido.mb-1(
                texto="Where does she go on weekends"
                :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-15.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )

    p.mb-5(data-aos="fade-left") Ahora, observe todo el resumen del presente simple a partir de un verbo en sus tres formas: 

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 4
      span Resumen de conjugación de estructuras
    
    h3(data-aos="fade-left") <em>Present Simple: to eat</em> (comer)

    .d-flex.flex-wrap.mb-5(style="margin-top: 90px" data-aos="fade-right")
      .col-12.col-md-7.col-xl-4.p-3.mx-auto.mb-5
        .tarjeta.p-4(style="background-color: #C4D1FF;")
          img.mx-auto.mb-3(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 117px; margin-top: -81px;")
          p.fw-bold.text-center.mb-4 Afirmativa
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="I eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-39.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="You eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-40.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="He eats rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-41.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="She eats rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-42.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="It eats rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-43.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="You eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-40.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="We eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-41.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="They eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-46.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
      .col-12.col-md-7.col-xl-4.p-3.mx-auto.mb-5
        .tarjeta.p-4(style="background-color: #FFF0B5;")
          img.mx-auto.mb-3(src="@/assets/curso/temas/tema1/img-5.svg" style="max-width: 117px; margin-top: -81px;")
          p.fw-bold.text-center.mb-4 Negativa
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="I do not eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-47.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="You do not eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-48.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="He does not eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-49.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="She does not eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-50.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="It does not eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-51.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="You do not eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-48.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="We do not eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-53.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="They do not eat rice every day."
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-54.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
      .col-12.col-md-7.col-xl-4.p-3.mx-auto.mb-5
        .tarjeta.p-4(style="background-color: #FFBFC1;")
          img.mx-auto.mb-3(src="@/assets/curso/temas/tema1/img-6.svg" style="max-width: 117px; margin-top: -81px;")
          p.fw-bold.text-center.mb-4 Interrogativa
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="Do I eat rice every day?"
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-55.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="Do you eat rice every day?"
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-56.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="Does he eat rice every day?"
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-57.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="Does she eat rice every day?"
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-58.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="Does it eat rice every day?"
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-59.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="Do you eat rice every day?"
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-56.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="Do we eat rice every day?"
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-61.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          TarjetaAudio.color-acento-contenido.mb-3(
            texto="Do they eat rice every day?"
            :audio="require('@/assets/curso/temas/audios/1_3_3_Frases_interrogativas_en_presente_simple/1_3-62.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
    .titulo-segundo.color-acento-contenido.mb-5(data-aos="fade-right")
      h2 Actividad didáctica

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 <em>This is what we do.</em> / Esto es lo que hacemos.
        p.mb-4 En las siguientes oraciones del tiempo presente simple (<em>Simple Present Tense</em>), escribir la forma correcta en la que va conjugado el verbo que se encuentra entre los paréntesis.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar los espacios.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/01/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
</template>

<script>
import Audio from '@/components/Audio.vue'
import TarjetaAudio from '@/components/TarjetaAudio.vue'
export default {
  name: 'Tema1',
  components: { Audio, TarjetaAudio },
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
.tarjeta-content-t1
  background-color: white
  border-radius: 10px
  width: 100%
  padding: 1rem
  padding-top: 2rem
.container-card
  width: 80%
  margin-right: auto
  margin-left: auto
  @media (max-width: 768px)
    width: 100%
.bg-content-50
  display: flex
  flex-wrap: wrap
  background: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(60,63,167,1) 50%, rgba(60,63,167,1) 100%)
  .content-banner
    display: flex
    flex-wrap: wrap
.tabs-custom
  .tabs-b__tab--active
    background-color: #FFD947
  .tabs-b__content-item
    background-color: #FFD947
.text-title-tabs
  background-color: #6B8DFF
  min-height: 44px
  display: flex
  align-items: center
  margin-right: auto
  padding-right: 2rem
  padding-left: 1rem
  color: white
.content-audio-carousel
  position: absolute
  left: 50%
  bottom: 1.5rem
  padding: 1rem .5rem
  min-height: 122px
  min-width: 95px
  transform: translateX(-50%)
  background-color: white
  border-radius: 20px
  box-shadow: 0 0 6px 6px #00000008
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
</style>
