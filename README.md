# Buddy Pet

Animated text pet web component for AI agent chat interfaces.

## Features

- **4 Characters**: Dog, Cat, Robot, Snake — each with unique ASCII art design
- **7 States**: idle, happy, sad, thinking, surprised, excited, walk
- **Frame Animation**: Multi-frame ASCII art cycling per state
- **Auto-reset**: Emotion states automatically return to idle
- **Web Component**: Standalone `<buddy-pet>` custom element, works in any HTML page

## Usage

### Script Tag

```html
<script src="buddy-pet.umd.js"></script>
<buddy-pet character="dog" emotion="happy"></buddy-pet>
```

### ESM Import

```ts
import { register } from 'buddy-pet'
register('buddy-pet') // custom tag name
```

### Attributes

| Attribute   | Values                                                        | Default |
|-------------|---------------------------------------------------------------|---------|
| `character` | `dog`, `cat`, `robot`, `snake`                                | `dog`   |
| `emotion`   | `idle`, `happy`, `sad`, `thinking`, `surprised`, `excited`, `walk` | `idle`  |

### CSS Custom Properties

| Property              | Description         | Default        |
|-----------------------|---------------------|----------------|
| `--buddy-font-size`   | Character font size | `13px`         |
| `--buddy-color`       | Text color          | `currentColor` |
| `--buddy-name-color`  | Name label color    | `#888`         |
| `--buddy-bubble-bg`   | Bubble background   | `#fff`         |
| `--buddy-bubble-color`| Bubble text color   | `#333`         |
| `--buddy-bubble-border`| Bubble border      | `#ccc`         |

## Development

```bash
npm install
npm run dev      # Dev playground at localhost:5173
npm run build    # Output: dist/buddy-pet.es.js + buddy-pet.umd.js
```

## Architecture & Files

```
src/
├── entry.ce.ts                   # Web component registration entry
├── BuddyPet.ce.vue              # Root component
├── characters/
│   ├── types.ts                  # Core types (Emotion, AnimationState, CharacterDefinition)
│   ├── index.ts                  # Character registry
│   ├── dog.ts / cat.ts / robot.ts / snake.ts
├── composables/
│   ├── useEmotionMachine.ts      # Emotion state machine (auto-reset to idle)
│   ├── useCharacter.ts           # Character + state resolution
│   └── useFrameAnimation.ts      # Frame cycling engine
└── components/
    ├── CharacterRenderer.ce.vue  # ASCII frame renderer + CSS effects
    └── SpeechBubble.ce.vue       # Speech bubble with transitions
```

## Tech Stack

- Vue 3 + TypeScript + Vite
- `defineCustomElement` for Web Component export
- Pure CSS keyframe animations
- Zero external dependencies (Vue bundled in)
