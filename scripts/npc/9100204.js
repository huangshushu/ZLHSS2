var status;
var chance;

function start() {
status = -1;
chance = (Math.random() * 122);
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == 1)
status++;
else {
cm.dispose();
return;
}
if (status == 0) {
cm.sendAcceptDecline("你好！ 我运行的游戏叫 #bC#ro#gl#do#br #rG#ga#dm#bb#rl#ge#k!你选择你想要游戏的颜色，并为每种颜色下注，然后看看球是否落在你的颜色上!");
}else if(status == 1){
//黑色 == 35%
//蓝色 == 35%
//red == 15%
//紫色 == 10%
//绿色 == 5%
cm.sendSimple("请做出选择: \r\n#e#L0#黑色 (25K 枫币) \r\n#b#L1#蓝色 (25K 枫币) \r\n#r#L2#Red (45K 枫币) \r\n#d#L3#紫色 (75k 枫币) \r\n#g#L4#绿色 (125K 枫币)");
}else if(selection == 0){
var chance = (Math.random() * 100);
if(cm.getMeso() >= 25000 && chance <= 40){
cm.sendOk("#e你的颜色选择: 黑色 \r\n#e#k球滚动: 黑色 \r\n\r\n你赢了!! 你收到 25,000 枫币!");
cm.gainMeso(25000);
cm.dispose();
}else if(cm.getMeso() >= 25000 && chance > 40 && chance <= 80){
cm.sendOk("#e你的颜色选择: 黑色 \r\n#e#k球滚动: #b蓝色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-25000);
cm.dispose();
}else if(cm.getMeso() >=25000 && chance > 80 && chance <= 105){
cm.sendOk("#e你的颜色选择: 黑色 \r\n#e#k球滚动: #rRed \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-25000);
cm.dispose();
}else if(cm.getMeso() >= 25000 && chance > 105 && chance <= 122){
cm.sendOk("#e你的颜色选择: 黑色 \r\n#e#k球滚动: #d紫色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-25000);
cm.dispose();
}else if(cm.getMeso() >= 25000 && chance > 95){
cm.sendOk("#e你的颜色选择: 黑色 \r\n#e#k球滚动: #g绿色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-25000);
cm.dispose();
}else{
cm.sendOk("你的$不够 枫币 想赊帐...");
cm.dispose();
}
}else if(selection == 1){
var chance = (Math.random() * 100);
if(cm.getMeso() >= 25000 && chance <= 35){
cm.sendOk("#e你的颜色选择: #b蓝色 \r\n#e#k球滚动: #k黑色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-25000);
cm.dispose();
}else if(cm.getMeso() >= 25000 && chance > 35 && chance <= 70){
cm.sendOk("#e你的颜色选择: #蓝色 \r\n#e#k球滚动: #b蓝色 \r\n\r\n你赢了!! 你收到 25,000 枫币!");
cm.gainMeso(25000);
cm.dispose();
}else if(cm.getMeso() >=25000 && chance > 70 && chance <= 85){
cm.sendOk("#e你的颜色选择: #b蓝色 \r\n#e#k球滚动: #rRed \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-25000);
cm.dispose();
}else if(cm.getMeso() >= 25000 && chance > 85 && chance <= 95){
cm.sendOk("#e你的颜色选择: #b蓝色 \r\n#e#k球滚动: #d紫色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-25000);
cm.dispose();
}else if(cm.getMeso() >= 25000 && chance > 95){
cm.sendOk("#e你的颜色选择: #b蓝色 \r\n#e#k球滚动: #g绿色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-25000);
cm.dispose();
}else{
cm.sendOk("你的$不够 枫币 想赊帐...");
cm.dispose();
}
}else if(selection == 2){
var chance = (Math.random() * 100);
if(cm.getMeso() >= 45000 && chance <= 35){
cm.sendOk("#e你的颜色选择: #rRed \r\n#e#k球滚动: #k黑色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-45000);
cm.dispose();
}else if(cm.getMeso() >= 45000 && chance > 35 && chance <= 70){
cm.sendOk("#e你的颜色选择: #rRed \r\n#e#k球滚动: #b蓝色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-45000);
cm.dispose();
}else if(cm.getMeso() >=45000 && chance > 70 && chance <= 85){
cm.sendOk("#e你的颜色选择: #rRed \r\n#e#k球滚动: #rRed \r\n\r\n你赢了!! 你收到 45,000 枫币!");
cm.gainMeso(45000);
cm.dispose();
}else if(cm.getMeso() >= 45000 && chance > 85 && chance <= 95){
cm.sendOk("#e你的颜色选择: #rRed \r\n#e#k球滚动: #d紫色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-45000);
cm.dispose();
}else if(cm.getMeso() >= 45000 && chance > 95){
cm.sendOk("#e你的颜色选择: #rRed \r\n#e#k球滚动: #g绿色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-45000);
cm.dispose();
}else{
cm.sendOk("你的$不够 枫币 想赊帐...");
cm.dispose();
}
}else if(selection == 3){
var chance = (Math.random() * 100);
if(cm.getMeso() >= 75000 && chance <= 35){
cm.sendOk("#e你的颜色选择: #d紫色 \r\n#e#k球滚动: #k黑色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-75000);
cm.dispose();
}else if(cm.getMeso() >= 75000 && chance > 35 && chance <= 70){
cm.sendOk("#e你的颜色选择: #d紫色 \r\n#e#k球滚动: #b蓝色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-75000);
cm.dispose();
}else if(cm.getMeso() >=75000 && chance > 70 && chance <= 85){
cm.sendOk("#e你的颜色选择: #d紫色 \r\n#e#k球滚动: #rRed \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-75000);
cm.dispose();
}else if(cm.getMeso() >= 75000 && chance > 85 && chance <= 95){
cm.sendOk("#e你的颜色选择: #d紫色 \r\n#e#k球滚动: #d紫色 \r\n\r\n你赢了!! 你收到 75,000 枫币!");
cm.gainMeso(75000);
cm.dispose();
}else if(cm.getMeso() >= 725000 && chance > 95){
cm.sendOk("#e你的颜色选择: #d紫色 \r\n#e#k球滚动: #g绿色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-75000);
cm.dispose();
}else{
cm.sendOk("你的$不够 枫币 想赊帐...");
cm.dispose();
}

}else if(selection == 4){
var chance = (Math.random() * 100);
if(cm.getMeso() >= 125000 && chance <= 35){
cm.sendOk("#e你的颜色选择: #g绿色 \r\n#e#k球滚动: #k黑色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-125000);
cm.dispose();
}else if(cm.getMeso() >= 125000 && chance > 35 && chance <= 70){
cm.sendOk("#e你的颜色选择: #g绿色 \r\n#e#k球滚动: #b蓝色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-125000);
cm.dispose();
}else if(cm.getMeso() >=125000 && chance > 70 && chance <= 85){
cm.sendOk("#e你的颜色选择: #g绿色 \r\n#e#k球滚动: #rRed \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-125000);
cm.dispose();
}else if(cm.getMeso() >= 125000 && chance > 85 && chance <= 95){
cm.sendOk("#e你的颜色选择: #g绿色 \r\n#e#k球滚动: #d紫色 \r\n\r\n你输了!! 对不起，你可以再玩一次!");
cm.gainMeso(-125000);
cm.dispose();
}else if(cm.getMeso() >= 125000 && chance > 95){
cm.sendOk("#e你的颜色选择: #g绿色 \r\n#e#k球滚动: #g绿色 \r\n\r\n你赢了!! 你收到 125,000 枫币!");
cm.gainMeso(125000);
cm.dispose();
}else{
cm.sendOk("你的$不够 枫币 想赊帐...");
cm.dispose();
}
}
}
