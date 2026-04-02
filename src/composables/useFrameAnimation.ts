import { ref, watch, onBeforeUnmount, type Ref } from 'vue'
import type { AnimationState } from '../characters'

export function useFrameAnimation(state: Ref<AnimationState>) {
  const currentFrame = ref(0)
  let timer: ReturnType<typeof setInterval> | null = null

  function stopTimer() {
    if (timer !== null) {
      clearInterval(timer)
      timer = null
    }
  }

  function startAnimation() {
    stopTimer()
    currentFrame.value = 0

    const { frames, speed = 500, loop = true } = state.value
    if (frames.length <= 1) return

    let frameIndex = 0
    timer = setInterval(() => {
      frameIndex++
      if (frameIndex >= frames.length) {
        if (loop) {
          frameIndex = 0
        } else {
          // Non-loop: stay on last frame, then cycle back through for smooth transition
          frameIndex = 0
        }
      }
      currentFrame.value = frameIndex
    }, speed)
  }

  watch(state, () => {
    startAnimation()
  }, { immediate: true })

  onBeforeUnmount(() => {
    stopTimer()
  })

  const frameContent = ref('')
  watch(
    [currentFrame, state],
    ([idx, s]) => {
      frameContent.value = s.frames[idx] ?? s.frames[0] ?? ''
    },
    { immediate: true }
  )

  return { frameContent, currentFrame }
}
