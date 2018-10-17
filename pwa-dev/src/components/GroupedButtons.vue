<template>
  <div class="btnWrapper">
    <div class="btnContainer">
      <button class="btn" @click="onPass"><img src="../assets/close.svg" alt="Close"></button>
      <button class="like btn" @click="onLike"><img class="star" src="../assets/star.svg" alt="Star"/></button>
      <button class="btn" @click="onPass"><img src="../assets/favorite.svg" alt="Favorite"/></button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class GroupedButtons extends Vue {
  donate: string = 'Donate'
  pass: string = 'Pass'
  like: string = 'Dayummmnnnn you seem like a fine bit of opportunity 😉'

  onDonate (): void {
    window.alert(this.donate)
  }

  onLike (): void {
    window.alert(this.like)
  }

  onPass (): void {
    window.alert(this.pass)
  }
}
</script>

<style scoped>

.btnContainer {
  display: flex;
  justify-content: space-around;
  min-width: 300px;
  align-items: center;
}

.btnWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

button {
  border-radius: 200px;
  border: none;
  background: white;
  -webkit-box-shadow: 0px 0px 30px -1px rgba(74,74,74,0.36);
  -moz-box-shadow: 0px 0px 30px -1px rgba(74,74,74,0.36);
  box-shadow: 0px 0px 30px -1px rgba(74,74,74,0.36);
  height: 70px;
  width: 70px;
  padding: unset;
  display: flex;
  justify-content: center;
  align-items: center;
}

.like {
  height: 60px;
  width: 60px;
}

img {
  height: 35%;
  width: 35%;
}

.star {
  height: 45%;
  width: auto;
}

</style>
