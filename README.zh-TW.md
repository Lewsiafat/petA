# Buddy Pet

為 AI Agent 聊天介面打造的文字寵物動畫 web component。

## 功能特色

- **4 種角色**：Dog、Cat、Robot、Snake — 各有獨特 ASCII art 造型
- **7 種狀態**：idle、happy、sad、thinking、surprised、excited、walk
- **逐幀動畫**：每種狀態多幀 ASCII art 循環播放
- **自動回歸**：情緒狀態播放完畢自動回到 idle
- **Web Component**：獨立的 `<buddy-pet>` 自訂元素，可嵌入任何 HTML 頁面

## 使用方式

### Script Tag

```html
<script src="buddy-pet.umd.js"></script>
<buddy-pet character="dog" emotion="happy"></buddy-pet>
```

### ESM Import

```ts
import { register } from 'buddy-pet'
register('buddy-pet') // 自訂標籤名稱
```

### 屬性

| 屬性        | 可用值                                                         | 預設值  |
|-------------|---------------------------------------------------------------|---------|
| `character` | `dog`, `cat`, `robot`, `snake`                                | `dog`   |
| `emotion`   | `idle`, `happy`, `sad`, `thinking`, `surprised`, `excited`, `walk` | `idle`  |

### CSS 自訂屬性

| 屬性                  | 說明             | 預設值          |
|-----------------------|------------------|----------------|
| `--buddy-font-size`   | 角色字體大小      | `13px`         |
| `--buddy-color`       | 文字顏色          | `currentColor` |
| `--buddy-name-color`  | 名稱標籤顏色      | `#888`         |
| `--buddy-bubble-bg`   | 泡泡背景色        | `#fff`         |
| `--buddy-bubble-color`| 泡泡文字顏色      | `#333`         |
| `--buddy-bubble-border`| 泡泡邊框色       | `#ccc`         |

## 開發

```bash
npm install
npm run dev      # 開發測試頁面 localhost:5173
npm run build    # 輸出: dist/buddy-pet.es.js + buddy-pet.umd.js
```

## 架構與檔案

```
src/
├── entry.ce.ts                   # Web component 註冊入口
├── BuddyPet.ce.vue              # 根元件
├── characters/
│   ├── types.ts                  # 核心型別 (Emotion, AnimationState, CharacterDefinition)
│   ├── index.ts                  # 角色註冊表
│   ├── dog.ts / cat.ts / robot.ts / snake.ts
├── composables/
│   ├── useEmotionMachine.ts      # 情緒狀態機（自動回歸 idle）
│   ├── useCharacter.ts           # 角色 + 狀態解析
│   └── useFrameAnimation.ts      # 逐幀動畫引擎
└── components/
    ├── CharacterRenderer.ce.vue  # ASCII 幀渲染器 + CSS 動效
    └── SpeechBubble.ce.vue       # 語句泡泡含轉場動畫
```

## 技術棧

- Vue 3 + TypeScript + Vite
- `defineCustomElement` 匯出 Web Component
- 純 CSS keyframe 動畫
- 零外部依賴（Vue 已打包在內）
