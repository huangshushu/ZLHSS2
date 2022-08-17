
importPackage(net.sf.odinms.client); 
importPackage(net.sf.odinms.tools); 
importPackage(net.sf.odinms.server);


var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);


	}

function action(mode, type, selection)
{
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("好的如果要出去随时来找我.");
		cm.dispose();
	}else 
	{
		if (mode == 1)
			status++;
		else
			status--;		
	if (status == 0)
	{		
		cm.sendYesNo(""+ cm.getChar().getName() +"你好,请前往市场寻找希克斯抢楼\r\n\r\n" );

		cm.dispose();	
	}
  }
}