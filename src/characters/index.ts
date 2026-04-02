import type { CharacterDefinition, CharacterType } from './types'
import { dog } from './dog'
import { cat } from './cat'
import { robot } from './robot'
import { snake } from './snake'

export const characters: Record<CharacterType, CharacterDefinition> = {
  dog,
  cat,
  robot,
  snake,
}

export type { CharacterDefinition, CharacterType, Emotion, AnimationState } from './types'
