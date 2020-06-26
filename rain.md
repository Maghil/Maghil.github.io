---
title: rain
---

<canvas id="c">
  
</canvas>

<script>
var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;			      //making the canvas full screen
c.width = window.innerWidth;

var charSet = "one";
charSet = charSet.split("");
var font_size = 20;
var columns = c.width/font_size; 		        //number of columns for the rain					
var drops = [];					                    //an array of drops - one per column
for(var x = 0; x < columns; x++)		        //x below is the x coordinate
	drops[x] = 1;				                      //1 = y co-ordinate of the drop(same for every drop initially)	
					
function draw()					                                //drawing the characters
{
  ctx.fillRect(0, 0, c.width, c.height);                //translucent BG to show trail
  ctx.fillStyle = "#008F11";                               //green text
  ctx.font = font_size + "px arial";                                                	
  for(var i = 0; i < drops.length; i++)                 //looping over drops
  {		
  var text = charSet[Math.floor(Math.random()*charSet.length)];         //a random chinese character to print		
  ctx.fillText(text, i*font_size, drops[i]*font_size);		              //x = i*font_size, y = value of drops[i]*font_size
  if(drops[i]*font_size > c.height && Math.random() > 0.975)            //sending the drop back to the top randomly after it has crossed the screen     //adding a randomness to the reset to make the drops scattered on the Y axis
  drops[i] = 0;
  drops[i]++;                                           		            //incrementing Y coordinate		
	}
}
setInterval(draw,100);
</script>