function validContact(contact ) {
    if(typeof contact !== "string"){
        return "Invalid"
    }

    if(contact.length !== 11){
        return false
    }
    if(!contact.startsWith("01")){
        return false
    }
    if(contact === " "){
        return false
    }
    else{
        return true
    }
}

const output = validContact ("01819234567");
console.log(output)