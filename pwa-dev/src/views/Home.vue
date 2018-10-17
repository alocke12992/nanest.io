<template>
  <div class="homeContainer">
    <div class="swiperContainer">
      <Swiper />
    </div>
    <div class="btnContainter">
      <GroupedButtons />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Swiper from '@/components/Swiper.vue'
import GroupedButtons from '@/components/GroupedButtons.vue'

@Component({
  components: {
  Swiper,
  GroupedButtons
  },
  })
export default class Home extends Vue {}
</script>

<style scoped>
  .homeContainer {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    margin: 55px 0px;
  }

  .swiperContainer {
    height: 250px;
    width: 300px;
    margin-bottom: 125px;
  }

</style>
