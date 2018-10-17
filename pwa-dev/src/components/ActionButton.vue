<template>
    <a
        :href="url"
        class="button"
        :style="{ 'background': backgroundColor, 'color': textColor, 'padding': padding, 'font-size': textSize }">
        {{ text }}
    </a>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ActionButton extends Vue {
    @Prop({ default: '/' }) url!: string
    @Prop({ default: 'More Info' }) text!: string
    @Prop({ default: '#2BD29E' }) backgroundColor!: string
    @Prop({ default: '#fff' }) textColor!: string
    @Prop({ default: '10px 40px' }) padding!: string
    @Prop({ default: '24px' }) textSize!: string
}
</script>
<style scoped>
.button {
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
}

.button:hover {
    cursor: pointer;
}
</style>
