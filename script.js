// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
	document.getElementById("lakers-column").classList.add("opaque");
	document.getElementById("red-column").classList.add("opaque");
		document.getElementById("purple-column").classList.add("opaque");

}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("pats-column").classList.remove("pats-silver");
	document.getElementById("rams-column").classList.remove("rams-blue");
}

function showIngram(el){
	document.getElementById("laker").src = "image/ingramflextwo.png";
	document.getElementById("lakertwo").src = "image/ingramflextwo.png";
	document.getElementById("lakerthree").src = "image/ingramflextwo.png";

}