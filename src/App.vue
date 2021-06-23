<template>
  <div id="app">
    <Navigation/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import Navigation from "@/components/navigation/NavigationHome";
import Footer from "@/components/footer/FooterHome"

export default {
  data() {
    return {
      window: {
        width: 0,
        mobileBreakpoint: 480,
        tabletBreakpoint: 1024
      }
    }
  },
  components: {
    Navigation,
    Footer,
  },
  created() {
    this.SET_MOBILE(window.innerWidth < this.window.mobileBreakpoint)
    this.SET_TABLET(window.innerWidth < this.window.tabletBreakpoint && window.innerWidth >= this.window.mobileBreakpoint)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    ...mapState({
      isMobile: state => state.isMobile,
      isTablet: state => state.isTablet
    }),
  },
  methods: {
    ...mapMutations([
      'SET_MOBILE',
      'SET_TABLET'
    ]),
    handleResize() {
      this.window.width = window.innerWidth
      if (this.window.width < this.window.mobileBreakpoint && !this.isMobile) {
        this.SET_MOBILE(true)
        this.SET_TABLET(false)
      } else if (this.window.width >= this.window.mobileBreakpoint && this.window.width < this.window.tabletBreakpoint && !this.isTablet) {
        this.SET_MOBILE(false)
        this.SET_TABLET(true)
      } else if (this.window.width >= this.window.tabletBreakpoint && (this.isMobile || this.isTablet)) {
        this.SET_MOBILE(false)
        this.SET_TABLET(false)
      }
    }
  }
}
</script>

