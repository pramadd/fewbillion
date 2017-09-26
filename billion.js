var x=1;
var total=1;
 billion(total)


function billion(someValue){
    for(i=1;i<30;i++){
        x=x*2;
        total=total+x;
    }
}

console.log("After 30 days total reward is " +total)

