let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnA = true;

const winpattern = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[3, 4, 5],
	[6, 7, 8],
];

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		console.log("box was clicked");
		if (turnA) {
			box.innerText = 'O';
			turnA = false;
		} else {
			box.innerText = 'X';
			turnA = true;
		}
		box.disabled = true;

		checkwinner();
	});
});

const showwinner = (winner) => {
	msg.innerText = `Congratulations, winner is ${winner}`;
	msgcontainer.classList.remove("hide");
};

const checkwinner = () => {
	for (let pattern of winpattern) {
		let pos1val = boxes[pattern[0]].innerText;
		let pos2val = boxes[pattern[1]].innerText;
		let pos3val = boxes[pattern[2]].innerText;

		if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
			if (pos1val === pos2val && pos2val === pos3val) {
				console.log("winner", pos1val);
				showwinner(pos1val);
				disableAllBoxes();
			}
		}
	}
};

const disableAllBoxes = () => {
	boxes.forEach((box) => {
		box.disabled = true;
	});
};

const resetGame = () => {
	boxes.forEach((box) => {
		box.innerText = "";
		box.disabled = false;
	});
	msgcontainer.classList.add("hide");
	turnA = true;
};

resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);
