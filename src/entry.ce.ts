import { defineCustomElement } from 'vue'
import BuddyPet from './BuddyPet.ce.vue'
import CharacterRenderer from './components/CharacterRenderer.ce.vue'
import SpeechBubble from './components/SpeechBubble.ce.vue'

// Nested custom element styles need to be manually collected for shadow DOM
const BuddyPetCE = defineCustomElement(BuddyPet, {
  shadowRoot: true,
  styles: [
    ...(CharacterRenderer.styles ?? []),
    ...(SpeechBubble.styles ?? []),
  ],
})

export { BuddyPetCE }

export function register(tagName = 'buddy-pet') {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, BuddyPetCE)
  }
}

// Auto-register
register()
