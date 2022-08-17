/* 
 * 跑旗赛
   脚本制作人：AND QQ：358122354
   欢迎咨询制定脚本。
 */
function enter(pi) {
	var em = pi.getEventManager("PQS");
	if (em==null){
		pi.playerMessage(5,"副本出错，请联系管理员");
		return;
	}
	if (em.getProperty("gate")=="2"){
		pi.warp(932200100,16);
	}else{
		pi.playerMessage(5, "不要着急，还没开始哦！");
		return;
	}
}