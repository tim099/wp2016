var count=1;

function display_alert(){
  	alert("you click:"+count.toString()+" times");
  	count=count+1;
}
var pic_num=1;
document.querySelector(".but2").onclick = function() {
	update_pic();
}
var timer = setInterval(update_pic, 2500);

function update_pic() {
	if(pic_num<3){
		pic_num=pic_num+1;
	}else{
		pic_num=1;
	}
  	var myImage = document.querySelector(".pic1");
  	myImage.setAttribute("src","./files/0"+pic_num.toString()+".jpg");
}