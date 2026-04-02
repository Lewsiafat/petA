<script setup lang="ts">
import { ref } from 'vue'
import type { CharacterType, Emotion } from './characters'
import BuddyPet from './BuddyPet.ce.vue'

const characters: CharacterType[] = ['dog', 'cat', 'robot', 'snake']
const emotions: Emotion[] = ['idle', 'happy', 'sad', 'thinking', 'surprised', 'excited', 'walk']

const currentCharacter = ref<CharacterType>('dog')
const currentEmotion = ref<Emotion>('idle')
</script>

<template>
  <div class="playground">
    <h1>Buddy Pet Playground</h1>

    <div class="stage">
      <BuddyPet
        :character="currentCharacter"
        :emotion="currentEmotion"
      />
    </div>

    <div class="controls">
      <div class="control-group">
        <h3>Character</h3>
        <div class="buttons">
          <button
            v-for="c in characters"
            :key="c"
            :class="{ active: currentCharacter === c }"
            @click="currentCharacter = c"
          >
            {{ c }}
          </button>
        </div>
      </div>

      <div class="control-group">
        <h3>Emotion</h3>
        <div class="buttons">
          <button
            v-for="e in emotions"
            :key="e"
            :class="{ active: currentEmotion === e }"
            @click="currentEmotion = e"
          >
            {{ e }}
          </button>
        </div>
      </div>
    </div>

    <div class="info">
      <p>Current: <strong>{{ currentCharacter }}</strong> / <strong>{{ currentEmotion }}</strong></p>
      <p class="hint">Emotions auto-reset to idle after playing</p>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #1a1a2e;
  color: #eee;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.playground {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #e94560;
}

.stage {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  min-height: 220px;
  padding: 1rem;
  margin: 0 auto 2rem;
  background: #16213e;
  border-radius: 16px;
  border: 2px solid #0f3460;
  --buddy-color: #e0e0e0;
  --buddy-font-size: 13px;
  --buddy-bubble-bg: #16213e;
  --buddy-bubble-color: #e0e0e0;
  --buddy-bubble-border: #0f3460;
  --buddy-name-color: #666;
}

.controls {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.control-group h3 {
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.buttons {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  padding: 0.4rem 0.8rem;
  border: 1px solid #0f3460;
  background: #16213e;
  color: #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;
}

button:hover {
  background: #0f3460;
  color: #fff;
}

button.active {
  background: #e94560;
  border-color: #e94560;
  color: #fff;
}

.info {
  color: #666;
  font-size: 0.85rem;
}

.info strong {
  color: #e94560;
}

.hint {
  margin-top: 0.3rem;
  font-size: 0.75rem;
  color: #555;
}
</style>
