// Other sheets
class ME5eNPCSheet extends dnd5e.applications.actor.ActorSheet5eNPC {
  static get defaultOptions() {
    const options = super.defaultOptions
    options.classes.push('me5e')
    return options
  }
}