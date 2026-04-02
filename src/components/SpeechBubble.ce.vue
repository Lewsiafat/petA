<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <Transition name="bubble">
    <div v-if="text" class="speech-bubble">
      <span class="bubble-text">{{ text }}</span>
      <div class="bubble-tail"></div>
    </div>
  </Transition>
</template>

<style scoped>
.speech-bubble {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--buddy-bubble-bg, #fff);
  color: var(--buddy-bubble-color, #333);
  border: 2px solid var(--buddy-bubble-border, #ccc);
  border-radius: 12px;
  padding: 4px 10px;
  font-size: 12px;
  font-family: system-ui, sans-serif;
  white-space: nowrap;
  z-index: 10;
  animation: bubble-pop 0.3s ease-out;
}

.bubble-tail {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid var(--buddy-bubble-border, #ccc);
}

.bubble-tail::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -5px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid var(--buddy-bubble-bg, #fff);
}

.bubble-enter-active {
  animation: bubble-pop 0.3s ease-out;
}

.bubble-leave-active {
  animation: bubble-pop 0.2s ease-in reverse;
}

@keyframes bubble-pop {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.5) translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
</style>
