# Buddy Pet Web Component — Walkthrough

- **分支:** `feat/buddy-pet`
- **日期:** 2026-04-02

## 變更摘要
建立 Buddy Pet 文字寵物動畫 web component。使用 Vue 3 + Vite + TypeScript，透過 `defineCustomElement` 匯出為可嵌入任何 HTML 頁面的 standalone web component。支援 4 種角色（Dog、Cat、Robot、Snake）、7 種狀態（idle、happy、sad、thinking、surprised、excited、walk），以逐幀 ASCII art 動畫呈現。

## 修改的檔案

- `package.json` — 專案設定，Vue 3 + Vite + TypeScript 依賴
- `tsconfig.json` — TypeScript 編譯設定
- `env.d.ts` — Vite 與 Vue SFC 型別宣告
- `vite.config.ts` — Vite build 設定，library mode 匯出 ESM + UMD
- `index.html` — Dev playground 入口
- `src/main.ts` — Dev 模式 Vue app 掛載
- `src/App.vue` — Playground 頁面，含角色/情緒切換控制面板
- `src/entry.ce.ts` — Web component 註冊入口，defineCustomElement + auto-register
- `src/BuddyPet.ce.vue` — Root component，組裝 props、composables、子元件
- `src/characters/types.ts` — 核心型別定義（Emotion、AnimationState、CharacterDefinition）
- `src/characters/index.ts` — Character registry，匯出所有角色
- `src/characters/dog.ts` — 狗角色 ASCII art 定義（7 種狀態各 2-4 幀）
- `src/characters/cat.ts` — 貓角色 ASCII art 定義
- `src/characters/robot.ts` — 機器人角色 ASCII art 定義
- `src/characters/snake.ts` — 蛇角色 ASCII art 定義
- `src/composables/useEmotionMachine.ts` — 情緒狀態機，watch prop → 播放 → auto-reset idle
- `src/composables/useCharacter.ts` — 角色選擇 + 當前狀態解析
- `src/composables/useFrameAnimation.ts` — 逐幀動畫引擎，setInterval 驅動 frame cycling
- `src/components/CharacterRenderer.ce.vue` — 角色渲染器，`<pre>` 顯示 + CSS 情緒動效
- `src/components/SpeechBubble.ce.vue` — 語句泡泡，Transition 動畫進出

## 技術細節

- **逐幀動畫架構**：每個角色的每種狀態定義為 `string[]` frames，由 `useFrameAnimation` composable 用 `setInterval` 循環播放。比起個別定位 emoji 碎片，完整 ASCII art frame 的辨識度更高。
- **情緒狀態機**：`useEmotionMachine` 監聽 `emotion` prop 變化，非 loop 狀態（happy、sad 等）播放完畢後自動 `setTimeout` 回到 idle；loop 狀態（idle、walk）持續循環不會 auto-reset。
- **Web Component 匯出**：使用 `.ce.vue` 後綴讓 Vue plugin 自動收集 scoped styles 注入 Shadow DOM。子元件的 styles 在 `entry.ce.ts` 手動合併到根元件的 `defineCustomElement` 呼叫中。
- **Build 輸出**：Vite library mode 產出 ESM + UMD，Vue runtime bundled in（不 externalize），讓非 Vue 頁面也能直接用 `<script>` 引入。
- **動物姿勢**：狗和貓使用四腳著地的自然姿勢，而非擬人化站立。
