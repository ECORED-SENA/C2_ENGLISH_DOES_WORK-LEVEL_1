<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.banner-interno__fondo
  background-image: url(assets/curso/portada/img-fontdo-tema.svg) !important
.audio
  min-height: 54px
  border-radius: 54px
  border: 2px solid #FFBFC1
  background-color: white
  padding: .8rem
  margin-bottom: 1rem
.audio-2
  min-height: 54px
  border-radius: 54px
  border: 2px solid #01AC57
  background-color: white
  padding: .8rem
  margin-bottom: 1rem
.slider-content-cf
  .slyder-f__btn
    padding: 0 !important
    width: 39px
    height: 39px
    margin-right: auto
    margin-left: auto
    border-radius: 50%
    background-color: #FFD947
    display: flex
    align-content: center
    justify-content: center
    i
      height: 20px
      display: flex
      justify-content: center
      text-align: center
      &::before
        font-size: 24px
        color: #6B8DFF
.slider-content-cf-v2
  .slyder-f__btn
    padding: 0 !important
    width: 39px
    height: 39px
    margin-right: auto
    margin-left: auto
    border-radius: 50%
    background-color: #3C3FA7
    display: flex
    align-content: center
    justify-content: center
    i
      height: 20px
      display: flex
      justify-content: center
      text-align: center
      &::before
        font-size: 24px
        color: white
.columnas-5
  width: 20%
  padding-right: 1rem
  padding-left: 1rem
  @media (max-width: 991px)
    width: 33%
  @media (max-width: 991px)
    width: 50%
.header-table-custom
  border-top: 2px solid #3C3FA7
  border-left: 2px solid #3C3FA7
  border-right: 2px solid #3C3FA7
.table-custom-1
  border: 2px solid #3C3FA7
  width: 100%
  min-width: 1200px
  td
    border: 2px solid #3C3FA7
    padding: 1rem
    text-align: center
  .color-blue-td
    background-color: #E1E8FF
</style>
