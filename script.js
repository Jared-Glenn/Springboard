const fruitForm = document.querySelector('#fruit-form');
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const find = e => {
	e.preventDefault();
	console.log(input.value);
}

function search(str) {
	const results = fruit.filter(value => value.toLowerCase().includes(str));
	console.log(value.toLowerCase())
	
	return results;
}

function searchHandler(e) {
	const results = search(input.value.toLowerCase());
	console.log(input.value.toLowerCase());

	if (input.value !== ""){
		showSuggestions(results);
	}
	else {
		showSuggestions([])
	}
	
}

function showSuggestions(results) {
	let count = 0;
	while (suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	}
	for (result of results){
		if (count > 4){
			break;
		}
		else {
			const suggestion = document.createElement("div");
			suggestion.innerText = result;
			suggestion.classList.add('suggestion');
			suggestions.append(suggestion);
			count += 1;
		}
		
	}
}

const highlightSuggestion = e => {
	if (e.target.classList.contains('suggestion')){
		e.target.style.backgroundColor = "rgb(255, 72, 0)";
		e.target.style.color = "white";
	}
}

const unhighlightSuggestion = e => {
	if (e.target.classList.contains('suggestion')){
		e.target.style.backgroundColor = "transparent";
		e.target.style.color = "black";
	}
}

const useSuggestion = e => {
	input.value = e.target.innerText;
	while (suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	}
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('mouseout', unhighlightSuggestion);
fruitForm.addEventListener("submit", find);