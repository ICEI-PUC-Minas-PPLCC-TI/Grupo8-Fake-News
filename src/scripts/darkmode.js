const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
	document.body.classList.toggle("dark", e.target.checked);
    if  (document.cookie === "dark")
		document.cookie = "light";
	else
		document.cookie = "dark";
})

function dark(){
	var element = document.body;
	if (document.cookie == "dark")
		element.classList.toggle(document.cookie);
		
}		
