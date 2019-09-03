console.log("hello");

const audrey = document.getElementById("audrey");
let scroll = window.scrollY;

// window.addEventListener("scroll", event => {
// 	audrey.style.width = window.scrollY + "px";
// 	scroll = window.scrollY;
// 	let width = scroll / 3;
// 	if (width < 50) {
// 		width = 50;
// 	}
// 	audrey.style.width = width + "px";
// 	let height = scroll / 4;
// 	if (height < 100) {
// 		height = 100;
// 	}
// 	audrey.style.height = width + "px";
// });

window.addEventListener("scroll", event => {
	if (window.scrollY < 100) {
		audrey.style.height = "100px";
	} else if (window.scrollY < 50) {
		audrey.style.width = "50px";
	} else {
		audrey.style.width = window.scrollY + "px";
		audrey.style.height = window.scrollY + "px";
	}
});
