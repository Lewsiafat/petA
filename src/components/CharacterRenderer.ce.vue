<script setup lang="ts">
defineProps<{
  frame: string
  emotion: string
}>()
</script>

<template>
  <div class="character-stage" :class="`emotion-${emotion}`">
    <pre class="character-frame">{{ frame }}</pre>
  </div>
</template>

<style scoped>
.character-stage {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: transform 0.15s ease;
}

.character-frame {
  font-family: 'Courier New', 'Menlo', 'Consolas', monospace;
  font-size: var(--buddy-font-size, 13px);
  line-height: 1.2;
  color: var(--buddy-color, currentColor);
  white-space: pre;
  user-select: none;
  margin: 0;
  text-align: left;
}

/* Emotion stage effects */
.emotion-happy {
  animation: stage-bounce 0.5s ease-in-out 3;
}

.emotion-sad {
  animation: stage-droop 1s ease-out forwards;
}

.emotion-surprised {
  animation: stage-jump 0.3s ease-out;
}

.emotion-excited {
  animation: stage-vibrate 0.15s linear infinite;
}

.emotion-walk {
  animation: stage-sway 0.7s ease-in-out infinite;
}

@keyframes stage-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

@keyframes stage-droop {
  from { transform: translateY(0); }
  to { transform: translateY(3px); }
}

@keyframes stage-jump {
  0% { transform: translateY(0); }
  30% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}

@keyframes stage-vibrate {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-1px, -1px); }
  50% { transform: translate(1px, 0); }
  75% { transform: translate(-1px, 1px); }
}

@keyframes stage-sway {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(3px); }
}
</style>
