# Buddy Pet

文字寵物動畫 Web Component，嵌入 AI Agent 聊天介面使用。

## Tech Stack

- Vue 3 + TypeScript + Vite
- `defineCustomElement` 匯出 standalone web component
- 逐幀 ASCII art 動畫

## Commands

- `npm run dev` — 開發模式 (Vite dev server)
- `npm run build` — 產出 `dist/buddy-pet.es.js` + `buddy-pet.umd.js`

## Project Structure

```
src/
├── entry.ce.ts              # Web component 入口
├── BuddyPet.ce.vue          # 根元件
├── characters/              # 角色定義（types, dog, cat, robot, snake）
├── composables/             # useEmotionMachine, useCharacter, useFrameAnimation
└── components/              # CharacterRenderer, SpeechBubble
specs/                       # Walkthrough 文件
```

## Key Files

- `src/characters/types.ts` — 核心型別：Emotion, AnimationState, CharacterDefinition, CharacterType
- `src/composables/useEmotionMachine.ts` — 情緒狀態機，非 loop 情緒自動回歸 idle
- `src/composables/useFrameAnimation.ts` — 逐幀動畫引擎
- `src/entry.ce.ts` — defineCustomElement + register()
- `vite.config.ts` — Library mode build config

## API

```html
<buddy-pet character="dog" emotion="happy"></buddy-pet>
```

- `character`: dog | cat | robot | snake
- `emotion`: idle | happy | sad | thinking | surprised | excited | walk
