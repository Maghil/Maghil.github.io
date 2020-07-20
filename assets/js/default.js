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
	ua = ua.toLowerCase();
	if(ua.includes("chrome")){
		location.replace("https://www.google.com/_/chrome/newtab");
	}
	if(ua.includes("opera")){
		location.replace("about:home");
	}
	if(ua.includes("firefox") ||ua.includes("ie")){
		location.replace("opera:speeddial");
	}
	if(ua.includes("safari")){
		location.replace("http://livepage.apple.com");
	}
}

function contact(){
	location.href="https://maghil.github.io/contact.html";
}