<template>
  <div class="user-profile">
    <div class="basic-info">
      <div class="profile-img">
        <img src="../assets/profile-test.png" alt="">
      </div>
      <div class="name">
        <h3>Juan Chavez</h3>
      </div>
    </div>
    <div class="settings-wrapper">
      <!-- donation limit -->
      <div class="donation-limit-wrapper section">
        <h3 class="header">Donation Limit</h3>
        <div class="donation-limit">
          <vue-slider
            v-model="donationLimit"
            formatter="${value}"
            :process-style="{'backgroundColor': '#2BD29E'}"
            :tooltip-style="{'backgroundColor': '#2BD29E', 'borderColor': '#2BD29E'}"
            :min="0"
            :max="5"
            :interval="0.01"
            />
        </div>
        <div class="btn-wrapper">
          <button class="action-button">
            Payment Details
          </button>
        </div>
      </div>
      <!-- my projects -->
      <div class="my-projects-wrapper section">
        <h3 class="header">My Projects</h3>
        <div class="projects-wrapper">
          <div
            class="project"
            v-for="project in myProjects"
            :key="project.id">
            <img src="../assets/profile-test.png" alt="">
            <div>
              <p>{{ project.label }}</p>
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <button class="action-button">
            Payment Details
          </button>
        </div>
      </div>
      <!-- supported projects -->
      <div class="my-projects-wrapper section">
        <h3 class="header">Supported Projects</h3>
        <div class="projects-wrapper">
          <div
            class="project"
            v-for="project in myProjects"
            :key="project.id">
            <img src="../assets/profile-test.png" alt="">
            <div>
              <p>{{ project.label }}</p>
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <button class="action-button">
            Payment Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
const vueSlider = require('vue-slider-component')

@Component({
  components: { vueSlider }
  })
export default class Profile extends Vue {
  data () {
    return {
      donationLimit: 0,
      myProjects: [
        {
          id: '1',
          label: 'My 1 prohect alskdnlkasnd',
          img: 'assets/profile-test.png'
        },
        {
          id: '2',
          label: 'My 2 prohect alskdnlkasnd',
          img: 'assets/profile-test.png'
        },
        {
          id: '3',
          label: 'My 3 prohect alskdnlkasnd',
          img: 'assets/profile-test.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.basic-info {
  background: linear-gradient(
      rgba(58, 58, 58, 0.45),
      rgba(46, 46, 46, 0.45)
    ), url('../assets/bg.jpg');
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 15rem;
}

.profile-img {
  width: 100%;
  display: flex;
  justify-content: center;
}

.project {
  width: 33.3333%
}

.section {
  padding: 2rem 0;
}

.project img {
  width: 75px;
  height: 75px;
  border-radius: 3rem;
}

.project p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 0.5rem;
}

.profile-img > img {
  width: 8rem;
  height: 8rem;
  overflow: hidden;
  border-radius: 5rem;
}

.name > h3 {
  margin-top: -45px;
  margin-bottom: 0;
  color: white;
  font-size: 2rem;
}

.settings-wrapper {
  padding: 0 1rem;
}

.settings-wrapper .header {
  text-align: left;
  font-size: 1.5rem;
}

.projects-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.btn-wrapper {
  padding-top: 2rem;
}

button.action-button {
  background-color: #2BD29E;
  min-height: 3rem;
  min-width: 15rem;
  border-radius: 5rem;
  outline: 0;
  border: 0;
  font-size: 1rem;
  color: white;
  font-weight: 700;
}
</style>
