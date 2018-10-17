<template>
  <div class="app-layout">
    <AppHeader/>
    <AppContent/>
    <AppFooter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from '@/layout/AppHeader.vue'
import AppContent from '@/layout/AppContent.vue'
import AppFooter from '@/layout/AppFooter.vue'

@Component({
  components: {
  AppHeader,
  AppContent,
  AppFooter
  }
  })

export default class App extends Vue {}
</script>
