let myArray = [];
function exaggerate(incoming_word){
	for (var i = 0; i < incoming_word.length; i++) {
		function myFunction() {
			var outgoing_word;
			var focused_letter;
			var x = Math.floor((Math.random() * 2) + 1);

			if(x === 1){
				 focused_letter = incoming_word[i].toLowerCase();
			} else {
				 focused_letter = incoming_word[i].toUpperCase();
			}
			myArray.push(focused_letter);
			if (myArray.length === incoming_word.length) {
				outgoing_word = myArray.join("");
//callback here?
				console.log(outgoing_word);
			}
		}
		myFunction();
	}
}

exaggerate("Captain America");