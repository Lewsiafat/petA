<script setup lang="ts">
import { toRef, computed } from 'vue'
import type { CharacterType, Emotion } from './characters'
import { useEmotionMachine } from './composables/useEmotionMachine'
import { useCharacter } from './composables/useCharacter'
import { useFrameAnimation } from './composables/useFrameAnimation'
import CharacterRenderer from './components/CharacterRenderer.ce.vue'
import SpeechBubble from './components/SpeechBubble.ce.vue'

const props = withDefaults(defineProps<{
  character?: CharacterType
  emotion?: Emotion
}>(), {
  character: 'dog',
  emotion: 'idle',
})

const characterRef = toRef(props, 'character')
const emotionRef = toRef(props, 'emotion')

const { currentEmotion } = useEmotionMachine(emotionRef, characterRef)
const { state, name } = useCharacter(characterRef, currentEmotion)
const { frameContent } = useFrameAnimation(state)

const bubble = computed(() => state.value.bubble)
</script>

<template>
  <div class="buddy-pet" :data-character="character" :data-emotion="currentEmotion">
    <SpeechBubble :text="bubble" />
    <CharacterRenderer :frame="frameContent" :emotion="currentEmotion" />
    <div class="buddy-name">{{ name }}</div>
  </div>
</template>

<style>
:host {
  display: inline-block;
  font-size: var(--buddy-font-size, 13px);
}
</style>

<style scoped>
.buddy-pet {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buddy-name {
  margin-top: 4px;
  font-size: 10px;
  font-family: system-ui, sans-serif;
  color: var(--buddy-name-color, #888);
  white-space: nowrap;
  text-align: center;
}
</style>
