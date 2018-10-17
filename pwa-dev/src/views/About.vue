<template>
  <div class="about">
    <h1>This is an about page lol</h1>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class Home extends Vue {
  message: string = ''
  mounted () {
    console.log('Mounted')
    this.getData()
  }
  async getData () {
    console.log('Data')
    let { data } = await axios.get('/api')
    this.message = data.hello
  }
}
</script>
