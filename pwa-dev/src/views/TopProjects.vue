<template>
  <div class="projects-page">
    <h1>Top Projects</h1>
    <div class="projects">
      <div class="projectContainer" v-for="project in projects.projects" :key="project.id">
        <Card :project="project"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Card from '@/components/Card.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState, mapActions } from 'vuex'

@Component({ components: { Card }, computed: mapState(['projects']) })

export default class TopProject extends Vue {
  created () {
    this.$store.dispatch('projects/getProjects')
  }
}
</script>
<style scoped>
.projects {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.projectContainer {
  margin: 20px;
}
</style>
