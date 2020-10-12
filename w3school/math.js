document.getElementById("pi_value").innerHTML = Math.PI;

document.getElementById("round_value").innerHTML =
" Math.round(4.7) : "+ Math.round(4.7) + 
"<br> Math.round(4.3) : " + Math.round(4.3) +
"<br> Math.round(4.5) : " + Math.round(4.5);


document.getElementById("math_methods").innerHTML = 
" Math.pow( 8,2 ) : " + Math.pow(8,2) +
"<br> Math.sqrt( 64 ) : " + Math.sqrt(64) +
"<br> Math.abs( -4.7 ) : " + Math.abs(-4.7) +
"<br> Math.ceil( 4.4 ) : " + Math.ceil(4.4) +
"<br> Math.floor( 4.7 ) : " + Math.floor(4.7);



document.getElementById("math_angel").innerHTML = 
"The sine value of 90 degrees is Math.sin( 90 * Math.PI/180 ) : " + Math.sin(90 * Math.PI / 180) +
"<br>The cosine value of 0 degrees is Math.cos( 0 * Math.PI/180 ) : " + Math.cos(0 * Math.PI / 180);


document.getElementById("max_min").innerHTML = 
"Max and Min Value Of (12,3,34,2,-334,-23,23,12332) :<br> "
+ Math.max(12, 3, 34, 2, -334, -23, 23, 12332) + 
"<br>" + Math.min(12, 3, 34, 2, -334, -23, 23, 12332);


document.getElementById("random_number").innerHTML = 
"Random Number : " + Math.random();