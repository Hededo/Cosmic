function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("Enjoy your adventure in Brekke MS!");
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("Enjoy your adventure in Brekke MS!");
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("Welcome to Maple Story! Would you like to skip the tutorials and head straight to Lith Harbor?");
        } else if (status == 1) {
            cm.warp(104000000, 0);
            cm.dispose();
        }

        // TODO: SPACE OUT EQUIPS THRUOUT MAPLE ISLAND QUESTS
        // REWARD SKILL ON A QUEST

        // Reward Equips
        // var hat = qm.createEquipWith(1002068);
        // hat.setDex(1);
        // hat.setInt(1);
        // hat.setStr(1);
        // hat.setLuk(1);
        // hat.setHp(30);
        // hat.setMp(30);
        // hat.setWdef(20);
        // hat.setMdef(20);
        // hat.setJump(7);
        // hat.setSpeed(7);
        // hat.setItemLevel(1);
        // qm.addEquipToInventory(hat)

        // var workgloves = qm.createEquipWith(1082002);
        // workgloves.setAcc(5);
        // workgloves.setWatk(1);
        // workgloves.setMatk(1);
        // workgloves.setJump(3);
        // workgloves.setSpeed(3);
        // qm.addEquipToInventory(workgloves);

        // var mitten = qm.createEquipWith(1472063);
        // mitten.setJump(3);
        // mitten.setSpeed(3);
        // mitten.setWatk(30);
        // qm.addEquipToInventory(mitten);

        //     var sandals = cm.createEquipWith(1072005);
        //     sandals.setJump(2);
        //     sandals.setSpeed(3);
        //     sandals.setWdef(10);
        //     sandals.setMdef(10);
        //     sandals.setItemLevel(3);
        //     cm.addEquipToInventory(sandals)

        //     var umbrella = cm.createEquipWith(1302017);
        //     umbrella.setStr(2);
        //     umbrella.setInt(2);
        //     umbrella.setSpeed(3);
        //     umbrella.setJump(3);
        //     umbrella.setMatk(30);
        //     umbrella.setWatk(30);
        //     umbrella.setItemLevel(3);
        //     cm.addEquipToInventory(umbrella);

        // qm.gainItem(2060003, 2000);

        //     cm.sendOk("Enjoy your time in Brekke MS!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v1072005# 1 #t1072005#\r\n#v1302017# 1 #t1302017#");
        // } else {
        //     cm.sendOk("Enjoy your time in Brekke MS!")
        // }
        // cm.dispose();
    }
}