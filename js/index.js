
function* generateSec() {
    let sec = 0;
    if (sec <= 59 ) {
        var setI = setInterval( () => {
            console.log(sec + "sec");
            sec++;
        }, 1000);
    }else
    {
        clearInterval(setI);
    }
    

   yield sec;
}

  
function* generateMinutes() {
   
   let min = 0;
    // for (let i = 0; i <= 59; i++ ) {
        console.log(min + "min");
        yield* generateSec();
        min++;
    // }
  
}

function* generateHours() {
   let h = 0;
    // for( let i = 0; i<= 11; i++ ) {
        console.log(h+"h");
        yield* generateMinutes();
        h++;
    // }
   
}

let generatorH = generateHours();
for ( let h = 0; h <= 3599; h++) {
    generatorH.next();

}

// function* generateSec() {
//     let sec = 0;
//     setInterval( () => {
//         console.log(sec + "sec");
//         sec++;
//     }, 1000);

//    yield sec;
// }

  
// function* generateMinutes() {
   
   
//     for (let i = 0; i <= 59; i++ ) {
//         console.log(i + "min");
//         yield* generateSec();
//     }
  
// }

// function* generateHours() {
   
//     for( let i = 0; i<= 11; i++ ) {
//         console.log(i+"h");
//         yield* generateMinutes();
//     }
   
// }

// let generatorH = generateHours();
// for ( let h = 0; h <= 3599; h++) {
//     generatorH.next();

// }
