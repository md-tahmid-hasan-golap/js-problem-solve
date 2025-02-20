function validProposal(boysBioData, girlBiaData) {
    if(typeof boysBioData !== "object" || typeof girlBiaData !== "object"){
        return "Invalid"
    }
    if(boysBioData.gender !== girlBiaData.gender){
        if(Math.abs (boysBioData.age - girlBiaData.age) <= 7){
            return true
        }
    }
  return false
}

const person1 = { name: "Rahul", gender: "male", age: 28 };
const person2 = { name: "Joya", gender: "female", age: 21 };


const output = validProposal (person1, person2)
console.log(output)