<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white;") 2
      h1 Pronombres personales en función del sujeto y el objeto

    p.mb-5(data-aos="fade-left") Un pronombre es una palabra que se usa para hacer referencia a algo o alguien sin usar su nombre propio o común. Dentro de los pronombres, se pueden hallar diferentes tipos, pero en particular los pronombres de sujeto y objeto le brindan información al lector sobre quién realiza la acción y hacia quién o qué se dirige dicha acción.

    .titulo-segundo.color-acento-contenido.mb-5(data-aos="fade-right")
      h2#t_2_1 2.1 Pronombres de sujeto / <em style="color: #FF5F65 !important; font-weight: bold;">Subject pronouns</em>
    
    p.mb-5(data-aos="fade-left") Los pronombres de sujeto son aquellos que se usan como protagonista de la oración, son quienes realizan las acciones y modifican los verbos. En inglés, son:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 6
      span Pronombres de sujeto
    
    .d-flex.flex-wrap.mb-5(data-aos="fade-left")
      .col-xl-5.d-flex.mb-5.mb-xl-0.table-responsive.mt-auto
        table.table-custom-1(style="min-width: 505px; width: 100%")
          tr
            td(rowspan="5")
              p.fw-bold.text-center Singular
            td(style="width: 35%")
              p.fw-bold.mb-0 1era persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> I </em>
            td
              p.fw-bold.mb-0 yo
          tr
            td
              p.fw-bold.mb-0 2nda persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> you </em>
            td
              p.fw-bold.mb-0 tú / usted
          tr
            td(rowspan="3")
              p.fw-bold.mb-0 3era persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> he </em>
            td
              p.fw-bold.mb-0 él
          tr
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> She </em>
            td
              p.fw-bold.mb-0 ella
          tr
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> It </em>
            td
              p.fw-bold.mb-0 (eso)
          tr
            td(rowspan="3")
              p.fw-bold.text-center Plural
            td
              p.fw-bold.mb-0 1era persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> we </em>
            td
              p.fw-bold.mb-0 nosotros
          tr
            td
              p.fw-bold.mb-0 2nda persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> you </em>
            td
              p.fw-bold.mb-0 ustedes
          tr
            td
              p.fw-bold.mb-0 3era persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> they </em>
            td
              p.fw-bold.mb-0 ellos
            
      .col-12.col-lg-6.col-xl-4.ps-xl-4.mb-5.mb-lg-0
        img(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 420px").mx-auto
      .col-12.col-lg-6.col-xl-3.mt-auto
        p(style="font-size: 13px; font-weight: bold;").ps-3 For example / Por ejemplo:
        TarjetaAudio.color-acento-contenido.mb-1(
          texto="She works in a restaurant."
          :audio="require('@/assets/curso/temas/audios/2_1_Pronombres_de_sujeto_Subject_pronouns/2_1-1.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
        p.ps-3 ¿Por qué te comportas así?
        TarjetaAudio.color-acento-contenido.mb-1(
          texto="They travel every summer."
          :audio="require('@/assets/curso/temas/audios/2_1_Pronombres_de_sujeto_Subject_pronouns/2_1-2.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
        p.ps-3 ¿Por qué te comportas así?
    p.mb-5(data-aos="fade-right") Para los pronombres de sujeto, se deben tener en cuenta algunas condiciones:

    .d-flex.flex-wrap.py-4.px-lg-4.mb-5(style="background-color: #FFE891;" data-aos="fade-left")
      SlyderF.slider-content-cf-v3.align-items-center
        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 262px").mx-auto
          .col-12.col-lg-8
            .tarjeta-content-t2
              .container-card
                p.ps-3.mb-4 Siempre el pronombre de sujeto I va en mayúscula, sin importar si va al inicio, en el medio o al final de la oración:
                .col-lg-10.col-xl-6
                  span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo: 
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="My friend and I are teachers."
                    :audio="require('@/assets/curso/temas/audios/2_1_Pronombres_de_sujeto_Subject_pronouns/2_1-3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-3 Mi amigo y yo somos profesores.
        
        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 262px").mx-auto
          .col-12.col-lg-8
            .tarjeta-content-t2
              .container-card
                p.ps-3.mb-4 El pronombre de sujeto <em style="color: #FF5F65 !important; font-weight: bold">you</em> se utiliza para la segunda persona singular <b>“tú / usted”</b> y para la segunda persona plural <b>“ustedes”</b>.
                span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo: 
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="You and Ana study a lot."
                  :audio="require('@/assets/curso/temas/audios/2_1_Pronombres_de_sujeto_Subject_pronouns/2_1-4.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-3 Tú y Ana estudian mucho.
                TarjetaAudio.color-acento-contenido.mb-1(
                  texto="You study a lot."
                  :audio="require('@/assets/curso/temas/audios/2_1_Pronombres_de_sujeto_Subject_pronouns/2_1-5.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.ps-3 Ustedes estudian mucho.
        
        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 262px").mx-auto
          .col-12.col-lg-8
            .tarjeta-content-t2
              .container-card
                p.ps-3.mb-4 El pronombre de sujeto it se utiliza para la tercera persona singular, que hace referencia a un solo animal, un solo objeto o un solo lugar, y no tiene una traducción exacta al español, pero la mejor aproximación para entender el concepto es referirnos a it como “eso”. En español, le otorgamos un género (masculino - femenino) a los animales, objetos, lugares, etc. En inglés, esto no se hace; en vez de hablar de él o ella, hablamos de it.
                span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo:
                .d-flex.flex-wrap
                  .col-xl-6.pe-3
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="The cow drinks water."
                      :audio="require('@/assets/curso/temas/audios/2_1_Pronombres_de_sujeto_Subject_pronouns/2_1-6.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 La vaca bebe agua.
                  .col-xl-6.ps-3
                    TarjetaAudio.color-acento-contenido.mb-1(
                      texto="It drinks water."
                      :audio="require('@/assets/curso/temas/audios/2_1_Pronombres_de_sujeto_Subject_pronouns/2_1-7.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.ps-3 <b>Ella</b> bebe agua. 
                p.ps-3(style="color: #3C3FA7; font-weight: bold") (“she drinks water” es incorrecto)

        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/temas/tema2/img-5.svg" style="max-width: 262px").mx-auto
          .col-12.col-lg-8
            .tarjeta-content-t2
              .container-card
                p.ps-3.mb-4 Cuando en la tercera persona plural nos referimos a más de un animal, más de un objeto o más de un lugar, usamos they, no it:
                span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo:
                .col-xl-8
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="The butterfly, the eagle and the seagull fly in the sky."
                    :audio="require('@/assets/curso/temas/audios/2_1_Pronombres_de_sujeto_Subject_pronouns/2_1-8.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-3 La mariposa, el águila y la gaviota vuelan en el cielo. 
                .col-xl-6
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="They fly in the sky."
                    :audio="require('@/assets/curso/temas/audios/2_1_Pronombres_de_sujeto_Subject_pronouns/2_1-9.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-3 <b>Ellos</b> vuelan en el cielo.
        
        .d-flex.flex-wrap.align-items-center
          .col-lg-4.mb-4.mb-lg-0.mx-auto
            img(src="@/assets/curso/temas/tema2/img-6.svg" style="max-width: 262px").mx-auto
          .col-12.col-lg-8
            .tarjeta-content-t2
              .container-card
                p.ps-3.mb-4 En inglés, las oraciones siempre tienen un pronombre o sustantivo que hace de sujeto, no como en español que algunas veces podemos prescindir de él: 
                span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo: 
                .col-xl-8
                  TarjetaAudio.color-acento-contenido.mb-1(
                    texto="I eat pizza every night."
                    :audio="require('@/assets/curso/temas/audios/2_1_Pronombres_de_sujeto_Subject_pronouns/2_1-10.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.ps-3 (yo) Como pizza todas las noches.
                p.ps-3(style="color: #3C3FA7; font-weight: bold") (<em>“Eat pizza every night”</em> es incorrecto)
    .titulo-segundo.color-acento-contenido.mb-5(data-aos="fade-left")
      h2#t_2_2 2.2 Pronombres de objeto / <em style="color: #FF5F65 !important; font-weight: bold;">Object pronouns</em>
    
    p.mb-5(data-aos="fade-right") Los pronombres de objeto, por otro lado, hacen referencia a quién va dirigida la acción. En el idioma inglés, usualmente aparecen después del verbo o después de una preposición (<em>at, for, with,</em> etc.), la cual, a su vez, va después del verbo.

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Tabla 7
      span Pronombres de objeto

    .d-flex.flex-wrap.mb-5(data-aos="fade-right")
      .col-xl-6.mb-5.mb-xl-0.table-responsive
        table.table-custom-1(style="min-width: 505px")
          tr
            td(rowspan="5")
              p.fw-bold.text-center Singular
            td(style="width: 30%")
              p.fw-bold.mb-0 1era persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> I </em>
            td(style="width: 30%")
              p.fw-bold.mb-0 A mi <br>
                | ( -me )
          tr
            td
              p.fw-bold.mb-0 2nda persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> you </em>
            td
              p.fw-bold.mb-0 A ti / usted <br>
                | ( -te, -le, -lo )
          tr
            td(rowspan="3")
              p.fw-bold.mb-0 3era persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> he </em>
            td
              p.fw-bold.mb-0 A él <br>
                | ( -le, -lo )
          tr
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> She </em>
            td
              p.fw-bold.mb-0 A ella <br>
                | ( -le, -la )
          tr
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> It </em>
            td
              p.fw-bold.mb-0 A eso <br>
                | ( -le, -lo )
          tr
            td(rowspan="3")
              p.fw-bold.text-center Plural
            td
              p.fw-bold.mb-0 1era persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> we </em>
            td
              p.fw-bold.mb-0 A nosotros <br>
                | ( -nos )
          tr
            td
              p.fw-bold.mb-0 2nda persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> you </em>
            td
              p.fw-bold.mb-0 A ustedes <br>
                | ( -le, -los, -las )
          tr
            td
              p.fw-bold.mb-0 3era persona
            td.color-blue-td
              p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> they </em>
            td
              p.fw-bold.mb-0 A ellos / A ellas <br>
                | ( -le, -los, -las )
      .col-12.col-md-10.col-xl-6.mx-auto.px-xl-4.d-flex
        .p-4.p-xl-5.w-100(style="background-color: #E1E8FF")
          span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo: 
          TarjetaAudio.color-acento-contenido.mb-1(
            texto="She plays with us on weekends."
            :audio="require('@/assets/curso/temas/audios/2_2_Pronombres_de_objeto_Object_pronouns/2_2-1.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-3 Ella <b>juega</b> con nosotros los fines de semana.
          TarjetaAudio.color-acento-contenido.mb-1(
            texto="I call them every night."
            :audio="require('@/assets/curso/temas/audios/2_2_Pronombres_de_objeto_Object_pronouns/2_2-2.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-3 Yo los <b>llamo</b> a ellos todas las noches. 
          TarjetaAudio.color-acento-contenido.mb-1(
            texto="I need to tell him something."
            :audio="require('@/assets/curso/temas/audios/2_2_Pronombres_de_objeto_Object_pronouns/2_2-3.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-3 Necesito <b>contarle</b> (a él) algo.
          TarjetaAudio.color-acento-contenido.mb-1(
            texto="The cat is eating. Leave it alone."
            :audio="require('@/assets/curso/temas/audios/2_2_Pronombres_de_objeto_Object_pronouns/2_2-4.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-3 El gato está comiendo. <b>Déjalo</b> tranquilo.
    p.mb-5(data-aos="fade-left") Si bien it y you son los mismos tanto para pronombres de sujeto como de objeto, no se deben confundir los demás pronombres y se deben usar adecuadamente, teniendo en cuenta la persona gramatical a la cual se está haciendo referencia y si esta está realizando la acción o, por el contrario, está recibiendo las consecuencias de dicha acción.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 8
      span La persona gramatical en los pronombres
    .d-flex.flex-wrap.mb-5(data-aos="fade-left")
      .col-12.col-xl-7.pe-xl-2.mx-auto
        img(src="@/assets/curso/temas/tema2/img-7.svg").mb-4.mb-md-2
        .table-responsive.mb-4.mb-xl-0
          table.table-custom-1(style="min-width: 505px")
            tr
              td( colspan="2")
              td(style="width: 28%")
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold">Subject pronouns</em>
              td(style="width: 28%")
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold">Object pronouns</em>
            tr
              td(rowspan="5")
                p.fw-bold.text-center Singular
              td
                p.fw-bold.mb-0 1era persona
              td.color-blue-td
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> I </em>
              td(style="background-color: #FFDFE0")
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold">me</em>
            tr
              td
                p.fw-bold.mb-0 2nda persona
              td.color-blue-td
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> you </em>
              td(style="background-color: #FFDFE0")
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold">you</em>
            tr
              td(rowspan="3")
                p.fw-bold.mb-0 3era persona
              td.color-blue-td
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> he </em>
              td(style="background-color: #FFDFE0")
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold">you</em>
            tr
              td.color-blue-td
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> him </em>
              td(style="background-color: #FFDFE0")
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold">her</em>
            tr
              td.color-blue-td
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> it </em>
              td(style="background-color: #FFDFE0")
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold">it</em>
            tr
              td(rowspan="3")
                p.fw-bold.text-center Plural
              td
                p.fw-bold.mb-0 1era persona
              td.color-blue-td
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> we </em>
              td(style="background-color: #FFDFE0")
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold">us</em>
            tr
              td
                p.fw-bold.mb-0 2nda persona
              td.color-blue-td
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> you </em>
              td(style="background-color: #FFDFE0")
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold">you</em>
            tr
              td
                p.fw-bold.mb-0 3era persona
              td.color-blue-td
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold"> they </em>
              td(style="background-color: #FFDFE0")
                p.fw-bold.mb-0 <em style="color: #FF5F65 !important; font-weight: bold">them</em>
      .col-xl-5.ps-xl-2.mx-auto
        .p-4.px-xl-5.w-100(style="background-color: #E1E8FF")
          p De esta manera, se pueden reemplazar los sustantivos de una oración por <b>pronombres de sujeto y objeto:</b>
          span(style="font-size: 13px; font-weight: bold;").ps-3 Por ejemplo: 
          TarjetaAudio.color-acento-contenido.mb-1(
            texto="Ana calls Javier."
            :audio="require('@/assets/curso/temas/audios/2_2_Pronombres_de_objeto_Object_pronouns/2_2-5.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-3 Ana <b>llama</b> a Javier. 
          TarjetaAudio.color-acento-contenido.mb-1(
            texto="She calls him."
            :audio="require('@/assets/curso/temas/audios/2_2_Pronombres_de_objeto_Object_pronouns/2_2-6.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-3 Ella lo <b>llama</b> (a él).
          TarjetaAudio.color-acento-contenido.mb-1(
            texto="Victor and I work with Lucia and Laura."
            :audio="require('@/assets/curso/temas/audios/2_2_Pronombres_de_objeto_Object_pronouns/2_2-7.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-3 Victor y yo <b>trabajamos</b> con Lucia y Laura.
          TarjetaAudio.color-acento-contenido.mb-1(
            texto="We work with them."
            :audio="require('@/assets/curso/temas/audios/2_2_Pronombres_de_objeto_Object_pronouns/2_2-8.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-3 Nosotros <b>trabajamos</b> con ellas.
          TarjetaAudio.color-acento-contenido.mb-1(
            texto="Hector is looking at Sandra and me."
            :audio="require('@/assets/curso/temas/audios/2_2_Pronombres_de_objeto_Object_pronouns/2_2-9.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.ps-3 Hector nos <b>está mirando</b> a Sandra y a mí.
          TarjetaAudio.color-acento-contenido.mb-1(
            texto="He is looking at us."
            :audio="require('@/assets/curso/temas/audios/2_2_Pronombres_de_objeto_Object_pronouns/2_2-10.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-1.ps-3 Él <b>está mirándonos.</b>

    
</template>
<script>
import Audio from '@/components/Audio.vue'
import TarjetaAudio from '@/components/TarjetaAudio.vue'
export default {
  name: 'Tema2',
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
.tarjeta-content-t2
  background-color: white
  border-radius: 10px
  width: 100%
  padding: 1rem
  padding-top: 2rem
</style>
