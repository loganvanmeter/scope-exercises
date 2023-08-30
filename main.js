const cookies = [
	"Oatmeal Raisin",
	"Chocolate Chip",
	"Sugar",
	"Peanut Butter",
	"Snickerdoodle",
	"Ginger",
];
let y = 1;
//changed y to x in interation and updated index in current cookie to from y to x
for (let x = 1; x < cookies.length; x++) {
	const currentCookie = cookies[x];
	console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
}

//moved console log into the function's block scope
const conjunction = function (firstWord, secondWord) {
	const conjoinedWord = `${firstWord} ${secondWord}`;
	console.log(conjoinedWord);
};

conjunction("Master", "Card");

const modSquad = {
	members: [
		"Pete Cochran",
		"Linc Hayes",
		"Julie Barnes",
		"Capt. Adam Greer",
		"Chief Barney Metcalf",
	], //added comma
	series: {
		start: "1968",
		end: "1973",
	},
};

let HTMLRepresentation = `<h1>The Mod Squad</h1>`; //changed const to let

modSquad.members.forEach((member) => {
	HTMLRepresentation += `<div>${member}</div>`; //removed second const declaration
});
//removed brackets
console.log(HTMLRepresentation);

const locations = [
	[1, 1],
	[1, 2],
	[1, 3],
	[2, 1],
	[2, 2],
	[2, 3],
];

for (const location of locations) {
	if (location[0] > 2) {
		const invalidLocation = true;
		if (invalidLocation) {
			console.log("This location is invalid");
		} //moved second condition into scope of first conditional
	}
}

const llamaNamer = function () {
	const possibleNames = [
		"Larry",
		"Leon",
		"Leona",
		"Les",
		"Laura",
		"Lemony",
		"Lars",
		"Lekisha",
	];
	const randomizer = Math.floor(Math.random() * 7);

	function namer() {
		const suffix = " the Llama";
		const name = possibleNames[randomizer];
		return name + suffix;
	}
	return namer();
};

const nameMaker = llamaNamer();
console.log(nameMaker);
