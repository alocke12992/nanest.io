<template>
  <v-touch
    :style="`transform: translate(${x}px, ${y}px)`"
    v-on:pan="swipe"
    v-on:panend="letGo">
  <div class="card">
    <div class="projectImg"  v-bind:style="{ 'background-image': `url(${project.background})` }"></div>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <ActionButton/>
  </div>
  </v-touch>
</template>
<script lang="ts">
import ActionButton from '@/components/ActionButton.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import projects from '../store/modules/projects'

@Component({
  components: { ActionButton },
  })
export default class Card extends Vue {
  @Prop(Object) project!: object

  x: number = 0
  y: number = 0
  supported: string = ''

  swipe (event: any): void {
    this.x = event.deltaX
    this.y = event.deltaY
  }

  letGo (e: object) {
    if (this.x < -135) {
      this.supported = 'NO'
    } else if (this.x > 135) {
      this.supported = 'YES'
    } else {
      this.x = 0
      this.y = 0
      return
    }
    this.swipeFin()
  }

  swipeFin () {
    projects.mutations.swipe()
  }
}
</script>
<style scoped>
.card {
  -webkit-box-shadow: 0px 0px 37px -4px rgba(0,0,0,0.12);
  -moz-box-shadow: 0px 0px 37px -4px rgba(0,0,0,0.12);
  box-shadow: 0px 0px 37px -4px rgba(0,0,0,0.12);
  background: white;
  height: 350px;
  width: 100%
}

.projectImg {
  height: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
