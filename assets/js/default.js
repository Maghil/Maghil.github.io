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


//function to transfer user to homepage
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

//function to transfer user to contact page
function contact(){
	location.href="https://maghil.github.io/contact";
}


//function to drop 	dropdown on load and hide it after a while
function drop_start() {
	var d=document.getElementById("myDropdown");
	d.classList.add('show');
	function hide(){
		d.classList.remove('show');
	} 
	setTimeout(hide,5000);
}

//function for random thoughts
function thoughts(){
	//specify the number of thoughts in max
	max = 3;
	rand = Math.floor(Math.random() * Math.floor(max));
	var tht = get_thoughts(rand);
	var idea = document.getElementById("idea");
	var para = document.createElement("<div>");
	var node = document.createTextNode(tht);
	para.appendChild(node);
  	idea.appendChild(para);
}

//add thoughts here
function get_thoughts(rand ){
	switch(rand+1){
	case 1 : return("Click the dice for random thoughts"); break;
	case 2 : return("What's what before knowing what's what"); break;
	case 3 : return("There is a hidden message in the page");break;
	default : return("brain.exe crashed");
	}
}