<template>
  <div>
    <CardDetails />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardDetails from '@/components/CardDetails.vue'

@Component({
  components: {
  CardDetails
  },
  })
export default class Description extends Vue {}
</script>
