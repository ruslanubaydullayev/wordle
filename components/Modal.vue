<template>
  <div class="modalka" :id="id">
    <div class="modalka__bg" @click="$modalHide(`${id}`)"></div>
    <div class="modalka__content" :class="contentC" :style="`max-width: ${width}px`">
      <div class="modalka__head" :class="headC">
        <h1>{{ title }}</h1>
        <div @click="$modalHide(`${id}`)"></div>
      </div>
      <div :class="bodyC" class="modalka__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    width: {
      type: String | Number,
      default: 640,
    },
    id: {
      type: String,
    },
    headC: {
      type: String,
      default: "",
    },
    contentC: {
      type: String,
      default: "",
    },
    bodyC: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">

</style>
