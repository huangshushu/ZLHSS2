var status = 0;    

function start() {    
    status = -1;    
    action(1, 0, 0);    
}    

function action(mode, type, selection) {    
         
    if (mode == -1) {    
        cm.dispose();    
    }    
    else {     
        if (status >= 2 && mode == 0) {     
            cm.sendOk("Goodbye");     
            cm.dispose();     
            return;     
        }     
            
        if (mode == 1) {    
            status++;    
        }        
        else {    
            status--;    
        }    
            
        if (status == 0) {   
            cm.sendNext("I summon for #bChickenMS#l. I summon 10 monsters at a time for free.");  
        }  
        else if (status == 1) {  
   cm.sendSimple("Please remember I will summon 10. \r\nPlease choose #b\r\n#L0#Snail#l\r\n#L1#Turkey\r\n#L2#Rooster#l\r\n#L3#White Roosterl\r\n#L4#Rooster#l\r\n#L5#Turkey Comonddo#l\r\n#L7#Clear Drops#l\r\n#L8#Kill All Monsters#l");
        } 
        else if (status == 2) {
        
        if (selection == 0) {  
            cm.summonMob(100100, 1000, 596000, 10);
            cm.dispose();
        }  

        else if (selection == 1) {  
            cm.summonMob(9400505, 1000, 3000, 10);
            cm.dispose();  
        } 
        else if (selection == 2) {
            cm.summonMob(9600001, 1000, 1000, 10);
            cm.dispose();  
        }
        else if (selection == 3) {
            cm.summonMob(9600001, 1000, 3000, 10);
            cm.dispose();  
        }
        else if (selection == 4) {
            cm.summonMob(9420005, 1000, 3000, 10);
            cm.dispose();  
        }
        else if (selection == 5) {
            cm.summonMob(9400575, 1000, 2600, 10);
            cm.dispose();  
        }
        else if (selection == 6) {
            cm.summonMob(9400568, 20000, 1200, 10);
            cm.dispose();  
        }
        else if (selection == 7) {
            cm.cleardrops();
            cm.dispose();  
        }
        else if (selection == 8) {
            cm.killAllMonsters(true);
            cm.dispose();  
        }
        }  
    } 
}  