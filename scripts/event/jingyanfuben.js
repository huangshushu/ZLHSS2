function init(){
	em.setProperty("state","0");
	em.setProperty("leader","true")
	}
function setup(a,b){
	em.setProperty("state","1");
	em.setProperty("preheadCheck","0");
	em.setProperty("leader","true");
	a=em.newInstance("monv");
	a.setInstanceMap(803011200).resetFully();
	a.startEventTimer(360000);
	return a
	}
function playerEntry(a,b){
var c=a.getMapFactory().getMap(803011200);
b.changeMap(c,c.getPortal(0))
}
function changedMap(a,b,c){
switch(c){
	case 803011200:return
	}
	a.unregisterPlayer(b);
	a.disposeIfPlayerBelow(0,0)&&(em.setProperty("state","0"),em.setProperty("leader","true"))
	}
function playerDisconnected(a,b){
	return 0
	}
function scheduledTimeout(a){
	a.disposeIfPlayerBelow(100,910000000);
	em.setProperty("state","0");
	em.setProperty("leader","true")
	}
function playerExit(a,b){
	a.unregisterPlayer(b);
	a.disposeIfPlayerBelow(0,0)&&(em.setProperty("state","0"),em.setProperty("leader","true"))
	}
function monsterValue(a,b){return 1}
function allMonstersDead(a){}
function playerRevive(a,b){return!1}
function clearPQ(a){}
function leftParty(a,b){}
function disbandParty(a){}
function playerDead(a,b){}
function cancelSchedule(){};