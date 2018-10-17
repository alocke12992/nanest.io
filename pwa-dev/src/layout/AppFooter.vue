<template>
  <div class="footer">
    <div class="tabs">
      <div class="tab">
        <router-link to="/top-projects">
          <div class="icon">
            <img
              v-if="isActive('TopProjects')"
              src="../assets/view-column-active.svg"
              alt="">
            <img
              v-else
              src="../assets/view-column.svg"
              alt="">
          </div>
        </router-link>
      </div>
      <div class="tab">
        <div>
          <router-link to="/">
            <div class="icon">
              <img
                v-if="isActive('home')"
                src="../assets/swap-vert-circle-active.svg"
                alt="">
              <img
                v-else
                src="../assets/swap-vert-circle.svg"
                alt="">
            </div>
          </router-link>
        </div>
      </div>
      <div class="tab">
        <router-link to="/profile">
          <div class="icon">
            <img
              v-if="isActive('profile')"
              src="../assets/person-active.svg"
              alt="">
            <img
              v-else
              src="../assets/person.svg"
              alt="">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'CardStack',
  })

export default class CardStack extends Vue {
  data () {
    return {
      title: {
        default: 'Card Stack',
        type: String
      }
    }
  }

  isActive (routeName: string) {
    return this.$route.name === routeName
  }
}
</script>

<style scoped>
.footer {
  background: #F1F1F1;
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  z-index: 2;
  min-height: 3rem;
  justify-content: center;
  width: 100%;
}

.icon > img {
  max-width: 24px;
  max-height: 24px;
}

.tabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 65vw;
}

.tab {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
