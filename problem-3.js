function willSuccess(marks) {

    if(!Array.isArray(marks)){
        return "Invalid"

    }
    let passed = [];
    let fail = [];


    for(let mark of marks){
        if(mark > 50){
            passed.push(mark)
        }
        else{
            fail.push(mark)
        }
        if(passed.length > fail.length && passed.length !== fail.length){
            return true
        }
    }
    return false
}

const numbers = [60, 70, 80, 40, 30]

const output = willSuccess (numbers);
console.log(output)