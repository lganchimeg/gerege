img = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png","img1.png", "img2.png","img3.png","img4.png","img5.png","img6.png","img7.png","img8.png"];
firstImg="";
firstElement="";
count=0;
t = 60;
winCounter = 8;
myVar;

function randomImg(){
	for(i=0; i<img.length; i++){
		r = Math.floor(Math.random()*15);
		temp = img[i];
		img[i] = img[r];
		img[r] = temp;
	}
	console.log(img);
}

randomImg();

function changeImg(index, element){
	element.setAttribute('src', "img/"+img[index]);
	
		if(count == 0) {
			count++;
			firstImg = img[index];
			firstElement = element;
		}
		else{
			setTimeout(function(){
				if(firstImg == img[index] && firstElement != element){
					firstElement.style.visibility = "hidden";
					element.style.visibility = "hidden";
					winCounter--;
					if(winCounter == 0){
						alert("Congratulations! "+player+" won in "+t+" seconds");
						location.reload();
					}
					count=0;
				}
				else{
				firstElement.setAttribute('src', "img/back.png");
				element.setAttribute('src', "img/back.png");
				count=0;
				}
			}, 1000);
		}
}
function startGame(){
	count=0;
	t = 60;
	winCounter = 8;
	document.getElementsByTagName("button")[0].disabled = true;
	player = prompt("Player name:");
	document.getElementById("player").innerHTML = player;
	myVar = setInterval(myTimer, 1000);
}
function myTimer(){
		if(t==0){
			clearInterval(myVar);
			alert("You Lost!");
			document.getElementsByTagName("button")[0].disabled = false;
		}
		else {
			t--;
			document.getElementById("timer").innerHTML = "Time: "+t;
		}
	}

