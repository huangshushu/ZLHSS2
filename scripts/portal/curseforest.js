var data = new Date();
var hour = data.getHours();
var map;

function enter(pi) {
	if(hour >= 17 ) {
		map = 910100000;
	}else if(hour <= 7 ) {
		map = 910100000;
	}else{
		map = 910100001;
	}
    pi.warp(map, 0); 
}