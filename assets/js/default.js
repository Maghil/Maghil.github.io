/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function drop() {
	document.getElementById("myDropdown").classList.toggle("show"); 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
      		}
		}
	}
}

function forget() {
	var ua = detect.parse(navigator.userAgent);
	br = ua.browser.family;
	br = br.toLowerCase();
	if(br.includes("chrome")){
		location.replace("https://www.google.com/_/chrome/newtab");
	}
	else if(br.includes("opera")){
		location.replace("opera:speeddial");
	}
	else if(br.includes("firefox") ||br.includes("ie")){
		location.replace("about:home");
	}
	else if(br.includes("safari")){
		location.replace("http://livepage.apple.com");
	}
	else{
		window.alert("'Yo,just drop the call'(close the tab)  ~ Morpheus")
	}
}

function contact(){
	location.href="https://maghil.github.io/contact.md";
}