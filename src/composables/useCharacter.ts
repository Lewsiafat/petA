import { computed, type Ref } from 'vue'
import { characters, type CharacterType, type Emotion, type AnimationState } from '../characters'

export function useCharacter(
  characterType: Ref<CharacterType>,
  currentEmotion: Ref<Emotion>
) {
  const definition = computed(() => characters[characterType.value] ?? characters.dog)

  const state = computed<AnimationState>(() => {
    return definition.value.states[currentEmotion.value] ?? definition.value.states.idle
  })

  const name = computed(() => definition.value.name)

  return { state, name }
}
