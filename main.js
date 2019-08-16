var input = document.getElementById('input');
var submit = document.getElementsByTagName('form')[0];
var arrayDivs = [];
var unUsedNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (var i = 0; i < 16; i++) {
	arrayDivs[i] = document.getElementById(i+1);
};

submit.addEventListener ('submit', provjera);

function provjera () {
	event.preventDefault();
	var index = Math.floor(Math.random() * (unUsedNumbers.length-1));
	console.log(index);
		arrayDivs[unUsedNumbers[index]].style.background = randomColor();	
		arrayDivs[unUsedNumbers[index]].innerHTML = input.value;
		unUsedNumbers.splice(index,1);
			console.log(unUsedNumbers);

}

function randomColor () {
	let letters = '0123456789ABCDEF'
	let color = '#';
	for (var i = 1; i <= 6; i++) {
		color += letters[Math.floor(Math.random()*16)];
	};
	return color;
}