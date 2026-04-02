import type { CharacterDefinition } from './types'

export const dog: CharacterDefinition = {
  name: 'Dog',
  states: {
    idle: {
      frames: [
`  ∪  ∪
 (● ●)
  (▼)ω
 /####\\
 |    |  ~
 ## ##
`,
`  ∪  ∪
 (● ●)
  (▼)ω
 /####\\
 |    | ~~
 ##  ##
`,
`  ∪  ∪
 (–  –)
  (▼)ω
 /####\\
 |    |  ~
 ## ##
`,
`  ∪  ∪
 (● ●)
  (▼)ω
 /####\\
 |    | ~
 ##  ##
`,
      ],
      speed: 600,
      loop: true,
    },

    happy: {
      frames: [
`  ∪  ∪   ♪
 (^ ^)
  (▼)W
 /####\\
 |    | ~~
 ## ##
`,
`  ∪  ∪  ♪
 (^ ^)
  (▼)W
 /####\\
 |    |~~~
 ##  ##
`,
`  ∪  ∪   ♪
 (^ ^)
  (▼)W
 /####\\
 |    | ~~
 ## ##
`,
      ],
      speed: 300,
      loop: false,
      bubble: 'Woof!',
    },

    sad: {
      frames: [
`  n  n
 (; ;)
  (▼)∩
 /####\\
 |    |  .
 ## ##
`,
`  n  n
 (;.;)
  (▼)∩
 /####\\
 |    | .
 ## ##
`,
      ],
      speed: 800,
      loop: false,
      bubble: 'Whimper...',
    },

    thinking: {
      frames: [
`  ∪  ∪    .
 (◉  ◉)
  (▼)—
 /####\\
 |    |  ~
 ## ##
`,
`  ∪  ∪   ..
 ( ◉ ◉)
  (▼)—
 /####\\
 |    | ~
 ##  ##
`,
`  ∪  ∪  ...
 (◉ ◉ )
  (▼)—
 /####\\
 |    |  ~
 ## ##
`,
      ],
      speed: 700,
      loop: false,
      bubble: 'Hmm...',
    },

    surprised: {
      frames: [
`  ∪  ∪  !
 (O O)
  (▼)o
 /####\\
 |    |
 ## ##
`,
`  ∪  ∪ !!
 (O O)
  (▼)O
 /####\\
 |    |
 ## ##
`,
      ],
      speed: 250,
      loop: false,
      bubble: 'Wha?!',
    },

    excited: {
      frames: [
`  ∪  ∪  !!
 (★ ★)
  (▼)D
 /####\\
 |    |~~~
 ## ##
`,
`  ∪  ∪ !!
 (★ ★)
  (▼)D
 /####\\
 |    |~~~
 ##  ##
`,
`  ∪  ∪  !!
 (★ ★)
  (▼)D
 /####\\
 |    |~~~
 ## ##
`,
      ],
      speed: 200,
      loop: false,
      bubble: 'WOOF WOOF!',
    },

    walk: {
      frames: [
`  ∪  ∪
 (● ●)
  (▼)ω
 /####\\
 / |  | \\  ~
  /    \\
`,
`  ∪  ∪
 (● ●)
  (▼)ω
 /####\\
 | /  \\ | ~~
  |    |
`,
`  ∪  ∪
 (● ●)
  (▼)ω
 /####\\
 \\ |  | /  ~
  \\    /
`,
`  ∪  ∪
 (● ●)
  (▼)ω
 /####\\
 | \\  / | ~~
  |    |
`,
      ],
      speed: 300,
      loop: true,
    },
  },
}
