function calculateSleepTime(times){
    for(let i = 0; i < times.length; i++){
        if(typeof times[i] !== "number"){
            return "Invalid"
        }
    }

      let sec = 0;
    for(let i = 0; i < times.length; i++){
        sec = sec + times[i]
    
    }
    let min = parseInt (sec / 60);
   let secend = sec % 60;
   let hour = parseInt (min / 60)

    let minute = min % 60;
    min = minute;
    return {"Hour" : hour, "Minute" : minute, "second" : secend} 
}
// const time = [1000, 499, 519, 300];
const output = calculateSleepTime([100, 3800, "90" ]);
console.log(output)