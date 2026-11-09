const positions = document.querySelectorAll(".court-position");
const ball = document.querySelector("#court-ball");
const handlerReadout = document.querySelector("#ball-handler");
const actionReadout = document.querySelector("#playbook-action");
const defaultPosition = {
	handler: "1 - Point Guard",
	destination: "Home Page",
	x: 565,
	y: 250
};

function updatePlaybook(position) {
	handlerReadout.textContent = `${position.dataset.position} - ${position.dataset.role}`;
	actionReadout.textContent = position.dataset.destination;
	ball.setAttribute("transform", `translate(${position.dataset.ballX} ${position.dataset.ballY})`);
	positions.forEach((item) => item.classList.toggle("is-active", item === position));
}

function resetPlaybook() {
	handlerReadout.textContent = defaultPosition.handler;
	actionReadout.textContent = defaultPosition.destination;
	ball.setAttribute("transform", `translate(${defaultPosition.x} ${defaultPosition.y})`);
	positions.forEach((item) => item.classList.toggle("is-active", item.dataset.position === "1"));
}

positions.forEach((position) => {
	position.addEventListener("pointerenter", () => updatePlaybook(position));
	position.addEventListener("focus", () => updatePlaybook(position));
	position.addEventListener("pointerleave", resetPlaybook);
	position.addEventListener("blur", resetPlaybook);
});

resetPlaybook();
