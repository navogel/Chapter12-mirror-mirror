console.log("hello");

let outputEl1 = document.querySelector("#unique1");
let outputEl2 = document.querySelector("#unique2");

document.querySelector("#message").addEventListener("keyup", event => {
	outputEl1.innerHTML = event.target.value;
	outputEl2.innerHTML = event.target.value;
});
