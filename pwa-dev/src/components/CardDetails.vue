<template>
  <div>
    {{title.default}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardDetails extends Vue {
  data () {
    return {
      title: {
        default: 'Card Details',
        type: String
      }
    }
  }
}
</script>

<style scoped>

</style>
