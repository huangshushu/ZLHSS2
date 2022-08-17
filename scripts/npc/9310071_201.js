
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
text += "回收武器必成卷可获得#v4000487#十个\r\n回收小暴君可获得#v4000487#十个\r\n"
            text += "#L1#单手剑#L2#双手剑#L3#枪#L4#矛#L5#长杖#L6#弓\r\n#L7#弩#L8#拳套#L9#短剑#L10#短枪#L11#拳甲#L12#双手钝器\r\n#L21#战士系列小暴君披风#L22#暴君鞋子#L23#暴君腰带\r\n#L31#法师系列小暴君披风#L32#暴君鞋子#L33#暴君腰带\r\n#L41#弓手系列小暴君披风#L42#暴君鞋子#L43#暴君腰带\r\n#L51#飞侠系列小暴君披风#L52#暴君鞋子#L53#暴君腰带\r\n#L61#海盗系列小暴君披风#L62#暴君鞋子#L63#暴君腰带\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2043003,1) ){
				cm.gainItem(2043003,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 2) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2044003,1) ){
				cm.gainItem(2044003,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 3) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2044303,1) ){
				cm.gainItem(2044303,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 4) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2044403,1) ){
				cm.gainItem(2044403,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 5) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2043803,1) ){
				cm.gainItem(2043803,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 6) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2044503,1) ){
				cm.gainItem(2044503,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 7) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2044603,1) ){
				cm.gainItem(2044603,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}1482216
        } else if (selection == 8) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2044703,1) ){
				cm.gainItem(2044703,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 9) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2043303,1) ){
				cm.gainItem(2043303,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 10) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2044908,1) ){
				cm.gainItem(2044908,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 11) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2044815,1) ){
				cm.gainItem(2044815,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 12) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(2044203,1) ){
				cm.gainItem(2044203,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 21) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1102476,1) ){
				cm.gainItem(1102476,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 22) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1072737,1) ){
				cm.gainItem(1072737,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 23) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1132169,1) ){
				cm.gainItem(1132169,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 31) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1102477,1) ){
				cm.gainItem(1102477,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 32) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1072738,1) ){
				cm.gainItem(1072738,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 33) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1132170,1) ){
				cm.gainItem(1132170,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 41) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1102478,1) ){
				cm.gainItem(1102478,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 42) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1072739,1) ){
				cm.gainItem(1072739,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 43) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1132171,1) ){
				cm.gainItem(1132171,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 51) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1102479,1) ){
				cm.gainItem(1102479,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 52) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1072740,1) ){
				cm.gainItem(1072740,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 53) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1132172,1) ){
				cm.gainItem(1132172,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 61) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1102480,1) ){
				cm.gainItem(1102480,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 62) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1072741,1) ){
				cm.gainItem(1072741,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
        } else if (selection == 63) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
						}else */if(cm.haveItem(1132173,1) ){
				cm.gainItem(1132173,-1);//冒险岛收藏家
				cm.gainItem(4000487,10);//冒险岛收藏家
           		        cm.dispose();
			}else{
           		 cm.sendOk("您的材料不足！");
            		cm.dispose();
			}
		}
 	
    }
}


