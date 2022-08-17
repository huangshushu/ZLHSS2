var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 6 * 1;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
	var random = java.lang.Math.floor(Math.random() * 3 + 1);//���Ƶ��1-3Ƶ��
var mapid = java.lang.Math.floor(Math.random() * 4 + 1);//�����ͼһ��4����ͼ ����� ���� ���� ��ʿ
var BOSS = java.lang.Math.floor(Math.random() * 4 + 1);//�������BOSS	1-4��ѡ�����
var �����ʱ�� = 21;//19 = 19��
var �����ʱ�� = 10;//��ѡ����Ч��Ҳ���޸ģ�
var ����Ѫ��;
var bossid;
	if(BOSS <= 1){
		 bossid = 100100;
		����Ѫ�� = 1000;
	}else if(BOSS == 2){
		 bossid = 100101;
		����Ѫ�� = 1000;
	}else if(BOSS == 3){
		 bossid = 100120;
		����Ѫ�� = 1000;
	}else if(BOSS >= 4){
		 bossid = 100121;
		����Ѫ�� = 1000;
	}
	if(mapid <= 1){
    
	}else if(mapid == 2){
    
	}else if(mapid == 3){
    
	}else if(mapid >= 4){
    
	}
}