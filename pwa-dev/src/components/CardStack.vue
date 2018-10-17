<template>
  <div class="cardWrapper">
    <div
      v-for="project in projects"
      :key="project.id"
      class="cardContainer">
      <Card v-bind:project="project" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import Card from './Card.vue'
import projects from '@/store/modules/projects'

@Component({
  name: 'CardStack',
  components: {
  Card
  }
  })
export default class CardStack extends Vue {
  @Prop(Array) projects!: object
}
</script>

<style scoped>
  .cardWrapper {
    position: relative;
    height: 100%;
  }
  .cardContainer {
    position: absolute;
  }
</style>
