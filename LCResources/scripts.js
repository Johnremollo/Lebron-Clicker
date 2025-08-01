let dmg = document.getElementById("dmg")
let mone = document.getElementById("Mone")
let LP = document.getElementById("LP")

/*buyables!*/
 let B1 = document.getElementById("C1")
 let B2 = document.getElementById("C2")
let B3 = document.getElementById("C3")

/*extras*/

var Cmone = 0
var Cdmg = 1
var time = 0
var cti = cti
var ctii = 0
var ctif = 0
var fun = 0
const bcrit = .8
var crit = 1.04
var luck = 1.0
var cd = 1.2

/*Debug*/
setInterval(function() {
    cti += 0.001
}, 1);
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

LP.onclick = async function() 
{   
    if (time==0) {
        fun = (
            bcrit * (1 + crit) * (1 - .2)
        )
        if (fun >= 1) {
            Cmone += Math.round(Cdmg * cd);
        }
        fun = 0


        
        /*
        time = 10
        ctii= performance.now()
        console.log("Initial Time: " + cti)
        console.log("Counting")
        
        for (let i = 10; i >= 1; i--) {
            time--
            await wait(1); 
            console.log("During: " + performance.now());
        }
        ctif = performance.now();
        console.log("Final Time: " + ctif + ", Difference: " + (performance.now() - ctii) + "ms");
        console.log("");
    } else{
        console.log("too fast!")
    */
    }
        
};
B1.onclick = function() {
    if (Cmone >= 50) {
        Cmone -= 50
        Cdmg += 1
        console.log("Bought!")
    } else {
        console.log("Brokie!")
    }
}
B2.onclick = function() {
    if (Cmone >= 1000) {
        Cmone -= 1000
        Cdmg += 25
        console.log("Bought!")
    } else {
        console.log("Brokie!")
    }
}
B3.onclick = function() {
    if (Cmone >= 40000) {
        Cmone -= 40000
        Cdmg += 100
        console.log("Bought!")
    } else {
        console.log("Brokie!")
    }
}

/* Content Update */
setInterval(function() {
    mone.textContent = Cmone + "¢";
    dmg.textContent = Cdmg;
}, 2);