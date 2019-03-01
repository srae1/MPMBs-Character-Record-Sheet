/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Cleric, called "Protection Domain"
				
	Code by:	MorePurpleMoreBetter
	Date:		2017-11-29 (sheet v12.999)
	
	
*/

var iFileName = "Cleric - Protection Domain .js";
RequiredSheetVersion(12.999);

SourceList["CF:FD"] = {
	name : "Cody Faulk: Fate Domain",
	abbreviation : "CF:FD",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/194789/",
	date : "2016/12/08"
};

AddSubClass("cleric", "protection domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*protection).*$/i,
	subname : "Protection Domain",
	source : ["CF:FD", 1],
	spellcastingExtra : ["compelled duel", "protection from good and evil", "aid", "protection from poison", "protection from energy", "slow", "guardian of faith", "otiluke's resilient sphere", "antilife shell", "wall of force"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["CF:FD", 0],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armorProfs : [false, false, true, false]
			},
		},
		"subclassfeature1" : {
			name : "Shield of the Faithful",
			source : ["CF:FD", 0],
			minlevel : 1,
			description : "\n   " + "When a creature attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. To do so, you must be able to see both the attacker and the target.",
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Radiant Defense",
			source : ["CF:FD", 0],
			minlevel : 2,
			description : "\n   " + "As an action, you channel blessed energy into an ally that you can see within 30 feet of you. The first time that ally is hit by an attack within the next minute, the attacker takes radiant damage equal to 2d10 + your cleric level.",
			action : ["action", ""]
		},
		"subclassfeature6" : {
				name : "Blessed Healer",
				source : [["SRD", 17], ["P", 60]],
				minlevel : 6,
				description : "\n   " + "When I restore HP to another with a spell, I regain 2 + the spell (slot) level in HP",
				calcChanges : {
					spellAdd : [
						// note that several healing spells are not present here because they don't restore hp at casting (only later)
						function (spellKey, spellObj, spName) {
							var startDescr = spellObj.description;
							switch (spellKey) {
								case "life transference" :
									spellObj.description = spellObj.description.replace("Necrotic", "Necro").replace(", and", ",") + "; I then regain 2+SL hp";
									break;
								case "mass heal" :
									spellObj.description = "Heal 700 hp, split over crea in range, each then +11 hp; also cures blind, deaf, diseases; I heal +11 hp";
									break;
								case "power word heal" :
									spellObj.description = spellObj.description.replace(/heals all.*/i, "full hp; not charmed, frightened, paralyzed, stunned; can stand up as rea; if other, I heal 2+SL");
									break;
								case "regenerate" :
									spellObj.description = spellObj.description.replace(" for rest of duration", "");
								case "heal" :
									spellObj.description = spellObj.description.replace("all diseases", "diseases");
								case "cure wounds" :
								case "healing word" :
								case "mass cure wounds" :
								case "mass healing word" :
								case "prayer of healing" :
									spellObj.description = spellObj.description.replace(/creatures?/i, "crea").replace("within", "in").replace("spellcasting ability modifier", "spellcasting ability mod") + "; if other, I heal 2+SL";
							}
							return startDescr !== spellObj.description;
						},
						"When I cast a spell that restores hit points to another creature than myself at the moment of casting, I also heal 2 + the level of the spell slot (or spell slot equivalent) hit points."
					]
				}
			},
		"subclassfeature8" : {
				name : "Divine Strike",
				source : [["SRD", 17], ["P", 60]],
				minlevel : 8,
				description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
				additional : levels.map(function (n) {
					if (n < 8) return "";
					return "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";
				}),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage';
							}
						},
						"Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."
					]
				}
			},
		
		}
	}
});
