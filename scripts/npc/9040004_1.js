var status = -1;

function start(){
	action(1, 0, 0);
}

function action(mode, type ,selection) {
	if(mode == 0 && status == 0) {
		status --;
	} else if(mode == 1) {
		status ++;
	} else {
		cm.dispose();
		return;
	}
	
	if (status == 0) {
		var text="#v4080010##v4080009##v4080008##b#e<五子棋积分排行榜>#n#k#v4080007##v4080006##v4080005#\r\n\r\n";
		var top_list=cm.getMiniGameTop(122200,30);
		if(top_list!=null){
			for(var i=0;i<top_list.size();i++){
				var mgp=top_list.get(i);
				if(mgp==null){			
					continue;
				}
				text+="#d第 ["+(i+1)+"] 名   五子棋积分：#r#e"+mgp.getScore()+"#k#n     #d玩家："+mgp.getBuddyEntry().getName()+"#k\r\n";
			}
		}else{
			text+="没有积分数据\r\n";
		}		
		cm.sendOk(text);
		cm.dispose();
	} else if (status == 1){
		cm.dispose();
	} else {
		cm.dispose();
	}
}