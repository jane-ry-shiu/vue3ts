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

<script setup lang="ts">
import { VBtn } from 'vuetify/components';

import { computed, ref, useAttrs, withDefaults } from 'vue';

interface AppButtonProps {
  /** color of button */
  color?: 'primary' | 'secondary' | 'error';
  /** size of button */
  size?: 'small' | 'default' | 'large';
}

interface AppButtonEvents {
  /** Fired when item is deleted */
  (event: 'delete', id: string): void;
  /** Fired when item is added */
  (name: 'click', e: MouseEvent): void;
}


defineSlots<{
  /** Example description for default */
  default(props: { num: number; }): any;
  /** Example description for named */
  named(props: { str: string; }): any;
  /** Example description for no-bind */
  noBind(props: {}): any;
  /** Example description for vbind */
  vbind(props: { num: number; str: string; }): any;
}>();

const props = withDefaults(defineProps<AppButtonProps>(), {
  color: 'primary',
  size: 'default'
});

const emit = defineEmits<AppButtonEvents>();

const attrs = useAttrs();

const buttonAttrs = computed(() => ({
  ...attrs,
  ...props,
}));

const label = ref('Button');
const count = ref(100);

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