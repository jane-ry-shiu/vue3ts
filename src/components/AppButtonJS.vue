<template>
  <v-btn
    v-bind="buttonAttrs"
    @click="$emit('click', $event)"
  >
    <slot :num="123"></slot>
    <slot
      name="named"
      str="str"
    ></slot>
    <slot name="noBind"></slot>
    <slot
      name="vbind"
      v-bind="{ num: 123, str: 'str' }"
    ></slot>
  </v-btn>
</template>

<script setup>
// @ts-nocheck
import { VBtn } from 'vuetify/components';

import { computed, ref, useAttrs, defineProps, defineEmits } from 'vue';

/**
 * @typedef {Object} AppButtonProps
 * @property {('primary' | 'secondary' | 'error')} [color] - color of button
 * @property {'small' | 'default' | 'large'} [size] - size of button
 */


/**
 * @type {AppButtonProps}
 * @returns {AppButtonProps}
 */
const props = defineProps({
  /**
   * color of button
   * @type {('primary' | 'secondary' | 'error')}
   */
  color: {
    type: String,
    default: "primary",
    validator: value => ['primary', 'secondary', 'error'].includes(value)
  },
  /**
   * size of button
   */
  size: {
    type: String,
    default: 'default',
    validator: value => ['small', 'default', 'large'].includes(value)
  }
});



/**
 * @typedef {Object} AppButtonEvents
 * @property {(event: 'delete', id: string) => void} onDelete - Fired when item is deleted
 * @property {(name: 'click', e: MouseEvent) => void} onClick - Fired when item is added
 */

/**
 * @type {AppButtonEvents}
 */
const emit = defineEmits(['delete', 'click']);

/**
 * @param {'delete' | 'click'} event
 * @param {string | MouseEvent} payload
 * @returns {void}
 */
function emitEvent(event, payload) {
  if (event === 'delete') {
    emit('delete', payload);
  } else if (event === 'click') {
    emit('click', payload);
  }
}

const attrs = useAttrs();

const buttonAttrs = computed(() => ({
  ...attrs,
  ...props,
}));

const label = ref('Button');
const count = ref({ value: 0, label: 'Count' });

defineExpose({
  /** A label string */
  label,
  /** A count number */
  count,
});



</script>


<style less scoped>
.v-btn {
  --v-btn-height: 3rem;
  padding: 1rem;
}
</style>