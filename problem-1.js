function calculateVAT(Ammount) {

    if(typeof Ammount !== "number" || Ammount < 0){
        return "Invalid"
    }
    const vat = Ammount * 7.5 / 100;
    return vat

}

const output = calculateVAT(1200);
console.log(output)