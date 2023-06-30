class ME5eItemSheet extends dnd5e.applications.item.ItemSheet5e {
  static get defaultOptions() {
    const options = super.defaultOptions
    options.classes.push('me5e')
    return options
  }
}