/*
 
 脚本：旅周末市场
 */

status = -1;
var sel, sel2;

function start() {
  cm.说明文字(
    "	  Hi~#b#h ##k 今天集市开业了，你想不想进去换购一点好东西呢？不过目前不开放哦，还是不要去的好。"
  ); //\r\n\r\n#L0#让我去集市#
  cm.dispose();
  return;
}

function action(mode, type, selection) {
  status++;
  if (status == 6 && mode == 1) {
    sel2 = undefined;
    status = 0;
  }
  if (mode != 1) {
    if (mode == 0 && type == 0) status -= 2;
    else {
      cm.dispose();
      return;
    }
  }
  if (status == 0) {
    if (sel == undefined) sel = selection;
    if (selection == 0) {
      cm.sendNext("好了，我将送你到集市地图.");
    } else
      cm.sendSimple(
        "请问您想了解集市哪部分??#b\r\n#L0#那是什么地方??\r\n#L1#能在集市干什么事情??\r\n#L2#我没有任何问题"
      );
  } else if (status == 1) {
    if (sel == 0) {
      cm.saveLocation("EVENT");
      cm.warp(680100000 + parseInt(Math.random() * 3));
      cm.dispose();
    } else if (selection == 0) {
      cm.sendNext(
        "集市只有在假日开放。如果您在其他城镇发现我也可以在那找到我进入, 我几乎无所不在!!!"
      );
      status -= 2;
    } else if (selection == 1)
      cm.sendSimple(
        "你可以在集市找到其他地方很难找到的罕见商品.#b\r\n#L0#购买特殊物品\r\n#L1#帮助家禽农场业主"
      );
    else {
      cm.sendNext(
        "我猜你没有任何问题，假如你好奇请让我猜你的想法并询问你烦恼什么~"
      );
      cm.dispose();
    }
  } else if (status == 2) {
    if (sel2 == undefined) sel2 = selection;
    if (sel2 == 0)
      cm.sendNext(
        "你可以找到许多道具在集市,价格很容易有变动,所以你最好在他改变价格前往采买,因为他们变动的时候很便宜的!!"
      );
    else
      cm.sendNext(
        "除了商人你还可以找到养鸡场煮人在集市里面,帮助咪咪和她孵化的蛋,直到鸡长大变成一只好吃的鸡!"
      );
  } else if (status == 3) {
    if (sel2 == 0)
      cm.sendNextPrev(
        "在这里进行的购买可以卖回给商家的中介，阿杜兰。他不会接受任何超过一个星期的时候，所以在周六确保你再卖！"
      );
    else
      cm.sendNextPrev(
        "由于她不能只相信任何人的鸡蛋，她会问保证金。支付她的存款，并采取卵子照顾好."
      );
  } else if (status == 4) {
    if (sel2 == 0)
      cm.sendNextPrev(
        "阿度兰调整他的倒卖率一样，所以这将是明智的，卖的时候就可以使最大的利润。价格往往波动小时，所以记得要经常检查."
      );
    else
      cm.sendNextPrev(
        "如果您管理蛋成功成长为鸡拿回咪咪，咪咪会报答你。她可能是懒惰的，但她不领情."
      );
  } else if (status == 5) {
    if (sel2 == 0)
      cm.sendNextPrev(
        "通过购买善于在集市价格出售给商家的中介时，其价值上升测试你的业务的机智！"
      );
    else
      cm.sendNextPrev(
        "您可以在鸡蛋点击查看关于它的增长。你必须用勤奋，因为你获得和鸡蛋一起成长的EXP鸡蛋。"
      );
  }
}
