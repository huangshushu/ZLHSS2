var status;
var mounts;

//Declaration of requirements:
var price;
var itemprice;
//End declaration of requirements

function start() {
    status = -1;
    loadMounts(cm.getJob());
    if (mounts != null) {
        sendMountSelection();
    } else {
        cm.sendNext("Sorry but I can't give you any mounts.");
    }
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    mode == 0 ? status-- : status++;
    switch (status) {
        case 0:
            sendPrice(mounts[selection]);
            break;
        case 1:
            giveMount(mounts[selection]);
            break;
        default:
            cm.dispose();
            break;
    }
}

function loadMounts(job) {
    switch (job - (job % 1000)) {
        case 0:
            mounts = [[1902000, 1912000], [1902001, 1912000], [1902002, 1912000]]; //Pork
            if (job - (job % 100) == 51) {
                mounts.push([1203, 0]); //Super Transformation
            } else if (job - (job % 100) == 51) {
                mounts.push([1204, 0]); //Battleship
            }
            break;
        case 1:
            mounts = [[1902005, 1912005], [1902006, 1912005], [1902007, 1912005]]; //Chickens
            break;
        default:
            mounts = null;
    }
    if (mounts == null) {
        switch (job - (job % 100)) {
            case 21:
                mounts = [[1902015, 191201], [1902016, 1912000], [1902017, 1912000], [1902018, 1912000]]; //Dogs
                break;
            case 22:
                mounts = [[1902040, 1912033], [1902041, 1912034], [1902042, 1912035]]; //Flying Dinosaurs
                break;
            case 23:
                mounts = [[20021160, 0], [20021161, 0]]; //Ponies
                break;
            case 24:
                mounts = [[20031160, 0], [20031161, 0]]; //Mazda III
                break;
            case 31:
                mounts = [[30011109, 0], [30011159, 0]]; //Wings are made to fly
                break;
            default:
                mounts = null;
        }
    }
}

function sendMountSelection() {
    var selStr = "Hello! I sell Mounts! It seems that you are eligible for the following:\r\n";
    for (var i = 0; i < mounts.length; i++) {
        if (mounts[i][1] == 0) {
            selStr += "#L" + i + "##s" + mounts[i][0] + "##q" + mounts[i][0] + "##l\r\n";
        } else {
            selStr += "#L" + i + "##i" + mounts[i][0] + "##z" + mounts[i][1] + "##l\r\n";
        }
    }
    cm.sendSimple(selStr);
}

function sendPrice(mount) {
    if (hasMount(mount[0])) {
        cm.sendOk("You already have this mount.");
        cm.dispose();
        return;
    }
    var selStr = "Are you sure you want this mount? You will need the following...\r\n\r\n#r";
    if (getItemPrice(mount[0]) != 0) {
        if (getItemPrice(mount[0])[1] == 0) {
            selStr += "#s" + getItemPrice(mount[0])[0] + "# skill obtained\r\n";
        } else {
            selStr += "#i" + getItemPrice(mount[0])[0] + "# x1\r\n";
            selStr += "#i" + getItemPrice(mount[0])[1] + "# x1\r\n";
        }
    }
    selStr += "" + getPrice(mount) + " mesos\r\n";
    cm.sendYesNo(selStr);
}

function getPrice(mount) {
    for (var i = 0; i < mounts.length; i++) {
        if (mounts[i][0] == mount && i == 0) {
            return 15000000; //15,000,000
        }
    }
    return 25000000; //25,000,000
}

function getItemPrice(mount) {
    for (var i = 0; i < mounts.length; i++) {
        if (mounts[i][0] == mount) {
            if (i == 0) {
                return 0;
            } else {
                return mounts[i - 1];
            }
        }
    }
    return 0;
}

function hasMount(mount) {
    return cm.getPlayer().getSkillLevel(mount[0]) > 0 && !cm.haveItem(mount[0], 1) || cm.getPlayer().getSkillLevel(mount[0]) < 1 && !cm.haveItem(mount[0], 1);
}

function giveMount(mount) {
    cm.gainMeso(-getPrice(mount[0]));
    if (mount[1] == 0) {
        cm.teachSkill(mount[0], 1);
    } else {
        cm.gainItem(mount[0], 1);
        cm.gainItem(mount[1], 1);
    }
    cm.sendOk("That was easy, wasn't it?");
    cm.dispose();
}