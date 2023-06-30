//

import DND5E from DND5E;

//Changing out deprecated 5e skills to their replacements
DND5E.config.skills.arc = { label: "Electronics", ability: "int" };
DND5E.config.skills.nat = { label: "Engineering", ability: "int" };
DND5E.config.skills.rel = { label: "Science", ability: "int" };
DND5E.config.skills.veh = { label: "Vehical Handling", ability: "dex" };
// Deletes animal handling from system
delete DND5E.config.skills.ani;

//Adding equipment types
DND5E.config.equipmentTypes["prog"] = "Program";
DND5E.config.equipmentTypes["armMod"] = "Armor Mod";
DND5E.config.equipmentTypes["wepMod"] = "Weapon Mod"
DND5E.config.equipmentTypes["bodArm"] = "Body Armor"


// //Changing and adding consumable types
DND5E.config.consumableTypes["wand"] = "Single-Use Program"
DND5E.config.consumableTypes["rod"] = "Grenade";
DND5E.config.consumableTypes["narc"] = "Narcotic";

//Changing "schools" of magic
DND5E.config.spellSchools['abj'] = 'Biotics';
DND5E.config.spellSchools['con'] = 'Tech';
DND5E.config.spellSchools['div'] = 'Combat Powers';

//Adding weapon types
DND5E.config.weaponTypes['ars'] = 'Assault Rifle';
DND5E.config.weaponTypes['hps'] = 'Heavy Pistol';
DND5E.config.weaponTypes['smg'] = 'SMG';
DND5E.config.weaponTypes['sht'] = 'Shotgun';
DND5E.config.weaponTypes['snp'] = 'Sniper Rifle';
DND5E.config.weaponTypes['hvy'] = 'Heavy Weapon';

//Adding weapon properties
DND5E.config.weaponProperties['arc'] = 'Arc';
DND5E.config.weaponProperties['bst'] = 'Burst Fire';
DND5E.config.weaponProperties['dtp'] = 'Double Tap';
DND5E.config.weaponProperties['het'] = 'Heat';
DND5E.config.weaponProperties['hip'] = 'Hip Fire';
DND5E.config.weaponProperties['snt'] = 'Silent';
DND5E.config.weaponProperties['coi'] = 'Recoil';

//Changing currencies, all other currencies appear as 0 with no labels
DND5E.config.currencies = {
  pp: 'Credits',
};
//Currency conversion option now does nothing to avoid accidental user error
//(also to avoid mishaps with player curiosity for 'what does this button do?')
//The answer is nothing. The button does nothing now
DND5E.config.currencyConversion = {};

//Adding condition types
DND5E.config.conditionTypes['frozen'] = 'Frozen';
DND5E.config.conditionTypes['indoctrinated'] = 'Indoctrinated';
DND5E.config.conditionTypes['lifted'] = 'Lifted';
DND5E.config.conditionTypes['primed'] = 'Primed';
DND5E.config.conditionTypes['primedCold'] = 'Primed: Cold';
DND5E.config.conditionTypes['primedFire'] = 'Primed: Fire';
DND5E.config.conditionTypes['primedForce'] = 'Primed: Force';
DND5E.config.conditionTypes['primedLight'] = 'Primed: Lightning';
DND5E.config.conditionTypes['primedNec'] = 'Primed: Necrotic';
DND5E.config.conditionTypes['targeting'] = 'Targeting';

//Changing and adding some tool proficiencies
DND5E.config.toolProficiencies['herb'] = "Chemist's Supplies";
DND5E.config.toolProficiencies['navg'] = 'Starship System (Navigation)';
DND5E.config.toolProficiencies['pois'] = "Brewer's Supplies";
DND5E.config.toolProficiencies['aswb'] = "Armorsmith's Workbench";
DND5E.config.toolProficiencies['h4ck'] = 'Hacking Tools';
DND5E.config.toolProficiencies['mdcn'] = 'Medical Kit';
DND5E.config.toolProficiencies['pntr'] = "Painter's Supplies";
DND5E.config.toolProficiencies['ssdr'] = 'Starship Systems (Drive)';
DND5E.config.toolProficiencies['sshe'] = 'Starship Systems (Helm)';
DND5E.config.toolProficiencies['sssc'] = 'Starship Systems (SSC)';
DND5E.config.toolProficiencies['ssew'] = 'Starship Systems (EWS)';
DND5E.config.toolProficiencies['sswp'] = 'Starship Systems (Weapons)';
DND5E.config.toolProficiencies['tail'] = "Tailor's Tools";
DND5E.config.toolProficiencies['tink'] = "Tinker's Tools";
DND5E.config.toolProficiencies['wswb'] = "Weaponsmith's Workbench";