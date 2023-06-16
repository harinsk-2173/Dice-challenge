

var randNum1=Math.floor(Math.random()*6)+1;

var randImg1="images/dice"+randNum1+".png";

var img1=document.querySelectorAll("img")[0].setAttribute("src",randImg1);

var randNum2=Math.floor(Math.random()*6)+1;

var randImg2="images/dice"+randNum2+".png";

var img2=document.querySelectorAll("img")[1].setAttribute("src",randImg2);

if(randNum1 > randNum2)
   document.querySelector("h1").textContent="👉Player 1 wins";
else if(randNum2 > randNum1)
   document.querySelector("h1").textContent="👉Player 2 wins";
else 
   document.querySelector("h1").textContent="Match draww!";   
     

// var cht=document.querySelector("h1").textContent;
// cht="Player 1 is the winner";
// var cht1=document.querySelector("h1").textContent;
// cht="Player 2 is the winner";
