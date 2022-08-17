
function enter(pi) {
    if (!pi.haveItem(9999999)) {
	pi.warp(262030100,0);
    } else {
	pi.playerMessage("你没有被许可进入！~");
    }
}