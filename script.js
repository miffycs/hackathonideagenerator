// array of what type of app
const typeofapp = [
	"A web",
	"A Chrome",
	"A Firefox",
	"A Safari",
	"A mobile",
	"An Android",
	"An iPhone",
	"An iPad",
	"A Windows Phone",
	"A Windows",
	"A Mac",
	"An Arduino",
	"A Raspberry Pi",
	"An Oculus Rift VR",
];

// array of buzzwords
const buzzword = [
	"optimizes",
	"streamlines",
	"facilitates",
	"generates",
	"accelerates",
	"advances",
	"promotes",
	"provides",
	"restores",
	"refreshes",
	"realigns",
	"empowers",
	"aggregates",
	"calibrates",
	"improves accessibility to",
	"crowdsources",
	"synchronizes"
];

// array of what the app does
const whatitdoes = [
	"music sharing",
	"interpersonal relations",
	"augmented reality",
	"systems simulation",
	"online education",
	"text-based communications",
	"online payment systems",
	"bitcoins",
	"bitcoin transactions",
	"cryptocurrency management",
	"video sharing",
	"sustainable energy",
	"real-time notifications"
];

// array of API's to integrate
const api = [
	"Facebook",
	"Instagram",
	"Snapchat",
	"Twitter",
	"Pinterest",
	"Dropbox",
	"Bose",
	"Spotify",
	"Venmo",
	"PayPal",
	"Financial Payment",
	"Twilio",
	"Google Maps"
];

// generate new combination every time button is clicked
$(document).ready(() => {

	// function to generate new combination every time button is clicked
	generate = () => {
		// pick something from the 'typeofapp' array
		let randType = typeofapp[Math.floor(Math.random() * typeofapp.length)];
		// insert intto page where it belongs
		$('#typeofapp').html(randType);

		let randBuzz = buzzword[Math.floor(Math.random() * buzzword.length)];
		$('#buzzword').html(randBuzz);

		let randWhatItDoes = whatitdoes[Math.floor(Math.random() * whatitdoes.length)];
		$('#whatitdoes').html(randWhatItDoes);

		let randAPI = api[Math.floor(Math.random() * api.length)];
		$('#api').html(randAPI);
	};

	// generate first suggestion when document is loaded
	generate();

	// generate new combination every time button is clicked
	$('#new').click(() => {
		generate();
	});

});
