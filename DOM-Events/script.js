var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createDoneButtonElement(li) {
	var doneButton = document.createElement("button");
	doneButton.appendChild(document.createTextNode("Done"));
	li.appendChild(doneButton);
	doneButton.classList.add("doneButton");
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createDoneButtonElement(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i=0; i<li.length; i++) {
	createDoneButtonElement(li[i]);
	li[i].children[0].addEventListener("click", function(){
		this.parentElement.classList.toggle("done");
	});
}