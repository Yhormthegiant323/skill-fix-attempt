export const PERKS = [

/* COMBAT */
{
 id:"gunslinger",
 name:"Gunslinger",
 category:"combat",
 ranks:[
  "+2 Guns, Pistols -1 AP",
  "+3 Guns, Pistols -1 AP",
  "+4 Guns, Pistols -2 AP"
 ],
 requirements:[{minLevel:3,minSkills:{guns:3},minSpecial:{}}]
},
{
 id:"commando",
 name:"Commando",
 category:"combat",
 ranks:[
  "+2 Guns (Rifles), Ignore 1 DR",
  "+3 Guns (Rifles), Ignore 2 DR",
  "+4 Guns (Rifles), Ignore 3 DR"
 ],
 requirements:[{minLevel:3,minSkills:{guns:3},minSpecial:{}}]
},
{
 id:"shotgun_surgeon",
 name:"Shotgun Surgeon",
 category:"combat",
 ranks:[
  "Ignore 2 DR",
  "Ignore 3 DR",
  "Ignore 4 DR"
 ],
 requirements:[{minLevel:6,minSkills:{guns:4},minSpecial:{}}]
},
{
 id:"laser_commander",
 name:"Laser Commander",
 category:"combat",
 ranks:[
  "+1 hit/dmg (Energy)",
  "+2 hit/dmg (Energy)",
  "+3 hit/dmg (Energy)"
 ],
 requirements:[{minLevel:6,minSkills:{science:3},minSpecial:{}}]
},
{
 id:"demolition_expert",
 name:"Demolition Expert",
 category:"combat",
 ranks:[
  "+1 explosive dmg die",
  "+2 explosive dmg die",
  "+3 explosive dmg die"
 ],
 requirements:[{minLevel:3,minSkills:{explosives:3},minSpecial:{}}]
},
{
 id:"super_slam",
 name:"Super Slam",
 category:"combat",
 ranks:[
  "Knock prone on crit",
  "Knock prone on hit",
  "Stun on crit"
 ],
 requirements:[{minLevel:6,minSkills:{melee:3},minSpecial:{STR:7}}]
},
{
 id:"slayer",
 name:"Slayer",
 category:"combat",
 ranks:[
  "+1 melee/unarmed dmg",
  "+2 melee/unarmed dmg",
  "+3 melee/unarmed dmg"
 ],
 requirements:[{minLevel:6,minSkills:{melee:4},minSpecial:{AGI:6}}]
},
{
 id:"sniper",
 name:"Sniper",
 category:"combat",
 ranks:[
  "Ignore half cover",
  "Ignore 3/4 cover",
  "Ignore all cover"
 ],
 requirements:[{minLevel:6,minSkills:{guns:4},minSpecial:{PER:7}}]
}


,
/* STEALTH & MOBILITY */
{
 id:"ninja",
 name:"Ninja",
 category:"stealth_mobility",
 ranks:[
  "+1 Sneak, +1d6 stealth melee/unarmed",
  "+2 Sneak, +1d6 stealth melee/unarmed",
  "+3 Sneak, +1d6 stealth melee/unarmed"
 ],
 requirements:[{minLevel:3,minSkills:{sneak:3},minSpecial:{AGI:6}}]
},
{
 id:"silent_running",
 name:"Silent Running",
 category:"stealth_mobility",
 ranks:["No movement penalty while sneaking"],
 requirements:[{minLevel:3,minSkills:{sneak:3},minSpecial:{}}]
},
{
 id:"thief",
 name:"Thief",
 category:"stealth_mobility",
 ranks:[
  "+1 Sneak/Lockpick",
  "+2 Sneak/Lockpick",
  "+3 Sneak/Lockpick"
 ],
 requirements:[{minLevel:3,minSkills:{sneak:3,lockpick:3},minSpecial:{}}]
},
{
 id:"action_boy",
 name:"Action Boy",
 category:"stealth_mobility",
 ranks:["Regain all AP once per encounter"],
 requirements:[{minLevel:6,minSkills:{},minSpecial:{AGI:6}}]
},
{
 id:"ghostwalker",
 name:"Ghostwalker",
 category:"stealth_mobility",
 ranks:["+2 AGI rolls while undetected"],
 requirements:[{minLevel:6,minSkills:{sneak:4},minSpecial:{}}]
},
{
 id:"backstabber",
 name:"Backstabber",
 category:"stealth_mobility",
 ranks:["+2 dmg vs unaware targets"],
 requirements:[{minLevel:6,minSkills:{sneak:4},minSpecial:{}}]
},
{
 id:"tunnel_rat",
 name:"Tunnel Rat",
 category:"stealth_mobility",
 ranks:["Ignore cramped penalties"],
 requirements:[{minLevel:3,minSkills:{sneak:2},minSpecial:{}}]
},
{
 id:"chameleon_skin",
 name:"Chameleon Skin",
 category:"stealth_mobility",
 ranks:["Enemies -2 detect/attack when still"],
 requirements:[{minLevel:6,minSkills:{sneak:4},minSpecial:{}}]
}

,
/* SURVIVAL & MEDICINE */
{
 id:"hunter",
 name:"Hunter",
 category:"survival_medicine",
 ranks:[
  "+1 Survival vs animals/mutants, gain trophies",
  "+2 Survival vs animals/mutants, gain trophies",
  "+3 Survival vs animals/mutants, gain trophies"
 ],
 requirements:[{minLevel:3,minSkills:{survival:3},minSpecial:{END:6}}]
},
{
 id:"rapid_metabolism",
 name:"Rapid Metabolism",
 category:"survival_medicine",
 ranks:["Healing restores +2 HP (non-robots)"],
 requirements:[{minLevel:3,minSkills:{medicine:3},minSpecial:{}}]
},
{
 id:"chemist",
 name:"Chemist",
 category:"survival_medicine",
 ranks:["Chems last twice as long"],
 requirements:[{minLevel:6,minSkills:{science:3},minSpecial:{INT:6}}]
},
{
 id:"purifier",
 name:"Purifier",
 category:"survival_medicine",
 ranks:["+1 damage die vs Mutants/Ghouls/Beasts"],
 requirements:[{minLevel:6,minSkills:{melee:3},minSpecial:{STR:6}}]
},
{
 id:"toughness",
 name:"Toughness",
 category:"survival_medicine",
 ranks:["+1 permanent DR"],
 requirements:[{minLevel:3,minSkills:{},minSpecial:{END:6}}]
},
{
 id:"field_medic",
 name:"Field Medic",
 category:"survival_medicine",
 ranks:["Free stabilize 1/encounter, half AP after"],
 requirements:[{minLevel:6,minSkills:{medicine:4},minSpecial:{INT:6}}]
},
{
 id:"green_thumb",
 name:"Green Thumb",
 category:"survival_medicine",
 ranks:["Double harvest from plants/fungus"],
 requirements:[{minLevel:3,minSkills:{survival:3},minSpecial:{}}]
},
{
 id:"rad_sponge",
 name:"Rad Sponge",
 category:"survival_medicine",
 ranks:["Reduce incoming RAD by 50% (min 1/scene)"],
 requirements:[{minLevel:6,minSkills:{medicine:3},minSpecial:{END:6}}]
}

,
/* CRAFTING & TECHNICAL */
{
 id:"jury_rigging",
 name:"Jury Rigging",
 category:"crafting_technical",
 ranks:["Repair items using similar materials"],
 requirements:[{minLevel:3,minSkills:{repair:3},minSpecial:{INT:6}}]
},
{
 id:"scrapper",
 name:"Scrapper",
 category:"crafting_technical",
 ranks:["Gain extra components from tech loot"],
 requirements:[{minLevel:3,minSkills:{repair:3},minSpecial:{}}]
},
{
 id:"weapon_artisan",
 name:"Weapon Artisan",
 category:"crafting_technical",
 ranks:["One weapon permanently gains +1"],
 requirements:[{minLevel:6,minSkills:{repair:4},minSpecial:{INT:7}}]
},
{
 id:"computer_whiz",
 name:"Computer Whiz",
 category:"crafting_technical",
 ranks:["Once per session, auto-succeed Science terminal"],
 requirements:[{minLevel:3,minSkills:{science:3},minSpecial:{INT:6}}]
},
{
 id:"robco_certified",
 name:"RobCo Certified",
 category:"crafting_technical",
 ranks:["Robots are neutral/friendly until harmed"],
 requirements:[{minLevel:6,minSkills:{science:4},minSpecial:{INT:7}}]
},
{
 id:"tinker",
 name:"Tinker",
 category:"crafting_technical",
 ranks:["Repair costs -50%, ignore breakage on fail"],
 requirements:[{minLevel:6,minSkills:{repair:4},minSpecial:{INT:6}}]
},
{
 id:"modsmith",
 name:"Modsmith",
 category:"crafting_technical",
 ranks:["Build mods without exotic parts"],
 requirements:[{minLevel:6,minSkills:{repair:3,science:3},minSpecial:{INT:7}}]
},
{
 id:"emp_specialist",
 name:"EMP Specialist",
 category:"crafting_technical",
 ranks:[
  "+1 atk vs robots/turrets, crit shutdown",
  "+2 atk vs robots/turrets, crit shutdown",
  "+3 atk vs robots/turrets, crit shutdown"
 ],
 requirements:[{minLevel:6,minSkills:{energy_weapons:3},minSpecial:{INT:6}}]
}
];
