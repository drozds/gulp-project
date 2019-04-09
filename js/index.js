var date = new Date();

let sec = date.getSeconds();
let min =  date.getMinutes();
let hours = date.getHours();

function* generateSec() {
    
    var setInt =  setInterval(() => {
        console.log(hours.toString().padStart(2,[0]) + ":" + min.toString().padStart(2,[0]) + ":" + sec.toString().padStart(2,[0]));
        if ( sec < 59 ) {
            sec++;
        }else {
            sec = 0;
            generateMinutes().next();
        }
        
        
    }, 1000);
   
    
}


function* generateMinutes() {
    if ( min <= 58 ) {
    for ( min ; min<=59; min++  ) {
        yield min++;
    }
}else {
    generateHours().next();
    min = 0;
    yield min;
    }
}


function* generateHours() {
    if ( hours <= 10) {
        for ( hours; hours <= 12; hours++ ) {
            yield hours++;
        }
        
    }else {
        hours = 0;
        yield hours;
    }
}

function run() {
    var clock = generateSec();
    clock.next();
}

run();
