/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.
	
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Ammunition
	Effect:		This is the syntax for adding a new type of ammunition to the sheet
				Note that if you want this ammunition to be added automatically when selecting a certain weapon, you need to include its object-name as the 'ammo' attribute. Even if you don't do this, the ammo you define will be filled when typed into an ammo box
	Sheet:		v12.999 (2017-12-16)
*/

var iFileName = "Homebrew Syntax - AmmoList.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AmmoList["distantsting"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []. The spelling here is used to identify the ammo with.

	name : "DistantSting", //Required; the name of the ammunition
	
	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]
	
	weight : 0.05, //Required; the weight in lb
	
	icon : "Arrows", //Required; the icon to use for the ammunition. Depending on the icon you choose, the display and checks have to be assigned correctly. See below for the different options
	
	checks : [".Top", ".Base"], //Required; the type of checkboxes to display
	
	display : 20, //Required; the amount of checkboxes to display
	
	invName : "Stings, Distant", //Optional; the name as it will be added to the equipment section if selected to do so in the equipment menu. If you omit this, the sheet will use the above defined 'name' when adding this to the equipment section
	
	alternatives : ["distant sting", "stingdistant", "sting distant"], //Optional; an arry of alternative names that the code can recognize for this same ammo entry. These need to be all lower case!
};

/* list of all the different icon options. Copy the three lines (icon, checks, display) into the appropriate place above

//arrows:
	icon : "Arrows",
	checks : [".Top", ".Base"],
	display : 20,

//axes:
	icon : "Axes",
	checks : [".Top.Axe", ".Base.Axe"],
	display : 8,

//bullets:
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,

//daggers:
	icon : "Daggers",
	checks : [".Top"],
	display : 10,

//flasks:
	icon : "Flasks",
	checks : [".Top", ".Base"],
	display : 20,
	
//hammers:
	icon : "Hammers",
	checks : [".Top.Axe", ".Base.Axe"],
	display : 8,
	
//spears:
	icon : "Spears",
	checks : [".Base"],
	display : 10,

//vials:
	icon : "Vials",
	checks : [".Top", ".Base"],
	display : 20,
*/