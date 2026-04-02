import { ref, watch, onBeforeUnmount, type Ref } from 'vue'
import { characters, type CharacterType, type Emotion } from '../characters'

export function useEmotionMachine(
  emotionProp: Ref<Emotion>,
  characterType: Ref<CharacterType>
) {
  const currentEmotion = ref<Emotion>('idle')
  let resetTimer: ReturnType<typeof setTimeout> | null = null

  function clearReset() {
    if (resetTimer !== null) {
      clearTimeout(resetTimer)
      resetTimer = null
    }
  }

  function transitionToIdle() {
    clearReset()
    currentEmotion.value = 'idle'
  }

  watch(emotionProp, (newEmotion) => {
    if (!newEmotion || newEmotion === 'idle') {
      transitionToIdle()
      return
    }

    clearReset()
    currentEmotion.value = newEmotion

    const def = characters[characterType.value] ?? characters.dog
    const state = def.states[newEmotion]
    if (!state) {
      transitionToIdle()
      return
    }

    // For looping states (idle, walk), don't auto-reset
    if (state.loop) return

    // Non-looping emotions: play all frames then return to idle
    const totalDuration = (state.speed ?? 500) * state.frames.length * 2
    resetTimer = setTimeout(() => {
      transitionToIdle()
    }, totalDuration)
  }, { immediate: true })

  onBeforeUnmount(() => {
    clearReset()
  })

  return { currentEmotion }
}
