var x;
var z;
var sumX=0;
var sumZ=0;


	function main(){

		x=Math.floor(Math.random()*6)+1;
		z=Math.floor(Math.random()*6)+1;

		document.querySelector("#img-1").setAttribute("src","img/dice" + x + ".png");
		document.querySelector("#img-2").setAttribute("src","img/dice" + z + ".png");

		sumX= sumX + x;
		document.querySelector(".P1-S").innerHTML = "Player 1: " + sumX; 
		sumZ= sumZ + z;
		document.querySelector(".P2-S").innerHTML = "Player 2: " + sumZ;
	}