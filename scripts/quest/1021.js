/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* Author: Xterminator
 * Edited by XxOsirisxX

	NPC Name: 		Roger
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Quest - Roger's Apple
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 0 && type > 0) {
            qm.dispose();
            return;
        }

        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            qm.sendNext("Hey, " + (qm.getPlayer().getGender() == 0 ? "Man" : "Miss") + "~ What's up? Haha! I am Roger who can teach you adorable new Maplers lots of information.");
        } else if (status == 1) {
            qm.sendNextPrev("You are asking who made me do this? Ahahahaha!\r\nMyself! I wanted to do this and just be kind to you new travellers.");
        } else if (status == 2) {
            qm.sendAcceptDecline("So..... Let me just do this for fun! Abaracadabra~!");
        } else if (status == 3) {
            if (qm.getPlayer().getHp() >= 50) {
                qm.getPlayer().updateHp(25);
            }

            if (!qm.haveItem(2010007)) {
                qm.gainItem(2010007, 1);
            }

            qm.forceStartQuest();
            qm.sendNext("Surprised? If HP becomes 0, then you are in trouble. Now, I will give you #trRoger's Apple#k. Please take it. You will feel stronger. Open the Item window and double click to consume. Hey, it's very simple to open the Item window. Just press #tbI#k on your keyboard.");
        } else if (status == 4) {
            qm.sendPrev("Please take all Roger's Apples that I gave you. You will be able to see the HP bar increasing. Please talk to me again when you recover your HP 100%.");
        } else if (status == 5) {
            qm.showInfo("UI/tutorial.img/28");
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 0 && type > 0) {
            qm.dispose();
            return;
        }

        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            if (qm.c.getPlayer().getHp() < 50) {
                qm.sendNext("Hey, your HP is not fully recovered yet. Did you take all the Roger's Apple that I gave you? Are you sure?");
                qm.dispose();
            } else {
                qm.sendNext("How easy is it to consume the item? Simple, right? You can set a #tbhotkey#k on the right bottom slot. Haha you didn't know that! right? Oh, and if you are a beginner, HP will automatically recover itself as time goes by. Well it takes time but this is one of the strategies for the beginners.");
            }
        } else if (status == 1) {
            qm.sendNextPrev("Alright! Now that you have learned alot, I will give you a present. This is a must for your travel in Maple World, so thank me! Please use this under emergency cases!");
        } else if (status == 2) {
            qm.sendPrev("Okay, this is all I can teach you. I know it's sad but it is time to say good bye. Well take care if yourself and Good luck my friend!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v1002068# 1 #t1002068#\r\n#v1072005# 1 #t1072005#\r\n#v1082002# 1 #t1082002#\r\n#v1472063# 1 #t1472063#\r\n#v1302017# 1 #t1302017#\r\n#v2010001# 200 #t2010001#\r\n#v2010004# 200 #t2010004#\r\n#v2060003# 2000 #t2060003#\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
        } else if (status == 3) {
            if (qm.isQuestCompleted(1021)) {
                qm.dropMessage(1, "Unknown Error");
            } else if (qm.canHold(2010000) && qm.canHold(2010009)) {
                // Reward EXP
                qm.gainExp(10);

                // Reward Items
                qm.gainItem(2010001, 200);
                qm.gainItem(2010004, 200);
                qm.gainItem(2060003, 2000);

                // TODO: SPACE OUT EQUIPS THRUOUT MAPLE ISLAND QUESTS
                // REWARD SKILL ON A QUEST

                // Reward Equips
                var hat = qm.createEquipWith(1002068);
                hat.setDex(1);
                hat.setInt(1);
                hat.setStr(1);
                hat.setLuk(1);
                hat.setHp(30);
                hat.setMp(30);
                hat.setWdef(20);
                hat.setMdef(20);
                hat.setJump(7);
                hat.setSpeed(7);
                hat.setItemLevel(1);
                qm.addEquipToInventory(hat)

                var sandals = qm.createEquipWith(1072005);
                sandals.setJump(5);
                sandals.setSpeed(5);
                sandals.setWdef(10);
                sandals.setMdef(10);
                sandals.setItemLevel(1);
                qm.addEquipToInventory(sandals)

                var workgloves = qm.createEquipWith(1082002);
                workgloves.setAcc(5);
                workgloves.setWatk(1);
                workgloves.setMatk(1);
                workgloves.setJump(3);
                workgloves.setSpeed(3);
                qm.addEquipToInventory(workgloves);

                var mitten = qm.createEquipWith(1472063);
                mitten.setJump(3);
                mitten.setSpeed(3);
                mitten.setWatk(30);
                qm.addEquipToInventory(mitten);

                var umbrella = qm.createEquipWith(1302017);
                umbrella.setStr(2);
                umbrella.setInt(2);
                umbrella.setSpeed(3);
                umbrella.setJump(3);
                umbrella.setMatk(30);
                umbrella.setWatk(30);
                qm.addEquipToInventory(umbrella);

                qm.forceCompleteQuest();
            } else {
                qm.dropMessage(1, "Your inventory is full");
            }
            qm.dispose();
        }
    }
}