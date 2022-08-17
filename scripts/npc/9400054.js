var status;

var maps = Array(

  867110100, // 激光保安室 - 超空间魔方
  867110150, // 等离子动力室 - 超空间魔方
  867110200, //生物反应炉 - 超空间魔方
  867110300, //反重力室 - 超空间魔方
  867110350, //焚烧室 - 超空间魔方
  867110400, //射击炮塔 - 超空间魔方
  867110450, //等离子融合室 - 超空间魔方
  867110500, //意外的会面 - 超空间魔方
  867110250
);


var rand = Math.floor(Math.random() * maps.length);



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
	cm.dispose();
	return;
    } else if (mode == 1){
	status++;
    } else {
	status--;
    }

    switch (status) {
        case 0: 
        
            var mapid =cm.getMapId();
            var modnumber = cm.getMonsterCount(mapid);
            if(modnumber == 0){
                map = maps[rand];
                cm.warpParty(map);
                cm.dispose();
            }else if(modnumber == 2 && mapid ==867110100){
                map = maps[rand];
                cm.warpParty(map);
                cm.dispose();

            }else if(modnumber == 1 && mapid == 867110150){
                map = maps[rand];
                cm.warpParty(map);
                cm.dispose();

            }else{
                cm.sendOk("剩余怪物数量："+modnumber);
                cm.dispose();
            }
            break;
    
    }
}
