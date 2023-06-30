//

import dnd5e from '../../dnd5e/dnd5e.mjs'
import dnd5e from '../../dnd5e/module/applications/actor/'
import Actors from '../../dnd5e/module/documents/actor/actor.mjs'

import './config.mjs'
import { ME5eCharacterSheet, ME5eParagonCharacterSheet, ME5eRenegadeCharacterSheet } from './character-sheets.mjs'
import './npc-sheets.mjs'
import './item-sheets.mjs'

const DEBUG = true

const prep = dnd5e.documents.Actor5e.prototype.prepareBaseData
function extendActorData() {
  const myActorList = game.actors.filter(a => (a.type === 'character' || a.type === 'npc') === true)
  const dat = this.system.skills
  const keys = Object.keys(myActorList)
  keys.forEach((key, index) => { myActorList[key].system.skills.veh.ability = 'dex' })

  const health = this.system.attributes.hp

  if (this.type === 'npc' || this.type === 'character') {
    health.shields = health.shields || 0
    health.shieldsMax = health.shieldsMax || 0
    health.shieldsRegen = health.shieldsRegen || 0
  }

  return prep.call(this)
}

console.log('Registering character sheets for ME5e Module')

Actors.registerSheet('DND5E', ME5eCharacterSheet, {
  types: ['character'],
  makeDefault: true
})

Actors.registerSheet('DND5E', ME5eParagonCharacterSheet, {
  types: ['character'],
  makeDefault: false
})

Actors.registerSheet('DND5E', ME5eRenegadeCharacterSheet, {
  types: ['character'],
  makeDefault: false
})

Actors.registerSheet('DND5E', ME5eNPCSheet, {
  types: ['npc'],
  makeDefault: true
})

Items.registerSheet('DND5E', ME5eItemSheet, {
  types: [
    'spell',
    'weapon',
    'equipment',
    'loot',
    'tool',
    'backpack',
    'consumable',
    'class',
    'feat'
  ],
  makeDefault: true
})

// Adding a field to the header for shield tracker
Hooks.on('renderActorSheet', (app, html, data) => {
  const healthdiv = html
    .find('header.sheet-header')
    .find('ul.attributes.flexrow')
  healthdiv.prepend('./templates/attributes-shield.hbs')

  const col = html
    .find('section.center-pane.flexcol')
    .find('ul.attributes.flexrow')
  const counters = html.find('div.counters')
  const flags = data.actor.flags.me5e || {}

  counters.append('./templates/indoctrination.hbs')

  col.prepend('./templates/attributes-reputation.hbs')
})
