# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [0.1.0] - 2026-04-02

### Added
- 4 種角色：Dog、Cat、Robot、Snake，各有獨特 ASCII art 造型
- 7 種動畫狀態：idle、happy、sad、thinking、surprised、excited、walk
- 逐幀 ASCII art 動畫引擎，每個狀態 2-4 幀循環播放
- 情緒狀態機：非 loop 情緒自動回歸 idle
- 語句泡泡（SpeechBubble）伴隨情緒顯示
- Web Component 匯出（`<buddy-pet>`），支援 `character` 和 `emotion` 屬性
- Dev Playground 測試頁面，含角色/情緒切換控制面板
- ESM + UMD 雙輸出，可直接 `<script>` 引入
