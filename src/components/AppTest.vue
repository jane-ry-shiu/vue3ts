<template>
  <p data-test="p" v-bind="attrs">ppp</p>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>


<style scoped></style>