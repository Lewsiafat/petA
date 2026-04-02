export type Emotion = 'idle' | 'happy' | 'sad' | 'thinking' | 'surprised' | 'excited' | 'walk'

export interface AnimationState {
  /** Complete ASCII art frames to cycle through */
  frames: string[]
  /** Ms per frame (default: 500) */
  speed?: number
  /** Loop the frames? (default: true for idle/walk, false for emotions) */
  loop?: boolean
  /** Optional speech bubble text */
  bubble?: string
}

export interface CharacterDefinition {
  name: string
  states: Record<Emotion, AnimationState>
}

export type CharacterType = 'dog' | 'cat' | 'robot' | 'snake'
