document.addEventListener("DOMContentLoaded", function () {
	if (window.location.hash) {
		const element = document.querySelector(window.location.hash);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			// flash the element
			element.style.transition = "background-color 0.5s ease";
			element.style.backgroundColor = "rgba(128, 128, 0, 0.5)";
			setTimeout(() => element.style.backgroundColor = "", 1000);
		}
	}
});