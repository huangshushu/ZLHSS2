/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  
 *  @Author Jackson 
 */

/* global em, java */

function init() {
    em.setProperty("state", "0");
}

function cancelSchedule() {
}

function rand(lbound, ubound) {
    return Math.floor(random.nextInt(ubound - lbound + 1)) + lbound;
}