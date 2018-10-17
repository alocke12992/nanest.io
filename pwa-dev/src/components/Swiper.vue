<template>
  <div class="cardStackContainer">
    <CardStack v-bind:projects="projects.projects"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState, mapActions } from 'vuex'
import CardStack from './CardStack.vue'

@Component({
  name: 'Swiper',
  components: {
  CardStack,
  },
  computed: mapState(['projects'])
  })

export default class Swiper extends Vue {
  created () {
    this.$store.dispatch('projects/getProjects')
  }
}
</script>

<style scoped>
.cardStackContainer{
  height: 100%;
}
</style>
