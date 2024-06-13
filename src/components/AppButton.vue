<template>
  <v-btn v-bind="buttonAttrs" v-on="emit">
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

import { useAttrs, withDefaults } from 'vue';

interface AppButtonProps {
  /** color of button */
  color?: 'primary' | 'secondary' | 'error';
  /** size of button */
  size?: 'small' | 'default' | 'large';
}

const props = withDefaults(defineProps<AppButtonProps>(), {
  color: 'primary',
  size: 'default'
});

const attrs = useAttrs();

interface AppButtonEvents {
  /** Fired when item is deleted */
  (event: 'delete', id: string): void;
  /** Fired when item is added */
  (name: 'add', e: MouseEvent): void;
}

const emit = defineEmits<AppButtonEvents>();

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

const buttonAttrs = {
  ...attrs,
  ...props
};

</script>


<style scoped></style>