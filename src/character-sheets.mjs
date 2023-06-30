// Character sheets

import DND5E from DND5E;

class ME5eCharacterSheet extends DND5E.applications.actor.ActorSheet5eCharacter {
  static get defaultOptions() {
    console.log('~~~~~~~~~~~ME5E CHARACTER SHEET ACTIVE~~~~~~~~~~~')
    const options = super.defaultOptions
    options.classes.push('me5e')
    return options
  }
}

class ME5eParagonCharacterSheet extends DND5E.applications.actor.ActorSheet5eCharacter {
  static get defaultOptions() {
    console.log('~~~~~~~~~~~PARAGON CHARACTER SHEET ACTIVE~~~~~~~~~~~')
    const options = super.defaultOptions
    options.classes.push('paragon')
    return options
  }
}

class ME5eRenegadeCharacterSheet extends DND5E.applications.actor.ActorSheet5eCharacter {
  static get defaultOptions() {
    console.log('~~~~~~~~~~~RENEGADE CHARACTER SHEET ACTIVE~~~~~~~~~~~')
    const options = super.defaultOptions
    options.classes.push('renegade')
    return options
  }
}