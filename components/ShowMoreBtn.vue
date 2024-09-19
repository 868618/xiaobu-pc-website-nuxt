<template>
  <div
    style="text-indent: 1em"
    :class="props.whiteCircle ? 'before:border-2 before:border-white' : 'before:bg-[#6FBFF2]'"
    class="inline text-16 text-white leading-normal relative z-3 before:rounded-full before:w-45 before:h-45 before:absolute before:left-0 before:top-1/2 before:-z-1 before:-translate-y-1/2"
  >
    <span class="cursor-pointer flex items-center" :class="props.black ? 'text-black' : 'text-white'">
      {{ props.text || def }} →
    </span>
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n();

const def = computed(() => t("viewAll"));

const props = defineProps({
  black: {
    type: Boolean,
    default: false,
  },

  text: {
    type: String,
    default: "",
  },

  whiteCircle: {
    type: Boolean,
    default: false,
  },
});
</script>
